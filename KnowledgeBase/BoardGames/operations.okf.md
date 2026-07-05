---
okf_version: 0.2
type: operations
game:
  title: "SomberSoft Board Game Knowledge Base"
  slug: "board-game-knowledge-base"
  bgg_id: null
  publisher: "SomberSoft"
  year: 2026
  edition: "initial scaffold"
scope: "knowledge-base operations"
sources:
  - id: "src-001"
    title: "SomberSoft/T instruction: daily board-game KB scout"
    url: "local-session"
    kind: other
    provenance: official
    retrieved_at: "2026-06-29"
    notes: "T directed creation of a SomberSoft directory, daily 6am scout, OKF documents, rulebook categorization, BGG discovery, publisher rulebook sourcing, reviews, and better-if analysis."
  - id: "src-002"
    title: "Hermes cron job: board-game-knowledgebase-daily-scout"
    url: "cronjob:44c13742fca9"
    kind: other
    provenance: official
    retrieved_at: "2026-06-29"
    notes: "Scheduled Hermes cron job configured to run daily at 06:00 UTC and deliver reports back to origin."
  - id: "src-003"
    title: "OKF 0.2 proposal (GitHub issue #1)"
    url: "https://github.com/no-trbl-2-u/game-knowledge-base/issues/1"
    kind: other
    provenance: official
    retrieved_at: "2026-07-05"
    notes: "Axiomancer integration proposal: mechanics tags, corpus index, patterns layer, librarian gate, wishlist consumption, failed-source policy."
confidence: high
status: verified
---

## Summary

The Board Game Knowledge Base is an active SomberSoft research corpus. It is isolated in its own repository and housed at:

`/root/Workspace/game-knowledge-base/KnowledgeBase/BoardGames/`

Remote:

`https://github.com/no-trbl-2-u/game-knowledge-base`

Its daily operator is **The Governor — SomberSoft Research Magistrate and Knowledge-Base Keeper**.

The current purpose is knowledge gathering only. Full integration into downstream agents, tools, or game systems is deferred.

## Source-backed facts

- Claim: The knowledge base belongs inside the SomberSoft directory.
  Source: src-001
  Evidence: T asked to start the knowledge base project as "a directory inside of SomberSoft."
  Confidence: high

- Claim: The daily cadence is once per day at 6am.
  Source: src-001, src-002
  Evidence: T specified "Everyday, once a day at 6am"; cron job `44c13742fca9` is scheduled as `0 6 * * *`.
  Confidence: high

- Claim: The scout should focus on one game per run.
  Source: src-001
  Evidence: T specified the daily scout/research agent should "focus on one game."
  Confidence: high

- Claim: BoardGameGeek is a primary discovery source, but publisher websites are preferred for actual rulebooks.
  Source: src-001
  Evidence: T identified BoardGameGeek.com as "a great place to decide which board game to focus on" and the board-game company website as a great source to find rulebooks.
  Confidence: high

- Claim: The corpus should preserve both rules and reception.
  Source: src-001
  Evidence: T requested "rules, as well as, reviews" to learn what people liked and disliked about rules.
  Confidence: high

- Claim: The corpus should emphasize improvement opportunities.
  Source: src-001
  Evidence: T specified a large focus on "this game would be better if..."
  Confidence: high

- Claim: The scout consumes WISHLIST.md before free selection.
  Source: src-003
  Evidence: OKF 0.2 §5: "before free selection, take the topmost unchecked WISHLIST.md entry; check it off in the same run that covers it... Free-choice selection applies only when the wishlist is empty."
  Confidence: high

- Claim: Failed sources become structured followups records, never raw stashed documents.
  Source: src-003
  Evidence: OKF 0.2 §6 recommendation: "no raw stashing... make failures structured and retryable" — per failure: source id + exact URL, what failed, what was used as fallback, what a retry needs. The weekly librarian consumes exactly this.
  Confidence: high

- Claim: Every scout run must validate its own output against OKF_SPEC.md before pushing.
  Source: src-003
  Evidence: Issue #1 status comment after the 2026-07-04 slay-the-spire run drifted off-spec (46 findings): "have the scout run node scripts/validate-okf.mjs on its own output before pushing, and treat findings as a failed run."
  Confidence: high

## Specialist assignment

**The Governor** owns the daily scout function.

Role:

- research magistrate
- knowledge-base keeper
- source-provenance auditor
- rulebook categorizer
- review/reception extractor
- better-if opportunity classifier

Strength:

- preserves evidence instead of vibes;
- separates official rules from community interpretation;
- turns player complaints into reusable design pressure;
- keeps each game entry structured enough for future agent/tool integration.

Danger:

- may over-index on documentation and miss table-feel unless reception sources are gathered aggressively.

## Current automation

Cron job:

- Name: `board-game-knowledgebase-daily-scout`
- Job ID: `44c13742fca9`
- Schedule: `0 6 * * *`
- Next first run after setup: `2026-06-30T06:00:00+00:00`
- Workdir: `/root/Workspace/game-knowledge-base`
- Skill: `research-discovery-monitoring`
- Toolsets: `web`, `file`, `terminal`
- Delivery: origin Telegram thread
- Commit/push: yes, to `no-trbl-2-u/game-knowledge-base` `main` after each successful scout run
- Required gates: `node scripts/generate-index.mjs` then `node scripts/validate-okf.mjs`; any validator finding is a failed run and must not be pushed

## Selection doctrine (amended per OKF 0.2 §5)

1. Take the **topmost unchecked entry in `WISHLIST.md`**. Cover it, and check it off in the same run with a link to the new game dir.
2. Only when the wishlist is empty: free-choice selection per the README's selection doctrine (accessible official rules, high BGG signal, SomberSoft-relevant mechanics).
3. Never repeat a game already present unless explicitly updating an older entry.

This turns daily growth from "whatever the scout felt like" into demand-driven coverage: design sessions append requests, the scout drains them top-down.

## Daily output contract

Each successful scout run writes one game directory:

`KnowledgeBase/BoardGames/games/<slug>/`

Minimum expected files:

- `index.okf.md`
- `sources.okf.md`
- `rules/overview.okf.md`
- `rules/setup.okf.md`
- `rules/turn-structure.okf.md`
- `rules/actions.okf.md`
- `rules/scoring-endgame.okf.md`
- `rules/edge-cases-faq.okf.md`
- `reception/reviews.okf.md`
- `reception/better-if.okf.md`
- `scout-report.okf.md`

Every doc uses **OKF 0.2 frontmatter exactly as written in `OKF_SPEC.md`** — the spec, not the scout's memory of it, is the output format. In particular: `okf_version: 0.2`, `mechanics` (controlled slugs, identical across the game's docs), `better_if_labels` on reception docs, and `src-NNN` source ids.

Before pushing, the run must:

1. Record every failed source fetch/extraction as a structured `followups:` entry in `scout-report.okf.md` (OKF 0.2 §6) — never stash raw fetched documents in the repo.
2. Regenerate the corpus index: `node scripts/generate-index.mjs`.
3. Run `node scripts/validate-okf.mjs` and treat **any finding as a failed run** — fix before pushing.

## Design implications for SomberSoft

- This corpus should become a design memory bank for Axiomancer and future SomberSoft games.
- The most valuable entries will not merely summarize rules; they will expose where rules created friction, delight, ambiguity, pacing trouble, or strategic depth.
- The "better-if" sections are the ore. Mine them hard.

## Open questions

- Whether 6am should be interpreted as UTC permanently or later moved to T's local timezone.
- Whether The Governor should commit/push each daily KB addition automatically after verification.
- Whether future entries should produce visual HTML indexes for each game in addition to OKF markdown.
