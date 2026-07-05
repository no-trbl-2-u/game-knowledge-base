---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 933450
  name: "Clever Maneuver"
  ordinal: 380
  slug: "clever-maneuver"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Synthesis"
  color: "Orange"
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
  - "Advantage"
  - "Ambush"
  - "Gain Evasion"
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
    url: "https://blightbane.io/card/Clever_Maneuver"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Clever Maneuver

## Card identity

- **Ordinal:** 380 of first 500 generated cards
- **Source card id:** `933450`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Synthesis
- **Color:** Orange
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Clever Maneuver` appears in the Neurrone Dawncaster SQLite card table with id `933450`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain Evasion then grant
the Advantage. Ambush: Draw a card.

## Raw rules HTML

```html
Gain Evasion then grant
the Advantage. Ambush: Draw a card.
```

## Observed keyword / token leads

`Advantage`, `Ambush`, `Gain Evasion`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
