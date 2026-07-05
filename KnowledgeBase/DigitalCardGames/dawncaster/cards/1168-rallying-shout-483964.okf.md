---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 483964
  name: "Rallying Shout"
  ordinal: 1168
  slug: "rallying-shout"
  category: "Action"
  type: "Utility"
  rarity: "Rare"
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
  - "(cardvalue)Fury"
  - "Anger"
  - "Charges"
  - "Fury"
  - "Gain Rally"
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
    url: "https://blightbane.io/card/Rallying_Shout"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Rallying Shout

## Card identity

- **Ordinal:** 1168 of 1692 generated cards
- **Source card id:** `483964`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Core
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Rallying Shout` appears in the Neurrone Dawncaster SQLite card table with id `483964`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain Rally equal to the Anger granted by Fury cards (|#[[(cardvalue)Fury]]+1#|). Charges (2/2).

## Raw rules HTML

```html
Gain Rally equal to the Anger granted by Fury cards (|#[[(cardvalue)Fury]]+1#|). Charges (2/2).
```

## Observed keyword / token leads

`(cardvalue)Fury`, `Anger`, `Charges`, `Fury`, `Gain Rally`
