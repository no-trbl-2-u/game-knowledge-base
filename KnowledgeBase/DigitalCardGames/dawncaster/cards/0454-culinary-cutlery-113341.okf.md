---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 113341
  name: "Culinary Cutlery"
  ordinal: 454
  slug: "culinary-cutlery"
  category: "Action"
  type: "Utility"
  rarity: "Rare"
  expansion: "Eclypse"
  color: "Red"
  cost:
  dex: 0
  int: 0
  str: 1
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Basic Attacks"
  - "Conjure"
  - "Cooking"
  - "NEUTRAL"
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
    url: "https://blightbane.io/card/Culinary_Cutlery"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Culinary Cutlery

## Card identity

- **Ordinal:** 454 of first 500 generated cards
- **Source card id:** `113341`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Eclypse
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Culinary Cutlery` appears in the Neurrone Dawncaster SQLite card table with id `113341`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Conjure 3 Basic Attacks.
If you are Cooking, reduce the cost of Basic Attacks in your hand by NEUTRAL.

## Raw rules HTML

```html
Conjure 3 Basic Attacks.<br>If you are Cooking, reduce the cost of Basic Attacks in your hand by NEUTRAL.
```

## Observed keyword / token leads

`Basic Attacks`, `Conjure`, `Cooking`, `NEUTRAL`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
