#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import {
  MAX_REVISE_ATTEMPTS,
  REPO,
  issueTitle,
  parseMarker,
  renderIssueBody,
  validateRecord,
} from './kb-loop-contract.mjs';

const LOOP_LABELS = ['bathcat-ready', 'bathcat-running', 'mennonite-ready', 'mennonite-running', 'kb-hold', 'kb-complete'];

function die(message) { console.error(message); process.exit(1); }
function gh(args, input = null) {
  return execFileSync('gh', args, { encoding: 'utf8', input, stdio: ['pipe', 'pipe', 'pipe'] }).trim();
}
function ghJson(args, input = null) { const out = gh(args, input); return out ? JSON.parse(out) : null; }
function opts(argv) {
  const out = { action: argv[2] };
  for (let i = 3; i < argv.length; i += 2) {
    if (!argv[i].startsWith('--') || argv[i + 1] === undefined) die(`invalid argument ${argv[i]}`);
    out[argv[i].slice(2)] = argv[i + 1];
  }
  return out;
}
function int(value, name) { const n = Number(value); if (!Number.isInteger(n) || n < 1) die(`${name} must be positive integer`); return n; }
function fullSha(value, name) { if (!/^[0-9a-f]{40}$/.test(value ?? '')) die(`${name} must be lowercase full SHA`); return value; }
function now() { return new Date().toISOString(); }
function listIssues() {
  return ghJson(['issue', 'list', '--repo', REPO, '--state', 'all', '--limit', '100', '--json', 'number,title,state,body,url,labels']);
}
function findIssue(pr) {
  const matches = listIssues().filter(x => x.title === issueTitle(pr));
  if (matches.length > 1) die(`duplicate loop issues for PR #${pr}`);
  return matches[0] ?? null;
}
function prInfo(pr) {
  return ghJson(['pr', 'view', String(pr), '--repo', REPO, '--json', 'number,state,headRefOid,url,mergedAt']);
}
function validateComment(url, head, verdict) {
  const m = String(url ?? '').match(/^https:\/\/github\.com\/no-trbl-2-u\/game-knowledge-base\/(?:pull|issues)\/\d+#issuecomment-(\d+)$/);
  if (!m) die('invalid audit comment URL');
  const comment = ghJson(['api', `repos/${REPO}/issues/comments/${m[1]}`]);
  if (comment.html_url !== url || !comment.body.includes(verdict) || !comment.body.includes(head)) {
    die(`audit comment is not an exact-head ${verdict} verdict`);
  }
}
function record({ pr, head, disposition, attempt, auditCommentUrl }) {
  return validateRecord({
    schema_version: 1, repository: REPO, pr, head, disposition, attempt,
    audit_comment_url: auditCommentUrl ?? null, updated_at: now(),
  });
}
function issuePayload(rec, state, labels) {
  return JSON.stringify({ title: issueTitle(rec.pr), body: renderIssueBody(rec), state, labels });
}
function putIssue(existing, rec, state, labels) {
  const payload = issuePayload(rec, state, labels);
  if (existing) {
    return ghJson(['api', '--method', 'PATCH', `repos/${REPO}/issues/${existing.number}`, '--input', '-'], payload);
  }
  return ghJson(['api', '--method', 'POST', `repos/${REPO}/issues`, '--input', '-'], payload);
}

const o = opts(process.argv);
if (!['revise', 'handoff', 'hold', 'go', 'show'].includes(o.action)) {
  die('usage: kb-loop-issue.mjs revise|handoff|hold|go|show --pr N ...');
}
const pr = int(o.pr, 'pr');
const existing = findIssue(pr);

if (o.action === 'show') {
  if (!existing) die(`no loop issue for PR #${pr}`);
  console.log(JSON.stringify({ issue: existing.number, url: existing.url, record: parseMarker(existing.body) }));
  process.exit(0);
}

const live = prInfo(pr);
if (live.number !== pr) die(`PR #${pr} not found`);

if (o.action === 'revise') {
  const head = fullSha(o.head, 'head');
  if (live.state !== 'OPEN' || live.headRefOid !== head) die('REVISE is stale or PR is not open');
  validateComment(o['comment-url'], head, 'REVISE');
  let attempt = 1;
  if (existing) {
    const prior = parseMarker(existing.body);
    if (prior.pr !== pr) die('issue PR mismatch');
    attempt = prior.head === head ? prior.attempt : prior.attempt + 1;
  }
  const exhausted = attempt > MAX_REVISE_ATTEMPTS;
  const bounded = Math.min(attempt, MAX_REVISE_ATTEMPTS);
  const rec = record({ pr, head, disposition: exhausted ? 'HOLD' : 'REVISE', attempt: bounded, auditCommentUrl: o['comment-url'] });
  const issue = putIssue(existing, rec, 'open', exhausted ? ['kb-hold'] : ['bathcat-ready']);
  console.log(JSON.stringify({ action: exhausted ? 'held' : 'bathcat-ready', issue: issue.number, url: issue.html_url, attempt: bounded }));
} else if (o.action === 'handoff') {
  if (!existing) die(`no loop issue for PR #${pr}`);
  const audited = fullSha(o['audited-head'], 'audited-head');
  const fresh = fullSha(o['new-head'], 'new-head');
  const prior = parseMarker(existing.body);
  if (prior.disposition !== 'REVISE' || prior.head !== audited) die('handoff does not match claimed REVISE head');
  if (live.state !== 'OPEN' || live.headRefOid !== fresh || fresh === audited) die('handoff head is not the fresh live PR head');
  const rec = record({ pr, head: fresh, disposition: 'MENNONITE_READY', attempt: prior.attempt, auditCommentUrl: prior.audit_comment_url });
  const issue = putIssue(existing, rec, 'open', ['mennonite-ready']);
  console.log(JSON.stringify({ action: 'mennonite-ready', issue: issue.number, url: issue.html_url, head: fresh }));
} else if (o.action === 'hold') {
  const head = fullSha(o.head, 'head');
  if (live.state !== 'OPEN' || live.headRefOid !== head) die('HOLD is stale or PR is not open');
  validateComment(o['comment-url'], head, 'HOLD');
  const prior = existing ? parseMarker(existing.body) : null;
  const rec = record({ pr, head, disposition: 'HOLD', attempt: prior?.attempt ?? 1, auditCommentUrl: o['comment-url'] });
  const issue = putIssue(existing, rec, 'open', ['kb-hold']);
  console.log(JSON.stringify({ action: 'held', issue: issue.number, url: issue.html_url }));
} else if (o.action === 'go') {
  const head = fullSha(o.head, 'head');
  if (!existing) die(`no loop issue for PR #${pr}`);
  if (live.state !== 'MERGED' || live.headRefOid !== head || !live.mergedAt) die('issue closes only after exact PR head is merged');
  const prior = parseMarker(existing.body);
  const rec = record({ pr, head, disposition: 'GO', attempt: prior.attempt, auditCommentUrl: o['comment-url'] ?? prior.audit_comment_url });
  const issue = putIssue(existing, rec, 'closed', ['kb-complete']);
  console.log(JSON.stringify({ action: 'closed', issue: issue.number, url: issue.html_url }));
}
