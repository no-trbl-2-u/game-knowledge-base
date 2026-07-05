---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 987308
  name: "Transcendence"
  ordinal: 1569
  slug: "transcendence"
  category: "Action"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Synthesis"
  color: "Aqua"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 2
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "highestCopiesPlayed"
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
    url: "https://blightbane.io/card/Transcendence"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Transcendence

## Card identity

- **Ordinal:** 1569 of 1692 generated cards
- **Source card id:** `987308`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Synthesis
- **Color:** Aqua
- **Cost summary:** dexint=2

## Source-backed facts

- Claim: `Transcendence` appears in the Neurrone Dawncaster SQLite card table with id `987308`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Draw cards equal to the highest number of copies of a card you played this turn ([[highestCopiesPlayed]]). Unique.

## Raw rules HTML

```html
Draw cards equal to the highest number of copies of a card you played this turn ([[highestCopiesPlayed]]). Unique.
```

## Observed keyword / token leads

`highestCopiesPlayed`
