---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 124833
  name: "Preparation"
  ordinal: 1125
  slug: "preparation"
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
  - "DEX"
  - "Gain DEX"
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
    url: "https://blightbane.io/card/Preparation"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Preparation

## Card identity

- **Ordinal:** 1125 of 1692 generated cards
- **Source card id:** `124833`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Core
- **Color:** Green
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Preparation` appears in the Neurrone Dawncaster SQLite card table with id `124833`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain DEX DEX at the start of your next turn.

## Raw rules HTML

```html
Gain DEX DEX at the start of your next turn.
```

## Observed keyword / token leads

`DEX`, `Gain DEX`
