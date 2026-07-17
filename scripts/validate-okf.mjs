#!/usr/bin/env node
// scripts/validate-okf.mjs — the corpus's type-checker. Zero dependencies.
//
//   node scripts/validate-okf.mjs            # validate every *.okf.md + INDEX freshness
//   node scripts/validate-okf.mjs <files...> # validate specific files (no freshness check)
//
// Structural checks against OKF_SPEC.md 0.2. Deliberately regex-based rather
// than a full YAML parse so it stays dependency-free; it checks presence,
// enums, and cross-refs, not deep structure.
//
// Exit codes: 0 clean; 1 findings (printed one per line).

import fs from 'node:fs'
import path from 'node:path'
import { buildIndex } from './generate-index.mjs'
import { buildSidecars } from './generate-dawncaster-card-sidecars.mjs'
import { logScan } from './telemetry-log.mjs'

// --- controlled vocabularies -------------------------------------------
// SINGLE SOURCE: KnowledgeBase/OKF_VOCAB.json (OKF_SPEC.md is the
// human-readable mirror). Extend the JSON first; this script only loads it.
const VOCAB = JSON.parse(
  fs.readFileSync(new URL('../KnowledgeBase/OKF_VOCAB.json', import.meta.url), 'utf-8'),
)
const OKF_VERSION = VOCAB.okf_version
const TYPES = VOCAB.types
const GAME_TYPES = VOCAB.game_types
const CONFIDENCE = VOCAB.confidence
const STATUS = VOCAB.status
const PROVENANCE = VOCAB.provenance
const SOURCE_KINDS = VOCAB.source_kinds
const BETTER_IF_LABELS = VOCAB.better_if_labels
const MECHANICS = VOCAB.mechanics
const FOLLOWUP_FAILURES = VOCAB.followup_failures
const FOLLOWUP_RETRY_NEEDS = VOCAB.followup_retry_needs

const INDEX_BASENAME = 'INDEX.okf.md' // generated; freshness-checked, not field-checked

const findings = []
const flag = (file, msg) => findings.push(`${file}: ${msg}`)

function* okfFiles(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'templates') continue // templates are intentionally skeletal
      yield* okfFiles(p)
    }
    else if (entry.name.endsWith('.okf.md') && entry.name !== INDEX_BASENAME) yield p
  }
}

function validate(file) {
  const text = fs.readFileSync(file, 'utf-8')
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!fm) return flag(file, 'missing frontmatter block')
  const head = fm[1]
  const body = text.slice(fm[0].length)

  const field = name => head.match(new RegExp(`^${name}:\\s*(.*)$`, 'm'))?.[1]?.trim().replace(/^["']|["']$/g, '')

  const version = field('okf_version')
  if (!version) flag(file, 'missing okf_version')
  else if (version !== OKF_VERSION) flag(file, `okf_version "${version}" — corpus is pinned to ${OKF_VERSION}, migrate this doc`)

  const type = field('type')
  if (!type) flag(file, 'missing type')
  else if (!TYPES.includes(type)) flag(file, `type "${type}" not in [${TYPES.join(', ')}]`)

  const conf = field('confidence')
  if (!conf) flag(file, 'missing confidence')
  else if (!CONFIDENCE.includes(conf)) flag(file, `confidence "${conf}" not in [${CONFIDENCE.join(', ')}]`)

  const status = field('status')
  if (!status) flag(file, 'missing status')
  else if (!STATUS.includes(status)) flag(file, `status "${status}" not in [${STATUS.join(', ')}]`)

  if (GAME_TYPES.includes(type)) {
    for (const key of ['title', 'slug']) {
      if (!new RegExp(`^\\s+${key}:\\s*\\S`, 'm').test(head)) flag(file, `missing game.${key}`)
    }
    if (!/^scope:/m.test(head)) flag(file, 'missing scope')
  }

  // sources block: ids, kinds, provenance
  const srcIds = [...head.matchAll(/^\s+- id:\s*"?(src-\d{3})"?/gm)].map(m => m[1])
  if (!srcIds.length && GAME_TYPES.includes(type)) flag(file, 'no sources declared')
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

  // OKF 0.2 fields
  const listItems = name => {
    const inline = head.match(new RegExp(`^${name}:\\s*\\[(.*)\\]`, 'm'))
    if (inline) return inline[1].split(',').map(s => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean)
    const block = head.match(new RegExp(`^${name}:\\s*\\r?\\n((?:\\s+-\\s+.*\\r?\\n?)+)`, 'm'))
    if (block) return [...block[1].matchAll(/-\s+"?([^"\r\n]+)"?/g)].map(m => m[1].trim())
    return null
  }

  const mech = listItems('mechanics')
  if (mech === null && GAME_TYPES.includes(type)) flag(file, 'missing mechanics (required on game docs in 0.2)')
  if (mech) for (const m of mech) {
    if (!MECHANICS.includes(m)) flag(file, `mechanics tag "${m}" not in controlled vocabulary — extend KnowledgeBase/OKF_VOCAB.json (+ OKF_SPEC.md prose) first`)
  }

  const labels = listItems('better_if_labels')
  if (labels === null && ['reception', 'better_if'].includes(type)) flag(file, 'missing better_if_labels (required on reception/better_if docs in 0.2)')
  if (labels) for (const l of labels) {
    if (!BETTER_IF_LABELS.includes(l)) flag(file, `better_if_labels "${l}" not in taxonomy`)
  }

  // card_record structure: identity fields plus a properly nested cost vector.
  // The nesting check matters — cost fields indented level with `cost:` parse
  // as siblings of it and the cost block silently reads as null.
  if (type === 'card_record') {
    for (const key of ['name', 'slug', 'source_id', 'ordinal']) {
      if (!new RegExp(`^  ${key}: \\S`, 'm').test(head)) flag(file, `missing card.${key}`)
    }
    const scalarCost = /^  cost:\s+\S/m.test(head)
    const vectorCost = /^  cost:\s*$/m.test(head)
    if (!scalarCost && !vectorCost) flag(file, 'missing card.cost (scalar or nested cost vector)')
    if (vectorCost) for (const key of ['dex', 'int', 'str', 'holy', 'neutral', 'dexint', 'dexstr', 'intstr', 'blood']) {
      if (!new RegExp(`^    ${key}: -?\\d+$`, 'm').test(head)) flag(file, `card.cost.${key} missing or not nested under cost (needs 4-space indent)`)
    }
  }

  // OKF 0.2 §6: followups block (structured failure records)
  const hasFollowups = /^followups:\s*$/m.test(head) || /^followups:\s*\[/m.test(head)
  for (const m of head.matchAll(/^\s+failure:\s*(\S+)/gm)) {
    if (!FOLLOWUP_FAILURES.includes(m[1])) flag(file, `followups failure "${m[1]}" not in [${FOLLOWUP_FAILURES.join(', ')}]`)
  }
  for (const m of head.matchAll(/^\s+retry_needs:\s*(\S+)/gm)) {
    if (!FOLLOWUP_RETRY_NEEDS.includes(m[1])) flag(file, `followups retry_needs "${m[1]}" not in [${FOLLOWUP_RETRY_NEEDS.join(', ')}]`)
  }
  if (type === 'scout_report' && status === 'needs_followup') {
    const hasEntries = /^followups:\s*\r?\n\s+-\s/m.test(head)
    if (!hasFollowups || !hasEntries) flag(file, 'scout_report with status needs_followup must carry a non-empty followups block (OKF 0.2 §6)')
  }
}

const args = process.argv.slice(2)
const fullCorpus = !args.length
const files = fullCorpus ? [...okfFiles('KnowledgeBase')] : args
files.forEach(validate)

// INDEX freshness (full-corpus mode only): regenerate and diff
if (fullCorpus) {
  const indexFile = path.join('KnowledgeBase/BoardGames', INDEX_BASENAME)
  const actual = fs.existsSync(indexFile) ? fs.readFileSync(indexFile, 'utf-8') : null
  if (actual !== buildIndex()) flag(indexFile, 'stale or missing — run: node scripts/generate-index.mjs')

  // Dawncaster card sidecars (cards.csv / cards.json / card-index.csv) are
  // derived from the card records; regenerate and diff the same way.
  try {
    for (const [file, expected] of Object.entries(buildSidecars())) {
      const onDisk = fs.existsSync(file) ? fs.readFileSync(file, 'utf-8') : null
      if (onDisk !== expected) flag(file, 'stale or missing — run: node scripts/generate-dawncaster-card-sidecars.mjs')
    }
  }
  catch (err) {
    flag('KnowledgeBase/DigitalCardGames/dawncaster', `card sidecar generation failed: ${err.message}`)
  }
}

// Full-corpus runs log to TELEMETRY.md; single-file runs (the post-write
// hook fires one per record written) would drown the log and are skipped.
if (fullCorpus) {
  logScan({
    pass: 'validate-okf',
    scope: 'full corpus + index/sidecar freshness',
    scanned: `${files.length} files`,
    findings: findings.length,
    complete: true,
  })
}

if (findings.length) {
  console.error(`validate-okf: ${findings.length} finding(s) across ${files.length} file(s):`)
  findings.forEach(f => console.error(`  ${f}`))
  process.exit(1)
}
console.log(`validate-okf: ${files.length} file(s) clean${fullCorpus ? ' + INDEX fresh' : ''}`)
