---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 612033
  name: "Aries' Reflection"
  ordinal: 100
  slug: "aries-reflection"
  category: "Path"
  type: "Utility"
  rarity: "Rare"
  expansion: "Eclypse"
  color: "Aqua"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 1
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Advance"
  - "After"
  - "Foretell"
  - "Prophetic Bolts"
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
    url: "https://blightbane.io/card/Aries%27_Reflection"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Aries' Reflection

## Card identity

- **Ordinal:** 100 of first 500 generated cards
- **Source card id:** `612033`
- **Category:** Path
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Eclypse
- **Color:** Aqua
- **Cost summary:** dexint=1

## Source-backed facts

- Claim: `Aries' Reflection` appears in the Neurrone Dawncaster SQLite card table with id `612033`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

After you Foretell 6 or more cards in a turn, add 3 Prophetic Bolts to your deck and Advance. Unique.

## Raw rules HTML

```html
After you Foretell 6 or more cards in a turn, add 3 Prophetic Bolts to your deck and Advance. Unique.
```

## Observed keyword / token leads

`Advance`, `After`, `Foretell`, `Prophetic Bolts`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
