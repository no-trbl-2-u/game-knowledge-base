---
okf_version: 0.2
type: digital_card_sources
sources:
  - id: "src-001"
    title: "Combat dice implementation"
    url: "file:///root/Workspace/SomberSoft/Axiomancer/axiomancer-mechanics/src/Combat/combat.dice.ts"
    kind: other
    provenance: official
    retrieved_at: "2026-07-13"
    notes: "Seeded stance dice, reserve, and floating dice."
  - id: "src-002"
    title: "Cards system types"
    url: "file:///root/Workspace/SomberSoft/Axiomancer/axiomancer-mechanics/src/Cards/types.ts"
    kind: other
    provenance: official
    retrieved_at: "2026-07-13"
    notes: "Five combat resource counters."
confidence: high
status: verified
---

## Summary

Combat drafts three dice each turn from heart/body/mind/wild/X faces. Unused dice become Conviction tokens; X is locked, wild can power any color. Spent dice remain spent unless card or Fate Engine effects reclaim them.

## Source-backed facts

- Claim: The turn pool is three dice and the face bag is heart, body, mind, wild, X, X.
  Source: src-001
  Evidence: `TURN_DICE_COUNT` and `COMBAT_DIE_FACES`.
  Confidence: high

- Claim: The Reserve holds at most two dice and ripens each die to a cap of two pips.
  Source: src-001
  Evidence: `RESERVE_MAX` and `RESERVE_PIP_CAP`.
  Confidence: high

- Claim: Player card resources are heart, body, mind, fallacy, and paradox and live on `CombatState`.
  Source: src-002
  Evidence: `CombatResources` and its ownership comment.
  Confidence: high

## Design pressure

The economy links honest randomness to delayed value: a dead X face is friction, while reserve, pips, floating dice, and Conviction are engines that turn waste into future choice.
