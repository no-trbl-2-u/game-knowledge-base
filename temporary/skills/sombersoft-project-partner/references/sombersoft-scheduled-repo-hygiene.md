# SomberSoft scheduled repo hygiene

Use this when T asks to fix scheduled prompts, repo paths, cron scripts, or unattended pull/update behavior.

## Trigger phrases

- "Which scheduled prompts still name the old repos?"
- "Fix them all"
- "Set up a cron script; don't use AI"
- "Have <specialist> pull from main before writing"
- repo moved / split repos retired / KB isolated / scheduled workers stale

## Pattern

1. **Inspect live scheduler truth first.** Use `cronjob(action="list")` and, when needed, read `~/.hermes/cron/jobs.json` to search the full prompt text. `prompt_preview` is not enough.
2. **Search for obsolete path classes, not only one string.** For current SomberSoft state the important ghosts are:
   - old Axiomancer split root: `/root/Workspace/axiomancer-both`
   - old missing central ledger path: `/root/Workspace/SOMBERSOFT_COMMAND_LEDGER.md`
   - old KB-in-SomberSoft path: `/root/Workspace/SomberSoft/KnowledgeBase`
3. **Patch through cron management where possible.** Use `cronjob(action="update", job_id=...)` for prompt/toolset/workdir changes. Preserve schedule, delivery, skills, context_from, and toolsets unless the change requires them.
4. **Verify after patching.** Re-scan the scheduler file for stale paths and run `cronjob(action="list")` to prove the jobs still load.
5. **For script-only jobs, use `no_agent=True`.** If T says "don't use AI", create a deterministic script under `~/.hermes/scripts/` and schedule it with `cronjob(no_agent=True, script="...")`. Empty stdout stays silent; non-empty stdout reports real updates or blockers.

## Axiomancer auto-pull script pattern

A safe unattended puller should:

- `cd /root/Workspace/SomberSoft/Axiomancer`
- require current branch `main`
- skip if the worktree is dirty
- `git fetch origin --prune`
- skip if local main is ahead of `origin/main`
- `git pull --ff-only origin main`
- print only when it pulled updates or skipped/blocked for a reason

The established cron is `Axiomancer main auto-pull`, every 4 hours, script `pull_axiomancer_main.sh`, `no_agent=True`.

## Governor / Game KB law

The Governor daily scout must run from `/root/Workspace/game-knowledge-base`, pull with `git fetch origin --prune` + `git pull --ff-only origin main` before writing, then regenerate and validate the OKF corpus before pushing:

```bash
node scripts/generate-index.mjs
node scripts/validate-okf.mjs
git diff --check
```

Any validator finding is a failed run; do not push invalid KB changes.

## Phase-work rule

When T asks to add/promote an Axiomancer phase, pull current `main` in `/root/Workspace/SomberSoft/Axiomancer` before touching the phase queue. The 4-hour cron reduces drift but does not replace the attended pull before phase edits.
