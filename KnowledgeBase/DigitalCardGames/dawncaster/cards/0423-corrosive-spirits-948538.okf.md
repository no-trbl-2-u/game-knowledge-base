---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 948538
  name: "Corrosive Spirits"
  ordinal: 423
  slug: "corrosive-spirits"
  category: "Action"
  type: "Utility"
  rarity: "Common"
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
    blood: 0
observed_terms:
  - "Ancestral"
  - "Inflict"
  - "Poison"
  - "Repeat"
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
    url: "https://blightbane.io/card/Corrosive_Spirits"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Corrosive Spirits

## Card identity

- **Ordinal:** 423 of 1692 generated cards
- **Source card id:** `948538`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Eclypse
- **Color:** Orange
- **Cost summary:** dexstr=1

## Source-backed facts

- Claim: `Corrosive Spirits` appears in the Neurrone Dawncaster SQLite card table with id `948538`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Inflict 4 Poison.
Ancestral: Repeat this for every 10 of your Souls.

## Raw rules HTML

```html
Inflict 4 Poison.<br>Ancestral: Repeat this for every 10 of your Souls.
```

## Observed keyword / token leads

`Ancestral`, `Inflict`, `Poison`, `Repeat`, `Souls`
