---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 730258
  name: "Infernal Racket"
  ordinal: 887
  slug: "infernal-racket"
  category: "Action"
  type: "Monster"
  rarity: "Rare"
  expansion: "Core Extended"
  color: "Monster"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 2
observed_terms:
  - "Delirious"
  - "Gain Anger"
  - "On Draw"
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
    url: "https://blightbane.io/card/Infernal_Racket"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Infernal Racket

## Card identity

- **Ordinal:** 887 of 1692 generated cards
- **Source card id:** `730258`
- **Category:** Action
- **Type:** Monster
- **Rarity:** Rare
- **Expansion:** Core Extended
- **Color:** Monster
- **Cost summary:** blood=2

## Source-backed facts

- Claim: `Infernal Racket` appears in the Neurrone Dawncaster SQLite card table with id `730258`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Draw a card. 
Gain Anger equal to the drawn cards energy cost.
On Draw: Gain 1 Delirious.

## Raw rules HTML

```html
Draw a card. 
Gain Anger equal to the drawn cards energy cost.
On Draw: Gain 1 Delirious.
```

## Observed keyword / token leads

`Delirious`, `Gain Anger`, `On Draw`
