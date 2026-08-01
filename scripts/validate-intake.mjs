#!/usr/bin/env node
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { execFileSync, spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import {
  approvalFindings,
  claimTripletFindings,
  coverageFindings,
  duplicateParagraphFindings,
  hashTree,
  packetHash,
  placeholderFindings,
  readJson,
  rejectionFindings,
  semanticGeneratorFindings,
  sha256,
  symlinkFindings,
  validateEvidence,
  validateManifest,
  visualAnomalyFindings,
  walkFiles,
} from './intake-lib.mjs'

// fileURLToPath, not URL.pathname: the pathname form ('/C:/...') never
// resolves to a real directory on Windows.
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const RUNS = path.join(REPO, 'intake', 'runs')
const GAMES = path.join(REPO, 'KnowledgeBase', 'BoardGames', 'games')
const REQUIRED_DOCS = [
  'index.okf.md',
  'sources.okf.md',
  'scout-report.okf.md',
  'rules/overview.okf.md',
  'rules/setup.okf.md',
  'rules/turn-structure.okf.md',
  'rules/actions.okf.md',
  'rules/scoring-endgame.okf.md',
  'rules/edge-cases-faq.okf.md',
  'reception/reviews.okf.md',
  'reception/better-if.okf.md',
  'visuals/packet.okf.md',
]

function rel(file) { return path.relative(REPO, file).replaceAll('\\', '/') }
function flag(findings, file, message) { findings.push(`${rel(file)}: ${message}`) }

function frontmatter(text) { return text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '' }
function unquote(value) { return String(value ?? '').trim().replace(/^["']|["']$/g, '') }
function canonicalMeta(text) {
  const head = frontmatter(text)
  const value = (pattern) => unquote(head.match(pattern)?.[1])
  return {
    title: value(/^\s{2}title:\s*([^\r\n]+)/m),
    slug: value(/^\s{2}slug:\s*([^\r\n]+)/m),
    bgg_id: value(/^\s{2}bgg_id:\s*([^\r\n]+)/m),
    publisher: value(/^\s{2}publisher:\s*([^\r\n]+)/m),
    year: value(/^\s{2}year:\s*([^\r\n]+)/m),
    edition: value(/^\s{2}edition:\s*([^\r\n]+)/m),
    scope: value(/^scope:\s*([^\r\n]+)/m),
    mechanics: value(/^mechanics:\s*([^\r\n]+)/m).replace(/\s+/g, ''),
    status: value(/^status:\s*([^\r\n]+)/m),
  }
}

function sourceEntries(text) {
  const head = frontmatter(text)
  const block = head.match(/^sources:\s*\r?\n([\s\S]*?)(?=^\S|(?![\s\S]))/m)?.[1] ?? ''
  const entries = []
  for (const match of block.matchAll(/^\s{2}- id:\s*["']?(src-[0-9]{3})["']?\s*\r?\n([\s\S]*?)(?=^\s{2}- id:|(?![\s\S]))/gm)) {
    const field = name => unquote(match[2].match(new RegExp(`^\\s{4}${name}:\\s*([^\\r\\n]+)`, 'm'))?.[1])
    entries.push({ id: match[1], title: field('title'), url: field('url'), asset_url: field('asset_url'), kind: field('kind'), provenance: field('provenance'), retrieved_at: field('retrieved_at') })
  }
  return entries
}

function visualReferences(text) {
  const head = frontmatter(text)
  const block = head.match(/^visual_references:\s*\r?\n([\s\S]*?)(?=^\S|(?![\s\S]))/m)?.[1] ?? ''
  const refs = []
  for (const match of block.matchAll(/^\s{2}- id:\s*["']?([^"'\r\n]+)["']?\s*\r?\n([\s\S]*?)(?=^\s{2}- id:|(?![\s\S]))/gm)) {
    const field = name => unquote(match[2].match(new RegExp(`^\\s{4}${name}:\\s*([^\\r\\n]+)`, 'm'))?.[1])
    refs.push({ id: unquote(match[1]), file: field('file'), source_id: field('source_id'), sha256: field('sha256'), subject: field('subject'), capture_type: field('capture_type'), creator: field('creator'), rights_holder: field('rights_holder'), usage_basis: field('usage_basis'), license: field('license'), attribution: field('attribution'), demonstrates: field('demonstrates'), rationale: field('rationale') })
  }
  return refs
}

function canonicalSchemaFindings(canonical, slug) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'intake-canonical-schema-'))
  try {
    const mirror = path.join(root, slug)
    fs.cpSync(canonical, mirror, { recursive: true })
    const files = walkFiles(mirror).filter(file => file.endsWith('.okf.md'))
    const result = spawnSync(process.execPath, [path.join(REPO, 'scripts/validate-okf.mjs'), ...files], {
      encoding: 'utf8',
      maxBuffer: 4 * 1024 * 1024,
    })
    if (result.status === 0) return []
    const detail = `${result.stdout ?? ''}${result.stderr ?? ''}`.trim().replaceAll(root, rel(canonical))
    return [`${rel(canonical)}: staged canonical schema validation failed\n${detail}`]
  } finally {
    fs.rmSync(root, { recursive: true, force: true })
  }
}

export function validateCandidatePackage(candidateDir, candidate) {
  const findings = []
  findings.push(...coverageFindings(candidate, rel(candidateDir)))
  const evidenceFile = path.join(candidateDir, 'evidence.json')
  const canonical = path.join(candidateDir, 'canonical')
  if (!fs.existsSync(evidenceFile)) {
    flag(findings, evidenceFile, 'missing evidence.json')
    return findings
  }
  if (!fs.existsSync(canonical)) {
    flag(findings, canonical, 'missing canonical staging tree')
    return findings
  }
  const links = symlinkFindings(canonical, rel(canonical))
  if (links.length) return [...findings, ...links]
  const evidence = readJson(evidenceFile)
  const indexFile = path.join(canonical, 'index.okf.md')
  const indexText = fs.existsSync(indexFile) ? fs.readFileSync(indexFile, 'utf8') : ''
  findings.push(...validateEvidence(evidence, rel(evidenceFile), { indexText }))
  if (evidence.slug !== candidate.slug) flag(findings, evidenceFile, `slug ${evidence.slug} does not match manifest candidate ${candidate.slug}`)

  for (const required of REQUIRED_DOCS) {
    const file = path.join(canonical, required)
    if (!fs.existsSync(file) || !fs.statSync(file).isFile()) flag(findings, file, 'required canonical document is missing or not a regular file')
  }
  findings.push(...canonicalSchemaFindings(canonical, candidate.slug))
  const ruleDocs = walkFiles(path.join(canonical, 'rules')).filter(f => f.endsWith('.okf.md'))
  if (ruleDocs.length < 3) flag(findings, path.join(canonical, 'rules'), `at least three categorized rule documents are required, found ${ruleDocs.length}`)

  const documents = []
  const okfFiles = walkFiles(canonical).filter(f => f.endsWith('.okf.md'))
  const exactBodies = new Map()
  const baselineMeta = canonicalMeta(indexText)
  const evidenceSources = new Map((evidence.sources ?? []).map(source => [source.id, source]))
  const resolvedSources = new Map()
  for (const file of okfFiles) {
    const text = fs.readFileSync(file, 'utf8')
    findings.push(...placeholderFindings(text, rel(file)))
    if (/^##\s+(?:SomberSoft implications|Design notes for SomberSoft)\s*$/mi.test(text)) flag(findings, file, 'canonical source-evidence records may not contain generic SomberSoft design-note sections')
    const needsClaims = file === indexFile || file.includes(`${path.sep}rules${path.sep}`) || file.includes(`${path.sep}reception${path.sep}`)
    const claims = claimTripletFindings(text, rel(file), { requireClaim: needsClaims })
    findings.push(...claims.findings)
    const meta = canonicalMeta(text)
    for (const key of ['title', 'slug', 'bgg_id', 'publisher', 'year', 'edition', 'scope', 'mechanics']) {
      if (!meta[key]) flag(findings, file, `missing canonical metadata ${key}`)
      else if (meta[key] !== baselineMeta[key]) flag(findings, file, `${key} differs from index.okf.md (${meta[key]} != ${baselineMeta[key]})`)
    }
    if (meta.slug !== candidate.slug) flag(findings, file, `game.slug ${meta.slug} does not match candidate directory ${candidate.slug}`)
    if (meta.status !== 'verified') flag(findings, file, `new canonical records must be verified, found ${meta.status || 'missing status'}`)
    if (/^followups:\s*$/m.test(frontmatter(text))) flag(findings, file, 'new canonical packet must not contain unresolved followups')

    const localSources = sourceEntries(text)
    const localIds = new Set(localSources.map(source => source.id))
    for (const source of localSources) {
      const receipt = evidenceSources.get(source.id)
      if (!receipt) flag(findings, file, `declares ${source.id} without a retrieval receipt`)
      else {
        if (source.title !== receipt.title) flag(findings, file, `${source.id} title does not match its retrieval receipt`)
        if (![receipt.url, receipt.final_url].includes(source.url)) flag(findings, file, `${source.id} URL does not match its retrieval receipt`)
        if (source.provenance !== receipt.provenance) flag(findings, file, `${source.id} provenance does not match its retrieval receipt`)
      }
      for (const key of ['title', 'url', 'kind', 'provenance']) if (!source[key]) flag(findings, file, `${source.id} is missing ${key}`)
      const signature = JSON.stringify([source.title, source.url, source.kind, source.provenance])
      if (resolvedSources.has(source.id) && resolvedSources.get(source.id) !== signature) flag(findings, file, `${source.id} resolves inconsistently across candidate documents`)
      else resolvedSources.set(source.id, signature)
    }
    for (const sourceLine of text.matchAll(/^\s*(?:-\s*)?Source:\s*([^\r\n]+)/gm)) {
      for (const id of sourceLine[1].match(/src-[0-9]{3}/g) ?? []) if (!localIds.has(id)) flag(findings, file, `body cites ${id} but this document does not declare it`)
    }
    documents.push({ slug: candidate.slug, file: rel(file), text })
    const body = text.replace(/^---\r?\n[\s\S]*?\r?\n---/, '').replace(/\s+/g, ' ').trim().toLowerCase()
    if (body.length >= 120) {
      const hash = sha256(body)
      const previous = exactBodies.get(hash)
      if (previous) flag(findings, file, `body duplicates ${previous}`)
      else exactBodies.set(hash, rel(file))
    }
  }

  const sourceLedger = path.join(canonical, 'sources.okf.md')
  if (fs.existsSync(sourceLedger)) {
    const ledger = fs.readFileSync(sourceLedger, 'utf8')
    for (const source of evidence.sources ?? []) {
      if (!ledger.includes(source.id)) flag(findings, sourceLedger, `does not declare evidence receipt ${source.id}`)
      if (!ledger.includes(source.url) && !ledger.includes(source.final_url)) flag(findings, sourceLedger, `does not preserve URL for ${source.id}`)
    }
  }
  if (baselineMeta.slug !== candidate.slug) flag(findings, indexFile, `index game.slug ${baselineMeta.slug} does not match ${candidate.slug}`)
  if (candidate.title && baselineMeta.title !== candidate.title) flag(findings, indexFile, `index game.title does not match manifest title ${candidate.title}`)
  if (candidate.bgg_id !== null && candidate.bgg_id !== undefined && baselineMeta.bgg_id !== String(candidate.bgg_id)) flag(findings, indexFile, `index game.bgg_id does not match manifest bgg_id ${candidate.bgg_id}`)

  const packet = path.join(canonical, 'visuals', 'packet.okf.md')
  if (fs.existsSync(packet)) {
    const text = fs.readFileSync(packet, 'utf8')
    const refs = visualReferences(text)
    const packetSources = new Map(sourceEntries(text).map(source => [source.id, source]))
    const files = refs.map(ref => ref.file)
    const assetUrls = refs.map(ref => packetSources.get(ref.source_id)?.asset_url).filter(Boolean)
    if (files.length < 2 || files.length > 8) flag(findings, packet, `must declare 2–8 visual files, found ${files.length}`)
    if (new Set(assetUrls).size < 2) flag(findings, packet, `must preserve at least two distinct source asset URLs, found ${new Set(assetUrls).size}`)
    if (new Set(refs.map(ref => ref.id)).size !== refs.length) flag(findings, packet, 'visual reference ids must be unique')
    if (new Set(refs.map(ref => ref.rationale)).size !== refs.length) flag(findings, packet, 'every new visual reference requires a distinct analytical rationale')
    const imageFiles = []
    for (const ref of refs) {
      for (const key of ['id', 'file', 'source_id', 'sha256', 'subject', 'capture_type', 'creator', 'rights_holder', 'usage_basis', 'attribution', 'demonstrates', 'rationale']) if (!ref[key]) flag(findings, packet, `visual reference ${ref.id || '(missing id)'} lacks ${key}`)
      if (!/^vis-[0-9]{3}$/.test(ref.id)) flag(findings, packet, `visual reference id ${ref.id} must match vis-NNN`)
      const source = packetSources.get(ref.source_id)
      if (!source) flag(findings, packet, `visual reference ${ref.id} cites undeclared source ${ref.source_id}`)
      else {
        if (!/^https?:\/\//.test(source.asset_url)) flag(findings, packet, `visual source ${ref.source_id} has invalid asset_url`)
        const receipt = evidenceSources.get(ref.source_id)
        if (!receipt || !receipt.roles?.includes('visual')) flag(findings, packet, `visual reference ${ref.id} source_id lacks a visual retrieval receipt`)
        else if (![receipt.url, receipt.final_url].includes(source.asset_url)) flag(findings, packet, `visual source ${ref.source_id} asset_url does not match its retrieval receipt`)
      }
      const absolute = path.resolve(canonical, ref.file)
      const referencesRoot = path.join(canonical, 'visuals', 'references')
      if (!absolute.startsWith(`${referencesRoot}${path.sep}`)) flag(findings, packet, `visual reference ${ref.id} must live under visuals/references/`)
      if (!absolute.startsWith(`${canonical}${path.sep}`) || !fs.existsSync(absolute) || !fs.statSync(absolute).isFile()) flag(findings, packet, `visual file is missing, non-regular, or escapes candidate tree: ${ref.file}`)
      else {
        imageFiles.push(absolute)
        if (path.extname(absolute).toLowerCase() !== '.webp') flag(findings, packet, `visual reference ${ref.id} must be WebP`)
        if (ref.sha256 !== sha256(fs.readFileSync(absolute))) flag(findings, packet, `visual reference ${ref.id} sha256 does not match ${ref.file}`)
      }
    }
    findings.push(...visualAnomalyFindings(imageFiles).map(message => message.replaceAll(REPO, '.')))
    const packetHead = frontmatter(text)
    const sheetFile = unquote(packetHead.match(/^contact_sheet:\s*([^\r\n]+)/m)?.[1])
    const sheetHash = unquote(packetHead.match(/^contact_sheet_sha256:\s*([^\r\n]+)/m)?.[1])
    if (sheetFile !== 'visuals/contact-sheet.webp') flag(findings, packet, 'contact_sheet must be visuals/contact-sheet.webp')
    const sheet = path.join(canonical, 'visuals', 'contact-sheet.webp')
    if (fs.existsSync(sheet) && sheetHash !== sha256(fs.readFileSync(sheet))) flag(findings, packet, 'contact_sheet_sha256 does not match contact sheet')
  }
  const contactSheet = path.join(canonical, 'visuals', 'contact-sheet.webp')
  if (!fs.existsSync(contactSheet) || !fs.statSync(contactSheet).isFile()) flag(findings, contactSheet, 'required contact sheet is missing or not a regular file')
  findings.push(...duplicateParagraphFindings(documents))
  return findings
}

export function validateRunDirectory(runDir) {
  const findings = []
  const manifestFile = path.join(runDir, 'manifest.json')
  if (!fs.existsSync(manifestFile)) return [`${rel(manifestFile)}: missing manifest.json`]
  const manifest = readJson(manifestFile)
  findings.push(...validateManifest(manifest, rel(manifestFile)))
  if (path.basename(runDir) !== manifest.run_id) flag(findings, manifestFile, `run_id ${manifest.run_id} does not match directory ${path.basename(runDir)}`)
  const declared = new Set((manifest.candidates ?? []).map(c => c.slug))
  const candidatesRoot = path.join(runDir, 'candidates')
  if (fs.existsSync(candidatesRoot)) {
    for (const entry of fs.readdirSync(candidatesRoot, { withFileTypes: true }).filter(e => e.isDirectory())) {
      if (!declared.has(entry.name)) flag(findings, path.join(candidatesRoot, entry.name), 'candidate directory is not declared in manifest')
    }
  }
  for (const candidate of manifest.candidates ?? []) {
    const dir = path.join(candidatesRoot, candidate.slug)
    const hasCanonical = fs.existsSync(path.join(dir, 'canonical'))
    const hasApproval = fs.existsSync(path.join(dir, 'approval.json'))
    const hasRejection = fs.existsSync(path.join(dir, 'rejection.json'))
    if (candidate.status === 'blocked') {
      if (hasCanonical) flag(findings, dir, 'blocked candidate must not contain a canonical staging tree')
      if (hasApproval) flag(findings, dir, 'blocked candidate must not contain approval')
      if (hasRejection) flag(findings, dir, 'blocked candidate must not contain rejection; blockers belong in manifest')
      continue
    }
    findings.push(...validateCandidatePackage(dir, candidate))
    if (candidate.status === 'ready_for_audit' && (hasApproval || hasRejection)) flag(findings, dir, 'ready_for_audit candidate must not self-carry an audit decision')
    if (candidate.status === 'rejected') {
      if (hasApproval) flag(findings, dir, 'rejected candidate must not contain approval')
      if (!hasRejection) flag(findings, path.join(dir, 'rejection.json'), 'rejected candidate requires independent rejection record')
      else {
        const evidence = readJson(path.join(dir, 'evidence.json'))
        findings.push(...rejectionFindings(readJson(path.join(dir, 'rejection.json')), dir, evidence, rel(path.join(dir, 'rejection.json'))))
      }
    }
    if (['approved', 'promoted'].includes(candidate.status)) {
      if (hasRejection) flag(findings, dir, `${candidate.status} candidate must not retain rejection.json`)
      if (!hasApproval) flag(findings, path.join(dir, 'approval.json'), `${candidate.status} candidate requires independent approval`)
      else {
        const evidence = readJson(path.join(dir, 'evidence.json'))
        findings.push(...approvalFindings(readJson(path.join(dir, 'approval.json')), dir, evidence, rel(path.join(dir, 'approval.json'))))
      }
    }
  }
  return findings
}

function git(args) { return execFileSync('git', args, { cwd: REPO, encoding: 'utf8' }).trim() }

function isAncestor(ancestor, descendant) {
  const result = spawnSync('git', ['merge-base', '--is-ancestor', ancestor, descendant], {
    cwd: REPO,
    encoding: 'utf8',
  })
  if (result.status === 0) return true
  if (result.status === 1) return false
  throw new Error(`cannot compare Git ancestry for ${ancestor} and ${descendant}: ${result.stderr.trim()}`)
}

function changedAgainst(base) {
  const raw = git(['diff', '--name-status', `${base}...HEAD`])
  if (!raw) return []
  return raw.split('\n').map(line => {
    const columns = line.split('\t')
    return { status: columns[0], oldFile: /^[RC]/.test(columns[0]) ? columns[1] : null, file: columns.at(-1) }
  })
}

function gameExistsAt(ref, slug) {
  return Boolean(git(['ls-tree', '-d', '--name-only', ref, `KnowledgeBase/BoardGames/games/${slug}`]))
}

function pathExistsAt(ref, file) {
  try {
    execFileSync('git', ['cat-file', '-e', `${ref}:${file}`], { cwd: REPO, stdio: 'ignore' })
    return true
  } catch { return false }
}

function candidateStatusAt(ref, runId, slug) {
  try {
    const text = execFileSync('git', ['show', `${ref}:intake/runs/${runId}/manifest.json`], { cwd: REPO, encoding: 'utf8' })
    return readJsonText(text)?.candidates?.find(candidate => candidate.slug === slug)?.status ?? null
  } catch { return null }
}

function manifestAt(ref, runId) {
  try {
    const text = execFileSync('git', ['show', `${ref}:intake/runs/${runId}/manifest.json`], { cwd: REPO, encoding: 'utf8' })
    return readJsonText(text)
  } catch { return null }
}

function normalizedJson(value) {
  if (Array.isArray(value)) return value.map(normalizedJson)
  if (value && typeof value === 'object') return Object.fromEntries(Object.keys(value).sort().map(key => [key, normalizedJson(value[key])]))
  return value
}

function manifestStatusOnlyTransition(fromRef, toRef, runId, slug, fromStatus, toStatus, { allowPromotedAt = false } = {}) {
  const before = manifestAt(fromRef, runId)
  const after = manifestAt(toRef, runId)
  if (!before || !after) return false
  const expected = JSON.parse(JSON.stringify(before))
  const candidate = expected.candidates?.find(item => item.slug === slug)
  const actualCandidate = after.candidates?.find(item => item.slug === slug)
  if (!candidate || candidate.status !== fromStatus) return false
  candidate.status = toStatus
  if (allowPromotedAt) {
    const promotedAt = actualCandidate?.promoted_at ?? ''
    if (Object.prototype.hasOwnProperty.call(candidate, 'promoted_at')) return false
    if (!/^20[0-9]{2}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}Z$/.test(promotedAt) || new Date(promotedAt).toISOString() !== promotedAt) return false
    candidate.promoted_at = promotedAt
  }
  return JSON.stringify(normalizedJson(expected)) === JSON.stringify(normalizedJson(after))
}

function readJsonText(text) {
  try { return JSON.parse(text) }
  catch { return null }
}

function lines(text) { return text ? text.split('\n').map(line => line.trim()).filter(Boolean) : [] }

function commitParents(ref = 'HEAD') {
  return git(['show', '-s', '--format=%P', ref]).split(/\s+/).filter(Boolean)
}

function historyHeadFor(base, syntheticMerge = false) {
  if (!syntheticMerge) return 'HEAD'
  const baseSha = git(['rev-parse', base])
  const parents = commitParents('HEAD')
  if (parents.length !== 2 || parents[0] !== baseSha) {
    throw new Error('declared synthetic merge must have exactly two parents and the validated base as its first parent')
  }
  return parents[1]
}

function commitsAddingPath(base, file, head = 'HEAD') {
  return lines(git(['log', '--format=%H', '--diff-filter=A', '--reverse', `${base}..${head}`, '--', file]))
}

function filesChangedInCommit(commit) {
  return lines(git(['diff-tree', '--root', '-m', '--no-commit-id', '--name-only', '-r', commit]))
}

function filesTouchedByCommits(from, to, pathspec) {
  const prefix = pathspec.endsWith('/') ? pathspec : null
  const touched = []
  for (const commit of lines(git(['rev-list', '--reverse', `${from}..${to}`]))) {
    for (const file of filesChangedInCommit(commit)) {
      if (file === pathspec || (prefix && file.startsWith(prefix))) touched.push(file)
    }
  }
  return [...new Set(touched)]
}

function auditBoundaryAt(base, runId, slug, decision, decisionFile, head = 'HEAD') {
  const commits = commitsAddingPath(base, decisionFile, head)
  if (commits.length !== 1) return { decisionCommit: null, additionCount: commits.length }
  const decisionCommit = commits[0]
  const parent = `${decisionCommit}^`
  const candidatePrefix = `intake/runs/${runId}/candidates/${slug}/`
  const manifest = `intake/runs/${runId}/manifest.json`
  const opposite = `${candidatePrefix}${decision === 'approval' ? 'rejection' : 'approval'}.json`
  const allowed = new Set([decisionFile, manifest])
  const promotionCommits = commitsAddingPath(base, `KnowledgeBase/BoardGames/games/${slug}/index.okf.md`, head)
  const postDecisionManifestCommits = lines(git(['rev-list', '--reverse', `${decisionCommit}..${head}`]))
    .filter(commit => filesChangedInCommit(commit).includes(manifest))
  return {
    decisionCommit,
    additionCount: 1,
    parentHasEvidence: pathExistsAt(parent, `${candidatePrefix}evidence.json`),
    parentHasCanonical: pathExistsAt(parent, `${candidatePrefix}canonical/index.okf.md`),
    parentStatus: candidateStatusAt(parent, runId, slug),
    decisionStatus: candidateStatusAt(decisionCommit, runId, slug),
    manifestOnlyStatusTransition: manifestStatusOnlyTransition(parent, decisionCommit, runId, slug, 'ready_for_audit', 'approved'),
    oppositeAtParent: pathExistsAt(parent, opposite),
    unexpectedDecisionChanges: filesChangedInCommit(decisionCommit).filter(file => !allowed.has(file)),
    postDecisionPacketChanges: filesTouchedByCommits(decisionCommit, head, candidatePrefix),
    manifestChangedOnlyAtPromotion: postDecisionManifestCommits.length === 1
      && promotionCommits.length === 1
      && postDecisionManifestCommits[0] === promotionCommits[0],
  }
}

export function auditTransitionFindings(changes, { boundaryFor }) {
  const findings = []
  const decisionPattern = /^intake\/runs\/([^/]+)\/candidates\/([^/]+)\/(approval|rejection)\.json$/
  for (const change of changes) {
    const match = change.file.match(decisionPattern)
    if (!match) continue
    const [, runId, slug, decision] = match
    if (!change.status.startsWith('A')) {
      findings.push(`${change.file}: audit decisions are immutable once committed`)
      continue
    }
    if (decision === 'rejection') {
      findings.push(`${change.file}: new rejection records are prohibited; record REVISE on the PR instead and return the same branch to a fresh Bathcat`)
      continue
    }
    const boundary = boundaryFor(runId, slug, decision, change.file)
    if (!boundary?.decisionCommit || (boundary.additionCount ?? 1) !== 1) {
      findings.push(`${change.file}: approval must be introduced exactly once in a commit after the Bathcat packet commit`)
      continue
    }
    if (!boundary.parentHasEvidence || !boundary.parentHasCanonical) findings.push(`${change.file}: approval parent commit must contain the complete evidence and canonical staging packet`)
    if (boundary.parentStatus !== 'ready_for_audit') findings.push(`${change.file}: approval parent commit status must be ready_for_audit`)
    if (boundary.decisionStatus !== 'approved') findings.push(`${change.file}: approval commit must transition candidate status to approved`)
    if (!boundary.manifestOnlyStatusTransition) findings.push(`${change.file}: approval commit manifest may change only candidate status ready_for_audit -> approved`)
    if (boundary.oppositeAtParent) findings.push(`${change.file}: approval parent already contains rejection.json`)
    if (boundary.unexpectedDecisionChanges?.length) findings.push(`${change.file}: approval commit may change only approval.json and its manifest; also changed ${boundary.unexpectedDecisionChanges.join(', ')}`)
    if (boundary.postDecisionPacketChanges?.length) findings.push(`${change.file}: packet changed after approval: ${boundary.postDecisionPacketChanges.join(', ')}`)
    if (!boundary.manifestChangedOnlyAtPromotion) findings.push(`${change.file}: manifest changed after approval outside the promotion commit`)
  }
  return findings
}

export function promotionBoundaryFindings(slug, boundary) {
  const findings = []
  const label = `canonical game ${slug}`
  if (!boundary?.promotionCommit || (boundary.additionCount ?? 1) !== 1) {
    findings.push(`${label}: canonical tree must be introduced exactly once by a deterministic promotion commit`)
    return findings
  }
  if (!boundary.parentHasApproval) findings.push(`${label}: promotion parent commit must contain Mennonite approval`)
  if (boundary.parentStatus !== 'approved') findings.push(`${label}: promotion parent commit status must be approved`)
  if (boundary.promotionStatus !== 'promoted') findings.push(`${label}: promotion commit must transition candidate status to promoted`)
  if (!boundary.manifestOnlyStatusTransition) findings.push(`${label}: promotion commit manifest may change only candidate status approved -> promoted and add a valid promoted_at timestamp`)
  if (boundary.prePromotionCanonicalChanges?.length) findings.push(`${label}: canonical destination changed before promotion: ${boundary.prePromotionCanonicalChanges.join(', ')}`)
  if (boundary.unexpectedPromotionChanges?.length) findings.push(`${label}: deterministic promotion commit changed unexpected paths: ${boundary.unexpectedPromotionChanges.join(', ')}`)
  if (boundary.postPromotionChanges?.length) findings.push(`${label}: protected intake or canonical bytes changed after promotion: ${boundary.postPromotionChanges.join(', ')}`)
  return findings
}

function promotionBoundaryAt(base, runId, slug, head = 'HEAD') {
  const canonicalPrefix = `KnowledgeBase/BoardGames/games/${slug}/`
  const canonicalIndex = `${canonicalPrefix}index.okf.md`
  const commits = commitsAddingPath(base, canonicalIndex, head)
  if (commits.length !== 1) return { promotionCommit: null, additionCount: commits.length }
  const promotionCommit = commits[0]
  const parent = `${promotionCommit}^`
  const candidatePrefix = `intake/runs/${runId}/candidates/${slug}/`
  const manifest = `intake/runs/${runId}/manifest.json`
  const approval = `${candidatePrefix}approval.json`
  const allowedExact = new Set([manifest, 'KnowledgeBase/BoardGames/INDEX.okf.md', 'TELEMETRY.md'])
  const unexpectedPromotionChanges = filesChangedInCommit(promotionCommit).filter(file => !file.startsWith(canonicalPrefix) && !allowedExact.has(file))
  const protectedChanges = [
    ...filesTouchedByCommits(promotionCommit, head, candidatePrefix),
    ...filesTouchedByCommits(promotionCommit, head, canonicalPrefix),
    ...filesTouchedByCommits(promotionCommit, head, manifest),
  ]
  return {
    promotionCommit,
    additionCount: 1,
    parentHasApproval: pathExistsAt(parent, approval),
    parentStatus: candidateStatusAt(parent, runId, slug),
    promotionStatus: candidateStatusAt(promotionCommit, runId, slug),
    manifestOnlyStatusTransition: manifestStatusOnlyTransition(parent, promotionCommit, runId, slug, 'approved', 'promoted', { allowPromotedAt: true }),
    prePromotionCanonicalChanges: filesTouchedByCommits(base, parent, canonicalPrefix),
    unexpectedPromotionChanges,
    postPromotionChanges: [...new Set(protectedChanges)],
  }
}

export function mergeCommitTopologyFindings(newGameCount, { parents, baseSha }) {
  if (!newGameCount) return []
  if (parents.length !== 2 || parents[0] !== baseSha) {
    return ['new-game intake must reach main through one merge commit whose first parent is the previous protected-base head; squash, rebase, and direct pushes are forbidden']
  }
  return []
}

export function blockedRunDiffFindings(records) {
  const findings = []
  for (const record of records) {
    for (const candidate of record.candidates ?? []) {
      if (candidate.status === 'blocked') findings.push(`intake run ${record.runId}/${candidate.slug}: blocked research belongs in a GitHub issue, not a committed packet or PR`)
    }
  }
  return findings
}

const ABSENT_PROTECTED_STATE = '<absent>'

function protectedStateAt(treesByRef, ref, file) {
  return treesByRef.get(ref)?.get(file) ?? ABSENT_PROTECTED_STATE
}

export function protectedHistoryStateFindings({ base, commits, parentsByCommit, treesByRef, files, boundaryAncestors = [] }) {
  const findings = []
  const seedRefs = [...new Set([base, ...boundaryAncestors])]
  const seenByRef = new Map(seedRefs.map(ref => [
    ref,
    new Map(files.map(file => [file, new Set([protectedStateAt(treesByRef, ref, file)])])),
  ]))
  for (const commit of commits) {
    const parents = parentsByCommit.get(commit) ?? []
    const currentSeen = new Map()
    for (const file of files) {
      const nextState = protectedStateAt(treesByRef, commit, file)
      const accumulated = new Set()
      for (const parent of parents) {
        const parentSeen = seenByRef.get(parent)
        if (!parentSeen) {
          findings.push(`${file}: protected history parent ${parent} falls outside the validated base ancestry`)
          continue
        }
        const priorStates = parentSeen.get(file) ?? new Set([protectedStateAt(treesByRef, parent, file)])
        const parentState = protectedStateAt(treesByRef, parent, file)
        if (parentState !== nextState && priorStates.has(nextState)) {
          findings.push(`${file}: protected path restores an earlier content state in commit ${commit}`)
        }
        for (const state of priorStates) accumulated.add(state)
      }
      accumulated.add(nextState)
      currentSeen.set(file, accumulated)
    }
    seenByRef.set(commit, currentSeen)
  }
  return [...new Set(findings)]
}

function protectedTreeAt(ref) {
  const raw = git(['ls-tree', '-r', ref, '--', 'intake/runs/', 'KnowledgeBase/BoardGames/games/'])
  const tree = new Map()
  for (const line of lines(raw)) {
    const [metadata, file] = line.split('\t')
    const oid = metadata?.split(/\s+/)[2]
    if (file && oid) tree.set(file, oid)
  }
  return tree
}

function protectedHistoryFindings(base, head) {
  const baseSha = git(['rev-parse', base])
  const rows = lines(git(['rev-list', '--reverse', '--topo-order', '--parents', `${base}..${head}`])).map(line => line.split(/\s+/))
  const commits = rows.map(parts => parts[0])
  const parentsByCommit = new Map(rows.map(parts => [parts[0], parts.slice(1)]))
  const files = [
    ...filesTouchedByCommits(base, head, 'intake/runs/'),
    ...filesTouchedByCommits(base, head, 'KnowledgeBase/BoardGames/games/'),
  ]
  if (!files.length) return []
  const commitSet = new Set(commits)
  // A legacy branch may begin at an older commit that is already an ancestor of
  // the validated base. Seed that boundary at its observed state so preserved
  // branch history can be checked without reclassifying protected-base history.
  // Parents outside the base ancestry remain unknown and fail closed below.
  const boundaryAncestors = [...new Set(rows.flatMap(parts => parts.slice(1)))]
    .filter(parent => parent !== baseSha && !commitSet.has(parent) && isAncestor(parent, baseSha))
  const refs = new Set([baseSha, ...commits, ...rows.flatMap(parts => parts.slice(1))])
  const treesByRef = new Map([...refs].map(ref => [ref, protectedTreeAt(ref)]))
  return protectedHistoryStateFindings({ base: baseSha, commits, parentsByCommit, treesByRef, files, boundaryAncestors })
}

export function intakeCompletionFindings(records, newSlugs) {
  const findings = []
  for (const record of records) {
    for (const candidate of record.candidates ?? []) {
      if (candidate.status === 'blocked') continue
      if (candidate.status !== 'promoted') {
        findings.push(`intake run ${record.runId}/${candidate.slug}: intake PR must end promoted in the same PR; ${candidate.status} is an intermediate commit state`)
      } else if (!newSlugs.has(candidate.slug)) {
        findings.push(`intake run ${record.runId}/${candidate.slug}: promoted intake must add its canonical game in the same PR`)
      }
    }
  }
  return findings
}

export function newGameSlugs(changes, existsAtBase) {
  const slugs = new Set()
  for (const change of changes) {
    if (change.status.startsWith('D')) continue
    const match = change.file.match(/^KnowledgeBase\/BoardGames\/games\/([^/]+)\//)
    if (match && !existsAtBase(match[1])) slugs.add(match[1])
  }
  return slugs
}

function runDirs() {
  if (!fs.existsSync(RUNS)) return []
  return fs.readdirSync(RUNS, { withFileTypes: true }).filter(e => e.isDirectory()).map(e => path.join(RUNS, e.name)).sort()
}

function candidateRecords() {
  const out = []
  for (const runDir of runDirs()) {
    const manifestFile = path.join(runDir, 'manifest.json')
    if (!fs.existsSync(manifestFile)) continue
    const manifest = readJson(manifestFile)
    for (const candidate of manifest.candidates ?? []) out.push({ runDir, manifest, candidate, dir: path.join(runDir, 'candidates', candidate.slug) })
  }
  return out
}

export function dailyBatchFindings(records) {
  const findings = []
  const batches = new Map()
  for (const record of records) {
    const day = String(record.manifest?.created_at ?? '').slice(0, 10)
    if (!/^20[0-9]{2}-[0-9]{2}-[0-9]{2}$/.test(day)) continue
    if (!batches.has(day)) batches.set(day, [])
    batches.get(day).push(record.candidate)
  }
  for (const [day, candidates] of batches) {
    if (candidates.length > 3) findings.push(`intake daily batch ${day} contains ${candidates.length} candidates; hard ceiling is 3`)
    for (const cohort of ['cooperative', 'solo_rpg', 'rotating_focus']) {
      const count = candidates.filter(candidate => candidate.cohort === cohort).length
      if (count > 1) findings.push(`intake daily batch ${day} contains ${count} ${cohort} candidates; hard ceiling is 1`)
    }
    const slugs = candidates.map(candidate => candidate.slug)
    if (new Set(slugs).size !== slugs.length) findings.push(`intake daily batch ${day} contains duplicate candidate slugs`)
    const bggIds = candidates.map(candidate => candidate.bgg_id).filter(value => value !== null && value !== undefined)
    if (new Set(bggIds).size !== bggIds.length) findings.push(`intake daily batch ${day} contains duplicate non-null BGG ids`)
  }
  return findings
}

function validateDiff(base, { requireMergeCommit = false, syntheticMerge = false } = {}) {
  const findings = []
  let changes
  try { changes = changedAgainst(base) }
  catch (err) { return [`cannot compare intake against ${base}: ${err.message}`] }
  const changedFiles = changes.map(c => c.file)
  findings.push(...semanticGeneratorFindings(REPO, changedFiles))
  let historyHead = 'HEAD'
  try { historyHead = historyHeadFor(base, syntheticMerge) }
  catch (err) { findings.push(err.message) }
  findings.push(...protectedHistoryFindings(base, historyHead))
  findings.push(...auditTransitionFindings(changes, {
    boundaryFor: (runId, slug, decision, file) => auditBoundaryAt(base, runId, slug, decision, file, historyHead),
  }))

  for (const change of changes) {
    if (change.status.startsWith('D') && change.file.startsWith('KnowledgeBase/BoardGames/games/')) {
      findings.push(`${change.file}: canonical game deletion is not an intake operation and requires an explicit separate policy change`)
    }
    if (change.oldFile?.startsWith('KnowledgeBase/BoardGames/games/')) {
      const oldSlug = change.oldFile.split('/')[3]
      const newSlug = change.file.split('/')[3]
      if (oldSlug !== newSlug) findings.push(`${change.oldFile}: canonical game relocation to ${newSlug} is prohibited; admit a new slug through intake instead`)
    }
  }

  const changedCanonicalDocs = []
  const changedCanonicalVisuals = []
  for (const file of changedFiles) {
    if (!file.startsWith('KnowledgeBase/BoardGames/games/')) continue
    const absolute = path.join(REPO, file)
    if (!fs.existsSync(absolute)) continue
    const slug = file.split('/')[3]
    if (file.endsWith('.okf.md')) {
      const text = fs.readFileSync(absolute, 'utf8')
      findings.push(...placeholderFindings(text, file))
      changedCanonicalDocs.push({ slug, file, text })
    }
    if (file.endsWith('.webp')) changedCanonicalVisuals.push(absolute)
  }

  if (changedCanonicalDocs.length) {
    const changedDocPaths = new Set(changedCanonicalDocs.map(doc => doc.file))
    const legacyDocs = walkFiles(GAMES)
      .filter(file => file.endsWith('.okf.md') && !changedDocPaths.has(rel(file)))
      .map(file => ({ slug: path.relative(GAMES, file).split(path.sep)[0], file: rel(file), text: fs.readFileSync(file, 'utf8') }))
    findings.push(...duplicateParagraphFindings([...legacyDocs, ...changedCanonicalDocs]).filter(message => changedDocPaths.has(message.split(': duplicates ')[0])))
  }

  if (changedCanonicalVisuals.length) {
    const changedVisualPaths = new Set(changedCanonicalVisuals.map(file => path.resolve(file)))
    const legacyHashes = new Map()
    for (const file of walkFiles(GAMES).filter(file => file.endsWith('.webp') && !changedVisualPaths.has(path.resolve(file)))) legacyHashes.set(sha256(fs.readFileSync(file)), rel(file))
    for (const file of changedCanonicalVisuals) {
      const duplicate = legacyHashes.get(sha256(fs.readFileSync(file)))
      if (duplicate) findings.push(`${rel(file)}: duplicates existing visual ${duplicate}`)
    }
    findings.push(...visualAnomalyFindings(changedCanonicalVisuals).map(message => message.replaceAll(REPO, '.')))
  }

  const changedRuns = new Set()
  for (const file of changedFiles) {
    const match = file.match(/^intake\/runs\/([^/]+)\//)
    if (match) changedRuns.add(match[1])
  }
  const changedRunRecords = []
  for (const id of changedRuns) {
    const runDir = path.join(RUNS, id)
    findings.push(...validateRunDirectory(runDir))
    const manifestFile = path.join(runDir, 'manifest.json')
    if (fs.existsSync(manifestFile)) {
      const manifest = readJson(manifestFile)
      changedRunRecords.push({ runId: id, candidates: manifest.candidates ?? [] })
    }
  }
  findings.push(...blockedRunDiffFindings(changedRunRecords))

  const records = candidateRecords()
  findings.push(...dailyBatchFindings(records))
  const newSlugs = newGameSlugs(changes, slug => gameExistsAt(base, slug))
  findings.push(...intakeCompletionFindings(changedRunRecords, newSlugs))
  if (requireMergeCommit) findings.push(...mergeCommitTopologyFindings(newSlugs.size, { parents: commitParents('HEAD'), baseSha: git(['rev-parse', base]) }))
  if (newSlugs.size > 3) findings.push(`intake diff adds ${newSlugs.size} canonical games; hard ceiling is 3`)
  const docs = []
  const newVisuals = []
  const legacyVisualHashes = new Map()
  for (const file of walkFiles(GAMES).filter(f => f.endsWith('.webp'))) {
    const slug = path.relative(GAMES, file).split(path.sep)[0]
    if (!newSlugs.has(slug)) legacyVisualHashes.set(sha256(fs.readFileSync(file)), rel(file))
  }

  for (const slug of newSlugs) {
    const matches = records.filter(r => r.candidate.slug === slug && r.candidate.status === 'promoted')
    if (matches.length !== 1) {
      findings.push(`canonical game ${slug}: expected exactly one promoted intake record, found ${matches.length}`)
      continue
    }
    const record = matches[0]
    const runId = path.basename(record.runDir)
    findings.push(...promotionBoundaryFindings(slug, promotionBoundaryAt(base, runId, slug, historyHead)))
    findings.push(...validateRunDirectory(record.runDir))
    const staged = path.join(record.dir, 'canonical')
    const canonical = path.join(GAMES, slug)
    if (hashTree(staged) !== hashTree(canonical)) findings.push(`canonical game ${slug}: destination differs from independently approved staging tree`)
    for (const file of walkFiles(staged).filter(f => f.endsWith('.okf.md'))) docs.push({ slug, file: rel(file), text: fs.readFileSync(file, 'utf8') })
    for (const file of walkFiles(staged).filter(f => f.endsWith('.webp') && f.includes(`${path.sep}references${path.sep}`))) {
      const hash = sha256(fs.readFileSync(file))
      if (legacyVisualHashes.has(hash)) findings.push(`${rel(file)}: duplicates legacy visual ${legacyVisualHashes.get(hash)}`)
      newVisuals.push(file)
    }
  }
  findings.push(...duplicateParagraphFindings(docs))
  findings.push(...visualAnomalyFindings(newVisuals).map(message => message.replaceAll(REPO, '.')))
  return [...new Set(findings)]
}

function usage() {
  console.error('usage: node scripts/validate-intake.mjs [--base <git-ref> [--require-merge-commit | --synthetic-merge] | --all | --run <run-id>]')
  process.exit(2)
}

if (path.resolve(process.argv[1] || '') === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2)
  const requireMergeCommit = args.includes('--require-merge-commit')
  const syntheticMerge = args.includes('--synthetic-merge')
  if (requireMergeCommit && syntheticMerge) usage()
  const filteredArgs = args.filter(arg => arg !== '--require-merge-commit' && arg !== '--synthetic-merge')
  let findings = []
  if (!filteredArgs.length) findings = validateDiff(process.env.GITHUB_BASE_SHA || 'origin/main', { requireMergeCommit, syntheticMerge })
  else if (filteredArgs[0] === '--base' && filteredArgs[1] && filteredArgs.length === 2) findings = validateDiff(filteredArgs[1], { requireMergeCommit, syntheticMerge })
  else if (filteredArgs[0] === '--all' && filteredArgs.length === 1 && !requireMergeCommit && !syntheticMerge) {
    for (const runDir of runDirs()) findings.push(...validateRunDirectory(runDir))
    findings.push(...dailyBatchFindings(candidateRecords()))
  }
  else if (filteredArgs[0] === '--run' && filteredArgs[1] && filteredArgs.length === 2 && !requireMergeCommit && !syntheticMerge) findings = [...validateRunDirectory(path.join(RUNS, filteredArgs[1])), ...dailyBatchFindings(candidateRecords())]
  else usage()

  if (findings.length) {
    console.error(`validate-intake: ${findings.length} finding(s):`)
    for (const finding of findings) console.error(`  ${finding}`)
    process.exit(1)
  }
  console.log(`validate-intake: clean${filteredArgs[0] === '--all' ? ` (${runDirs().length} run directories)` : ''}`)
}
