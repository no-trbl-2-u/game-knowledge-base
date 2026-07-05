---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 740335
  name: "Rune of Persistence"
  ordinal: 1249
  slug: "rune-of-persistence"
  category: "Item"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Core Extended"
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
  - "Add Persistent"
  - "Grounded"
  - "One Use"
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
    url: "https://blightbane.io/card/Rune_of_Persistence"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Rune of Persistence

## Card identity

- **Ordinal:** 1249 of 1692 generated cards
- **Source card id:** `740335`
- **Category:** Item
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Core Extended
- **Color:** Brown
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Rune of Persistence` appears in the Neurrone Dawncaster SQLite card table with id `740335`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

One Use: Add Persistent to a card in your hand. If the card was conjured, it becomes permanent. Grounded.

## Raw rules HTML

```html
One Use: Add Persistent to a card in your hand. If the card was conjured, it becomes permanent. Grounded.
```

## Observed keyword / token leads

`Add Persistent`, `Grounded`, `One Use`
