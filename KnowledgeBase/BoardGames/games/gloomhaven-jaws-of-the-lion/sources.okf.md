---
okf_version: 0.2
type: sources
game:
  title: "Gloomhaven: Jaws of the Lion"
  slug: "gloomhaven-jaws-of-the-lion"
  bgg_id: null
  publisher: "Cephalofair Games"
  year: null
  weight: null
  edition: "English standalone product-page edition; printed edition not established"
scope: "base game"
mechanics: [campaign-game, cooperative-game, hand-management, grid-movement, variable-player-powers, simultaneous-action-selection, legacy-game]
sources:
  - id: "src-001"
    title: "Gloomhaven: Jaws of the Lion — Cephalofair Games product page"
    url: "https://cephalofair.com/products/gloomhaven-jaws-of-the-lion"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-10-19"
    notes: "HTTP 200; 457,830 bytes; SHA-256 d9feb35e10e408c0d95d8baad5699d76f256370eb1b0d72f1d6cd3f6cc1ea9e6."
  - id: "src-002"
    title: "Gloomhaven JotL Learn to Play Guide"
    url: "https://drive.usercontent.google.com/download?id=1nhg_PpeXLq0vpN-1uQqsrAFzFIAlxQVX&export=download&confirm=t"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-19"
    notes: "HTTP 200; 31-page PDF; 39,670,977 bytes; SHA-256 241b65d655c616ef2910192642e9eebe8ca88fb7d0456c126d5d0dc5ff7f54cd."
  - id: "src-003"
    title: "Gloomhaven: Jaws of the Lion Review — Board Game Quest"
    url: "https://www.boardgamequest.com/gloomhaven-jaws-of-the-lion-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-19"
    notes: "HTTP 200; 208,203 bytes; SHA-256 f14c7a3da4eba3ad9bd86df448bf06ad91bc08f038cbc66b51b6804eeb8db2a4."
  - id: "src-004"
    title: "Gloomhaven: Jaws of the Lion box image — Cephalofair Games"
    url: "https://cephalofair.com/cdn/shop/files/JawsOfTheLion_GRY_2048.jpg?v=1780958549&width=2048"
    kind: other
    provenance: official
    retrieved_at: "2026-10-19"
    notes: "Visual source; JPEG receipt SHA-256 fbb2e24d5670355ccef8107e978f14463c6c56abeb806a010d0b97916088b600."
  - id: "src-005"
    title: "Gloomhaven: Jaws of the Lion miniatures image — Cephalofair Games"
    url: "https://cephalofair.com/cdn/shop/products/jaws-of-the-lion-creative-20.jpg?v=1756477712&width=1200"
    kind: other
    provenance: official
    retrieved_at: "2026-10-19"
    notes: "Visual source; JPEG receipt SHA-256 3f8d405347acc8f5d64e869dda938902b84c02ecd09416bc4c0342c2e8a0a342."
  - id: "src-006"
    title: "Gloomhaven: Jaws of the Lion tabletop image — Cephalofair Games"
    url: "https://cephalofair.com/cdn/shop/files/7.jpg?v=1778700115&width=1200"
    kind: other
    provenance: official
    retrieved_at: "2026-10-19"
    notes: "Visual source; JPEG receipt SHA-256 9c19ec8497ad6a91e29f42784a7197cdf5ee04ccf49d14a2f737883220499330."
  - id: "src-007"
    title: "Gloomhaven: Jaws of the Lion players image — Cephalofair Games"
    url: "https://cephalofair.com/cdn/shop/files/6.jpg?v=1778700115&width=1200"
    kind: other
    provenance: official
    retrieved_at: "2026-10-19"
    notes: "Visual source; JPEG receipt SHA-256 b2f56998f6d73aa9164dd774f41ff899fb6f984eec2e8c211a2b2d4b81bf8936."
confidence: high
status: verified
---

## Summary

The packet uses the Cephalofair product page for identity and rules-link provenance, the publisher-linked static Learn to Play Guide for governing rules, Board Game Quest for independent reception, and four distinct official product images for visual analysis. BGG remains a discovery lead only because the live page was blocked.

## Source-backed facts

- Claim: The packet spans two non-BGG organizational domains for rules/identity and reception.
  Source: src-001, src-002, src-003
  Evidence: Cephalofair hosts the product and rules link; Board Game Quest hosts the independent review.
  Confidence: high

- Claim: The static rules artifact and visual source bytes have exact retrieval receipts.
  Source: src-002, src-004, src-005, src-006, src-007
  Evidence: Evidence receipts record HTTP status, content type, byte length, and SHA-256 for the PDF and four source images.
  Confidence: high

## Open questions

- The product page and review are dynamic HTML; later audits should verify final URL, source identity, cited excerpts, and load-bearing semantics rather than demand wrapper-byte identity.
- No rating or complexity weight is published because the BGG page was blocked during retrieval.
