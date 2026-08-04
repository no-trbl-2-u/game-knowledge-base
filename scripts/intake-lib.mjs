import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'

export const COHORT_LIMITS = Object.freeze({ cooperative: 1, solo_rpg: 1, rotating_focus: 1 })
export const MAX_CANDIDATES = 3
export const INTAKE_SCHEMA_VERSION = 3
export const CANDIDATE_STATUSES = new Set(['blocked', 'ready_for_audit', 'rejected', 'approved', 'promoted'])
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
export const SOURCE_ROLES = new Set(['identity', 'official_rules', 'independent_review', 'rating', 'visual', 'faq', 'errata', 'designer_commentary', 'community'])
export const REQUIRED_AUDIT_CHECKS = Object.freeze([
  'official_rules_inspected',
  'independent_review_inspected',
  'claims_supported',
  'source_roles_distinct',
  'rating_evidence_checked',
  'visuals_meaningful',
  'no_placeholders',
  'no_generated_semantic_content',
])

const PLACEHOLDER_PATTERNS = [
  /example\.invalid/i,
  /(?:^|[\s"'])https?:\/\/(?:localhost|127\.0\.0\.1|0\.0\.0\.0|example\.com)(?:[/:\s"']|$)/i,
  /\{\{[^}]+\}\}/,
  /\b(?:TBD|TODO|PLACEHOLDER|LOREM IPSUM)\b/i,
  /\byes\/no(?:\/n-a)?\b/i,
  /model[- ]authored|generated filler|synthetic evidence/i,
]

const SEMANTIC_GENERATOR_ALLOWLIST = new Set([
  'scripts/intake-lib.mjs',
  'scripts/validate-intake.mjs',
  'scripts/promote-intake.mjs',
  'scripts/generate-index.mjs',
  'scripts/generate-dawncaster-card-sidecars.mjs',
  'scripts/generate-dawncaster-card-okf.py',
  'scripts/generate-dawncaster-keywords-okf.py',
])

export function readJson(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')) }
  catch (err) { throw new Error(`${file}: invalid JSON (${err.message})`) }
}

export function writeJson(file, value) {
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`)
}

export function walkFiles(root) {
  if (!fs.existsSync(root)) return []
  const out = []
  const walk = dir => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const file = path.join(dir, entry.name)
      if (entry.isSymbolicLink()) throw new Error(`symbolic links are prohibited in hashed trees: ${file}`)
      if (entry.isDirectory()) walk(file)
      else if (entry.isFile()) out.push(file)
    }
  }
  walk(root)
  return out.sort()
}

export function symlinkFindings(root, label = root) {
  if (!fs.existsSync(root)) return []
  const findings = []
  const walk = dir => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const file = path.join(dir, entry.name)
      if (entry.isSymbolicLink()) findings.push(`${label}: symbolic link prohibited at ${path.relative(root, file).replaceAll('\\', '/')}`)
      else if (entry.isDirectory()) walk(file)
    }
  }
  walk(root)
  return findings
}

export function sha256(value) {
  return crypto.createHash('sha256').update(value).digest('hex')
}

export function hashTree(root, { exclude = [] } = {}) {
  const ignored = new Set(exclude.map(p => p.replaceAll('\\', '/')))
  const manifest = []
  for (const file of walkFiles(root)) {
    const rel = path.relative(root, file).replaceAll('\\', '/')
    if (ignored.has(rel)) continue
    const bytes = fs.readFileSync(file)
    manifest.push({ path: rel, type: 'file', byte_length: bytes.length, sha256: sha256(bytes) })
  }
  return sha256(JSON.stringify(manifest))
}

export function packetHash(candidateDir) {
  const canonical = path.join(candidateDir, 'canonical')
  const evidence = path.join(candidateDir, 'evidence.json')
  if (!fs.existsSync(canonical) || !fs.existsSync(evidence)) return null
  const manifest = []
  const evidenceBytes = fs.readFileSync(evidence)
  manifest.push({ path: 'evidence.json', type: 'file', byte_length: evidenceBytes.length, sha256: sha256(evidenceBytes) })
  for (const file of walkFiles(canonical)) {
    const rel = path.relative(canonical, file).replaceAll('\\', '/')
    const bytes = fs.readFileSync(file)
    manifest.push({ path: `canonical/${rel}`, type: 'file', byte_length: bytes.length, sha256: sha256(bytes) })
  }
  return sha256(JSON.stringify(manifest))
}

export function sourceDomain(url) {
  try {
    const parsed = new URL(url)
    if (!['http:', 'https:'].includes(parsed.protocol)) return null
    return parsed.hostname.toLowerCase().replace(/^www\./, '')
  }
  catch { return null }
}

const MULTIPART_PUBLIC_SUFFIXES = new Set([
  'co.uk', 'org.uk', 'ac.uk', 'gov.uk',
  'com.au', 'net.au', 'org.au', 'edu.au',
  'co.nz', 'org.nz', 'govt.nz',
  'com.br', 'com.mx', 'com.ar',
  'co.jp', 'co.kr', 'co.in', 'co.za',
])

export function sourceOrganizationDomain(url) {
  const host = sourceDomain(url)
  if (!host) return null
  if (/^[0-9.]+$/.test(host) || host.includes(':')) return host
  const labels = host.split('.')
  if (labels.length <= 2) return host
  const suffix = labels.slice(-2).join('.')
  return labels.slice(MULTIPART_PUBLIC_SUFFIXES.has(suffix) ? -3 : -2).join('.')
}

export function isBgg(url) {
  const host = sourceDomain(url)
  return host === 'boardgamegeek.com' || host?.endsWith('.boardgamegeek.com') || false
}

export function placeholderFindings(text, label = 'content') {
  const findings = []
  for (const pattern of PLACEHOLDER_PATTERNS) {
    if (pattern.test(text)) findings.push(`${label}: prohibited placeholder/fabrication marker ${pattern}`)
  }
  return findings
}

// Coverage is descriptive, not an admission gate. These checks exist only so a
// ledger cannot be made to flatter itself: a recorded count may not exceed its
// denominator, an unknown denominator must stay honestly null rather than be
// manufactured, and the percentage must be the arithmetic result rather than a
// number a worker preferred. Partial coverage is a legal, publishable state;
// later passes add to it. See intake/README.md, "Coverage is additive".
function coverageMetricFindings(metric, label) {
  const findings = []
  const recorded = metric?.recorded
  const knownTotal = metric?.known_total
  const percent = metric?.percent
  if (!Number.isInteger(recorded) || recorded < 0) findings.push(`${label}.recorded must be a non-negative integer`)
  if (knownTotal !== null && (!Number.isInteger(knownTotal) || knownTotal <= 0)) findings.push(`${label}.known_total must be null or a positive integer`)
  if (knownTotal === null) {
    if (percent !== null) findings.push(`${label}.percent must be null when known_total is null`)
    return findings
  }
  if (Number.isInteger(recorded) && recorded > knownTotal) findings.push(`${label}.recorded cannot exceed known_total`)
  const expected = Number.isInteger(recorded) ? Math.round((recorded / knownTotal) * 1000) / 10 : null
  if (typeof percent !== 'number' || !Number.isFinite(percent) || Math.abs(percent - expected) > 0.0001) findings.push(`${label}.percent must equal the recorded/known_total percentage rounded to one decimal (${expected})`)
  return findings
}

export function coverageFindings(candidate, label = 'candidate') {
  const findings = []
  const coverage = candidate?.coverage
  if (!coverage || typeof coverage !== 'object' || Array.isArray(coverage)) return [`${label}.coverage is required`]
  if (typeof coverage.deckbuilder !== 'boolean') findings.push(`${label}.coverage.deckbuilder must be boolean`)
  if (String(coverage.methodology ?? '').trim().length < 20) findings.push(`${label}.coverage.methodology must explain the denominator in at least 20 characters`)
  findings.push(...coverageMetricFindings(coverage.rules, `${label}.coverage.rules`))
  findings.push(...coverageMetricFindings(coverage.factual, `${label}.coverage.factual`))
  return findings
}

export function gapFindings(candidate, label = 'candidate') {
  const findings = []
  const gap = candidate?.gap
  if (candidate?.status !== 'blocked') {
    if (gap !== undefined) findings.push(`${label}.gap is permitted only for blocked candidates`)
    return findings
  }
  if (!gap || typeof gap !== 'object' || Array.isArray(gap)) return [`${label}.gap is required for a blocked candidate`]
  if (String(gap.threshold_summary ?? '').trim().length < 40) findings.push(`${label}.gap.threshold_summary must state what remains unretrieved in at least 40 characters`)
  // retry_leads names document sources a later scheduled pass should attempt.
  // help_requested is the legacy key from the attended era and stays readable.
  const leadsKey = gap.retry_leads !== undefined || gap.help_requested === undefined ? 'retry_leads' : 'help_requested'
  for (const key of ['missing_evidence', leadsKey]) {
    if (!Array.isArray(gap[key]) || !gap[key].length) findings.push(`${label}.gap.${key} must be a non-empty array`)
    else for (const [i, value] of gap[key].entries()) if (String(value ?? '').trim().length < 20) findings.push(`${label}.gap.${key}[${i}] must contain at least 20 characters`)
  }
  if (!Array.isArray(gap.attempted_sources) || !gap.attempted_sources.length) findings.push(`${label}.gap.attempted_sources must be a non-empty array`)
  else for (const [i, attempt] of gap.attempted_sources.entries()) {
    if (!sourceDomain(attempt?.url)) findings.push(`${label}.gap.attempted_sources[${i}].url must be an absolute HTTP(S) URL`)
    if (String(attempt?.result ?? '').trim().length < 20) findings.push(`${label}.gap.attempted_sources[${i}].result must contain at least 20 characters`)
  }
  return findings
}

export function validateManifest(manifest, label = 'manifest.json') {
  const findings = []
  const flag = msg => findings.push(`${label}: ${msg}`)
  if (manifest?.schema_version !== INTAKE_SCHEMA_VERSION) flag(`schema_version must be ${INTAKE_SCHEMA_VERSION}`)
  if (!/^[0-9]{4}-[0-9]{2}-[0-9]{2}(?:-[a-z0-9-]+)?$/.test(manifest?.run_id ?? '')) flag('run_id must be YYYY-MM-DD or YYYY-MM-DD-slug')
  if (manifest?.scout?.name !== 'Bathcat') flag('scout.name must be Bathcat')
  if (!manifest?.scout?.role) flag('scout.role is required')
  const target = manifest?.target ?? {}
  for (const [cohort, limit] of Object.entries(COHORT_LIMITS)) {
    if (target[cohort] !== limit) flag(`target.${cohort} must be ${limit}`)
  }
  if (target.total !== MAX_CANDIDATES) flag(`target.total must be ${MAX_CANDIDATES}`)
  if (!Array.isArray(manifest?.candidates)) return [...findings, `${label}: candidates must be an array`]
  if (manifest.candidates.length > 1) flag(`split-disposition runs may contain at most one candidate, found ${manifest.candidates.length}`)
  if (manifest.candidates.length > MAX_CANDIDATES) flag(`candidate count ${manifest.candidates.length} exceeds ${MAX_CANDIDATES}`)
  const slugs = new Set()
  const bggIds = new Set()
  const counts = { cooperative: 0, solo_rpg: 0, rotating_focus: 0 }
  for (const [i, candidate] of manifest.candidates.entries()) {
    const where = `candidate[${i}]`
    if (!candidate?.slug || !SLUG_RE.test(candidate.slug)) flag(`${where}.slug must be a lowercase hyphenated slug`)
    else if (slugs.has(candidate.slug)) flag(`duplicate candidate slug ${candidate.slug}`)
    else slugs.add(candidate.slug)
    if (candidate?.bgg_id !== null && candidate?.bgg_id !== undefined) {
      if (!Number.isInteger(candidate.bgg_id) || candidate.bgg_id <= 0) flag(`${where}.bgg_id must be null or a positive integer`)
      else if (bggIds.has(candidate.bgg_id)) flag(`duplicate candidate bgg_id ${candidate.bgg_id}`)
      else bggIds.add(candidate.bgg_id)
    }
    if (!candidate?.title) flag(`${where}.title is required`)
    if (!candidate?.cohort || !Object.hasOwn(counts, candidate.cohort)) flag(`${where}.cohort must be cooperative, solo_rpg, or rotating_focus`)
    else counts[candidate.cohort] += 1
    if (candidate?.cohort === 'rotating_focus' && String(candidate?.focus_fit ?? '').trim().length < 20) flag(`${where}.focus_fit must explain the rotating-focus match in at least 20 characters`)
    if (!CANDIDATE_STATUSES.has(candidate?.status)) flag(`${where}.status is invalid`)
    if (!Array.isArray(candidate?.discovery_sources) || !candidate.discovery_sources.length) flag(`${where}.discovery_sources must contain at least one URL`)
    else for (const url of candidate.discovery_sources) {
      if (!sourceDomain(url)) flag(`${where}.discovery_sources contains invalid URL ${url}`)
    }
    if (candidate?.status === 'blocked' && (!Array.isArray(candidate.blockers) || !candidate.blockers.length)) flag(`${where}.blockers must explain a blocked candidate`)
    if (candidate?.status !== 'blocked' && candidate?.blockers?.length) flag(`${where} is ${candidate.status} but still has manifest blockers`)
    findings.push(...coverageFindings(candidate, `${label}: ${where}`))
    findings.push(...gapFindings(candidate, `${label}: ${where}`))
  }
  for (const [cohort, count] of Object.entries(counts)) {
    if (count > COHORT_LIMITS[cohort]) flag(`${cohort} count ${count} exceeds ${COHORT_LIMITS[cohort]}`)
  }
  return findings
}

function validReceiptHash(value) { return /^[0-9a-f]{64}$/.test(value ?? '') }
function validDate(value) { return /^20[0-9]{2}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(?:\.[0-9]+)?Z$/.test(value ?? '') }

export function validateEvidence(evidence, label = 'evidence.json', { indexText = '' } = {}) {
  const findings = []
  const flag = msg => findings.push(`${label}: ${msg}`)
  if (evidence?.schema_version !== INTAKE_SCHEMA_VERSION) flag(`schema_version must be ${INTAKE_SCHEMA_VERSION}`)
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(evidence?.slug ?? '')) flag('slug must be lowercase kebab-case')
  if (evidence?.researcher?.name !== 'Bathcat') flag('researcher.name must be Bathcat')
  if (!validDate(evidence?.researched_at)) flag('researched_at must be an ISO UTC timestamp')
  if (!Array.isArray(evidence?.sources)) return [...findings, `${label}: sources must be an array`]
  const ids = new Set()
  const byRole = new Map()
  for (const [i, source] of evidence.sources.entries()) {
    const where = `${label}.sources[${i}]`
    if (!/^src-[0-9]{3}$/.test(source?.id ?? '')) flag(`${where}.id must match src-NNN`)
    else if (ids.has(source.id)) flag(`${where}.id duplicates ${source.id}`)
    else ids.add(source.id)
    if (!source?.title) flag(`${where}.title is required`)
    if (!Array.isArray(source?.roles) || !source.roles.length) flag(`${where}.roles must be non-empty`)
    else for (const role of source.roles) {
      if (!SOURCE_ROLES.has(role)) flag(`${where}.roles contains invalid role ${role}`)
      if (!byRole.has(role)) byRole.set(role, [])
      byRole.get(role).push(source)
    }
    for (const key of ['url', 'final_url']) {
      if (!sourceDomain(source?.[key])) flag(`${where}.${key} must be an absolute HTTP(S) URL`)
      findings.push(...placeholderFindings(String(source?.[key] ?? ''), `${label}: ${where}.${key}`))
    }
    if (!['official', 'secondary', 'community'].includes(source?.provenance)) flag(`${where}.provenance must be official, secondary, or community`)
    if (!Number.isInteger(source?.http_status) || source.http_status < 200 || source.http_status >= 400) flag(`${where}.http_status must be 200–399`)
    if (!source?.content_type) flag(`${where}.content_type is required`)
    if (!Number.isInteger(source?.byte_length) || source.byte_length < 64) flag(`${where}.byte_length must be at least 64`)
    if (!validReceiptHash(source?.sha256)) flag(`${where}.sha256 must be 64 lowercase hex characters`)
    if (!validDate(source?.retrieved_at)) flag(`${where}.retrieved_at must be an ISO UTC timestamp`)
    if (!source?.locator) flag(`${where}.locator is required`)
    if (!source?.evidence || String(source.evidence).trim().length < 20) flag(`${where}.evidence must contain at least 20 characters of extracted evidence`)
  }
  const rules = byRole.get('official_rules') ?? []
  if (!rules.length) flag('at least one official_rules receipt is required')
  else if (!rules.some(s => s.provenance === 'official' && !isBgg(s.final_url || s.url))) flag('official_rules must be official and outside BGG')
  const reviews = byRole.get('independent_review') ?? []
  if (!reviews.length) flag('at least one independent_review receipt is required')
  else if (!reviews.some(s => ['secondary', 'community'].includes(s.provenance) && !isBgg(s.final_url || s.url))) flag('independent_review must be independent and outside BGG')
  if (!(byRole.get('visual') ?? []).length) flag('at least one visual source receipt is required')
  const nonBgg = evidence.sources.filter(s => !isBgg(s.final_url || s.url))
  if (new Set(nonBgg.map(s => sourceOrganizationDomain(s.final_url || s.url))).size < 2) flag('at least two distinct non-BGG organizational domains are required')
  const officialDomains = new Set(rules.map(s => sourceOrganizationDomain(s.final_url || s.url)).filter(Boolean))
  if (reviews.some(s => officialDomains.has(sourceOrganizationDomain(s.final_url || s.url)))) flag('independent review must not share the official-rules organizational domain')
  const weightClaimed = /^\s+weight:\s*(?!null\b)\S+/m.test(indexText)
  if (weightClaimed && !(byRole.get('rating') ?? []).length) flag('game.weight is claimed but no rating receipt exists')
  return findings
}

export function claimTripletFindings(text, label, { requireClaim = false, requireSourceId = true } = {}) {
  const body = text.replace(/^---\r?\n[\s\S]*?\r?\n---/, '')
  const lines = body.split(/\r?\n/)
  const claims = []
  for (let i = 0; i < lines.length; i += 1) {
    if (!/^\s*-?\s*Claim:\s*\S/.test(lines[i])) continue
    const block = [lines[i]]
    for (let j = i + 1; j < lines.length && !/^\s*-?\s*Claim:\s*\S/.test(lines[j]) && !/^##\s/.test(lines[j]); j += 1) block.push(lines[j])
    const joined = block.join('\n')
    const missing = []
    const sourcePattern = requireSourceId
      ? /^\s*(?:-\s*)?Source:\s*src-[0-9]{3}(?:\s*,\s*src-[0-9]{3})*\s*$/m
      : /^\s*(?:-\s*)?Source:\s*\S.*$/m
    if (!sourcePattern.test(joined)) missing.push('Source')
    if (!/^\s*(?:-\s*)?Evidence:\s*\S.{9,}$/m.test(joined)) missing.push('Evidence')
    if (!/^\s*(?:-\s*)?Confidence:\s*(?:high|medium|low)\s*$/m.test(joined)) missing.push('Confidence')
    claims.push({ line: i + 1, missing, text: lines[i] })
  }
  const findings = claims.filter(c => c.missing.length).map(c => `${label}:${c.line}: claim missing ${c.missing.join(', ')}`)
  if (requireClaim && !claims.length) findings.push(`${label}: at least one Source/Evidence/Confidence claim triplet is required`)
  return { findings, claims }
}

export function normalizedParagraphs(text) {
  const body = text.replace(/^---\r?\n[\s\S]*?\r?\n---/, '')
  return body.split(/\r?\n\s*\r?\n/)
    .map(p => p.replace(/\s+/g, ' ').trim().toLowerCase())
    .filter(p => p.length >= 120 && !p.startsWith('## '))
}

export function duplicateParagraphFindings(documents) {
  const seen = new Map()
  const findings = []
  for (const doc of documents) {
    for (const paragraph of normalizedParagraphs(doc.text)) {
      const key = sha256(paragraph)
      const previous = seen.get(key)
      if (previous && previous.slug !== doc.slug) findings.push(`${doc.file}: duplicates a >=120-character paragraph from ${previous.file}`)
      else if (!previous) seen.set(key, doc)
    }
  }
  return findings
}

export function semanticGeneratorFindings(repoRoot, changedFiles) {
  const findings = []
  for (const rel of changedFiles) {
    const clean = rel.replaceAll('\\', '/')
    if (!clean.startsWith('scripts/') || clean.includes('.test.') || SEMANTIC_GENERATOR_ALLOWLIST.has(clean) || !/\.(?:mjs|js|py)$/.test(clean)) continue
    const file = path.join(repoRoot, clean)
    if (!fs.existsSync(file)) continue
    const text = fs.readFileSync(file, 'utf8')
    const writes = /(?:writeFile|write_text|mkdir|copyFile|cpSync|open\([^\n]+['"]w)/.test(text)
    const targetsGames = /KnowledgeBase[\\/]+BoardGames[\\/]+games|BoardGames.*games|gamesDir/.test(text)
    if (writes && targetsGames) findings.push(`${clean}: semantic generator may write directly into canonical games/; only promote-intake.mjs is allowed`)
  }
  return findings
}

export function pixelMetrics(file) {
  const result = spawnSync('ffmpeg', [
    '-v', 'error', '-i', file,
    '-vf', 'scale=512:-1:force_original_aspect_ratio=decrease',
    '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-',
  ], { encoding: null, maxBuffer: 4 * 1024 * 1024 })
  if (result.error?.code === 'ENOENT') throw new Error('ffmpeg is required for visual anomaly validation')
  if (result.status !== 0) throw new Error(`ffmpeg could not decode ${file}: ${String(result.stderr || '').trim()}`)
  const raw = result.stdout
  const pixels = Math.floor(raw.length / 3)
  if (!pixels) throw new Error(`ffmpeg returned no pixels for ${file}`)
  const step = Math.max(1, Math.floor(pixels / 100000))
  const counts = new Map()
  let sampled = 0
  for (let p = 0; p < pixels; p += step) {
    const i = p * 3
    const key = (raw[i] << 16) | (raw[i + 1] << 8) | raw[i + 2]
    counts.set(key, (counts.get(key) ?? 0) + 1)
    sampled += 1
  }
  let entropy = 0
  let dominant = 0
  for (const count of counts.values()) {
    const probability = count / sampled
    entropy -= probability * Math.log2(probability)
    dominant = Math.max(dominant, probability)
  }
  return { pixels, sampled, uniqueColors: counts.size, entropy, dominant }
}

export function visualAnomalyFindings(files) {
  const findings = []
  const hashes = new Map()
  for (const file of files) {
    const bytes = fs.readFileSync(file)
    const hash = sha256(bytes)
    const previous = hashes.get(hash)
    if (previous) findings.push(`${file}: duplicate visual bytes from ${previous}`)
    else hashes.set(hash, file)
    try {
      const metrics = pixelMetrics(file)
      if (metrics.entropy < 1.25 || metrics.dominant > 0.90) {
        findings.push(`${file}: low-information visual (pixel entropy ${metrics.entropy.toFixed(2)}, dominant color ${(metrics.dominant * 100).toFixed(1)}%)`)
      }
    }
    catch (err) { findings.push(`${file}: ${err.message}`) }
  }
  return findings
}

export function approvalFindings(approval, candidateDir, evidence, label = 'approval.json') {
  const findings = []
  const flag = msg => findings.push(`${label}: ${msg}`)
  if (approval?.schema_version !== INTAKE_SCHEMA_VERSION) flag(`schema_version must be ${INTAKE_SCHEMA_VERSION}`)
  if (approval?.decision !== 'approved') flag('decision must be approved')
  if (approval?.auditor?.name !== 'The Mennonite') flag('auditor.name must be The Mennonite')
  if (!approval?.auditor?.role) flag('auditor.role is required')
  if (approval?.auditor?.name === evidence?.researcher?.name) flag('auditor must differ from researcher')
  if (!validDate(approval?.reviewed_at)) flag('reviewed_at must be an ISO UTC timestamp')
  const actual = packetHash(candidateDir)
  if (!actual || approval?.packet_sha256 !== actual) flag(`packet_sha256 does not match immutable candidate packet (expected ${actual ?? 'unavailable'})`)
  for (const check of REQUIRED_AUDIT_CHECKS) {
    if (approval?.checks?.[check] !== true) flag(`checks.${check} must be true`)
  }
  const sourceIds = new Set((evidence?.sources ?? []).map(s => s.id))
  const reviewed = new Set(approval?.reviewed_source_ids ?? [])
  for (const id of sourceIds) if (!reviewed.has(id)) flag(`reviewed_source_ids omits ${id}`)
  if (!approval?.notes || String(approval.notes).trim().length < 20) flag('notes must record at least 20 characters of audit evidence')
  return findings
}

export function rejectionFindings(rejection, candidateDir, evidence, label = 'rejection.json') {
  const findings = []
  const flag = msg => findings.push(`${label}: ${msg}`)
  if (rejection?.schema_version !== INTAKE_SCHEMA_VERSION) flag(`schema_version must be ${INTAKE_SCHEMA_VERSION}`)
  if (rejection?.decision !== 'rejected') flag('decision must be rejected')
  if (rejection?.auditor?.name !== 'The Mennonite') flag('auditor.name must be The Mennonite')
  if (!rejection?.auditor?.role) flag('auditor.role is required')
  if (rejection?.auditor?.name === evidence?.researcher?.name) flag('auditor must differ from researcher')
  if (!validDate(rejection?.reviewed_at)) flag('reviewed_at must be an ISO UTC timestamp')
  const actual = packetHash(candidateDir)
  if (!actual || rejection?.packet_sha256 !== actual) flag(`packet_sha256 does not match rejected candidate packet (expected ${actual ?? 'unavailable'})`)
  if (!Array.isArray(rejection?.reasons) || !rejection.reasons.length) flag('reasons must contain at least one concrete audit failure')
  else for (const [i, reason] of rejection.reasons.entries()) {
    if (String(reason).trim().length < 20) flag(`reasons[${i}] must contain at least 20 characters`)
  }
  return findings
}
