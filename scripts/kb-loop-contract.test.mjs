import assert from 'node:assert/strict';
import test from 'node:test';

import {
  MAX_REVISE_ATTEMPTS,
  issueTitle,
  nextReviseState,
  parseMarker,
  parseVerdict,
  renderIssueBody,
  renderMarker,
  validateRecord,
} from './kb-loop-contract.mjs';

const base = {
  schema_version: 1,
  repository: 'no-trbl-2-u/game-knowledge-base',
  pr: 51,
  head: 'a'.repeat(40),
  audit_head: 'a'.repeat(40),
  disposition: 'REVISE',
  attempt: 1,
  audit_comment_url: 'https://github.com/no-trbl-2-u/game-knowledge-base/pull/51#issuecomment-123',
  updated_at: '2026-08-27T20:00:00.000Z',
};

test('round-trips one strict machine marker', () => {
  assert.deepEqual(parseMarker(renderIssueBody(base)), base);
  assert.equal(issueTitle(51), '[kb-revise] PR #51');
});

test('rejects missing, duplicate, malformed, and foreign markers', () => {
  assert.throws(() => parseMarker('none'), /exactly one marker/);
  const marker = renderMarker(base);
  assert.throws(() => parseMarker(`${marker}\n${marker}`), /exactly one marker/);
  assert.throws(() => parseMarker('<!-- SOMBERSOFT_KB_LOOP\nnope\n-->'), /not JSON/);
  assert.throws(() => validateRecord({ ...base, repository: 'attacker/repo' }), /repository/);
});

test('rejects abbreviated SHA, unknown fields, and out-of-bounds attempts', () => {
  assert.throws(() => validateRecord({ ...base, head: 'abc123' }), /full SHA/);
  assert.throws(() => validateRecord({ ...base, surprise: true }), /unknown field/);
  assert.throws(() => validateRecord({ ...base, attempt: 0 }), /attempt/);
  assert.throws(() => validateRecord({ ...base, attempt: MAX_REVISE_ATTEMPTS + 1 }), /attempt/);
});

test('accepts only lawful dispositions and repository comment URLs', () => {
  for (const disposition of ['REVISE', 'MENNONITE_READY', 'HOLD', 'GO']) {
    assert.equal(validateRecord({ ...base, disposition }).disposition, disposition);
  }
  assert.throws(() => validateRecord({ ...base, disposition: 'EXECUTE' }), /disposition/);
  assert.throws(() => validateRecord({ ...base, audit_comment_url: 'https://evil.example/x' }), /audit_comment_url/);
});

test('three-repair ceiling is permanent and idempotent', () => {
  assert.deepEqual(nextReviseState(null, 'a'.repeat(40)), { disposition: 'REVISE', attempt: 1 });
  const second = { ...base, head: 'b'.repeat(40), attempt: 2 };
  assert.deepEqual(nextReviseState(second, 'c'.repeat(40)), { disposition: 'REVISE', attempt: 3 });
  const third = { ...base, head: 'c'.repeat(40), attempt: 3 };
  assert.deepEqual(nextReviseState(third, 'd'.repeat(40)), { disposition: 'HOLD', attempt: 3 });
  const held = { ...base, head: 'd'.repeat(40), attempt: 3, disposition: 'HOLD' };
  assert.deepEqual(nextReviseState(held, 'd'.repeat(40)), { disposition: 'HOLD', attempt: 3 });
  assert.deepEqual(nextReviseState(held, 'e'.repeat(40)), { disposition: 'HOLD', attempt: 3 });
});

test('verdict must be the first exact nonblank line', () => {
  assert.equal(parseVerdict('\nREVISE\nExact head: abc', 'REVISE'), 'REVISE');
  assert.throws(() => parseVerdict('Not REVISE\nREVISE', 'REVISE'), /first disposition/);
  assert.throws(() => parseVerdict('Discussion\nGO', 'GO'), /first disposition/);
});

test('updated_at must be canonical and calendar-valid', () => {
  assert.throws(() => validateRecord({ ...base, updated_at: '0' }), /canonical ISO/);
  assert.throws(() => validateRecord({ ...base, updated_at: '2026-02-30T00:00:00.000Z' }), /canonical ISO/);
  assert.equal(validateRecord(base).updated_at, base.updated_at);
});
