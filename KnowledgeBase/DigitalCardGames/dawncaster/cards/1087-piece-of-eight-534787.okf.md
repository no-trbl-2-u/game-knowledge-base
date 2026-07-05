---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 534787
  name: "Piece of Eight"
  ordinal: 1087
  slug: "piece-of-eight"
  category: "Action"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Core Extended"
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
  - "Change"
  - "Channel"
  - "Conjure"
  - "Lucky Coin"
  - "Tide"
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
    url: "https://blightbane.io/card/Piece_of_Eight"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Piece of Eight

## Card identity

- **Ordinal:** 1087 of 1692 generated cards
- **Source card id:** `534787`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Core Extended
- **Color:** Green
- **Cost summary:** dex=1

## Source-backed facts

- Claim: `Piece of Eight` appears in the Neurrone Dawncaster SQLite card table with id `534787`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Conjure a Lucky Coin. Channel: Change the Tide whenever you play a Lucky Coin.

## Raw rules HTML

```html
Conjure a Lucky Coin. Channel: Change the Tide whenever you play a Lucky Coin.
```

## Observed keyword / token leads

`Change`, `Channel`, `Conjure`, `Lucky Coin`, `Tide`
