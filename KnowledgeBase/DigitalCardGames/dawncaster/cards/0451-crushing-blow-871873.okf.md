---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 871873
  name: "Crushing Blow"
  ordinal: 451
  slug: "crushing-blow"
  category: "Action"
  type: "Melee"
  rarity: "Common"
  expansion: "Core"
  color: "Red"
  cost:
  dex: 0
  int: 0
  str: 2
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Frenzy"
  - "Gain STR"
  - "Rampage"
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
    url: "https://blightbane.io/card/Crushing_Blow"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Crushing Blow

## Card identity

- **Ordinal:** 451 of first 500 generated cards
- **Source card id:** `871873`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Common
- **Expansion:** Core
- **Color:** Red
- **Cost summary:** str=2

## Source-backed facts

- Claim: `Crushing Blow` appears in the Neurrone Dawncaster SQLite card table with id `871873`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:7] damage. 
Frenzy: Gain STR and draw a card Rampage.

## Raw rules HTML

```html
Deal [damage:7] damage. <br>Frenzy: Gain STR and draw a card Rampage.
```

## Observed keyword / token leads

`Frenzy`, `Gain STR`, `Rampage`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
