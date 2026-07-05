---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 885279
  name: "Ceremony of Roses"
  ordinal: 345
  slug: "ceremony-of-roses"
  category: "Action"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Catalyst"
  color: "Purple"
  cost:
  dex: 1
  int: 1
  str: 1
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Blessings"
  - "Inflict Charmed"
  - "myTotalBlessings"
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
    url: "https://blightbane.io/card/Ceremony_of_Roses"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Ceremony of Roses

## Card identity

- **Ordinal:** 345 of first 500 generated cards
- **Source card id:** `885279`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Catalyst
- **Color:** Purple
- **Cost summary:** dex=1, int=1, str=1

## Source-backed facts

- Claim: `Ceremony of Roses` appears in the Neurrone Dawncaster SQLite card table with id `885279`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Inflict Charmed 
equal to the sum of 
your Blessings ([[myTotalBlessings]]).

## Raw rules HTML

```html
Inflict Charmed <br>equal to the sum of <br>your Blessings ([[myTotalBlessings]]).
```

## Observed keyword / token leads

`Blessings`, `Inflict Charmed`, `myTotalBlessings`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
