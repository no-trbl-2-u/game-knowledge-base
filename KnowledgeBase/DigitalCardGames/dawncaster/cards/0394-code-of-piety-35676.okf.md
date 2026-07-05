---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 35676
  name: "Code of Piety"
  ordinal: 394
  slug: "code-of-piety"
  category: "Code"
  type: "Divine"
  rarity: "Legendary"
  expansion: "Core Extended"
  color: "Gold"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 3
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Blessings"
  - "Code"
  - "Grounded"
  - "One"
  - "Viola Skysworn"
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
    url: "https://blightbane.io/card/Code_of_Piety"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Code of Piety

## Card identity

- **Ordinal:** 394 of first 500 generated cards
- **Source card id:** `35676`
- **Category:** Code
- **Type:** Divine
- **Rarity:** Legendary
- **Expansion:** Core Extended
- **Color:** Gold
- **Cost summary:** holy=3

## Source-backed facts

- Claim: `Code of Piety` appears in the Neurrone Dawncaster SQLite card table with id `35676`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

One of your Blessings carries over to next combat. Code: You recruited Viola Skysworn. Unique. Grounded.

## Raw rules HTML

```html
One of your Blessings carries over to next combat. Code: You recruited Viola Skysworn. Unique. Grounded.
```

## Observed keyword / token leads

`Blessings`, `Code`, `Grounded`, `One`, `Viola Skysworn`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
