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
    notes: "Dated dynamic proxy receipt returned HTTP 200 and displayed Rules & More → Rulebook → 79.01 MB; direct HTML remained Cloudflare-blocked."
  - id: "src-002"
    title: "CMON — Bloodborne: The Card Game Rulebook"
    url: "https://cmon-files.s3.amazonaws.com/pdf/assets_item/resource/43/Bloodborne_Rulebook__2_.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Official CMON S3 object; HTTP 200; 92,484,273 bytes; 16 pages; SHA-256 e5010bc06faf0a4fc05b70228836401825a123c4dad0459233edcd318b664b38."
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

- Claim: The official CMON-hosted rulebook is acquired, but the record remains `needs_followup` because complete text for five rule-bearing card classes and a closed publisher-wide FAQ, errata, clarification, and support inventory are not acquired.
  Source: src-001, src-002
  Evidence: "The exact 16-page CMON S3 rulebook is verified and the current Rules & More surface lists it; neither source supplies an exhaustive base-game card-text corpus or publisher-wide support inventory."
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
