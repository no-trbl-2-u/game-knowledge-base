---
okf_version: 0.2
type: design_reference
topic: "Deckbuilding — deck economy: thinning, dead cards, bloat, and deliberate inversions"
mechanics: [deck-building, hand-management]
better_if_labels: [randomness, strategic-depth]
sources:
  - id: "src-001"
    title: "iSlaytheDragon — Hit the Deck! (A Guide on Deckbuilding)"
    url: "https://islaythedragon.com/guides/hit-the-deck-a-guide-on-deckbuilding/"
    kind: review
    provenance: community
    retrieved_at: "2026-07-17"
    notes: "Genre guide by 'Wolfie', 2013-05-31."
  - id: "src-002"
    title: "There Will Be Games — Deck Building: a Modern Card Mechanism"
    url: "https://therewillbe.games/articles-essays/9285-deck-building-a-modern-card-mechanism"
    kind: review
    provenance: community
    retrieved_at: "2026-07-17"
    notes: "Oliver Kinne essay, updated 2023-11-27. Trashing history and status."
  - id: "src-003"
    title: "Game Developer — Tackling deckbuilding and roguelite design in Abrakam's Roguebook"
    url: "https://www.gamedeveloper.com/design/tackling-deckbuilding-design-in-abrakam-s-roguebook"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-17"
    notes: "Interview with Jean-Michel Vilain (Abrakam CEO/creative director), 2022-03-04."
  - id: "src-004"
    title: "Game Developer — How Slay the Spire's devs use data to balance their roguelike deck-builder"
    url: "https://www.gamedeveloper.com/design/how-i-slay-the-spire-i-s-devs-use-data-to-balance-their-roguelike-deck-builder"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-17"
    notes: "2018-02-27, interviews with Anthony Giovannetti and Casey Yano (Mega Crit)."
  - id: "src-005"
    title: "Wikipedia — Roguelike deck-building game"
    url: "https://en.wikipedia.org/wiki/Roguelike_deck-building_game"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-17"
    notes: "Deck-size balancing claim taken from a search excerpt; body not fetched this run."
  - id: "src-006"
    title: "Ted Bendixson — Rogue Deck Builder devlog: Card Deck Design Problems"
    url: "https://tedbendixson.itch.io/rogue-deck-builder/devlog/750775/card-deck-design-problems"
    kind: other
    provenance: community
    retrieved_at: "2026-07-17"
    notes: "Indie postmortem-style devlog, circa 2022."
confidence: medium
status: verified
---

## Summary

Deck economy is the genre's engine room: every card added dilutes every card
already owned, so acquisition, thinning (trashing), and dead-card avoidance
form one budget. The classical doctrine is *lean decks win* — remove weak
cards to see strong ones more often. Roguebook demonstrates the doctrine is
a choice, not a law: it deliberately rewards large decks to force
improvisation. Either way, cards that are never worth picking are design
failures, and single-purpose cards age badly inside a system built on
recycling.

## Source-backed facts

- Claim: The core progression is adding stronger cards while removing weak
  ones; forced inefficient cards act as a natural runaway-leader brake.
  Source: src-001
  Evidence: "Players progressively add stronger cards while removing weak ones... mitigated by adding undesirable cards that decrease deck efficiency naturally."
  Confidence: high

- Claim: Trashing (permanent removal, distinct from discarding) was not part
  of the earliest deckbuilders; deck thinning arrived later and became "a
  relatively common facet" that is "often a key element that players should
  take advantage of."
  Source: src-002
  Evidence: "deck-building games didn't originally allow for cards to be removed"; quoted phrases above.
  Confidence: high

- Claim: Roguebook deliberately inverted deck-thinning: the game is designed
  so players are motivated to end up with large decks, trading consistency
  for constant improvisation.
  Source: src-003
  Evidence: Vilain: "We've decided to go in the exact opposite direction: design the game so that the player has enough motivation to usually end up with large decks of cards."
  Confidence: high

- Claim: In Slay the Spire's data-driven process, cards with very low pick
  rates were treated as effectively non-functional ("dead") and were
  redesigned rather than left in the pool.
  Source: src-004
  Evidence: "Cards with low pick rates were considered essentially non-functional and required redesign."
  Confidence: high

- Claim: In roguelike deckbuilders, managing deck *size* is itself a skill
  loop: players pass up card rewards or spend removal tools to keep the deck
  lean and its draws predictable.
  Source: src-005
  Evidence: search excerpt — "balancing the size of one's deck, passing up rewards or using removal tools to keep the deck lean and its outcomes more predictable."
  Confidence: low

- Claim: Single-purpose cards clash with the recycling structure of a
  deckbuilder; multi-use cards are structurally more compatible, and players
  need fallback footholds when draw luck denies them their combo pieces.
  Source: src-006
  Evidence: "The more a building can be used in more than one way, the more compatible it is with card deck building"; "other ways for the player to get a foothold in this crazy deck building world."
  Confidence: high

## Implications for designers

- Decide explicitly where the design sits on the lean-vs-fat axis and make
  the game reward that choice; the worst position is accidental (players
  bloat because rewards are free and nothing prices dilution).
- If rewards are frequent, either offer a skip/removal economy or design for
  fat decks on purpose (Roguebook's route).
- Watch pick rates (even in tabletop playtests: track what never gets
  bought). A card nobody takes is not "niche," it is dead weight in the
  offer and costs real design budget.
- Multi-use cards (attack OR resource, effect OR pitch-cost) are the
  cheapest insurance against dead draws.

## Open questions

- src-005 is excerpt-only; fetch and re-grade.
- No fetched source quantifies healthy trash-rate or reward-skip-rate
  benchmarks; the Slay the Spire GDC talk slides may contain them.
