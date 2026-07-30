---
okf_version: 0.2
type: pattern
sources:
  - id: "src-001"
    title: "Axiomancer combat dice and threat contracts"
    url: "repo://axiomancer-mechanics/src/Combat"
    kind: other
    provenance: official
    retrieved_at: "2026-07-30"
    notes: "Repo-local combat.dice.ts and combat.threat.ts source records."
  - id: "src-002"
    title: "Axiomancer card theme registry"
    url: "repo://axiomancer-mechanics/src/Cards/card-themes.ts"
    kind: other
    provenance: official
    retrieved_at: "2026-07-30"
    notes: "Repo-local theme and keyword family registry."
confidence: medium
status: verified
---

## Distilled design questions

- Claim: The central graph tension is honest randomness versus authored legibility: X faces and dice scarcity create uncertainty, while full threat sequences and stance tells preserve agency.
  Source: src-001
  Evidence: die-face law and full-information threat contract.
  Confidence: high

- Claim: Theme identity is carried by keyword families and payoff verbs rather than isolated card names.
  Source: src-002
  Evidence: ten themes with shared utility keyword families.
  Confidence: high

## Brainstorming seeds

1. Measure whether players understand why a dead X face was valuable after Reserve/Conviction conversion.
2. Test whether threat branches feel like prediction or bookkeeping when both forks are visible.
3. Compare deck identity by payoff timing: affliction detonation, peroration conclusion, forge overflow, charm capitulation, and echo replay.
4. Track mercy outcomes separately from kills; resolution success is not raw victory alone.
5. Audit the player-facing language of persistent card engines: can a player distinguish a timed FREE line from a permanent PAID line without consulting a glossary?
6. Compare the four current effect surfaces—advantage, DoT, control, and stat change—by how often they create a meaningful next-turn choice rather than merely increasing damage.

These are hypotheses for future playtests, not conclusions about balance.
