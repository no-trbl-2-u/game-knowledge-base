---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 4265
  name: "Served Hot"
  ordinal: 1314
  slug: "served-hot"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Eclypse"
  color: "Red"
  cost:
  dex: 0
  int: 0
  str: 1
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Burning"
  - "Inflict"
  - "Ingredient"
  - "Momentum"
  - "Stance"
  - "While"
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
    url: "https://blightbane.io/card/Served_Hot"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Served Hot

## Card identity

- **Ordinal:** 1314 of 1692 generated cards
- **Source card id:** `4265`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Eclypse
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Served Hot` appears in the Neurrone Dawncaster SQLite card table with id `4265`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

While in this Stance: Inflict 1 Burning and gain 1 Momentum whenever you play an Ingredient.

## Raw rules HTML

```html
While in this Stance: Inflict 1 Burning and gain 1 Momentum whenever you play an Ingredient.
```

## Observed keyword / token leads

`Burning`, `Inflict`, `Ingredient`, `Momentum`, `Stance`, `While`
