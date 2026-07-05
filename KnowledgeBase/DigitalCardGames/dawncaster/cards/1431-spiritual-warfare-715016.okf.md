---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 715016
  name: "Spiritual Warfare"
  ordinal: 1431
  slug: "spiritual-warfare"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Core"
  color: "Aqua"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 2
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Basic Attack"
  - "Make"
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
    url: "https://blightbane.io/card/Spiritual_Warfare"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Spiritual Warfare

## Card identity

- **Ordinal:** 1431 of 1692 generated cards
- **Source card id:** `715016`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Core
- **Color:** Aqua
- **Cost summary:** dexint=2

## Source-backed facts

- Claim: `Spiritual Warfare` appears in the Neurrone Dawncaster SQLite card table with id `715016`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Discard all cards.
Make a Basic Attack for each card discarded.

## Raw rules HTML

```html
Discard all cards.<br>Make a Basic Attack for each card discarded.
```

## Observed keyword / token leads

`Basic Attack`, `Make`
