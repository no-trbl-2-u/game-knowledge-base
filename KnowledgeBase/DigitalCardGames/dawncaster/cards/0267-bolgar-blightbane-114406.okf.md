---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 114406
  name: "Bolgar Blightbane"
  ordinal: 267
  slug: "bolgar-blightbane"
  category: "Enchantment"
  type: "Monster"
  rarity: "Legendary"
  expansion: "None"
  color: "Monster"
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
  - "Bolgar"
  - "Conjure"
  - "HEALTH"
  - "Poison"
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
    url: "https://blightbane.io/card/Bolgar_Blightbane"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Bolgar Blightbane

## Card identity

- **Ordinal:** 267 of first 500 generated cards
- **Source card id:** `114406`
- **Category:** Enchantment
- **Type:** Monster
- **Rarity:** Legendary
- **Expansion:** None
- **Color:** Monster
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Bolgar Blightbane` appears in the Neurrone Dawncaster SQLite card table with id `114406`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Conjure a free Bolgar card at the beginning of the round. 
Whenever your foe takes damage from Poison, gain 3 HEALTH. Unique.

## Raw rules HTML

```html
Conjure a free Bolgar card at the beginning of the round. <br>Whenever your foe takes damage from Poison, gain 3 HEALTH. Unique.
```

## Observed keyword / token leads

`Bolgar`, `Conjure`, `HEALTH`, `Poison`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
