---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 814525
  name: "Counterspell"
  ordinal: 430
  slug: "counterspell"
  category: "Action"
  type: "Magic"
  rarity: "Rare"
  expansion: "Core"
  color: "Blue"
  cost:
  dex: 0
  int: 2
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Charges"
  - "Inflict"
  - "Jinxed"
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
    url: "https://blightbane.io/card/Counterspell"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Counterspell

## Card identity

- **Ordinal:** 430 of 1692 generated cards
- **Source card id:** `814525`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Rare
- **Expansion:** Core
- **Color:** Blue
- **Cost summary:** int=2

## Source-backed facts

- Claim: `Counterspell` appears in the Neurrone Dawncaster SQLite card table with id `814525`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Inflict 1 Jinxed. Charges (2/2).

## Raw rules HTML

```html
Inflict 1 Jinxed. Charges (2/2).
```

## Observed keyword / token leads

`Charges`, `Inflict`, `Jinxed`
