---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 934442
  name: "Televan Insight"
  ordinal: 1520
  slug: "televan-insight"
  category: "Action"
  type: "Utility"
  rarity: "Rare"
  expansion: "Eclypse"
  color: "Green"
  cost:
  dex: 1
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Foretell"
  - "foretell+3"
  - "mapsindeck"
  - "Tide"
  - "Treasure Map"
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
    url: "https://blightbane.io/card/Televan_Insight"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Televan Insight

## Card identity

- **Ordinal:** 1520 of 1692 generated cards
- **Source card id:** `934442`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Eclypse
- **Color:** Green
- **Cost summary:** dex=1

## Source-backed facts

- Claim: `Televan Insight` appears in the Neurrone Dawncaster SQLite card table with id `934442`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Foretell [[foretell+3]].
Draw a card for each Treasure Map in your deck ([[mapsindeck]]), then change the Tide.

## Raw rules HTML

```html
Foretell [[foretell+3]].<br>Draw a card for each Treasure Map in your deck ([[mapsindeck]]), then change the Tide.
```

## Observed keyword / token leads

`Foretell`, `foretell+3`, `mapsindeck`, `Tide`, `Treasure Map`
