---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 509972
  name: "Cunning Plan"
  ordinal: 456
  slug: "cunning-plan"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
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
  - "Next"
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
    url: "https://blightbane.io/card/Cunning_Plan"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Cunning Plan

## Card identity

- **Ordinal:** 456 of first 500 generated cards
- **Source card id:** `509972`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Core
- **Color:** Green
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Cunning Plan` appears in the Neurrone Dawncaster SQLite card table with id `509972`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Spend all DEX. Next turn you gain that much DEX and draw that many extra cards.

## Raw rules HTML

```html
Spend all DEX. Next turn you gain that much DEX and draw that many extra cards.
```

## Observed keyword / token leads

`DEX`, `Next`, `Spend`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
