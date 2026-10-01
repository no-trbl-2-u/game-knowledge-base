import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import { isAllowedTopicBranch } from './push-topic-branch.mjs';

const settings = JSON.parse(fs.readFileSync(new URL('../.claude/settings.json', import.meta.url), 'utf8'));
const allow = settings.permissions?.allow ?? [];

function matches(rule, command) {
  if (!rule.startsWith('Bash(') || !rule.endsWith(')')) return false;
  const pattern = rule.slice(5, -1);
  const escaped = pattern.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replaceAll('*', '.*');
  return new RegExp(`^${escaped}$`).test(command);
}

function permitted(command) {
  return allow.some((rule) => matches(rule, command));
}

test('push policy delegates delivery to the guarded topic-branch wrapper', () => {
  for (const command of [
    'node scripts/push-topic-branch.mjs kb/example',
    'node scripts/push-topic-branch.mjs chore/repair-settings',
    'node scripts/push-topic-branch.mjs audit/2026-09-29',
    'node scripts/push-topic-branch.mjs patterns/2026-09-29',
  ]) {
    assert.equal(permitted(command), true, `expected allowed: ${command}`);
  }

  for (const command of [
    'git push origin main',
    'git push -u origin main',
    'git push origin refs/heads/main',
    'git push origin audit/foo:main',
    'git push -u origin patterns/foo:main',
  ]) {
    assert.equal(permitted(command), false, `expected denied: ${command}`);
  }
});

test('wrapper rejects destination refspecs for both push spellings', () => {
  for (const branch of [
    'audit/foo:main',
    'patterns/foo:main',
    'kb/foo:refs/heads/main',
    'main',
  ]) {
    assert.equal(isAllowedTopicBranch(branch), false, `expected rejected branch: ${branch}`);
  }
  for (const branch of ['audit/foo', 'patterns/2026-09-30', 'kb/repair-settings']) {
    assert.equal(isAllowedTopicBranch(branch), true, `expected allowed branch: ${branch}`);
  }
});

test('settings contain no direct git-push allow rule', () => {
  assert.equal(allow.some((rule) => rule.startsWith('Bash(git push')), false);
});