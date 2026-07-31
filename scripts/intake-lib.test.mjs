import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import {
  approvalFindings,
  claimTripletFindings,
  duplicateParagraphFindings,
  hashTree,
  packetHash,
  placeholderFindings,
  rejectionFindings,
  semanticGeneratorFindings,
  validateEvidence,
  validateManifest,
  visualAnomalyFindings,
} from './intake-lib.mjs'

const HASH = 'a'.repeat(64)
const NOW = '2026-07-30T12:00:00.000Z'

function manifest(candidates = []) {
  return {
    schema_version: 3,
    run_id: '2026-07-30-test',
    created_at: NOW,
    scout: { name: 'Bathcat', role: 'Field Intelligence and Knowledge Scout' },
    target: { cooperative: 1, solo_rpg: 1, rotating_focus: 1, total: 3 },
    focus: { mechanic: 'deck-building' },
    candidates,
  }
}

function candidate(slug, cohort, status = 'blocked') {
  return {
    slug,
    title: slug,
    bgg_id: null,
    cohort,
    ...(cohort === 'rotating_focus' ? { focus_fit: 'This candidate directly exercises the current rotating mechanic focus.' } : {}),
    status,
    discovery_sources: [`https://boardgamegeek.com/boardgame/${slug.length}/${slug}`],
    blockers: status === 'blocked' ? ['official rulebook not yet retrieved'] : [],
    coverage: {
      deckbuilder: false,
      methodology: 'Counts retrieved governing documents and source-backed factual ledger entries.',
      rules: { recorded: status === 'blocked' ? 0 : 1, known_total: 1, percent: status === 'blocked' ? 0 : 100 },
      factual: { recorded: status === 'blocked' ? 0 : 3, known_total: 5, percent: status === 'blocked' ? 0 : 60 },
    },
    ...(status === 'blocked' ? { gap: {
      threshold_summary: 'Rules coverage is 0% of required 100%; factual coverage is 0% of required 60%.',
      missing_evidence: ['The complete official governing rulebook remains unavailable.'],
      attempted_sources: [{ url: `https://publisher.test/${slug}/rules`, result: 'The publisher endpoint returned no retrievable rules document.' }],
      help_requested: ['Provide a publisher-hosted rulebook or an authorized rules mirror.'],
    } } : {}),
  }
}

function receipt(id, roles, url, provenance) {
  return {
    id,
    title: id,
    roles,
    provenance,
    url,
    final_url: url,
    retrieved_at: NOW,
    http_status: 200,
    content_type: 'text/html',
    byte_length: 4096,
    sha256: HASH,
    locator: 'section 2',
    evidence: 'This is a sufficiently long extracted evidence passage.',
  }
}

function evidence(overrides = {}) {
  return {
    schema_version: 3,
    slug: 'good-game',
    researcher: { name: 'Bathcat', role: 'Field Intelligence and Knowledge Scout' },
    researched_at: NOW,
    sources: [
      receipt('src-001', ['official_rules'], 'https://publisher.test/rules.pdf', 'official'),
      receipt('src-002', ['independent_review'], 'https://reviewer.test/reviews/good-game', 'secondary'),
      receipt('src-003', ['rating', 'identity'], 'https://boardgamegeek.com/boardgame/123/good-game', 'community'),
      receipt('src-004', ['visual'], 'https://cdn.publisher.test/good-game.jpg', 'official'),
    ],
    ...overrides,
  }
}

test('split-disposition manifest accepts one honest candidate packet', () => {
  const value = manifest([candidate('one', 'cooperative')])
  assert.deepEqual(validateManifest(value), [])
})

test('split-disposition manifest rejects multiple candidates in one run', () => {
  const value = manifest([candidate('one', 'cooperative'), candidate('two', 'solo_rpg')])
  assert.match(validateManifest(value).join('\n'), /at most one candidate/)
})

test('blocked candidate requires an actionable gap report', () => {
  const value = candidate('one', 'cooperative')
  delete value.gap
  assert.match(validateManifest(manifest([value])).join('\n'), /gap is required/)
})

test('manifest rejects more than one candidate in a cohort', () => {
  const value = manifest([
    candidate('one', 'cooperative'),
    candidate('two', 'cooperative'),
    candidate('three', 'cooperative'),
  ])
  assert.match(validateManifest(value).join('\n'), /cooperative count 3 exceeds 1/)
})

test('ready non-deckbuilder requires complete rules and at least sixty percent factual coverage', () => {
  const value = candidate('one', 'cooperative', 'ready_for_audit')
  value.coverage.rules = { recorded: 3, known_total: 4, percent: 75 }
  value.coverage.factual = { recorded: 5, known_total: 10, percent: 50 }
  const findings = validateManifest(manifest([value])).join('\n')
  assert.match(findings, /rules.percent must be 100/)
  assert.match(findings, /factual.percent must be at least 60/)
})

test('ready deckbuilder requires complete rules but may declare an unknown factual denominator', () => {
  const value = candidate('one', 'cooperative', 'ready_for_audit')
  value.coverage.deckbuilder = true
  value.coverage.factual = { recorded: 81, known_total: null, percent: null }
  assert.deepEqual(validateManifest(manifest([value])), [])
})

test('manifest rejects duplicate BGG ids and unexplained rotating-focus picks', () => {
  const first = candidate('one', 'cooperative')
  const second = candidate('two', 'solo_rpg')
  const rotating = candidate('three', 'rotating_focus')
  first.bgg_id = 42
  second.bgg_id = 42
  delete rotating.focus_fit
  const findings = validateManifest(manifest([first, second, rotating])).join('\n')
  assert.match(findings, /duplicate candidate bgg_id 42/)
  assert.match(findings, /focus_fit/)
})

test('evidence accepts BGG discovery/rating while requiring outside rules and review', () => {
  const findings = validateEvidence(evidence(), 'evidence.json', { indexText: '  weight: 3.4' })
  assert.deepEqual(findings, [])
})

test('evidence rejects BGG as official rules authority', () => {
  const value = evidence()
  value.sources[0].url = value.sources[0].final_url = 'https://boardgamegeek.com/filepage/1/rules'
  assert.match(validateEvidence(value).join('\n'), /official_rules must be official and outside BGG/)
})

test('manifest and evidence reject non-HTTP source protocols', () => {
  const value = evidence()
  value.sources[0].url = value.sources[0].final_url = 'ftp://publisher.test/rules.pdf'
  assert.match(validateEvidence(value).join('\n'), /absolute HTTP\(S\) URL/)
  const intake = manifest([candidate('one', 'cooperative')])
  intake.candidates[0].discovery_sources = ['ftp://boardgamegeek.com/boardgame/1/one']
  assert.match(validateManifest(intake).join('\n'), /invalid URL/)
})

test('evidence rejects publisher-domain review as independent', () => {
  const value = evidence()
  value.sources[1].url = value.sources[1].final_url = 'https://publisher.test/glowing-review'
  assert.match(validateEvidence(value).join('\n'), /independent review must not share/)
})

test('evidence rejects publisher-controlled review and asset subdomains as independent', () => {
  const value = evidence()
  value.sources[1].url = value.sources[1].final_url = 'https://reviews.publisher.test/good-game'
  value.sources[3].url = value.sources[3].final_url = 'https://cdn.publisher.test/good-game.jpg'
  assert.match(validateEvidence(value).join('\n'), /organizational domain/)
})

test('claim gate requires Source Evidence Confidence triplets', () => {
  const bad = '---\ntype: rule_category\n---\n\n- Claim: A turn has three phases.\n  Source: src-001\n'
  assert.match(claimTripletFindings(bad, 'bad.okf.md', { requireClaim: true }).findings.join('\n'), /Evidence, Confidence/)
  const good = `${bad}  Evidence: Rulebook page 4 lists all three phases.\n  Confidence: high\n`
  assert.deepEqual(claimTripletFindings(good, 'good.okf.md', { requireClaim: true }).findings, [])
})

test('duplicate long prose across games is rejected', () => {
  const paragraph = 'A'.repeat(130)
  const findings = duplicateParagraphFindings([
    { slug: 'one', file: 'one.okf.md', text: paragraph },
    { slug: 'two', file: 'two.okf.md', text: paragraph },
  ])
  assert.equal(findings.length, 1)
})

test('placeholder domains and semantic canonical generators are rejected', t => {
  assert.match(placeholderFindings('source: https://example.invalid/rules').join('\n'), /prohibited placeholder/)
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'intake-generator-'))
  t.after(() => fs.rmSync(root, { recursive: true, force: true }))
  const scripts = path.join(root, 'scripts')
  fs.mkdirSync(scripts)
  fs.writeFileSync(path.join(scripts, 'mass-author.mjs'), "const gamesDir = 'KnowledgeBase/BoardGames/games'; writeFile(gamesDir, 'invented')\n")
  assert.match(semanticGeneratorFindings(root, ['scripts/mass-author.mjs']).join('\n'), /semantic generator/)
})

test('approval is bound to immutable candidate packet and independent auditor', t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'intake-approval-'))
  t.after(() => fs.rmSync(root, { recursive: true, force: true }))
  fs.mkdirSync(path.join(root, 'canonical'), { recursive: true })
  fs.writeFileSync(path.join(root, 'canonical', 'index.okf.md'), 'record\n')
  fs.writeFileSync(path.join(root, 'evidence.json'), `${JSON.stringify(evidence())}\n`)
  const approval = {
    schema_version: 3,
    decision: 'approved',
    auditor: { name: 'The Mennonite', role: 'Requirements and Risk Examiner' },
    reviewed_at: NOW,
    packet_sha256: packetHash(root),
    reviewed_source_ids: ['src-001', 'src-002', 'src-003', 'src-004'],
    checks: {
      official_rules_inspected: true,
      independent_review_inspected: true,
      claims_supported: true,
      source_roles_distinct: true,
      rating_evidence_checked: true,
      visuals_meaningful: true,
      no_placeholders: true,
      no_generated_semantic_content: true,
    },
    notes: 'Independent packet review found every required source and claim supported.',
  }
  assert.deepEqual(approvalFindings(approval, root, evidence()), [])
  fs.appendFileSync(path.join(root, 'canonical', 'index.okf.md'), 'tampered\n')
  assert.match(approvalFindings(approval, root, evidence()).join('\n'), /packet_sha256 does not match/)
})

test('rejection preserves the failed packet hash and concrete reasons', t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'intake-rejection-'))
  t.after(() => fs.rmSync(root, { recursive: true, force: true }))
  fs.mkdirSync(path.join(root, 'canonical'), { recursive: true })
  fs.writeFileSync(path.join(root, 'canonical', 'index.okf.md'), 'record\n')
  fs.writeFileSync(path.join(root, 'evidence.json'), `${JSON.stringify(evidence())}\n`)
  const rejection = {
    schema_version: 3,
    decision: 'rejected',
    auditor: { name: 'The Mennonite', role: 'Requirements and Risk Examiner' },
    reviewed_at: NOW,
    packet_sha256: packetHash(root),
    reasons: ['The cited review does not support the reception claim under audit.'],
  }
  assert.deepEqual(rejectionFindings(rejection, root, evidence()), [])
  rejection.reasons = ['too short']
  assert.match(rejectionFindings(rejection, root, evidence()).join('\n'), /at least 20 characters/)
})

test('pixel gate rejects solid labels and accepts information-rich test image', t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'intake-visual-'))
  t.after(() => fs.rmSync(root, { recursive: true, force: true }))
  const bad = path.join(root, 'bad.webp')
  const good = path.join(root, 'good.webp')
  for (const [filter, output] of [['color=c=white:s=320x180', bad], ['testsrc2=s=320x180', good]]) {
    const result = spawnSync('ffmpeg', ['-v', 'error', '-f', 'lavfi', '-i', filter, '-frames:v', '1', output])
    assert.equal(result.status, 0, String(result.stderr))
  }
  assert.match(visualAnomalyFindings([bad]).join('\n'), /low-information visual/)
  assert.deepEqual(visualAnomalyFindings([good]), [])
})

test('tree and packet hashes use collision-safe canonical manifests', t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'hash-framing-'))
  t.after(() => fs.rmSync(root, { recursive: true, force: true }))
  const treeA = path.join(root, 'tree-a')
  const treeB = path.join(root, 'tree-b')
  fs.mkdirSync(treeA)
  fs.mkdirSync(treeB)
  fs.writeFileSync(path.join(treeA, 'a'), Buffer.from('X\0b\0Y'))
  fs.writeFileSync(path.join(treeB, 'a'), 'X')
  fs.writeFileSync(path.join(treeB, 'b'), 'Y')
  assert.notEqual(hashTree(treeA), hashTree(treeB))

  for (const dir of [treeA, treeB]) {
    fs.renameSync(dir, `${dir}-raw`)
    fs.mkdirSync(path.join(dir, 'canonical'), { recursive: true })
    fs.writeFileSync(path.join(dir, 'evidence.json'), '{}')
  }
  fs.writeFileSync(path.join(treeA, 'canonical/a'), Buffer.from('X\0canonical/b\0Y'))
  fs.writeFileSync(path.join(treeB, 'canonical/a'), 'X')
  fs.writeFileSync(path.join(treeB, 'canonical/b'), 'Y')
  assert.notEqual(packetHash(treeA), packetHash(treeB))
})
