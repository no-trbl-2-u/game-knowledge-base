---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 909192
  name: "Exploration"
  ordinal: 623
  slug: "exploration"
  category: "Enchantment"
  type: "Utility"
  rarity: "Uncommon"
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
  - "Ambush"
  - "Evasion"
  - "Foretell"
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
    url: "https://blightbane.io/card/Exploration"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Exploration

## Card identity

- **Ordinal:** 623 of 1692 generated cards
- **Source card id:** `909192`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Eclypse
- **Color:** Aqua
- **Cost summary:** dexint=1

## Source-backed facts

- Claim: `Exploration` appears in the Neurrone Dawncaster SQLite card table with id `909192`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, gain Evasion and reset your Ambush after you Foretell. Unique.

## Raw rules HTML

```html
This combat, gain Evasion and reset your Ambush after you Foretell. Unique.
```

## Observed keyword / token leads

`Ambush`, `Evasion`, `Foretell`
