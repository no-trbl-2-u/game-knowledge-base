# SomberSoft Board Game Knowledge Base

Evidence-gated research corpus for board-game rules, player reception, and design-improvement opportunities.

## Purpose

This directory is for gathering structured knowledge before integration. The daily scout selects up to fifteen candidates in three disjoint 5/5/5 cohorts, then promotes only evidence-complete games to OKF-formatted canonical records.

Primary uses:

- learn how successful tabletop systems structure rules;
- identify friction, elegance, pacing, onboarding, scoring, turn-structure, and balance patterns;
- collect recurring "this game would be better if..." complaints and proposals;
- build a design-reference corpus for SomberSoft games and agents.

## Daily cadence

A Hermes cron job runs once per day at 06:00 UTC. It selects up to five cooperative games, five solo RPG board games, and five games matching the rotating mechanic focus. Selection is not canonical coverage: a game directory is written only after the pre-authoring evidence gate passes.

```txt
KnowledgeBase/BoardGames/games/<slug>/
```

Operational record:

- `operations.okf.md` — the active mandate, specialist assignment, cron schedule, and daily output contract.

Retrieval entry points:

- `INDEX.okf.md` — **generated** corpus index (one row per game + mechanics → games table). The first file an agent should read; regenerate with `node scripts/generate-index.mjs`, never hand-edit.
- `index.html` — the human dashboard twin.

Each promoted game should contain, at minimum:

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
  visuals/
    packet.okf.md
    contact-sheet.webp
    references/
      01-box-cover.webp
      02-components.webp
      03-setup.webp
      04-decision-state.webp
```

If an official rulebook, independent review, rating snapshot, or meaningful visual packet cannot be retrieved and inspected, the game remains in the noncanonical candidate manifest. The scout must report the evidence shortfall plainly and must not create a partial canonical tree.

Every writing run ends by regenerating `INDEX.okf.md` (`node scripts/generate-index.mjs`) and running `node scripts/validate-okf.mjs`; any validator finding means the run failed. A green validator proves schema integrity, not factual truth; source retrieval and claim support are separate mandatory gates.

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

Each game also carries a curated packet of 4–8 reduced WebP visual references
and one contact sheet. Preserve the source page, exact asset URL, creator,
rights holder, usage basis, attribution, analytical purpose, and SHA-256 for
every local derivative. “Official” describes provenance, not permission.
Prefer owned, permitted, openly licensed, or public-domain work; use a reduced
editorial excerpt only when necessary for private analysis. Never store
source-resolution art, complete rulebooks, complete card libraries, or an
image that substitutes for a game component. Reduced page overviews are
allowed only when visual hierarchy is the subject, text is below practical
replacement quality, and a few noncontiguous pages cannot substitute for the
source. Remove material on request.

## Selection doctrine

**Wishlist first:** take the topmost unchecked entry in `WISHLIST.md` (repo root) and check it off in the run that covers it, linking the game dir. Free choice applies only when the wishlist is empty.

When choosing freely, prefer games with:

- accessible official rules;
- high BGG rank or unusual mechanics;
- strong praise/complaint signal in reviews;
- mechanics relevant to SomberSoft design: card play, dice, campaign progression, asymmetric powers, combat, deckbuilding, push-your-luck, co-op AI, solo modes, or status/effect systems.

Avoid repeating games already present unless the run is explicitly updating an older entry.
