---
okf_version: 0.2
type: game_index
game:
  title: "Axiomancer"
  slug: "axiomancer"
  bgg_id: null
  publisher: "SomberSoft"
  year: 2026
  weight: null
  edition: "live monorepo"
scope: "base game"
mechanics: [card-play-conflict-resolution, deck-building, dice-rolling, hand-management, resource-management, push-your-luck, engine-building, action-selection]
sources:
  - id: "src-001"
    title: "Axiomancer monorepo agent guide"
    url: "file:///root/Workspace/SomberSoft/Axiomancer/AGENTS.md"
    kind: other
    provenance: official
    retrieved_at: "2026-07-13"
    notes: "Defines package ownership and live engine-data surfaces."
  - id: "src-002"
    title: "Axiomancer combat types"
    url: "file:///root/Workspace/SomberSoft/Axiomancer/axiomancer-mechanics/src/Combat/types.ts"
    kind: other
    provenance: official
    retrieved_at: "2026-07-13"
    notes: "Defines stances, actions, phases, and combat resources."
  - id: "src-003"
    title: "Axiomancer generated catalog data"
    url: "file:///root/Workspace/SomberSoft/Axiomancer/devlog/data/"
    kind: other
    provenance: official
    retrieved_at: "2026-07-13"
    notes: "Generated cards, effects, and enemies JSON."
confidence: high
status: verified
---

## Summary

Axiomancer is a philosophy-themed RPG whose current engine centers on Hazard-pattern combat: stance reads, persistent dice, authored enemy threats, status effects, and card-driven combat engines. The live monorepo is authoritative; the generated devlog catalog is a query-friendly projection of the same engine libraries.

## Source-backed facts

- Claim: Rules and deterministic game state belong to `axiomancer-mechanics`, while Mobile owns presentation and card-editor is a local tool.
  Source: src-001
  Evidence: `AGENTS.md` package table and hard rules.
  Confidence: high

- Claim: The current catalog contains 70 cards, 24 effects, and 56 enemies.
  Source: src-003
  Evidence: generated JSON arrays at retrieval time.
  Confidence: high

- Claim: Combat uses heart/body/mind stances and action phases including attack, defend, item, flee, spare, and exploit.
  Source: src-002
  Evidence: `Stance`, `Action`, and `CombatPhase` declarations.
  Confidence: high

## Linked records

- [Combat](mechanics/combat.okf.md)
- [Dice and resources](mechanics/dice-resources.okf.md)
- [Threat patterns and enemies](mechanics/enemies-threats.okf.md)
- [Cards and decks](mechanics/cards-decks.okf.md)
- [Status effects](mechanics/status-effects.okf.md)
- [Card catalog index](cards/catalog.okf.md)
- [Effect catalog index](effects/catalog.okf.md)
- [Enemy catalog index](enemies/catalog.okf.md)
- [Design graph seeds](design-graph/relations.okf.md)
