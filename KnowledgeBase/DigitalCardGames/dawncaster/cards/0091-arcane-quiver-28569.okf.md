---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 28569
  name: "Arcane Quiver"
  ordinal: 91
  slug: "arcane-quiver"
  category: "Equipment"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Catalyst"
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
  - "Arrow"
  - "Delve"
  - "Durability"
  - "Ranged Actions"
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
    url: "https://blightbane.io/card/Arcane_Quiver"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Arcane Quiver

## Card identity

- **Ordinal:** 91 of 1692 generated cards
- **Source card id:** `28569`
- **Category:** Equipment
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Catalyst
- **Color:** Brown
- **Cost summary:** neutral=2

## Source-backed facts

- Claim: `Arcane Quiver` appears in the Neurrone Dawncaster SQLite card table with id `28569`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Ranged Actions deal 2 additional damage. Activate: Delve an Arrow. Durability (5/5). Unique.

## Raw rules HTML

```html
Ranged Actions deal 2 additional damage. Activate: Delve an Arrow. Durability (5/5). Unique.
```

## Observed keyword / token leads

`Activate`, `Arrow`, `Delve`, `Durability`, `Ranged Actions`
