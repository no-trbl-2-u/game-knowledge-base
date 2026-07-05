---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 512721
  name: "Conjurers Boon"
  ordinal: 411
  slug: "conjurers-boon"
  category: "Enchantment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "None"
  color: "Blue"
  cost:
  dex: 0
  int: 3
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Conjuration"
  - "HEALTH"
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
    url: "https://blightbane.io/card/Conjurers_Boon"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Conjurers Boon

## Card identity

- **Ordinal:** 411 of first 500 generated cards
- **Source card id:** `512721`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** None
- **Color:** Blue
- **Cost summary:** int=3

## Source-backed facts

- Claim: `Conjurers Boon` appears in the Neurrone Dawncaster SQLite card table with id `512721`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, whenever you play a Conjuration, gain 2 HEALTH. Unique.

## Raw rules HTML

```html
This combat, whenever you play a Conjuration, gain 2 HEALTH. Unique.
```

## Observed keyword / token leads

`Conjuration`, `HEALTH`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
