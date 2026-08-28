export const REPO = 'no-trbl-2-u/game-knowledge-base';
export const SCHEMA_VERSION = 1;
export const MAX_REVISE_ATTEMPTS = 3;
export const MARKER_START = '<!-- SOMBERSOFT_KB_LOOP';
export const MARKER_END = '-->';
export const DISPOSITIONS = new Set(['REVISE', 'MENNONITE_READY', 'HOLD', 'GO']);
const ISO_UTC_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

function fail(message) {
  throw new Error(`invalid KB loop marker: ${message}`);
}

export function issueTitle(pr) {
  if (!Number.isInteger(pr) || pr < 1) fail('pr must be a positive integer');
  return `[kb-revise] PR #${pr}`;
}

export function validateRecord(record) {
  if (!record || typeof record !== 'object' || Array.isArray(record)) fail('record must be an object');
  const allowed = new Set([
    'schema_version', 'repository', 'pr', 'head', 'audit_head', 'disposition',
    'attempt', 'audit_comment_url', 'updated_at',
  ]);
  for (const key of Object.keys(record)) {
    if (!allowed.has(key)) fail(`unknown field ${key}`);
  }
  if (record.schema_version !== SCHEMA_VERSION) fail(`schema_version must be ${SCHEMA_VERSION}`);
  if (record.repository !== REPO) fail(`repository must be ${REPO}`);
  if (!Number.isInteger(record.pr) || record.pr < 1) fail('pr must be a positive integer');
  if (typeof record.head !== 'string' || !/^[0-9a-f]{40}$/.test(record.head)) fail('head must be a lowercase full SHA');
  if (typeof record.audit_head !== 'string' || !/^[0-9a-f]{40}$/.test(record.audit_head)) fail('audit_head must be a lowercase full SHA');
  if (!DISPOSITIONS.has(record.disposition)) fail('unknown disposition');
  if (!Number.isInteger(record.attempt) || record.attempt < 1 || record.attempt > MAX_REVISE_ATTEMPTS) {
    fail(`attempt must be 1-${MAX_REVISE_ATTEMPTS}`);
  }
  if (record.audit_comment_url !== null) {
    if (typeof record.audit_comment_url !== 'string' ||
        !/^https:\/\/github\.com\/no-trbl-2-u\/game-knowledge-base\/(pull|issues)\/\d+#issuecomment-\d+$/.test(record.audit_comment_url)) {
      fail('audit_comment_url must be a KB GitHub issue-comment URL or null');
    }
  }
  if (typeof record.updated_at !== 'string' || !ISO_UTC_RE.test(record.updated_at) ||
      Number.isNaN(Date.parse(record.updated_at)) || new Date(record.updated_at).toISOString() !== record.updated_at) {
    fail('updated_at must be canonical ISO-8601 UTC');
  }
  return Object.freeze({ ...record });
}

export function nextReviseState(prior, head) {
  if (typeof head !== 'string' || !/^[0-9a-f]{40}$/.test(head)) fail('head must be a lowercase full SHA');
  if (!prior) return Object.freeze({ disposition: 'REVISE', attempt: 1 });
  const valid = validateRecord(prior);
  if (valid.disposition === 'HOLD' || valid.disposition === 'GO') {
    return Object.freeze({ disposition: valid.disposition, attempt: valid.attempt });
  }
  if (valid.head === head && valid.disposition === 'REVISE') {
    return Object.freeze({ disposition: 'REVISE', attempt: valid.attempt });
  }
  const attempt = valid.attempt + 1;
  if (attempt > MAX_REVISE_ATTEMPTS) {
    return Object.freeze({ disposition: 'HOLD', attempt: MAX_REVISE_ATTEMPTS });
  }
  return Object.freeze({ disposition: 'REVISE', attempt });
}

export function parseVerdict(body, expected) {
  if (typeof body !== 'string') fail('verdict comment must be text');
  const first = body.split(/\r?\n/).map(line => line.trim()).find(Boolean);
  if (first !== expected) fail(`first disposition must be ${expected}`);
  return first;
}

export function renderMarker(record) {
  const valid = validateRecord(record);
  return `${MARKER_START}\n${JSON.stringify(valid)}\n${MARKER_END}`;
}

export function parseMarker(body) {
  if (typeof body !== 'string') fail('issue body must be text');
  const escapedStart = MARKER_START.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const escapedEnd = MARKER_END.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const matches = [...body.matchAll(new RegExp(`${escapedStart}\\s*\\n([^\\n]+)\\n${escapedEnd}`, 'g'))];
  if (matches.length !== 1) fail(`expected exactly one marker, found ${matches.length}`);
  let record;
  try {
    record = JSON.parse(matches[0][1]);
  } catch {
    fail('marker payload is not JSON');
  }
  return validateRecord(record);
}

export function renderIssueBody(record) {
  const valid = validateRecord(record);
  const state = {
    REVISE: 'Bathcat repair requested',
    MENNONITE_READY: 'Fresh Mennonite audit requested',
    HOLD: 'Stopped for T',
    GO: 'Merged and complete',
  }[valid.disposition];
  return [
    '## KB correction loop',
    '',
    `- PR: #${valid.pr}`,
    `- Exact head: \`${valid.head}\``,
    `- Audited head: \`${valid.audit_head}\``,
    `- State: **${state}**`,
    `- Repair attempt: ${valid.attempt}/${MAX_REVISE_ATTEMPTS}`,
    `- Audit verdict: ${valid.audit_comment_url ?? 'pending'}`,
    '',
    'This is a machine-owned, reusable work order. Do not edit its marker by hand.',
    '',
    renderMarker(valid),
    '',
  ].join('\n');
}
