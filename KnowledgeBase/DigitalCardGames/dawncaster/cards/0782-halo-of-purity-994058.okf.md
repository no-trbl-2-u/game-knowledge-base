---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 994058
  name: "Halo of Purity"
  ordinal: 782
  slug: "halo-of-purity"
  category: "Enchantment"
  type: "Divine"
  rarity: "Rare"
  expansion: "Metamorphosis"
  color: "Purple"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 1
    blood: 0
observed_terms:
  - "Bury"
  - "Memorized"
  - "Virtue"
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
    url: "https://blightbane.io/card/Halo_of_Purity"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Halo of Purity

## Card identity

- **Ordinal:** 782 of 1692 generated cards
- **Source card id:** `994058`
- **Category:** Enchantment
- **Type:** Divine
- **Rarity:** Rare
- **Expansion:** Metamorphosis
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Halo of Purity` appears in the Neurrone Dawncaster SQLite card table with id `994058`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, gain a random Virtue whenever you Bury a card. Unique. Memorized.

## Raw rules HTML

```html
This combat, gain a random Virtue whenever you Bury a card. Unique. Memorized.
```

## Observed keyword / token leads

`Bury`, `Memorized`, `Virtue`
