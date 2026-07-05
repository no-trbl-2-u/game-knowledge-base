---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 41544
  name: "Vulture Soul"
  ordinal: 1638
  slug: "vulture-soul"
  category: "Enchantment"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Eclypse"
  color: "Orange"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 2
    intstr: 0
    blood: 0
observed_terms:
  - "Ferocity"
  - "Poison"
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
    url: "https://blightbane.io/card/Vulture_Soul"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Vulture Soul

## Card identity

- **Ordinal:** 1638 of 1692 generated cards
- **Source card id:** `41544`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Eclypse
- **Color:** Orange
- **Cost summary:** dexstr=2

## Source-backed facts

- Claim: `Vulture Soul` appears in the Neurrone Dawncaster SQLite card table with id `41544`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, when you inflict Poison, gain that much Ferocity. Unique.

## Raw rules HTML

```html
This combat, when you inflict Poison, gain that much Ferocity. Unique.
```

## Observed keyword / token leads

`Ferocity`, `Poison`
