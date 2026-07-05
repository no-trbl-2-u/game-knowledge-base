---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 1561
  name: "Aurora Prism"
  ordinal: 146
  slug: "aurora-prism"
  category: "Artifact"
  type: "Utility"
  rarity: "Legendary"
  expansion: "None"
  color: "Brown"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 2
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "The Prism"
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
    url: "https://blightbane.io/card/Aurora_Prism"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Aurora Prism

## Card identity

- **Ordinal:** 146 of first 500 generated cards
- **Source card id:** `1561`
- **Category:** Artifact
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** None
- **Color:** Brown
- **Cost summary:** neutral=2

## Source-backed facts

- Claim: `Aurora Prism` appears in the Neurrone Dawncaster SQLite card table with id `1561`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

The Prism appears to store spent energy and uses it in unexpected ways. Unique.

## Raw rules HTML

```html
The Prism appears to store spent energy and uses it in unexpected ways. Unique.
```

## Observed keyword / token leads

`The Prism`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
