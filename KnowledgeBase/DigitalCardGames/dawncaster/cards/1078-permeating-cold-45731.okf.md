---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 45731
  name: "Permeating Cold"
  ordinal: 1078
  slug: "permeating-cold"
  category: "Enchantment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Core"
  color: "Blue"
  cost:
    dex: 0
    int: 3
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Frozen"
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
    url: "https://blightbane.io/card/Permeating_Cold"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Permeating Cold

## Card identity

- **Ordinal:** 1078 of 1692 generated cards
- **Source card id:** `45731`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Core
- **Color:** Blue
- **Cost summary:** int=3

## Source-backed facts

- Claim: `Permeating Cold` appears in the Neurrone Dawncaster SQLite card table with id `45731`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, reduce the cost of a card in your hand by 1 energy whenever you inflict Frozen. Unique.

## Raw rules HTML

```html
This combat, reduce the cost of a card in your hand by 1 energy whenever you inflict Frozen. Unique.
```

## Observed keyword / token leads

`Frozen`
