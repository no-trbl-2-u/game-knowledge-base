# PR conflict resolution when the PR branch is declared source of truth

Use this when an existing PR is conflicting, but the user explicitly says the PR branch is the new source of truth for a domain (docs, specs, resource model, workflow files, etc.).

## Pattern

1. **Authenticate and inspect authority first**
   - `gh auth status`
   - `gh repo view OWNER/REPO --json viewerPermission --jq .viewerPermission`
   - `gh pr view N --json number,url,state,mergeable,baseRefName,headRefName,headRepository,maintainerCanModify,isCrossRepository,title`

2. **Fetch both truths before touching files**
   - `git fetch origin main <head-branch>`
   - Check out the PR head branch.
   - Merge `origin/main` into the PR branch locally to reproduce GitHub conflicts.

3. **Interrogate conflict stages, do not guess**
   - `git diff --name-only --diff-filter=U`
   - For each conflicted file inspect:
     - `git show :1:path` — merge base
     - `git show :2:path` — PR/head/ours
     - `git show :3:path` — base/main/theirs
   - Count lines or preview sections from each stage when the file is large.

4. **Apply the source-of-truth rule by file role**
   - If the user declares the PR branch source of truth for a domain, preserve the PR branch version of the canonical domain document.
   - Still take `origin/main` for files whose mainline implementation/history is more current (often status/spec index/checklist files).
   - For modify/delete conflicts, keep the PR file only when it is referenced as domain history/source material; otherwise prefer the new mainline organization.
   - Make small wording updates when preserving PR docs so stale phrases like “pending Spec NN” do not contradict already-landed mainline implementation.

5. **Resolve and verify**
   - Write the chosen final files, `git add` them, then run:
     - `git diff --check`
     - `git diff --name-only --diff-filter=U`
     - `grep -RIn '<<<<<<<\|=======\|>>>>>>>' <resolved files> || true`
   - Run the repo’s full local verification command before pushing.

6. **If verification exposes a flaky nondeterministic test introduced by the merge**
   - Fix the test deterministically, not by weakening assertions.
   - For random combat/effect tests, seed the project RNG in `beforeEach` so full-suite order cannot cause fumbles/crits to leak into unrelated expectations.
   - Re-run the targeted test and then the full verification gate.

7. **Commit, re-fetch, push, and watch GitHub**
   - Commit the merge/conflict resolution.
   - Re-fetch `origin/main` and ensure `git merge-base HEAD origin/main` equals `origin/main`; if main advanced, merge again and re-verify.
   - Push the PR branch.
   - Verify `gh pr view` reports `MERGEABLE` and watch `gh pr checks N --watch --interval 5` until checks pass or fail.

## Pitfalls

- Do not blindly choose all `--ours` or all `--theirs`. “PR is source of truth” usually applies to a domain document, not every adjacent status file.
- Do not call the PR fixed when GitHub still says `UNKNOWN`; wait or poll until mergeability resolves.
- Do not ignore flaky local verification failures just because the conflict was “docs only”; a merge can expose order-dependent tests.
