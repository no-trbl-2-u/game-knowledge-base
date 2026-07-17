#!/usr/bin/env node
// scripts/check-links.mjs — source-URL liveness sweep. Zero dependencies.
//
//   node scripts/check-links.mjs            # sweep every url: in the corpus
//   node scripts/check-links.mjs --json     # machine-readable report on stdout
//
// Collects every frontmatter `url:` under KnowledgeBase/, dedupes, and
// probes each (HEAD, falling back to GET). No AI, no tokens — this is the
// deterministic half of the QA tier; the monthly /audit pass consumes its
// findings and decides what to do about them (confidence downgrades,
// alternate sources, wayback snapshots).
//
// Classification:
//   dead    — network failure, or HTTP 404/410 (exit 1 when any exist)
//   suspect — 401/403/429/5xx/timeout (bot walls and flakiness; reported,
//             never fails the job on its own)
//
// Exit codes: 0 all reachable (suspects allowed); 1 dead links found.

import fs from 'node:fs'
import path from 'node:path'
import { logScan } from './telemetry-log.mjs'

const KB = 'KnowledgeBase'
const TIMEOUT_MS = 12_000
const CONCURRENCY = 8
const UA = 'somber-soft-kb-link-check/1.0 (corpus source liveness sweep)'

function* okfFiles(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) yield* okfFiles(p)
    else if (entry.name.endsWith('.okf.md')) yield p
  }
}

// url -> [files citing it]
const urls = new Map()
for (const file of okfFiles(KB)) {
  const text = fs.readFileSync(file, 'utf-8')
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!fm) continue
  for (const m of fm[1].matchAll(/^\s+url:\s*"?(https?:\/\/[^"\s]+)"?/gm)) {
    const u = m[1]
    if (!urls.has(u)) urls.set(u, [])
    urls.get(u).push(file.replaceAll('\\', '/'))
  }
}

async function probe(url) {
  for (const method of ['HEAD', 'GET']) {
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
    try {
      const res = await fetch(url, {
        method,
        redirect: 'follow',
        signal: ctrl.signal,
        headers: { 'User-Agent': UA, Accept: '*/*' },
      })
      clearTimeout(timer)
      if (res.ok) return { verdict: 'ok', status: res.status }
      if (method === 'HEAD' && (res.status === 405 || res.status === 501)) continue
      if (res.status === 404 || res.status === 410) return { verdict: 'dead', status: res.status }
      return { verdict: 'suspect', status: res.status }
    }
    catch (err) {
      clearTimeout(timer)
      if (err.name === 'AbortError') return { verdict: 'suspect', status: 'timeout' }
      if (method === 'GET') return { verdict: 'dead', status: err.cause?.code ?? err.message }
    }
  }
  return { verdict: 'suspect', status: 'unreachable-head' }
}

const entries = [...urls.entries()]
const results = []
let cursor = 0
async function worker() {
  while (cursor < entries.length) {
    const [url, files] = entries[cursor++]
    const r = await probe(url)
    results.push({ url, files, ...r })
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker))

const dead = results.filter((r) => r.verdict === 'dead')
const suspect = results.filter((r) => r.verdict === 'suspect')

if (process.argv.includes('--json')) {
  console.log(JSON.stringify({ checked: results.length, dead, suspect }, null, 2))
}
else {
  console.log(`check-links: ${results.length} unique url(s) probed — ${dead.length} dead, ${suspect.length} suspect`)
  for (const r of dead) {
    console.log(`  DEAD    ${r.url} (${r.status})`)
    for (const f of r.files.slice(0, 5)) console.log(`          cited by ${f}`)
    if (r.files.length > 5) console.log(`          ... and ${r.files.length - 5} more file(s)`)
  }
  for (const r of suspect) console.log(`  suspect ${r.url} (${r.status}) — ${r.files.length} citing file(s)`)
}

logScan({
  pass: 'check-links',
  scope: 'all frontmatter url: in KnowledgeBase/',
  scanned: `${results.length} unique urls`,
  findings: dead.length + suspect.length,
  complete: results.length === entries.length,
  note: `${dead.length} dead, ${suspect.length} suspect`,
})

process.exit(dead.length ? 1 : 0)
