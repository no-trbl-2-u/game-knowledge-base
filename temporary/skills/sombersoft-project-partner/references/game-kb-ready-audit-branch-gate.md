# Game-KB ready-for-audit branch and CI gate

Use this reference for the isolated `game-knowledge-base` Bathcat/Mennonite intake workflow. It supplements the repo's live `CLAUDE.md`, `KB_PROCEDURE.md`, `intake/README.md`, and `OKF_SPEC.md`; those repository contracts outrank this summary.

## Safe branch sequence

1. Configure the repo hooks path and inspect `git status --short --branch` before edits.
2. Fetch `origin/main`, switch to local `main`, and fast-forward only. Verify local `main == origin/main`.
3. Select exactly one candidate and create the dedicated topic branch **before the first commit**.
4. Run the packet validators/generators, review the diff, and commit the complete immutable `ready_for_audit` packet.
5. Push through the repository's fail-closed wrapper, then verify local HEAD, tracking HEAD, and remote branch HEAD are identical.

If work accidentally committed to `main` while the worktree is clean, salvage it without rewriting the preserved packet:

```bash
git switch -c <topic-branch>     # preserve the accidental commit
git switch main
git reset --hard origin/main     # only after confirming no uncommitted work
git switch <topic-branch>
git fetch origin main
git rebase origin/main
git rev-parse HEAD
```

The topic branch, not local `main`, is the delivery branch. Never reset away uncommitted work, and never use a second candidate as a replacement in the same unattended run.

## Staged-intake CI interpretation

The writer's head is deliberately an intermediate state. `ready_for_audit` means:

- the packet is frozen, source-backed, and locally validated;
- ordinary `validate`/schema/provenance/visual checks should pass;
- the packet has not been approved or promoted;
- the independent Mennonite context owns approval, hash binding, deterministic promotion, and eventual merge.

A repository completion job may run `validate-intake --synthetic-merge --completion-only` and reject the writer's head with wording equivalent to: `intake PR must end promoted in the same PR; ready_for_audit is an intermediate commit state`. In this workflow that is an expected state-machine gate, not evidence that the packet should be mutated.

After PR creation:

1. Inspect mergeability, head/base SHAs, and all check states.
2. If ordinary validation passes and only the promotion/completion gate rejects `ready_for_audit`, retrieve the job log once and record the exact reason.
3. Do not add `approval.json`, promote canonical `games/`, bypass the gate, approve, merge, or repeatedly rerun CI.
4. Report the PR as open and pre-approval, hand off the exact head SHA to Mennonite, and stop.

No canonical shipment has occurred until the independent audit/promotion boundary is completed. A blocked merge state at this point is normal; the evidence is the passing validation check plus the explicit intermediate-state log.
