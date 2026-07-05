---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 792736
  name: "Boots of Speed"
  ordinal: 287
  slug: "boots-of-speed"
  category: "Equipment"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Catalyst"
  color: "Brown"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 1
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Activate"
  - "Durability"
  - "Haste"
sources:
  - id: "src-001"
    title: "Neurrone Dawncaster SQLite card database"
    url: "https://neurrone.com/dawncaster/dawncaster-cards.db"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-05"
    notes: "Local harvested copy: /root/Workspace/reports/dawncaster-card-library/neurrone-dawncaster-cards.db"
  - id: "src-002"
    title: "Blightbane Dawncaster card page"
    url: "https://blightbane.io/card/Boots_of_Speed"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Boots of Speed

## Card identity

- **Ordinal:** 287 of first 500 generated cards
- **Source card id:** `792736`
- **Category:** Equipment
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Catalyst
- **Color:** Brown
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Boots of Speed` appears in the Neurrone Dawncaster SQLite card table with id `792736`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Activate to gain 1 Haste and reduce the cost of the leftmost card in your hand by one. Durability (3/3). Unique.

## Raw rules HTML

```html
Activate to gain 1 Haste and reduce the cost of the leftmost card in your hand by one. Durability (3/3). Unique.
```

## Observed keyword / token leads

`Activate`, `Durability`, `Haste`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
