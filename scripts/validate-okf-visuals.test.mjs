import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

// fileURLToPath, not URL.pathname: the pathname form ('/C:/...') never
// resolves to a real directory on Windows.
const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const validator = path.join(repo, 'scripts', 'validate-okf.mjs')
const games = path.join(repo, 'KnowledgeBase', 'BoardGames', 'games')

function run(file) {
  return spawnSync(process.execPath, [validator, file], { cwd: repo, encoding: 'utf8' })
}

function copyPacket(slug) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'okf-visual-test-'))
  const target = path.join(root, 'games', slug, 'visuals')
  fs.cpSync(path.join(games, slug, 'visuals'), target, { recursive: true })
  return { root, packet: path.join(target, 'packet.okf.md') }
}

test('all committed visual packets pass focused validation', () => {
  const slugs = fs.readdirSync(games, { withFileTypes: true }).filter(e => e.isDirectory()).map(e => e.name)
  assert.ok(slugs.length > 0)
  for (const slug of slugs) {
    const packet = path.join(games, slug, 'visuals', 'packet.okf.md')
    const result = run(packet)
    assert.equal(result.status, 0, `${slug}: ${result.stderr || result.stdout}`)
  }
})

test('tampered visual hash is rejected', t => {
  const { root, packet } = copyPacket('mage-knight')
  t.after(() => fs.rmSync(root, { recursive: true, force: true }))
  const text = fs.readFileSync(packet, 'utf8')
  fs.writeFileSync(packet, text.replace(/sha256: "[0-9a-f]{64}"/, `sha256: "${'0'.repeat(64)}"`))
  const result = run(packet)
  assert.notEqual(result.status, 0)
  assert.match(result.stderr, /sha256 does not match/)
})

test('visual path traversal is rejected', t => {
  const { root, packet } = copyPacket('mage-knight')
  t.after(() => fs.rmSync(root, { recursive: true, force: true }))
  const text = fs.readFileSync(packet, 'utf8')
  fs.writeFileSync(packet, text.replace('visuals/references/01-components.webp', '../escape.webp'))
  const result = run(packet)
  assert.notEqual(result.status, 0)
  assert.match(result.stderr, /game-relative POSIX \.webp path under visuals/)
})

// Windows denies symlink creation without Developer Mode; probe once and
// skip there rather than fail — Linux CI always exercises this gate.
const canSymlink = (() => {
  const probeDir = fs.mkdtempSync(path.join(os.tmpdir(), 'symlink-probe-'))
  try {
    fs.symlinkSync(path.join(probeDir, 'target'), path.join(probeDir, 'link'), 'dir')
    return true
  } catch {
    return false
  } finally {
    fs.rmSync(probeDir, { recursive: true, force: true })
  }
})()

test('symlinked parent directory cannot escape the game', { skip: !canSymlink && 'symlink creation unavailable on this platform' }, t => {
  const { root, packet } = copyPacket('mage-knight')
  t.after(() => fs.rmSync(root, { recursive: true, force: true }))
  const references = path.join(path.dirname(packet), 'references')
  const outside = path.join(root, 'outside-references')
  fs.renameSync(references, outside)
  fs.symlinkSync(outside, references, 'dir')
  const result = run(packet)
  assert.notEqual(result.status, 0)
  assert.match(result.stderr, /real path escapes the game directory/)
})

test('empty required visual metadata is rejected', t => {
  const { root, packet } = copyPacket('mage-knight')
  t.after(() => fs.rmSync(root, { recursive: true, force: true }))
  const text = fs.readFileSync(packet, 'utf8')
  fs.writeFileSync(packet, text.replace(/creator: "[^"]+"/, 'creator: ""'))
  const result = run(packet)
  assert.notEqual(result.status, 0)
  assert.match(result.stderr, /has empty creator/)
})
