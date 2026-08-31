// mcp-server/src/index.js — remote MCP server over the OKF corpus.
//
// Transport: MCP Streamable HTTP, stateless. One endpoint (POST /mcp) that
// takes a JSON-RPC message and answers with a single JSON response. No
// sessions, no SSE, no Durable Objects — this server is read-only, so there
// is no server->client stream to keep open.
//
// Storage: the corpus ships as Workers Static Assets (env.ASSETS). A Worker
// cannot enumerate that binding, so every listing comes from /index.json,
// which scripts/build-assets.mjs precomputes at build time.

const PROTOCOL_VERSION = '2025-06-18'
const SERVER_INFO = { name: 'kb-query', version: '2.0.0' }

// --- asset access ---------------------------------------------------------
const ASSET_ORIGIN = 'https://kb.internal'
const assetUrl = (p) => new URL('/' + p.split('/').map(encodeURIComponent).join('/'), ASSET_ORIGIN)

let indexCache = null
async function corpusIndex(env) {
  if (!indexCache) {
    const res = await env.ASSETS.fetch(assetUrl('index.json'))
    if (!res.ok) throw new Error(`corpus index unavailable (${res.status})`)
    indexCache = await res.json()
  }
  return indexCache
}

async function readDoc(env, rel) {
  const res = await env.ASSETS.fetch(assetUrl(`kb/${rel}`))
  return res.ok ? await res.text() : null
}

// --- tools ----------------------------------------------------------------
const TOOLS = [
  {
    name: 'kb_overview',
    description:
      'Map of the corpus: every board game (slug, title, year, weight, status, mechanics, '
      + 'better-if labels) plus the available pattern docs. Start here — it resolves most '
      + 'queries without reading any document body.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
    async run(env) {
      const ix = await corpusIndex(env)
      const lines = [`# BoardGames — ${ix.games.length} game(s)`]
      for (const g of ix.games) {
        lines.push(
          `- ${g.slug} — "${g.title}" (${g.year ?? '?'}, weight ${g.weight ?? '?'}, ${g.status ?? '?'})`,
          `  mechanics: ${g.mechanics.join(', ') || '(none)'}`,
          `  better-if: ${g.better_if_labels.join(', ') || '(none)'}`,
          `  docs: ${g.docs.length}`,
        )
      }
      lines.push(
        `# Patterns — ${ix.patterns.length} doc(s)`,
        ...ix.patterns.map((p) => `- ${p}`),
        `# Corpus — ${ix.doc_count} okf docs across ${ix.file_count} files`,
      )
      return lines.join('\n')
    },
  },
  {
    name: 'kb_read_doc',
    description:
      'Read one document verbatim. Path is relative to KnowledgeBase/ — e.g. '
      + '"BoardGames/games/ark-nova/index.okf.md". Get valid paths from kb_overview.',
    inputSchema: {
      type: 'object',
      properties: { path: { type: 'string', description: 'path relative to KnowledgeBase/' } },
      required: ['path'],
      additionalProperties: false,
    },
    async run(env, args) {
      const rel = args.path
      if (typeof rel !== 'string' || !rel) return 'kb_read_doc requires a "path" string.'
      const clean = rel.replace(/^\/+/, '').replace(/^KnowledgeBase\//, '')
      if (clean.split('/').includes('..')) return 'Path traversal is not permitted.'
      const ix = await corpusIndex(env)
      if (!ix.files.includes(clean)) {
        const leaf = clean.split('/').pop()
        const near = ix.files.filter((f) => f.endsWith('/' + leaf)).slice(0, 5)
        return `No such document: ${clean}.` + (near.length ? ` Did you mean:\n${near.join('\n')}` : '')
      }
      const body = await readDoc(env, clean)
      return body ?? `Document listed in the index but not retrievable: ${clean}`
    },
  },
]

// --- JSON-RPC dispatch ----------------------------------------------------
const result = (id, value) => ({ jsonrpc: '2.0', id, result: value })
const failure = (id, code, message) => ({ jsonrpc: '2.0', id, error: { code, message } })

async function handleMessage(msg, env) {
  if (msg?.jsonrpc !== '2.0' || typeof msg.method !== 'string') {
    return failure(msg?.id ?? null, -32600, 'Invalid Request')
  }
  const { id, method, params } = msg
  const isNotification = id === undefined

  switch (method) {
    case 'initialize':
      return result(id, {
        protocolVersion: PROTOCOL_VERSION,
        capabilities: { tools: { listChanged: false } },
        serverInfo: SERVER_INFO,
      })
    case 'notifications/initialized':
    case 'notifications/cancelled':
      return null
    case 'ping':
      return result(id, {})
    case 'tools/list':
      return result(id, {
        tools: TOOLS.map((t) => ({ name: t.name, description: t.description, inputSchema: t.inputSchema })),
      })
    case 'tools/call': {
      const tool = TOOLS.find((t) => t.name === params?.name)
      if (!tool) return failure(id, -32602, `Unknown tool: ${params?.name}`)
      try {
        const text = await tool.run(env, params.arguments ?? {})
        return result(id, { content: [{ type: 'text', text }] })
      }
      catch (err) {
        return result(id, { content: [{ type: 'text', text: `Tool failed: ${err.message}` }], isError: true })
      }
    }
    default:
      return isNotification ? null : failure(id, -32601, `Method not found: ${method}`)
  }
}

// --- HTTP -----------------------------------------------------------------
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, Mcp-Session-Id, MCP-Protocol-Version',
}
const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', ...CORS } })

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS })

    if (url.pathname === '/health') {
      const ix = await corpusIndex(env).catch(() => null)
      return json({
        ok: !!ix,
        server: SERVER_INFO,
        docs: ix?.doc_count ?? null,
        games: ix?.games.length ?? null,
      })
    }

    if (url.pathname !== '/mcp') {
      return json({ error: 'Not found. MCP endpoint is POST /mcp; liveness is GET /health.' }, 404)
    }

    // Optional shared-secret gate: set with `wrangler secret put MCP_TOKEN`.
    // Unset means the endpoint is public (the corpus is a public repo).
    if (env.MCP_TOKEN && request.headers.get('Authorization') !== `Bearer ${env.MCP_TOKEN}`) {
      return json({ error: 'Unauthorized' }, 401)
    }

    if (request.method !== 'POST') {
      return json(failure(null, -32000, 'This server is stateless; use POST /mcp.'), 405)
    }

    let payload
    try { payload = await request.json() }
    catch { return json(failure(null, -32700, 'Parse error'), 400) }

    const batch = Array.isArray(payload)
    const messages = batch ? payload : [payload]
    const responses = (await Promise.all(messages.map((m) => handleMessage(m, env)))).filter(Boolean)

    // Notifications only — nothing to say back.
    if (!responses.length) return new Response(null, { status: 202, headers: CORS })
    return json(batch ? responses : responses[0])
  },
}
