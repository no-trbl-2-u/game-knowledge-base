---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 525726
  name: "Slam (Companion)"
  ordinal: 1371
  slug: "slam-companion"
  category: "Action"
  type: "Melee"
  rarity: "Rare"
  expansion: "Synthesis"
  color: "Orange"
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
  - "Advantage"
  - "companionlevel*3"
  - "Dazed"
  - "Inflict"
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
    url: "https://blightbane.io/card/Slam_%28Companion%29"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Slam (Companion)

## Card identity

- **Ordinal:** 1371 of 1692 generated cards
- **Source card id:** `525726`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Rare
- **Expansion:** Synthesis
- **Color:** Orange
- **Cost summary:** neutral=2

## Source-backed facts

- Claim: `Slam (Companion)` appears in the Neurrone Dawncaster SQLite card table with id `525726`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:[[companionlevel*3]]] damage. 
Advantage: Inflict 2 Dazed.

## Raw rules HTML

```html
Deal [damage:[[companionlevel*3]]] damage. 
Advantage: Inflict 2 Dazed.
```

## Observed keyword / token leads

`Advantage`, `companionlevel*3`, `Dazed`, `Inflict`
