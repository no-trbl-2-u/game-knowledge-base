---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 82468
  name: "Prepare for Prey"
  ordinal: 1126
  slug: "prepare-for-prey"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Metamorphosis"
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
  - "Bleeding"
  - "Inflict Marked"
  - "Soul"
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
    url: "https://blightbane.io/card/Prepare_for_Prey"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Prepare for Prey

## Card identity

- **Ordinal:** 1126 of 1692 generated cards
- **Source card id:** `82468`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Metamorphosis
- **Color:** Orange
- **Cost summary:** dexstr=1

## Source-backed facts

- Claim: `Prepare for Prey` appears in the Neurrone Dawncaster SQLite card table with id `82468`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Inflict Marked.
Spend 1 Soul to inflict 3 Bleeding.

## Raw rules HTML

```html
Inflict Marked.<br>Spend 1 Soul to inflict 3 Bleeding.
```

## Observed keyword / token leads

`Bleeding`, `Inflict Marked`, `Soul`, `Spend`
