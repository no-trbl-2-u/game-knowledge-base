---
okf_version: 0.2
type: scout_report
game:
  title: "Star Wars: Rebellion"
  slug: "star-wars-rebellion"
  bgg_id: 187645
  publisher: "Fantasy Flight Games"
  year: 2016
  weight: null
  edition: "English base game, 2016 release"
scope: "base game"
mechanics: [action-selection, area-movement, campaign-game, card-play-conflict-resolution, dice-rolling, hand-management, hidden-information, point-to-point-movement, race, variable-player-powers, variable-setup]
sources:
  - id: "src-001"
    title: "Star Wars: Rebellion official product page — Fantasy Flight Games"
    url: "https://www.fantasyflightgames.com/product/star-wars-rebellion/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-10-19"
    notes: "Official product page and support locator."
  - id: "src-002"
    title: "Star Wars: Rebellion Learn to Play — Fantasy Flight Games"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/0b/07/0b07601a-6ac3-4333-ac41-b6d1b9a979da/sw03_learn_to_play_web.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-19"
    notes: "Official governing rules receipt."
  - id: "src-003"
    title: "Star Wars: Rebellion Rules Reference — Fantasy Flight Games"
    url: "https://cdn.svc.asmodee.net/production-fantasyflightgames/uploads/2026/09/sw03_rules_reference_web.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-19"
    notes: "Official rules-reference receipt."
  - id: "src-004"
    title: "Star Wars: Rebellion FAQ — Fantasy Flight Games"
    url: "https://cdn.svc.asmodee.net/production-fantasyflightgames/uploads/2026/09/sw03_faq_v2_1.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-10-19"
    notes: "Official FAQ receipt."
  - id: "src-005"
    title: "Star Wars: Rebellion review — Ars Technica"
    url: "https://arstechnica.com/gaming/2016/03/star-wars-rebellion-review-a-fully-operational-4-hour-board-game/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-19"
    notes: "Independent review receipt."
  - id: "src-006"
    title: "Review — Star Wars: Rebellion & Rise of the Empire — Geeks Under Grace"
    url: "https://www.geeksundergrace.com/tabletop/review-star-wars-rebellion/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-19"
    notes: "Independent review receipt."
  - id: "src-007"
    title: "Ars Technica Star Wars: Rebellion review image — Imperial board"
    url: "https://cdn.arstechnica.net/wp-content/uploads/2016/03/empire-1440x849.jpg"
    kind: image
    provenance: secondary
    retrieved_at: "2026-10-19"
    notes: "Visual receipt used by the private visual packet."
  - id: "src-008"
    title: "Ars Technica Star Wars: Rebellion review image — combat state"
    url: "https://cdn.arstechnica.net/wp-content/uploads/2016/03/IMG_3696-1440x1080.jpg"
    kind: image
    provenance: secondary
    retrieved_at: "2026-10-19"
    notes: "Visual receipt used by the private visual packet."
  - id: "src-009"
    title: "Ars Technica Star Wars: Rebellion review image — final state"
    url: "https://cdn.arstechnica.net/wp-content/uploads/2016/03/IMG_3674-e1458956121340-1440x880.jpg"
    kind: image
    provenance: secondary
    retrieved_at: "2026-10-19"
    notes: "Visual receipt used by the private visual packet."
  - id: "src-010"
    title: "Ars Technica Star Wars: Rebellion review image — leader pool"
    url: "https://cdn.arstechnica.net/wp-content/uploads/2016/03/leader-pool.jpg"
    kind: image
    provenance: secondary
    retrieved_at: "2026-10-19"
    notes: "Visual receipt used by the private visual packet."
confidence: high
status: verified
followups: []
---

## Summary

This is a ready-for-audit intake packet for the top unchecked eligible physical tabletop wishlist candidate after skipping digital-only leads, excluding Quarriors under standing instruction, and deduplicating Dune: Imperium – Uprising against current `main`. The packet freezes the English base-game boundary, two official governing PDFs, an official FAQ, two independent reviews, and four reduced visual references.

## Source-backed facts

- Claim: The candidate is a released physical tabletop product with an official rules surface outside BGG.
  Source: src-001, src-002, src-003
  Evidence: The Fantasy Flight product page identifies the core game and links the Rules support section; both official PDF endpoints returned HTTP 200 and were recorded with exact bytes and hashes.
  Confidence: high

- Claim: The packet spans at least two non-BGG organizational domains.
  Source: src-001, src-005, src-006
  Evidence: Official material is hosted by Fantasy Flight Games / Asmodee; independent reception is hosted by Ars Technica and Geeks Under Grace.
  Confidence: high

- Claim: No exhaustive component denominator is claimed.
  Source: src-001, src-005, src-007, src-008, src-009, src-010
  Evidence: The official page gives a broad “more than 150 plastic miniatures” statement and the review supplies observed component imagery, but no complete component inventory was retrieved; the manifest leaves the factual denominator null.
  Confidence: high

## Retrieval notes

The product page was retrieved in a browser and by the repository receipt tool. The official Learn to Play PDF, Rules Reference PDF, and FAQ PDF were fetched as static artifacts; exact byte lengths and SHA-256 hashes are preserved in `evidence.json`. Dynamic HTML receipt hashes are retained as observed transport evidence and are not treated as eternal content identity.

## Open questions

- Reopen the official PDFs, FAQ, claims, and four visual derivatives during Mennonite audit.
- Confirm the exact edition relationship between the current support PDFs and the 2016 English base-game printing; no expansion rules are published in this packet.
