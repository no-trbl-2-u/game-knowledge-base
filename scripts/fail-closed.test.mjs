import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const HERE = path.dirname(fileURLToPath(import.meta.url))

test('failed command pauses every named cron job and writes durable evidence', t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'fail-closed-'))
  t.after(() => fs.rmSync(root, { recursive: true, force: true }))
  const log = path.join(root, 'pauses.log')
  const fake = path.join(root, 'hermes')
  fs.writeFileSync(fake, `#!/bin/sh\nprintf '%s\\n' "$*" >> '${log}'\n`)
  fs.chmodSync(fake, 0o755)
  const result = spawnSync(process.execPath, [
    path.join(HERE, 'fail-closed.mjs'),
    '--pause-job', 'scout-job',
    '--pause-job', 'audit-job',
    '--', process.execPath, '-e', 'process.exit(7)',
  ], {
    env: { ...process.env, HOME: root, HERMES_BIN: fake },
    encoding: 'utf8',
  })
  assert.equal(result.status, 7)
  assert.deepEqual(fs.readFileSync(log, 'utf8').trim().split('\n'), [
    'cron pause scout-job',
    'cron pause audit-job',
  ])
  const state = path.join(root, '.hermes', 'state', 'game-kb-intake-failures')
  const records = fs.readdirSync(state)
  assert.equal(records.length, 1)
  const record = JSON.parse(fs.readFileSync(path.join(state, records[0]), 'utf8'))
  assert.equal(record.exit_status, 7)
  assert.deepEqual(record.pauses.map(item => item.paused), [true, true])
})
