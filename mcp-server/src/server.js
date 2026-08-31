// mcp-server/src/server.js — remote MCP server over the OKF corpus.
//
// Transport: MCP Streamable HTTP, stateless. One endpoint (POST /mcp) that
// takes a JSON-RPC message and answers with a single JSON response. No
// sessions, no SSE, no Durable Objects — this server is read-only, so there
// is no server->client stream to keep open.
//
// Storage: the corpus ships as Workers Static Assets (env.ASSETS). A Worker
// cannot enumerate that binding, so every listing and every body search comes
// from artifacts scripts/build-assets.mjs precomputes at build time:
//
//   /index.json          manifest + per-game frontmatter summary
//   /search/<scope>.txt  body bundle, "<text>\t<doc id>\t<line number>"
//   /kb/**               the corpus itself, fetched by exact path
//
// Auth: fail closed. Without an MCP_TOKEN secret the endpoint serves nothing.

const PROTOCOL_VERSION = '2025-06-18'
const SERVER_INFO = { name: 'kb-query', version: '2.0.0' }

// --- asset access ---------------------------------------------------------
const ASSET_ORIGIN = 'https://kb.internal'
const assetUrl = (p) => new URL('/' + p.split('/').map(encodeURIComponent).join('/'), ASSET_ORIGIN)

// Warm for the life of the isolate, refetched after eviction. Every deploy
// replaces the isolate, so a cached asset can never go stale against the
// binding it was read from.
//
// Keyed by env rather than held in a module-level Map: a Worker sees exactly
// one env, so behaviour there is identical, while tests get a fresh cache per
// fixture instead of leaking assets between cases.
const caches = new WeakMap()
async function asset(env, p, parse) {
  let cache = caches.get(env)
  if (!cache) caches.set(env, cache = new Map())
  if (!cache.has(p)) {
    const res = await env.ASSETS.fetch(assetUrl(p))
    if (!res.ok) throw new Error(`asset unavailable: ${p} (${res.status})`)
    cache.set(p, parse === 'json' ? await res.json() : await res.text())
  }
  return cache.get(p)
}

const corpusIndex = (env) => asset(env, 'index.json', 'json')
const searchBundle = (env, scope) => asset(env, `search/${scope}.txt`)
const sidecar = (env, game, file) => asset(env, `kb/DigitalCardGames/${game}/${file}`, 'json')

async function readDoc(env, rel) {
  const res = await env.ASSETS.fetch(assetUrl(`kb/${rel}`))
  return res.ok ? await res.text() : null
}

// --- shared helpers -------------------------------------------------------
const CARD_GAMES = ['dawncaster', 'slay-the-spire']
const DOC_CAP = 65536

const SEARCH_SCOPES = ['boardgames', 'cards', 'other']

function toRegex(query, flags = 'i') {
  try { return new RegExp(query, flags) }
  catch { return new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags) }
}

// Dawncaster costs are an object of pools; Slay the Spire costs are a string.
function formatCost(cost) {
  if (cost === null || cost === undefined || cost === '') return 'free'
  if (typeof cost !== 'object') return String(cost)
  const paid = Object.entries(cost).filter(([, v]) => v)
  return paid.length ? paid.map(([k, v]) => `${k}:${v}`).join(' ') : 'free'
}

// --- tools ----------------------------------------------------------------
export const TOOLS = [
  {
    name: 'kb_overview',
    description:
      'Map of the corpus: every board game (slug, title, year, weight, status, mechanics, '
      + 'better-if labels, doc count), the available pattern docs, and card-corpus stats. '
      + 'Start here — it resolves most queries without reading any document body.',
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
      lines.push(`# Patterns — ${ix.patterns.length} doc(s)`, ...ix.patterns.map((p) => `- ${p}`))

      lines.push('# Card corpora')
      for (const game of CARD_GAMES) {
        const cards = await sidecar(env, game, 'cards.json').catch(() => null)
        lines.push(`- ${game}: ${cards?.card_count ?? 'unknown'} card records`)
      }
      const keywords = await sidecar(env, 'dawncaster', 'keywords.json').catch(() => null)
      lines.push(`- dawncaster glossary: ${keywords?.keyword_count ?? 'unknown'} keywords`)

      lines.push(`# Corpus — ${ix.doc_count} okf docs across ${ix.file_count} files`)
      return lines.join('\n')
    },
  },

  {
    name: 'kb_find_games',
    description:
      'Find board games by controlled-vocabulary tag: a mechanics slug (e.g. deck-building, '
      + 'push-your-luck) and/or a better-if label (e.g. runaway-leader, downtime). Returns '
      + 'matching games with their doc paths. Vocabularies are pinned — see kb_overview for the live tag sets.',
    inputSchema: {
      type: 'object',
      properties: {
        mechanic: { type: 'string', description: 'mechanics vocabulary slug' },
        better_if_label: { type: 'string', description: 'better-if taxonomy label' },
      },
      additionalProperties: false,
    },
    async run(env, args) {
      const ix = await corpusIndex(env)
      let games = ix.games
      if (args.mechanic) games = games.filter((g) => g.mechanics.includes(args.mechanic))
      if (args.better_if_label) games = games.filter((g) => g.better_if_labels.includes(args.better_if_label))
      if (!games.length) {
        return 'No games match. Use kb_overview to see the live tag sets; a genuine gap belongs in WISHLIST.md.'
      }
      // The directory once, then the leaf names. Repeating a 40-character
      // prefix on every one of a dozen docs buys the caller nothing.
      return games.map((g) => {
        const dir = `BoardGames/games/${g.slug}/`
        const leaves = g.docs.map((d) => (d.startsWith(dir) ? d.slice(dir.length) : d))
        return `${g.slug} — "${g.title}" (${g.year ?? '?'}, weight ${g.weight ?? '?'})\n`
          + `  ${dir}\n    ${leaves.join(', ')}`
      }).join('\n')
    },
  },

  {
    name: 'kb_search',
    description:
      'Regex search across document bodies and frontmatter (case-insensitive, per line). '
      + 'Returns path:line matches. Scope "boardgames" (default), "cards" (Dawncaster + Slay the Spire), '
      + '"other" (Axiomancer, References, general mechanics), or "all". Use to locate claims, '
      + 'rules text, or src-NNN citations before reading a whole doc.',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description:
            'JS regex (no flags); invalid regex falls back to literal match. `^` anchors to line start; '
            + '`$` does not match end-of-line — each indexed line carries a trailing metadata field.',
        },
        scope: { type: 'string', enum: ['boardgames', 'cards', 'other', 'all'] },
        max_results: { type: 'number', description: 'default 40' },
      },
      required: ['query'],
      additionalProperties: false,
    },
    async run(env, args) {
      const { query, scope = 'boardgames', max_results: max = 40 } = args
      if (typeof query !== 'string' || !query) return 'kb_search requires a "query" string.'
      if (!SEARCH_SCOPES.includes(scope) && scope !== 'all') {
        return `Unknown scope "${scope}". Available: ${SEARCH_SCOPES.join(', ')}, all.`
      }
      const verify = toRegex(query)
      const scan = toRegex(query, 'gim')
      const ix = await corpusIndex(env)
      const scopes = scope === 'all' ? SEARCH_SCOPES : [scope]

      const out = []
      let truncated = false
      for (const s of scopes) {
        if (truncated) break
        const bundle = await searchBundle(env, s)
        scan.lastIndex = 0
        let m
        while ((m = scan.exec(bundle)) !== null) {
          // Widen the hit to its whole bundle line, then jump past that line:
          // one result per line, as the stdio server did.
          const start = bundle.lastIndexOf('\n', m.index) + 1
          const eol = bundle.indexOf('\n', m.index)
          const end = eol === -1 ? bundle.length : eol
          scan.lastIndex = end + 1

          const line = bundle.slice(start, end)
          const lastTab = line.lastIndexOf('\t')
          const prevTab = line.lastIndexOf('\t', lastTab - 1)
          const text = line.slice(0, prevTab)

          // The hit may have landed in the trailing doc-id/line-number fields
          // rather than the text. Re-test the text alone so those never
          // surface as matches.
          if (!verify.test(text)) continue

          if (out.length >= max) { truncated = true; break }
          const doc = ix.search_docs[Number(line.slice(prevTab + 1, lastTab))] ?? '?'
          out.push(`${doc}:${line.slice(lastTab + 1)}: ${text.slice(0, 200)}`)
        }
      }
      if (!out.length) return `No matches for /${query}/i in scope ${scope}.`
      // Say so when results were cut off; a silent cap reads as "that's all there is".
      return out.join('\n') + (truncated ? `\n(stopped at max_results=${max}; narrow the regex or raise the cap)` : '')
    },
  },

  {
    name: 'kb_read_doc',
    description:
      'Read one corpus document verbatim (capped at 64KB). Path is relative to KnowledgeBase/ — '
      + 'e.g. "BoardGames/games/ark-nova/index.okf.md". Claims carry Source/Evidence/Confidence '
      + 'triplets; keep the src-NNN ids when citing. Get valid paths from kb_overview or kb_search.',
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
      if (body === null) return `Document listed in the index but not retrievable: ${clean}`
      return body.length > DOC_CAP
        ? body.slice(0, DOC_CAP) + `\n\n[truncated at ${DOC_CAP} bytes of ${body.length}]`
        : body
    },
  },

  {
    name: 'kb_cards',
    description:
      'Search a digital card corpus by name / rules-text / observed-terms substring. '
      + 'game is "dawncaster" (1,692 records, default) or "slay-the-spire" (360 records). '
      + 'Returns name, cost, rarity, rules text, and the okf record path.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'case-insensitive substring' },
        game: { type: 'string', enum: CARD_GAMES, description: 'default dawncaster' },
        limit: { type: 'number', description: 'default 15' },
      },
      required: ['query'],
      additionalProperties: false,
    },
    async run(env, args) {
      const { query, game = 'dawncaster', limit = 15 } = args
      if (typeof query !== 'string' || !query) return 'kb_cards requires a "query" string.'
      if (!CARD_GAMES.includes(game)) return `Unknown card corpus "${game}". Available: ${CARD_GAMES.join(', ')}.`
      const data = await sidecar(env, game, 'cards.json').catch(() => null)
      if (!data) return `cards.json sidecar not found for ${game}.`

      const q = query.toLowerCase()
      const hits = data.cards.filter((c) =>
        (c.name ?? '').toLowerCase().includes(q)
        || (c.rules_text ?? '').toLowerCase().includes(q)
        || (c.observed_terms ?? []).some((t) => t.toLowerCase().includes(q)),
      ).slice(0, limit)
      if (!hits.length) return `No ${game} cards match "${query}".`

      return hits.map((c) => {
        const text = (c.rules_text ?? '').replaceAll('\n', ' ')
        const record = c.okf_path ? `\n  record: KnowledgeBase/DigitalCardGames/${game}/${c.okf_path}` : ''
        return `${c.name} [${c.rarity}/${c.type}] (${formatCost(c.cost)}) — ${text}${record}`
      }).join('\n')
    },
  },

  {
    name: 'kb_keyword',
    description:
      'Look up a Dawncaster keyword or mechanic term in the 141-entry glossary '
      + '(exact or substring match on keyword and slug).',
    inputSchema: {
      type: 'object',
      properties: { term: { type: 'string' } },
      required: ['term'],
      additionalProperties: false,
    },
    async run(env, args) {
      const term = args.term
      if (typeof term !== 'string' || !term) return 'kb_keyword requires a "term" string.'
      const data = await sidecar(env, 'dawncaster', 'keywords.json').catch(() => null)
      if (!data) return 'keywords.json sidecar not found.'
      const q = term.toLowerCase()
      const hits = data.keywords.filter((k) => k.keyword.toLowerCase().includes(q) || k.slug.includes(q))
      if (!hits.length) return `No keyword matches "${term}".`
      return hits.map((k) => `${k.keyword} [${k.type}] — ${k.description}`).join('\n')
    },
  },
]

// --- JSON-RPC dispatch ----------------------------------------------------
const result = (id, value) => ({ jsonrpc: '2.0', id, result: value })
const failure = (id, code, message) => ({ jsonrpc: '2.0', id, error: { code, message } })

export async function handleMessage(msg, env) {
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
const json = (body, status = 200, extra = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS, ...extra },
  })

// Constant-time compare, so a wrong token cannot be recovered byte by byte
// from response timing.
function tokenMatches(presented, expected) {
  if (typeof presented !== 'string' || presented.length !== expected.length) return false
  let diff = 0
  for (let i = 0; i < expected.length; i++) diff |= presented.charCodeAt(i) ^ expected.charCodeAt(i)
  return diff === 0
}

function authorize(request, env) {
  // Fail closed: an unconfigured server is a misconfigured server, not a
  // public one. Refusing loudly beats silently serving the corpus to anyone.
  if (!env.MCP_TOKEN) {
    return json({ error: 'Server unconfigured: MCP_TOKEN secret is not set. Run `wrangler secret put MCP_TOKEN`.' }, 503)
  }
  const header = request.headers.get('Authorization') ?? ''
  const presented = header.startsWith('Bearer ') ? header.slice(7) : null
  if (!tokenMatches(presented, env.MCP_TOKEN)) {
    return json({ error: 'Unauthorized' }, 401, { 'WWW-Authenticate': 'Bearer realm="kb-mcp"' })
  }
  return null
}

export async function handleRequest(request, env) {
  const url = new URL(request.url)

  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS })

  // Unauthenticated liveness: reports whether the server is configured and
  // reachable, and nothing about the corpus contents.
  if (url.pathname === '/health') {
    return json({ ok: true, server: SERVER_INFO, configured: !!env.MCP_TOKEN })
  }

  if (url.pathname !== '/mcp') {
    return json({ error: 'Not found. MCP endpoint is POST /mcp; liveness is GET /health.' }, 404)
  }

  const denied = authorize(request, env)
  if (denied) return denied

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
}
