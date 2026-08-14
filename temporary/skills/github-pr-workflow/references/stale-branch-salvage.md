# Stale branch salvage: carry one useful commit to current main

Use this when useful work landed on the wrong/stale branch and the user wants the work on `main` without disturbing the original branch.

## Pattern

1. Fetch and inspect divergence.

```bash
git fetch origin --prune
git status --short --branch
git log --oneline --decorate --left-right --cherry-pick origin/main...origin/<source-branch>
git diff --name-status origin/main...origin/<source-branch>
```

2. Create a clean worktree from current main.

```bash
rm -rf /tmp/<repo>-salvage
git worktree add -b <new-topic-branch> /tmp/<repo>-salvage origin/main
```

3. Cherry-pick the useful commit(s) only.

```bash
git -C /tmp/<repo>-salvage cherry-pick <sha>
```

4. If conflicts are mostly planning/docs drift, prefer current mainline history and carry only the new facts from the source branch. Do not rewrite already-shipped phase history with stale branch text.

5. Verify before PR.

```bash
npm run typecheck
npm test -- --runInBand
npm run lint
npm run deploy:check
```

Adapt commands to the repo. If `node_modules` is absent in the worktree but exists in the primary checkout, a temporary symlink can be used for verification, then removed before commit/push.

6. Push, open PR, inspect mergeability, watch CI, then merge only after checks pass.

```bash
git push -u origin HEAD
gh pr create --base main --head <new-topic-branch> --title "..." --body "..."
gh pr view --json number,url,mergeable,statusCheckRollup
gh pr checks <number> --watch --interval 10
gh pr merge <number> --squash --delete-branch
```

## Pitfalls

- Do not operate directly in the user's dirty source branch unless asked. Use a separate worktree so their local uncommitted state remains untouched.
- Do not merge the entire stale branch when only one design/code commit is wanted; cherry-pick the intended commit(s).
- Conflict markers in plan files often mean chronology drift, not semantic code conflict. Preserve mainline shipped-history entries and append the source branch's still-relevant finding/note separately.
- First CI status can be `UNKNOWN` immediately after PR creation. Wait a few seconds, then inspect again before declaring readiness.
