---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 448711
  name: "Aura of Venom"
  ordinal: 142
  slug: "aura-of-venom"
  category: "Enchantment"
  type: "Utility"
  rarity: "Common"
  expansion: "Core"
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
  - "Memorized"
  - "Poison"
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
    url: "https://blightbane.io/card/Aura_of_Venom"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Aura of Venom

## Card identity

- **Ordinal:** 142 of 1692 generated cards
- **Source card id:** `448711`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Core
- **Color:** Green
- **Cost summary:** dex=1

## Source-backed facts

- Claim: `Aura of Venom` appears in the Neurrone Dawncaster SQLite card table with id `448711`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, double the amount of Poison on the enemy at the start of your turn. Unique. Memorized.

## Raw rules HTML

```html
This combat, double the amount of Poison on the enemy at the start of your turn. Unique. Memorized.
```

## Observed keyword / token leads

`Memorized`, `Poison`
