---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 468232
  name: "Sapphire Prism"
  ordinal: 1284
  slug: "sapphire-prism"
  category: "Enchantment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "None"
  color: "Blue"
  cost:
    dex: 0
    int: 1
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Cards"
  - "Chain"
  - "enchantmentStacks"
  - "INT"
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
    url: "https://blightbane.io/card/Sapphire_Prism"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Sapphire Prism

## Card identity

- **Ordinal:** 1284 of 1692 generated cards
- **Source card id:** `468232`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** None
- **Color:** Blue
- **Cost summary:** int=1

## Source-backed facts

- Claim: `Sapphire Prism` appears in the Neurrone Dawncaster SQLite card table with id `468232`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Cards that cost INT deal [[enchantmentStacks]] additional damage. Gain [[enchantmentStacks]] Chain at the start of each turn. Unique.

## Raw rules HTML

```html
Cards that cost INT deal [[enchantmentStacks]] additional damage. Gain [[enchantmentStacks]] Chain at the start of each turn. Unique.
```

## Observed keyword / token leads

`Cards`, `Chain`, `enchantmentStacks`, `INT`
