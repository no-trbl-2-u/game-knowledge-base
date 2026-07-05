---
okf_version: 0.2
type: rule_category
game:
  title: "The Quacks of Quedlinburg"
  slug: "the-quacks-of-quedlinburg"
  bgg_id: 244521
  publisher: "Schmidt Spiele / North Star Games"
  year: 2018
  weight: 1.94
  edition: "English base game / Quacks current listing"
scope: "base game"
mechanics: [deck-bag-and-pool-building, push-your-luck, catch-up-mechanism, simultaneous-action-selection, dice-rolling, variable-setup]
sources:
  - id: "src-001"
    title: "Quacks | Board Game | BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/244521/quacks"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-05"
    notes: "BGG description and metadata."
  - id: "src-003"
    title: "The Quacks of Quedlinburg Rulebook PDF"
    url: "https://cdn.1j1ju.com/medias/ba/73/db-the-quacks-of-quedlinburg-rulebook.pdf"
    kind: rulebook_pdf
    provenance: secondary
    retrieved_at: "2026-07-05"
    notes: "Accessible English rulebook mirror."
confidence: high
status: verified
---

## Summary

Players brew potions by drawing chips from personal bags. Chips advance along a pot track by printed value; colored chips add powers; too many white chips explode the pot. The game lasts nine rounds.

## Source-backed facts

- Claim: The premise is personal bag drawing into a pot, with chip values increasing reward distance.
  Source: src-001
  Evidence: "Each player has their own bag of ingredient chips"; "The higher the face value of the drawn chip, the further it is placed in the pot's swirling pattern".
  Confidence: high
- Claim: Exploding forces a player to choose between points and coins instead of receiving both.
  Source: src-001
  Evidence: "players whose pots have exploded must choose points or coins — not both".
  Confidence: high
- Claim: The rulebook says players are never allowed to look into their bag.
  Source: src-003
  Evidence: "You are never allowed to look into your bag".
  Confidence: high
- Claim: Explosion is determined only by the total value of white chips, and the threshold is exceeding 7.
  Source: src-003
  Evidence: "If the sum of all white chips drawn exceeds the value of 7"; "only the values on the white chips are added up".
  Confidence: high

## Rules / Mechanics

The design makes risk cumulative and legible. White chips are not merely misses; they are debt already in the bag. Buying colored chips dilutes risk while adding tactical effects, so the market phase is both engine-building and probability management.

## Design implications for SomberSoft

For digital or tabletop roguelike systems, dangerous tokens should remain useful as pacing devices. The player fears them because they count toward failure, not because they are inert blanks.
