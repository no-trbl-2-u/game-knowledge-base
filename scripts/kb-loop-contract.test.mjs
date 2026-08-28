import assert from 'node:assert/strict';
import test from 'node:test';

import {
  MAX_REVISE_ATTEMPTS,
  issueTitle,
  parseMarker,
  renderIssueBody,
  renderMarker,
  validateRecord,
} from './kb-loop-contract.mjs';

const base = {
  schema_version: 1,
  repository: 'no-trbl-2-u/game-knowledge-base',
  pr: 51,
  head: 'a'.repeat(40),
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
