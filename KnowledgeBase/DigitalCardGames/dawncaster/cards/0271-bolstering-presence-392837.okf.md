---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 392837
  name: "Bolstering Presence"
  ordinal: 271
  slug: "bolstering-presence"
  category: "Enchantment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "None"
  color: "Gold"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Basic Attacks"
  - "Gain Armor"
  - "HEALTH"
  - "myCurrentHealth"
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
    url: "https://blightbane.io/card/Bolstering_Presence"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Bolstering Presence

## Card identity

- **Ordinal:** 271 of 1692 generated cards
- **Source card id:** `392837`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** None
- **Color:** Gold
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Bolstering Presence` appears in the Neurrone Dawncaster SQLite card table with id `392837`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain Armor equal to your current HEALTH ([[myCurrentHealth]]) for every 5 Basic Attacks you play. Unique.

## Raw rules HTML

```html
Gain Armor equal to your current HEALTH ([[myCurrentHealth]]) for every 5 Basic Attacks you play. Unique.
```

## Observed keyword / token leads

`Basic Attacks`, `Gain Armor`, `HEALTH`, `myCurrentHealth`
