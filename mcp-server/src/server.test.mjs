// mcp-server/src/server.test.mjs
//
// Exercises the Worker's request handler against a stub ASSETS binding. The
// fixture below is a miniature corpus, not the real one: these tests must run
// in CI without a 22 MB build step, and a test that depends on live corpus
// content fails for reasons that have nothing to do with the server.
//
// Build-shape agreement with the real corpus is a separate concern, asserted
// by scripts/build-assets.mjs itself at build time.

import assert from 'node:assert/strict'
import test from 'node:test'

import { handleRequest, TOOLS } from './server.js'

const TOKEN = 'test-token-value'

// --- fixture --------------------------------------------------------------
const DOCS = [
  'BoardGames/games/tester/index.okf.md',
  'BoardGames/games/tester/reception/better-if.okf.md',
  'BoardGames/patterns/deck-building.okf.md',
  'DigitalCardGames/dawncaster/cards/0001-spark.okf.md',
  'general mechanics/semi-cooperative/index.okf.md',
]

const INDEX = {
  built_from: 'KnowledgeBase/',
  file_count: 6,
  doc_count: DOCS.length,
  games: [{
    slug: 'tester',
    title: 'Tester',
    year: '2020',
    weight: null,
    status: 'verified',
    mechanics: ['deck-building', 'push-your-luck'],
    better_if_labels: ['runaway-leader'],
    docs: DOCS.slice(0, 2),
  }],
  patterns: ['BoardGames/patterns/deck-building.okf.md'],
  files: [...DOCS, 'BoardGames/games/tester/visuals/sheet.webp'],
  search_docs: DOCS,
  search_scopes: {},
}

// "<text>\t<doc id>\t<line number>" — the layout server.js scans in place.
const line = (text, docId, lineNo) => `${text}\t${docId}\t${lineNo}`

const BUNDLES = {
  boardgames: [
    line('mechanics: [deck-building, push-your-luck]', 0, 13),
    line('Source: src-001 Evidence: "a quoted claim" Confidence: high', 0, 42),
    line('better_if_labels: [runaway-leader]', 1, 14),
    line('A line that mentions 1692 in its text', 1, 20),
  ].join('\n'),
  cards: [line('Dispel a Blessing.', 3, 75)].join('\n'),
  other: [line('topic: "Semi-cooperative games"', 4, 4)].join('\n'),
}

const FILES = {
  'index.json': JSON.stringify(INDEX),
  'search/boardgames.txt': BUNDLES.boardgames,
  'search/cards.txt': BUNDLES.cards,
  'search/other.txt': BUNDLES.other,
  'kb/BoardGames/games/tester/index.okf.md': '---\ntitle: "Tester"\n---\n\nBody text.\n',
  'kb/general mechanics/semi-cooperative/index.okf.md': '---\ntopic: "Semi-cooperative"\n---\n',
  'kb/DigitalCardGames/dawncaster/cards.json': JSON.stringify({
    card_count: 2,
    cards: [
      {
        name: 'Spark', rarity: 'Common', type: 'Attack',
        cost: { int: 1, str: 0 }, rules_text: 'Deal 3 damage.\nDispel a Blessing.',
        observed_terms: ['Dispel'], okf_path: 'cards/0001-spark.okf.md',
      },
      {
        name: 'Ember', rarity: 'Rare', type: 'Magic',
        cost: {}, rules_text: 'Burn.', observed_terms: [], okf_path: 'cards/0002-ember.okf.md',
      },
    ],
  }),
  'kb/DigitalCardGames/slay-the-spire/cards.json': JSON.stringify({
    card_count: 1,
    cards: [{
      name: 'Strike', rarity: 'Basic', type: 'Attack', cost: '1',
      rules_text: 'Deal 6 damage.', observed_terms: [], okf_path: 'cards/0001-strike.okf.md',
    }],
  }),
  'kb/DigitalCardGames/dawncaster/keywords.json': JSON.stringify({
    keyword_count: 1,
    keywords: [{ keyword: 'Affliction', slug: 'affliction', type: 'Effect', description: 'A negative effect.' }],
  }),
}

// A fresh env per test: server.js caches assets per env object, so reusing one
// would let a mutated fixture leak across cases.
//
// `unconfigured` rather than a falsy token, because a default parameter cannot
// distinguish "omitted" from "deliberately absent" — the first version of this
// helper silently handed back a configured server and the fail-closed tests
// passed for the wrong reason.
function makeEnv({ unconfigured = false, files = FILES } = {}) {
  return {
    MCP_TOKEN: unconfigured ? undefined : TOKEN,
    ASSETS: {
      async fetch(url) {
        const key = decodeURIComponent(new URL(url).pathname.slice(1))
        return key in files
          ? new Response(files[key], { status: 200 })
          : new Response('not found', { status: 404 })
      },
    },
  }
}

// --- request helpers ------------------------------------------------------
const post = (body, { token = TOKEN, env } = {}) => handleRequest(
  new Request('https://kb.test/mcp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token === null ? {} : { Authorization: `Bearer ${token}` }),
    },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  }),
  env ?? makeEnv(),
)

let nextId = 1
const rpc = (method, params) => ({ jsonrpc: '2.0', id: nextId++, method, ...(params ? { params } : {}) })

async function callTool(name, args = {}, opts = {}) {
  const res = await post(rpc('tools/call', { name, arguments: args }), opts)
  assert.equal(res.status, 200)
  const body = await res.json()
  assert.ok(!body.error, `unexpected JSON-RPC error: ${JSON.stringify(body.error)}`)
  return { text: body.result.content[0].text, isError: !!body.result.isError }
}

// --- auth -----------------------------------------------------------------
test('unconfigured server refuses everything rather than serving publicly', async () => {
  const res = await post(rpc('tools/list'), { env: makeEnv({ unconfigured: true }), token: null })
  assert.equal(res.status, 503)
  assert.match((await res.json()).error, /MCP_TOKEN/)
})

test('a token cannot be guessed past, present or absent', async () => {
  for (const token of [null, '', 'wrong', `${TOKEN}x`, TOKEN.slice(0, -1)]) {
    const res = await post(rpc('tools/list'), { token })
    assert.equal(res.status, 401, `token ${JSON.stringify(token)} should not authorize`)
  }
})

test('a correct token authorizes', async () => {
  const res = await post(rpc('tools/list'))
  assert.equal(res.status, 200)
  assert.equal((await res.json()).result.tools.length, TOOLS.length)
})

test('health is unauthenticated and reveals nothing about the corpus', async () => {
  const res = await handleRequest(new Request('https://kb.test/health'), makeEnv())
  assert.equal(res.status, 200)
  const body = await res.json()
  assert.deepEqual(Object.keys(body).sort(), ['configured', 'ok', 'server'])
  assert.equal(body.configured, true)
  assert.equal((await (await handleRequest(
    new Request('https://kb.test/health'), makeEnv({ unconfigured: true }),
  )).json()).configured, false)
})

// --- protocol -------------------------------------------------------------
test('initialize advertises tools and a protocol version', async () => {
  const body = await (await post(rpc('initialize', { protocolVersion: '2025-06-18' }))).json()
  assert.match(body.result.protocolVersion, /^\d{4}-\d{2}-\d{2}$/)
  assert.equal(body.result.capabilities.tools.listChanged, false)
  assert.equal(body.result.serverInfo.name, 'kb-query')
})

test('every tool declares a usable schema', async () => {
  const tools = (await (await post(rpc('tools/list'))).json()).result.tools
  assert.deepEqual(tools.map((t) => t.name).sort(), [
    'kb_cards', 'kb_find_games', 'kb_keyword', 'kb_overview', 'kb_read_doc', 'kb_search',
  ])
  for (const t of tools) {
    assert.ok(t.description.length > 40, `${t.name} needs a real description`)
    assert.equal(t.inputSchema.type, 'object')
    assert.equal(t.inputSchema.additionalProperties, false)
  }
})

test('a bare notification gets 202 and no body', async () => {
  const res = await post({ jsonrpc: '2.0', method: 'notifications/initialized' })
  assert.equal(res.status, 202)
  assert.equal(await res.text(), '')
})

test('malformed and unknown messages fail without throwing', async () => {
  assert.equal((await post('{not json')).status, 400)
  assert.equal((await (await post({ jsonrpc: '1.0', id: 1, method: 'x' })).json()).error.code, -32600)
  assert.equal((await (await post(rpc('no/such/method'))).json()).error.code, -32601)
  assert.equal((await (await post(rpc('tools/call', { name: 'kb_nope' }))).json()).error.code, -32602)
})

test('GET /mcp is refused and unknown paths 404', async () => {
  const get = await handleRequest(
    new Request('https://kb.test/mcp', { headers: { Authorization: `Bearer ${TOKEN}` } }),
    makeEnv(),
  )
  assert.equal(get.status, 405)
  assert.equal((await handleRequest(new Request('https://kb.test/'), makeEnv())).status, 404)
})

// --- tools ----------------------------------------------------------------
test('kb_overview reports games, patterns and card corpora', async () => {
  const { text } = await callTool('kb_overview')
  assert.match(text, /tester — "Tester" \(2020, weight \?, verified\)/)
  assert.match(text, /mechanics: deck-building, push-your-luck/)
  assert.match(text, /dawncaster: 2 card records/)
  assert.match(text, /slay-the-spire: 1 card records/)
  assert.match(text, /glossary: 1 keywords/)
})

test('kb_find_games filters by mechanic and label, and says so when nothing matches', async () => {
  assert.match((await callTool('kb_find_games', { mechanic: 'deck-building' })).text, /^tester —/)
  assert.match(
    (await callTool('kb_find_games', { mechanic: 'deck-building', better_if_label: 'runaway-leader' })).text,
    /^tester —/,
  )
  assert.match((await callTool('kb_find_games', { mechanic: 'no-such-slug' })).text, /No games match/)
})

test('kb_find_games prints the game directory once, not per doc', async () => {
  const { text } = await callTool('kb_find_games', { mechanic: 'deck-building' })
  assert.equal(text.split('BoardGames/games/tester/').length - 1, 1)
  assert.match(text, /index\.okf\.md, reception\/better-if\.okf\.md/)
})

test('kb_search resolves doc ids back to paths and line numbers', async () => {
  const { text } = await callTool('kb_search', { query: 'push-your-luck' })
  assert.equal(text, 'BoardGames/games/tester/index.okf.md:13: mechanics: [deck-building, push-your-luck]')
})

test('kb_search honours ^ anchors against the line text', async () => {
  assert.match((await callTool('kb_search', { query: '^mechanics:' })).text, /index\.okf\.md:13/)
  assert.match((await callTool('kb_search', { query: '^Source:' })).text, /index\.okf\.md:42/)
  assert.match((await callTool('kb_search', { query: '^Confidence:' })).text, /No matches/)
})

test('kb_search never surfaces a hit that landed in the trailing metadata', async () => {
  // Doc id 0 and line 13 are metadata on a line whose text contains neither.
  const { text } = await callTool('kb_search', { query: '^13$' })
  assert.match(text, /No matches/)
  // ...but the same digits inside real text are found.
  assert.match((await callTool('kb_search', { query: '1692' })).text, /better-if\.okf\.md:20/)
})

test('kb_search scopes are isolated and "all" spans them', async () => {
  assert.match((await callTool('kb_search', { query: 'Dispel' })).text, /No matches/)
  assert.match((await callTool('kb_search', { query: 'Dispel', scope: 'cards' })).text, /cards\/0001-spark/)
  assert.match((await callTool('kb_search', { query: 'Semi-cooperative', scope: 'other' })).text, /semi-cooperative/)
  assert.match((await callTool('kb_search', { query: 'Dispel', scope: 'all' })).text, /cards\/0001-spark/)
  assert.match((await callTool('kb_search', { query: 'x', scope: 'bogus' })).text, /Unknown scope/)
})

test('kb_search caps results and admits when it truncated', async () => {
  const { text } = await callTool('kb_search', { query: '.', max_results: 2 })
  assert.equal(text.split('\n').filter((l) => l.includes('.okf.md:')).length, 2)
  assert.match(text, /stopped at max_results=2/)
})

test('kb_search falls back to a literal match on an invalid regex', async () => {
  const { text } = await callTool('kb_search', { query: 'push-your-luck]' })
  assert.match(text, /index\.okf\.md:13/)
})

test('kb_read_doc returns a listed document and rejects everything else', async () => {
  assert.match((await callTool('kb_read_doc', { path: 'BoardGames/games/tester/index.okf.md' })).text, /Body text/)
  // The KnowledgeBase/ prefix is accepted and stripped.
  assert.match((await callTool('kb_read_doc', {
    path: 'KnowledgeBase/BoardGames/games/tester/index.okf.md',
  })).text, /Body text/)
  assert.match((await callTool('kb_read_doc', { path: '../../etc/passwd' })).text, /traversal is not permitted/)
  assert.match((await callTool('kb_read_doc', { path: 'BoardGames/games/nope/index.okf.md' })).text, /Did you mean/)
  assert.match((await callTool('kb_read_doc', {})).text, /requires a "path"/)
})

test('kb_read_doc handles paths containing spaces', async () => {
  const { text } = await callTool('kb_read_doc', { path: 'general mechanics/semi-cooperative/index.okf.md' })
  assert.match(text, /Semi-cooperative/)
})

test('kb_read_doc truncates rather than returning an unbounded body', async () => {
  const big = 'x'.repeat(70000)
  const files = {
    ...FILES,
    'index.json': JSON.stringify({ ...INDEX, files: [...INDEX.files, 'BoardGames/big.okf.md'] }),
    'kb/BoardGames/big.okf.md': big,
  }
  const { text } = await callTool('kb_read_doc', { path: 'BoardGames/big.okf.md' }, { env: makeEnv({ files }) })
  assert.ok(text.length < big.length)
  assert.match(text, /truncated at 65536 bytes of 70000/)
})

test('kb_cards searches both corpora and formats their different cost shapes', async () => {
  const dawn = await callTool('kb_cards', { query: 'Dispel' })
  assert.match(dawn.text, /Spark \[Common\/Attack\] \(int:1\)/)
  assert.match(dawn.text, /record: KnowledgeBase\/DigitalCardGames\/dawncaster\/cards\/0001-spark\.okf\.md/)
  assert.doesNotMatch(dawn.text, /\n.*Deal 3 damage\.\n/, 'newlines in rules text should be flattened')

  assert.match((await callTool('kb_cards', { query: 'Ember' })).text, /\(free\)/)
  assert.match((await callTool('kb_cards', { query: 'Strike', game: 'slay-the-spire' })).text, /Strike \[Basic\/Attack\] \(1\)/)
  assert.match((await callTool('kb_cards', { query: 'Strike' })).text, /No dawncaster cards match/)
  assert.match((await callTool('kb_cards', { query: 'x', game: 'hearthstone' })).text, /Unknown card corpus/)
})

test('kb_cards respects its limit', async () => {
  const { text } = await callTool('kb_cards', { query: 'e', limit: 1 })
  assert.equal(text.split('record:').length - 1, 1)
})

test('kb_keyword matches on keyword and slug', async () => {
  assert.match((await callTool('kb_keyword', { term: 'afflic' })).text, /Affliction \[Effect\]/)
  assert.match((await callTool('kb_keyword', { term: 'nothing' })).text, /No keyword matches/)
})

// --- failure modes --------------------------------------------------------
test('a missing asset degrades to an error result, never a 500', async () => {
  const env = makeEnv({ files: {} })
  const res = await post(rpc('tools/call', { name: 'kb_overview', arguments: {} }), { env })
  assert.equal(res.status, 200)
  const body = await res.json()
  assert.equal(body.result.isError, true)
  assert.match(body.result.content[0].text, /Tool failed/)
})

test('a batch is answered as a batch', async () => {
  const res = await post([rpc('ping'), rpc('tools/list')])
  const body = await res.json()
  assert.ok(Array.isArray(body))
  assert.equal(body.length, 2)
})

test('CORS preflight is answered without a token', async () => {
  const res = await handleRequest(new Request('https://kb.test/mcp', { method: 'OPTIONS' }), makeEnv())
  assert.equal(res.status, 204)
  assert.equal(res.headers.get('Access-Control-Allow-Origin'), '*')
})
