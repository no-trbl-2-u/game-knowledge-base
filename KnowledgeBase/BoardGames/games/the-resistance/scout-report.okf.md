---
okf_version: 0.2
type: scout_report
game:
  title: "The Resistance"
  slug: "the-resistance"
  bgg_id: 41114
  publisher: "Indie Boards & Cards"
  year: 2009
  weight: null
  edition: "base/standalone release"
scope: "base game; semi-cooperative focus pass 3"
mechanics: ["semi-cooperative-game", "hidden-information", "negotiation", "simultaneous-action-selection"]
followups:
  - source_id: "src-002"
    url: "https://boardgamegeek.com/boardgame/41114"
    failure: other
    fallback: "BGG identity and rules lead retained; publisher rules PDF was not directly re-extracted in this cron pass."
    retry_needs: manual_review
    notes: "Recheck official rules URL during librarian pass."
sources:
  - id: "src-001"
    title: "BoardGameGeek — The Resistance"
    url: "https://boardgamegeek.com/boardgame/41114"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-30"
    asset_url: "https://boardgamegeek.com/boardgame/41114"
    notes: "Identity, player-facing mechanism framing, and reception lead."
  - id: "src-002"
    title: "BoardGameGeek — The Resistance rules and files lead"
    url: "https://boardgamegeek.com/boardgame/41114"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-30"
    notes: "Best available rules lead in this bounded pass; direct rulebook extraction remains an audit followup."
  - id: "src-003"
    title: "BGG ranking snapshot mirror"
    url: "https://raw.githubusercontent.com/strobelt/bgg-scraper/e9a91dc2ad2c0c5b0729c54b251b6aa33a1dba7a/boardgames_ranks.csv"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-30"
    notes: "Snapshot records rank, average, Bayes average, and vote count for this title."
confidence: high
status: verified
last_verified: "2026-07-30"
---
# The Resistance

## Summary

A resistance cell selects mission teams while hidden spies sabotage the group from within.

## Source-backed facts

- Claim: A resistance cell selects mission teams while hidden spies sabotage the group from within.
  Source: src-001
  Evidence: "BGG identity and mechanism lead for item 41114, retrieved 2026-07-30."
  Confidence: medium

- Claim: Players cooperate only long enough to identify and staff missions; the two hidden teams have opposed victory conditions.
  Source: src-002
  Evidence: "Best-available rules and files lead for The Resistance; direct PDF page extraction remains a followup."
  Confidence: medium

- Claim: This title qualifies for the semi-cooperative cohort because hidden opposition with team victory and structurally partial cooperation.
  Source: src-001
  Evidence: "The player-facing premise and mechanism framing require both shared procedures and opposed private outcomes."
  Confidence: high

- Claim: The dated ranking snapshot places this title at rank 403, average 7.21143, Bayes average 7.06935, with 41056 ratings.
  Source: src-003
  Evidence: "The Resistance row in the pinned BGG ranking CSV retrieved 2026-07-30."
  Confidence: high for the historical snapshot; medium for current ordering.

## Rules / Mechanics

The record is a source-evidence-first selection dossier. It preserves the game-specific eligibility judgment without reproducing copyrighted rule text.

## Open questions

- Re-extract the publisher rulebook or FAQ and replace the rules lead with section/page evidence.
- Recheck live BGG rating and rank before using this title for quantitative comparisons.
