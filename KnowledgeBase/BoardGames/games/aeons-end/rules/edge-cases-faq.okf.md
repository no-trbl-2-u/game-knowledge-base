---
okf_version: 0.2
type: rule_category
game:
  title: "Aeon's End"
  slug: "aeons-end"
  bgg_id: 191189
  publisher: "Indie Boards & Cards"
  year: 2016
  weight: 2.80
  edition: "core game / second edition product page referenced"
scope: "base game"
mechanics: [cooperative-game, deck-bag-and-pool-building, deck-building, hand-management, variable-player-powers, solo-solitaire-game]
sources:
  - id: "src-001"
    title: "BoardGameGeek — Aeon's End"
    url: "https://boardgamegeek.com/boardgame/191189/aeons-end"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-08"
    notes: "BGG community page and classification."
  - id: "src-003"
    title: "UltraBoardGames — Aeons End Game Rules"
    url: "https://www.ultraboardgames.com/aeons-end/game-rules.php"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-08"
    notes: "Secondary rules summary used for edge-case leads."
confidence: low
status: needs_followup
---

## Summary

Detailed FAQ and errata coverage remains incomplete. The main extractable edge cases from available sources concern no-shuffle deck handling, turn-order deck reshuffling, empty supply piles, life caps, and Nemesis-specific exceptions.

## Source-backed facts

- Claim: If a supply pile runs out, it stays empty and is not replaced.
  Source: src-003
  Evidence: "If a supply pile runs out, it is considered empty. Do not replace it."
  Confidence: high
- Claim: When the turn-order deck is empty and a card must be drawn or revealed, the turn-order discard is shuffled to form the deck again.
  Source: src-003
  Evidence: "shuffle all of the turn order cards together and place them facedown to make the turn order deck again."
  Confidence: high
- Claim: The Nemesis deck is not shuffled after construction.
  Source: src-003
  Evidence: "Do not shuffle the nemesis deck once it has been created."
  Confidence: high
- Claim: BGG notes an errata lead for second edition and expansions.
  Source: src-001
  Evidence: "2nd Edition Errata (AE + WE + all expansions)".
  Confidence: medium

## Rules / Mechanics

- Empty market piles reduce future deckbuilding options.
- The turn-order deck resets by shuffling because variable turn order must remain unpredictable within bounded composition.
- The Nemesis deck remains ordered by tier to preserve escalation.
- Official FAQ/errata should be inspected before treating any timing answer as final.

## Open questions

- What are the official second-edition errata items for base-game cards and Nemesis rules?
- Which card interactions most often cause rules disputes?
