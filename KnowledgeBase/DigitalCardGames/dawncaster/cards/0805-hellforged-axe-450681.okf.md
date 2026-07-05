---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 450681
  name: "Hellforged Axe"
  ordinal: 805
  slug: "hellforged-axe"
  category: "Basic Attack"
  type: "Melee"
  rarity: "Legendary"
  expansion: "Core"
  color: "Black"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 2
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 1
observed_terms:
  - "Fury"
  - "Rampage"
  - "Shuffle"
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
    url: "https://blightbane.io/card/Hellforged_Axe"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Hellforged Axe

## Card identity

- **Ordinal:** 805 of 1692 generated cards
- **Source card id:** `450681`
- **Category:** Basic Attack
- **Type:** Melee
- **Rarity:** Legendary
- **Expansion:** Core
- **Color:** Black
- **Cost summary:** neutral=2, blood=1

## Source-backed facts

- Claim: `Hellforged Axe` appears in the Neurrone Dawncaster SQLite card table with id `450681`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:15] damage. 
Shuffle 4 Fury cards to your discard pile Rampage.

## Raw rules HTML

```html
Deal [damage:15] damage. <br>Shuffle 4 Fury cards to your discard pile Rampage.
```

## Observed keyword / token leads

`Fury`, `Rampage`, `Shuffle`
