---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 621336
  name: "Thaumaturgy"
  ordinal: 1532
  slug: "thaumaturgy"
  category: "Enchantment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Metamorphosis"
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
  blood: 2
observed_terms:
  - "Corrupted"
  - "Increase"
  - "Magic"
  - "Magic Action"
  - "magicActionsPlayed"
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
    url: "https://blightbane.io/card/Thaumaturgy"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Thaumaturgy

## Card identity

- **Ordinal:** 1532 of 1692 generated cards
- **Source card id:** `621336`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Metamorphosis
- **Color:** Blue
- **Cost summary:** int=1, blood=2

## Source-backed facts

- Claim: `Thaumaturgy` appears in the Neurrone Dawncaster SQLite card table with id `621336`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, Magic actions deal 1 additional damage. 
Corrupted: Increase the damage for each Magic Action you've played this turn ([[magicActionsPlayed]]). Unique.

## Raw rules HTML

```html
This combat, Magic actions deal 1 additional damage. <br>Corrupted: Increase the damage for each Magic Action you've played this turn ([[magicActionsPlayed]]). Unique.
```

## Observed keyword / token leads

`Corrupted`, `Increase`, `Magic`, `Magic Action`, `magicActionsPlayed`
