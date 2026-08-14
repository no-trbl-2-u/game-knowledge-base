# Axiomancer repo hygiene after autonomous work

Use this when T asks why recent work is missing, whether `/march` or autonomous agents actually committed anything, or when local Axiomancer checkouts appear stale after scheduled/agentic work.

## Pattern

Axiomancer work may land on `origin/main`, feature branches, stale local branches, or open PRs while the visible local checkout remains elsewhere. Do not infer absence of work from the current working branch alone.

## Minimum inspection sequence

For both `~/Workspace/axiomancer-both/axiomancer-mechanics` and `~/Workspace/axiomancer-both/axiomancer-mobile`:

1. Fetch first.
2. Record current branch and cleanliness.
3. Compare local branch, local `main`, and `origin/main`.
4. Inspect recent commits on all branches, especially by phase number, `/march`, `oversight`, `playtest`, `feat`, and `plan` prefixes.
5. Check open PRs and their mergeability/conflict state before recommending deletion, reset, or branch retirement.
6. Check scheduled jobs only after git evidence, and distinguish queued/scheduled intent from completed repo commits.

## Interpretation rules

- A stale current branch can make fresh work look absent. Verify `origin/main` before declaring a gap.
- An open conflicting PR may be historical rather than current truth if main has already advanced past its intent.
- Branch-only playtest docs or findings should be salvaged deliberately before resetting or retiring the branch.
- Do not promise a repo reset/branch deletion without preserving unique commits and asking if the action is destructive.
- Report the terrain plainly: current branch, latest local commit, latest `origin/main` commit, uncommitted work, open PRs, and what should be salvaged or retired.

## Salvaging stale autonomous-worker changes

When an autonomous worker leaves useful code on a stale branch or dirty worktree, treat it as salvage, not continuation:

1. Stop or poll any still-running worker process so it cannot keep mutating the checkout.
2. Preserve evidence before cleanup: save `git diff` / relevant patches under `/tmp/axiomancer-salvage/` with a timestamp or stash the dirty state with a clear message.
3. Fetch, return local `main` to current `origin/main`, and create a fresh salvage branch from that clean head.
4. Apply only the useful hunks or commits. Do not inherit the stale branch wholesale unless it is already based correctly and verified.
5. Run the most specific existing tests that cover the touched behavior before broad verify. If a salvaged hunk breaks an existing test, revert that hunk and keep the smaller correct change.
6. Only then run the repo verify gate, commit, push, and open/inspect the PR.
7. Final report should name what was preserved, what was discarded, exact verification commands/results, branch, commit, PR/check state, and whether any worker process remains.

This pattern is especially important for hazard/balance work: stale threshold tuning can look plausible while breaking a route-specific engine expectation. Existing CLI/e2e tests are the court; estimates are witnesses.

## Good final shape

- Mechanics: current branch, latest local branch commit, latest `origin/main` line, open PR state, verdict.
- Mobile: current branch, latest local branch commit, latest `origin/main` line, open PR/branch-only work state, verdict.
- Explanation: why T could not see the fresh work.
- Next action: repo hygiene pass with salvage-before-reset steps.
