---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 398867
  name: "Ascension II"
  ordinal: 105
  slug: "ascension-ii"
  category: "Form"
  type: "Divine"
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
  - "Burning"
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
    url: "https://blightbane.io/card/Ascension_II"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Ascension II

## Card identity

- **Ordinal:** 105 of first 500 generated cards
- **Source card id:** `398867`
- **Category:** Form
- **Type:** Divine
- **Rarity:** Legendary
- **Expansion:** None
- **Color:** Gold
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Ascension II` appears in the Neurrone Dawncaster SQLite card table with id `398867`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

When you deal damage, inflict an equal amount of Burning.

## Raw rules HTML

```html
When you deal damage, inflict an equal amount of Burning.
```

## Observed keyword / token leads

`Burning`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
