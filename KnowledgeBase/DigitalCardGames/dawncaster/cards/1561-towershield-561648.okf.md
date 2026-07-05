---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 561648
  name: "Towershield"
  ordinal: 1561
  slug: "towershield"
  category: "Basic Attack"
  type: "Utility"
  rarity: "Rare"
  expansion: "Core"
  color: "Brown"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 1
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Armor"
  - "damageBonus"
  - "Upgrades"
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
    url: "https://blightbane.io/card/Towershield"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Towershield

## Card identity

- **Ordinal:** 1561 of 1692 generated cards
- **Source card id:** `561648`
- **Category:** Basic Attack
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Core
- **Color:** Brown
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Towershield` appears in the Neurrone Dawncaster SQLite card table with id `561648`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain |#6+[[damageBonus]]#| Armor.
Upgrades provide additional Armor.
Draw a card.

## Raw rules HTML

```html
Gain |#6+[[damageBonus]]#| Armor.<br>Upgrades provide additional Armor.<br>Draw a card.
```

## Observed keyword / token leads

`Armor`, `damageBonus`, `Upgrades`
