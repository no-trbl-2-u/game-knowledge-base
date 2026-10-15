---
okf_version: 0.2
type: rule_category
game:
  title: "Pandemic Legacy: Season 1"
  slug: "pandemic-legacy-season-1"
  bgg_id: 161936
  publisher: "Z-Man Games"
  year: 2015
  weight: null
  edition: "English retail edition; blue/red rulebooks; source PDF ©2015, 2018"
scope: "base game"
mechanics: [action-points, campaign-game, cooperative-game, hand-management, hidden-information, legacy-game, set-collection, variable-player-powers]
sources:
  - id: "src-001"
    title: "BoardGameGeek API identity — Pandemic Legacy: Season 1"
    url: "https://api.geekdo.com/api/geekitems?objectid=161936&objecttype=thing"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-10-15"
    notes: "HTTP 200, application/json, 53,047 bytes, SHA-256 8a02a7dd873a9d9c1f52055b5b3238391cf8e70e6bf75130f63076d8c8fdcea3; item objectid/id 161936 and canonical_link identify the game."
  - id: "src-002"
    title: "Pandemic Legacy: Season 1 English rulebook — Z-Man Games"
    url: "https://cdn.svc.asmodee.net/production-zman/uploads/2024/09/zm7170_zm7171_rules_web.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-14"
    notes: "Official turn sequence authority."
confidence: high
status: verified
---

## Turn structure

- Claim: Each player turn has three steps: do four actions, draw two Player cards, and infect cities.
  Source: src-002
  Evidence: Rulebook p. 7 lists the three steps in that order.
  Confidence: high

- Claim: The active player may select any combination of the listed actions and may repeat an action, counting each use separately.
  Source: src-002
  Evidence: Rulebook p. 7 says players may do up to four actions and may select any combination, repeating actions as desired.
  Confidence: high

- Claim: After the active player's infection step and discard handling, the player on the left begins the next turn.
  Source: src-002
  Evidence: Rulebook p. 13's Turn End section passes play to the player on the left after infecting cities and discarding Infection cards.
  Confidence: high
