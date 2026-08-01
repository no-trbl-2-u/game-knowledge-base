# CLAUDE.md — game-knowledge-base

SomberSoft OKF knowledge base: board-game rules/reception research plus a
Dawncaster card corpus. Every content file is an `*.okf.md` — markdown with
strict YAML frontmatter. **`KnowledgeBase/BoardGames/OKF_SPEC.md` is the
contract; read it before writing any record.** The operating mandate (who
writes what, on what cadence) is `KnowledgeBase/BoardGames/operations.okf.md`.

## The four rules that prevent most damage

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
4. **Scouting is not promotion.** Bathcat writes only under `intake/runs/`,
   at most 1 cooperative + 1 solo RPG + 1 rotating-focus candidate. BGG may
   discover candidates, but official rules and independent review must come
   from outside BGG. Bathcat cannot create `approval.json` or write canonical
   `games/`. The Mennonite independently approves an immutable packet hash;
   only `scripts/promote-intake.mjs` may copy that packet into the corpus.

## Validation

```
node scripts/validate-okf.mjs            # full corpus + index/sidecar freshness
node scripts/validate-okf.mjs <files...> # just those files
node --test scripts/intake-lib.test.mjs scripts/validate-intake-package.test.mjs scripts/fail-closed.test.mjs scripts/validate-okf-provenance.test.mjs
node scripts/validate-intake.mjs --base origin/main # diff-aware hard gate
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

- **Bathcat scout** (external Hermes cron) — wishlist-first discovery and
  noncanonical evidence packets only; target 1/1/1, honest eligibility shortfalls
  allowed. Ready packets require 100% coverage of the bounded governing-document
  inventory declared for the claims actually published; exhaustive card-library
  coverage and arbitrary factual percentages are not admission gates. Bathcat opens one PR only for a complete
  `ready_for_audit` packet. Below-threshold research becomes an actionable GitHub
  issue and must not add a blocked packet or report PR to Git.
- **Mennonite intake audit** (separate external Hermes cron) — independently
  reopens sources, verifies claims and visuals, binds approval to the frozen
  packet SHA-256, performs deterministic promotion on the same PR branch, and
  merge-commits that PR only after the promoted head is green.
- **`/librarian`** (weekly Wed action) — schema drift, `needs_followup`
  retries, wishlist checkoffs, dedupe.
- **`/synthesize-patterns`** (weekly Sun action) — cross-game synthesis
  into `KnowledgeBase/BoardGames/patterns/`; every run logs to
  `patterns/RUNLOG.md`, even no-ops.
- **`/audit`** (monthly action) — source re-verification and confidence
  hygiene; the weekly `check-links` job feeds it.

Commit style: single-purpose commits on dedicated branches, message prefix per pass
(`kb:`, `librarian:`, `patterns:`, `audit:`). No emojis, no
`Co-Authored-By` trailers. Validator green before every commit.
Protected `main` requires pull requests, an up-to-date green `validate` check,
and resolved conversations; force-push and deletion are disabled. New-game
intake preserves three commits inside one PR: Bathcat's frozen packet,
Mennonite's approval-only transition, and deterministic promotion. CI verifies
the parent state and allowed paths at each boundary and forbids packet mutation
after approval. This repository is merge-commit only: squash and rebase are disabled so the
protected-base history always preserves the reviewed branch ancestry. New-game intake
specifically depends on its Bathcat, approval, and promotion commit boundaries.
CODEOWNERS names T's authenticated repository account for ownership only: a
single-account repository cannot satisfy a required self-review, so required
approving reviews stay at zero. Separate agent contexts, disjoint write
jurisdictions, immutable packet hashes, preserved commits, and CI preserve role
separation.
`TELEMETRY.md` travels with every delivery. The tracked
`.githooks/pre-commit` auto-stages its current state with ordinary commits;
`.githooks/pre-push` refuses delivery whenever telemetry remains uncommitted.
It also runs the intake regression suite and diff-aware hard gate; canonical
additions without an exact approved packet cannot leave the machine.
Every writer environment—including Hermes cron—must set
`core.hooksPath=.githooks` before work. Run all telemetry-writing generators
and validators before the final commit. After push, verify only with read-only
Git status and local/remote SHA checks; never rerun a telemetry-writing
validator.

## Downstream consumer

The Axiomancer repo syncs this corpus to `kb/` via its
`scripts/kb-sync.mjs` and queries it (grep-first; optionally through the
`kb-query` MCP server defined in `scripts/kb-mcp-server.mjs` here).
Axiomancer design sessions append coverage requests to `WISHLIST.md`.
