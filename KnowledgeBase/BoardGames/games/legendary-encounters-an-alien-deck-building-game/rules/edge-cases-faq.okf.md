---
okf_version: 0.2
type: rule_category
game:
  title: "Legendary Encounters: An Alien Deck Building Game"
  slug: "legendary-encounters-an-alien-deck-building-game"
  bgg_id: 146652
  publisher: "Upper Deck Entertainment"
  year: 2014
  weight: 2.71
  edition: "base game"
scope: "base game"
mechanics: [cooperative-game, deck-bag-and-pool-building, deck-building, hand-management, open-drafting, solo-solitaire-game, variable-player-powers]
sources:
  - id: "src-003"
    title: "Life of Uz — Board-Gaming Review: Legendary Encounters An Alien Deckbuilding Game"
    url: "http://lifeofuz.blogspot.com/2016/05/board-gaming-review-legendary.html"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-09"
    notes: "Review notes on timing and difficulty friction."
  - id: "src-004"
    title: "The Esoteric Order of Gamers — Legendary Encounters: An ALIEN Deck Building Game v1"
    url: "https://www.orderofgamers.com/legendary-encounters-alien-v1"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-09"
    notes: "Rules summary page; search snippet included an FAQ-style note on final enemies."
  - id: "src-005"
    title: "Legendary Encounters: An Alien Deck Building Game — Official Rulebook"
    url: "https://theupperdeckco.wpenginepowered.com/wp-content/uploads/2024/05/Legendary_Encounters_Rules-Alien.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-09-23"
    notes: "28-page official Upper Deck rulebook PDF, linked from the official upperdeck.com/ud-game-rules/ page; SHA-256 7a597bedfb9938723f9d4336f6cb3b005e0d71ddff59ced2624c9d5350eced04."
confidence: medium
status: needs_followup
---

## Summary

The official Upper Deck rulebook (src-005) is now acquired and resolves the base objective/Hive-timing structure with high confidence. A closed publisher FAQ/errata inventory is still not acquired; the final-enemy-reshuffle edge case remains sourced only to a secondary rules-summary snippet.

## Source-backed facts

- Claim: The Hive deck is built pre-game as three stacked Objective mini-decks (13 cards for Objective 3 on the bottom, 11 for Objective 2 in the middle, 9 for Objective 1 on top), so drawing/revealing Hive cards naturally works through the current Objective's cards first; there is no separate "spawn" trigger distinct from the ordinary Hive-draw procedure.
  Source: src-005
  Evidence: "Find Objective 3's thirteen card mini-deck... face down on the Hive space"; "Find Objective 2's eleven card mini-deck... face down on top of Objective 3's mini-deck"; "Find Objective 1's nine card mini-deck... face down on top of Objective 2's and Objective 3's mini-decks."
  Confidence: high
- Claim: Whenever the current Objective is completed, it moves immediately to the bottom of the three-Objective queue and players work toward the next Objective; Objectives must be completed strictly in order 1 to 3, and completing Objective 3 ends the game in a win.
  Source: src-005
  Evidence: "Whenever an Objective is completed, immediately put it on the bottom of the three Objective cards."; "Players must always complete Objective 1 before they can complete Objective 2, and must complete Objective 2 before they can complete Objective 3."
  Confidence: high
- Claim: "Final Enemy" aliens are tied to Objective 3 specifically — each Objective 3 requires killing one or more Final Enemy aliens, and players may not fight a Final Enemy until they are on Objective 3.
  Source: src-005
  Evidence: "Each Objective 3 requires the players to kill one or more specific aliens. These aliens say 'Final Enemy' on them. You may not fight a Final Enemy until you're on Objective 3."
  Confidence: high
- Claim: A review flags timing between completing objectives and hive spawning as a possible issue; the official rulebook's stacked-mini-deck structure (above) is the governing mechanism this friction report is describing.
  Source: src-003
  Evidence: "Timing between completing objectives and the hive deck spawning can be an issue".
  Confidence: medium
- Claim: A rules-summary search snippet gives an edge case where a final enemy reshuffled into the hive after being killed need not be killed again. This specific edge case is not addressed in the base rulebook text and still needs a publisher FAQ/errata citation.
  Source: src-004
  Evidence: "Final enemy comes back: If a final enemy somehow gets reshuffled into the hive deck once you have killed it, you do not need to kill it again".
  Confidence: low

## Rules / Mechanics

- Objective/Hive timing and Final Enemy gating are now governed by src-005; treat them as resolved.
- Remaining priority followup: official FAQ/errata for corner cases (e.g. final-enemy reshuffle) not covered by the base rulebook.

## Open questions

- Is there an official, closed FAQ/errata PDF from Upper Deck beyond the base rulebook? The BGG filepage lead remains blocked (see scout-report.okf.md followups); upperdeck.com/ud-game-rules/ lists only rulebook PDFs for the base game, Alien Covenant, and other expansions, no separate FAQ document.
