# Axiomancer Skills ≠ Cards terminology boundary

Use when T asks about combat vocabulary, Hazard-style combat cards, skill access, card libraries, deck presets, or legacy-combat wording drift.

## Canon distinction

- **Skills** are learned/unlocked, always-available combat effects gated by token/resource affordability.
  - Mechanics anchors: `knownSkills`, `CombatState.combatResources`, `canUseSkill()`, `executeSkill()`.
  - UI language: skill, known skill, token cost, resource cost, always-available skill.
- **Cards** are Hazard-style combat deck/hand/staged/reward objects.
  - Mechanics anchors: combat card library/projection, deck presets, draw/discard/stage/reward flows, free/powered halves.
  - UI language: card, combat card, deck, hand, reward card, staged card.
- A card may be generated from a skill-library entry. In that case call it a **projected card** or **skill-sourced card** in technical/debug contexts, but the object in the deck/hand/reward loop is still a card.

## Pitfall

Legacy combat vocabulary tends to call skill-derived combat cards “skills” or “skill cards.” That teaches the wrong model. Correct it immediately in phase briefs, UI copy, docs, accessibility labels, tuning prompts, and dev-menu controls.

## Phase-publication pattern

When T says to clear this up across Axiomancer repos:

1. Load the promoted phase handoff procedure.
2. Sync both `axiomancer-mechanics` and `axiomancer-mobile` clean `main` from origin.
3. Create separate repo-local phases with independent numbering:
   - Mechanics: source/docs/tests/tuning terminology boundary.
   - Mobile: player copy, accessibility labels, presenters, dev-menu deck preset wording, tests, docs.
4. Add top pending rows under each repo's `plan/steps/01_build_plan.md` queue.
5. Add `## Promoted` provenance entries in each `plan/PHASE_CANDIDATES.md`.
6. Run `git diff --check`, commit, and push each repo separately.

## Brief language to preserve

Use this exact doctrine in phase briefs and docs:

> Skills are always-available token-spending effects. Cards are Hazard-style deck/hand/reward objects. A card may be skill-sourced, but once it enters the deck/hand/reward loop it is a card. Skills != Cards.

## Out of scope by default

- No deck rebalance.
- No card-library redesign.
- No combat tuning.
- No mobile-only rules simulation.
- No public API breaking rename unless explicitly approved or compatibility shims are provided.
