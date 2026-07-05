---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 274127
  name: "Potion of Trickery"
  ordinal: 1115
  slug: "potion-of-trickery"
  category: "Item"
  type: "Utility"
  rarity: "Common"
  expansion: "Infinitum"
  color: "Brown"
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
  - "Add"
  - "Evasion"
  - "One Use"
  - "Snare"
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
    url: "https://blightbane.io/card/Potion_of_Trickery"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Potion of Trickery

## Card identity

- **Ordinal:** 1115 of 1692 generated cards
- **Source card id:** `274127`
- **Category:** Item
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Infinitum
- **Color:** Brown
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Potion of Trickery` appears in the Neurrone Dawncaster SQLite card table with id `274127`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

One Use: Add a Snare
to the foe's deck. 
Gain 1 Evasion.

## Raw rules HTML

```html
One Use: Add a Snare<br>to the foe's deck. <br>Gain 1 Evasion.
```

## Observed keyword / token leads

`Add`, `Evasion`, `One Use`, `Snare`
