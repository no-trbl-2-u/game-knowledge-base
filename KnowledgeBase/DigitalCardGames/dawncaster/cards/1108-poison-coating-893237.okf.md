---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 893237
  name: "Poison Coating"
  ordinal: 1108
  slug: "poison-coating"
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
  - "Hit"
  - "Melee"
  - "Poison"
  - "Ranged"
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
    url: "https://blightbane.io/card/Poison_Coating"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Poison Coating

## Card identity

- **Ordinal:** 1108 of 1692 generated cards
- **Source card id:** `893237`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Core
- **Color:** Green
- **Cost summary:** dex=1

## Source-backed facts

- Claim: `Poison Coating` appears in the Neurrone Dawncaster SQLite card table with id `893237`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, inflict 3 Poison whenever you Hit with a Melee or Ranged action. Unique.

## Raw rules HTML

```html
This combat, inflict 3 Poison whenever you Hit with a Melee or Ranged action. Unique.
```

## Observed keyword / token leads

`Hit`, `Melee`, `Poison`, `Ranged`
