---
okf_version: 0.2
type: design_reference
topic: "Deckbuilding — core loop and card acquisition models"
mechanics: [deck-building, market, open-drafting, hand-management]
sources:
  - id: "src-001"
    title: "iSlaytheDragon — Hit the Deck! (A Guide on Deckbuilding)"
    url: "https://islaythedragon.com/guides/hit-the-deck-a-guide-on-deckbuilding/"
    kind: review
    provenance: community
    retrieved_at: "2026-07-17"
    notes: "Genre guide by 'Wolfie', 2013-05-31. Core loop, acquisition methods, supply structures."
  - id: "src-002"
    title: "There Will Be Games — Deck Building: a Modern Card Mechanism"
    url: "https://therewillbe.games/articles-essays/9285-deck-building-a-modern-card-mechanism"
    kind: review
    provenance: community
    retrieved_at: "2026-07-17"
    notes: "Essay by Oliver Kinne, updated 2023-11-27. Mechanism history and market variations."
  - id: "src-003"
    title: "BGG blog — Adam in Wales: Designing a Deck Building Game (comment thread)"
    url: "https://boardgamegeek.com/blog/5592/blogpost/150189/designing-a-deck-building-game"
    kind: bgg_forum
    provenance: community
    retrieved_at: "2026-07-17"
    notes: "Post 2023-07-19 by Adam Porter is a video pointer; the design content used here is designer Seth Jaffee's comments on Eminent Domain's 'deck learning'."
  - id: "src-004"
    title: "Marcel Danz — Constructed, Roguelike and Deckbuilder Card Games: They are Not the Same"
    url: "https://medium.com/calystral/constructed-roguelike-and-deckbuilder-card-games-they-are-not-the-same-47ea8ecd62bb"
    kind: other
    provenance: community
    retrieved_at: "2026-07-17"
    notes: "Medium essay, 2020-04-08. Taxonomy of the three acquisition models."
  - id: "src-005"
    title: "Dice Tower Dish — Donald X Vaccarino part 6: DeckBuilders, Development, and Donald X"
    url: "https://dicetowerdish.com/2021/11/24/donald-x-vaccarino-part-6-deckbuilders-development-and-donald-x/"
    kind: other
    provenance: community
    retrieved_at: "2026-07-17"
    notes: "Interview series. Claim below taken from a search excerpt only; body not fetched this run."
confidence: medium
status: verified
---

## Summary

The reference loop of the deckbuilding genre, and the main models by which
players acquire cards. Three acquisition families recur across the
literature: **market purchase** during play (Dominion-style static supply or
Ascension-style rotating river), **reward/draft acquisition** mid-run
(roguelike model), and **side-effect acquisition** ("deck learning," where
cards arrive as a byproduct of actions taken). Which family a game uses
determines how much of the player's skill lives in the buy decision versus
in play sequencing.

## Source-backed facts

- Claim: The genre's reference loop is a weak starter deck, a fixed draw each
  turn (commonly 5), hand played then discarded, and the discard pile
  reshuffled into the deck when it empties, so purchased cards return
  repeatedly.
  Source: src-001
  Evidence: "Players start with weak starter decks (e.g., Dominion's 7 coppers + 3 estates)... cards are drawn each turn (commonly 5 cards) and recycled back into the deck after use."
  Confidence: high

- Claim: Acquisition methods beyond purchase exist: defeating monsters adds
  them to the deck (Thunderstone) and board movement or player interaction
  can grant cards (Salmon Run, Miskatonic School for Girls).
  Source: src-001
  Evidence: guide's acquisition taxonomy — "Primary: purchase cards using accumulated treasure... Secondary: defeat monsters to add them to deck (Thunderstone)."
  Confidence: high

- Claim: Supply structure splits into static central supply (Dominion,
  Thunderstone) versus rotating supply/river where the offer changes each
  turn (Ascension).
  Source: src-001
  Evidence: "Static central supply: same cards always available... Rotating supply: cards change each turn (Ascension)."
  Confidence: high

- Claim: Later market variations include personal supplies (Undaunted:
  Normandy) and acquiring from other players' unused cards (Fort).
  Source: src-002
  Evidence: "Games use shared offer rows (Dominion), personal supplies (Undaunted: Normandy), or alternative sources like unused cards from other players (Fort)."
  Confidence: high

- Claim: "Deck learning" (Eminent Domain) is a distinct acquisition model:
  cards are gained as a side effect of actions taken, not deliberately
  bought, so the deck specializes toward what the player actually does; and
  gained tech cards go to hand for immediate use instead of the discard
  pile, with no forced end-of-turn discard.
  Source: src-003
  Evidence: Jaffee: "you gain cards as a side effect of the actions you take... your deck is 'better' (or at least more specialized) at Surveying, for better or for worse"; "it goes into your hand for immediate use, rather than into your discard pile."
  Confidence: high

- Claim: Constructed, roguelike, and deckbuilder are three distinct models —
  constructed assembles decks before play (pay-to-win risk, rigid metas),
  roguelike drafts mid-run battle to battle until elimination, deckbuilder
  purchases during play from a river — and each implies a different balance
  philosophy (advance planning vs adapting to random offers vs reactive
  strategy).
  Source: src-004
  Evidence: "Having to build a strategy with random cards each battle affords a more reactive way of thinking."
  Confidence: high

- Claim: Dominion's founding premise is that resources live in the deck and
  are never spent away — money stays and functions as income each cycle.
  Source: src-005
  Evidence: search excerpt — "since resources are in the deck, they stay there rather than being lost, functioning as income."
  Confidence: low

## Implications for designers

- The acquisition model is the genre's biggest single design lever: it sets
  where the interesting decisions live (buy row vs play sequencing) and how
  much luck the player can control.
- A rotating river adds offer-luck on top of draw-luck; a static supply makes
  strategy legible and repeatable but risks solved openings.
- Side-effect acquisition ("deck learning") ties deck growth to behavior —
  useful when a design wants the deck to *record* what the player did rather
  than what they bought.
- Immediate-use acquisition (to hand, not discard) removes the one-cycle lag
  that makes purchases feel delayed — a pacing lever, at the cost of
  impulse-buy power.

## Open questions

- src-005's "resources as income" premise is excerpt-only; fetch the full
  interview and re-grade the claim.
- No fetched source yet covers bag-building (Quacks) or pool-building
  acquisition math in depth; candidate for a follow-up reference doc.
