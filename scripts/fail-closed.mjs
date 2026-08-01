#!/usr/bin/env node
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'

function usage(message) {
  if (message) console.error(`fail-closed: ${message}`)
  console.error('usage: node scripts/fail-closed.mjs --job JOB_ID [--job JOB_ID ...] -- COMMAND [ARG ...]')
  process.exit(2)
}

const args = process.argv.slice(2)
const jobs = []
let i = 0
while (args[i] === '--job') {
  if (!args[i + 1]) usage('--job requires an id')
  jobs.push(args[i + 1])
  i += 2
}
if (args[i] !== '--') usage('missing -- command separator')
const command = args[i + 1]
const commandArgs = args.slice(i + 2)
if (!jobs.length || !command) usage('at least one job id and a command are required')

const result = spawnSync(command, commandArgs, { stdio: 'inherit' })
if (result.status === 0) process.exit(0)

const stateDir = path.join(os.homedir(), '.hermes', 'state', 'game-kb-intake-failures')
fs.mkdirSync(stateDir, { recursive: true })
const stamp = new Date().toISOString().replaceAll(':', '-').replaceAll('.', '-')
const record = {
  failed_at: new Date().toISOString(),
  cwd: process.cwd(),
  command: [command, ...commandArgs],
  exit_status: result.status,
  signal: result.signal,
  affected_jobs: [...new Set(jobs)],
  retry_allowed: true,
}
const recordFile = path.join(stateDir, `${stamp}.json`)
fs.writeFileSync(recordFile, `${JSON.stringify(record, null, 2)}\n`)
console.error(`fail-closed: command failed; evidence written to ${recordFile}; future scheduled retries remain enabled`)
process.exit(result.status || 1)
