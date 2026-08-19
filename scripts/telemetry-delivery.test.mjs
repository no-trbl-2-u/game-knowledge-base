import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import test from 'node:test'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')

function run(cwd, command, args, options = {}) {
  const result = spawnSync(command, args, { cwd, encoding: 'utf8', ...options })
  assert.equal(result.status, 0, `${command} ${args.join(' ')}\n${result.stdout}${result.stderr}`)
  return result.stdout.trim()
}

function initRepo() {
  const repo = fs.mkdtempSync(path.join(os.tmpdir(), 'kb-telemetry-delivery-'))
  run(repo, 'git', ['init', '-b', 'main'])
  run(repo, 'git', ['config', 'user.name', 'Telemetry Test'])
  run(repo, 'git', ['config', 'user.email', 'telemetry@example.invalid'])
  return repo
}

function row(when, pass) {
  return `| ${when} | ${pass} | corpus | 1 | 0 | yes | test |\n`
}

const header = `# TELEMETRY.md — test\n\n| when (UTC) | pass | scope | scanned | findings | complete | note |\n|---|---|---|---|---|---|---|\n`

test('TELEMETRY.md uses the union merge driver and preserves parallel rows', () => {
  assert.equal(run(ROOT, 'git', ['check-attr', 'merge', '--', 'TELEMETRY.md']), 'TELEMETRY.md: merge: union')
  const repo = initRepo()
  try {
    fs.copyFileSync(path.join(ROOT, '.gitattributes'), path.join(repo, '.gitattributes'))
    fs.writeFileSync(path.join(repo, 'TELEMETRY.md'), header + row('2026-01-01T00:00:00Z', 'base'))
    run(repo, 'git', ['add', '.gitattributes', 'TELEMETRY.md'])
    run(repo, 'git', ['commit', '-m', 'base'])

    run(repo, 'git', ['checkout', '-b', 'feature'])
    fs.appendFileSync(path.join(repo, 'TELEMETRY.md'), row('2026-01-01T00:01:00Z', 'feature'))
    run(repo, 'git', ['commit', '-am', 'feature row'])

    run(repo, 'git', ['checkout', 'main'])
    fs.appendFileSync(path.join(repo, 'TELEMETRY.md'), row('2026-01-01T00:02:00Z', 'main'))
    run(repo, 'git', ['commit', '-am', 'main row'])
    run(repo, 'git', ['merge', '--no-ff', 'feature', '-m', 'merge feature'])

    const merged = fs.readFileSync(path.join(repo, 'TELEMETRY.md'), 'utf8')
    assert.match(merged, /feature \|/)
    assert.match(merged, /main \|/)
    assert.doesNotMatch(merged, /<<<<<<<|=======|>>>>>>>/)
  }
  finally {
    fs.rmSync(repo, { recursive: true, force: true })
  }
})

test('hooks stage telemetry with a commit and reject dirty telemetry before push', () => {
  const repo = initRepo()
  try {
    fs.mkdirSync(path.join(repo, '.githooks'))
    for (const name of ['pre-commit', 'pre-push']) {
      const target = path.join(repo, '.githooks', name)
      fs.copyFileSync(path.join(ROOT, '.githooks', name), target)
      fs.chmodSync(target, 0o755)
    }
    run(repo, 'git', ['config', 'core.hooksPath', '.githooks'])
    fs.writeFileSync(path.join(repo, 'TELEMETRY.md'), header + row('2026-01-01T00:00:00Z', 'base'))
    fs.writeFileSync(path.join(repo, 'README.md'), 'base\n')
    run(repo, 'git', ['add', '.githooks', 'README.md', 'TELEMETRY.md'])
    run(repo, 'git', ['commit', '-m', 'base'])

    fs.appendFileSync(path.join(repo, 'README.md'), 'change\n')
    fs.appendFileSync(path.join(repo, 'TELEMETRY.md'), row('2026-01-01T00:01:00Z', 'commit'))
    run(repo, 'git', ['add', 'README.md'])
    run(repo, 'git', ['commit', '-m', 'coupled delivery'])
    assert.deepEqual(run(repo, 'git', ['show', '--pretty=', '--name-only', 'HEAD']).split('\n').sort(), ['README.md', 'TELEMETRY.md'])
    assert.equal(run(repo, 'git', ['status', '--porcelain', '--', 'TELEMETRY.md']), '')

    fs.appendFileSync(path.join(repo, 'TELEMETRY.md'), row('2026-01-01T00:02:00Z', 'stranded'))
    const rejected = spawnSync(path.join(repo, '.githooks', 'pre-push'), ['origin'], { cwd: repo, encoding: 'utf8' })
    assert.equal(rejected.status, 1)
    assert.match(rejected.stderr, /TELEMETRY\.md has uncommitted changes/)
  }
  finally {
    fs.rmSync(repo, { recursive: true, force: true })
  }
})
