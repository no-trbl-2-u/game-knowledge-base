---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 944903
  name: "Hail of Arrows"
  ordinal: 776
  slug: "hail-of-arrows"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Core"
  color: "Green"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Arrow"
  - "DEX"
  - "Spend"
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
    url: "https://blightbane.io/card/Hail_of_Arrows"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Hail of Arrows

## Card identity

- **Ordinal:** 776 of 1692 generated cards
- **Source card id:** `944903`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Core
- **Color:** Green
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Hail of Arrows` appears in the Neurrone Dawncaster SQLite card table with id `944903`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Spend all DEX and conjure a free Arrow for each energy spent.

## Raw rules HTML

```html
Spend all DEX and conjure a free Arrow for each energy spent.
```

## Observed keyword / token leads

`Arrow`, `DEX`, `Spend`
