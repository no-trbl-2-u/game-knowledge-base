---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 363022
  name: "Chromatic Orb"
  ordinal: 366
  slug: "chromatic-orb"
  category: "Action"
  type: "Magic"
  rarity: "Uncommon"
  expansion: "Catalyst"
  color: "Blue"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 1
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Delve"
  - "Orb"
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
    url: "https://blightbane.io/card/Chromatic_Orb"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Chromatic Orb

## Card identity

- **Ordinal:** 366 of first 500 generated cards
- **Source card id:** `363022`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Uncommon
- **Expansion:** Catalyst
- **Color:** Blue
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Chromatic Orb` appears in the Neurrone Dawncaster SQLite card table with id `363022`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Delve a free Orb.

## Raw rules HTML

```html
Delve a free Orb.
```

## Observed keyword / token leads

`Delve`, `Orb`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
