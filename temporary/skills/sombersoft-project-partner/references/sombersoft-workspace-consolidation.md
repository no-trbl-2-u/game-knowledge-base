# SomberSoft workspace consolidation

Use when T asks to move loose SomberSoft directories/files under one `SomberSoft` directory or publish the central memory/doctrine repo.

## Doctrine

- `~/Workspace/SomberSoft` is the central SomberSoft memory/doctrine repository.
- `~/Workspace/axiomancer-both/` remains separate and must not be swept into the central repo unless T explicitly changes that structure.
- Treat consolidation as repo hygiene plus source-of-truth work: move only the intended loose top-level SomberSoft artifacts, initialize or reuse the central git repo, set the remote, commit, push, and verify remote/default branch truth.

## Safe sequence

1. Inspect `~/Workspace` and identify candidates to move.
2. Explicitly exclude `axiomancer-both` and any existing `SomberSoft` directory from bulk moves.
3. Create `~/Workspace/SomberSoft` if absent.
4. Move loose SomberSoft doctrine, reports, decisions, company artifacts, and upgrade ledgers into `~/Workspace/SomberSoft`.
5. Initialize git or preserve the existing repo. Set the intended remote, usually `no-trbl-2-u/SomberSoft-Memory` unless T names another.
6. Commit and push to `main` after checking for secrets or accidental large/generated files.
7. Verify with `git status --short --branch`, `git remote -v`, and remote branch/default state.
8. Update durable memory and this skill if the central path or remote changes.

## Pitfalls

- Do not bury Axiomancer repos inside the memory repo; they are living product repos with their own remotes and release lanes.
- Do not push credentials, `.env` files, caches, generated exports, or node_modules during consolidation.
- If T says “that new repo I mentioned,” recover the repo name from recent conversation/session context or GitHub state before guessing.
- A successful local move is not enough. The deliverable is a pushed central repo with verified remote truth.