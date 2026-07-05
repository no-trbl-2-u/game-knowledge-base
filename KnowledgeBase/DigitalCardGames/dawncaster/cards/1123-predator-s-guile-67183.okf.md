---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 67183
  name: "Predator's Guile"
  ordinal: 1123
  slug: "predator-s-guile"
  category: "Enchantment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Catalyst"
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
    blood: 2
observed_terms:
  - "Ambush"
  - "Critical Hits"
  - "Darkness"
  - "Melee Actions"
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
    url: "https://blightbane.io/card/Predator%27s_Guile"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Predator's Guile

## Card identity

- **Ordinal:** 1123 of 1692 generated cards
- **Source card id:** `67183`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Catalyst
- **Color:** Orange
- **Cost summary:** blood=2

## Source-backed facts

- Claim: `Predator's Guile` appears in the Neurrone Dawncaster SQLite card table with id `67183`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

While in Darkness and your Ambush is active, your Melee Actions inflict Critical Hits. Darkness 5. Unique.

## Raw rules HTML

```html
While in Darkness and your Ambush is active, your Melee Actions inflict Critical Hits. Darkness 5. Unique.
```

## Observed keyword / token leads

`Ambush`, `Critical Hits`, `Darkness`, `Melee Actions`, `While`
