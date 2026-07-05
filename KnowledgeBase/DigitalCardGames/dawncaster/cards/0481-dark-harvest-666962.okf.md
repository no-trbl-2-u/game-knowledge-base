---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 666962
  name: "Dark Harvest"
  ordinal: 481
  slug: "dark-harvest"
  category: "Action"
  type: "Corruption"
  rarity: "Rare"
  expansion: "Eclypse"
  color: "Orange"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 1
  intstr: 0
  blood: 2
observed_terms:
  - "Effigy"
  - "Maximum HEALTH"
  - "myMaxHealth/20"
  - "Requires"
  - "Souls"
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
    url: "https://blightbane.io/card/Dark_Harvest"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Dark Harvest

## Card identity

- **Ordinal:** 481 of 1692 generated cards
- **Source card id:** `666962`
- **Category:** Action
- **Type:** Corruption
- **Rarity:** Rare
- **Expansion:** Eclypse
- **Color:** Orange
- **Cost summary:** dexstr=1, blood=2

## Source-backed facts

- Claim: `Dark Harvest` appears in the Neurrone Dawncaster SQLite card table with id `666962`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Requires an Effigy
Gain 5% of your current Maximum HEALTH as Souls ([[myMaxHealth/20]]). Unique.

## Raw rules HTML

```html
Requires an Effigy<br>Gain 5% of your current Maximum HEALTH as Souls ([[myMaxHealth/20]]). Unique.
```

## Observed keyword / token leads

`Effigy`, `Maximum HEALTH`, `myMaxHealth/20`, `Requires`, `Souls`
