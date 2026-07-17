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
import crypto from 'node:crypto'
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
const VISUAL_SUBJECTS = VOCAB.visual_subjects
const VISUAL_USAGE_BASES = VOCAB.visual_usage_bases

const INDEX_BASENAME = 'INDEX.okf.md' // generated; freshness-checked, not field-checked

const findings = []
const flag = (file, msg) => findings.push(`${file}: ${msg}`)

function topLevelBlock(head, name) {
  const start = head.match(new RegExp(`^${name}:\\s*\\r?\\n`, 'm'))
  if (!start) return ''
  const rest = head.slice(start.index + start[0].length)
  const end = rest.search(/^[A-Za-z_][A-Za-z0-9_]*:/m)
  return end === -1 ? rest : rest.slice(0, end)
}

function entries(block, idKey = 'id') {
  return block.split(new RegExp(`(?=^  - ${idKey}:)`, 'm')).filter(s => new RegExp(`^  - ${idKey}:`, 'm').test(s))
}

function entryField(entry, name) {
  const prefix = name === 'id' ? '  - ' : '    '
  const match = entry.match(new RegExp(`^${prefix}${name}:\\s*(.*)$`, 'm'))
  return match ? match[1].trim().replace(/^["']|["']$/g, '') : null
}

function safeVisualPath(file, gameDir, value, label, maxBytes) {
  if (!value || path.isAbsolute(value) || value.includes('\\\\') || value.includes('\0') ||
      value.split('/').some(part => !part || part === '..') || !value.startsWith('visuals/') || !value.endsWith('.webp')) {
    flag(file, `${label} must be a game-relative POSIX .webp path under visuals/`)
    return null
  }
  const resolved = path.resolve(gameDir, value)
  const root = `${path.resolve(gameDir)}${path.sep}`
  if (!resolved.startsWith(root)) {
    flag(file, `${label} escapes the game directory`)
    return null
  }
  if (!fs.existsSync(resolved)) {
    flag(file, `${label} does not exist: ${value}`)
    return null
  }
  const stat = fs.lstatSync(resolved)
  if (!stat.isFile() || stat.isSymbolicLink()) {
    flag(file, `${label} must be a regular, non-symlink file: ${value}`)
    return null
  }
  const realRoot = `${fs.realpathSync(gameDir)}${path.sep}`
  const realAsset = fs.realpathSync(resolved)
  if (!realAsset.startsWith(realRoot)) {
    flag(file, `${label} real path escapes the game directory: ${value}`)
    return null
  }
  const bytes = fs.readFileSync(realAsset)
  if (bytes.length < 12 || bytes.toString('ascii', 0, 4) !== 'RIFF' || bytes.toString('ascii', 8, 12) !== 'WEBP') {
    flag(file, `${label} is not a WebP file: ${value}`)
  }
  if (bytes.length > maxBytes) flag(file, `${label} exceeds ${maxBytes} bytes: ${value}`)
  return { resolved, bytes, hash: crypto.createHash('sha256').update(bytes).digest('hex') }
}

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

  if (type === 'visual_reference') {
    const gameSlug = head.match(/^\s+slug:\s*"?([^"\r\n]+)"?/m)?.[1]?.trim()
    const gameDir = path.dirname(path.dirname(file))
    const expected = path.join(gameDir, 'visuals', 'packet.okf.md')
    if (path.resolve(file) !== path.resolve(expected)) flag(file, 'visual_reference must be games/<slug>/visuals/packet.okf.md')
    if (gameSlug && path.basename(gameDir) !== gameSlug) flag(file, `game.slug "${gameSlug}" does not match directory "${path.basename(gameDir)}"`)

    const sourceEntries = entries(topLevelBlock(head, 'sources'))
    const sourceMap = new Map(sourceEntries.map(e => [entryField(e, 'id'), e]))
    const refs = entries(topLevelBlock(head, 'visual_references'))
    if (refs.length < 4 || refs.length > 8) flag(file, `visual_references must contain 4–8 entries, found ${refs.length}`)

    const ids = new Set(), localFiles = new Set(), declared = new Set()
    let aggregateBytes = 0
    const required = ['id', 'source_id', 'file', 'subject', 'capture_type', 'creator', 'rights_holder', 'usage_basis', 'license', 'attribution', 'demonstrates', 'rationale', 'sha256']
    for (const ref of refs) {
      for (const key of required) {
        const value = entryField(ref, key)
        if (value === null) flag(file, `visual reference missing ${key}`)
        else if (key !== 'license' && !value) flag(file, `visual reference ${entryField(ref, 'id') ?? '(unknown)'} has empty ${key}`)
      }
      const id = entryField(ref, 'id')
      if (!/^vis-\d{3}$/.test(id ?? '')) flag(file, `visual id "${id}" must match vis-NNN`)
      else if (ids.has(id)) flag(file, `duplicate visual id ${id}`)
      else ids.add(id)

      const sourceId = entryField(ref, 'source_id')
      const source = sourceMap.get(sourceId)
      if (!source) flag(file, `visual ${id} cites undeclared source ${sourceId}`)
      else {
        if (!entryField(source, 'url')) flag(file, `source ${sourceId} used by ${id} has no url`)
        if (!entryField(source, 'asset_url')) flag(file, `source ${sourceId} used by ${id} has no asset_url`)
        if (!entryField(source, 'retrieved_at')) flag(file, `source ${sourceId} used by ${id} has no retrieved_at`)
      }

      const subject = entryField(ref, 'subject')
      if (!VISUAL_SUBJECTS.includes(subject)) flag(file, `visual subject "${subject}" not in controlled vocabulary`)
      const usage = entryField(ref, 'usage_basis')
      if (!VISUAL_USAGE_BASES.includes(usage)) flag(file, `visual usage_basis "${usage}" not in controlled vocabulary`)
      if (usage === 'open-license' && !entryField(ref, 'license')) flag(file, `${id} uses open-license but license is empty`)
      if (usage === 'editorial-excerpt' && !entryField(ref, 'rationale')) flag(file, `${id} uses editorial-excerpt but rationale is empty`)

      const local = entryField(ref, 'file')
      if (localFiles.has(local)) flag(file, `duplicate visual file ${local}`)
      localFiles.add(local)
      const asset = safeVisualPath(file, gameDir, local, `${id}.file`, 256 * 1024)
      if (asset) {
        declared.add(path.resolve(asset.resolved))
        aggregateBytes += asset.bytes.length
        const claimed = entryField(ref, 'sha256')
        if (!/^[0-9a-f]{64}$/.test(claimed ?? '')) flag(file, `${id}.sha256 must be 64 lowercase hex characters`)
        else if (claimed !== asset.hash) flag(file, `${id}.sha256 does not match ${local}`)
      }
    }

    const sheetPath = field('contact_sheet')
    const sheet = safeVisualPath(file, gameDir, sheetPath, 'contact_sheet', 512 * 1024)
    if (sheet) {
      declared.add(path.resolve(sheet.resolved))
      aggregateBytes += sheet.bytes.length
      const claimed = field('contact_sheet_sha256')
      if (!/^[0-9a-f]{64}$/.test(claimed ?? '')) flag(file, 'contact_sheet_sha256 must be 64 lowercase hex characters')
      else if (claimed !== sheet.hash) flag(file, 'contact_sheet_sha256 does not match contact_sheet')
    }
    if (aggregateBytes > 2 * 1024 * 1024) flag(file, 'visual packet exceeds 2 MiB aggregate limit')

    const visualsDir = path.join(gameDir, 'visuals')
    if (fs.existsSync(visualsDir)) {
      const walk = dir => {
        for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
          const absolute = path.join(dir, item.name)
          if (item.isDirectory()) walk(absolute)
          else if (item.isFile() && item.name.endsWith('.webp') && !declared.has(path.resolve(absolute))) {
            flag(file, `orphan WebP not declared by packet: ${path.relative(gameDir, absolute)}`)
          }
        }
      }
      walk(visualsDir)
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
  const gamesDir = path.join('KnowledgeBase', 'BoardGames', 'games')
  for (const game of fs.readdirSync(gamesDir, { withFileTypes: true }).filter(e => e.isDirectory())) {
    const packet = path.join(gamesDir, game.name, 'visuals', 'packet.okf.md')
    if (!fs.existsSync(packet)) flag(packet, 'missing required visual reference packet')
  }

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
