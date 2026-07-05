---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 992597
  name: "Vital Strike"
  ordinal: 1630
  slug: "vital-strike"
  category: "Enchantment"
  type: "Utility"
  rarity: "Rare"
  expansion: "None"
  color: "Red"
  cost:
  dex: 0
  int: 0
  str: 3
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Lifedrain"
  - "Melee"
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
    url: "https://blightbane.io/card/Vital_Strike"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Vital Strike

## Card identity

- **Ordinal:** 1630 of 1692 generated cards
- **Source card id:** `992597`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** None
- **Color:** Red
- **Cost summary:** str=3

## Source-backed facts

- Claim: `Vital Strike` appears in the Neurrone Dawncaster SQLite card table with id `992597`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Your next Melee attack this turn gains Lifedrain.

## Raw rules HTML

```html
Your next Melee attack this turn gains Lifedrain.
```

## Observed keyword / token leads

`Lifedrain`, `Melee`
