---
okf_version: 0.2
type: digital_card_sources
sources:
  - id: "src-001"
    title: "Axiomancer cards JSON"
    url: "file:///root/Workspace/SomberSoft/Axiomancer/devlog/data/cards.json"
    kind: other
    provenance: official
    retrieved_at: "2026-07-13"
    notes: "Generated catalog projection; source of counts and printed fields."
confidence: high
status: verified
---

## Generated card index

- Claim: The generated card catalog contains 70 cards.
  Source: src-001
  Evidence: JSON array length at retrieval time.
  Confidence: high

- Claim: The catalog exposes stable id, name, printed chip metadata, pricing, and lines for each card.
  Source: src-001
  Evidence: generated record shape.
  Confidence: high

## Retrieval fields

`id`, `name`, `pricing`, `chips`, and `lines` are the compact query surface. Current rank counts are Doxa 10, Lemma 10, Thesis 10, Theorem 10, Axiom 20, and Aporia 10. Raw records remain in the Axiomancer source tree; this KB record preserves the source trail rather than mirroring every printed face.
