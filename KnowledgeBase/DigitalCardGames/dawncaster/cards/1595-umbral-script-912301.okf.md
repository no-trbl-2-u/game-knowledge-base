---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 912301
  name: "Umbral Script"
  ordinal: 1595
  slug: "umbral-script"
  category: "Equipment"
  type: "Utility"
  rarity: "Rare"
  expansion: "Eclypse"
  color: "Purple"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 1
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 2
observed_terms:
  - "Activate"
  - "Defile"
  - "Durability"
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
    url: "https://blightbane.io/card/Umbral_Script"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Umbral Script

## Card identity

- **Ordinal:** 1595 of 1692 generated cards
- **Source card id:** `912301`
- **Category:** Equipment
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Eclypse
- **Color:** Purple
- **Cost summary:** neutral=1, blood=2

## Source-backed facts

- Claim: `Umbral Script` appears in the Neurrone Dawncaster SQLite card table with id `912301`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Activate to draw a card and Defile 1 energy for each Durability remaining. Durability (2/2). Unique.

## Raw rules HTML

```html
Activate to draw a card and Defile 1 energy for each Durability remaining. Durability (2/2). Unique.
```

## Observed keyword / token leads

`Activate`, `Defile`, `Durability`
