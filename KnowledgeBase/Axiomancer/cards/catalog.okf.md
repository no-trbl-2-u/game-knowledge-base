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

- Claim: The generated card catalog contains 70 cards.
  Source: src-001
  Evidence: JSON array length at 2026-07-20 retrieval; SHA-256 `0145cb2588548d7aeec7b6c185f6085660f42c9ac822363fb0c714b492211360`.
  Confidence: high

- Claim: The catalog exposes stable id, name, printed chip metadata, pricing, and lines for each card.
  Source: src-001
  Evidence: generated record shape.
  Confidence: high

## Retrieval fields

`id`, `name`, `pricing`, `chips`, and `lines` are the compact query surface. Current rank counts are Doxa 10, Lemma 10, Thesis 10, Theorem 10, Axiom 20, and Aporia 10. The live card library also exposes explicit paid summaries for die/state interactions such as rerolling spent dice, converting DoTs, and firing recalled FREE lines; the generated projection preserves those lines without duplicating the full library here. Raw records remain in the Axiomancer source tree; this KB record preserves the source trail rather than mirroring every printed face.

## Current content delta

- Claim: Several paid and persistent card summaries were clarified in the current working tree, including DoT wording, RUPTURE/SIPHON/RECALL sequencing, and the Venom and Vein / Suppurating Curse persistent clauses.
  Source: src-001
  Evidence: `cards.library.ts` working-tree diff for `slippery-slope`, `festering-argument`, `curry's-conversion`, `resonance-detonation`, `venom-and-vein`, `suppurating-curse`, and `recurring-symptom`.
  Confidence: high
