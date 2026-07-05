---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 928259
  name: "Energy Infusion"
  ordinal: 601
  slug: "energy-infusion"
  category: "Enchantment"
  type: "Utility"
  rarity: "Rare"
  expansion: "Core Extended"
  color: "Green"
  cost:
    dex: 2
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "allEnergy"
  - "Melee Actions"
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
    url: "https://blightbane.io/card/Energy_Infusion"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Energy Infusion

## Card identity

- **Ordinal:** 601 of 1692 generated cards
- **Source card id:** `928259`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Core Extended
- **Color:** Green
- **Cost summary:** dex=2

## Source-backed facts

- Claim: `Energy Infusion` appears in the Neurrone Dawncaster SQLite card table with id `928259`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, your Melee Actions deal additional damage equal to your unspent energy ([[allEnergy]]). Unique.

## Raw rules HTML

```html
This combat, your Melee Actions deal additional damage equal to your unspent energy ([[allEnergy]]). Unique.
```

## Observed keyword / token leads

`allEnergy`, `Melee Actions`
