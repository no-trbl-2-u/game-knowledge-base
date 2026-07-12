---
okf_version: 0.2
type: sources
game:
  title: "Marvel Champions: The Card Game"
  slug: "marvel-champions-the-card-game"
  bgg_id: 285774
  publisher: "Fantasy Flight Games"
  year: 2019
  weight: null
  edition: "core game"
scope: "base game"
mechanics: [cooperative-game, deck-building, hand-management, solo-solitaire-game, variable-player-powers]
sources:
  - id: "src-001"
    title: "BoardGameGeek — Marvel Champions: The Card Game"
    url: "https://boardgamegeek.com/boardgame/285774/marvel-champions-the-card-game"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-12"
    notes: "Discovery and eligibility source; direct page returned HTTP 403 to this runner."
  - id: "src-002"
    title: "Fantasy Flight Games — Marvel Champions product page"
    url: "https://www.fantasyflightgames.com/en/products/marvel-champions-the-card-game/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-12"
    notes: "Official download hub."
  - id: "src-003"
    title: "Marvel Champions Rules Reference v1.5"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/b6/30/b630ddfe-e745-435b-a284-572dd510e15d/mc_rulesreference_v15-compressed.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-12"
    notes: "Located but not fully extracted in this run."
  - id: "src-004"
    title: "Meeple Mountain — Marvel Champions review"
    url: "https://www.meeplemountain.com/reviews/marvel-champions-the-card-game/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-12"
    notes: "Reception lead."
confidence: medium
status: needs_followup
---

## Summary

The official publisher hub and BGG discovery page establish the source path. The official PDF URL was located, but direct extraction and live BGG metadata retrieval require a later retry.

## Source-backed facts

- Claim: The publisher provides official rules downloads.
  Source: src-002
  Evidence: Product page download listings.
  Confidence: high

## Open questions

- Retrieve the current v1.7 Rules Reference advertised by the publisher page.
- Capture live BGG rating, rank, weight, and mechanism fields.