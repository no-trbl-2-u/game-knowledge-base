---
okf_version: 0.2
type: scout_report
game:
  title: "Gloomhaven"
  slug: "gloomhaven"
  bgg_id: 174430
  publisher: "Cephalofair Games"
  year: 2017
  weight: 3.90
  edition: "base game"
scope: "base game"
mechanics: [campaign-game, cooperative-game, hand-management, point-to-point-movement, variable-player-powers]
followups:
  - source_id: "src-001"
    url: "https://boardgamegeek.com/boardgame/174430/gloomhaven"
    failure: blocked
    fallback: "Used BGG search result and BGG Data mirror for score and identity."
    retry_needs: alternate_source
    notes: "Direct BGG page returned HTTP 403 from this environment."
  - source_id: null
    url: "https://cephalofair.com/pages/gloomhaven"
    failure: not_found
    fallback: "Used Dized structured rules summary and secondary reviews."
    retry_needs: alternate_source
    notes: "No publisher page was confirmed during this run."
sources:
  - id: "src-001"
    title: "Gloomhaven — BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/174430/gloomhaven"
    kind: bgg_page
    provenance: official
    retrieved_at: "2026-07-16"
    notes: "Discovery lead; direct page blocked."
  - id: "src-002"
    title: "Gloomhaven — BGG Data"
    url: "https://www.bggdata.co.za/game/174430/gloomhaven/"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-16"
    notes: "Rating 8.6, rank 3, weight 3.9 at retrieval."
  - id: "src-003"
    title: "Gloomhaven — Dized Rules introduction"
    url: "https://rules.dized.com/game/I7lEsCGOS2-zgol-ZRNf3g/gloomhaven"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-16"
    notes: "RPG identity, campaign, and progression summary."
  - id: "src-004"
    title: "Gloomhaven — Dized Rules: Initiative"
    url: "https://rules.dized.com/game/I7lEsCGOS2-zgol-ZRNf3g/2YT9FnMvSECu2zu2WSJ08Q/cISGWuPnSiG6Yz9yWeG9Fg/initiative"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-16"
    notes: "Initiative summary."
  - id: "src-005"
    title: "Gloomhaven — Dized Rules: Exhaustion"
    url: "https://rules.dized.com/game/I7lEsCGOS2-zgol-ZRNf3g/JCOXDscCS3a2rgiHrt6_Eg/exhaustion"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-16"
    notes: "Exhaustion summary."
  - id: "src-006"
    title: "Gloomhaven: Does it live up to the hype? — The Opinionated Gamers"
    url: "https://opinionatedgamers.com/2020/11/28/gloomhaven-does-it-live-up-to-the-hype-review-by-rj-garrison/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-16"
    notes: "Reception evidence."
  - id: "src-007"
    title: "Gloomhaven — Co-op Board Games review"
    url: "https://coopboardgames.com/cooperative-board-game-reviews/gloomhaven/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-16"
    notes: "Time and campaign scale evidence."
confidence: medium
status: needs_followup
---

## Scout objective

Study one high-scoring RPG / role-playing board game for rules structure, reception, and better-if opportunities.

## Why this game

- Wishlist entry consumed: no — wishlist had no unchecked entries; free choice.
- BGG signal: BGG Data reported rating 8.6, overall rank #3, and weight 3.9 at retrieval.
- Mechanics relevance: persistent campaign, distinct mercenary roles, tactical cardplay, cooperative scenarios, and progression.
- RPG fit: BGG pitches strategic monster combat and legacy quests; Dized describes players as wandering mercenaries with distinct skills, experience, loot, new locations, and branching story decisions.
- Deckbuilder exclusion: no deck-building, deckbuilder, or deck-construction mechanism was identified in the retrieved metadata or descriptions. The card hand is a tactical action system, not a deck-construction core loop.

## Source search path

- BoardGameGeek: identified through search; direct page blocked.
- BGG-facing score mirror: retrieved successfully.
- Publisher page: not confirmed.
- Official rulebook: not located.
- Structured rules: Dized retrieved.
- Review sources: The Opinionated Gamers and Co-op Board Games.

## Rulebook extraction status

- Official rulebook found: no.
- File inspected: no.
- Page count/version/date if known: unknown.
- Text extraction quality: secondary summaries only.

## Documents written

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

## Run validation

- `WISHLIST.md` entry checked off: n/a — wishlist empty.
- `node scripts/generate-index.mjs` run after writing docs: pending.
- `node scripts/validate-okf.mjs` exit 0 before push: pending.

## Strongest design lessons

Persistent campaign state becomes meaningful when role identity, tactical decisions, rewards, and branching consequences all point toward the same long arc.

## Strongest player complaints

The sourced friction is physical and temporal: setup, teardown, long scenarios, and a campaign measured in roughly 150–200 hours.

## This game would be better if...

It reduced state-restoration and setup burden without weakening the campaign's sense of consequence.

## Open questions

Recover the official first-edition rulebook, verify exact BGG metadata directly, and replace secondary rules summaries with page or section citations.