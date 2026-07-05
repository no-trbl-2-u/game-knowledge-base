---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 540134
  name: "Mechanical Arm"
  ordinal: 1008
  slug: "mechanical-arm"
  category: "Equipment"
  type: "Utility"
  rarity: "Rare"
  expansion: "Core Extended"
  color: "Brown"
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
  - "Durability"
  - "Play"
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
    url: "https://blightbane.io/card/Mechanical_Arm"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Mechanical Arm

## Card identity

- **Ordinal:** 1008 of 1692 generated cards
- **Source card id:** `540134`
- **Category:** Equipment
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Core Extended
- **Color:** Brown
- **Cost summary:** neutral=2

## Source-backed facts

- Claim: `Mechanical Arm` appears in the Neurrone Dawncaster SQLite card table with id `540134`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Activate: Play a non-unique card from your hand for free. Durability (3/3). Unique.

## Raw rules HTML

```html
Activate: Play a non-unique card from your hand for free. Durability (3/3). Unique.
```

## Observed keyword / token leads

`Activate`, `Durability`, `Play`
