---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 867449
  name: "Boiling Rage"
  ordinal: 266
  slug: "boiling-rage"
  category: "Enchantment"
  type: "Utility"
  rarity: "Monster"
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
  - "Anger"
  - "difficulty"
  - "Piercing"
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
    url: "https://blightbane.io/card/Boiling_Rage"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Boiling Rage

## Card identity

- **Ordinal:** 266 of first 500 generated cards
- **Source card id:** `867449`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Monster
- **Expansion:** None
- **Color:** Monster
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Boiling Rage` appears in the Neurrone Dawncaster SQLite card table with id `867449`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Whenever you are dealt damage, gain 1 Anger. When you have |#4+[[difficulty]]+[[difficulty]]#| Anger, remove all Anger and deal |#4+[[difficulty]]+[[difficulty]]#| Piercing damage. Unique.

## Raw rules HTML

```html
Whenever you are dealt damage, gain 1 Anger. When you have |#4+[[difficulty]]+[[difficulty]]#| Anger, remove all Anger and deal |#4+[[difficulty]]+[[difficulty]]#| Piercing damage. Unique.
```

## Observed keyword / token leads

`Anger`, `difficulty`, `Piercing`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
