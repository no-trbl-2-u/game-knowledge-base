---
okf_version: 0.2
type: sources
game:
  title: "Mage Knight Board Game"
  slug: "mage-knight"
  bgg_id: 96848
  publisher: "WizKids"
  year: 2011
  edition: "English base game / rules updated March 2012"
scope: "base game"
mechanics: [deck-building, hand-management, card-play-conflict-resolution, modular-board, grid-movement, dice-rolling, cooperative-game, solo-solitaire-game, variable-player-powers, campaign-game]
sources:
  - id: "src-001"
    title: "Mage Knight Board Game — BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/96848/mage-knight-board-game"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-03"
    notes: "Metadata, mechanics, complexity, official-link, review/forum leads."
  - id: "src-002"
    title: "Mage Knight — WizKids product page"
    url: "https://wizkids.com/mage-knight"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-03"
    notes: "Official overview and details; links to official rules, walkthrough, FAQ."
  - id: "src-003"
    title: "MK_rulebook_ENG_searchable-mar2012.pdf"
    url: "https://wizkidsgames.com/wp-content/uploads/mage/MK_rulebook_ENG_searchable-mar2012.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-08"
    notes: "WizKids host still 500s; text extracted from the Wayback Machine snapshot (web.archive.org/web/20201118050857/http://wizkidsgames.com/wp-content/uploads/mage/MK_rulebook_ENG_searchable-mar2012.pdf), 20 pages, pypdf extraction. Page numbers below refer to this PDF's own printed page numbers."
  - id: "src-004"
    title: "MK_walkthrough_ENG_searchable-mar2012.pdf"
    url: "https://wizkidsgames.com/wp-content/uploads/mage/MK_walkthrough_ENG_searchable-mar2012.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-08"
    notes: "WizKids host still 500s; text extracted from the Wayback Machine snapshot (web.archive.org/web/20201118050902/http://wizkidsgames.com/wp-content/uploads/mage/MK_walkthrough_ENG_searchable-mar2012.pdf), 20 pages, pypdf extraction."
  - id: "src-005"
    title: "MK_FAQ_1.0v2.pdf"
    url: "https://wizkidsgames.com/wp-content/uploads/mage/MK_FAQ_1.0v2.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-08"
    notes: "WizKids host still 500s; text extracted from the Wayback Machine snapshot (web.archive.org/web/20201118050907/http://wizkidsgames.com/wp-content/uploads/mage/MK_FAQ_1.0v2.pdf), 3 pages, pypdf extraction. FAQ text is dated 'Version 1.0 - 7th February 2014'."
  - id: "src-006"
    title: "How to play Mage Knight — UltraBoardGames"
    url: "https://www.ultraboardgames.com/mage-knight/game-rules.php"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-03"
    notes: "Secondary rule transcription/summary used only to corroborate procedural structure when official PDF text could not be extracted."
  - id: "src-007"
    title: "Movement in Mage Knight — UltraBoardGames"
    url: "https://www.ultraboardgames.com/mage-knight/movement.php"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-03"
    notes: "Secondary rule transcription for movement/exploration details."
  - id: "src-008"
    title: "Mage Knight FAQ — BoardGameGeek Wiki"
    url: "https://boardgamegeek.com/wiki/page/Mage_Knight_FAQ"
    kind: faq
    provenance: community
    retrieved_at: "2026-07-03"
    notes: "Community FAQ corresponding to official thread; secondary for edge-case categories."
  - id: "src-009"
    title: "A Very Great Adventure — Mage Knight Review"
    url: "https://therewillbe.games/articles-boardgame-reviews/3341-a-very-great-adventure-mage-knight-review"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-03"
    notes: "Review evidence for praise and downtime/commitment friction."
  - id: "src-010"
    title: "Mage Knight Review — The Thoughtful Gamer"
    url: "https://thethoughtfulgamer.com/2017/07/23/mage-knight-review"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-03"
    notes: "Review evidence for deckbuilder-in-slow-motion praise and complexity friction."
  - id: "src-011"
    title: "Mage Knight — negative review from a fan — BoardGameGeek thread"
    url: "https://boardgamegeek.com/thread/2427702/mage-knight-a-negative-review-from-a-guy-that-rate"
    kind: bgg_forum
    provenance: community
    retrieved_at: "2026-07-03"
    notes: "Player complaint lead emphasizing rules dispersion, competitive mode, low co-op interaction."
  - id: "src-012"
    title: "Mage Knight: Ultimate Edition ratings with comments — BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/248562/mage-knight-ultimate-edition/ratings?comment=1&rated=1"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-03"
    notes: "Community rating comments for downtime, low interaction, slow progression, rules checking."
confidence: high
status: verified
---

## Summary

Primary discovery was BGG. Official rules availability was established through WizKids; the live PDFs still 500 at both wizkidsgames.com and wizkids.com hosts, but a 2026-07-08 retry pulled all three official PDFs (rulebook, walkthrough, FAQ) from Wayback Machine snapshots and extracted their text directly, so rule claims below now cite the official documents with page references rather than secondary summaries.

## Source-backed facts

- Claim: Official rule sources exist and are linked by the publisher.
  Source: src-002
  Evidence: WizKids page lists "Game Walkthrough", "Download Rules", and "Official FAQ" links.
  Confidence: high
- Claim: The WizKids-hosted PDFs return server errors, but Wayback Machine snapshots of all three (rulebook, walkthrough, FAQ) exist and were successfully retrieved and text-extracted.
  Source: src-003, src-004, src-005
  Evidence: `curl -IL` against wizkidsgames.com returns HTTP 500 as of 2026-07-08; `web.archive.org/web/2020.../<url>` snapshots (captured 2020-11-18) returned HTTP 200 PDF content for all three files, extracted with pypdf to 20, 20, and 3 pages respectively.
  Confidence: high
- Claim: Secondary rules pages (src-006, src-007) accurately matched the official rulebook's procedural structure for turn, round, movement, interaction, and end-round procedures.
  Source: src-003
  Evidence: Official rulebook pages 4-7 confirm the same turn/round/movement/interaction structure the secondary pages summarized; no contradictions found.
  Confidence: high
- Claim: BGG and review sources expose enough reception leads to classify better-if opportunities.
  Source: src-009, src-010, src-011, src-012
  Evidence: Extracted review/forum snippets cite long play, complexity, downtime, rulebook friction, and low cooperation/interaction.
  Confidence: high

## Open questions

- Locate publisher errata beyond FAQ 1.0v2 (dated 2014-02-07) if any exists for later printings or Ultimate Edition.

## Retry notes
- 2026-07-08: `src-003`/`src-004`/`src-005` resolved via Wayback Machine snapshots (see per-source notes above). WizKids' own hosts still return HTTP 500 on both `wizkidsgames.com` and `wizkids.com`; future runs should keep using the Wayback snapshots unless the publisher site is confirmed healthy again.
