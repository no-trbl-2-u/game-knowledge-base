# Game Knowledge Base

SomberSoft OKF knowledge base for board-game rules, reception notes, and scout reports.

Current corpora:

- `KnowledgeBase/BoardGames/` — board-game rules, reception notes, and scout reports.
- `KnowledgeBase/DigitalCardGames/` — digital card libraries imported for card/mechanics idea mining. Currently Dawncaster: 1,692 card OKF records plus a 141-entry keyword glossary, each with generated CSV/JSON sidecars (`cards.csv`, `cards.json`, `card-index.csv`, `keywords.csv`, `keywords.json`) for machine consumption. Card sidecars regenerate via `scripts/generate-dawncaster-card-sidecars.mjs`; freshness is enforced by the validator.

## Automation

- `validate` (every push/PR touching the corpus) — `scripts/validate-okf.mjs`, the format's type-checker. Plain script, no model. Blocking since 2026-07-04. Also enforces freshness of `INDEX.okf.md` and the Dawncaster card sidecars. Controlled vocabularies live in `KnowledgeBase/OKF_VOCAB.json` (single source; `OKF_SPEC.md` is the prose mirror).
- `librarian` (weekly, Wed 05:17 UTC) — fixes schema drift, drains `status: needs_followup` by retrying failed sources, checks off covered `WISHLIST.md` entries. See `.claude/commands/librarian.md`.
- `patterns` (weekly, Sun 05:17 UTC) — cross-game synthesis into `KnowledgeBase/BoardGames/patterns/`, keyed to the better-if taxonomy and major mechanics. Every pass logs to `patterns/RUNLOG.md`, no-ops included. See `.claude/commands/synthesize-patterns.md`.
- `check-links` (weekly, Mon 05:17 UTC) — `scripts/check-links.mjs`, plain script, no model. Probes every source URL; dead links get filed on an open `link-rot` issue.
- `audit` (monthly, 15th 04:17 UTC) — evidence audit: remediates dead links, drains the `needs_followup` backlog, spot-checks verified claims against their sources. See `.claude/commands/audit.md`.
- `claude` (on `@claude` mention in issues/comments) — interactive responder for corpus questions and small fixes.
- `WISHLIST.md` — the demand loop: Axiomancer design sessions append coverage requests; the daily scout consumes top-down; the librarian checks off covered entries.

Model workflows run Claude Sonnet 5 via the `CLAUDE_CODE_OAUTH_TOKEN` repo secret. Consumers (the Axiomancer repo) sync this corpus via its `scripts/kb-sync.mjs` and can query it through the `kb-query` stdio MCP server (`scripts/kb-mcp-server.mjs`, spawned per session by the MCP host — grep-first workflows work without it).

Interactive sessions get the same guardrails via the committed `.claude/settings.json`: a PreToolUse hook blocks hand-edits to generated files and a PostToolUse hook runs the validator on every record written (`.claude/hooks/okf-guard.mjs`; `CLAUDE.md` carries the working rules).
