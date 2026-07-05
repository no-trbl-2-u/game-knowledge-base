---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 685876
  name: "Remembrance"
  ordinal: 1200
  slug: "remembrance"
  category: "Action"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Metamorphosis"
  color: "Orange"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 1
  intstr: 0
  blood: 0
observed_terms:
  - "Enchantment"
  - "Soul"
  - "Spend"
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
    url: "https://blightbane.io/card/Remembrance"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Remembrance

## Card identity

- **Ordinal:** 1200 of 1692 generated cards
- **Source card id:** `685876`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Metamorphosis
- **Color:** Orange
- **Cost summary:** dexstr=1

## Source-backed facts

- Claim: `Remembrance` appears in the Neurrone Dawncaster SQLite card table with id `685876`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Spend 1 Soul to delve and play the Enchantment of a Soul you’ve claimed.

## Raw rules HTML

```html
Spend 1 Soul to delve and play the Enchantment of a Soul you’ve claimed.
```

## Observed keyword / token leads

`Enchantment`, `Soul`, `Spend`
