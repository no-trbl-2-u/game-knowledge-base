---
okf_version: 0.1
type: rule_category
game:
  title: "Mage Knight Board Game"
  slug: "mage-knight"
  bgg_id: 96848
  publisher: "WizKids"
  year: 2011
  edition: "English base game / rules updated March 2012"
scope: "base game"
sources:
  - id: "src-006"
    title: "How to play Mage Knight — UltraBoardGames"
    url: "https://www.ultraboardgames.com/mage-knight/game-rules.php"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-03"
    notes: "Secondary action summary."
  - id: "src-007"
    title: "Movement in Mage Knight — UltraBoardGames"
    url: "https://www.ultraboardgames.com/mage-knight/movement.php"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-03"
    notes: "Secondary movement/exploration detail."
confidence: medium
status: needs_followup
---

## Summary

A regular turn permits movement, exploration during movement, then usually one action: combat, interaction/recruitment/healing at an inhabited site, or no action. Rest is the alternate turn type for shedding cards/wounds according to rules not fully verified this run.

## Source-backed facts

- Claim: On a turn a player may move and fight/interact, stay and fight/interact, move and do nothing, or do nothing.
  Source: src-006
  Evidence: Extract list under "One Turn" gives those four possibilities.
  Confidence: medium
- Claim: Villages let players spend influence to recruit suitable units and buy healing.
  Source: src-006
  Evidence: Extract: "at a village, you can recruit a village Unit and buy points of Healing".
  Confidence: medium
- Claim: Challenging an adjacent enemy counts as the turn's action.
  Source: src-006
  Evidence: Extract: "This counts as your action this turn and you can only do one action on your turn."
  Confidence: medium
- Claim: Exploration is part of movement, not an action.
  Source: src-007
  Evidence: Extract: "Exploring is not an action, it is done as part of movement."
  Confidence: medium
- Claim: Moving around certain enemies can provoke combat and end movement.
  Source: src-007
  Evidence: Extract: "the attack immediately ends the movement... unused Move points are lost".
  Confidence: medium

## Rules / Mechanics

Action categories:

- Movement: spend Move points, pay terrain costs, pass/avoid/provoke enemies.
- Explore: reveal and place new tiles as a movement expense.
- Interact: spend Influence, modified by reputation, to recruit/buy services.
- Combat: challenge or provoke enemies; resolve with ranged/siege, block, damage, and attack phases per secondary summary.
- Rest: recover hand quality/wounds at opportunity cost.

## Player friction

The key ambiguity burden is site-specific: every location changes which action is legal and what reward table applies. Enemy proximity changes movement and action permission at once.

## Praised design

The action system is severe because it makes opportunity cost physical. Ending one hex short or using influence instead of attack is not a flavor choice; it is a lost turn tempo.

## Design implications for SomberSoft

- Movement that can reveal content before action creates suspense without random event spam.
- Reputation-modified shopping is a clean way to make moral/violent choices matter mechanically.
- Keep "one action after movement" visible on player aid; this rule carries the game.

## Open questions

- Add official combat phase page references.
- Verify Rest details directly from official rulebook.
