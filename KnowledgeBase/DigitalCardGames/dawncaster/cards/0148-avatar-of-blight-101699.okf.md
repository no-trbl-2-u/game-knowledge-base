---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 101699
  name: "Avatar of Blight"
  ordinal: 148
  slug: "avatar-of-blight"
  category: "Enchantment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Core"
  color: "Green"
  cost:
  dex: 3
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "DEX"
  - "Poison"
  - "Potency"
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
    url: "https://blightbane.io/card/Avatar_of_Blight"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Avatar of Blight

## Card identity

- **Ordinal:** 148 of 1692 generated cards
- **Source card id:** `101699`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Core
- **Color:** Green
- **Cost summary:** dex=3

## Source-backed facts

- Claim: `Avatar of Blight` appears in the Neurrone Dawncaster SQLite card table with id `101699`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, gain DEX when you inflict Poison.
DEX: Gain 1 Potency. Unique.

## Raw rules HTML

```html
This combat, gain DEX when you inflict Poison.<br>DEX: Gain 1 Potency. Unique.
```

## Observed keyword / token leads

`DEX`, `Poison`, `Potency`
