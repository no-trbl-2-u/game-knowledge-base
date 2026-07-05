---
okf_version: 0.2
type: sources
game:
  title: "Ark Nova"
  slug: "ark-nova"
  bgg_id: 342942
  publisher: "Feuerland Spiele / Capstone Games"
  year: 2021
  edition: "English base game, Capstone current web resources"
scope: "base game"
mechanics: [action-selection, hand-management, tableau-building, grid-coverage, tile-placement, set-collection, end-game-bonuses, income, solo-solitaire-game, variable-setup]
sources:
  - id: "src-001"
    title: "Ark Nova | Board Game | BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/342942/ark-nova"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-01"
    notes: "Discovery layer only; not rules authority."
  - id: "src-002"
    title: "Ark Nova product page"
    url: "https://capstone-games.com/products/ark-nova"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-01"
    notes: "Official Capstone page; resource links include rulebook, FAQ, glossary, icon overview, guide, starting deck guide."
  - id: "src-003"
    title: "Ark Nova Rulebook PDF"
    url: "https://cdn.shopify.com/s/files/1/0947/3907/1278/files/Ark-Nova-Rulebook.pdf?v=1754428544"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-01"
    notes: "Official current CDN rulebook."
  - id: "src-004"
    title: "Ark Nova FAQ v2 PDF"
    url: "https://cdn.shopify.com/s/files/1/0947/3907/1278/files/Ark-Nova-FAQ-v2.pdf?v=1754428544"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-01"
    notes: "Official FAQ/errata; used for edge cases."
  - id: "src-005"
    title: "Ark Nova Glossary PDF"
    url: "https://cdn.shopify.com/s/files/1/0947/3907/1278/files/Ark-Nova-Glossary.pdf?v=1754428544"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-01"
    notes: "Official glossary; clarifies card effects and golden rules."
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
    notes: "Board Game Quest review by Brian Biewer, May 31 2022."
  - id: "src-008"
    title: "Ark Nova – a solo review"
    url: "https://stidjenplayssolo.wordpress.com/2023/04/20/ark-nova-a-solo-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-01"
    notes: "Solo-focused review; official solo mode."
  - id: "src-009"
    title: "Ark Nova Board Game Review"
    url: "https://www.tabletopgaming.co.uk/reviews/ark-nova-board-game-review"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-01"
    notes: "Tabletop Gaming review by Jenny Cox, Feb 16 2024."
confidence: high
status: verified
---

## Summary

Source hierarchy satisfied. BGG was used for discovery and reception leads. Official Capstone product page and CDN-hosted rulebook/FAQ/glossary/icon overview were used as rules authority. Reviews were used only as reception evidence.

## Source-backed facts

- Claim: Capstone product page exposes official resources, including FAQ, glossary, icon overview, starting deck guide, and zoo map pack rules.
  Source: src-002
  Evidence: "Resources" list includes "Glossary", "Icon Overview", "Starting Deck Guide for First Game", "FAQ".
  Confidence: high
- Claim: The direct CDN rulebook URL returned HTTP 200 application/pdf and was locally converted to text.
  Source: src-003
  Evidence: Local verification: `application/pdf 9526618`; `pdftotext` produced 1234 lines.
  Confidence: high
- Claim: BGG is secondary for rules and primary here only for discovery/reception metadata.
  Source: src-001
  Evidence: BoardGameGeek page contains ratings, rank, categories, mechanism tags, and publisher description.
  Confidence: high

## Open questions

- Capstone's product page extraction listed "Rulebook" without a direct link; the stable CDN URL was inferred from the same CDN naming pattern and verified by HTTP 200.
