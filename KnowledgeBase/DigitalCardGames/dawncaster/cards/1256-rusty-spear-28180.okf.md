---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 28180
  name: "Rusty Spear"
  ordinal: 1256
  slug: "rusty-spear"
  category: "Action"
  type: "Divine"
  rarity: "Common"
  expansion: "Catalyst"
  color: "Gold"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 1
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Blessings"
  - "Halifax"
  - "Hallowed Spear"
  - "permaValue"
  - "Transform"
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
    url: "https://blightbane.io/card/Rusty_Spear"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Rusty Spear

## Card identity

- **Ordinal:** 1256 of 1692 generated cards
- **Source card id:** `28180`
- **Category:** Action
- **Type:** Divine
- **Rarity:** Common
- **Expansion:** Catalyst
- **Color:** Gold
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Rusty Spear` appears in the Neurrone Dawncaster SQLite card table with id `28180`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:3] damage. 
 Gain [[permaValue]]/150 Blessings: Transform into Halifax, the Hallowed Spear.

## Raw rules HTML

```html
Deal [damage:3] damage. <br> Gain [[permaValue]]/150 Blessings: Transform into Halifax, the Hallowed Spear.
```

## Observed keyword / token leads

`Blessings`, `Halifax`, `Hallowed Spear`, `permaValue`, `Transform`
