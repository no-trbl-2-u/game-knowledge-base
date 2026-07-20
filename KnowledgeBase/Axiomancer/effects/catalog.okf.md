---
okf_version: 0.2
type: digital_card_sources
sources:
  - id: "src-001"
    title: "Axiomancer effects JSON"
    url: "file:///root/Workspace/SomberSoft/Axiomancer/devlog/data/effects.json"
    kind: other
    provenance: official
    retrieved_at: "2026-07-20"
    notes: "Generated effect catalog projection."
confidence: high
status: verified
---

## Generated effect index

- Claim: The effect catalog contains 24 entries: 14 buffs and 10 debuffs.
  Source: src-001
  Evidence: JSON array length and `type` counts at 2026-07-20 retrieval; SHA-256 `41add8400bae0e8939ffda9ae358930c3653b5f78d741886227998f3aa6dac35`.
  Confidence: high

- Claim: Catalog records expose id, name, type, glyph, color, kind, chips, and lines.
  Source: src-001
  Evidence: generated record shape.
  Confidence: high

- Claim: The current effect catalog's distribution has shifted toward advantage entries: four advantage records now exist, while statup records total seven.
  Source: src-001
  Evidence: generated `effects.json` kind counts at 2026-07-20 retrieval.
  Confidence: high

## Kind distribution

Current kinds are statup (7), dot (5), advantage (4), regen (2), control (2), statdown (2), thorns (1), and mark (1). The `type` split remains 14 buffs / 10 debuffs.
