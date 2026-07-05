---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 820364
  name: "Aura of Purity"
  ordinal: 137
  slug: "aura-of-purity"
  category: "Enchantment"
  type: "Divine"
  rarity: "Legendary"
  expansion: "Infinitum"
  color: "Gold"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 1
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Memorized"
  - "Zeal"
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
    url: "https://blightbane.io/card/Aura_of_Purity"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Aura of Purity

## Card identity

- **Ordinal:** 137 of 1692 generated cards
- **Source card id:** `820364`
- **Category:** Enchantment
- **Type:** Divine
- **Rarity:** Legendary
- **Expansion:** Infinitum
- **Color:** Gold
- **Cost summary:** holy=1

## Source-backed facts

- Claim: `Aura of Purity` appears in the Neurrone Dawncaster SQLite card table with id `820364`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, bury a card and gain 2 Zeal at the start of your turn. Unique. Memorized.

## Raw rules HTML

```html
This combat, bury a card and gain 2 Zeal at the start of your turn. Unique. Memorized.
```

## Observed keyword / token leads

`Memorized`, `Zeal`
