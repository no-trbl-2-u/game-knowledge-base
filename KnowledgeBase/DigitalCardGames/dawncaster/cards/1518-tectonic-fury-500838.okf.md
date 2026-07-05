---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 500838
  name: "Tectonic Fury"
  ordinal: 1518
  slug: "tectonic-fury"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Catalyst"
  color: "Red"
  cost:
    dex: 0
    int: 0
    str: 3
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Anger"
  - "Enter Frenzied"
  - "On Draw"
  - "Stance"
  - "STR"
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
    url: "https://blightbane.io/card/Tectonic_Fury"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Tectonic Fury

## Card identity

- **Ordinal:** 1518 of 1692 generated cards
- **Source card id:** `500838`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Catalyst
- **Color:** Red
- **Cost summary:** str=3

## Source-backed facts

- Claim: `Tectonic Fury` appears in the Neurrone Dawncaster SQLite card table with id `500838`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Enter Frenzied Stance.
On Draw: Gain 1 Anger and reduce this cards cost by STR.

## Raw rules HTML

```html
Enter Frenzied Stance.<br>On Draw: Gain 1 Anger and reduce this cards cost by STR.
```

## Observed keyword / token leads

`Anger`, `Enter Frenzied`, `On Draw`, `Stance`, `STR`
