---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 707867
  name: "Improvision"
  ordinal: 883
  slug: "improvision"
  category: "Action"
  type: "Utility"
  rarity: "Rare"
  expansion: "Synthesis"
  color: "Green"
  cost:
  dex: 1
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Charges"
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
    url: "https://blightbane.io/card/Improvision"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Improvision

## Card identity

- **Ordinal:** 883 of 1692 generated cards
- **Source card id:** `707867`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Synthesis
- **Color:** Green
- **Cost summary:** dex=1

## Source-backed facts

- Claim: `Improvision` appears in the Neurrone Dawncaster SQLite card table with id `707867`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Discard a card.
Draw a number of cards equal to its energy cost. Charges (3/3).

## Raw rules HTML

```html
Discard a card.
Draw a number of cards equal to its energy cost. Charges (3/3).
```

## Observed keyword / token leads

`Charges`
