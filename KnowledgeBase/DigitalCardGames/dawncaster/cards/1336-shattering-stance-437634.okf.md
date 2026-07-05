---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 437634
  name: "Shattering Stance"
  ordinal: 1336
  slug: "shattering-stance"
  category: "Form"
  type: "Utility"
  rarity: "Common"
  expansion: "Catalyst"
  color: "Red"
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
  - "Brittle"
  - "Immune"
  - "Pinned"
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
    url: "https://blightbane.io/card/Shattering_Stance"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Shattering Stance

## Card identity

- **Ordinal:** 1336 of 1692 generated cards
- **Source card id:** `437634`
- **Category:** Form
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Catalyst
- **Color:** Red
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Shattering Stance` appears in the Neurrone Dawncaster SQLite card table with id `437634`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Whenever you draw a card, inflict Brittle equal to its cost. You are Immune to Pinned.

## Raw rules HTML

```html
Whenever you draw a card, inflict Brittle equal to its cost. You are Immune to Pinned.
```

## Observed keyword / token leads

`Brittle`, `Immune`, `Pinned`
