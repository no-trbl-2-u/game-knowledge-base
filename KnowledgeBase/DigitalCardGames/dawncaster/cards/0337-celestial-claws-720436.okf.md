---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 720436
  name: "Celestial Claws"
  ordinal: 337
  slug: "celestial-claws"
  category: "Basic Attack"
  type: "Melee"
  rarity: "Legendary"
  expansion: "Metaprogress"
  color: "Brown"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 1
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "HEALTH"
  - "Inflict Burning"
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
    url: "https://blightbane.io/card/Celestial_Claws"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Celestial Claws

## Card identity

- **Ordinal:** 337 of 1692 generated cards
- **Source card id:** `720436`
- **Category:** Basic Attack
- **Type:** Melee
- **Rarity:** Legendary
- **Expansion:** Metaprogress
- **Color:** Brown
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Celestial Claws` appears in the Neurrone Dawncaster SQLite card table with id `720436`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain 3 HEALTH.
Inflict Burning equal to the health you gained this round.

## Raw rules HTML

```html
Gain 3 HEALTH.<br>Inflict Burning equal to the health you gained this round.
```

## Observed keyword / token leads

`HEALTH`, `Inflict Burning`
