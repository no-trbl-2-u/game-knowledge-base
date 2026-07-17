# CLAUDE.md — game-knowledge-base

SomberSoft OKF knowledge base: board-game rules/reception research plus a
Dawncaster card corpus. Every content file is an `*.okf.md` — markdown with
strict YAML frontmatter. **`KnowledgeBase/BoardGames/OKF_SPEC.md` is the
contract; read it before writing any record.** The operating mandate (who
writes what, on what cadence) is `KnowledgeBase/BoardGames/operations.okf.md`.

## The three rules that prevent most damage

1. **Metadata firewall — grep frontmatter before opening bodies.** Every
   game doc carries the game's full `mechanics` and (on reception docs)
   `better_if_labels` tags, so queries resolve from frontmatter + the
   generated indexes without reading bodies. Start at
   `KnowledgeBase/BoardGames/INDEX.okf.md` or the Dawncaster sidecars
   (`cards.csv` / `cards.json` / `keywords.json`).
2. **Never hand-edit generated files** — `INDEX.okf.md` and the Dawncaster
   sidecars are derived; edit the source records and rerun
   `node scripts/generate-index.mjs` /
   `node scripts/generate-dawncaster-card-sidecars.mjs`. (A PreToolUse hook
   blocks these edits; that block is correct, not an obstacle.)
3. **Provenance is sacred.** Every body claim carries a
   `Source: src-NNN` / `Evidence: "quote"` / `Confidence:` triplet citing a
   source declared in frontmatter. Never mirror copyrighted rulebook text —
   summarize and cite. Don't invent claims a source doesn't support.

## Validation

```
node scripts/validate-okf.mjs            # full corpus + index/sidecar freshness
node scripts/validate-okf.mjs <files...> # just those files
```

A PostToolUse hook runs the single-file check after every write under
`KnowledgeBase/` and reports findings immediately; the `validate` CI job
blocks on the same findings. A Stop hook warns when a turn ends with a
dirty tree or unpushed commits (corpus passes commit+push atomically).
Full-corpus scans log a row to `TELEMETRY.md` (what was scanned, when,
complete or not) — data for the human, never a work queue. Controlled vocabularies (mechanics slugs,
better-if labels, enums) are pinned — extend the vocabulary source +
`OKF_SPEC.md` first, never freelance a new tag.

## Who writes here (the automation map)

- **Daily scout** (external Hermes cron, "The Governor") — new game
  coverage, wishlist-first. `WISHLIST.md` is the demand queue.
- **`/librarian`** (weekly Wed action) — schema drift, `needs_followup`
  retries, wishlist checkoffs, dedupe.
- **`/synthesize-patterns`** (weekly Sun action) — cross-game synthesis
  into `KnowledgeBase/BoardGames/patterns/`; every run logs to
  `patterns/RUNLOG.md`, even no-ops.
- **`/audit`** (monthly action) — source re-verification and confidence
  hygiene; the weekly `check-links` job feeds it.

Commit style: single-purpose commits to `main`, message prefix per pass
(`kb:`, `librarian:`, `patterns:`, `audit:`). No emojis, no
`Co-Authored-By` trailers. Validator green before every commit.

## Downstream consumer

The Axiomancer repo syncs this corpus to `kb/` via its
`scripts/kb-sync.mjs` and queries it (grep-first; optionally through the
`kb-query` MCP server defined in `scripts/kb-mcp-server.mjs` here).
Axiomancer design sessions append coverage requests to `WISHLIST.md`.
