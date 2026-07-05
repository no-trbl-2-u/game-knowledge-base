#!/usr/bin/env node
// scripts/generate-dawncaster-card-sidecars.mjs — builds the machine sidecars
// of the Dawncaster card corpus from the committed card OKF records. Zero
// dependencies.
//
//   node scripts/generate-dawncaster-card-sidecars.mjs          # regenerate
//   node scripts/generate-dawncaster-card-sidecars.mjs --check  # exit 1 if stale
//
// Artifacts (all derived, never hand-edited; freshness enforced by
// scripts/validate-okf.mjs):
//   cards.csv       — one row per card: identity, taxonomy, cost vector,
//                     observed term leads, and the record path
//   cards.json      — full structured records including plain rules text and
//                     raw rules HTML (the ```-fence escape ` ` ` from the
//                     record body is preserved verbatim)
//   card-index.csv  — minimal lookup (number, name, term leads), kept
//                     byte-compatible with generate-dawncaster-card-okf.py
//
// Deterministic: derived only from cards/*.okf.md in filename order. The
// SQLite mirror behind generate-dawncaster-card-okf.py is not needed — the
// OKF records are the committed source of truth for these sidecars.

import fs from 'node:fs'
import path from 'node:path'

const DIR = 'KnowledgeBase/DigitalCardGames/dawncaster'
const CARDS_DIR = path.join(DIR, 'cards')
const COST_FIELDS = ['dex', 'int', 'str', 'holy', 'neutral', 'dexint', 'dexstr', 'intstr', 'blood']
const NO_RULES_PLACEHOLDER = '_No rules text present in source row._'

const unquote = s => s.replace(/\\(["\\])/g, '$1')

function parseCard(file) {
  const text = fs.readFileSync(file, 'utf-8')
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!fm) throw new Error(`${file}: missing frontmatter`)
  const head = fm[1]
  const body = text.slice(fm[0].length)

  const str = name => {
    const m = head.match(new RegExp(`^  ${name}: "((?:[^"\\\\]|\\\\.)*)"$`, 'm'))
    if (!m) throw new Error(`${file}: missing card.${name}`)
    return unquote(m[1])
  }
  const int = (name, indent = '  ') => {
    const m = head.match(new RegExp(`^${indent}${name}: (-?\\d+)$`, 'm'))
    if (!m) throw new Error(`${file}: missing numeric ${name}`)
    return Number(m[1])
  }

  const cost = {}
  for (const f of COST_FIELDS) cost[f] = int(f, '    ')

  const termsBlock = head.match(/^observed_terms:\r?\n((?:  (?:- .*|\[\])\r?\n?)+)/m)
  if (!termsBlock) throw new Error(`${file}: missing observed_terms`)
  const observed_terms = [...termsBlock[1].matchAll(/^  - "((?:[^"\\]|\\.)*)"$/gm)].map(m => unquote(m[1]))

  const rules = body.match(/^## Rules text\r?\n\r?\n([\s\S]*?)\r?\n\r?\n## Raw rules HTML/m)
  if (!rules) throw new Error(`${file}: missing Rules text section`)
  const rules_text = rules[1] === NO_RULES_PLACEHOLDER ? '' : rules[1]

  const html = body.match(/^## Raw rules HTML\r?\n\r?\n```html\r?\n([\s\S]*?)\r?\n```/m)
  if (!html) throw new Error(`${file}: missing Raw rules HTML section`)

  const retrieved = head.match(/^\s+retrieved_at: "(\d{4}-\d{2}-\d{2})"/m)

  return {
    ordinal: int('ordinal'),
    source_id: int('source_id'),
    name: str('name'),
    slug: str('slug'),
    category: str('category'),
    type: str('type'),
    rarity: str('rarity'),
    expansion: str('expansion'),
    color: str('color'),
    cost,
    observed_terms,
    rules_text,
    rules_html: html[1],
    okf_path: `cards/${path.basename(file)}`,
    retrieved_at: retrieved?.[1] ?? null,
  }
}

// CSV quoting compatible with Python's csv module defaults (QUOTE_MINIMAL).
const csvField = v => (/[",\r\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v))
const csvLine = fields => fields.map(csvField).join(',')

export function loadCards(dir = CARDS_DIR) {
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.okf.md'))
    .sort()
    .map(f => parseCard(path.join(dir, f)))
}

export function buildSidecars(cards = loadCards()) {
  const header = ['ordinal', 'source_id', 'name', 'slug', 'category', 'type', 'rarity', 'expansion', 'color',
    ...COST_FIELDS.map(f => `cost_${f}`), 'observed_terms', 'okf_path']
  const csv = [csvLine(header), ...cards.map(c => csvLine([
    c.ordinal, c.source_id, c.name, c.slug, c.category, c.type, c.rarity, c.expansion, c.color,
    ...COST_FIELDS.map(f => c.cost[f]), c.observed_terms.join('; '), c.okf_path,
  ]))].join('\n') + '\n'

  const json = JSON.stringify({
    source_url: 'https://neurrone.com/dawncaster/dawncaster-cards.db',
    generator: 'scripts/generate-dawncaster-card-sidecars.mjs',
    retrieved_at: cards[0]?.retrieved_at ?? null,
    card_count: cards.length,
    cards: cards.map(({ retrieved_at, ...c }) => c),
  }, null, 2) + '\n'

  const minimal = [csvLine(['card_number', 'card_name', 'keywords_on_card']),
    ...cards.map(c => csvLine([c.ordinal, c.name, c.observed_terms.join('; ')]))].join('\n') + '\n'

  return {
    [path.join(DIR, 'cards.csv')]: csv,
    [path.join(DIR, 'cards.json')]: json,
    [path.join(DIR, 'card-index.csv')]: minimal,
  }
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === new URL(import.meta.url).pathname
if (isMain) {
  const artifacts = buildSidecars()
  if (process.argv.includes('--check')) {
    let stale = false
    for (const [file, expected] of Object.entries(artifacts)) {
      const actual = fs.existsSync(file) ? fs.readFileSync(file, 'utf-8') : null
      if (actual !== expected) {
        console.error(`generate-dawncaster-card-sidecars: ${file} is stale — run: node scripts/generate-dawncaster-card-sidecars.mjs`)
        stale = true
      }
    }
    if (stale) process.exit(1)
    console.log('generate-dawncaster-card-sidecars: sidecars are fresh')
  }
  else {
    for (const [file, content] of Object.entries(artifacts)) {
      fs.writeFileSync(file, content)
      console.log(`generate-dawncaster-card-sidecars: wrote ${file}`)
    }
  }
}
