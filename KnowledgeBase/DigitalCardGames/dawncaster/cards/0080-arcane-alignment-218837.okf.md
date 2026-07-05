---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 218837
  name: "Arcane Alignment"
  ordinal: 80
  slug: "arcane-alignment"
  category: "Enchantment"
  type: "Utility"
  rarity: "Rare"
  expansion: "Catalyst"
  color: "Blue"
  cost:
    dex: 0
    int: 2
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Attunement"
  - "Critical Hit"
  - "Magic Action"
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
    url: "https://blightbane.io/card/Arcane_Alignment"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Arcane Alignment

## Card identity

- **Ordinal:** 80 of 1692 generated cards
- **Source card id:** `218837`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Catalyst
- **Color:** Blue
- **Cost summary:** int=2

## Source-backed facts

- Claim: `Arcane Alignment` appears in the Neurrone Dawncaster SQLite card table with id `218837`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, your next Magic Action inflicts a Critical Hit after you trigger your Attunement. Unique.

## Raw rules HTML

```html
This combat, your next Magic Action inflicts a Critical Hit after you trigger your Attunement. Unique.
```

## Observed keyword / token leads

`Attunement`, `Critical Hit`, `Magic Action`
