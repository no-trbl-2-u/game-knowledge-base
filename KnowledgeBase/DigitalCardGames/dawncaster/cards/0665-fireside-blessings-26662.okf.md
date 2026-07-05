---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 26662
  name: "Fireside Blessings"
  ordinal: 665
  slug: "fireside-blessings"
  category: "Equipment"
  type: "Divine"
  rarity: "Rare"
  expansion: "Core Extended"
  color: "Brown"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 1
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Activate"
  - "Durability"
  - "Firecast"
  - "Otherwise"
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
    url: "https://blightbane.io/card/Fireside_Blessings"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Fireside Blessings

## Card identity

- **Ordinal:** 665 of 1692 generated cards
- **Source card id:** `26662`
- **Category:** Equipment
- **Type:** Divine
- **Rarity:** Rare
- **Expansion:** Core Extended
- **Color:** Brown
- **Cost summary:** holy=1

## Source-backed facts

- Claim: `Fireside Blessings` appears in the Neurrone Dawncaster SQLite card table with id `26662`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Activate: Draw a card. If it has Firecast, play a copy of it. Otherwise, add Firecast to its keywords this combat. Durability (2/2). Unique.

## Raw rules HTML

```html
Activate: Draw a card. If it has Firecast, play a copy of it. Otherwise, add Firecast to its keywords this combat. Durability (2/2). Unique.
```

## Observed keyword / token leads

`Activate`, `Durability`, `Firecast`, `Otherwise`
