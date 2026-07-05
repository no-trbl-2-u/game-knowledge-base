---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 59336
  name: "Serrated Arrow"
  ordinal: 1312
  slug: "serrated-arrow"
  category: "Action"
  type: "Ranged"
  rarity: "Uncommon"
  expansion: "Core"
  color: "Orange"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Bleeding Piercing"
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
    url: "https://blightbane.io/card/Serrated_Arrow"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Serrated Arrow

## Card identity

- **Ordinal:** 1312 of 1692 generated cards
- **Source card id:** `59336`
- **Category:** Action
- **Type:** Ranged
- **Rarity:** Uncommon
- **Expansion:** Core
- **Color:** Orange
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Serrated Arrow` appears in the Neurrone Dawncaster SQLite card table with id `59336`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:4] damage. 
Inflict 2 Bleeding Piercing.

## Raw rules HTML

```html
Deal [damage:4] damage. <br>Inflict 2 Bleeding Piercing.
```

## Observed keyword / token leads

`Bleeding Piercing`, `Inflict`
