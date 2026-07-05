---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 848150
  name: "Daring Contract"
  ordinal: 472
  slug: "daring-contract"
  category: "Enchantment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "None"
  color: "Orange"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Boss"
  - "Execute"
  - "Maximum Health"
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
    url: "https://blightbane.io/card/Daring_Contract"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Daring Contract

## Card identity

- **Ordinal:** 472 of 1692 generated cards
- **Source card id:** `848150`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** None
- **Color:** Orange
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Daring Contract` appears in the Neurrone Dawncaster SQLite card table with id `848150`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Execute: Gain 5 Maximum Health if your current foe is a Boss. Unique.

## Raw rules HTML

```html
Execute: Gain 5 Maximum Health if your current foe is a Boss. Unique.
```

## Observed keyword / token leads

`Boss`, `Execute`, `Maximum Health`
