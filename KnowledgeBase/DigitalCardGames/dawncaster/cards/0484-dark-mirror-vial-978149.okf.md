---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 978149
  name: "Dark Mirror Vial"
  ordinal: 484
  slug: "dark-mirror-vial"
  category: "Item"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Eclypse"
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
  - "Create"
  - "Cursed"
  - "Defiled"
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
    url: "https://blightbane.io/card/Dark_Mirror_Vial"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Dark Mirror Vial

## Card identity

- **Ordinal:** 484 of 1692 generated cards
- **Source card id:** `978149`
- **Category:** Item
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Eclypse
- **Color:** Brown
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Dark Mirror Vial` appears in the Neurrone Dawncaster SQLite card table with id `978149`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

One Use: Create a copy of the next non-unique card you play. It gains Cursed and Defiled. Defiled.

## Raw rules HTML

```html
One Use: Create a copy of the next non-unique card you play. It gains Cursed and Defiled. Defiled.
```

## Observed keyword / token leads

`Create`, `Cursed`, `Defiled`, `One Use`
