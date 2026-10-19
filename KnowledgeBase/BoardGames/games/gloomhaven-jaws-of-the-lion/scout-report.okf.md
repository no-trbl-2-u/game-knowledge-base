---
okf_version: 0.2
type: scout_report
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
    notes: "Identity and rules-link receipt."
  - id: "src-002"
    title: "Gloomhaven JotL Learn to Play Guide"
    url: "https://drive.usercontent.google.com/download?id=1nhg_PpeXLq0vpN-1uQqsrAFzFIAlxQVX&export=download&confirm=t"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-19"
    notes: "Static PDF receipt; 31 pages; exact bytes recorded in evidence.json."
  - id: "src-003"
    title: "Gloomhaven: Jaws of the Lion Review — Board Game Quest"
    url: "https://www.boardgamequest.com/gloomhaven-jaws-of-the-lion-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-19"
    notes: "Independent review receipt."
  - id: "src-004"
    title: "Gloomhaven: Jaws of the Lion box image — Cephalofair Games"
    url: "https://cephalofair.com/cdn/shop/files/JawsOfTheLion_GRY_2048.jpg?v=1780958549&width=2048"
    kind: other
    provenance: official
    retrieved_at: "2026-10-19"
    notes: "Visual receipt."
  - id: "src-005"
    title: "Gloomhaven: Jaws of the Lion miniatures image — Cephalofair Games"
    url: "https://cephalofair.com/cdn/shop/products/jaws-of-the-lion-creative-20.jpg?v=1756477712&width=1200"
    kind: other
    provenance: official
    retrieved_at: "2026-10-19"
    notes: "Visual receipt."
  - id: "src-006"
    title: "Gloomhaven: Jaws of the Lion tabletop image — Cephalofair Games"
    url: "https://cephalofair.com/cdn/shop/files/7.jpg?v=1778700115&width=1200"
    kind: other
    provenance: official
    retrieved_at: "2026-10-19"
    notes: "Visual receipt."
  - id: "src-007"
    title: "Gloomhaven: Jaws of the Lion players image — Cephalofair Games"
    url: "https://cephalofair.com/cdn/shop/files/6.jpg?v=1778700115&width=1200"
    kind: other
    provenance: official
    retrieved_at: "2026-10-19"
    notes: "Visual receipt."
confidence: high
status: verified
---

## Summary

The wishlist-first scout selected Gloomhaven: Jaws of the Lion after excluding Quarriors and deduplicating already-covered Dune: Imperium — Uprising and Star Wars: Rebellion. The result is a one-candidate `ready_for_audit` packet, not a canonical promotion.

## Source-backed facts

- Claim: The packet has an official rules receipt, an independent written review outside the publisher domain, and four source-linked visual receipts.
  Source: src-001, src-002, src-003, src-004, src-005, src-006, src-007
  Evidence: `evidence.json` records the HTTP observations, final URLs, byte lengths, SHA-256 values, and cited locators for each source.
  Confidence: high

- Claim: The official rules artifact is a 31-page Learn to Play Guide and its text was independently inspected with OCR after static-byte capture.
  Source: src-002
  Evidence: `pdfinfo` reported 31 pages and SHA-256 241b65d655c616ef2910192642e9eebe8ca88fb7d0456c126d5d0dc5ff7f54cd; OCR inspection covered pages 1-31.
  Confidence: high

- Claim: The visual packet contains four distinct meaningful reduced WebP references and a contact sheet.
  Source: src-004, src-005, src-006, src-007
  Evidence: The corrected contact sheet was visually inspected first; it shows the box, miniatures with scenario book, overhead card play, and players handling cards and miniatures. Local derivative hashes are recorded in the visual manifest.
  Confidence: high

## Coverage ledger

- Governing rules: recorded 1; known total 1; percent 100. Method: one retrieved official Learn to Play Guide, bounded to its published tutorial scope.
- Factual entries: recorded 24; known total UNKNOWN; percent UNKNOWN. No exhaustive component, scenario, card, rating, or complexity denominator was manufactured.

## Retrieval notes

- BGG discovery URL: `https://boardgamegeek.com/boardgame/291457/gloomhaven-jaws-of-the-lion`; browser retrieval was blocked by Cloudflare. The packet therefore leaves `bgg_id`, year, rating, and weight null.
- The official product-page viewer exposed a Google Drive file; the direct downloaded PDF bytes were captured and hashed. The PDF is scanned/image-heavy, so OCR was used for local inspection and page references remain the authoritative locators.
- Dynamic HTML receipts should be replayed by final URL, source identity, cited excerpt, and semantic markers rather than wrapper-byte equality.

## Open questions

- Retrieve the full Rules Glossary and errata in a later pass if a claim needs them.
- Add independent reception sources if a future audit requires broader corroboration; no current claim depends on an unobserved rating or denominator.
