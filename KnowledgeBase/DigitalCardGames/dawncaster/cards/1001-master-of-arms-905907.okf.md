---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 905907
  name: "Master of Arms"
  ordinal: 1001
  slug: "master-of-arms"
  category: "Enchantment"
  type: "Utility"
  rarity: "Rare"
  expansion: "Core"
  color: "Red"
  cost:
  dex: 0
  int: 0
  str: 1
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Basic Attack"
  - "Basic Attacks"
  - "enchantmentStacks"
  - "Increases"
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
    url: "https://blightbane.io/card/Master_of_Arms"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Master of Arms

## Card identity

- **Ordinal:** 1001 of 1692 generated cards
- **Source card id:** `905907`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Core
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Master of Arms` appears in the Neurrone Dawncaster SQLite card table with id `905907`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, Basic Attacks deal [[enchantmentStacks]] additional damage. Increases by 1 for each Basic Attack you play. Unique.

## Raw rules HTML

```html
This combat, Basic Attacks deal [[enchantmentStacks]] additional damage. Increases by 1 for each Basic Attack you play. Unique.
```

## Observed keyword / token leads

`Basic Attack`, `Basic Attacks`, `enchantmentStacks`, `Increases`
