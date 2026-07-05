---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 950932
  name: "Determination"
  ordinal: 523
  slug: "determination"
  category: "Enchantment"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Core Extended"
  color: "Red"
  cost:
    dex: 0
    int: 0
    str: 2
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Also"
  - "Anger"
  - "Frenzy"
  - "Melee"
  - "STR"
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
    url: "https://blightbane.io/card/Determination"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Determination

## Card identity

- **Ordinal:** 523 of 1692 generated cards
- **Source card id:** `950932`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Core Extended
- **Color:** Red
- **Cost summary:** str=2

## Source-backed facts

- Claim: `Determination` appears in the Neurrone Dawncaster SQLite card table with id `950932`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, whenever a Melee action you play deals no damage, gain 1 Anger. Frenzy: Also gain STR. Unique.

## Raw rules HTML

```html
This combat, whenever a Melee action you play deals no damage, gain 1 Anger. Frenzy: Also gain STR. Unique.
```

## Observed keyword / token leads

`Also`, `Anger`, `Frenzy`, `Melee`, `STR`
