---
okf_version: 0.1
type: scout_report
game:
  title: "Ark Nova"
  slug: "ark-nova"
  bgg_id: 342942
  publisher: "Feuerland Spiele / Capstone Games"
  year: 2021
  edition: "English base game, Capstone current web resources"
scope: "base game"
sources:
  - id: "src-001"
    title: "Ark Nova | Board Game | BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/342942/ark-nova"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-01"
    notes: "Primary discovery layer."
  - id: "src-002"
    title: "Ark Nova product page"
    url: "https://capstone-games.com/products/ark-nova"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-01"
    notes: "Official publisher and resource page."
  - id: "src-003"
    title: "Ark Nova Rulebook PDF"
    url: "https://cdn.shopify.com/s/files/1/0947/3907/1278/files/Ark-Nova-Rulebook.pdf?v=1754428544"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-01"
    notes: "Official rulebook verified via HTTP 200 application/pdf."
  - id: "src-004"
    title: "Ark Nova FAQ v2 PDF"
    url: "https://cdn.shopify.com/s/files/1/0947/3907/1278/files/Ark-Nova-FAQ-v2.pdf?v=1754428544"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-01"
    notes: "Official FAQ and errata."
  - id: "src-005"
    title: "Ark Nova Glossary PDF"
    url: "https://cdn.shopify.com/s/files/1/0947/3907/1278/files/Ark-Nova-Glossary.pdf?v=1754428544"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-01"
    notes: "Official glossary."
  - id: "src-006"
    title: "Ark Nova Icon Overview PDF"
    url: "https://cdn.shopify.com/s/files/1/0947/3907/1278/files/Ark-Nova-Icon-Overview.pdf?v=1754428545"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-01"
    notes: "Official icon reference."
  - id: "src-007"
    title: "Ark Nova Review"
    url: "https://www.boardgamequest.com/ark-nova-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-01"
    notes: "Reception and critique."
  - id: "src-008"
    title: "Ark Nova – a solo review"
    url: "https://stidjenplayssolo.wordpress.com/2023/04/20/ark-nova-a-solo-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-01"
    notes: "Solo and randomness critique."
  - id: "src-009"
    title: "Ark Nova Board Game Review"
    url: "https://www.tabletopgaming.co.uk/reviews/ark-nova-board-game-review"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-01"
    notes: "Reception and design critique."
confidence: high
status: verified
---

## Summary

Chosen game: Ark Nova. Reason: not already present in the BoardGames KB, extreme BGG signal, official rules available, and high SomberSoft relevance across card play, spatial construction, action timing, solo mode, contracts, icon systems, and endgame race design.

## Source-backed facts

- Claim: Ark Nova was not already present before this run; existing game directory discovered was Dune: Imperium.
  Source: local filesystem
  Evidence: Initial file search under `KnowledgeBase/BoardGames/games` returned only `dune-imperium` files.
  Confidence: high
- Claim: Official rulebook was found and verified.
  Source: src-003
  Evidence: HTTP check returned `200 application/pdf 9526618`; `pdftotext` extracted 1234 lines.
  Confidence: high
- Claim: BGG reception signal is high.
  Source: src-001
  Evidence: "Overall: #2 · Strategy: #2"; "BGG Rating 8.5"; "62K ratings".
  Confidence: high
- Claim: Official FAQ, glossary, and icon overview are hosted from Capstone-linked Shopify CDN resources.
  Source: src-002
  Evidence: Capstone Resources list included "FAQ", "Glossary", and "Icon Overview" links.
  Confidence: high

## Rules / Mechanics

Strongest rule lesson: the five-card action row is a low-component timing engine that makes cooldown, action strength, and tempo legible. It supports a heavy card/spatial strategy game without requiring round phases.

## Player friction

Strongest reception complaint: the large card deck creates tactical adaptation but can frustrate strategic planning when needed cards never appear.

## Praised design

Reviewers repeatedly praise the action-card slot mechanism, replayability from card variety, and the way mechanisms combine into a compelling tactical euro.

## Better-if opportunities

Top 3:
1. randomness / strategic depth: add more deck churn, market access, or strategic card search valves.
2. scoring/endgame: make final scoring and trigger timing executable without rulebook lookup.
3. downtime / turn pacing: redesign or constrain the 4-player experience; community and reviewers favor lower counts.

## Design implications for SomberSoft

Ark Nova is a case study in governing abundance. It has many cards, icons, subsystems, and spatial constraints, yet remains beloved because one central mechanism gives players a constant tactical heartbeat. Our designs can carry breadth if the player always knows what lever they are pulling now and why waiting might matter.

## Open questions

- Future scout should compare Ark Nova to Sanctuary, its listed reimplementation, to see what was streamlined.
- Future scout should inspect expansion reception for whether Marine Worlds resolves randomness or adds expansion bloat.

## Verification notes

Minimum required files were written under `KnowledgeBase/BoardGames/games/ark-nova/`. File listing was verified after write.
