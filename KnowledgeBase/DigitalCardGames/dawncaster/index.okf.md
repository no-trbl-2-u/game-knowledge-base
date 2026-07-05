---
okf_version: 0.2
type: digital_card_game_index
game:
  title: "Dawncaster"
  slug: "dawncaster"
scope: "digital card corpus; first 500 Neurrone DB cards by name"
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

- Generated the first 500 card records from a local SQLite mirror containing 1692 cards.
- Ordering is deterministic: case-insensitive card name, then numeric card id.
- Each record preserves card id, name, category, type, rarity, expansion, color, cost vector, raw rules HTML, plain rules text, and observed keyword/token leads.

## Source-backed facts

- Claim: The local Neurrone SQLite mirror contains 1692 Dawncaster card rows.
  Source: src-001
  Evidence: `select count(*) from cards` against the harvested SQLite DB.
  Confidence: high

## Design implications for SomberSoft

- This corpus is machine-generated evidence for card-library scale, wording patterns, status vocabulary, and cost/action taxonomy.
- The records are deliberately atomic so future agents can grep, cluster, parse, and curate without wading through prose sludge.

## Open questions

- Keyword definitions still require a dedicated glossary import and manual source confidence pass.
- Blightbane/API wording should be compared against Neurrone rows before elevating any record from draft to verified.
