# SomberSoft monorepo and knowledge-base isolation

Use when repo paths, KnowledgeBase ownership, Governor cron behavior, or SomberSoft-Memory hygiene are involved.

## Current repository layout

- Axiomancer game work lives in the monorepo:
  - local: `~/Workspace/SomberSoft/Axiomancer`
  - remote: `no-trbl-2-u/Axiomancer`
  - packages: `axiomancer-mechanics`, `axiomancer-mobile`, `axiomancer-card-editor`
- Old local split checkouts were removed:
  - `~/Workspace/axiomancer-both/axiomancer-mechanics`
  - `~/Workspace/axiomancer-both/axiomancer-mobile`
- Old GitHub split remotes may still exist for history, but do not treat them as the active work repos.
- SomberSoft-Memory lives at `~/Workspace/SomberSoft`, but it must not absorb the Axiomancer monorepo.

## SomberSoft-Memory hygiene

SomberSoft-Memory should ignore local sibling/project checkouts that sit under its directory tree. In particular:

```gitignore
Axiomancer/
```

Before committing SomberSoft-Memory, check for accidental large repo/project additions:

```bash
git status --short
```

Do not stage `Axiomancer/` or other unrelated local project/artifact folders when committing doctrine/memory changes.

## Game Knowledge Base isolation

The board-game OKF knowledge base is isolated in its own repo:

- local: `~/Workspace/game-knowledge-base`
- remote: `no-trbl-2-u/game-knowledge-base`
- canonical content root: `KnowledgeBase/BoardGames/`

SomberSoft-Memory no longer owns `KnowledgeBase/`. If old KB files appear under `~/Workspace/SomberSoft/KnowledgeBase`, treat that as drift unless T explicitly reopens the decision.

## Governor daily scout doctrine

The Governor's daily KB scout cron should run from:

```txt
/root/Workspace/game-knowledge-base
```

Standing behavior:

1. Pull `origin main` with `git pull --ff-only`.
2. Write or improve OKF files under `KnowledgeBase/BoardGames/**`.
3. Stage only KB-repo changes (`README.md`, `.gitignore`, `KnowledgeBase/**` as applicable).
4. Commit with a concise `kb:` message if changed.
5. Push to `origin main`.
6. Report the game/slug, files changed, commit hash, design lesson, and blockers.

Do not write Governor KB findings into SomberSoft-Memory. Do not touch Axiomancer from the Governor job.

## GitHub Actions `/march` note

For the Axiomancer monorepo, `/march` from GitHub Actions needs a Claude Code OAuth secret, not an Anthropic API key:

```txt
CLAUDE_CODE_OAUTH_TOKEN
```

The workflow should use `anthropics/claude-code-base-action@beta`, pin `model: claude-sonnet-5`, grant `contents: write`, and run against the monorepo root. `/march` is live authority: it edits, verifies, commits, and pushes to `main`.