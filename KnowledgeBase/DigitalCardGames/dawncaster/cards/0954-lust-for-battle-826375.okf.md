---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 826375
  name: "Lust for Battle"
  ordinal: 954
  slug: "lust-for-battle"
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
  - "Add"
  - "Anger"
  - "attacksInEnemyHand"
  - "Fury"
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
    url: "https://blightbane.io/card/Lust_for_Battle"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Lust for Battle

## Card identity

- **Ordinal:** 954 of 1692 generated cards
- **Source card id:** `826375`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Core
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Lust for Battle` appears in the Neurrone Dawncaster SQLite card table with id `826375`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Fury grants extra Anger for each attack card held by your foe ([[attacksInEnemyHand]]). Add 2 Fury cards to your discard pile.

## Raw rules HTML

```html
Fury grants extra Anger for each attack card held by your foe ([[attacksInEnemyHand]]). Add 2 Fury cards to your discard pile.
```

## Observed keyword / token leads

`Add`, `Anger`, `attacksInEnemyHand`, `Fury`
