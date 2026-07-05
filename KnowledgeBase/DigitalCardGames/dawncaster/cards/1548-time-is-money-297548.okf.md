---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 297548
  name: "Time is Money"
  ordinal: 1548
  slug: "time-is-money"
  category: "Action"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Metamorphosis"
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
  - "Haste"
  - "Persistent"
  - "While"
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
    url: "https://blightbane.io/card/Time_is_Money"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Time is Money

## Card identity

- **Ordinal:** 1548 of 1692 generated cards
- **Source card id:** `297548`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Metamorphosis
- **Color:** Brown
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Time is Money` appears in the Neurrone Dawncaster SQLite card table with id `297548`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Draw 2 cards.
While in hand, gain 1 Haste at the start of the turn. Persistent.

## Raw rules HTML

```html
Draw 2 cards.<br>While in hand, gain 1 Haste at the start of the turn. Persistent.
```

## Observed keyword / token leads

`Haste`, `Persistent`, `While`
