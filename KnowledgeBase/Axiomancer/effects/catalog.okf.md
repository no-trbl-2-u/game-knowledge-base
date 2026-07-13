---
okf_version: 0.2
type: digital_card_sources
sources:
  - id: "src-001"
    title: "Axiomancer effects JSON"
    url: "file:///root/Workspace/SomberSoft/Axiomancer/devlog/data/effects.json"
    kind: other
    provenance: official
    retrieved_at: "2026-07-13"
    notes: "Generated effect catalog projection."
confidence: high
status: verified
---

## Generated effect index

- Claim: The effect catalog contains 24 entries: 14 buffs and 10 debuffs.
  Source: src-001
  Evidence: JSON array length and `type` counts at retrieval time.
  Confidence: high

- Claim: Catalog records expose id, name, type, glyph, color, kind, chips, and lines.
  Source: src-001
  Evidence: generated record shape.
  Confidence: high

## Kind distribution

Current kinds are statup (10), dot (5), regen (2), control (2), statdown (2), thorns (1), advantage (1), and mark (1).
