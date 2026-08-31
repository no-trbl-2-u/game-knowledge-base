---
okf_version: 0.2
type: sources
game:
  title: "Heroes of Terrinoth"
  slug: "heroes-of-terrinoth"
  bgg_id: 254591
  publisher: "Fantasy Flight Games"
  year: 2018
  weight: 2.50
  edition: "English base game"
scope: "base game"
mechanics: [action-retrieval, cooperative-game, dice-rolling, solo-solitaire-game, variable-player-powers]
sources:
  - id: "src-001"
    title: "BoardGameGeek — Heroes of Terrinoth"
    url: "https://boardgamegeek.com/boardgame/254591/heroes-of-terrinoth"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-18"
    notes: "Discovery source; direct page returned HTTP 403 and XML API returned HTTP 401."
  - id: "src-002"
    title: "BoardGameMatcher — Heroes of Terrinoth"
    url: "https://boardgamematcher.com/game/heroes-of-terrinoth"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-18"
    notes: "Accessible BGG-derived metadata and mechanism summary."
  - id: "src-003"
    title: "Fantasy Flight Games — Heroes of Terrinoth"
    url: "https://www.fantasyflightgames.com/en/products/heroes-of-terrinoth/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-18"
    notes: "Official product page identified through search; direct fetch returned HTTP 403."
  - id: "src-004"
    title: "Heroes of Terrinoth Rulebook"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/8d/47/8d47fe13-7308-4950-9cb1-eaae3c361223/ter01_rulebook.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-18"
    notes: "16-page publisher-hosted PDF; created 2018-11-09; pdftotext produced 2,129 lines."
  - id: "src-005"
    title: "Co-op Board Games — Heroes of Terrinoth Review"
    url: "https://coopboardgames.com/cooperative-board-game-reviews/heroes-of-terrinoth-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-18"
    notes: "Review based on five plays, with rules overview, pros, and cons."
  - id: "src-006"
    title: "iSlaytheDragon — Review: Heroes of Terrinoth"
    url: "https://islaythedragon.com/game-reviews/review-heroes-of-terrinoth/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-18"
    notes: "Detailed review emphasizing simplicity, repetition, progression, and cooperative table feel."
  - id: "src-007"
    title: "Board Game Quest — Heroes of Terrinoth Review"
    url: "https://www.boardgamequest.com/heroes-of-terrinoth-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-08-31"
    notes: "Retrieved and extracted in the 2026-08-31 librarian pass; the 2026-07-18 bot-verification interstitial is resolved. Reviewer score 4 stars."
confidence: high
status: verified
---

## Summary

The operative rules source is the publisher-hosted 16-page PDF. Two full secondary reviews provide independent reception evidence. BGG and the publisher landing page were useful discovery locators but blocked direct automated retrieval; BGG-derived metadata was cross-checked through BoardGameMatcher.

## Source-backed facts

- Claim: The official rulebook was retrieved and inspected successfully.
  Source: src-004
  Evidence: PDF metadata reports 16 pages; text extraction produced 2,129 lines.
  Confidence: high
- Claim: The reception sample includes at least two independent detailed reviews.
  Source: src-005, src-006
  Evidence: Both fetched pages contained full gameplay assessment and explicit positive/negative judgments.
  Confidence: high
- Claim: Current BGG-derived metadata remains secondary rather than direct.
  Source: src-001, src-002
  Evidence: BGG blocked retrieval; BoardGameMatcher exposed rating, rank, weight, and mechanisms.
  Confidence: medium

## Open questions

- Direct BGG comments and current statistics need a browser-accessible recheck.
- An official FAQ/errata locator was not found in this pass.