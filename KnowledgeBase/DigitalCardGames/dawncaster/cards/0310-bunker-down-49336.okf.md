---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 49336
  name: "Bunker Down"
  ordinal: 310
  slug: "bunker-down"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Core"
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
  - "Armor"
  - "damageBonus"
  - "Fortified"
  - "Upgradeable"
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
    url: "https://blightbane.io/card/Bunker_Down"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Bunker Down

## Card identity

- **Ordinal:** 310 of 1692 generated cards
- **Source card id:** `49336`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Core
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Bunker Down` appears in the Neurrone Dawncaster SQLite card table with id `49336`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain |#4+[[damageBonus]]#| Armor.
If you have 10 or more Armor, gain Fortified.
Upgradeable.

## Raw rules HTML

```html
Gain |#4+[[damageBonus]]#| Armor.<br>If you have 10 or more Armor, gain Fortified.<br>Upgradeable.
```

## Observed keyword / token leads

`Armor`, `damageBonus`, `Fortified`, `Upgradeable`
