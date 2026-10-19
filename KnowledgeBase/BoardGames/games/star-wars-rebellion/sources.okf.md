---
okf_version: 0.2
type: sources
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
    notes: "Product identity and support links."
  - id: "src-002"
    title: "Star Wars: Rebellion Learn to Play — Fantasy Flight Games"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/0b/07/0b07601a-6ac3-4333-ac41-b6d1b9a979da/sw03_learn_to_play_web.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-19"
    notes: "Official governing rules; HTTP 200 and SHA-256 recorded in evidence.json."
  - id: "src-003"
    title: "Star Wars: Rebellion Rules Reference — Fantasy Flight Games"
    url: "https://cdn.svc.asmodee.net/production-fantasyflightgames/uploads/2026/09/sw03_rules_reference_web.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-19"
    notes: "Official reference; HTTP 200 and SHA-256 recorded in evidence.json."
  - id: "src-004"
    title: "Star Wars: Rebellion FAQ — Fantasy Flight Games"
    url: "https://cdn.svc.asmodee.net/production-fantasyflightgames/uploads/2026/09/sw03_faq_v2_1.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-10-19"
    notes: "Official FAQ linked from the product page; not used to manufacture an exhaustive rules denominator."
  - id: "src-005"
    title: "Star Wars: Rebellion review — Ars Technica"
    url: "https://arstechnica.com/gaming/2016/03/star-wars-rebellion-review-a-fully-operational-4-hour-board-game/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-19"
    notes: "Independent review; rules overview and reception."
  - id: "src-006"
    title: "Review — Star Wars: Rebellion & Rise of the Empire — Geeks Under Grace"
    url: "https://www.geeksundergrace.com/tabletop/review-star-wars-rebellion/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-19"
    notes: "Independent review; base-game reception and expansion boundary."
  - id: "src-007"
    title: "Ars Technica Star Wars: Rebellion review image — Imperial board"
    url: "https://cdn.arstechnica.net/wp-content/uploads/2016/03/empire-1440x849.jpg"
    asset_url: "https://cdn.arstechnica.net/wp-content/uploads/2016/03/empire-1440x849.jpg"
    kind: image
    provenance: secondary
    retrieved_at: "2026-10-19"
    notes: "Review image; reduced WebP derivative retained for private analysis."
  - id: "src-008"
    title: "Ars Technica Star Wars: Rebellion review image — combat state"
    url: "https://cdn.arstechnica.net/wp-content/uploads/2016/03/IMG_3696-1440x1080.jpg"
    asset_url: "https://cdn.arstechnica.net/wp-content/uploads/2016/03/IMG_3696-1440x1080.jpg"
    kind: image
    provenance: secondary
    retrieved_at: "2026-10-19"
    notes: "Review image; reduced WebP derivative retained for private analysis."
  - id: "src-009"
    title: "Ars Technica Star Wars: Rebellion review image — final state"
    url: "https://cdn.arstechnica.net/wp-content/uploads/2016/03/IMG_3674-e1458956121340-1440x880.jpg"
    asset_url: "https://cdn.arstechnica.net/wp-content/uploads/2016/03/IMG_3674-e1458956121340-1440x880.jpg"
    kind: image
    provenance: secondary
    retrieved_at: "2026-10-19"
    notes: "Review image; reduced WebP derivative retained for private analysis."
  - id: "src-010"
    title: "Ars Technica Star Wars: Rebellion review image — leader pool"
    url: "https://cdn.arstechnica.net/wp-content/uploads/2016/03/leader-pool.jpg"
    asset_url: "https://cdn.arstechnica.net/wp-content/uploads/2016/03/leader-pool.jpg"
    kind: image
    provenance: secondary
    retrieved_at: "2026-10-19"
    notes: "Review image; reduced WebP derivative retained for private analysis."
confidence: high
status: verified
---

## Source register

The exact retrieval receipts for all ten sources are stored in the sibling `evidence.json`. Static PDFs and image assets are recorded with byte lengths and SHA-256 values. The full rulebooks and source-resolution images are not copied into the repository.

- Claim: Official rules and independent reception are sourced from distinct organizational domains.
  Source: src-001, src-002, src-003, src-004, src-005, src-006
  Evidence: Fantasy Flight Games / Asmodee hosts the official product and rules documents; Ars Technica and Geeks Under Grace host the independent reviews.
  Confidence: high

- Claim: The four visual references are reduced derivatives of distinct Ars Technica review images.
  Source: src-007, src-008, src-009, src-010
  Evidence: Each receipt records a distinct HTTP 200 image retrieval, byte length, and SHA-256; the visual packet records the derivative hashes.
  Confidence: high
