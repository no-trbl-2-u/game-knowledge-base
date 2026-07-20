---
okf_version: 0.2
type: digital_card_sources
sources:
  - id: "src-001"
    title: "Combat types"
    url: "file:///root/Workspace/SomberSoft/Axiomancer/axiomancer-mechanics/src/Combat/types.ts"
    kind: other
    provenance: official
    retrieved_at: "2026-07-20"
    notes: "Stance/action/phase contract."
  - id: "src-002"
    title: "Combat threat resolver"
    url: "file:///root/Workspace/SomberSoft/Axiomancer/axiomancer-mechanics/src/Combat/combat.threat.ts"
    kind: other
    provenance: official
    retrieved_at: "2026-07-13"
    notes: "Authored threat sequences and branch resolution."
confidence: high
status: verified
---

## Summary

Combat is a simultaneous-read encounter. The player selects a heart/body/mind stance and an action; the enemy exposes an authored threat phase with a stance tell, damage, and optional effect. Stance advantage is heart > body > mind > heart.

## Source-backed facts

- Claim: The combat loop has choosing-stance, choosing-action, resolving, mercy-choice, and ended phases.
  Source: src-001
  Evidence: `CombatPhase` union.
  Confidence: high

- Claim: Enemy threats are authored sequences of 2–5 phases and are revealed in full at combat start.
  Source: src-002
  Evidence: module contract in `combat.threat.ts`.
  Confidence: high

- Claim: Conditional threat branches commit from observable phase-start state without RNG.
  Source: src-002
  Evidence: `evaluateThreatBranchCondition` and `commitThreatBranch`.
  Confidence: high

- Claim: Mercy is an explicit combat phase and `spare`/`exploit` actions, not an implicit victory side effect.
  Source: src-001
  Evidence: `CombatPhase` includes `mercy_choice`; `Action` includes `spare` and `exploit`; state carries `mercyChoiceActive` and `friendshipResolutionAuthorized`.
  Confidence: high

## Design pressure

The engine makes enemy intent legible while preserving the stance read. This creates a graph edge between telegraph quality, player agency, and status timing; balance cannot be judged by raw HP alone.
