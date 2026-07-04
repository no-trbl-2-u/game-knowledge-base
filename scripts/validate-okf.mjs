#!/usr/bin/env node
// scripts/validate-okf.mjs — the corpus's type-checker. Zero dependencies.
//
//   node scripts/validate-okf.mjs            # validate every *.okf.md
//   node scripts/validate-okf.mjs <files...> # validate specific files
//
// Structural checks against OKF_SPEC.md (0.1, with 0.2 fields validated
// when present). Deliberately regex-based rather than a full YAML parse so
// it stays dependency-free; it checks presence, enums, and cross-refs, not
// deep structure.
//
// Exit codes: 0 clean; 1 findings (printed one per line).

import fs from 'node:fs'
import path from 'node:path'

// --- controlled vocabularies -------------------------------------------
// Extend here first (OKF_SPEC.md is the human copy; keep in sync).
const TYPES = ['game_index', 'sources', 'rule_category', 'reception', 'better_if', 'scout_report', 'pattern', 'operations']
const CONFIDENCE = ['high', 'medium', 'low']
const STATUS = ['draft', 'verified', 'needs_followup']
const PROVENANCE = ['official', 'secondary', 'community', 'unknown']
const SOURCE_KINDS = ['publisher_page', 'rulebook_pdf', 'bgg_page', 'bgg_forum', 'review', 'video', 'faq', 'errata', 'other']
const BETTER_IF_LABELS = [
  'onboarding', 'setup-teardown', 'component-clarity', 'rules-ambiguity',
  'turn-pacing', 'downtime', 'randomness', 'strategic-depth', 'runaway-leader',
  'kingmaking', 'player-interaction', 'combat-resolution', 'scoring-endgame',
  'solo-coop-automation', 'campaign-progression', 'balance-faction-asymmetry',
  'expansion-bloat', 'accessibility',
]
// mechanics vocabulary starts open (OKF 0.2 §1 will pin it); until then we
// only enforce kebab-case shape, not membership.
const KEBAB = /^[a-z0-9]+(-[a-z0-9]+)*$/

const findings = []
const flag = (file, msg) => findings.push(`${file}: ${msg}`)

function* okfFiles(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'templates') continue // templates are intentionally skeletal
      yield* okfFiles(p)
    }
    else if (entry.name.endsWith('.okf.md')) yield p
  }
}

function validate(file) {
  const text = fs.readFileSync(file, 'utf-8')
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!fm) return flag(file, 'missing frontmatter block')
  const head = fm[1]
  const body = text.slice(fm[0].length)

  const field = name => head.match(new RegExp(`^${name}:\\s*(.*)$`, 'm'))?.[1]?.trim().replace(/^["']|["']$/g, '')

  if (!field('okf_version')) flag(file, 'missing okf_version')
  const type = field('type')
  if (!type) flag(file, 'missing type')
  else if (!TYPES.includes(type)) flag(file, `type "${type}" not in [${TYPES.join(', ')}]`)

  const conf = field('confidence')
  if (!conf) flag(file, 'missing confidence')
  else if (!CONFIDENCE.includes(conf)) flag(file, `confidence "${conf}" not in [${CONFIDENCE.join(', ')}]`)

  const status = field('status')
  if (!status) flag(file, 'missing status')
  else if (!STATUS.includes(status)) flag(file, `status "${status}" not in [${STATUS.join(', ')}]`)

  if (type !== 'pattern') {
    for (const key of ['title', 'slug']) {
      if (!new RegExp(`^\\s+${key}:\\s*\\S`, 'm').test(head)) flag(file, `missing game.${key}`)
    }
    if (!/^scope:/m.test(head)) flag(file, 'missing scope')
  }

  // sources block: ids, kinds, provenance
  const srcIds = [...head.matchAll(/^\s+- id:\s*"?(src-\d{3})"?/gm)].map(m => m[1])
  if (!srcIds.length && type !== 'pattern') flag(file, 'no sources declared')
  for (const m of head.matchAll(/^\s+kind:\s*(\S+)/gm)) {
    if (!SOURCE_KINDS.includes(m[1])) flag(file, `source kind "${m[1]}" not in spec`)
  }
  for (const m of head.matchAll(/^\s+provenance:\s*(\S+)/gm)) {
    if (!PROVENANCE.includes(m[1])) flag(file, `provenance "${m[1]}" not in spec`)
  }

  // body claims must cite declared sources
  for (const m of body.matchAll(/^\s*Source:\s*(src-\d{3})/gm)) {
    if (!srcIds.includes(m[1])) flag(file, `body cites ${m[1]} but frontmatter does not declare it`)
  }

  // OKF 0.2 fields (validated when present)
  const listItems = name => {
    const inline = head.match(new RegExp(`^${name}:\\s*\\[(.*)\\]`, 'm'))
    if (inline) return inline[1].split(',').map(s => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean)
    const block = head.match(new RegExp(`^${name}:\\s*\\r?\\n((?:\\s+-\\s+.*\\r?\\n?)+)`, 'm'))
    if (block) return [...block[1].matchAll(/-\s+"?([^"\r\n]+)"?/g)].map(m => m[1].trim())
    return null
  }
  const mech = listItems('mechanics')
  if (mech) for (const m of mech) {
    if (!KEBAB.test(m)) flag(file, `mechanics tag "${m}" is not kebab-case`)
  }
  const labels = listItems('better_if_labels')
  if (labels) for (const l of labels) {
    if (!BETTER_IF_LABELS.includes(l)) flag(file, `better_if_labels "${l}" not in taxonomy`)
  }
}

const args = process.argv.slice(2)
const files = args.length ? args : [...okfFiles('KnowledgeBase')]
files.forEach(validate)

if (findings.length) {
  console.error(`validate-okf: ${findings.length} finding(s) across ${files.length} file(s):`)
  findings.forEach(f => console.error(`  ${f}`))
  process.exit(1)
}
console.log(`validate-okf: ${files.length} file(s) clean`)
