---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 171560
  name: "Elemental Focus"
  ordinal: 591
  slug: "elemental-focus"
  category: "Enchantment"
  type: "Utility"
  rarity: "Rare"
  expansion: "Catalyst"
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
  - "Attunement"
  - "Element"
  - "Magic Action"
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
    url: "https://blightbane.io/card/Elemental_Focus"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Elemental Focus

## Card identity

- **Ordinal:** 591 of 1692 generated cards
- **Source card id:** `171560`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Catalyst
- **Color:** Blue
- **Cost summary:** int=2

## Source-backed facts

- Claim: `Elemental Focus` appears in the Neurrone Dawncaster SQLite card table with id `171560`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

At the start of your turn, randomize your Attunement and conjure a Magic Action sharing its Element. Unique.

## Raw rules HTML

```html
At the start of your turn, randomize your Attunement and conjure a Magic Action sharing its Element. Unique.
```

## Observed keyword / token leads

`Attunement`, `Element`, `Magic Action`
