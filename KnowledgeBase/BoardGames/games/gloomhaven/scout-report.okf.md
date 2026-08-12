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
    notes: "Direct BGG page returned HTTP 403 from this environment. Retried 2026-08-12 (librarian pass) via WebFetch: still HTTP 403 — matches the systemic BGG block seen across this corpus (see marvel-champions-the-card-game/scout-report.okf.md notes)."
  - source_id: null
    url: "https://drive.google.com/file/d/16TmmCKa6zVVObj2qM-vIj9RcEAC3nfMT/view?usp=sharing"
    failure: other
    fallback: "Dized structured rules summary and secondary reviews remain the rules basis."
    retry_needs: alternate_source
    notes: "2026-08-12: link discovered on the now-accessible cephalofair.com support page (src-008) but not yet fetched/extracted; not registered as a source until retrieved. Also confirm whether the support page's linked FAQ (cephalofairgames.github.io/gloomhaven2e-faq/) is a second-edition-specific document before citing it against this base-game (2017, first edition) record."
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
  - id: "src-008"
    title: "Gloomhaven — Cephalofair Games support page"
    url: "https://cephalofair.com/pages/gloomhaven"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-08-12"
    notes: "Resolved 2026-08-12 (librarian pass): page loads and lists a digital rulebook (Google Drive), official FAQ, puzzle-book hint guide, and First Printing 2025 errata (revised campaign sheet, scenario 26 monster placement). The linked rulebook/FAQ documents themselves were not fetched or extracted in this pass."
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

- BoardGameGeek: identified through search; direct page blocked (still blocked as of 2026-08-12).
- BGG-facing score mirror: retrieved successfully.
- Publisher page: confirmed 2026-08-12 (librarian pass) at `cephalofair.com/pages/gloomhaven`; links a digital rulebook, FAQ, and errata but these were not yet fetched.
- Official rulebook: located (Google Drive link on the publisher support page) but not yet retrieved or extracted.
- Structured rules: Dized retrieved.
- Review sources: The Opinionated Gamers and Co-op Board Games.

## Rulebook extraction status

- Official rulebook found: yes, as of 2026-08-12 — linked from the publisher support page (src-008), not yet fetched.
- File inspected: no.
- Page count/version/date if known: unknown.
- Text extraction quality: secondary summaries only; official rulebook extraction remains a followup.

## Documents written

This run wrote the standard Gloomhaven doc set: `index.okf.md`, `sources.okf.md`, `rules/overview.okf.md`, `rules/setup.okf.md`, `rules/turn-structure.okf.md`, `rules/actions.okf.md`, `rules/scoring-endgame.okf.md`, `rules/edge-cases-faq.okf.md`, `reception/reviews.okf.md`, and `reception/better-if.okf.md`.

## Run validation

For Gloomhaven: `WISHLIST.md` entry checked off is n/a since the wishlist was empty; `node scripts/generate-index.mjs` ran after writing docs is pending; `node scripts/validate-okf.mjs` exit 0 before push is pending.

## Strongest design lessons

Persistent campaign state becomes meaningful when role identity, tactical decisions, rewards, and branching consequences all point toward the same long arc.

## Strongest player complaints

The sourced friction is physical and temporal: setup, teardown, long scenarios, and a campaign measured in roughly 150–200 hours.

## This game would be better if...

It reduced state-restoration and setup burden without weakening the campaign's sense of consequence.

## Open questions

Recover the official first-edition rulebook (now a known Google Drive link, see followups), verify exact BGG metadata directly, and replace secondary rules summaries with page or section citations.

## Retry notes

- 2026-08-12 (librarian pass): Publisher page (previously `not_found`) resolved — `cephalofair.com/pages/gloomhaven` now loads and exposes a rulebook link, official FAQ, and First Printing 2025 errata; recorded as src-008. BGG (src-001) retried and still HTTP 403. The rulebook PDF itself was not fetched/extracted this pass — left as a followup naming the exact URL.