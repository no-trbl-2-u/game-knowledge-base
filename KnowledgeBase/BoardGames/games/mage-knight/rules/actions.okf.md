---
okf_version: 0.2
type: rule_category
game:
  title: "Mage Knight Board Game"
  slug: "mage-knight"
  bgg_id: 96848
  publisher: "WizKids"
  year: 2011
  edition: "English base game / rules updated March 2012"
scope: "base game"
mechanics: [deck-building, hand-management, card-play-conflict-resolution, modular-board, grid-movement, dice-rolling, cooperative-game, solo-solitaire-game, variable-player-powers, campaign-game]
sources:
  - id: "src-003"
    title: "MK_rulebook_ENG_searchable-mar2012.pdf"
    url: "https://web.archive.org/web/20201118050857/http://wizkidsgames.com/wp-content/uploads/mage/MK_rulebook_ENG_searchable-mar2012.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-15"
    notes: "Official rulebook; WizKids host 500s, text extracted from Wayback Machine snapshot 2026-07-08. Audit 2026-07-15: wizkidsgames.com host confirmed dead (ERR_TLS_CERT_ALTNAME_INVALID); url switched to the confirmed-live Wayback Machine snapshot (HTTP 200). See sources.okf.md src block for full remediation detail."
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
confidence: high
status: verified
---

## Summary

A regular turn permits movement, exploration during movement, then usually one action: combat, interaction/recruitment/healing at an inhabited site, or no action. Rest is the alternate turn type for shedding cards/wounds. Verified against the official rulebook (via 2026-07-08 Wayback Machine retrieval).

## Source-backed facts

- Claim: On a turn a player may move and fight/interact, stay and fight/interact, move and do nothing, or do nothing.
  Source: src-003
  Evidence: Rulebook p.5: after optional movement, "you may choose to perform one (and only one)" of interaction/exploration/combat, "or if you do not want to take any of these actions, you can do nothing."
  Confidence: high
- Claim: Villages let players spend influence to recruit suitable units and buy healing.
  Source: src-003
  Evidence: Rulebook p.7: "Healing points can be bought at villages for 3 Influence points and at monasteries for 2 Influence points"; recruiting a Unit costs the Influence listed on the Unit card if its type matches the site.
  Confidence: high
- Claim: Challenging an adjacent enemy counts as the turn's action.
  Source: src-003
  Evidence: Rulebook p.6: "If there are rampaging enemies... in one or more adjacent spaces, you can decide to challenge one or more of them in combat," listed among the mutually exclusive voluntary actions for the turn.
  Confidence: high
- Claim: Exploration is part of movement, not an action.
  Source: src-003
  Evidence: Rulebook p.6: "During movement, you can reveal new map tiles... To reveal a tile, a player has to spend 2 Move points," under the "Movement" section rather than as an action.
  Confidence: high
- Claim: Moving around certain enemies can provoke combat and end movement.
  Source: src-003
  Evidence: Rulebook p.6: "If you provoke a rampaging enemy (i.e. move directly from a space adjacent to their token to another space adjacent to the same token), you are attacked by that enemy and your movement immediately ends."
  Confidence: high
- Claim: Combat resolves in four phases: Ranged/Siege Attack, Block, Assign Damage, then Attack.
  Source: src-003
  Evidence: Rulebook p.7: "the combat has four phases: Ranged and Siege Attack phase... Block phase... Assign Damage phase... Attack phase."
  Confidence: high
- Claim: Resting offers a Standard Rest (discard one non-Wound card plus any Wounds) or a Slow Recovery (discard one Wound card, only available if the hand is all Wounds); a player cannot move, fight, or interact while resting.
  Source: src-003
  Evidence: Rulebook p.5: "If Resting, you cannot move, initiate combat or interact with locals... Standard Rest: Discard one non-Wound card and any number of Wound cards... Slow Recovery: Reveal your hand to show you have only Wound cards. Then, discard one Wound card."
  Confidence: high

## Rules / Mechanics

Action categories:

- Movement: spend Move points, pay terrain costs, pass/avoid/provoke enemies.
- Explore: reveal and place new tiles as a movement expense.
- Interact: spend Influence, modified by reputation, to recruit/buy services.
- Combat: challenge or provoke enemies; resolve with ranged/siege, block, damage, and attack phases (rulebook p.7).
- Rest: recover hand quality/wounds at opportunity cost.

## Player friction

The key ambiguity burden is site-specific: every location changes which action is legal and what reward table applies. Enemy proximity changes movement and action permission at once.

## Praised design

The action system is severe because it makes opportunity cost physical. Ending one hex short or using influence instead of attack is not a flavor choice; it is a lost turn tempo.

## Retry notes
- 2026-07-08: Resolved. Official rulebook combat-phase and Rest text retrieved via Wayback Machine snapshot (WizKids' own host still returns HTTP 500); page references added above.
