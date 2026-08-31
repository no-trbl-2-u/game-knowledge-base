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
const field = (head, name) =>
  head?.match(new RegExp(`^\\s*${name}:\\s*(.*)$`, 'm'))?.[1]?.trim().replace(/^["']|["']$/g, '') ?? null

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

const index = {
  built_from: 'KnowledgeBase/',
  file_count: files.length,
  doc_count: docs.length,
  games,
  patterns,
  files,
}

// --- emit -----------------------------------------------------------------
fs.rmSync(DIST, { recursive: true, force: true })
fs.mkdirSync(DIST, { recursive: true })
fs.cpSync(KB, path.join(DIST, 'kb'), { recursive: true })
fs.writeFileSync(path.join(DIST, 'index.json'), JSON.stringify(index))

const bytes = files.reduce((n, f) => n + fs.statSync(path.join(KB, f)).size, 0)
console.log(
  `built dist/: ${files.length} files (${(bytes / 1e6).toFixed(1)} MB), ` +
  `${docs.length} okf docs, ${games.length} games, ${patterns.length} pattern docs` +
  (unparsed.length ? `, ${unparsed.length} game(s) with thin frontmatter` : ''),
)
