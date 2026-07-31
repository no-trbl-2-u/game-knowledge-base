---
okf_version: 0.2
type: game_index
game:
  title: "Bloodborne: The Card Game"
  slug: "bloodborne-the-card-game"
  bgg_id: 195856
  publisher: "CMON"
  year: 2016
  players:
    min: 3
    max: 5
  weight: 2.04
  edition: "English 2016 standalone base game"
scope: "English 2016 standalone base game; The Hunter's Nightmare expansion and promotional or translated material excluded"
mechanics: ["hand-management", "push-your-luck", "semi-cooperative-game", "set-collection", "simultaneous-action-selection"]
sources:
  - id: "src-001"
    title: "CMON — Bloodborne: The Card Game"
    url: "https://www.cmon.com/product/bloodborne-the-card-game/bloodborne-the-card-game"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Live page inspected through a text retrieval proxy after direct HTTP returned 403; official image assets were retrieved directly."
  - id: "src-002"
    title: "Bloodborne: The Card Game Rulebook — verified third-party copy"
    url: "https://cdn.1j1ju.com/medias/66/14/bb-bloodborne-the-card-game-rulebook.pdf"
    kind: rulebook_pdf
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "Complete 16-page English rulebook copy; PDF metadata was rewritten by the mirror, so it is not treated as an official CMON retrieval."
  - id: "src-003"
    title: "BoardGameGeek live item and rating data — BGG ID 195856"
    url: "https://api.geekdo.com/api/dynamicinfo?objecttype=thing&objectid=195856"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-31"
    notes: "Dated complexity and community telemetry only."
confidence: medium
status: needs_followup
last_verified: "2026-07-31"
summary: "A fast competitive hunt with shared monsters, simultaneous commitments, scarce blood rewards, and a recurring choice between fighting and banking progress."
---

# Bloodborne: The Card Game

## Scope and disposition

- Claim: This record covers CMON's English 2016 standalone game for three to five players and excludes The Hunter's Nightmare expansion.
  Source: src-001, src-003
  Evidence: "The CMON product line identifies the standalone title and its 3–5-player component manifest; BGG item 195856 identifies the 2016 release."
  Confidence: high

- Claim: The record is not verified because an actual CMON-hosted rulebook/support document and a closed inventory of rule-bearing card text were not retrieved.
  Source: src-001, src-002
  Evidence: "The live CMON page's Rules & More area exposes no downloadable rules, while the inspected 16-page copy is hosted and metadata-stamped by a third party."
  Confidence: high

- Claim: This is not treated as a deck-building game for coverage arithmetic.
  Source: src-002
  Evidence: "Rulebook pp. 5, 12–14: every hunter begins with the same five-card set, played cards remain visible in a used pile, Hunter's Dream returns that pile to hand, and upgrades are added permanently to a hand capped at seven; there is no draw deck or reshuffle cycle for each player."
  Confidence: high

## Records

- [Sources and retrieval ledger](sources.okf.md)
- [Scout report and governing-source gap](scout-report.okf.md)
- [Components and setup](rules/setup.okf.md)
- [Round structure](rules/turn-structure.okf.md)
- [Actions, combat, and damage](rules/actions.okf.md)
- [Hunter's Dream and progression](rules/hunters-dream-progression.okf.md)
- [Scoring and endgame](rules/scoring-endgame.okf.md)
- [FAQ and edge cases](rules/edge-cases-faq.okf.md)
- [Independent reviews](reception/reviews.okf.md)
- [Evidence-backed better-if notes](reception/better-if.okf.md)
- [Visual packet](visuals/packet.okf.md)
