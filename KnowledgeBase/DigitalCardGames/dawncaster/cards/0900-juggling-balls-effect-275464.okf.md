---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 275464
  name: "Juggling Balls Effect"
  ordinal: 900
  slug: "juggling-balls-effect"
  category: "Equipment"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "None"
  color: "Brown"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 2
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Activate"
  - "Durability"
  - "Perform"
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
    url: "https://blightbane.io/card/Juggling_Balls_Effect"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Juggling Balls Effect

## Card identity

- **Ordinal:** 900 of 1692 generated cards
- **Source card id:** `275464`
- **Category:** Equipment
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** None
- **Color:** Brown
- **Cost summary:** neutral=2

## Source-backed facts

- Claim: `Juggling Balls Effect` appears in the Neurrone Dawncaster SQLite card table with id `275464`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Activate to discard a card. Perform equal to its cost then draw a card. Durability (3/3). Unique.

## Raw rules HTML

```html
Activate to discard a card. Perform equal to its cost then draw a card. Durability (3/3). Unique.
```

## Observed keyword / token leads

`Activate`, `Durability`, `Perform`
