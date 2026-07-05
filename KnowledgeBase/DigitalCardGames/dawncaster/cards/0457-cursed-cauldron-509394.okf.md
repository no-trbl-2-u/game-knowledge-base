---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 509394
  name: "Cursed Cauldron"
  ordinal: 457
  slug: "cursed-cauldron"
  category: "Equipment"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Eclypse"
  color: "Blue"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 2
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Activate"
  - "Cursed"
  - "Deplete"
  - "Durability"
  - "Hex"
  - "Inflict"
  - "Transmute"
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
    url: "https://blightbane.io/card/Cursed_Cauldron"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Cursed Cauldron

## Card identity

- **Ordinal:** 457 of first 500 generated cards
- **Source card id:** `509394`
- **Category:** Equipment
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Eclypse
- **Color:** Blue
- **Cost summary:** neutral=2

## Source-backed facts

- Claim: `Cursed Cauldron` appears in the Neurrone Dawncaster SQLite card table with id `509394`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Activate to Transmute a card into a Cursed card of a higher rarity. Deplete: Inflict a Hex. Durability (2/2). Unique.

## Raw rules HTML

```html
Activate to Transmute a card into a Cursed card of a higher rarity. Deplete: Inflict a Hex. Durability (2/2). Unique.
```

## Observed keyword / token leads

`Activate`, `Cursed`, `Deplete`, `Durability`, `Hex`, `Inflict`, `Transmute`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
