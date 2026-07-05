---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 203561
  name: "Sunken Forge"
  ordinal: 1493
  slug: "sunken-forge"
  category: "Location"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Eclypse"
  color: "Green"
  cost:
  dex: 1
  int: 0
  str: 0
  holy: 0
  neutral: 2
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Grounded"
  - "Persistent"
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
    url: "https://blightbane.io/card/Sunken_Forge"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Sunken Forge

## Card identity

- **Ordinal:** 1493 of 1692 generated cards
- **Source card id:** `203561`
- **Category:** Location
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Eclypse
- **Color:** Green
- **Cost summary:** dex=1, neutral=2

## Source-backed facts

- Claim: `Sunken Forge` appears in the Neurrone Dawncaster SQLite card table with id `203561`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, upgrade an action you play by 5, then lower this by one. Unique. Grounded. Persistent.

## Raw rules HTML

```html
This combat, upgrade an action you play by 5, then lower this by one. Unique. Grounded. Persistent.
```

## Observed keyword / token leads

`Grounded`, `Persistent`
