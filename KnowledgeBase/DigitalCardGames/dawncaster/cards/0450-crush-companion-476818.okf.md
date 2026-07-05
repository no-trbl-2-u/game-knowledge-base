---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 476818
  name: "Crush (Companion)"
  ordinal: 450
  slug: "crush-companion"
  category: "Action"
  type: "Melee"
  rarity: "Legendary"
  expansion: "Synthesis"
  color: "Orange"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 3
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Advantage"
  - "companionlevel*4"
  - "Deep Wound"
  - "Inflict"
  - "Rampage"
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
    url: "https://blightbane.io/card/Crush_%28Companion%29"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Crush (Companion)

## Card identity

- **Ordinal:** 450 of 1692 generated cards
- **Source card id:** `476818`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Legendary
- **Expansion:** Synthesis
- **Color:** Orange
- **Cost summary:** neutral=3

## Source-backed facts

- Claim: `Crush (Companion)` appears in the Neurrone Dawncaster SQLite card table with id `476818`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:[[companionlevel*4]]] damage.
Advantage: Inflict a Deep Wound. Rampage.

## Raw rules HTML

```html
Deal [damage:[[companionlevel*4]]] damage.
Advantage: Inflict a Deep Wound. Rampage.
```

## Observed keyword / token leads

`Advantage`, `companionlevel*4`, `Deep Wound`, `Inflict`, `Rampage`
