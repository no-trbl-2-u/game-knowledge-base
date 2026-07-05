---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 725100
  name: "Painful Inquiry"
  ordinal: 1067
  slug: "painful-inquiry"
  category: "Enchantment"
  type: "Corruption"
  rarity: "Rare"
  expansion: "Eclypse"
  color: "Blue"
  cost:
  dex: 0
  int: 1
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 2
observed_terms:
  - "BLOOD"
  - "Vile Wound"
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
    url: "https://blightbane.io/card/Painful_Inquiry"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Painful Inquiry

## Card identity

- **Ordinal:** 1067 of 1692 generated cards
- **Source card id:** `725100`
- **Category:** Enchantment
- **Type:** Corruption
- **Rarity:** Rare
- **Expansion:** Eclypse
- **Color:** Blue
- **Cost summary:** int=1, blood=2

## Source-backed facts

- Claim: `Painful Inquiry` appears in the Neurrone Dawncaster SQLite card table with id `725100`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, whenever you spend BLOOD, add a Vile Wound to your foe's deck. Unique.

## Raw rules HTML

```html
This combat, whenever you spend BLOOD, add a Vile Wound to your foe's deck. Unique.
```

## Observed keyword / token leads

`BLOOD`, `Vile Wound`
