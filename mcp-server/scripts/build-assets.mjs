#!/usr/bin/env node
// mcp-server/scripts/build-assets.mjs
//
// Builds the Worker's static-asset payload from the corpus:
//
//   dist/kb/**            verbatim copy of KnowledgeBase/ (read via env.ASSETS)
//   dist/index.json       precomputed manifest + per-game frontmatter summary
//
// A Worker cannot enumerate its assets binding — it can only fetch a known
// path. Everything that would otherwise need a readdir (the file list, the
// per-game summary) is computed here, at build time, and shipped as one JSON
// file. This mirrors the repo's existing generated-sidecar convention:
// derived artifacts are built, never hand-edited.

import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const REPO = path.resolve(HERE, '..', '..')
const KB = path.join(REPO, 'KnowledgeBase')
const DIST = path.resolve(HERE, '..', 'dist')

if (!fs.existsSync(KB)) {
  console.error(`No corpus at ${KB}`)
  process.exit(1)
}

// --- frontmatter helpers --------------------------------------------------
// Regex-based, matching validate-okf.mjs rather than pulling in a YAML parser.
function frontmatter(file) {
  try {
    const fm = fs.readFileSync(file, 'utf-8').match(/^---\r?\n([\s\S]*?)\r?\n---/)
    return fm ? fm[1] : null
  }
  catch { return null }
}

// `\\s*` prefix so nested keys resolve too: title/year/weight live under the
// `game:` block, while scope/status/confidence sit at the top level.
// YAML `null`/`~`/empty all mean absent. Carrying them through as the string
// "null" defeats every `?? '?'` fallback downstream and renders as a value.
const ABSENT = new Set(['', 'null', '~', 'none', 'unknown'])
function field(head, name) {
  const raw = head?.match(new RegExp(`^\\s*${name}:\\s*(.*)$`, 'm'))?.[1]?.trim().replace(/^["']|["']$/g, '')
  return raw === undefined || ABSENT.has(raw.toLowerCase()) ? null : raw
}

function listItems(head, name) {
  if (!head) return []
  const inline = head.match(new RegExp(`^${name}:\\s*\\[(.*)\\]`, 'm'))
  if (inline) return inline[1].split(',').map((s) => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean)
  const block = head.match(new RegExp(`^${name}:\\s*\\r?\\n((?:\\s+-\\s+.*\\r?\\n?)+)`, 'm'))
  if (block) return [...block[1].matchAll(/-\s+"?([^"\r\n]+)"?/g)].map((m) => m[1].trim())
  return []
}

// --- walk the corpus ------------------------------------------------------
function walk(dir, base = '') {
  const out = []
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${e.name}` : e.name
    if (e.isDirectory()) out.push(...walk(path.join(dir, e.name), rel))
    else out.push(rel)
  }
  return out
}

const files = walk(KB).sort()
const docs = files.filter((f) => f.endsWith('.okf.md'))

// --- per-game summary -----------------------------------------------------
const GAMES_DIR = path.join(KB, 'BoardGames', 'games')
const games = !fs.existsSync(GAMES_DIR) ? [] : fs.readdirSync(GAMES_DIR, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => {
    const dir = path.join(GAMES_DIR, e.name)
    const head = frontmatter(path.join(dir, 'index.okf.md'))
    const betterIf = frontmatter(path.join(dir, 'reception', 'better-if.okf.md'))
    return {
      slug: e.name,
      title: field(head, 'title') ?? e.name,
      year: field(head, 'year'),
      weight: field(head, 'weight'),
      status: field(head, 'status'),
      mechanics: listItems(head, 'mechanics'),
      better_if_labels: listItems(betterIf, 'better_if_labels'),
      docs: docs.filter((d) => d.startsWith(`BoardGames/games/${e.name}/`)),
    }
  })

const patterns = docs.filter((d) => d.startsWith('BoardGames/patterns/'))

// Build-time sanity: a silently-empty summary is worse than a failed build,
// because it deploys clean and answers every query with "(none)".
const unparsed = games.filter((g) => g.title === g.slug || !g.mechanics.length)
if (games.length && unparsed.length > games.length / 2) {
  console.error(
    `Frontmatter parse looks broken: ${unparsed.length}/${games.length} games have no title or ` +
    `no mechanics. Refusing to build a corpus index that would answer every query with "(none)".`,
  )
  process.exit(1)
}

// --- search bundles -------------------------------------------------------
// kb_search greps document bodies. A Worker cannot walk 2,765 files per query,
// so each scope is flattened here into one bundle the Worker fetches once per
// isolate and regex-scans in place.
//
//   <line text>\t<doc id>\t<line number>
//
// Two properties of that layout matter, and both were measured rather than
// assumed:
//
//   Text first, metadata last. The Worker scans the bundle with one global
//   regex instead of splitting it into 150k strings -- split() alone costs
//   ~20ms of CPU, over the Workers Free 10ms budget, while the global scan
//   costs ~1.4ms. Putting the text at the start of each line keeps `^` anchors
//   meaning what the caller intends.
//
//   Doc id, not path. A numeric index into index.json's search_docs replaces
//   a path that averages ~60 bytes and repeats on every line.
//
// Only .okf.md is indexed. The stdio server also matched plain .md, which is
// how operator-profile prose once answered corpus queries (see the commit that
// removed those copies). Frontmatter lines stay indexed: they carry mechanics,
// source ids, and confidence, which are exactly what claim-hunting searches
// look for.
const SCOPES = {
  boardgames: (f) => f.startsWith('BoardGames/'),
  cards: (f) => f.startsWith('DigitalCardGames/'),
  other: (f) => !f.startsWith('BoardGames/') && !f.startsWith('DigitalCardGames/'),
}

// Cold-isolate decode cost scales with bundle size; see verify() below.
const BUNDLE_WARN_MB = 9
const BUNDLE_FAIL_MB = 14

const searchDocs = []
const docId = (rel) => {
  const at = searchDocs.indexOf(rel)
  return at === -1 ? searchDocs.push(rel) - 1 : at
}

function bundle(predicate) {
  const out = []
  for (const rel of docs.filter(predicate)) {
    const id = docId(rel)
    const lines = fs.readFileSync(path.join(KB, rel), 'utf-8').split(/\r?\n/)
    for (let i = 0; i < lines.length; i++) {
      // Tabs inside the text would break the trailing-field split, and a
      // corpus line's leading indentation is not worth preserving here.
      const text = lines[i].replaceAll('\t', ' ').trim()
      if (text) out.push(`${text}\t${id}\t${i + 1}`)
    }
  }
  return out.join('\n')
}

const bundles = Object.fromEntries(Object.entries(SCOPES).map(([k, p]) => [k, bundle(p)]))

// --- build identity -------------------------------------------------------
// Without this a deployed server cannot answer "which commit am I serving?",
// which is exactly the question automatic deploys make urgent: nothing else
// distinguishes a current corpus from one three merges stale.
//
// Workers Builds and GitHub Actions each expose the SHA under their own name;
// a local build falls back to git. Null is an honest answer when none apply.
function buildCommit() {
  const fromEnv = process.env.WORKERS_CI_COMMIT_SHA
    ?? process.env.GITHUB_SHA
    ?? process.env.CF_PAGES_COMMIT_SHA
  if (fromEnv) return fromEnv.trim()
  try {
    return execFileSync('git', ['rev-parse', 'HEAD'], { cwd: REPO, encoding: 'utf8' }).trim()
  }
  catch { return null }
}

const index = {
  built_from: 'KnowledgeBase/',
  commit: buildCommit(),
  built_at: new Date().toISOString(),
  file_count: files.length,
  doc_count: docs.length,
  games,
  patterns,
  files,
  search_docs: searchDocs,
  search_scopes: Object.fromEntries(
    Object.entries(bundles).map(([k, v]) => [k, { lines: v ? v.split('\n').length : 0, bytes: v.length }]),
  ),
}

// --- emit -----------------------------------------------------------------
fs.rmSync(DIST, { recursive: true, force: true })
fs.mkdirSync(DIST, { recursive: true })
fs.cpSync(KB, path.join(DIST, 'kb'), { recursive: true })
fs.writeFileSync(path.join(DIST, 'index.json'), JSON.stringify(index))
fs.mkdirSync(path.join(DIST, 'search'), { recursive: true })
for (const [scope, text] of Object.entries(bundles)) {
  fs.writeFileSync(path.join(DIST, 'search', `${scope}.txt`), text)
}

// --- verify what was emitted ---------------------------------------------
// The Worker trusts these artifacts completely: it resolves doc ids without
// bounds-checking and slices bundle lines by their trailing tabs. A malformed
// bundle would not crash the deploy, it would quietly return wrong paths and
// wrong line numbers. So the build proves its own output before finishing.
function verify() {
  const problems = []

  const copied = walk(path.join(DIST, 'kb')).length
  if (copied !== files.length) problems.push(`copied ${copied} files but indexed ${files.length}`)

  const scopeOf = new Map()
  for (const [scope, text] of Object.entries(bundles)) {
    if (!text) continue
    text.split('\n').forEach((entry, i) => {
      if (problems.length > 20) return
      const lastTab = entry.lastIndexOf('\t')
      const prevTab = entry.lastIndexOf('\t', lastTab - 1)
      if (prevTab === -1) { problems.push(`${scope}.txt line ${i + 1}: missing trailing fields`); return }
      const id = Number(entry.slice(prevTab + 1, lastTab))
      const lineNo = Number(entry.slice(lastTab + 1))
      if (!Number.isInteger(id) || !searchDocs[id]) problems.push(`${scope}.txt line ${i + 1}: unresolvable doc id ${id}`)
      if (!Number.isInteger(lineNo) || lineNo < 1) problems.push(`${scope}.txt line ${i + 1}: bad line number ${lineNo}`)
      if (!entry.slice(0, prevTab)) problems.push(`${scope}.txt line ${i + 1}: empty text`)

      const seen = scopeOf.get(id)
      if (seen && seen !== scope) problems.push(`doc ${searchDocs[id]} indexed in both ${seen} and ${scope}`)
      scopeOf.set(id, scope)
    })
  }

  const unindexed = docs.filter((d) => !searchDocs.includes(d))
  if (unindexed.length) problems.push(`${unindexed.length} doc(s) missing from every search scope, e.g. ${unindexed[0]}`)

  // A search bundle is decoded whole on a cold isolate. At 5.3 MB that measured
  // ~3.4ms of CPU against the Workers Free 10ms per-request budget, so the
  // ceiling is real but distant. The failure it guards against is silent: the
  // corpus grows, kb_search starts exceeding CPU, and nothing says why. These
  // thresholds are deliberately generous -- crossing the warning is a prompt to
  // re-measure, not evidence of a problem.
  for (const [scope, text] of Object.entries(bundles)) {
    const mb = text.length / 1e6
    if (mb > BUNDLE_FAIL_MB) problems.push(`search/${scope}.txt is ${mb.toFixed(1)} MB, over the ${BUNDLE_FAIL_MB} MB ceiling`)
    else if (mb > BUNDLE_WARN_MB) console.warn(`  warning: search/${scope}.txt is ${mb.toFixed(1)} MB — re-measure cold-isolate CPU before it reaches ${BUNDLE_FAIL_MB} MB`)
  }

  if (problems.length) {
    console.error('Build produced artifacts the Worker cannot trust:')
    for (const p of problems.slice(0, 20)) console.error(`  - ${p}`)
    process.exit(1)
  }
}
verify()

const bytes = files.reduce((n, f) => n + fs.statSync(path.join(KB, f)).size, 0)
console.log(
  `built dist/: ${files.length} files (${(bytes / 1e6).toFixed(1)} MB), ` +
  `${docs.length} okf docs, ${games.length} games, ${patterns.length} pattern docs` +
  (unparsed.length ? `, ${unparsed.length} game(s) with thin frontmatter` : ''),
)
for (const [scope, stats] of Object.entries(index.search_scopes)) {
  console.log(`  search/${scope}.txt: ${stats.lines} lines (${(stats.bytes / 1e6).toFixed(1)} MB)`)
}
