---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 468189
  name: "Way of the Wise"
  ordinal: 1654
  slug: "way-of-the-wise"
  category: "Enchantment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "None"
  color: "Aqua"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 2
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Barrier"
  - "Focus"
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
    url: "https://blightbane.io/card/Way_of_the_Wise"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Way of the Wise

## Card identity

- **Ordinal:** 1654 of 1692 generated cards
- **Source card id:** `468189`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** None
- **Color:** Aqua
- **Cost summary:** dexint=2

## Source-backed facts

- Claim: `Way of the Wise` appears in the Neurrone Dawncaster SQLite card table with id `468189`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Whenever you gain Focus, draw a card. At the end of your turn, gain Barrier equal to your Focus. Unique.

## Raw rules HTML

```html
Whenever you gain Focus, draw a card. At the end of your turn, gain Barrier equal to your Focus. Unique.
```

## Observed keyword / token leads

`Barrier`, `Focus`
