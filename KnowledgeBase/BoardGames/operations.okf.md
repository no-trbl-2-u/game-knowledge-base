---
okf_version: 0.1
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
confidence: high
status: verified
---

## Summary

The Board Game Knowledge Base is an active SomberSoft research corpus. It is housed at:

`/root/Workspace/SomberSoft/KnowledgeBase/BoardGames/`

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
- Workdir: `/root/Workspace/SomberSoft`
- Skill: `research-discovery-monitoring`
- Toolsets: `web`, `file`, `terminal`
- Delivery: origin Telegram thread

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

## Design implications for SomberSoft

- This corpus should become a design memory bank for Axiomancer and future SomberSoft games.
- The most valuable entries will not merely summarize rules; they will expose where rules created friction, delight, ambiguity, pacing trouble, or strategic depth.
- The "better-if" sections are the ore. Mine them hard.

## Open questions

- Whether 6am should be interpreted as UTC permanently or later moved to T's local timezone.
- Whether The Governor should commit/push each daily KB addition automatically after verification.
- Whether future entries should produce visual HTML indexes for each game in addition to OKF markdown.
