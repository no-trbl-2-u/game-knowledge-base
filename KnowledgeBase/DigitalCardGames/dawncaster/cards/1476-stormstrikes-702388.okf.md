---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 702388
  name: "Stormstrikes"
  ordinal: 1476
  slug: "stormstrikes"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Metaprogress"
  color: "Orange"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 1
  intstr: 0
  blood: 0
observed_terms:
  - "Basic Attack"
  - "Lightning Bolt"
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
    url: "https://blightbane.io/card/Stormstrikes"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Stormstrikes

## Card identity

- **Ordinal:** 1476 of 1692 generated cards
- **Source card id:** `702388`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Metaprogress
- **Color:** Orange
- **Cost summary:** dexstr=1

## Source-backed facts

- Claim: `Stormstrikes` appears in the Neurrone Dawncaster SQLite card table with id `702388`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This turn, whenever you play a Basic Attack, conjure a free Lightning Bolt.

## Raw rules HTML

```html
This turn, whenever you play a Basic Attack, conjure a free Lightning Bolt.
```

## Observed keyword / token leads

`Basic Attack`, `Lightning Bolt`
