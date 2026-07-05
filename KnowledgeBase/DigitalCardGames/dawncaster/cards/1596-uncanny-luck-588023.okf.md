---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 588023
  name: "Uncanny Luck"
  ordinal: 1596
  slug: "uncanny-luck"
  category: "Enchantment"
  type: "Utility"
  rarity: "Rare"
  expansion: "Catalyst"
  color: "Green"
  cost:
  dex: 2
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Coins"
  - "Critical Hit"
  - "Improved"
  - "luck"
  - "Luck"
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
    url: "https://blightbane.io/card/Uncanny_Luck"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Uncanny Luck

## Card identity

- **Ordinal:** 1596 of 1692 generated cards
- **Source card id:** `588023`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Catalyst
- **Color:** Green
- **Cost summary:** dex=2

## Source-backed facts

- Claim: `Uncanny Luck` appears in the Neurrone Dawncaster SQLite card table with id `588023`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, ranged actions and Coins have a [[luck]]% chance to Critical Hit. Improved by your Luck. Unique.

## Raw rules HTML

```html
This combat, ranged actions and Coins have a [[luck]]% chance to Critical Hit. Improved by your Luck. Unique.
```

## Observed keyword / token leads

`Coins`, `Critical Hit`, `Improved`, `luck`, `Luck`
