---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 376703
  name: "Code of Poverty"
  ordinal: 395
  slug: "code-of-poverty"
  category: "Code"
  type: "Divine"
  rarity: "Common"
  expansion: "Catalyst"
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
  - "Code"
  - "Gain HOLY"
  - "Grounded"
  - "Turn"
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
    url: "https://blightbane.io/card/Code_of_Poverty"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Code of Poverty

## Card identity

- **Ordinal:** 395 of first 500 generated cards
- **Source card id:** `376703`
- **Category:** Code
- **Type:** Divine
- **Rarity:** Common
- **Expansion:** Catalyst
- **Color:** Gold
- **Cost summary:** holy=3

## Source-backed facts

- Claim: `Code of Poverty` appears in the Neurrone Dawncaster SQLite card table with id `376703`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Start of Turn: 
Gain HOLY and draw a card. 
Code: Your deck contains only common cards. Unique. Grounded.

## Raw rules HTML

```html
Start of Turn: <br>Gain HOLY and draw a card. <br>Code: Your deck contains only common cards. Unique. Grounded.
```

## Observed keyword / token leads

`Code`, `Gain HOLY`, `Grounded`, `Turn`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
