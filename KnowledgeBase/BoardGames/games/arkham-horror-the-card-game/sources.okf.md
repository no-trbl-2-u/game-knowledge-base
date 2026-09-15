---
okf_version: 0.2
type: sources
game:
  title: "Arkham Horror: The Card Game"
  slug: "arkham-horror-the-card-game"
  bgg_id: 205637
  publisher: "Fantasy Flight Games"
  year: 2016
  weight: null
  edition: "core set / revised product line referenced"
scope: "base game"
mechanics: [action-points, campaign-game, cooperative-game, deck-bag-and-pool-building, deck-building, hand-management, solo-solitaire-game, variable-player-powers]
sources:
  - id: "src-001"
    title: "BoardGameGeek — Arkham Horror: The Card Game"
    url: "https://boardgamegeek.com/boardgame/205637/arkham-horror-the-card-game"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-10"
    notes: "Primary discovery target; direct fetch blocked with HTTP 401/403."
  - id: "src-002"
    title: "Fantasy Flight Games — Arkham Horror: The Card Game product page"
    url: "https://www.fantasyflightgames.com/en/products/arkham-horror-the-card-game/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-10"
    notes: "Publisher page located by search; direct page fetch blocked with HTTP 403, but search result listed official downloads."
  - id: "src-003"
    title: "Arkham Horror: The Card Game — Learn to Play PDF"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/dd/78/dd7818fe-0c9a-4a6c-b685-e32ab55b1702/ahc60_learn_to_play_web.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-10"
    notes: "Fetched successfully; used for rules overview, setup, turn structure, actions, campaign, and scoring/endgame summaries."
  - id: "src-004"
    title: "ArkhamDB — Rules"
    url: "https://arkhamdb.com/rules"
    kind: other
    provenance: secondary
    retrieved_at: "2026-09-15"
    notes: "Community rules reference mirror stating it replicates Core Set Rules Reference and includes official FAQ updates. 2026-09-15 audit pass: re-retrieved in full (HTTP 200, 290,500 bytes) and mined for `rules/edge-cases-faq.okf.md`, resolving the game's last open alternate_source followup."
  - id: "src-005"
    title: "Board Game Quest — Arkham Horror: The Card Game – Chapter Two Review"
    url: "https://www.boardgamequest.com/arkham-horror-the-card-game-chapter-two-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-10"
    notes: "Review text fetched; used for reception around new core set, campaign deckbuilding, and onboarding."
  - id: "src-006"
    title: "There Will Be Games — Arkham Horror The Card Game: the greatest deck construction introduction of all time... if you can get there"
    url: "https://therewillbe.games/articles-boardgame-reviews/8708-arkham-horror-living-card-game-the-greatest-deck-construction-introduction-of-all-time-if-you-can-get-there"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-10"
    notes: "Review text fetched; used for praise and friction around deck construction, cost, and entry barriers."
  - id: "src-007"
    title: "Co-op Board Games — Arkham Horror: The Card Game Review"
    url: "https://coopboardgames.com/cooperative-board-game-reviews/arkham-horror-the-card-game-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-10"
    notes: "Review text fetched; used for campaign consequences, two-player/core-copy friction, and round structure summaries."
  - id: "src-008"
    title: "Meeple Mountain — Arkham Horror: The Card Game Revised Edition review"
    url: "https://www.meeplemountain.com/reviews/arkham-horror-the-card-game-revised-edition/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-10"
    notes: "Search result quoted BGG Geek Rating 8.57922; used only as score-support fallback while BGG direct access was blocked."
confidence: medium
status: verified
---

## Summary

Source registry for *Arkham Horror: The Card Game*. Official Learn to Play was retrieved and extracted. Direct BGG and FFG product-page fetches were blocked, so their pages remain citation targets with blocked-access notes, while rule claims lean on the official PDF.

## Source-backed facts

- Claim: Official Learn to Play PDF was retrievable and usable for rule extraction.
  Source: src-003
  Evidence: Local fetch returned a 4.4 MB PDF and text extraction exposed the "Game Overview" and "Using This Book" sections.
  Confidence: high
- Claim: Direct BoardGameGeek API/page fetch was blocked in this environment.
  Source: src-001
  Evidence: XML API returned HTTP 401 and the HTML page returned HTTP 403 during the scout run.
  Confidence: high
- Claim: ArkhamDB labels its rules page as a replica of the Core Set Rules Reference plus updates.
  Source: src-004
  Evidence: "This page contains a replica of the Rules Reference found in any copy of the Core Set of Arkham Horror: The Card Game."
  Confidence: medium

## Open questions

- Recheck current BGG average rating, Geek Rating, rank, mechanisms, and weight from BGG directly when access permits.
