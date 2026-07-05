---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 87306
  name: "Sanguine Shield"
  ordinal: 1280
  slug: "sanguine-shield"
  category: "Enchantment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Core"
  color: "Black"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 3
observed_terms:
  - "Barrier"
  - "Bleeding"
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
    url: "https://blightbane.io/card/Sanguine_Shield"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Sanguine Shield

## Card identity

- **Ordinal:** 1280 of 1692 generated cards
- **Source card id:** `87306`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Core
- **Color:** Black
- **Cost summary:** blood=3

## Source-backed facts

- Claim: `Sanguine Shield` appears in the Neurrone Dawncaster SQLite card table with id `87306`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, gain Barrier equal to the amount of Bleeding you inflict during your turn. Unique.

## Raw rules HTML

```html
This combat, gain Barrier equal to the amount of Bleeding you inflict during your turn. Unique.
```

## Observed keyword / token leads

`Barrier`, `Bleeding`
