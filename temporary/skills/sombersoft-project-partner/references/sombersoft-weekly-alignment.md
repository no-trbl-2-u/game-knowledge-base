# SomberSoft weekly alignment workflow

Use this when The Judge runs the weekly SomberSoft alignment cron or T asks for a zoomed-out weekly workflow/company alignment judgment.

## Purpose

Produce a durable strategic record, not a daily status recap. Judge the week’s workflow, mission alignment, kill-list hygiene, missing automation/specialists, and next named campaign.

## Inputs

1. Read `/root/Workspace/SOMBERSOFT_COMMAND_LEDGER.md` first if present.
2. Inspect the last 7 days of:
   - `/root/Workspace/reports/roundtable/*.md`
   - `/root/Workspace/reports/axiomancer-playthrough/*.md`
   - `/root/Workspace/reports/alignment/*.md` for prior weekly context
   - fallback legacy/current central lanes such as `/root/Workspace/SomberSoft/reports/alignment/*.md` when the canonical report lane is sparse or missing prior weekly context; label any report-root split as operational fog rather than pretending the evidence window is complete.
3. Fetch both Axiomancer repos before trusting local state:
   - `/root/Workspace/axiomancer-both/axiomancer-mechanics`
   - `/root/Workspace/axiomancer-both/axiomancer-mobile`
4. If a live checkout is clean but merely behind `origin/main`, fast-forward it during alignment so the next scheduled worker inherits current mainline truth. If it is dirty, do not clean destructively; use detached `origin/main` witness and report the hygiene blocker.
5. Record branch, HEAD, `origin/main`, ahead/behind, and whether the local checkout is branch-scoped or mainline truth.
5. Inspect recent `origin/main` commits, not only the current worktree branch.
6. If reports cite branch-only evidence, treat it as branch-scoped until mainline confirmation exists.
7. If `git fetch` advances `origin/main` but local `main` is behind, judge from `origin/main` and state plainly that local HEAD is stale; do not silently treat the local checkout as mainline truth.
8. Inspect repo-local Nexus queues (`plan/PHASE_CANDIDATES.md`, `plan/CRITIQUE.md`, `plan/AUDIT.md`, `NEEDS_ATTENTION.md`, and `plan/steps/01_build_plan.md`) for stale duplicates, false orders, and newly promoted T-directed phases before recommending the next campaign. A re-filed candidate that contradicts resolved critique history is workflow risk, not just repo trivia.
9. When the week includes an npm mechanics release or mobile package bump, verify release provenance explicitly: compare local mechanics `package.json`, registry `npm view axiomancer-mechanics version gitHead --silent`, fetched git graph/tags, and mobile `package.json`/installed package truth. If npm `gitHead` is missing from the local fetched graph or local package metadata lags the registry, classify it as release-provenance drift; do not guess which source is sovereign.
10. If T refueled or reordered the Nexus during the week, let that supersede older generic campaign labels. Example pattern: a repeated "late-game pressure" problem may be absorbed into a newer doctrine-central campaign such as status-effect combat, skill/resource cleanup, affix/equipment cleanup, or map-event source-of-truth. Name the absorption plainly instead of preserving stale campaign language.

## Judgment shape

The report should include:

- Week in judgment
- Workflow improvements
- Repeated failures
- Missing automation or specialist
- What should be killed, sharpened, or held
- Kill-list hygiene: keep / defer / absorb / test / kill
- Mission/company alignment
- Proposed next named campaign
- 1-3 concrete shippable artifacts
- Decisions needed from T, with only the highest-priority question in the final response

## Ledger updates

Patch `/root/Workspace/SOMBERSOFT_COMMAND_LEDGER.md` only for settled facts or clearly labeled proposals. Do not overwrite T’s direction. Also patch stale ledger statements that were true when written but became misleading during the week, especially Next Shippable Artifact status lines (for example, a visual gate that was green but is now red pending approval).

If the prompt names the legacy flat path `/root/Workspace/SOMBERSOFT_COMMAND_LEDGER.md` but the actual ledger is `/root/Workspace/SomberSoft/SOMBERSOFT_COMMAND_LEDGER.md`, read and report the actual ledger path; classify the prompt/path mismatch as operational fog rather than a missing-ledger failure.

If the SomberSoft doctrine repo has pre-existing untracked paths (for example `artifacts/`) or any other dirty state, do not patch the ledger during the weekly alignment. Write the full alignment report anyway, add a **Ledger patch status** section naming the dirty state, and record the exact proposed ledger updates for a later clean doctrine pass.

Good patches include:

- first existence of a new durable report lane
- provisional kill-list judgments
- proposed next campaign focus
- next shippable artifacts that emerged from the alignment
- factual corrections to stale evidence lines when the week changes the shape of a blocker, e.g. old copy-regression wording becoming seeded-state drift

If the ledger is patched from a clean doctrine `main`, run `git diff --check`, commit with a concise `ledger:` message, push `origin main`, and record the commit in the weekly report. If the doctrine repo is dirty or on an ambiguous branch, do not compound it; report the ambiguity and leave the patch for a clean doctrine pass.

Do not patch speculative doctrine as law.

## Pitfalls

- Do not pretend there is a full seven-day evidence base if reports only cover part of the week. Say the visible window plainly.
- Do not treat a local feature/oversight branch as company truth without fetching and comparing to `origin/main`.
- Do not let a clean-but-behind local `main` become a false witness. Record both local HEAD and `origin/main`; when they differ, say which one carries current truth.
- Do not let public artifact strategy outrun evidence quality. If playtest/branch truth is unstable, defer publishing.
- Do not let repo-local queue rot hide under velocity. Weekly alignment should name stale candidates, duplicate findings, and resolved bugs re-filed as new work; these are campaign-level process failures when `/march` might promote them.
- Do not turn specialist recruitment into flavor. Recommend a new Blood Meridian specialist only when a repeated pressure needs durable ownership.

## Useful campaign pattern

When branch drift is the repeated failure, propose a **mainline witness** campaign: fetch repos, run from detached `origin/main`, execute mechanics/mobile evidence gates, and write a durable report that labels branch scope before any design judgment.