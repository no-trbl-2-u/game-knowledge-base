import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const VALIDATOR = path.join(path.dirname(fileURLToPath(import.meta.url)), 'validate-okf.mjs')

function record(body) {
  return `---
okf_version: 0.2
type: rule_category
game:
  title: "Fixture"
  slug: "fixture"
  bgg_id: null
  publisher: "Fixture Publisher"
  year: 2026
  weight: null
  edition: "test"
scope: "test"
mechanics: [deck-building]
sources:
  - id: "src-001"
    title: "Rules"
    url: "https://publisher.test/rules"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-30"
    notes: "Fixture source."
  - id: "src-002"
    title: "Review"
    url: "https://reviewer.test/review"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-30"
    notes: "Fixture source."
confidence: high
status: verified
---

${body}
`
}

function validate(text, t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'okf-provenance-'))
  t.after(() => fs.rmSync(root, { recursive: true, force: true }))
  const file = path.join(root, 'fixture.okf.md')
  fs.writeFileSync(file, text)
  return spawnSync(process.execPath, [VALIDATOR, file], { encoding: 'utf8' })
}

test('all source ids on a multi-source citation must be declared', t => {
  const result = validate(record(`- Claim: The fixture has a supported rule.
  Source: src-001, src-999
  Evidence: The inspected rules state the rule.
  Confidence: high`), t)
  assert.equal(result.status, 1)
  assert.match(result.stdout + result.stderr, /body cites src-999/)
})

test('every canonical Claim requires a complete provenance triplet', t => {
  const result = validate(record(`- Claim: The fixture has a supported rule.
  Source: src-001`), t)
  assert.equal(result.status, 1)
  assert.match(result.stdout + result.stderr, /missing Evidence, Confidence/)
})

test('canonical Claim rejects arbitrary non-source values', t => {
  const result = validate(record(`- Claim: The fixture has a supported rule.
  Source: not-a-source-id
  Evidence: The inspected rules state the relevant fixture rule in detail.
  Confidence: high`), t)
  assert.equal(result.status, 1)
  assert.match(result.stdout + result.stderr, /missing Source/)
})

test('complete multi-source claim passes', t => {
  const result = validate(record(`- Claim: Rules and reception support the observation.
  Source: src-001, src-002
  Evidence: The inspected rulebook and review both state the relevant facts.
  Confidence: medium`), t)
  assert.equal(result.status, 0, result.stdout + result.stderr)
})
