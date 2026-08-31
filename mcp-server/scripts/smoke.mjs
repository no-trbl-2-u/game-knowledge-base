#!/usr/bin/env node
// mcp-server/scripts/smoke.mjs — post-deploy check against a running server.
//
//   KB_MCP_TOKEN=... node scripts/smoke.mjs [base-url]
//
// The unit tests prove the handler is correct against a stub binding. This
// proves the deployed thing is actually serving: the assets uploaded, the
// secret is set, and the tools answer. Those are exactly the failures a green
// unit suite cannot see.
//
// Sets a non-zero exit code on failure, so it can gate a deploy. It sets
// process.exitCode rather than calling process.exit(), which aborts Node on
// Windows while fetch keep-alive sockets are still open.

const BASE = (process.argv[2] ?? 'https://kb-mcp.no-trbl-2-u.workers.dev').replace(/\/+$/, '')
const TOKEN = process.env.KB_MCP_TOKEN

const failures = []
const check = (name, ok, detail = '') => {
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${name}${detail ? ` — ${detail}` : ''}`)
  if (!ok) failures.push(name)
}

async function rpc(method, params) {
  const res = await fetch(`${BASE}/mcp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
    },
    body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, ...(params ? { params } : {}) }),
  })
  return { status: res.status, body: await res.json().catch(() => null) }
}

async function main() {
  const health = await fetch(`${BASE}/health`).then((r) => r.json()).catch(() => null)
  check('health responds', !!health?.ok, health ? `server ${health.server?.version}` : 'no response')
  check(
    'server is configured',
    health?.configured === true,
    health?.configured === false ? 'MCP_TOKEN secret is not set — see how-to-configure.md' : '',
  )

  if (!TOKEN) {
    console.error('\nKB_MCP_TOKEN is not set; the authenticated surface was not checked.')
    return
  }

  const unauth = await fetch(`${BASE}/mcp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'tools/list' }),
  })
  check('unauthenticated request is refused', unauth.status === 401 || unauth.status === 503, `HTTP ${unauth.status}`)

  const list = await rpc('tools/list')
  const names = list.body?.result?.tools?.map((t) => t.name) ?? []
  check('tools/list returns the full surface', names.length === 6, names.join(', ') || `HTTP ${list.status}`)

  // One probe per storage path: index.json, a search bundle, a raw document,
  // and a JSON sidecar. A partial asset upload shows up here and nowhere else.
  const probes = [
    ['kb_overview', {}, /BoardGames — \d+ game/],
    ['kb_search', { query: 'mechanics:', max_results: 1 }, /\.okf\.md:\d+:/],
    ['kb_read_doc', { path: 'BoardGames/INDEX.okf.md' }, /okf_version/],
    ['kb_keyword', { term: 'affliction' }, /Affliction/],
  ]

  for (const [name, args, expect] of probes) {
    const res = await rpc('tools/call', { name, arguments: args })
    const text = res.body?.result?.content?.[0]?.text ?? ''
    const ok = !res.body?.result?.isError && expect.test(text)
    check(`${name} answers`, ok, ok ? '' : (text.slice(0, 120) || `HTTP ${res.status}`))
  }
}

await main()

if (failures.length) {
  console.error(`\n${failures.length} check(s) failed: ${failures.join(', ')}`)
  process.exitCode = 1
}
else {
  console.log('\nall checks passed')
}
