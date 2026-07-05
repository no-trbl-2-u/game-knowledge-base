---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 931491
  name: "Avatar of Thunder"
  ordinal: 149
  slug: "avatar-of-thunder"
  category: "Enchantment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Catalyst"
  color: "Orange"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 3
    intstr: 0
    blood: 0
observed_terms:
  - "Chain"
  - "Critical Hit"
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
    url: "https://blightbane.io/card/Avatar_of_Thunder"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Avatar of Thunder

## Card identity

- **Ordinal:** 149 of 1692 generated cards
- **Source card id:** `931491`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Catalyst
- **Color:** Orange
- **Cost summary:** dexstr=3

## Source-backed facts

- Claim: `Avatar of Thunder` appears in the Neurrone Dawncaster SQLite card table with id `931491`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, gain 1 Chain when you draw a card, and draw a card when you inflict a Critical Hit. Unique.

## Raw rules HTML

```html
This combat, gain 1 Chain when you draw a card, and draw a card when you inflict a Critical Hit. Unique.
```

## Observed keyword / token leads

`Chain`, `Critical Hit`
