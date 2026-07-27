---
okf_version: 0.2
type: digital_card_sources
sources:
  - id: "src-001"
    title: "Axiomancer cards JSON"
    url: "file:///root/Workspace/SomberSoft/Axiomancer/devlog/data/cards.json"
    kind: other
    provenance: official
    retrieved_at: "2026-07-20"
    notes: "Generated catalog projection; source of counts and printed fields."
confidence: high
status: verified
---

## Generated card index

- Claim: The generated card catalog contains 79 card projections.
  Source: src-001
  Evidence: JSON array length at 2026-07-27 retrieval; SHA-256 `90147e3c4172a0872f87e8570243d1dc149f254149aedf1366a71f8d330628e7`.
  Confidence: high

- Claim: The catalog exposes stable id, name, printed chip metadata, pricing, and lines for each card.
  Source: src-001
  Evidence: generated record shape.
  Confidence: high

## Retrieval fields

`id`, `name`, `pricing`, `chips`, and `lines` are the compact query surface. Current rank counts are Doxa 12, Lemma 12, Thesis 16, Theorem 13, Axiom 18, and Aporia 8. Theme counts are bulwark 10; akrasia, forge, oracle, charm, echo, affliction, and peroration 8 each; control 7; harvest 6. The projection contains 64 spells, 9 enchantments, and 6 disenchants, with 61 starter and 18 reward records. Raw records remain in the Axiomancer source tree; this KB record preserves the source trail rather than mirroring every printed face.

## Current content delta

- Claim: Several paid and persistent card summaries were clarified in the current working tree, including DoT wording, RUPTURE/SIPHON/RECALL sequencing, and the Venom and Vein / Suppurating Curse persistent clauses.
  Source: src-001
  Evidence: `cards.library.ts` working-tree diff for `slippery-slope`, `festering-argument`, `curry's-conversion`, `resonance-detonation`, `venom-and-vein`, `suppurating-curse`, and `recurring-symptom`.
  Confidence: high
