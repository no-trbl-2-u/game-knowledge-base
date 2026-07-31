---
okf_version: 0.2
type: game_index
game:
  title: "Betrayal Legacy"
  slug: "betrayal-legacy"
  bgg_id: 240196
  publisher: "Avalon Hill"
  year: 2018
  weight: 2.92
  edition: "English 2018 standalone campaign; compared against Hasbro F3147 support files (2021 footer)"
scope: "edition-specific maintenance gap record"
mechanics: ["campaign-game", "cooperative-game", "dice-rolling", "hidden-information", "legacy-game", "modular-board", "semi-cooperative-game", "tile-placement", "variable-player-powers"]
better_if_labels: []
sources:
  - id: "src-001"
    title: "BoardGameGeek item 240196 metadata"
    url: "https://api.geekdo.com/api/geekitems?objectid=240196&objecttype=thing"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; application/json; 22,212 bytes; SHA-256 6a04adef1a5c313490f216a54509775872be8f973d3dd64283c0d4b19e2462d7. Identifies the 2018 item and 3-5 players."
  - id: "src-002"
    title: "Hasbro F3147 Betrayal Legacy product and instructions page"
    url: "https://instructions.hasbro.com/en-us/instruction/avalon-hill-betrayal-legacy-role-playing-haunted-narrative-board-game"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; text/html; 1,376,834 bytes; SHA-256 a10d44315499200a6be82486510e7c5d88f469c72f58c10daf39575bcf14ac4a. Page labels SKU F3147, 3-6 players, and a 2021-era component manifest."
  - id: "src-003"
    title: "Hasbro F3147 English rules, haunt books, and Bleak Journal PDF"
    url: "https://instructions.hasbro.com/api/download/F3147_en-us_avalon-hill-betrayal-legacy-role-playing-haunted-narrative-board-game.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; application/pdf; 11,278,257 bytes; 84 PDF pages; SHA-256 5c558dacdc495c13ff5ae7d36db4a2dc8ced0e02e39b156d0075c9de4b4a60c9. PDF contains Rules (PDF pp.1-13), Secrets of Survival (14-45), Traitor's Tome (46-67), and Bleak Journal (68-84); footer includes 2021 Hasbro text while internal art carries 2018 Wizards notices."
  - id: "src-004"
    title: "BGG current rating and weight endpoint for item 240196"
    url: "https://api.geekdo.com/api/dynamicinfo?objecttype=thing&objectid=240196"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-31"
    notes: "HTTP 200; application/json; 1,320 bytes; SHA-256 2de95578dab17719c1afebc8cfab65868f443eea9877f170411bccfdec9f1694. Snapshot: average 7.64209 from 5,413 ratings; weight 2.9231 from 91 votes."
confidence: medium
status: needs_followup
last_verified: "2026-07-31"
summary: "A spoiler-bounded, source-backed maintenance record whose general and haunt books are acquired, but whose exact 2018 printing equivalence and concealed campaign-control materials remain unproven."
---

# Betrayal Legacy

Betrayal Legacy is a standalone campaign implementation of the Betrayal system. This record is intentionally **not verified**: Hasbro currently serves a complete 84-page F3147 book bundle, but its product metadata and footer conflict with the 2018 BGG edition on player count and apparent printing date, while the Legacy decks, Purgatory deck, Folium Infernum rule stickers, sealed box, and sealed envelope are not exposed as complete official digital readouts.

- Claim: BGG item 240196 identifies Betrayal Legacy as a 2018 game for 3-5 players.
  Source: src-001
  Evidence: "yearpublished: 2018; minplayers: 3; maxplayers: 5"
  Confidence: high

- Claim: Hasbro's current official support record is SKU F3147 and advertises 3-6 players, so exact first-print equivalence cannot be assumed.
  Source: src-002, src-003
  Evidence: "Avalon Hill (F3147)" and "For 3 to 6 Players"; the PDF footer states "© 2021 Hasbro."
  Confidence: high

- Claim: The community complexity snapshot is 2.9231 from 91 weight votes.
  Source: src-004
  Evidence: "avgweight: 2.9231; numweights: 91"
  Confidence: high

## Corpus map

- [Sources and retrieval ledger](sources.okf.md)
- [Coverage and blocker report](scout-report.okf.md)
- [Rules overview](rules/overview.okf.md)
- [Setup and components](rules/setup-components.okf.md)
- [Exploration and turn structure](rules/turn-structure.okf.md)
- [Actions, checks, and combat](rules/actions-checks-combat.okf.md)
- [Haunt and campaign transitions](rules/haunt-campaign-transitions.okf.md)
- [Endgame and post-campaign play](rules/scoring-endgame-post-campaign.okf.md)
- [FAQ and edge cases](rules/edge-cases-faq.okf.md)
- [Independent reviews](reception/reviews.okf.md)
- [Better-if analysis](reception/better-if.okf.md)
- [Visual evidence packet](visuals/packet.okf.md)
