---
okf_version: 0.2
type: digital_card_sources
sources:
  - id: "src-001"
    title: "Generated enemy catalog"
    url: "file:///root/Workspace/SomberSoft/Axiomancer/devlog/data/enemies.json"
    kind: other
    provenance: official
    retrieved_at: "2026-07-20"
    notes: "56 generated enemy records."
  - id: "src-002"
    title: "Threat sequence resolver"
    url: "file:///root/Workspace/SomberSoft/Axiomancer/axiomancer-mechanics/src/Combat/combat.threat.ts"
    kind: other
    provenance: official
    retrieved_at: "2026-07-13"
    notes: "Threat phases, difficulty multipliers, and intent derivation."
confidence: high
status: verified
---

## Summary

The current enemy catalog contains 56 records across simple, normal, elite, boss, and unique difficulty bands. Threat damage is scaled by level and difficulty; the current resolver uses 0.7, 0.92, 1.08, 1.5, and 1.45 multipliers respectively.

## Source-backed facts

- Claim: The catalog contains 21 elite, 16 boss, 15 normal, 4 unique, and 2 simple enemies.
  Source: src-001
  Evidence: generated `enemies.json` difficulty counts at retrieval time.
  Confidence: high

- Claim: Threat intent derives from damage, debuff, and self-serving effects into pass, damage, debuff, buff, or combo classes.
  Source: src-002
  Evidence: `deriveIntentType`.
  Confidence: high

- Claim: An enemy executes its phase threat action every phase unless control prevents action.
  Source: src-002
  Evidence: module HP/threat model contract.
  Confidence: high

## Catalog link

See [generated enemy catalog](../enemies/catalog.okf.md) for the current retrieval projection.
