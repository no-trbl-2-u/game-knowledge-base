# PR conflict resolution permission gate

When asked to resolve conflicts and merge an existing GitHub PR, check permissions before spending time on the rebase.

## Why

A PR can show `maintainerCanModify: true` while the current authenticated account still has only read permission on the base repository and no push permission to the contributor's fork. In that case conflict resolution can be completed locally, but `git push --force-with-lease` to either `origin` or the contributor fork will fail and the PR cannot be updated or merged by this agent.

## Preflight

From the base repo:

```bash
gh repo view OWNER/REPO --json viewerPermission --jq .viewerPermission
gh pr view PR_NUMBER --json headRepositoryOwner,headRepository,headRefName,maintainerCanModify,isCrossRepository,mergeable,url \
  --jq '{headOwner:.headRepositoryOwner.login,headRepo:.headRepository.nameWithOwner,headRefName,maintainerCanModify,isCrossRepository,mergeable,url}'
```

If `viewerPermission` is not `WRITE`, `MAINTAIN`, or `ADMIN`, do not promise a push or merge. You may still resolve locally if useful, but state up front that publishing depends on a write-capable token/account.

## If push is blocked after local resolution

Preserve the resolved work as patch files so a maintainer can apply it:

```bash
mkdir -p /tmp/hermes-pr-conflict-resolutions
git format-patch -1 <resolved-branch> --stdout > /tmp/hermes-pr-conflict-resolutions/pr-<number>-resolution.patch
```

Report:

- local branch name
- resolved commit SHA
- verification command and result
- patch file path
- exact permission blocker

Do not record a durable memory saying GitHub or the repo is unwritable; permissions are environment state and may change.