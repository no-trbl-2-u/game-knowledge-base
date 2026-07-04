# Game Knowledge Base

SomberSoft OKF knowledge base for board-game rules, reception notes, and scout reports.

Current corpus lives under `KnowledgeBase/BoardGames/`.

## Automation

- `validate` (every push/PR touching the corpus) — `scripts/validate-okf.mjs`, the format's type-checker. Plain script, no model. Currently non-blocking; flip `continue-on-error` to false after the librarian's first pass brings the corpus clean.
- `librarian` (weekly, Wed 05:17 UTC) — fixes schema drift, drains `status: needs_followup` by retrying failed sources, checks off covered `WISHLIST.md` entries. See `.claude/commands/librarian.md`.
- `patterns` (weekly, Sun 05:17 UTC) — cross-game synthesis into `KnowledgeBase/BoardGames/patterns/`, keyed to the better-if taxonomy and major mechanics. See `.claude/commands/synthesize-patterns.md`.
- `WISHLIST.md` — the demand loop: Axiomancer design sessions append coverage requests; the daily scout consumes top-down; the librarian checks off covered entries.

Model workflows run Claude Sonnet 5 via the `CLAUDE_CODE_OAUTH_TOKEN` repo secret. Consumers (the Axiomancer repo) sync this corpus via its `scripts/kb-sync.mjs`.
