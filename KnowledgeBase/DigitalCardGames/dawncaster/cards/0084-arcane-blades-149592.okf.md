---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 149592
  name: "Arcane Blades"
  ordinal: 84
  slug: "arcane-blades"
  category: "Enchantment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Core"
  color: "Purple"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 3
    blood: 0
observed_terms:
  - "Magic Action"
  - "Melee Action"
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
    url: "https://blightbane.io/card/Arcane_Blades"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Arcane Blades

## Card identity

- **Ordinal:** 84 of 1692 generated cards
- **Source card id:** `149592`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Core
- **Color:** Purple
- **Cost summary:** intstr=3

## Source-backed facts

- Claim: `Arcane Blades` appears in the Neurrone Dawncaster SQLite card table with id `149592`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, whenever you play a Melee Action, conjure a free random Magic Action. Unique.

## Raw rules HTML

```html
This combat, whenever you play a Melee Action, conjure a free random Magic Action. Unique.
```

## Observed keyword / token leads

`Magic Action`, `Melee Action`
