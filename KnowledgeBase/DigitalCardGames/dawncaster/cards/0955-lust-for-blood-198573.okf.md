---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 198573
  name: "Lust for Blood"
  ordinal: 955
  slug: "lust-for-blood"
  category: "Action"
  type: "Corruption"
  rarity: "Rare"
  expansion: "Catalyst"
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
  - "Bleeding"
  - "Darkness"
  - "Gain Ferocity"
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
    url: "https://blightbane.io/card/Lust_for_Blood"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Lust for Blood

## Card identity

- **Ordinal:** 955 of 1692 generated cards
- **Source card id:** `198573`
- **Category:** Action
- **Type:** Corruption
- **Rarity:** Rare
- **Expansion:** Catalyst
- **Color:** Orange
- **Cost summary:** dexstr=1, blood=2

## Source-backed facts

- Claim: `Lust for Blood` appears in the Neurrone Dawncaster SQLite card table with id `198573`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain Ferocity equal to your foe's Bleeding, then draw a card. Darkness 8.

## Raw rules HTML

```html
Gain Ferocity equal to your foe's Bleeding, then draw a card. Darkness 8.
```

## Observed keyword / token leads

`Bleeding`, `Darkness`, `Gain Ferocity`
