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

- `befriend` --opens--> `mercy-choice` --branches-to--> `spare | exploit`.
  Source: `axiomancer-mechanics/src/Combat/types.ts`
  Evidence: explicit mercy phase and actions in the combat contract.
  Confidence: high

- `card-paid-line` --routes-through--> `die-ledgers + status-payoffs + alternate-win meters`.
  Source: `axiomancer-mechanics/src/Cards/types.ts`
  Evidence: special mechanics and rider unions include RUPTURE, REAP, SWAY, PERORATION, OMEN, ECHO, REPLAY, and die-bank/forge operations.
  Confidence: high

- `card-catalog` --contains--> `starter-and-reward-projections`.
  Source: `/root/Workspace/SomberSoft/Axiomancer/devlog/data/cards.json`
  Evidence: 61 starter and 18 reward records at 2026-07-27 retrieval.
  Confidence: high

- `glyphs-pilot` --adds--> `player-cracked-charging-seals`.
  Source: `/root/Workspace/SomberSoft/Axiomancer` commit `ac1853b2`
  Evidence: commit title and mechanics history inspected 2026-07-27.
  Confidence: high

- `playtest-witness` --defaults-to--> `upgradeable-dice`.
  Source: `/root/Workspace/SomberSoft/Axiomancer` commit `afd26600`
  Evidence: commit title inspected 2026-07-27.
  Confidence: high

## Comparison-ready archetypes

- Hazard-pattern combat: persistent board objects, full-information threat patterns, and pressure from future phases.
- Slay-the-Spire-like deck loop: card draw, discard/recycle, focused drafts, and reward-driven library access.
- Pokémon-like mercy resolution: befriending is a distinct combat outcome rather than mere victory flavor.

These are structural archetype labels, not claims of copied implementation. External prior-art records remain in the BoardGames and DigitalCardGames corpora.
