---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 41020031
  name: "Forgotten Mask"
  ordinal: 698
  slug: "forgotten-mask"
  category: "Equipment"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Core Extended"
  color: "Aqua"
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
  - "Activate"
  - "Chimera"
  - "Durability"
  - "permaValue"
  - "Shift"
  - "Visage"
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
    url: "https://blightbane.io/card/Forgotten_Mask"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Forgotten Mask

## Card identity

- **Ordinal:** 698 of 1692 generated cards
- **Source card id:** `41020031`
- **Category:** Equipment
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Core Extended
- **Color:** Aqua
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Forgotten Mask` appears in the Neurrone Dawncaster SQLite card table with id `41020031`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Activate: Discard a card. 
Shift ([[permaValue]]/30) times to transform into Chimera's Visage and add it to your deck. Durability (4/4). Unique.

## Raw rules HTML

```html
Activate: Discard a card. 
Shift ([[permaValue]]/30) times to transform into Chimera's Visage and add it to your deck. Durability (4/4). Unique.
```

## Observed keyword / token leads

`Activate`, `Chimera`, `Durability`, `permaValue`, `Shift`, `Visage`
