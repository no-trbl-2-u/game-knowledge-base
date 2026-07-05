---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 408421
  name: "Flashfreeze"
  ordinal: 670
  slug: "flashfreeze"
  category: "Action"
  type: "Magic"
  rarity: "Uncommon"
  expansion: "Core"
  color: "Blue"
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
  - "Chain"
  - "Frozen"
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
    url: "https://blightbane.io/card/Flashfreeze"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Flashfreeze

## Card identity

- **Ordinal:** 670 of 1692 generated cards
- **Source card id:** `408421`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Uncommon
- **Expansion:** Core
- **Color:** Blue
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Flashfreeze` appears in the Neurrone Dawncaster SQLite card table with id `408421`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Inflict 3 Frozen. Chain.

## Raw rules HTML

```html
Inflict 3 Frozen. Chain.
```

## Observed keyword / token leads

`Chain`, `Frozen`, `Inflict`
