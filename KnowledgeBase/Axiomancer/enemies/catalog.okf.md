---
okf_version: 0.2
type: digital_card_sources
sources:
  - id: "src-001"
    title: "Axiomancer enemies JSON"
    url: "file:///root/Workspace/SomberSoft/Axiomancer/devlog/data/enemies.json"
    kind: other
    provenance: official
    retrieved_at: "2026-07-13"
    notes: "Generated enemy catalog projection."
confidence: high
status: verified
---

## Generated enemy index

- Claim: The enemy catalog contains 56 records.
  Source: src-001
  Evidence: JSON array length at retrieval time.
  Confidence: high

- Claim: Catalog records expose id, name, level, difficulty, maxHealth, body/mind/heart stats, logic, stance hint, and card list.
  Source: src-001
  Evidence: generated record shape.
  Confidence: high

## Difficulty distribution

Elite 21; boss 16; normal 15; unique 4; simple 2. Logic profiles are strategic 18, boss 16, aggressive 9, balanced 5, defensive 5, and random 3.
