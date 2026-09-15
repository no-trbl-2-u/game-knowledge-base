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
  - id: "src-006"
    title: "Legendary Encounters: An Alien Deck Building Game Rulebook — Upper Deck official rules page"
    url: "https://theupperdeckco.wpenginepowered.com/wp-content/uploads/2024/05/Legendary_Encounters_Rules-Alien.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-09-15"
    notes: "2026-09-15 audit pass: official rulebook retrieved directly from Upper Deck's current rules hub; HTTP 200, 28 pages, SHA-256 7a597bedfb9938723f9d4336f6cb3b005e0d71ddff59ced2624c9d5350eced04."
confidence: high
status: verified
---

## Summary

The 2026-09-15 audit pass retrieved and extracted the official rulebook, resolving the extraction gap this doc previously carried. Edge-case rulings for Facehugger/Chestburster resolution, timing collisions, hive/barracks/strike-deck depletion, and final-enemy handling now cite official pages directly; the two secondary claims below are kept as reception/community color, not rules authority.

## Source-backed facts

- Claim: A Facehugger that neither the player it's placed on nor the next player can kill impregnates the first player: the Facehugger dies (to the Dead Enemies space) and that player puts a Chestburster from the Hatchery into their discard pile; once a Chestburster is gained, that player no longer takes enemy strikes and dies immediately on drawing it (re-entering as an Alien Player only under the optional advanced rule).
  Source: src-006
  Evidence: PDF page 14, "If neither player can kill it, the Facehugger 'impregnates' the initial player: The Facehugger dies... Then that player puts a Chestburster card from the Hatchery into his or her discard pile"; page 15, "Enemies will no longer strike you"; "The moment you draw the Chestburster, it claws its way out of your chest and you die horribly."
  Confidence: high
- Claim: If multiple Facehuggers impregnate a player at the same time, all of them die but the player only gains one Chestburster card; Facehuggers cannot be relocated by player effects such as the Electric Prod.
  Source: src-006
  Evidence: PDF page 14, "If multiple Facehuggers impregnate a player at the same time, they all die, but the player only gains one Chestburster card... Facehuggers can't be moved by player effects (like the Electric Prod)."
  Confidence: high
- Claim: A killed Final Enemy that is somehow reshuffled back into the Hive deck does not need to be killed again once revealed a second time, since a card's Reveal ability only triggers once and can be ignored afterward.
  Source: src-006
  Evidence: PDF page 11, "Some enemies have 'Reveal:' abilities. When an enemy is turned face up its reveal ability triggers once and then can be ignored afterwards."; page 13, "Each Objective 3 requires the players to kill one or more specific aliens... You may not fight a Final Enemy until you're on Objective 3."
  Confidence: high
- Claim: If the Hive deck runs out, the Dead Enemies pile is shuffled into a new Hive deck; if the Hive deck runs out a second time, the players immediately lose.
  Source: src-006
  Evidence: PDF page 16, "If you need to add a Hive card and the Hive deck is empty, take all of the cards in the Dead Enemies space, shuffle them together and make a new Hive deck. In the unlikely event that the Hive deck runs out a second time, the aliens have overrun the players and the players all die."
  Confidence: high
- Claim: If the Barracks or Sergeant stack runs out, play continues without refilling the HQ or recruiting new Sergeants respectively, rather than ending the game; if the Strike deck runs out, discarded strikes are immediately reshuffled into a new Strike deck.
  Source: src-006
  Evidence: PDF page 16, "If the Barracks runs out, keep playing normally except the HQ will no longer refill... If this stack runs out, keep playing normally except you will no longer be able to recruit Sergeants... When this deck runs out, immediately shuffle all of the discarded strikes to make a new Strike Deck."
  Confidence: high
- Claim: When simultaneous timing conflicts occur (multiple players affected at once, multiple cards entering the Combat Zone together, or unordered simultaneous effects), the player whose turn it is resolves first/chooses the order, and Combat Zone reveals resolve one card at a time before the next is turned face up.
  Source: src-006
  Evidence: PDF page 18, "If a card tells multiple players to do something at the same time, first the player whose turn it is does it then the other players go in clockwise order... If multiple effects occur at the same time, and it's not clear what order to resolve them in, the player whose turn it is chooses the order."; "If multiple cards are moved to the Combat Zone at the same time, turn the first one face up (if necessary) and resolve any Reveal triggers... Then turn the next card face up, and so on."
  Confidence: high
- Claim: A player may Coordinate at most one card to each other player on that player's turn, but several different players can each Coordinate one card to the same active player in the same turn.
  Source: src-006
  Evidence: PDF page 13, "You can only Coordinate one card to each player on their turn. However, multiple players can each coordinate one card to the player whose turn it is in order to give that player a huge advantage."
  Confidence: high

## Player-discovered ambiguity

- Player friction [rules-ambiguity][medium][src-003]: A reviewer flagged timing between completing objectives and hive-deck spawning as a possible point of confusion in actual play; the official page-18 timing rules above (turn-order resolution, sequential Combat Zone reveals) are the governing procedure, but the review does not cite them directly, so this is recorded as player-experienced friction rather than a rules gap.
  Evidence: "Timing between completing objectives and the hive deck spawning can be an issue".

## Open questions

- The retrieved PDF (src-006) carries no printing/version date; confirm whether it matches the original 2014 retail edition or reflects a later reprint pass before treating page numbers as stable across printings.
