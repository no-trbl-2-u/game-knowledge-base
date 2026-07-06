---
okf_version: 0.2
type: rule_category
game:
  title: "Root"
  slug: "root"
  bgg_id: 237182
  publisher: "Leder Games"
  year: 2018
  weight: 3.84
  edition: "base game / current Leder rules library"
scope: "base game"
mechanics: [action-points, action-queue, action-retrieval, area-majority-influence, area-movement, dice-rolling, hand-management, multi-use-cards, negotiation, variable-player-powers, variable-setup]
sources:
  - id: "src-003"
    title: "Leder Rules Library — Root"
    url: "https://rules.ledergames.com/?product=root"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-06"
    notes: "Official live rules and errata library."
  - id: "src-004"
    title: "How to play Root: board game's rules, setup and scoring explained"
    url: "https://www.dicebreaker.com/games/root-game/how-to/how-to-play-root-board-game"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-06"
    notes: "Secondary rules overview."
confidence: high
status: verified
---

## Summary

Root uses a fixed three-phase turn skeleton for every player, but faction boards define what each faction actually does in those phases. The result is procedural asymmetry under a common clock.

## Source-backed facts

- Claim: Each player turn has three phases: Birdsong, Daylight, and Evening.
  Source: src-003
  Evidence: "Each player's turn has three phases: Birdsong, Daylight, and Evening."
  Confidence: high
- Claim: Start-of-phase and end-of-phase timing are explicitly ordered around everything else in the phase.
  Source: src-003
  Evidence: "Anything that says 'at start of' a phase happens before everything else in the phase, and anything that says 'at end of' happens after everything else in the phase."
  Confidence: high
- Claim: After Evening ends, the next clockwise player begins their turn and play continues until a player has won.
  Source: src-003
  Evidence: "After a player ends Evening, the next clockwise player begins their turn. Play continues until one player has won the game."
  Confidence: high
- Claim: Dicebreaker summarizes that what a player can do in each phase is determined by the list on their faction board.
  Source: src-004
  Evidence: "What a player can do in each of these phases is determined by the list on their faction board."
  Confidence: high

## Rules / Mechanics

The global turn order is simple enough to remember. The burden shifts to faction-specific phase menus. This is a strong pattern: keep timing universal, put complexity into player-local scripts.

## Open questions

- Whether digital implementations of Root reduce cognitive load primarily by enforcing the faction scripts and timing gates.
