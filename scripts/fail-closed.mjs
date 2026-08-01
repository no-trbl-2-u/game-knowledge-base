#!/usr/bin/env node
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'

function usage(message) {
  if (message) console.error(`fail-closed: ${message}`)
  console.error('usage: node scripts/fail-closed.mjs --pause-job JOB_ID [--pause-job JOB_ID ...] -- COMMAND [ARG ...]')
  process.exit(2)
}

const args = process.argv.slice(2)
const jobs = []
let i = 0
while (args[i] === '--pause-job') {
  if (!args[i + 1]) usage('--pause-job requires an id')
  jobs.push(args[i + 1])
  i += 2
}
if (args[i] !== '--') usage('missing -- command separator')
const command = args[i + 1]
const commandArgs = args.slice(i + 2)
if (!jobs.length || !command) usage('at least one job id and a command are required')

const result = spawnSync(command, commandArgs, { stdio: 'inherit' })
if (result.status === 0) process.exit(0)

const hermes = process.env.HERMES_BIN || 'hermes'
const pauses = []
for (const job of [...new Set(jobs)]) {
  // shell on Windows only: Node cannot spawn .cmd/.bat shims directly.
  const paused = spawnSync(hermes, ['cron', 'pause', job], { encoding: 'utf8', shell: process.platform === 'win32' })
  pauses.push({
    job_id: job,
    paused: paused.status === 0,
    result: (paused.stdout || paused.stderr || '').trim(),
  })
}
const stateDir = path.join(os.homedir(), '.hermes', 'state', 'game-kb-intake-failures')
fs.mkdirSync(stateDir, { recursive: true })
const stamp = new Date().toISOString().replaceAll(':', '-').replaceAll('.', '-')
const record = {
  failed_at: new Date().toISOString(),
  cwd: process.cwd(),
  command: [command, ...commandArgs],
  exit_status: result.status,
  signal: result.signal,
  pauses,
}
const recordFile = path.join(stateDir, `${stamp}.json`)
fs.writeFileSync(recordFile, `${JSON.stringify(record, null, 2)}\n`)
console.error(`fail-closed: command failed; pause record written to ${recordFile}`)
for (const pause of pauses) console.error(`fail-closed: ${pause.paused ? 'paused' : 'FAILED TO PAUSE'} ${pause.job_id}${pause.result ? ` — ${pause.result}` : ''}`)
process.exit(result.status || 1)
