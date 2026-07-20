---
okf_version: 0.2
type: digital_card_sources
sources:
  - id: "src-001"
    title: "Card system types"
    url: "file:///root/Workspace/SomberSoft/Axiomancer/axiomancer-mechanics/src/Cards/types.ts"
    kind: other
    provenance: official
    retrieved_at: "2026-07-20"
    notes: "Card categories, ranks, rarities, types, and special mechanics."
  - id: "src-002"
    title: "Combat deck presets"
    url: "file:///root/Workspace/SomberSoft/Axiomancer/axiomancer-mechanics/src/Combat/combat.deck-presets.ts"
    kind: other
    provenance: official
    retrieved_at: "2026-07-13"
    notes: "Ten themed 15-card presets and color law."
  - id: "src-003"
    title: "Generated card catalog"
    url: "file:///root/Workspace/SomberSoft/Axiomancer/devlog/data/cards.json"
    kind: other
    provenance: official
    retrieved_at: "2026-07-13"
    notes: "70 generated card records."
confidence: high
status: verified
---

## Summary

Cards are fallacies and paradoxes in a five-resource resonance economy. The live library has 70 catalog records. Card ranks map to common, uncommon, and rare bands; card types are spell, enchantment, and disenchant.

## Source-backed facts

- Claim: The rank ladder is Doxa, Lemma, Thesis, Theorem, Axiom, and Aporia.
  Source: src-001
  Evidence: `CARD_RANK_NAMES`.
  Confidence: high

- Claim: Ten themed presets use a 15-card 4/4/2/2/1/1/1 recipe and enforce 5 body, 5 mind, 5 heart cards.
  Source: src-002
  Evidence: module contract and `recipe` helper.
  Confidence: high

- Claim: Focused seeded drafts weight focus-fitting verb classes at 4x and guarantee defend plus status coverage when possible.
  Source: src-002
  Evidence: `FOCUS_WEIGHT`, `STATUS_VERB_CLASSES`, and draft contract in `combat.deck-draft.ts`.
  Confidence: high

- Claim: The card contract treats the paid line as a broad verb surface including die manipulation, DoT conversion/payoffs, alternate-win pressure, and replay/recall operations rather than raw strike damage.
  Source: src-001
  Evidence: `CardSpecialMechanic` and `CardRider` unions include RUPTURE, REAP, SWAY, PERORATION, OMEN, ECHO, REPLAY, and die-bank/forge operations; the `Card` contract documents that the damage step is removed.
  Confidence: high

## Catalog link

See [generated card catalog](../cards/catalog.okf.md) for current counts and retrieval fields.
