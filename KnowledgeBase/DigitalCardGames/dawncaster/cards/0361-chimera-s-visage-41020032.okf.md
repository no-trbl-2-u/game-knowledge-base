---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 41020032
  name: "Chimera's Visage"
  ordinal: 361
  slug: "chimera-s-visage"
  category: "Equipment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Core Extended"
  color: "Aqua"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 1
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Activate"
  - "Channel"
  - "Durability"
  - "Shift"
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
    url: "https://blightbane.io/card/Chimera%27s_Visage"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Chimera's Visage

## Card identity

- **Ordinal:** 361 of first 500 generated cards
- **Source card id:** `41020032`
- **Category:** Equipment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Core Extended
- **Color:** Aqua
- **Cost summary:** dexint=1

## Source-backed facts

- Claim: `Chimera's Visage` appears in the Neurrone Dawncaster SQLite card table with id `41020032`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Activate: Shift into a beastform.
 While equipped, you can Channel multiple forms. Durability (4/4). Unique.

## Raw rules HTML

```html
Activate: Shift into a beastform.
 While equipped, you can Channel multiple forms. Durability (4/4). Unique.
```

## Observed keyword / token leads

`Activate`, `Channel`, `Durability`, `Shift`, `While`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
