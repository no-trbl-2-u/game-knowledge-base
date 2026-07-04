# SomberSoft Board Game Knowledge Base

Daily research corpus for board-game rules, player reception, and design-improvement opportunities.

## Purpose

This directory is for gathering structured knowledge before integration. The daily scout studies one board game, finds official rules where possible, gathers review/forum reception, and writes OKF-formatted documents that preserve source provenance.

Primary uses:

- learn how successful tabletop systems structure rules;
- identify friction, elegance, pacing, onboarding, scoring, turn-structure, and balance patterns;
- collect recurring "this game would be better if..." complaints and proposals;
- build a design-reference corpus for SomberSoft games and agents.

## Daily cadence

A Hermes cron job runs once per day at 06:00 UTC. It selects one board game, researches sources, and writes a new game directory under:

```txt
KnowledgeBase/BoardGames/games/<slug>/
```

Operational record:

- `operations.okf.md` — the active mandate, specialist assignment, cron schedule, and daily output contract.

Each run should produce, at minimum:

```txt
games/<slug>/
  index.okf.md
  sources.okf.md
  rules/
    overview.okf.md
    setup.okf.md
    turn-structure.okf.md
    actions.okf.md
    scoring-endgame.okf.md
    edge-cases-faq.okf.md
  reception/
    reviews.okf.md
    better-if.okf.md
  scout-report.okf.md
```

If official rulebooks are unavailable, the scout must say so plainly and use secondary sources only as secondary testimony.

## Source hierarchy

1. Publisher/product page
2. Publisher-hosted rulebook / downloads / FAQ / errata
3. Official links to CDN/Dropbox/Drive rulebook files
4. BoardGameGeek metadata, files, forums, ratings, comments, and review leads
5. Retail pages, fan summaries, videos, and third-party reviews only when official sources fail

BoardGameGeek is a scout tower, not the court record.

## Copyright and extraction law

Do not mirror whole copyrighted rulebooks into the KB. Store:

- source metadata;
- categorized summaries;
- short citation snippets needed to prove claims;
- page/section references when available;
- links back to official sources.

The corpus is for private research and design analysis, not republication of rulebooks.

## Selection doctrine

Prefer games with:

- accessible official rules;
- high BGG rank or unusual mechanics;
- strong praise/complaint signal in reviews;
- mechanics relevant to SomberSoft design: card play, dice, campaign progression, asymmetric powers, combat, deckbuilding, push-your-luck, co-op AI, solo modes, or status/effect systems.

Avoid repeating games already present unless the run is explicitly updating an older entry.
