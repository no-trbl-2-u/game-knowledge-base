---
okf_version: 0.2
type: scout_report
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
    notes: "Product receipt."
  - id: "src-002"
    title: "Stonemaier Games — Scythe rules page"
    url: "https://stonemaiergames.com/games/scythe/rules/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-08-26"
    notes: "Rules-page receipt."
  - id: "src-003"
    title: "Board Game Quest — Scythe Review REST receipt"
    url: "https://www.boardgamequest.com/wp-json/wp/v2/posts/44352"
    kind: review
    provenance: secondary
    retrieved_at: "2026-08-23"
    notes: "Independent review receipt."
  - id: "src-004"
    title: "Board Game Quest — Scythe review header photograph"
    url: "https://www.boardgamequest.com/wp-content/uploads/2021/06/Scythe-Header.jpg"
    kind: image
    provenance: secondary
    retrieved_at: "2026-08-23"
    notes: "Visual receipt."
  - id: "src-005"
    title: "Board Game Quest — Scythe player board photograph"
    url: "https://www.boardgamequest.com/wp-content/uploads/2021/06/Scythe-Player-Board.jpg"
    kind: image
    provenance: secondary
    retrieved_at: "2026-08-23"
    notes: "Visual receipt."
  - id: "src-006"
    title: "Board Game Quest — Scythe game experience photograph"
    url: "https://www.boardgamequest.com/wp-content/uploads/2021/06/Scythe-Game-Experience.jpg"
    kind: image
    provenance: secondary
    retrieved_at: "2026-08-23"
    notes: "Visual receipt."

confidence: high
status: verified
---

## Scope decision

- Claim: This packet covers the released physical Scythe base game and only the claims supported by the retrieved authority surfaces.
  Source: src-001, src-002
  Evidence: The publisher product and rules pages identify the base game and define the narrow authority boundary used here.
  Confidence: high

- Claim: The packet is eligible for the rotating-focus area-control and engine-building request.
  Source: src-001, src-003
  Evidence: The publisher calls Scythe engine-building and competitive; the independent review calls it an economic/area-control/combat classic.
  Confidence: high

## Authority inventory

- Claim: The bounded rules ledger is two retrieved publisher authority surfaces, not a manufactured complete card or expansion denominator.
  Source: src-001, src-002
  Evidence: Both receipts are HTTP 200 records with preserved body hashes and cited semantic markers; excluded material is named in the evidence ledger.
  Confidence: medium

## Reception and visual evidence

- Claim: Independent reception documents a potential snowball and onboarding pressure.
  Source: src-003
  Evidence: The reviewer says seasoned players can work out the quickest way to get stars early and that new players will suffer against seasoned veterans.
  Confidence: high

- Claim: The reduced visual packet contains three distinct non-substitutive tabletop views.
  Source: src-004, src-005, src-006
  Evidence: Same-turn contact-sheet inspection found a wide component/player-area view, a close player-mat/action view, and a map/territory view; none is replacement-quality for a rulebook or complete card library.
  Confidence: high

## Known limits

- Claim: The packet does not claim a universal runaway-leader result or the absence of every catch-up effect.
  Source: src-003
  Evidence: The cited wording is one reviewer's testimony about early-star efficiency and new-player disadvantage, not a controlled balance study.
  Confidence: high
