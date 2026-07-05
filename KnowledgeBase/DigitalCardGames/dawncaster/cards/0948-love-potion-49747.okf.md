---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 49747
  name: "Love Potion"
  ordinal: 948
  slug: "love-potion"
  category: "Item"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Metamorphosis"
  color: "Brown"
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
  - "Add"
  - "Charmed"
  - "Glimmer"
  - "Inflict"
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
    url: "https://blightbane.io/card/Love_Potion"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Love Potion

## Card identity

- **Ordinal:** 948 of 1692 generated cards
- **Source card id:** `49747`
- **Category:** Item
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Metamorphosis
- **Color:** Brown
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Love Potion` appears in the Neurrone Dawncaster SQLite card table with id `49747`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

One Use:
Inflict 5 Charmed.
Add a Glimmer to the foe's deck and draw a card.

## Raw rules HTML

```html
One Use:<br>Inflict 5 Charmed.<br>Add a Glimmer to the foe's deck and draw a card.
```

## Observed keyword / token leads

`Add`, `Charmed`, `Glimmer`, `Inflict`, `One Use`
