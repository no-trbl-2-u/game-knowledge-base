---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 909591
  name: "Flying Carpet"
  ordinal: 682
  slug: "flying-carpet"
  category: "Equipment"
  type: "Magic"
  rarity: "Legendary"
  expansion: "Core Extended"
  color: "Brown"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 3
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Activate"
  - "Carpet"
  - "Deplete"
  - "Durability"
  - "Gain Evasion"
  - "Return Flying"
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
    url: "https://blightbane.io/card/Flying_Carpet"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Flying Carpet

## Card identity

- **Ordinal:** 682 of 1692 generated cards
- **Source card id:** `909591`
- **Category:** Equipment
- **Type:** Magic
- **Rarity:** Legendary
- **Expansion:** Core Extended
- **Color:** Brown
- **Cost summary:** neutral=3

## Source-backed facts

- Claim: `Flying Carpet` appears in the Neurrone Dawncaster SQLite card table with id `909591`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Activate: Gain Evasion and reduce the cost of all cards in hand by 1. Deplete: Return Flying Carpet to your hand. Durability (3/3). Unique.

## Raw rules HTML

```html
Activate: Gain Evasion and reduce the cost of all cards in hand by 1. Deplete: Return Flying Carpet to your hand. Durability (3/3). Unique.
```

## Observed keyword / token leads

`Activate`, `Carpet`, `Deplete`, `Durability`, `Gain Evasion`, `Return Flying`
