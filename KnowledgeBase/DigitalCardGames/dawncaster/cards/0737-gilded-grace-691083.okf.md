---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 691083
  name: "Gilded Grace"
  ordinal: 737
  slug: "gilded-grace"
  category: "Enchantment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Catalyst"
  color: "Green"
  cost:
  dex: 1
  int: 0
  str: 0
  holy: 1
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Impervious"
  - "Lucky Coins"
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
    url: "https://blightbane.io/card/Gilded_Grace"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Gilded Grace

## Card identity

- **Ordinal:** 737 of 1692 generated cards
- **Source card id:** `691083`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Catalyst
- **Color:** Green
- **Cost summary:** dex=1, holy=1

## Source-backed facts

- Claim: `Gilded Grace` appears in the Neurrone Dawncaster SQLite card table with id `691083`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, gain Impervious for every 3 Lucky Coins you play. Unique.

## Raw rules HTML

```html
This combat, gain Impervious for every 3 Lucky Coins you play. Unique.
```

## Observed keyword / token leads

`Impervious`, `Lucky Coins`
