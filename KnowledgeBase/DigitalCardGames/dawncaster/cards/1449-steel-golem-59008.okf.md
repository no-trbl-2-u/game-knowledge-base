---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 59008
  name: "Steel Golem"
  ordinal: 1449
  slug: "steel-golem"
  category: "Equipment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Eclypse"
  color: "Brown"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 3
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Activate"
  - "Durability"
  - "Reduce"
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
    url: "https://blightbane.io/card/Steel_Golem"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Steel Golem

## Card identity

- **Ordinal:** 1449 of 1692 generated cards
- **Source card id:** `59008`
- **Category:** Equipment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Eclypse
- **Color:** Brown
- **Cost summary:** neutral=3

## Source-backed facts

- Claim: `Steel Golem` appears in the Neurrone Dawncaster SQLite card table with id `59008`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Activate to restore 2 Durability. Reduce all damage you take by this Durability. Whenever you take damage, reduce its Durability by 1. Durability (3/3). Unique.

## Raw rules HTML

```html
Activate to restore 2 Durability. Reduce all damage you take by this Durability. Whenever you take damage, reduce its Durability by 1. Durability (3/3). Unique.
```

## Observed keyword / token leads

`Activate`, `Durability`, `Reduce`
