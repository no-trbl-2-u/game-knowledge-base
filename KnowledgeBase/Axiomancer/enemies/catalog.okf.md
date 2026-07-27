---
okf_version: 0.2
type: digital_card_sources
sources:
  - id: "src-001"
    title: "Axiomancer enemies JSON"
    url: "file:///root/Workspace/SomberSoft/Axiomancer/devlog/data/enemies.json"
    kind: other
    provenance: official
    retrieved_at: "2026-07-20"
    notes: "Generated enemy catalog projection."
confidence: high
status: verified
---

## Generated enemy index

- Claim: The enemy catalog contains 56 records.
  Source: src-001
  Evidence: JSON array length at 2026-07-27 retrieval; SHA-256 `e896356b35adafb199b77831ac778388d26c79f2b5f537708c98a79e0d4b8078`.
  Confidence: high

- Claim: Catalog records expose id, name, level, difficulty, maxHealth, body/mind/heart stats, logic, stance hint, and card list.
  Source: src-001
  Evidence: generated record shape.
  Confidence: high

- Claim: The generated difficulty projection currently contains 14 bosses, not 16; the two repeated names are distinct records rather than duplicate rows.
  Source: src-001
  Evidence: `enemies.json` difficulty counter and distinct `id`/`level` fields for repeated names at 2026-07-20 retrieval.
  Confidence: high

## Difficulty distribution

Elite 21; boss 14; normal 15; unique 4; simple 2. The two repeated names in the generated projection are distinct records with different IDs/levels. Logic profiles are strategic 18, boss 16, aggressive 9, balanced 5, defensive 5, and random 3.
