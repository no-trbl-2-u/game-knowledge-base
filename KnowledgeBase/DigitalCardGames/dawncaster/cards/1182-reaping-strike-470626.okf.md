---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 470626
  name: "Reaping Strike"
  ordinal: 1182
  slug: "reaping-strike"
  category: "Action"
  type: "Melee"
  rarity: "Common"
  expansion: "Core"
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
  - "Lifedrain"
  - "Reaping"
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
    url: "https://blightbane.io/card/Reaping_Strike"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Reaping Strike

## Card identity

- **Ordinal:** 1182 of 1692 generated cards
- **Source card id:** `470626`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Common
- **Expansion:** Core
- **Color:** Orange
- **Cost summary:** dexstr=1

## Source-backed facts

- Claim: `Reaping Strike` appears in the Neurrone Dawncaster SQLite card table with id `470626`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:3] damage. 
This card has Lifedrain while you are below half health Reaping.

## Raw rules HTML

```html
Deal [damage:3] damage. <br>This card has Lifedrain while you are below half health Reaping.
```

## Observed keyword / token leads

`Lifedrain`, `Reaping`
