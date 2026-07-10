#!/usr/bin/env node
// .claude/hooks/okf-guard.mjs — harness-level guards for the OKF corpus.
// Zero dependencies. Fail-open: an internal error in this script must never
// block legitimate work (exit 0), only a confirmed rule hit blocks/reports.
//
//   node .claude/hooks/okf-guard.mjs pre-write    # PreToolUse (Write|Edit)
//   node .claude/hooks/okf-guard.mjs post-write   # PostToolUse (Write|Edit)
//   node .claude/hooks/okf-guard.mjs self-test    # canned rule cases
//
// pre-write : blocks hand-edits to GENERATED files (exit 2 + reason on
//             stderr). The index and sidecars are derived from the corpus —
//             edit the source records and rerun the generator instead.
// post-write: after any write to a KnowledgeBase/**/*.okf.md file, runs
//             scripts/validate-okf.mjs on just that file and feeds findings
//             back to the agent (exit 2 + findings on stderr). Instant
//             schema feedback instead of a red validate job later.
//
// Exit codes (Claude Code hook contract):
//   0 = allow / clean;  2 = block (pre) or report findings (post).

import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')

// Derived artifacts and their regeneration commands. Paths are
// forward-slash, relative to the repo root.
const GENERATED = {
  'KnowledgeBase/BoardGames/INDEX.okf.md':
    'node scripts/generate-index.mjs',
  'KnowledgeBase/DigitalCardGames/dawncaster/cards.csv':
    'node scripts/generate-dawncaster-card-sidecars.mjs',
  'KnowledgeBase/DigitalCardGames/dawncaster/cards.json':
    'node scripts/generate-dawncaster-card-sidecars.mjs',
  'KnowledgeBase/DigitalCardGames/dawncaster/card-index.csv':
    'node scripts/generate-dawncaster-card-sidecars.mjs',
  'KnowledgeBase/DigitalCardGames/dawncaster/keywords.csv':
    'scripts/generate-dawncaster-keywords-okf.py (one-shot generator; regenerate, do not hand-edit)',
  'KnowledgeBase/DigitalCardGames/dawncaster/keywords.json':
    'scripts/generate-dawncaster-keywords-okf.py (one-shot generator; regenerate, do not hand-edit)',
}

const normalize = (p) => {
  if (!p) return null
  let rel = p.replaceAll('\\', '/')
  const rootFwd = REPO_ROOT.replaceAll('\\', '/')
  if (rel.startsWith(rootFwd)) rel = rel.slice(rootFwd.length).replace(/^\//, '')
  return rel
}

function readStdinJson() {
  try {
    const raw = fs.readFileSync(0, 'utf-8')
    return raw.trim() ? JSON.parse(raw) : null
  }
  catch { return null }
}

function preWrite(filePath) {
  const rel = normalize(filePath)
  if (!rel) return 0
  const regen = GENERATED[rel]
  if (regen) {
    console.error(
      `okf-guard: "${rel}" is GENERATED — hand edits will be flagged stale by the validator.\n` +
      `Edit the source records instead, then regenerate: ${regen}`,
    )
    return 2
  }
  return 0
}

function postWrite(filePath) {
  const rel = normalize(filePath)
  if (!rel) return 0
  if (!rel.startsWith('KnowledgeBase/') || !rel.endsWith('.okf.md')) return 0
  if (rel.endsWith('/INDEX.okf.md')) return 0 // generated; pre-write owns it
  const abs = path.join(REPO_ROOT, rel)
  if (!fs.existsSync(abs)) return 0
  const res = spawnSync(process.execPath, ['scripts/validate-okf.mjs', rel], {
    cwd: REPO_ROOT,
    encoding: 'utf-8',
    timeout: 30_000,
  })
  if (res.error) return 0 // fail-open
  if (res.status !== 0) {
    console.error(
      `okf-guard: validate-okf found schema problems in the file just written:\n` +
      `${(res.stderr || res.stdout || '').trim()}\n` +
      `Fix the frontmatter/citations now (OKF_SPEC.md is the contract) — ` +
      `the validate CI job blocks on these.`,
    )
    return 2
  }
  return 0
}

function selfTest() {
  const cases = [
    ['pre-write blocks the generated index',
      () => preWrite('KnowledgeBase/BoardGames/INDEX.okf.md') === 2],
    ['pre-write blocks a generated sidecar (backslash path)',
      () => preWrite('KnowledgeBase\\DigitalCardGames\\dawncaster\\cards.csv') === 2],
    ['pre-write allows a normal record',
      () => preWrite('KnowledgeBase/BoardGames/games/root/index.okf.md') === 0],
    ['pre-write allows non-KB files',
      () => preWrite('README.md') === 0],
    ['post-write ignores non-okf files',
      () => postWrite('KnowledgeBase/BoardGames/index.html') === 0],
    ['post-write ignores files outside KnowledgeBase',
      () => postWrite('scripts/validate-okf.mjs') === 0],
    ['post-write is clean on a known-good record',
      () => postWrite('KnowledgeBase/BoardGames/games/root/index.okf.md') === 0],
  ]
  let failed = 0
  for (const [name, fn] of cases) {
    let ok = false
    try { ok = fn() } catch { ok = false }
    console.log(`  ${ok ? 'ok  ' : 'FAIL'}  ${name}`)
    if (!ok) failed++
  }
  if (failed) { console.error(`self-test: ${failed} failure(s).`); return 1 }
  console.log('self-test: green.')
  return 0
}

const mode = process.argv[2]
if (mode === 'self-test') process.exit(selfTest())

const input = readStdinJson()
const filePath = input?.tool_input?.file_path
if (!filePath) process.exit(0) // fail-open: nothing to judge

if (mode === 'pre-write') process.exit(preWrite(filePath))
if (mode === 'post-write') process.exit(postWrite(filePath))
process.exit(0)
