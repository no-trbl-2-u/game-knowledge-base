#!/usr/bin/env node

import { spawnSync } from 'node:child_process'
import { pathToFileURL } from 'node:url'

const TOPIC_BRANCH = /^(audit|chore|docs|kb|librarian|patterns)\/[A-Za-z0-9][A-Za-z0-9._-]*(?:\/[A-Za-z0-9][A-Za-z0-9._-]*)*$/

export function isAllowedTopicBranch(branch) {
  return typeof branch === 'string' && TOPIC_BRANCH.test(branch) && !branch.includes(':')
}

function fail(message) {
  console.error(`push-topic-branch: ${message}`)
  process.exitCode = 1
}

function main() {
  const [branch, ...extra] = process.argv.slice(2)
  if (extra.length || !branch) return fail('usage: node scripts/push-topic-branch.mjs <topic-branch>')
  if (!isAllowedTopicBranch(branch)) {
    return fail(`refusing unsafe topic branch or refspec: ${branch}`)
  }

  const current = spawnSync('git', ['branch', '--show-current'], { encoding: 'utf8' })
  if (current.status !== 0) return fail((current.stderr || 'could not read current branch').trim())
  if (current.stdout.trim() !== branch) {
    return fail(`current branch is ${current.stdout.trim() || '(detached)'}, not ${branch}`)
  }

  const validRef = spawnSync('git', ['check-ref-format', '--branch', branch], { encoding: 'utf8' })
  if (validRef.status !== 0) return fail(`git rejected branch name: ${branch}`)

  const pushed = spawnSync('git', ['push', '-u', 'origin', branch], { stdio: 'inherit' })
  process.exitCode = pushed.status ?? 1
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main()