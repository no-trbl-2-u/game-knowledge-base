---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 220607
  name: "Courtly Manners"
  ordinal: 434
  slug: "courtly-manners"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Catalyst"
  color: "Purple"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 1
  blood: 0
observed_terms:
  - "Perform"
  - "typesOfEnergy"
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
    url: "https://blightbane.io/card/Courtly_Manners"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Courtly Manners

## Card identity

- **Ordinal:** 434 of first 500 generated cards
- **Source card id:** `220607`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Catalyst
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Courtly Manners` appears in the Neurrone Dawncaster SQLite card table with id `220607`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Perform 1 for each type of energy you have ([[typesOfEnergy]]).

## Raw rules HTML

```html
Perform 1 for each type of energy you have ([[typesOfEnergy]]).
```

## Observed keyword / token leads

`Perform`, `typesOfEnergy`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
