---
okf_version: 0.2
type: design_reference
topic: "Deckbuilding — card design craft: simplicity, keywords, multi-use, discovery pacing"
mechanics: [deck-building, multi-use-cards]
sources:
  - id: "src-001"
    title: "Dominion Strategy — Interview with Donald X. Vaccarino, Part I: Boardgame Design"
    url: "https://dominionstrategy.com/2012/12/20/interview-with-donald-x-vaccarino-part-i-boardgame-design/"
    kind: other
    provenance: community
    retrieved_at: "2026-07-17"
    notes: "2012-12-20 interview with Dominion's designer."
  - id: "src-002"
    title: "Game Developer — Tackling deckbuilding and roguelite design in Abrakam's Roguebook"
    url: "https://www.gamedeveloper.com/design/tackling-deckbuilding-design-in-abrakam-s-roguebook"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-17"
    notes: "Interview with Jean-Michel Vilain, 2022-03-04. Keywords and lenticular design."
  - id: "src-003"
    title: "Ted Bendixson — Rogue Deck Builder devlog: Card Deck Design Problems"
    url: "https://tedbendixson.itch.io/rogue-deck-builder/devlog/750775/card-deck-design-problems"
    kind: other
    provenance: community
    retrieved_at: "2026-07-17"
    notes: "Indie devlog, circa 2022."
  - id: "src-004"
    title: "The Opinionated Gamers — The Art of Design: interviews to game designers #19 – Donald X Vaccarino"
    url: "https://opinionatedgamers.com/2012/05/11/the-art-of-design-interviews-to-game-designers-19-donald-x-vaccarino/"
    kind: other
    provenance: community
    retrieved_at: "2026-07-17"
    notes: "Mechanics/flavor/data framework claim taken from a search excerpt; body not fetched this run."
confidence: medium
status: verified
---

## Summary

Card-design craft from the genre's most-cited practitioners. Recurring
principles: constrain the base rules so individual cards can be interesting
(Dominion's "1 Action, 1 Buy"); use keywords to compress text and create
card classes that reference each other; design "lenticular" cards that read
simple and reveal depth; prefer multi-use cards; and pace the card pool so
discovery lasts multiple plays.

## Source-backed facts

- Claim: Vaccarino designs mechanics first and applies theme afterward; for
  Dominion the medieval theme was flavor added to a working card system.
  Source: src-001
  Evidence: "I started with cards and then needed a theme for them."
  Confidence: high

- Claim: Constraining the action economy paradoxically opens design space —
  Dominion's one-action-one-buy rule is what makes cards like Village and
  Spy meaningful designs.
  Source: src-001
  Evidence: "Playing one action per turn is extremely simple and opens the door for making cards like Village and Spy."
  Confidence: high

- Claim: Card pool sizing is a discovery-pacing decision: with 10 kingdom
  piles drawn from 25 total, players see the whole base set within about 2.5
  games, which maintains variety without overwhelming.
  Source: src-001
  Evidence: interview discussion of pile counts — "With 10 kingdom cards from 25 total, players see all cards within 2.5 games."
  Confidence: medium

- Claim: Keywords earn their place three ways: they attach flavor to a
  mechanic, shorten card text (mnemonics), and create classes of cards that
  other cards can reference for synergy.
  Source: src-002
  Evidence: Vilain: "They are great because they 1) Can attach flavor to a mechanic, 2) Make card texts shorter and can help with mnemotechnics, and 3) Create classes of cards."
  Confidence: high

- Claim: "Lenticular design" — mechanics that appear simple on the surface
  but reveal depth through play — is Abrakam's stated tool for managing
  complexity in a deckbuilder.
  Source: src-002
  Evidence: "The team uses lenticular design — mechanics appearing simple on the surface but revealing depth through play."
  Confidence: high

- Claim: Cards designed for a single purpose fight the genre; versatility
  (multiple uses per card) is what keeps draws playable.
  Source: src-003
  Evidence: "The more a building can be used in more than one way, the more compatible it is with card deck building."
  Confidence: high

- Claim: Vaccarino's working frame splits a game into mechanics (what you
  do), flavor (theme), and data (the information in the game), usually made
  in that order.
  Source: src-004
  Evidence: search excerpt — "three main pieces: mechanics, flavor, and data... usually makes them in that order."
  Confidence: low

## Implications for designers

- Keep the *rules* small and push the interest into the *cards*; every base
  rule a card must fight against is a tax on all future card designs.
- A keyword should meet all three of Vilain's tests. A keyword no other card
  references is not creating a class — it is just vocabulary overhead.
- Budget discovery: how many plays until a player has seen every card? Too
  few means stale, too many means most content is invisible to most players.
- Complexity should be lenticular (revealed by play), not front-loaded
  (demanded before play).

## Open questions

- src-004 is excerpt-only; fetch and re-grade.
- Nothing fetched covers rarity-curve craft (common/uncommon/rare ratios and
  their pacing role) from a primary source; the Slay the Spire GDC material
  is the likeliest source to close this.
