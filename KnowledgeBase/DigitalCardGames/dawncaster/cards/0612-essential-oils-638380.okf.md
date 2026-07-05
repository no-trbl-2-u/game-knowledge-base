---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 638380
  name: "Essential Oils"
  ordinal: 612
  slug: "essential-oils"
  category: "Action"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Core Extended"
  color: "Orange"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 1
    intstr: 0
    blood: 0
observed_terms:
  - "Channel"
  - "Create"
  - "Potion"
  - "Potions"
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
    url: "https://blightbane.io/card/Essential_Oils"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Essential Oils

## Card identity

- **Ordinal:** 612 of 1692 generated cards
- **Source card id:** `638380`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Core Extended
- **Color:** Orange
- **Cost summary:** dexstr=1

## Source-backed facts

- Claim: `Essential Oils` appears in the Neurrone Dawncaster SQLite card table with id `638380`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Create a random Potion. Channel: Potions are not destroyed after use this turn. Unique.

## Raw rules HTML

```html
Create a random Potion. Channel: Potions are not destroyed after use this turn. Unique.
```

## Observed keyword / token leads

`Channel`, `Create`, `Potion`, `Potions`
