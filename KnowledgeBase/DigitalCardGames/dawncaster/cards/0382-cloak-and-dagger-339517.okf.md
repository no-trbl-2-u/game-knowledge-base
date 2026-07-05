---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 339517
  name: "Cloak and Dagger"
  ordinal: 382
  slug: "cloak-and-dagger"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Core"
  color: "Green"
  cost:
    dex: 1
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Conjure"
  - "Daggers"
  - "Evasion"
  - "Persistent"
  - "Turn"
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
    url: "https://blightbane.io/card/Cloak_and_Dagger"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Cloak and Dagger

## Card identity

- **Ordinal:** 382 of 1692 generated cards
- **Source card id:** `339517`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Core
- **Color:** Green
- **Cost summary:** dex=1

## Source-backed facts

- Claim: `Cloak and Dagger` appears in the Neurrone Dawncaster SQLite card table with id `339517`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Conjure 2 Daggers.
Start of Turn: Gain 1 Evasion if this is in hand. Persistent.

## Raw rules HTML

```html
Conjure 2 Daggers.<br>Start of Turn: Gain 1 Evasion if this is in hand. Persistent.
```

## Observed keyword / token leads

`Conjure`, `Daggers`, `Evasion`, `Persistent`, `Turn`
