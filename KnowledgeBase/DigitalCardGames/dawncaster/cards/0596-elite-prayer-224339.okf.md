---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 224339
  name: "Elite Prayer"
  ordinal: 596
  slug: "elite-prayer"
  category: "Action"
  type: "Divine"
  rarity: "Legendary"
  expansion: "None"
  color: "Gold"
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
  - "Bury"
  - "Gain HOLY"
  - "HOLY"
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
    url: "https://blightbane.io/card/Elite_Prayer"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Elite Prayer

## Card identity

- **Ordinal:** 596 of 1692 generated cards
- **Source card id:** `224339`
- **Category:** Action
- **Type:** Divine
- **Rarity:** Legendary
- **Expansion:** None
- **Color:** Gold
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Elite Prayer` appears in the Neurrone Dawncaster SQLite card table with id `224339`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain HOLY HOLY and draw a card. Bury a card. Unique.

## Raw rules HTML

```html
Gain HOLY HOLY and draw a card. Bury a card. Unique.
```

## Observed keyword / token leads

`Bury`, `Gain HOLY`, `HOLY`
