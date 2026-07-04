---
okf_version: 0.1
type: sources
game:
  title: "Dune: Imperium"
  slug: "dune-imperium"
  bgg_id: 316554
  publisher: "Dire Wolf"
  year: 2020
  edition: "English base game"
scope: "base game"
sources:
  - id: "src-001"
    title: "Dune: Imperium — BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/316554/dune-imperium"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-06-30"
    notes: "Discovery layer. Search extraction reported Overall rank 5/6, Strategy rank 7, average 8.4, 57K-59K ratings, 7.4K-7.6K comments, 1-4 players, 60-120 minutes, age 14+, weight about 3.08."
  - id: "src-002"
    title: "Dune: Imperium — Dire Wolf product page"
    url: "https://www.direwolfdigital.com/dune-imperium/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-06-30"
    notes: "Official page; retrieved successfully by terminal, timed out in web_extract."
  - id: "src-003"
    title: "DUNE_IMPERIUM_Rules_2020_10_26.pdf"
    url: "https://d19y2ttatozxjp.cloudfront.net/pdfs/DUNE_IMPERIUM_Rules_2020_10_26.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-06-30"
    notes: "Official English rulebook discovered from publisher resources; downloaded and converted with pdftotext."
  - id: "src-004"
    title: "DUNE_IMPERIUM_FAQ_25-1-13.pdf"
    url: "https://d19y2ttatozxjp.cloudfront.net/pdfs/DUNE_IMPERIUM_FAQ_25-1-13.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-06-30"
    notes: "Official errata and FAQ, last updated January 13, 2025."
  - id: "src-005"
    title: "BG_Dune_Imperium_Board_Spaces_Sheet.pdf"
    url: "https://d19y2ttatozxjp.cloudfront.net/pdfs/BG_Dune_Imperium_Board_Spaces_Sheet.pdf"
    kind: other
    provenance: official
    retrieved_at: "2026-06-30"
    notes: "Official board-space guide/player aid."
  - id: "src-006"
    title: "Dune: Imperium Rulebook and Supplements — BGG file page"
    url: "https://boardgamegeek.com/filepage/210689/dune-imperium-rulebook-and-supplements"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-06-30"
    notes: "BGG file lead by Scarlatch; useful for player complaints about large rulebook/reference sheet format."
  - id: "src-007"
    title: "Dune Imperium Review — Punchboard"
    url: "https://punchboard.co.uk/dune-imperium-board-game-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-06-30"
    notes: "Review/reception lead; search snippet included reader/comment discussion of variant solving a needed issue."
  - id: "src-008"
    title: "Dune Imperium is My Pick from 2020 — There Will Be Games"
    url: "https://therewillbe.games/articles-boardgame-reviews/8630-dune-imperium-is-my-pick-from-2020"
    kind: review
    provenance: secondary
    retrieved_at: "2026-06-30"
    notes: "Review praising hard, impactful decisions and hidden combat uncertainty."
  - id: "src-009"
    title: "Dune: Imperium — Geeky Guide"
    url: "https://www.geeky-guide.com/board-games/dune-imperium"
    kind: review
    provenance: secondary
    retrieved_at: "2026-06-30"
    notes: "Review-style guide noting procedural teaching curve, table-ready logistics, and high-friction social dynamics."
  - id: "src-010"
    title: "Dune: Imperium — Dune goes all Euro and stuff"
    url: "https://douglassun.substack.com/p/dune-imperium-dune-goes-all-euro"
    kind: review
    provenance: secondary
    retrieved_at: "2026-06-30"
    notes: "Review of board game and digital adaptation; search extraction noted AI/faction difficulty and possible Glossu Rabban strength concern."
  - id: "src-011"
    title: "Dune: Imperium App — App Store ratings/reviews"
    url: "https://apps.apple.com/us/app/dune-imperium/id1575414319"
    kind: review
    provenance: secondary
    retrieved_at: "2026-06-30"
    notes: "Digital adaptation reception; search extraction reported 4.9/5 from 4.1K ratings and user complaint about steep learning curve/tutorial coverage."
confidence: high
status: verified
---

## Summary

Source hierarchy satisfied: BGG was used first for discovery; official Dire Wolf resource paths supplied rulebook, FAQ, and board-space references; reviews/player comments supplied reception and better-if leads. No full copyrighted rulebook was mirrored.

## Source-backed facts

- Claim: Official rules were found through Dire Wolf resources rather than relying on BGG file mirrors.
  Source: src-002, src-003, src-004, src-005
  Evidence: Terminal retrieval found links under `https://www.direwolfdigital.com/dune-imperium/resources/` including `DUNE_IMPERIUM_Rules_2020_10_26.pdf`, `DUNE_IMPERIUM_FAQ_25-1-13.pdf`, and board-space sheet.
  Confidence: high
- Claim: The FAQ is current to January 13, 2025.
  Source: src-004
  Evidence: FAQ lines 1-4: "Last Updated January 13, 2025".
  Confidence: high
- Claim: BGG remains secondary for rules but valuable for reception and discovery.
  Source: src-001, src-006
  Evidence: BGG search extraction supplied rank/rating/comments, mechanisms, files, and comment leads.
  Confidence: high

## Open questions

- BGG XML API returned HTTP 401 in this environment, so metadata was taken from web search/extraction rather than API statistics.
- Some review pages timed out under web_extract; search snippets and successful official downloads were used where extraction failed.
