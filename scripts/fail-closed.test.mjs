import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const HERE = path.dirname(fileURLToPath(import.meta.url))

test('failed command stops the run without pausing future retries and writes durable evidence', t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'fail-closed-'))
  t.after(() => fs.rmSync(root, { recursive: true, force: true }))
  const log = path.join(root, 'pauses.log')
  // Windows cannot exec a shebang script; use a .cmd shim there (redirect
  // placed first so job names ending in digits cannot form fd-redirects).
  const isWindows = process.platform === 'win32'
  const fake = path.join(root, isWindows ? 'hermes.cmd' : 'hermes')
  fs.writeFileSync(fake, isWindows
    ? `@echo off\r\n>>"${log}" echo %*\r\n`
    : `#!/bin/sh\nprintf '%s\\n' "$*" >> '${log}'\n`)
  fs.chmodSync(fake, 0o755)
  const result = spawnSync(process.execPath, [
    path.join(HERE, 'fail-closed.mjs'),
    '--job', 'scout-job',
    '--job', 'audit-job',
    '--', process.execPath, '-e', 'process.exit(7)',
  ], {
    // os.homedir() reads USERPROFILE on Windows and HOME elsewhere.
    env: { ...process.env, HOME: root, USERPROFILE: root, HERMES_BIN: fake },
    encoding: 'utf8',
  })
  assert.equal(result.status, 7)
  assert.equal(fs.existsSync(log), false)
  const state = path.join(root, '.hermes', 'state', 'game-kb-intake-failures')
  const records = fs.readdirSync(state)
  assert.equal(records.length, 1)
  const record = JSON.parse(fs.readFileSync(path.join(state, records[0]), 'utf8'))
  assert.equal(record.exit_status, 7)
  assert.deepEqual(record.affected_jobs, ['scout-job', 'audit-job'])
  assert.equal(record.retry_allowed, true)
})
