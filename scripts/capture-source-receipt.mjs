#!/usr/bin/env node
import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { SOURCE_ROLES, writeJson } from './intake-lib.mjs'

function usage(message) {
  if (message) console.error(`capture-source-receipt: ${message}`)
  console.error('usage: node scripts/capture-source-receipt.mjs --url URL --id src-NNN --roles role[,role] --title TEXT --provenance official|secondary|community --locator TEXT --evidence TEXT --output FILE [--force]')
  process.exit(2)
}

const args = process.argv.slice(2)
const values = {}
let force = false
for (let i = 0; i < args.length; i += 1) {
  if (args[i] === '--force') { force = true; continue }
  if (!args[i].startsWith('--') || i + 1 >= args.length) usage(`invalid argument ${args[i]}`)
  values[args[i].slice(2)] = args[++i]
}
for (const key of ['url', 'id', 'roles', 'title', 'provenance', 'locator', 'evidence', 'output']) {
  if (!values[key]) usage(`--${key} is required`)
}
if (!/^src-[0-9]{3}$/.test(values.id)) usage('--id must match src-NNN')
const roles = values.roles.split(',').map(s => s.trim()).filter(Boolean)
if (!roles.length || roles.some(role => !SOURCE_ROLES.has(role))) usage(`--roles must use known roles: ${[...SOURCE_ROLES].join(', ')}`)
if (!['official', 'secondary', 'community'].includes(values.provenance)) usage('--provenance is invalid')
if (values.evidence.trim().length < 20) usage('--evidence must contain at least 20 characters')
let url
try { url = new URL(values.url) } catch { usage('--url must be absolute') }
if (!['http:', 'https:'].includes(url.protocol)) usage('--url must use HTTP(S)')
const output = path.resolve(values.output)
if (fs.existsSync(output) && !force) usage(`${output} already exists; use --force to replace it`)

const controller = new AbortController()
const timeout = setTimeout(() => controller.abort(), 30_000)
let response
try {
  response = await fetch(url, {
    redirect: 'follow',
    signal: controller.signal,
    headers: { 'user-agent': 'SomberSoft-KB-Evidence-Receipt/1.0' },
  })
}
catch (err) {
  clearTimeout(timeout)
  console.error(`capture-source-receipt: fetch failed: ${err.message}`)
  process.exit(1)
}
clearTimeout(timeout)
if (response.status < 200 || response.status >= 400) {
  console.error(`capture-source-receipt: HTTP ${response.status} ${response.statusText}`)
  process.exit(1)
}
const declaredLength = Number(response.headers.get('content-length') || 0)
if (declaredLength > 50 * 1024 * 1024) {
  console.error(`capture-source-receipt: source is ${declaredLength} bytes; 50 MiB limit exceeded`)
  process.exit(1)
}
const bytes = Buffer.from(await response.arrayBuffer())
if (bytes.length > 50 * 1024 * 1024) {
  console.error(`capture-source-receipt: source is ${bytes.length} bytes; 50 MiB limit exceeded`)
  process.exit(1)
}
const contentType = response.headers.get('content-type') || 'application/octet-stream'
if (/^(?:text\/|application\/(?:json|xml|xhtml\+xml))/i.test(contentType)) {
  const normalize = text => text.toLowerCase().replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  const sourceText = normalize(bytes.toString('utf8'))
  const evidenceText = normalize(values.evidence)
  if (evidenceText.length >= 20 && !sourceText.includes(evidenceText)) {
    console.error('capture-source-receipt: supplied evidence text was not found in the retrieved textual response')
    process.exit(1)
  }
}
const receipt = {
  id: values.id,
  title: values.title,
  roles,
  provenance: values.provenance,
  url: url.href,
  final_url: response.url,
  retrieved_at: new Date().toISOString(),
  http_status: response.status,
  content_type: contentType,
  byte_length: bytes.length,
  sha256: crypto.createHash('sha256').update(bytes).digest('hex'),
  locator: values.locator,
  evidence: values.evidence,
}
writeJson(output, receipt)
console.log(`capture-source-receipt: wrote ${output} (${bytes.length} bytes, sha256 ${receipt.sha256})`)
