# Mennonite Game-KB Procedure

This file governs every Mennonite assignment involving independent audit, verdict, approval, deterministic promotion, merge disposition, and post-merge verification for `/root/Workspace/SomberSoft/game-knowledge-base`.

## Authority and boundary

Read, in order:

1. `/root/.hermes/shared/SOMBERSOFT_HARNESS.md`
2. Repository `AGENTS.md` or `CLAUDE.md`
3. `KnowledgeBase/BoardGames/OKF_SPEC.md`
4. `intake/README.md`
5. The live `research-discovery-monitoring` and `github-workflows` skills

T has final authority. Repo-local law controls repository procedure. Escalate conflicts; do not improvise around them.

The Mennonite owns independent audit, verdict, hash-bound approval, deterministic promotion, merge disposition, and post-merge verification. The Mennonite must not author or silently repair Bathcat's semantic research.

## 1. Preflight and immutable handoff

1. Work in the isolated Mennonite checkout: `/root/Workspace/SomberSoft/game-knowledge-base-mennonite`.
2. Set `core.hooksPath=.githooks`.
3. Require a clean worktree.
4. Switch to `main`, fetch, and fast-forward only to `origin/main`; stop on divergence.
5. Verify GitHub authentication and read live branch protection.
6. Inspect the live PR before local checkout.
7. Require the handoff to state the exact PR URL/number, base SHA, full Bathcat head SHA, run ID, slug, packet hash, and expected CI state.
8. Fetch the PR branch and verify local HEAD, tracking ref, remote ref, and live PR head all equal the handed-off SHA. Abort without mutation on any mismatch.
9. Never hard-code current corpus totals or tag-distribution counts in durable prose. Query the generated index when a current count is needed and timestamp the observation in transient reporting.
10. Never resume or create a cron job without T's explicit instruction. A paused scheduler does not prevent an explicitly assigned manual audit.

## 2. Independent source audit

Do not trust Bathcat's report where the original source remains accessible.

1. Recompute the packet hash:

```bash
node scripts/promote-intake.mjs hash <run-id> <slug>
```

2. Reopen and independently inspect every governing source and every source used for consequential claims.
3. Re-fetch or otherwise verify source receipts and SHA-256 values when possible.
4. Confirm exact physical edition, scope, released status, and cohort eligibility.
5. Reconstruct the bounded governing-document inventory: exact-edition official core rules plus applicable public FAQ/errata authorities required by published claims.
6. Verify complete coverage of that inventory. There is no arbitrary factual-percentage quota; every published claim must instead have valid Source/Evidence/Confidence support.
7. Verify official rules are outside BGG, independent reception is outside BGG and outside the official-rules organization/domain, and the packet spans at least two distinct non-BGG organizational domains.
8. Verify rating/rank/weight evidence whenever such a claim is published.
9. Inspect every staged OKF file against the retrieved evidence. Check rules, reception, better-if inferences, confidence, edition leakage, unknowns, and bounded FAQ/errata language.
10. Open the contact sheet and source images. Verify visual meaning, hashes, provenance, rights holder, license/usage basis, attribution, reduction, and non-substitutive editorial use.
11. Verify no placeholders, model-filled prose, semantic generator output, duplicate long prose/assets, symlinks, unsupported claims, or canonical destination writes exist.
12. Inspect the complete Git diff, commit topology, required CI logs, and clean state.

## 3. Verdict law

Begin the result with exactly one verdict: `GO`, `REVISE`, `HOLD`, or `ESCALATE`.

### REVISE

Use `REVISE` for any Bathcat-repairable defect. State exact file/line/source findings. Do not create `approval.json`, `rejection.json`, a repair commit, or a duplicate PR. Return the same PR to a fresh Bathcat context. A fresh Mennonite must audit the revised exact head.

### HOLD

Use `HOLD` only for an external blocker or a T-level denominator/authority decision. Separate repairable defects from external blockers first; repairable defects are `REVISE`, not HOLD. Do not merge.

### ESCALATE

Use `ESCALATE` for conflicting repository law, missing authority that cannot be resolved, destructive/costly/public/production implications, or a decision outside Mennonite jurisdiction.

### GO

Use `GO` only when every source, packet, visual, history, and CI requirement is satisfied at the exact audited head.

## 4. Approval commit

On genuine `GO` for new-game intake:

1. Reconfirm the exact Bathcat parent SHA and packet hash immediately before writing.
2. Create `approval.json` with:
   - schema version;
   - decision `approved`;
   - auditor name `The Mennonite`;
   - role `Requirements and Risk Examiner`;
   - review timestamp;
   - exact packet SHA-256;
   - reviewed source IDs;
   - all required audit checks;
   - concrete notes and limitations.
3. Change only that candidate's manifest status from `ready_for_audit` to `approved`.
4. Commit approval separately. The commit may not change packet bytes or semantic content.
5. Run the ordinary regression and diff-aware gates and push through the mandatory hook and `scripts/fail-closed.mjs`.
6. Verify the approval-only head is independently deliverable and that local, tracking, remote, and live PR SHAs match.

Approval is immutable. If packet bytes change, approval is invalid and the process returns to fresh Bathcat before approval.

## 5. Deterministic promotion commit

With the approval commit as the current parent and a clean worktree:

```bash
node scripts/promote-intake.mjs check <run-id> <slug>
node scripts/promote-intake.mjs promote <run-id> <slug>
```

The script alone may:

- copy staged bytes to `KnowledgeBase/BoardGames/games/<slug>/`;
- change `approved` to `promoted`;
- add `promoted_at`;
- regenerate the board-game index;
- write required deterministic telemetry.

The script authors no facts. Inspect its diff and verify staged/canonical byte equality.

Run, in order:

```bash
node --test scripts/intake-lib.test.mjs scripts/validate-intake-package.test.mjs scripts/fail-closed.test.mjs scripts/validate-okf-provenance.test.mjs
node scripts/validate-intake.mjs --base origin/main
node scripts/generate-index.mjs
node scripts/validate-okf.mjs
node --test scripts/validate-okf-visuals.test.mjs
git diff --check
```

Commit promotion separately. Only the canonical destination tree, run manifest transition, generated index, and required telemetry may change. Push through the ordinary hooks and `scripts/fail-closed.mjs`.

## 6. Final PR verification and merge

1. Verify the PR contains the ordered boundaries: frozen Bathcat packet, approval-only commit, deterministic promotion commit.
2. Verify local HEAD, tracking ref, remote ref, and live PR head are identical.
3. Require the exact final PR head and synthetic merge `validate` check to be green.
4. Recompute packet hash and staged/canonical Git tree IDs. They must match the approved hash and each other.
5. Confirm manifest status `promoted`, generated index membership, clean worktree, clean merge state, and no unresolved conversations.
6. Bind final `GO` to the full final SHA and CI URL.
7. Merge using GitHub's merge-commit method only. Never squash or rebase a new-game intake PR.
8. Verify the merge commit has exactly two parents in order: protected-base head first, promoted branch head second.

The Mennonite alone may merge a Bathcat-authored new-game intake or existing-game maintenance PR after `GO`.

## 7. Post-merge verification

After merge, use read-only checks only:

1. Confirm PR state `MERGED` and record merge SHA and parent SHAs.
2. Confirm `origin/main` equals the merge SHA.
3. Wait for protected-main CI on that exact SHA and require success.
4. Confirm canonical tree exists, staged/canonical tree IDs match, packet hash remains approved, manifest remains `promoted`, and index contains the slug.
5. Synchronize the Mennonite checkout to clean `main`.
6. If post-merge CI fails, do not rewrite history. Return exact logs and open or request a separate repair PR.

Do not rerun telemetry-writing validation merely to prove an already delivered commit.

## 8. Existing-game maintenance

For existing canonical records, audit the exact maintenance PR head independently. Verify source support, bounded authority, changed files, CI, and rollback. Return `REVISE`, `HOLD`, or `ESCALATE` without semantic repairs. On `GO`, merge by merge commit and perform exact-SHA post-merge verification. This lane may repair an existing incomplete record but may never introduce a new partial game.

## Stop conditions

Stop without unauthorized mutation when:

- the live head differs from the handed-off SHA;
- source hashes, edition identity, governing inventory, claims, visuals, or packet hash do not verify;
- the approval boundary is contaminated by packet changes;
- promotion is nondeterministic or staged/canonical trees differ;
- CI, branch protection, merge topology, or Git state is not exact;
- the task asks Mennonite to author Bathcat's research;
- a destructive, costly, secret-bearing, public, production, or major-direction action lacks T's authority.
