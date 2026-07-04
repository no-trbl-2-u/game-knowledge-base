---
okf_version: 0.1
type: sources
game:
  title: "Mage Knight Board Game"
  slug: "mage-knight"
  bgg_id: 96848
  publisher: "WizKids"
  year: 2011
  edition: "English base game / rules updated March 2012"
scope: "base game"
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
    retrieved_at: "2026-07-03"
    notes: "Official rulebook; not mirrored. Direct PDF extraction timed out; terminal HTTPS failed due hostname mismatch and HTTP fallback returned 500."
  - id: "src-004"
    title: "MK_walkthrough_ENG_searchable-mar2012.pdf"
    url: "https://wizkidsgames.com/wp-content/uploads/mage/MK_walkthrough_ENG_searchable-mar2012.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-03"
    notes: "Official walkthrough; not mirrored."
  - id: "src-005"
    title: "MK_FAQ_1.0v2.pdf"
    url: "https://wizkidsgames.com/wp-content/uploads/mage/MK_FAQ_1.0v2.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-03"
    notes: "Official FAQ link from publisher page; not mirrored."
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
confidence: medium
status: needs_followup
---

## Summary

Primary discovery was BGG. Official rules availability was established through WizKids, but direct extraction of the official PDFs failed in this run. Therefore this entry stores structured, source-linked summaries only and marks rule confidence medium where claims depend on secondary extraction snippets.

## Source-backed facts

- Claim: Official rule sources exist and are linked by the publisher.
  Source: src-002
  Evidence: WizKids page lists "Game Walkthrough", "Download Rules", and "Official FAQ" links.
  Confidence: high
- Claim: Direct PDF extraction was blocked during this run.
  Source: src-003
  Evidence: Tool output: web_extract timed out on rulebook/walkthrough/FAQ; terminal HTTPS failed with certificate hostname mismatch for wizkidsgames.com and HTTP fallback returned 500.
  Confidence: high
- Claim: Secondary rules pages expose turn, round, movement, interaction, and end-round procedures.
  Source: src-006
  Evidence: Search extract includes sections "Ending The Round", "One Turn", and "Interaction in a Village".
  Confidence: medium
- Claim: BGG and review sources expose enough reception leads to classify better-if opportunities.
  Source: src-009, src-010, src-011, src-012
  Evidence: Extracted review/forum snippets cite long play, complexity, downtime, rulebook friction, and low cooperation/interaction.
  Confidence: high

## Open questions

- Re-fetch official PDFs through a browser or alternate mirror and add page references.
- Locate publisher errata beyond FAQ 1.0v2 if any exists for later printings or Ultimate Edition.
