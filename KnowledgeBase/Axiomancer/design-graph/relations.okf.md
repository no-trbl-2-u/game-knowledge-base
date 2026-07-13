---
okf_version: 0.2
type: pattern
confidence: high
status: verified
---

## Graph seeds

- `combat` --uses--> `stance-rps`: heart > body > mind > heart.
  Source: `axiomancer-mechanics/src/Combat/types.ts`
  Evidence: Stance contract.
  Confidence: high

- `combat` --resolves-through--> `authored-threat-sequence`.
  Source: `axiomancer-mechanics/src/Combat/combat.threat.ts`
  Evidence: 2–5 phase authored sequence model.
  Confidence: high

- `cards` --spend--> `dice-and-resources`.
  Source: `axiomancer-mechanics/src/Cards/types.ts`
  Evidence: five combat resource counters and card effect payloads.
  Confidence: high

- `status-effects` --feed--> `rupture/reap/payoff`.
  Source: `axiomancer-mechanics/src/Cards/types.ts`
  Evidence: RUPTURE consumes afflictions and detonates DoT fuel.
  Confidence: high

- `preset-decks` --enforce--> `color-law`.
  Source: `axiomancer-mechanics/src/Combat/combat.deck-presets.ts`
  Evidence: each preset carries 5 body / 5 mind / 5 heart cards.
  Confidence: high

## Comparison-ready archetypes

- Hazard-pattern combat: persistent board objects, full-information threat patterns, and pressure from future phases.
- Slay-the-Spire-like deck loop: card draw, discard/recycle, focused drafts, and reward-driven library access.
- Pokémon-like mercy resolution: befriending is a distinct combat outcome rather than mere victory flavor.

These are structural archetype labels, not claims of copied implementation. External prior-art records remain in the BoardGames and DigitalCardGames corpora.
