// mcp-server/src/fixture-drift.test.mjs
//
// server.test.mjs exercises the handler against a miniature synthetic corpus,
// which is fast and stable but buys that speed with a risk: the fixture can
// drift from what build-assets.mjs actually emits, and then the unit suite
// passes while production breaks. This file is the bridge. It compares the
// fixture's *shape* against a real build.
//
// Skips when dist/ is absent, so `node --test src/*.test.mjs` still works
// without a 22 MB build. CI runs the build first, so there it always executes.

import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

import { INDEX, line } from './fixture.mjs'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.join(HERE, '..', 'dist')
const built = fs.existsSync(path.join(DIST, 'index.json'))
const skip = built ? false : 'no dist/ — run `npm run build` first'

test('the test fixture declares every index.json key the real build emits', { skip }, () => {
  const real = JSON.parse(fs.readFileSync(path.join(DIST, 'index.json'), 'utf-8'))

  // Keys the real build emits but the fixture omits are the dangerous
  // direction: server.js could start reading one and the unit tests would
  // never notice it was missing.
  const missing = Object.keys(real).filter((k) => !(k in INDEX))
  assert.deepEqual(missing, [], `fixture is missing real index.json keys: ${missing.join(', ')}`)
})

test('the fixture bundle layout matches what build-assets.mjs writes', { skip }, () => {
  // Build a fixture line and parse it with the same rule the Worker uses, so a
  // layout change on either side breaks this test rather than production.
  const sample = line('some text', 7, 12)
  assert.equal(sample, 'some text\t7\t12')
  assert.equal(sample.split('\t').length, 3)

  const real = fs.readFileSync(path.join(DIST, 'search', 'boardgames.txt'), 'utf-8')
  const first = real.slice(0, real.indexOf('\n'))
  const lastTab = first.lastIndexOf('\t')
  const prevTab = first.lastIndexOf('\t', lastTab - 1)

  assert.notEqual(prevTab, -1, 'real bundle line has fewer than two tabs')
  assert.ok(first.slice(0, prevTab).length, 'real bundle line has empty text')
  assert.ok(Number.isInteger(Number(first.slice(prevTab + 1, lastTab))), 'real doc id is not an integer')
  assert.ok(Number.isInteger(Number(first.slice(lastTab + 1))), 'real line number is not an integer')
})

test('the real build carries the identity /health reports', { skip }, () => {
  const real = JSON.parse(fs.readFileSync(path.join(DIST, 'index.json'), 'utf-8'))
  assert.ok('commit' in real, 'index.json has no commit field')
  assert.ok('built_at' in real, 'index.json has no built_at field')
  assert.match(real.built_at, /^\d{4}-\d{2}-\d{2}T/)
  assert.ok(real.doc_count > 0)
  // A local build resolves the SHA from git; CI supplies it by env var. Null is
  // tolerated (a tarball build has no git), a malformed value is not.
  if (real.commit !== null) assert.match(real.commit, /^[0-9a-f]{7,40}$/)
})

test('wrangler.jsonc still points at what the build produces', { skip }, () => {
  // Cheap structural check rather than `wrangler deploy --dry-run`, which would
  // need a dependency install in a workflow that must stay fast. It catches the
  // realistic mistakes: a renamed entry point, a moved asset directory, or a
  // binding renamed out from under server.js.
  const raw = fs.readFileSync(path.join(HERE, '..', 'wrangler.jsonc'), 'utf-8')
  const config = JSON.parse(raw.replace(/^\s*\/\/.*$/gm, ''))

  assert.ok(fs.existsSync(path.join(HERE, '..', config.main)), `main "${config.main}" does not exist`)
  assert.ok(fs.existsSync(path.join(HERE, '..', config.assets.directory)), 'assets.directory does not exist')
  assert.equal(config.assets.binding, 'ASSETS', 'server.js reads env.ASSETS')
  assert.equal(config.assets.run_worker_first, true, 'assets must not be served as plain static files')

  const serverSrc = fs.readFileSync(path.join(HERE, 'server.js'), 'utf-8')
  assert.match(serverSrc, /env\.ASSETS\.fetch/, 'server.js no longer uses the ASSETS binding')
})
