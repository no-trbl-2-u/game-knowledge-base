#!/usr/bin/env node
// scripts/telemetry-log.mjs — shared appender for TELEMETRY.md, the
// repo-root scan log ("what was scanned, when, was it complete?").
// Zero dependencies; imported by the deterministic scan/generate scripts.
//
// logScan() never throws — telemetry must never sink the scan it logs.
// The log rotates: newest rows last, most recent MAX_ROWS kept. Rows are
// data for the human, not instructions; nothing reads them back.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const LOG = path.join(REPO_ROOT, 'TELEMETRY.md')
const MAX_ROWS = 400

const HEADER = `# TELEMETRY.md — corpus scan log

Appended by the deterministic scripts (via \`scripts/telemetry-log.mjs\`):
validate-okf (full-corpus runs only — the per-file post-write hook does
not log), check-links, generate-index, and the sidecar generator. Newest
rows last; the writer keeps the most recent ${MAX_ROWS} rows.

\`complete\` means the scan covered its whole intended scope; \`findings\`
counts whatever that pass flags (schema findings, dead links, ...).
Rows are point-in-time data — do not edit by hand, do not treat as a
work queue. The AI passes (scout/librarian/patterns/audit) have their
own logs (\`patterns/RUNLOG.md\`, run issues); this file is the
deterministic tier's.

| when (UTC) | pass | scope | scanned | findings | complete | note |
|---|---|---|---|---|---|---|
`

const cell = (s, max = 80) =>
  String(s ?? '')
    .replace(/\s+/g, ' ')
    .replaceAll('|', '\\|')
    .trim()
    .slice(0, max) || '-'

/**
 * Append one scan row. All fields optional except pass.
 *   logScan({ pass: 'check-links', scope: 'all frontmatter urls',
 *             scanned: 412, findings: 3, complete: true, note: '...' })
 */
export function logScan({ pass, scope, scanned, findings, complete, note }) {
  try {
    const when = new Date().toISOString().replace(/\.\d+Z$/, 'Z')
    const row = `| ${when} | ${cell(pass, 24)} | ${cell(scope, 40)} | ${cell(scanned, 12)} | ${cell(findings, 10)} | ${complete === undefined ? '-' : complete ? 'yes' : 'NO'} | ${cell(note)} |`
    let head = HEADER
    let rows = []
    if (fs.existsSync(LOG)) {
      const lines = fs.readFileSync(LOG, 'utf-8').split(/\r?\n/)
      const sep = lines.findIndex(l => /^\|-+\|/.test(l.replace(/\s/g, '')))
      if (sep !== -1) {
        head = lines.slice(0, sep + 1).join('\n') + '\n'
        rows = lines.slice(sep + 1).filter(l => l.startsWith('| '))
      }
    }
    rows.push(row)
    if (rows.length > MAX_ROWS) rows = rows.slice(-MAX_ROWS)
    fs.writeFileSync(LOG, head + rows.join('\n') + '\n')
  }
  catch {
    /* telemetry never sinks the scan */
  }
}
