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
    retrieved_at: "2026-07-20"
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

- Claim: The generated catalog currently contains 79 card projections, 24 effects, and 56 enemies.
  Source: src-003
  Evidence: generated JSON array lengths at 2026-07-27 retrieval; SHA-256 cards `90147e3c4172a0872f87e8570243d1dc149f254149aedf1366a71f8d330628e7`, effects `41add8400bae0e8939ffda9ae358930c3653b5f78d741886227998f3aa6dac35`, enemies `e896356b35adafb199b77831ac778388d26c79f2b5f537708c98a79e0d4b8078`.
  Confidence: high

- Claim: Combat uses heart/body/mind stances and action phases including attack, defend, item, flee, spare, and exploit.
  Source: src-002
  Evidence: `Stance`, `Action`, and `CombatPhase` declarations.
  Confidence: high

- Claim: The current mechanics work includes a player-cracked GLYPHS pilot, Upgradeable Dice as the default playtest witness, and preserved persistent-keyword contracts.
  Source: src-001
  Evidence: Axiomancer commits `ac1853b2` (GLYPHS pilot), `afd26600` (Upgradeable Dice witness default), and `53bc4050` (persistent keyword contracts), inspected 2026-07-27.
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
