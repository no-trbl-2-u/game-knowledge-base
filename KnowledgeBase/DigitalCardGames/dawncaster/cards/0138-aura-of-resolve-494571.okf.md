---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 494571
  name: "Aura of Resolve"
  ordinal: 138
  slug: "aura-of-resolve"
  category: "Enchantment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Synthesis"
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
  - "Blessing"
  - "HOLY"
  - "Memorized"
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
    url: "https://blightbane.io/card/Aura_of_Resolve"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Aura of Resolve

## Card identity

- **Ordinal:** 138 of 1692 generated cards
- **Source card id:** `494571`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Synthesis
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Aura of Resolve` appears in the Neurrone Dawncaster SQLite card table with id `494571`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, whenever you take damage during your turn, gain HOLY and a random Blessing. Unique. Memorized.

## Raw rules HTML

```html
This combat, whenever you take damage during your turn, gain HOLY and a random Blessing. Unique. Memorized.
```

## Observed keyword / token leads

`Blessing`, `HOLY`, `Memorized`
