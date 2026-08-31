---
okf_version: 0.2
type: sources
game:
  title: "Hoplomachus: Remastered"
  slug: "hoplomachus-remastered"
  bgg_id: 338434
  publisher: "Chip Theory Games"
  year: 2022
  weight: null
  edition: "Remastered core game"
scope: "base game"
mechanics: [cooperative-game, deck-bag-and-pool-building, dice-rolling, hand-management, variable-player-powers, solo-solitaire-game]
sources:
  - id: "src-001"
    title: "BoardGameGeek — Hoplomachus: Remastered"
    url: "https://boardgamegeek.com/boardgame/338434/hoplomachus-remastered"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-11"
    notes: "BGG discovery and mechanism classification; direct page returned HTTP 403 in this run."
  - id: "src-002"
    title: "Chip Theory Games — Hoplomachus: Remastered"
    url: "https://chiptheorygames.com/products/hoplomachus-remastered"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-11"
    notes: "Official product page."
  - id: "src-003"
    title: "Chip Theory Games — Hoplomachus support and downloads"
    url: "https://chiptheorygames.com/pages/support/hoplomachus"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-11"
    notes: "Official page linked the Remastered rulebook and FAQ."
  - id: "src-004"
    title: "Hoplomachus: Remastered Rulebook"
    url: "https://www.dropbox.com/scl/fi/jr3vnbix2w3bjjpj7jojp/HRemastered-Rulebook.pdf?rlkey=5ogucfycaqggibhdkgfbt6529&e=1&dl=0"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-11"
    notes: "96.8 MB PDF retrieved with curl and text-extracted with pdftotext."
  - id: "src-005"
    title: "Meeple Mountain — Hoplomachus: Remastered"
    url: "https://www.meeplemountain.com/boardgame/hoplomachus-remastered/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-11"
    notes: "Reports BGG Geek Rating 8.03885."
  - id: "src-006"
    title: "Chip Theory Games — Hoplomachus FAQs"
    url: "https://support.chiptheorygames.com/support/solutions/33000133541"
    kind: faq
    provenance: official
    retrieved_at: "2026-08-31"
    notes: "Official FAQ tree enumerated in the 2026-08-31 librarian pass; the deferred extraction is resolved. Categories cover errata, skill questions, Victorum, Remastered, and legacy Hoplomachus titles; the Remastered Specific Qs category holds exactly two articles."
  - id: "src-007"
    title: "Chip Theory Games FAQ — Remastered Errata: Depthcharger's Tactician Skill"
    url: "https://support.chiptheorygames.com/support/solutions/articles/33000277388-remastered-errata-depthcharger-s-tactician-skill"
    kind: errata
    provenance: official
    retrieved_at: "2026-08-31"
    notes: "First-print Remastered errata; retrieved in the 2026-08-31 librarian pass."
  - id: "src-008"
    title: "Chip Theory Games FAQ — Remastered Errata: Scheherazade HP chips"
    url: "https://support.chiptheorygames.com/support/solutions/articles/33000278192-remastered-errata-scheherazade-hp-chips"
    kind: errata
    provenance: official
    retrieved_at: "2026-08-31"
    notes: "First-print Remastered component-shortfall errata; retrieved in the 2026-08-31 librarian pass."
  - id: "src-009"
    title: "Chip Theory Games FAQ — Skirmish: Do inactive heroes count as units in your camp?"
    url: "https://support.chiptheorygames.com/support/solutions/articles/33000294913-skirmish-do-inactive-heroes-count-as-units-in-your-camp-no-"
    kind: faq
    provenance: official
    retrieved_at: "2026-08-31"
    notes: "Remastered-specific ruling; retrieved in the 2026-08-31 librarian pass."
  - id: "src-010"
    title: "Chip Theory Games FAQ — Shaghad Shards Out of HP"
    url: "https://support.chiptheorygames.com/support/solutions/articles/33000284491-shaghad-shards-out-of-hp"
    kind: faq
    provenance: official
    retrieved_at: "2026-08-31"
    notes: "Remastered-specific titan ruling; retrieved in the 2026-08-31 librarian pass."
confidence: high
status: verified
---

## Summary

The publisher supplied the operative rulebook and FAQ paths. BGG was available through search snippets for classification, while its direct page and XML API rejected automated retrieval.

## Source-backed facts

- Claim: The publisher support page links the Remastered rulebook and an official FAQ.
  Source: src-003
  Evidence: download labeled "Hoplomachus: Remastered Rulebook" and button labeled "Hoplomachus FAQs".
  Confidence: high
- Claim: The rulebook was successfully retrieved and text-extracted.
  Source: src-004
  Evidence: local curl retrieval returned a PDF and `pdftotext` produced 2,054 lines.
  Confidence: high
- Claim: A secondary page reports a BGG Geek Rating of 8.03885.
  Source: src-005
  Evidence: "BGG Geek Rating: 8.03885".
  Confidence: medium

## Open questions

- Current BGG average rating, rank, and weight were not independently retrieved because the page/API returned 403/401.