---
okf_version: 0.2
type: digital_card_game_index
game:
  title: "Dawncaster"
  slug: "dawncaster"
scope: "digital card corpus; all 1692 Neurrone DB cards by name"
sources:
  - id: "src-001"
    title: "Neurrone Dawncaster SQLite card database"
    url: "https://neurrone.com/dawncaster/dawncaster-cards.db"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-05"
    notes: "Structured card, cost, rarity, type, category, color, and expansion mirror."
  - id: "src-002"
    title: "Blightbane cards codex API"
    url: "https://blightbane.io/api/cards-codex?search=&rarity=&category=&type=&banner=&exp="
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Broader live codex harvested separately; used as cross-reference lead."
confidence: medium
status: draft
---

# Dawncaster card corpus

## Summary

- Generated 1692 card records from a local SQLite mirror.
- Ordering is deterministic: case-insensitive card name, then numeric card id.
- Each record preserves card id, name, category, type, rarity, expansion, color, cost vector, raw rules HTML, plain rules text, and observed keyword/token leads.
- Machine sidecars are generated from the card records by `scripts/generate-dawncaster-card-sidecars.mjs` (freshness enforced by `scripts/validate-okf.mjs`):
  - `cards.csv` — one row per card: identity, category/type/rarity/expansion/color, the nine-field cost vector, observed term leads, and the record path.
  - `cards.json` — full structured records including plain rules text and raw rules HTML.
  - `card-index.csv` — minimal lookup: card number, card name, and observed keyword/token leads.
- Keyword sidecars (`keywords.csv`, `keywords.json`) are described in `keywords.okf.md`.

## Source-backed facts

- Claim: The local Neurrone SQLite mirror contains 1692 Dawncaster card rows.
  Source: src-001
  Evidence: `select count(*) from cards` against the harvested SQLite DB.
  Confidence: high


## Open questions

- Keyword definitions still require a dedicated glossary import and manual source confidence pass.
- Blightbane/API wording should be compared against Neurrone rows before elevating any record from draft to verified.
