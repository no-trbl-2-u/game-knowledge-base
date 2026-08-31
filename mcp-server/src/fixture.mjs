// mcp-server/src/fixture.mjs
//
// The miniature corpus the unit tests run against. Kept in its own module so
// fixture-drift.test.mjs can compare these shapes against a real build without
// importing a test file (which would re-run its cases) or parsing source (which
// the first attempt did, and which broke the moment the fixture was reformatted).
//
// Everything here is synthetic. It must mirror the *shape* of what
// scripts/build-assets.mjs emits, never its content -- a test that asserts on
// live corpus content fails for reasons unrelated to the server.

export const TOKEN = 'test-token-value'

// --- fixture --------------------------------------------------------------
export const DOCS = [
  'BoardGames/games/tester/index.okf.md',
  'BoardGames/games/tester/reception/better-if.okf.md',
  'BoardGames/patterns/deck-building.okf.md',
  'DigitalCardGames/dawncaster/cards/0001-spark.okf.md',
  'general mechanics/semi-cooperative/index.okf.md',
]

export const INDEX = {
  built_from: 'KnowledgeBase/',
  commit: '0123456789abcdef0123456789abcdef01234567',
  built_at: '2026-08-31T00:00:00.000Z',
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
export const line = (text, docId, lineNo) => `${text}\t${docId}\t${lineNo}`

export const BUNDLES = {
  boardgames: [
    line('mechanics: [deck-building, push-your-luck]', 0, 13),
    line('Source: src-001 Evidence: "a quoted claim" Confidence: high', 0, 42),
    line('better_if_labels: [runaway-leader]', 1, 14),
    line('A line that mentions 1692 in its text', 1, 20),
  ].join('\n'),
  cards: [line('Dispel a Blessing.', 3, 75)].join('\n'),
  other: [line('topic: "Semi-cooperative games"', 4, 4)].join('\n'),
}

export const FILES = {
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
export function makeEnv({ unconfigured = false, files = FILES } = {}) {
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

