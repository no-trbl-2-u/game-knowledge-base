---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 4897
  name: "Crimson Contract"
  ordinal: 441
  slug: "crimson-contract"
  category: "Enchantment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "None"
  color: "Orange"
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
  - "Bleeding"
  - "Execute"
  - "HEALTH"
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
    url: "https://blightbane.io/card/Crimson_Contract"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Crimson Contract

## Card identity

- **Ordinal:** 441 of 1692 generated cards
- **Source card id:** `4897`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** None
- **Color:** Orange
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Crimson Contract` appears in the Neurrone Dawncaster SQLite card table with id `4897`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Execute: Gain 10 HEALTH if your foe dies while Bleeding. Unique.

## Raw rules HTML

```html
Execute: Gain 10 HEALTH if your foe dies while Bleeding. Unique.
```

## Observed keyword / token leads

`Bleeding`, `Execute`, `HEALTH`
