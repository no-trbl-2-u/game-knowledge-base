---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 166269
  name: "Majestic Grandeur Listener"
  ordinal: 961
  slug: "majestic-grandeur-listener"
  category: "Enchantment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "None"
  color: "Brown"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 3
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "After"
  - "Charmed"
  - "Legendary"
  - "Maximum HEALTH"
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
    url: "https://blightbane.io/card/Majestic_Grandeur_Listener"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Majestic Grandeur Listener

## Card identity

- **Ordinal:** 961 of 1692 generated cards
- **Source card id:** `166269`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** None
- **Color:** Brown
- **Cost summary:** neutral=3

## Source-backed facts

- Claim: `Majestic Grandeur Listener` appears in the Neurrone Dawncaster SQLite card table with id `166269`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

The first Legendary you draw each turn is free. After playing 10 different Legendary cards, inflict Charmed equal to your foe's Maximum HEALTH.

## Raw rules HTML

```html
The first Legendary you draw each turn is free. After playing 10 different Legendary cards, inflict Charmed equal to your foe's Maximum HEALTH.
```

## Observed keyword / token leads

`After`, `Charmed`, `Legendary`, `Maximum HEALTH`
