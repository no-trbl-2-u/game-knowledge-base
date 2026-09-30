import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

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

test('push policy allows topic branches and denies direct main pushes', () => {
  for (const command of [
    'git push -u origin kb/example',
    'git push origin chore/repair-settings',
    'git push -u origin audit/2026-09-29',
    'git push origin patterns/2026-09-29',
  ]) {
    assert.equal(permitted(command), true, `expected allowed: ${command}`);
  }

  for (const command of [
    'git push origin main',
    'git push -u origin main',
    'git push origin refs/heads/main',
  ]) {
    assert.equal(permitted(command), false, `expected denied: ${command}`);
  }
});

test('push policy contains no unscoped wildcard rule', () => {
  assert.equal(allow.includes('Bash(git push -u origin *)'), false);
  assert.equal(allow.includes('Bash(git push origin *)'), false);
});