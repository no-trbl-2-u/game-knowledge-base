---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 611711
  name: "Cursed Puzzlebox"
  ordinal: 458
  slug: "cursed-puzzlebox"
  category: "Artifact"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Catalyst"
  color: "Brown"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 4
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Cursed"
  - "Puzzlebox"
  - "Swap"
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
    url: "https://blightbane.io/card/Cursed_Puzzlebox"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Cursed Puzzlebox

## Card identity

- **Ordinal:** 458 of 1692 generated cards
- **Source card id:** `611711`
- **Category:** Artifact
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Catalyst
- **Color:** Brown
- **Cost summary:** neutral=4

## Source-backed facts

- Claim: `Cursed Puzzlebox` appears in the Neurrone Dawncaster SQLite card table with id `611711`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Swap the cost of the Puzzlebox with a card in hand. It becomes Cursed. Unique.

## Raw rules HTML

```html
Swap the cost of the Puzzlebox with a card in hand. It becomes Cursed. Unique.
```

## Observed keyword / token leads

`Cursed`, `Puzzlebox`, `Swap`
