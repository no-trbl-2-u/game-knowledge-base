---
okf_version: 0.2
type: sources
game:
  title: "Dune: Imperium — Uprising"
  slug: "dune-imperium-uprising"
  bgg_id: 397598
  publisher: "Dire Wolf"
  year: 2023
  weight: null
  edition: "English standalone game, 2023 first printing"
scope: "base game"
mechanics: [deck-building, worker-placement, hand-management, multi-use-cards, force-commitment, race, variable-player-powers, hidden-information]
sources:
  - id: "src-001"
    title: "Dune: Imperium - Uprising — Dire Wolf Digital product page"
    url: "https://www.direwolfdigital.com/dune-imperium-uprising/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-10-15"
    notes: "Retrieved 200; final URL stable in this observation; receipt SHA-256 73f959fd0692d3d56aa8d99d809b0feb27452157a83638066b83746ab82f85f2."
  - id: "src-002"
    title: "DUNE_IMPERIUM_UPRISING Main Rulebook"
    url: "https://d19y2ttatozxjp.cloudfront.net/pdfs/DUNE_IMPERIUM_UPRISING_Main_Rulebook_23-10-12.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-15"
    notes: "Retrieved 200; 11,877,612 bytes; SHA-256 0a8daa36f73c09316143d05bbd5d845183d1ae6f56ce211d93c59b360074f7db."
  - id: "src-003"
    title: "Review – ‘Dune: Imperium – Uprising’ — Dune News Net"
    url: "https://dunenewsnet.com/2024/03/review-dune-imperium-uprising-board-game/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-15"
    notes: "Retrieved 200; independent review; observed receipt SHA-256 5c3ab63ab257b419dc2e806f326d14fcef929dda0f906821e5c0f30a7e2f5f90."
  - id: "src-004"
    title: "Dune: Imperium Uprising Review: Spies, Sandworms, and More Complexity — Ryan Board Games"
    url: "https://ryanboardgames.com/reviews/dune-imperium-uprising-review"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-15"
    notes: "Retrieved 200; independent review; observed receipt SHA-256 0fd0b6a5b9a9b40da62134b1fdc06ab209d11f5d27a9b8dd521d68cec27da174."
  - id: "src-005"
    title: "Dune: Imperium - Uprising box image — Dire Wolf Digital"
    url: "https://d19y2ttatozxjp.cloudfront.net/assets/dune/uprising_box.webp"
    kind: other
    provenance: official
    retrieved_at: "2026-10-15"
    notes: "Visual receipt; source bytes SHA-256 8adf6759830a1a933419b517bfb83bc5274fa9017a9d14ea006c576f93d5c334."
  - id: "src-006"
    title: "Dune: Imperium - Uprising board image — Dire Wolf Digital"
    url: "https://d19y2ttatozxjp.cloudfront.net/assets/dune/uprising_board.webp"
    kind: other
    provenance: official
    retrieved_at: "2026-10-15"
    notes: "Visual receipt; source bytes SHA-256 7081380cd739358906e9f3aee89b81da64d465840e200808782c0cf5328b9d19."
  - id: "src-007"
    title: "Dune: Imperium - Uprising card spread — Dire Wolf Digital"
    url: "https://d19y2ttatozxjp.cloudfront.net/assets/dune/uprising_cardspread_3.png"
    kind: other
    provenance: official
    retrieved_at: "2026-10-15"
    notes: "Visual receipt; source bytes SHA-256 823f1e619317943f825a02aed15b050253dbb209e54bafc3f40f0e97b42093df."
  - id: "src-008"
    title: "Dune: Imperium - Uprising six-player mode image — Dire Wolf Digital"
    url: "https://d19y2ttatozxjp.cloudfront.net/assets/dune/uprising_6player.webp"
    kind: other
    provenance: official
    retrieved_at: "2026-10-15"
    notes: "Visual receipt; source bytes SHA-256 802da8a54b1a04e07cc832dd411def2b530bb4961d53515bcb852723a3017c1c."
confidence: high
status: verified
---

## Summary

The packet uses the publisher page for identity, an official CloudFront PDF for governing rules, two independent reviews for reception, and four distinct official product assets for visual analysis. BGG was used only as the wishlist identity lead and was not treated as rules authority or used for an unverified rating/weight claim.

## Source-backed facts

- Claim: The official rules source is a static PDF and its exact observed bytes are retained by hash in the retrieval receipt.
  Source: src-002
  Evidence: The capture receipt records HTTP 200, application/pdf, 11,877,612 bytes, and SHA-256 0a8daa36f73c09316143d05bbd5d845183d1ae6f56ce211d93c59b360074f7db.
  Confidence: high

- Claim: The packet spans at least two non-BGG organizational domains for rules and reception.
  Source: src-001, src-003, src-004
  Evidence: Rules/identity are on Dire Wolf infrastructure; reviews are on Dune News Net and Ryan Board Games.
  Confidence: high

## Open questions

- Dynamic HTML receipts are observed-at records; future audits should verify final URL, publisher identity, cited excerpts, and load-bearing semantics rather than demand wrapper-byte identity.
