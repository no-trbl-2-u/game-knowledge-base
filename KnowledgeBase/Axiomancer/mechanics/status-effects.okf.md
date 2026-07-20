---
okf_version: 0.2
type: digital_card_sources
sources:
  - id: "src-001"
    title: "Effect system types"
    url: "file:///root/Workspace/SomberSoft/Axiomancer/axiomancer-mechanics/src/Effects/types.ts"
    kind: other
    provenance: official
    retrieved_at: "2026-07-20"
    notes: "Effect payload and stacking contract."
  - id: "src-002"
    title: "Generated effect catalog"
    url: "file:///root/Workspace/SomberSoft/Axiomancer/devlog/data/effects.json"
    kind: other
    provenance: official
    retrieved_at: "2026-07-13"
    notes: "24 generated effects."
confidence: high
status: verified
---

## Summary

Effects are runtime buffs and debuffs. The current catalog contains 24 entries: 14 buffs and 10 debuffs. Effects can modify stats, deal damage over time, regenerate health, restrict actions, alter advantage, or change roll/defense values.

## Source-backed facts

- Claim: Reapplication uses one of none, intensity, or duration stacking.
  Source: src-001
  Evidence: `EffectStacking`.
  Confidence: high

- Claim: Effect tiers are 1 auto-apply, 2 opposed-roll, and 3 only critical-resist-repelled.
  Source: src-001
  Evidence: `EffectTier` documentation.
  Confidence: high

- Claim: DoTs support round-start, round-end, card-played, damage-instance, and payoff trigger clocks.
  Source: src-001
  Evidence: `DotTriggerClock`.
  Confidence: high

- Claim: The effect payload exposes first-class surfaces for vulnerability, stance-keyed vulnerability, stance revelation/blur/lock, threat-rider suppression, and alternate DoT growth/decay behavior.
  Source: src-001
  Evidence: `EffectPayload` fields `damageTakenMult`, `damageTakenMultForStance`, `revealsStance`, `blursStanceHints`, `lockedStance`, `suppressesThreatRiders`, `dotModifiers`, and `tickAmplifyFlat`.
  Confidence: high

## Design pressure

Status effects are not decoration: they are the main efficient route to dropping enemy HP, with cards and threat branches acting as their delivery graph.
