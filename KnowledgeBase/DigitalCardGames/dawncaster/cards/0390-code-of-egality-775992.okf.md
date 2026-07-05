---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 775992
  name: "Code of Egality"
  ordinal: 390
  slug: "code-of-egality"
  category: "Code"
  type: "Divine"
  rarity: "Legendary"
  expansion: "Eclypse"
  color: "Aqua"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 3
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "All"
  - "Code"
  - "Grounded"
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
    url: "https://blightbane.io/card/Code_of_Egality"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Code of Egality

## Card identity

- **Ordinal:** 390 of first 500 generated cards
- **Source card id:** `775992`
- **Category:** Code
- **Type:** Divine
- **Rarity:** Legendary
- **Expansion:** Eclypse
- **Color:** Aqua
- **Cost summary:** dexint=3

## Source-backed facts

- Claim: `Code of Egality` appears in the Neurrone Dawncaster SQLite card table with id `775992`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

When you play a card, reduce the cost of a card in your hand and deck by 1.
Code: All other cards cost the same amount of energy. Unique. Grounded.

## Raw rules HTML

```html
When you play a card, reduce the cost of a card in your hand and deck by 1.<br>Code: All other cards cost the same amount of energy. Unique. Grounded.
```

## Observed keyword / token leads

`All`, `Code`, `Grounded`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
