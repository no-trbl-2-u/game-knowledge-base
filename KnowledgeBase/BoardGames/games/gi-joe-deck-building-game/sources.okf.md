---
okf_version: 0.2
type: sources
game:
  title: "G.I. JOE Deck-Building Game"
  slug: "gi-joe-deck-building-game"
  bgg_id: 343526
  publisher: "Renegade Game Studios"
  year: 2021
  weight: 2.50
  edition: "core set"
scope: "base game"
mechanics: [cooperative-game, deck-building, hand-management, variable-player-powers, solo-solitaire-game, campaign-game]
sources:
  - id: "src-001"
    title: "BoardGameGeek — G.I. JOE Deck-Building Game"
    url: "https://boardgamegeek.com/boardgame/343526/gi-joe-deck-building-game"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-14"
    notes: "Discovery and mechanism source."
  - id: "src-002"
    title: "Renegade Game Studios — G.I. JOE Deck-Building Game"
    url: "https://renegadegamestudios.com/g-i-joe-deck-building-game/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-14"
    notes: "Official product page."
  - id: "src-003"
    title: "G.I. JOE Deck-Building Game Rulebook"
    url: "https://renegadegamestudios.com/content/File%20Storage%20for%20site/Rulebooks/GI%20JOE%20Deck-Builder/GIJ_SKU1_Deck_Builder_Rulebook_LowRez_P2%202021.12.14.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-14"
    notes: "Publisher-hosted 24-page rulebook; extracted successfully."
  - id: "src-004"
    title: "Meeple Mountain — GI JOE Deck-Building Game Review"
    url: "https://www.meeplemountain.com/reviews/gi-joe-deck-building-game/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-14"
    notes: "Reception and BGG Geek Rating signal."
  - id: "src-005"
    title: "Renegade Game Studios — G.I. JOE customer reviews"
    url: "https://renegadegamestudios.com/g-i-joe-deck-building-game/"
    kind: review
    provenance: community
    retrieved_at: "2026-07-14"
    notes: "Product-page customer testimonials."
confidence: high
status: verified
---

## Summary

The publisher page establishes the product scope and the official rulebook supplies the primary rules evidence. BGG is used for discovery and mechanism classification; third-party review material supplies reception context.

## Source-backed facts

- Claim: The official rulebook was retrieved as a 24-page PDF and text extraction succeeded.
  Source: src-003
  Evidence: Publisher-hosted PDF metadata reported 24 pages; extraction completed with pdftotext.
  Confidence: high
- Claim: The publisher page links both the rulebook and FAQ.
  Source: src-002
  Evidence: "Rulebook available here" and "Download the FAQ here."
  Confidence: high
- Claim: Meeple Mountain reports a BGG Geek Rating of 7.67044.
  Source: src-004
  Evidence: "BGG Geek Rating: 7.67044."
  Confidence: medium

## Open questions

The live BGG rank, average rating, and vote count were not directly retrievable because BGG returned HTTP 403/401 to automated page/API requests. The report therefore uses the surfaced Geek Rating rather than inventing current rank data.
