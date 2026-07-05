---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 707019
  name: "Tempered Steel"
  ordinal: 1525
  slug: "tempered-steel"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Metamorphosis"
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
  - "Add"
  - "Anger"
  - "Fury"
  - "Gain Armor"
  - "my(status)Anger"
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
    url: "https://blightbane.io/card/Tempered_Steel"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Tempered Steel

## Card identity

- **Ordinal:** 1525 of 1692 generated cards
- **Source card id:** `707019`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Metamorphosis
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Tempered Steel` appears in the Neurrone Dawncaster SQLite card table with id `707019`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain Armor equal to your Anger ([[my(status)Anger]]). Add a Fury card to your discard pile.

## Raw rules HTML

```html
Gain Armor equal to your Anger ([[my(status)Anger]]). Add a Fury card to your discard pile.
```

## Observed keyword / token leads

`Add`, `Anger`, `Fury`, `Gain Armor`, `my(status)Anger`
