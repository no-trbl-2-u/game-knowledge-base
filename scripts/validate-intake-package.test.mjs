import test from 'node:test'
import assert from 'node:assert/strict'
import crypto from 'node:crypto'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import {
  auditTransitionFindings,
  blockedRunDiffFindings,
  dailyBatchFindings,
  mergeCommitTopologyFindings,
  newGameSlugs,
  promotionBoundaryFindings,
  validateCandidatePackage,
} from './validate-intake.mjs'
import { packetHash } from './intake-lib.mjs'

const VALIDATOR = path.resolve(new URL('./validate-okf.mjs', import.meta.url).pathname)

const NOW = '2026-07-30T12:00:00.000Z'
const DOCS = [
  'index.okf.md', 'sources.okf.md', 'scout-report.okf.md',
  'rules/overview.okf.md', 'rules/setup.okf.md', 'rules/turn-structure.okf.md',
  'rules/actions.okf.md', 'rules/scoring-endgame.okf.md', 'rules/edge-cases-faq.okf.md',
  'reception/reviews.okf.md', 'reception/better-if.okf.md',
]

const sourceData = [
  ['src-001', 'Official rules', 'https://publisher.test/rules.pdf', 'rulebook_pdf', 'official', ['official_rules']],
  ['src-002', 'Independent review', 'https://reviewer.test/good-game-review', 'review', 'secondary', ['independent_review']],
  ['src-003', 'Rating snapshot', 'https://boardgamegeek.com/boardgame/123/good-game', 'bgg_page', 'community', ['identity', 'rating']],
  ['src-004', 'Publisher visual one', 'https://assets.publisher.test/good-game/asset-1.png', 'image', 'official', ['visual']],
  ['src-005', 'Publisher visual two', 'https://assets.publisher.test/good-game/asset-2.png', 'image', 'official', ['visual']],
  ['src-006', 'Publisher visual three', 'https://assets.publisher.test/good-game/asset-3.png', 'image', 'official', ['visual']],
  ['src-007', 'Publisher visual four', 'https://assets.publisher.test/good-game/asset-4.png', 'image', 'official', ['visual']],
]

function sourcesYaml() {
  return sourceData.map(([id, title, url, kind, provenance, roles]) => `  - id: "${id}"
    title: "${title}"
    url: "${url}"
${roles.includes('visual') ? `    asset_url: "${url}"\n` : ''}    kind: ${kind}
    provenance: ${provenance}
    retrieved_at: "2026-07-30"
    notes: "Inspected fixture source with preserved receipt."`).join('\n')
}

function document(type, body, extra = '') {
  return `---
okf_version: 0.2
type: ${type}
game:
  title: "Good Game"
  slug: "good-game"
  bgg_id: 123
  publisher: "Fixture Publisher"
  year: 2026
  weight: 2.50
  edition: "first edition"
scope: "base game"
mechanics: [deck-building]
${extra}sources:
${sourcesYaml()}
confidence: high
status: verified
---

${body}
`
}

function claim(label) {
  return `## ${label}\n\n- Claim: ${label} is supported by inspected source material.\n  Source: src-001, src-002\n  Evidence: The cited rulebook and independent review explicitly support this fixture claim.\n  Confidence: high`
}

function receipt([id, title, url, , provenance, roles]) {
  return { id, title, roles, provenance, url, final_url: url, retrieved_at: NOW, http_status: 200, content_type: 'text/html', byte_length: 4096, sha256: 'a'.repeat(64), locator: 'inspected section', evidence: 'A sufficiently long extracted evidence passage supports the staged claim.' }
}

function makePackage(t, rootOverride = null) {
  const root = rootOverride ?? fs.mkdtempSync(path.join(os.tmpdir(), 'intake-package-'))
  if (rootOverride) {
    fs.rmSync(root, { recursive: true, force: true })
    fs.mkdirSync(root, { recursive: true })
  } else {
    t.after(() => fs.rmSync(root, { recursive: true, force: true }))
  }
  const canonical = path.join(root, 'canonical')
  for (const rel of DOCS) {
    const file = path.join(canonical, rel)
    fs.mkdirSync(path.dirname(file), { recursive: true })
    const needsClaim = rel === 'index.okf.md' || rel.startsWith('rules/') || rel.startsWith('reception/')
    const type = rel === 'reception/better-if.okf.md' ? 'better_if'
      : rel === 'reception/reviews.okf.md' ? 'reception'
        : rel.startsWith('rules/') ? 'rule_category'
          : rel === 'sources.okf.md' ? 'sources'
            : rel === 'scout-report.okf.md' ? 'scout_report'
              : 'game_index'
    const extra = rel.startsWith('reception/') ? 'better_if_labels: [onboarding]\n' : ''
    fs.writeFileSync(file, document(type, needsClaim ? claim(rel) : `## ${rel}\n\nThis verified fixture record preserves source-backed package metadata.`, extra))
  }
  fs.mkdirSync(path.join(canonical, 'visuals', 'references'), { recursive: true })
  const filters = ['testsrc2=s=320x240', 'smptebars=s=320x240', 'rgbtestsrc=s=320x240', 'mandelbrot=s=320x240']
  const refs = []
  for (let i = 0; i < filters.length; i += 1) {
    const rel = `visuals/references/ref-${i + 1}.webp`
    const file = path.join(canonical, rel)
    const made = spawnSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-f', 'lavfi', '-i', filters[i], '-frames:v', '1', '-y', file], { encoding: 'utf8' })
    assert.equal(made.status, 0, made.stderr)
    const hash = crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex')
    refs.push(`  - id: "vis-${String(i + 1).padStart(3, '0')}"
    source_id: "src-${String(i + 4).padStart(3, '0')}"
    file: "${rel}"
    subject: components
    capture_type: official
    creator: "Fixture Publisher"
    rights_holder: "Fixture Publisher"
    usage_basis: editorial-excerpt
    license: ""
    attribution: "Fixture Publisher asset ${i + 1}"
    demonstrates: "Distinct analytical subject ${i + 1} shows a different inspected component."
    rationale: "Distinct analytical subject ${i + 1} is needed to inspect a different game component."
    sha256: "${hash}"
`)
  }
  const sheetFile = path.join(canonical, 'visuals/contact-sheet.webp')
  const sheet = spawnSync('ffmpeg', [
    '-hide_banner', '-loglevel', 'error',
    '-i', path.join(canonical, 'visuals/references/ref-1.webp'),
    '-i', path.join(canonical, 'visuals/references/ref-2.webp'),
    '-i', path.join(canonical, 'visuals/references/ref-3.webp'),
    '-i', path.join(canonical, 'visuals/references/ref-4.webp'),
    '-filter_complex', 'xstack=inputs=4:layout=0_0|w0_0|0_h0|w0_h0',
    '-frames:v', '1', '-y', sheetFile,
  ], { encoding: 'utf8' })
  assert.equal(sheet.status, 0, sheet.stderr)
  const sheetHash = crypto.createHash('sha256').update(fs.readFileSync(sheetFile)).digest('hex')
  fs.writeFileSync(path.join(canonical, 'visuals/packet.okf.md'), document('visual_reference', '## Visual packet\n\nRetrieved references preserve distinct inspected subjects.', `visual_references:\n${refs.join('\n')}\ncontact_sheet: "visuals/contact-sheet.webp"\ncontact_sheet_sha256: "${sheetHash}"\n`))
  fs.writeFileSync(path.join(root, 'evidence.json'), `${JSON.stringify({ schema_version: 3, slug: 'good-game', researcher: { name: 'Bathcat', role: 'Field Intelligence and Knowledge Scout' }, researched_at: NOW, sources: sourceData.map(receipt) }, null, 2)}\n`)
  return root
}

const candidate = {
  slug: 'good-game', title: 'Good Game', bgg_id: 123, cohort: 'cooperative', status: 'ready_for_audit', blockers: [],
  coverage: {
    deckbuilder: true,
    methodology: 'All governing rules documents are counted; the card denominator is unavailable.',
    rules: { recorded: 1, known_total: 1, percent: 100 },
    factual: { recorded: 7, known_total: null, percent: null },
  },
}

test('complete factual staged package passes the admission gate', t => {
  const root = makePackage(t)
  assert.deepEqual(validateCandidatePackage(root, candidate), [])
  const promoted = path.join(root, 'promoted/good-game')
  fs.cpSync(path.join(root, 'canonical'), promoted, { recursive: true })
  const canonical = spawnSync(process.execPath, [VALIDATOR, path.join(promoted, 'visuals/packet.okf.md')], { encoding: 'utf8' })
  assert.equal(canonical.status, 0, canonical.stdout + canonical.stderr)
})

test('unverified staged record is rejected before audit', t => {
  const root = makePackage(t)
  const file = path.join(root, 'canonical/rules/setup.okf.md')
  fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace('status: verified', 'status: draft'))
  assert.match(validateCandidatePackage(root, candidate).join('\n'), /new canonical records must be verified/)
})

test('symlinked staged content is rejected and cannot be packet-hashed', t => {
  const root = makePackage(t)
  const external = path.join(root, 'external.txt')
  fs.writeFileSync(external, 'mutable external content')
  fs.symlinkSync(external, path.join(root, 'canonical/rules/linked.okf.md'))
  assert.match(validateCandidatePackage(root, candidate).join('\n'), /symbolic link prohibited/)
  assert.throws(() => packetHash(root), /symbolic links are prohibited/)
})

test('renamed legacy directory is classified as a new canonical slug', () => {
  const changes = [{ status: 'R100', oldFile: 'KnowledgeBase/BoardGames/games/old/index.okf.md', file: 'KnowledgeBase/BoardGames/games/new/index.okf.md' }]
  assert.deepEqual([...newGameSlugs(changes, slug => slug === 'old')], ['new'])
})

test('split run directories still enforce one candidate per daily cohort', () => {
  const records = [
    { manifest: { created_at: NOW }, candidate: { slug: 'one', bgg_id: 1, cohort: 'cooperative' } },
    { manifest: { created_at: NOW }, candidate: { slug: 'two', bgg_id: 2, cohort: 'cooperative' } },
  ]
  assert.match(dailyBatchFindings(records).join('\n'), /2 cooperative candidates; hard ceiling is 1/)
})

test('approval may share one PR only after a frozen ready packet commit', () => {
  const approval = 'intake/runs/2026-07-30-test/candidates/good-game/approval.json'
  const manifest = 'intake/runs/2026-07-30-test/manifest.json'
  const packet = 'intake/runs/2026-07-30-test/candidates/good-game/canonical/index.okf.md'
  const good = {
    decisionCommit: 'a'.repeat(40),
    parentHasEvidence: true,
    parentHasCanonical: true,
    parentStatus: 'ready_for_audit',
    decisionStatus: 'approved',
    manifestOnlyStatusTransition: true,
    oppositeAtParent: false,
    unexpectedDecisionChanges: [],
    postDecisionPacketChanges: [],
  }
  const changes = [{ status: 'A', file: approval }, { status: 'A', file: packet }, { status: 'A', file: manifest }]
  assert.deepEqual(auditTransitionFindings(changes, { boundaryFor: () => good }), [])
  assert.match(auditTransitionFindings(changes, {
    boundaryFor: () => ({ ...good, parentStatus: null }),
  }).join('\n'), /parent commit status must be ready_for_audit/)
  assert.match(auditTransitionFindings(changes, {
    boundaryFor: () => ({ ...good, postDecisionPacketChanges: [packet] }),
  }).join('\n'), /packet changed after approval/)
  assert.match(auditTransitionFindings(changes, {
    boundaryFor: () => ({ ...good, unexpectedDecisionChanges: ['README.md'] }),
  }).join('\n'), /approval commit may change only approval.json and its manifest/)
  assert.match(auditTransitionFindings(changes, {
    boundaryFor: () => ({ ...good, manifestOnlyStatusTransition: false }),
  }).join('\n'), /manifest may change only candidate status/)
})

test('new rejection records are forbidden because REVISE returns the same PR', () => {
  const rejection = 'intake/runs/2026-07-30-rejected/candidates/good-game/rejection.json'
  const findings = auditTransitionFindings(
    [{ status: 'A', file: rejection }],
    { boundaryFor: () => null },
  )
  assert.match(findings.join('\n'), /record REVISE on the PR instead/)
})

test('committed decisions remain immutable', () => {
  const approval = 'intake/runs/2026-07-30-test/candidates/good-game/approval.json'
  const findings = auditTransitionFindings([{ status: 'M', file: approval }], { boundaryFor: () => null })
  assert.match(findings.join('\n'), /audit decisions are immutable once committed/)
})

test('promotion may share the PR only from an approved parent commit', () => {
  const good = {
    promotionCommit: 'b'.repeat(40),
    parentHasApproval: true,
    parentStatus: 'approved',
    promotionStatus: 'promoted',
    manifestOnlyStatusTransition: true,
    unexpectedPromotionChanges: [],
  }
  assert.deepEqual(promotionBoundaryFindings('good-game', good), [])
  assert.match(promotionBoundaryFindings('good-game', { ...good, parentHasApproval: false }).join('\n'), /parent commit must contain Mennonite approval/)
  assert.match(promotionBoundaryFindings('good-game', { ...good, parentStatus: 'ready_for_audit' }).join('\n'), /parent commit status must be approved/)
  assert.match(promotionBoundaryFindings('good-game', { ...good, manifestOnlyStatusTransition: false }).join('\n'), /add a valid promoted_at timestamp/)
  assert.match(promotionBoundaryFindings('good-game', { ...good, unexpectedPromotionChanges: ['README.md'] }).join('\n'), /deterministic promotion commit changed unexpected paths/)
})

test('new-game protected-base updates require an exact-base merge commit', () => {
  const base = 'a'.repeat(40)
  const branch = 'b'.repeat(40)
  assert.deepEqual(mergeCommitTopologyFindings(0, { parents: [], baseSha: base }), [])
  assert.deepEqual(mergeCommitTopologyFindings(1, { parents: [base, branch], baseSha: base }), [])
  assert.match(mergeCommitTopologyFindings(1, { parents: [branch], baseSha: base }).join('\n'), /squash, rebase, and direct pushes are forbidden/)
  assert.match(mergeCommitTopologyFindings(1, { parents: [branch, base], baseSha: base }).join('\n'), /previous protected-base head/)
})

test('new blocked packets are rejected from Git and redirected to issues', () => {
  assert.deepEqual(blockedRunDiffFindings([{ runId: '2026-07-30-good', candidates: [{ slug: 'good-game', status: 'ready_for_audit' }] }]), [])
  assert.match(blockedRunDiffFindings([{ runId: '2026-07-30-gap', candidates: [{ slug: 'gap-game', status: 'blocked' }] }]).join('\n'), /blocked research belongs in a GitHub issue/)
})

test('emit deterministic promotion fixture when requested', { skip: !process.env.INTAKE_FIXTURE_OUT }, t => {
  const root = makePackage(t, path.resolve(process.env.INTAKE_FIXTURE_OUT))
  assert.deepEqual(validateCandidatePackage(root, candidate), [])
})
