---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 417583
  name: "Aura of Corruption"
  ordinal: 124
  slug: "aura-of-corruption"
  category: "Enchantment"
  type: "Utility"
  rarity: "Rare"
  expansion: "Infinitum"
  color: "Purple"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 2
  blood: 0
observed_terms:
  - "Affliction"
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
    url: "https://blightbane.io/card/Aura_of_Corruption"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Aura of Corruption

## Card identity

- **Ordinal:** 124 of first 500 generated cards
- **Source card id:** `417583`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Infinitum
- **Color:** Purple
- **Cost summary:** intstr=2

## Source-backed facts

- Claim: `Aura of Corruption` appears in the Neurrone Dawncaster SQLite card table with id `417583`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Whenever you inflict a unique Affliction during your turn, draw a card. Unique. Memorized.

## Raw rules HTML

```html
Whenever you inflict a unique Affliction during your turn, draw a card. Unique. Memorized.
```

## Observed keyword / token leads

`Affliction`, `Memorized`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
