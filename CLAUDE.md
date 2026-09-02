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
5. **Coverage is additive; nobody is waiting.** The pipeline runs unattended,
   so every followup and `intake-gap` line must name a *document* a later
   scheduled pass could fetch — URL, archive capture, official scan/readout,
   licensed corpus (`OKF_SPEC.md`, "A followup names a retrievable document").
   No coverage percentage blocks a game: aim high on rules, accept low-to-mid
   on components, publish what is evidenced, and add more next pass. Never
   close the difference by inventing it — an unretrieved denominator stays
   `UNKNOWN`, which is a valid terminal state, not a pending task.

## Validation

```
node scripts/validate-okf.mjs            # full corpus + index/sidecar freshness
node scripts/validate-okf.mjs <files...> # just those files
node --test scripts/intake-lib.test.mjs scripts/validate-intake-package.test.mjs scripts/fail-closed.test.mjs scripts/validate-okf-provenance.test.mjs scripts/validate-okf-visuals.test.mjs scripts/telemetry-delivery.test.mjs
node scripts/validate-intake.mjs --base origin/main # diff-aware hard gate
```

A PostToolUse hook runs the single-file check after every write under
`KnowledgeBase/` and reports findings immediately; the `validate` CI job
blocks on the same findings. A Stop hook warns when a turn ends with a
dirty tree or unpushed commits (corpus passes commit+push atomically).
Full-corpus scans log a row to `TELEMETRY.md` (what was scanned, when,
complete or not) — a record, never a work queue. Controlled vocabularies (mechanics slugs,
better-if labels, enums) are pinned — extend the vocabulary source +
`OKF_SPEC.md` first, never freelance a new tag.

## Who writes here (the automation map)

- **Bathcat scout** (external Hermes cron) — wishlist-first discovery and
  noncanonical evidence packets only; target 1/1/1, honest eligibility shortfalls
  allowed. Ready packets publish whatever they can evidence; no coverage percentage is an
  admission gate, and invented data never substitutes for a missing source. Bathcat opens one PR only for a complete
  `ready_for_audit` packet. A candidate with no retrievable document evidence at
  all becomes an actionable GitHub issue and must not add a blocked packet or
  report PR to Git.
- **Mennonite intake audit** (separate external Hermes cron) — independently
  reopens sources, verifies claims and visuals, binds approval to the frozen
  packet SHA-256, performs deterministic promotion on the same PR branch, and
  merge-commits that PR only after the promoted head is green. Exact-head
  `REVISE` creates or updates one `[kb-revise] PR #N` issue through
  `scripts/kb-loop-issue.mjs`; its authenticated `bathcat-ready` event wakes
  one event-only Bathcat repair. Bathcat's fresh pushed head transitions that
  issue to `mennonite-ready`; `HOLD` stops the loop, and `GO` closes the issue
  only after verified merge. Three repair attempts are the hard ceiling.
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
CODEOWNERS names the owning repository account for ownership only: a
single-account repository cannot satisfy a required self-review, so required
approving reviews stay at zero. Separate agent contexts, disjoint write
jurisdictions, immutable packet hashes, preserved commits, and CI preserve role
separation.
`TELEMETRY.md` travels with every delivery. The tracked
`.githooks/pre-commit` auto-stages its current state with ordinary commits;
`.githooks/pre-push` refuses delivery whenever telemetry remains uncommitted.
`.gitattributes` gives this append-only ledger Git's built-in `union` merge
driver, so parallel branches preserve both row sets instead of stranding one
behind a merge conflict. `scripts/telemetry-delivery.test.mjs` proves the
merge and hook behavior in disposable repositories in local and CI gates.
It also runs the intake regression suite and diff-aware hard gate; canonical
additions without an exact approved packet cannot leave the machine.
Every writer environment—including Hermes cron—must set
`core.hooksPath=.githooks` before work. Run all telemetry-writing generators
and validators before the final commit. After push, verify only with read-only
Git status and local/remote SHA checks; never rerun a telemetry-writing
validator.

## Downstream consumer

The supported MCP retrieval surface is the live hosted `kb-query` service in
`mcp-server/` — a bearer-authenticated Cloudflare Worker over Streamable HTTP
that needs no synced clone or per-session process
(`mcp-server/how-to-configure.md`). The former stdio server and
`scripts/kb-mcp-server.mjs` are retired and deleted; never restore or prescribe
them. Axiomancer retains `scripts/kb-sync.mjs` and its `kb/` snapshot only as a
grep-first fallback when the live service is down, unreachable, or
unauthorized.
Axiomancer design sessions append coverage requests to `WISHLIST.md`.
