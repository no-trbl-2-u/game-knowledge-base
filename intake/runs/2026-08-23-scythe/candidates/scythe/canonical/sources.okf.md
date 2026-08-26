---
okf_version: 0.2
type: sources
game:
  title: "Scythe"
  slug: "scythe"
  bgg_id: 169786
  publisher: "Stonemaier Games"
  year: 2016
  weight: null
  edition: "Stonemaier Games base game; claims bounded to current publisher product/rules pages"
scope: "base game"
mechanics: [area-majority-influence, engine-building, variable-player-powers, resource-management, grid-movement, action-selection]
sources:
  - id: "src-001"
    title: "Stonemaier Games — Scythe product page"
    url: "https://stonemaiergames.com/games/scythe/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-08-26"
    notes: "HTTP 200 HTML receipt; product identity, mechanism, player count, duration, components, and interaction description."
  - id: "src-002"
    title: "Stonemaier Games — Scythe rules page"
    url: "https://stonemaiergames.com/games/scythe/rules/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-08-26"
    notes: "HTTP 200 HTML receipt; publisher base-game rules collection."
  - id: "src-003"
    title: "Board Game Quest — Scythe Review REST receipt"
    url: "https://www.boardgamequest.com/wp-json/wp/v2/posts/44352"
    kind: review
    provenance: secondary
    retrieved_at: "2026-08-23"
    notes: "HTTP 200 JSON receipt; independent review dated 2021-07-01, including onboarding and early-star-race testimony."
  - id: "src-004"
    title: "Board Game Quest — Scythe review header photograph"
    url: "https://www.boardgamequest.com/wp-content/uploads/2021/06/Scythe-Header.jpg"
    kind: image
    provenance: secondary
    retrieved_at: "2026-08-23"
    notes: "Source asset receipt; SHA-256 17a9c2745eceaba2b2d261bcec95b1187c343a508343637beed320db9fcf9507."
  - id: "src-005"
    title: "Board Game Quest — Scythe player board photograph"
    url: "https://www.boardgamequest.com/wp-content/uploads/2021/06/Scythe-Player-Board.jpg"
    kind: image
    provenance: secondary
    retrieved_at: "2026-08-23"
    notes: "Source asset receipt; SHA-256 a4f3295ebf68fce02a607d0aeafa4815829a6026a281085ba288b41f53e4f15b."
  - id: "src-006"
    title: "Board Game Quest — Scythe game experience photograph"
    url: "https://www.boardgamequest.com/wp-content/uploads/2021/06/Scythe-Game-Experience.jpg"
    kind: image
    provenance: secondary
    retrieved_at: "2026-08-23"
    notes: "Source asset receipt; SHA-256 3ee581b7ef33105b19df24bb52c6131088b27accdaf459939bcef734503ad69b."

confidence: high
status: verified
---

## Source-backed facts

- Claim: The packet preserves six machine-recorded source receipts spanning publisher authority, an independent review, and three visual assets.
  Source: src-001, src-002, src-003, src-004, src-005, src-006
  Evidence: Each receipt records a final URL, retrieval timestamp, status, content type, byte length, SHA-256, locator, and extracted evidence.
  Confidence: high

- Claim: The independent review domain is separate from the publisher-linked authority domains.
  Source: src-001, src-003
  Evidence: Stonemaier Games supplies the authority records while Board Game Quest supplies the review receipt.
  Confidence: high

## Authority boundary

The packet uses the publisher product and rules pages for a narrow semantic rules inventory. A complete card library, expansion corpus, and exact printing-history inventory are not asserted.
