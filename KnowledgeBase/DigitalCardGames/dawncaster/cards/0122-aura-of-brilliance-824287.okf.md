---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 824287
  name: "Aura of Brilliance"
  ordinal: 122
  slug: "aura-of-brilliance"
  category: "Enchantment"
  type: "Utility"
  rarity: "Rare"
  expansion: "Core"
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
  - "Focus"
  - "INT"
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
    url: "https://blightbane.io/card/Aura_of_Brilliance"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Aura of Brilliance

## Card identity

- **Ordinal:** 122 of first 500 generated cards
- **Source card id:** `824287`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Core
- **Color:** Blue
- **Cost summary:** int=2

## Source-backed facts

- Claim: `Aura of Brilliance` appears in the Neurrone Dawncaster SQLite card table with id `824287`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, gain INT whenever you gain Focus. Unique. Memorized.

## Raw rules HTML

```html
This combat, gain INT whenever you gain Focus. Unique. Memorized.
```

## Observed keyword / token leads

`Focus`, `INT`, `Memorized`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
