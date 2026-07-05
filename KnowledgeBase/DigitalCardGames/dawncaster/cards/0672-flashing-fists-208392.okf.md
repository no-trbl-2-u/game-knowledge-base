---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 208392
  name: "Flashing Fists"
  ordinal: 672
  slug: "flashing-fists"
  category: "Enchantment"
  type: "Utility"
  rarity: "Common"
  expansion: "Eclypse"
  color: "Aqua"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 1
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Basic Attacks"
  - "Evade"
  - "Increases"
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
    url: "https://blightbane.io/card/Flashing_Fists"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Flashing Fists

## Card identity

- **Ordinal:** 672 of 1692 generated cards
- **Source card id:** `208392`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Eclypse
- **Color:** Aqua
- **Cost summary:** dexint=1

## Source-backed facts

- Claim: `Flashing Fists` appears in the Neurrone Dawncaster SQLite card table with id `208392`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, Basic Attacks deal 2 more damage. Increases by 2 whenever you Evade an attack. Unique.

## Raw rules HTML

```html
This combat, Basic Attacks deal 2 more damage. Increases by 2 whenever you Evade an attack. Unique.
```

## Observed keyword / token leads

`Basic Attacks`, `Evade`, `Increases`
