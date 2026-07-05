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

// --- controlled vocabularies -------------------------------------------
// Extend here first (OKF_SPEC.md is the human copy; keep in sync).
const OKF_VERSION = '0.2'
const TYPES = ['game_index', 'sources', 'rule_category', 'reception', 'better_if', 'scout_report', 'pattern', 'operations']
const GAME_TYPES = ['game_index', 'sources', 'rule_category', 'reception', 'better_if', 'scout_report']
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
// OKF 0.2 §1: pinned mechanics vocabulary (kebab-cased, seeded from BGG
// mechanism names). Keep in sync with OKF_SPEC.md.
const MECHANICS = [
  'action-points', 'action-queue', 'action-retrieval', 'action-selection',
  'area-majority-influence', 'area-movement', 'auction-bidding', 'campaign-game',
  'card-play-conflict-resolution', 'catch-up-mechanism', 'cooperative-game',
  'deck-bag-and-pool-building', 'deck-building', 'dice-rolling', 'drafting',
  'end-game-bonuses', 'engine-building', 'force-commitment', 'grid-coverage',
  'grid-movement', 'hand-management', 'hidden-information', 'income',
  'legacy-game', 'market', 'modular-board', 'multi-use-cards', 'negotiation',
  'open-drafting', 'pick-up-and-deliver', 'point-to-point-movement',
  'push-your-luck', 'race', 'resource-management', 'set-collection',
  'simultaneous-action-selection', 'solo-solitaire-game', 'tableau-building',
  'tech-trees-tech-tracks', 'tile-placement', 'trick-taking',
  'turn-order-claim-action', 'variable-player-powers', 'variable-setup',
  'worker-placement',
]
// OKF 0.2 §6: structured failure records in scout-report frontmatter.
const FOLLOWUP_FAILURES = ['tls', 'timeout', 'http_error', 'pdf_extraction', 'paywall', 'not_found', 'blocked', 'other']
const FOLLOWUP_RETRY_NEEDS = ['browser_fetch', 'pdf_tooling', 'wayback_snapshot', 'alternate_source', 'manual_review', 'other']

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
    if (!MECHANICS.includes(m)) flag(file, `mechanics tag "${m}" not in controlled vocabulary — extend OKF_SPEC.md + this script first`)
  }

  const labels = listItems('better_if_labels')
  if (labels === null && ['reception', 'better_if'].includes(type)) flag(file, 'missing better_if_labels (required on reception/better_if docs in 0.2)')
  if (labels) for (const l of labels) {
    if (!BETTER_IF_LABELS.includes(l)) flag(file, `better_if_labels "${l}" not in taxonomy`)
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
}

if (findings.length) {
  console.error(`validate-okf: ${findings.length} finding(s) across ${files.length} file(s):`)
  findings.forEach(f => console.error(`  ${f}`))
  process.exit(1)
}
console.log(`validate-okf: ${files.length} file(s) clean${fullCorpus ? ' + INDEX fresh' : ''}`)
