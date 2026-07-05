---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 68505
  name: "Philosophers Stone"
  ordinal: 1084
  slug: "philosophers-stone"
  category: "Item"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Core Extended"
  color: "Brown"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 1
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Charges"
  - "Conjure"
  - "Scholar"
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
    url: "https://blightbane.io/card/Philosophers_Stone"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Philosophers Stone

## Card identity

- **Ordinal:** 1084 of 1692 generated cards
- **Source card id:** `68505`
- **Category:** Item
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Core Extended
- **Color:** Brown
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Philosophers Stone` appears in the Neurrone Dawncaster SQLite card table with id `68505`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Conjure a random free card of the color you spend to cast this card.
Scholar: Conjure 2 instead. Charges (2/2).

## Raw rules HTML

```html
Conjure a random free card of the color you spend to cast this card.<br>Scholar: Conjure 2 instead. Charges (2/2).
```

## Observed keyword / token leads

`Charges`, `Conjure`, `Scholar`
