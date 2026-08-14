# SomberSoft external reference asset imports

Use when T asks to pull reference material from an external repository or website into a SomberSoft/Axiomancer planning or design directory.

## Pattern

1. Sync the target repo first and require clean `main` unless T explicitly scopes a branch/PR first.
2. Clone the external source into a disposable location such as `/tmp/<repo-name>`.
3. Copy only the requested subset into the target repo. If T gives an exclusion rule such as "ignore files that say thumb," verify both counts:
   - files copied
   - excluded files present in destination, expected `0`
4. Add a README in the destination directory that records:
   - source repository URL
   - source path
   - source commit used
   - what the files are for
   - any exclusion rule applied
   - whether the assets are reference material rather than final game art
5. Delete the disposable clone after extraction once the target repo contains the needed files.
6. Verify with `git diff --check`, destination file counts, README text, and `git status`.
7. Commit/push or open a PR according to T's current branch policy.

## Retroactive PR correction

If the change was accidentally committed/pushed to `main` but T then asks for a PR:

1. Preserve the image/content commit on a review branch.
2. Revert that commit on `main` and push the revert, rather than rewriting public history.
3. Create a fresh PR branch from the reverted `main`.
4. Cherry-pick the preserved content commit onto the PR branch.
5. Push the PR branch and open the PR.
6. If a temporary preservation branch was pushed, delete it after the real PR branch exists.

Name this plainly in the PR body. Do not pretend the direct push did not happen.