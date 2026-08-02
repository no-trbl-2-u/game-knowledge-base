#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { hashTree, packetHash, readJson, writeJson } from './intake-lib.mjs'
import { validateRunDirectory } from './validate-intake.mjs'

// fileURLToPath, not URL.pathname: the pathname form ('/C:/...') never
// resolves to a real directory on Windows.
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

function die(message) {
  console.error(`promote-intake: ${message}`)
  process.exit(1)
}

function run(command, args) {
  const result = spawnSync(command, args, { cwd: REPO, encoding: 'utf8', stdio: 'pipe' })
  if (result.status !== 0) throw new Error((result.stderr || result.stdout || `${command} failed`).trim())
  return result.stdout.trim()
}

const [action, runId, slug] = process.argv.slice(2)
if (!['hash', 'check', 'promote'].includes(action) || !runId || !slug || process.argv.length !== 5) {
  console.error('usage: node scripts/promote-intake.mjs hash|check|promote <run-id> <game-slug>')
  process.exit(2)
}
const runDir = path.join(REPO, 'intake', 'runs', runId)
const manifestFile = path.join(runDir, 'manifest.json')
const candidateDir = path.join(runDir, 'candidates', slug)
const canonical = path.join(candidateDir, 'canonical')
if (!fs.existsSync(manifestFile)) die(`missing ${path.relative(REPO, manifestFile)}`)
const manifest = readJson(manifestFile)
const candidate = (manifest.candidates ?? []).find(item => item.slug === slug)
if (!candidate) die(`${slug} is not declared by ${runId}`)
const hash = packetHash(candidateDir)
if (!hash) die(`${slug} has no complete evidence/canonical packet`)
if (action === 'hash') {
  console.log(hash)
  process.exit(0)
}
const findings = validateRunDirectory(runDir)
if (findings.length) die(`intake validation failed:\n  ${findings.join('\n  ')}`)
if (!['approved', 'promoted'].includes(candidate.status)) die(`${slug} status is ${candidate.status}; independent approval is required`)
if (action === 'check') {
  console.log(`promote-intake: ${runId}/${slug} approved and immutable (${hash})`)
  process.exit(0)
}
if (candidate.status === 'promoted') die(`${slug} is already marked promoted`)
const status = run('git', ['status', '--porcelain'])
if (status) die('worktree must be clean before deterministic promotion; commit the independent approval first')
const destination = path.join(REPO, 'KnowledgeBase', 'BoardGames', 'games', slug)
if (fs.existsSync(destination)) die(`canonical destination already exists: ${path.relative(REPO, destination)}`)
const originalManifest = fs.readFileSync(manifestFile, 'utf8')
try {
  fs.cpSync(canonical, destination, { recursive: true, errorOnExist: true })
  if (hashTree(canonical) !== hashTree(destination)) throw new Error('deterministic copy verification failed: destination bytes differ from approved canonical packet')
  candidate.status = 'promoted'
  candidate.promoted_at = new Date().toISOString()
  writeJson(manifestFile, manifest)
  run(process.execPath, ['scripts/generate-index.mjs'])
  const result = spawnSync(process.execPath, ['scripts/validate-okf.mjs'], { cwd: REPO, encoding: 'utf8' })
  if (result.status !== 0) throw new Error((result.stderr || result.stdout || 'canonical validator failed').trim())
  console.log(`promote-intake: promoted ${slug} from immutable packet ${hash}`)
  if (result.stdout.trim()) console.log(result.stdout.trim())
}
catch (err) {
  fs.rmSync(destination, { recursive: true, force: true })
  fs.writeFileSync(manifestFile, originalManifest)
  try { run(process.execPath, ['scripts/generate-index.mjs']) } catch { /* preserve primary failure */ }
  die(`promotion rolled back: ${err.message}`)
}
