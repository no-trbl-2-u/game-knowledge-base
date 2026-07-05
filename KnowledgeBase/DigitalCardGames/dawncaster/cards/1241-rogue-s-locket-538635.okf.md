---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 538635
  name: "Rogue's Locket"
  ordinal: 1241
  slug: "rogue-s-locket"
  category: "Item"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Catalyst"
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
  - "DEX"
  - "Evasion"
  - "Gain DEX"
  - "While"
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
    url: "https://blightbane.io/card/Rogue%27s_Locket"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Rogue's Locket

## Card identity

- **Ordinal:** 1241 of 1692 generated cards
- **Source card id:** `538635`
- **Category:** Item
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Catalyst
- **Color:** Brown
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Rogue's Locket` appears in the Neurrone Dawncaster SQLite card table with id `538635`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain DEX and Evasion.
While this is in your deck, rewards include cards that cost DEX.

## Raw rules HTML

```html
Gain DEX and Evasion.<br>While this is in your deck, rewards include cards that cost DEX.
```

## Observed keyword / token leads

`DEX`, `Evasion`, `Gain DEX`, `While`
