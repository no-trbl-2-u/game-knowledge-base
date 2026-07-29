---
okf_version: 0.2
type: scout_report
game:
  title: "Paperback"
  slug: "paperback"
  bgg_id: 141572
  publisher: "Unknown — verify in librarian pass"
  year: 2014
  weight: null
  edition: "base/standalone release"
scope: "base game; daily intake C — deck/bag/dicebuilder"
mechanics: ["deck-building", "hand-management", "set-collection"]
sources:
  - id: "src-001"
    title: "BoardGameGeek — Paperback"
    url: "https://boardgamegeek.com/boardgame/141572"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-29"
    asset_url: "https://boardgamegeek.com/boardgame/141572"
    notes: "Identity, year, mechanism, and rating-lead source; rating snapshot requires librarian recheck."
confidence: medium
status: needs_followup
last_verified: "2026-07-29"
followups:
  - source_id: null
    url: "https://www.example.invalid/paperback/official-rules"
    failure: not_found
    fallback: "BGG identity and mechanism page retained; no official rules URL was verified during this bounded pass."
    retry_needs: alternate_source
    notes: "Retry in the librarian pass; eligibility remains based on BGG identity and player-mode evidence."
---
# Paperback

## Summary

Paperback is catalogued for iterative deck, bag, or dice-pool construction. This bounded intake preserves an identity lead and a controlled-mechanics classification for follow-up research; it does not substitute the official rules.

## Source-backed facts

- Claim: BoardGameGeek identifies this title as a distinct board-game release associated with the cited year and BGG record.
  Source: src-001
  Evidence: "BoardGameGeek record 141572; page retrieved 2026-07-29."
  Confidence: medium

- Claim: The intake classification uses the mechanics listed in frontmatter: deck-building, hand-management, set-collection.
  Source: src-001
  Evidence: "Mechanism/category metadata on the cited BGG record."
  Confidence: low

## Rules / Mechanics

Official rules evidence was not re-extracted in this bounded pass. See the scout report followup.

## Open questions

- Confirm publisher, player range, complexity weight, current average rating, and rank from a fresh BGG snapshot.
- Retrieve an official rulebook or FAQ and replace provisional summaries with categorized rules evidence.

## Research note

This document is a source-evidence-first intake record, not a claim that the game has been fully verified.
