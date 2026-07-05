---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 566832
  name: "Diamond Potion"
  ordinal: 526
  slug: "diamond-potion"
  category: "Item"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Core"
  color: "Brown"
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
  - "Impervious"
  - "One Use"
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
    url: "https://blightbane.io/card/Diamond_Potion"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Diamond Potion

## Card identity

- **Ordinal:** 526 of 1692 generated cards
- **Source card id:** `566832`
- **Category:** Item
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Core
- **Color:** Brown
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Diamond Potion` appears in the Neurrone Dawncaster SQLite card table with id `566832`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

One Use:
Gain 1 Impervious.
Draw a card.

## Raw rules HTML

```html
One Use:<br>Gain 1 Impervious.<br>Draw a card.
```

## Observed keyword / token leads

`Impervious`, `One Use`
