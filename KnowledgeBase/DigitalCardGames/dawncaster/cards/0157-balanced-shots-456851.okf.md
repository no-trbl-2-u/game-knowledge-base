---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 456851
  name: "Balanced Shots"
  ordinal: 157
  slug: "balanced-shots"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Metamorphosis"
  color: "Aqua"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 1
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Balance"
  - "Conjure"
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
    url: "https://blightbane.io/card/Balanced_Shots"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Balanced Shots

## Card identity

- **Ordinal:** 157 of first 500 generated cards
- **Source card id:** `456851`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Metamorphosis
- **Color:** Aqua
- **Cost summary:** dexint=1

## Source-backed facts

- Claim: `Balanced Shots` appears in the Neurrone Dawncaster SQLite card table with id `456851`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Conjure 2 arrows. 
Balance: Conjure 2 more at the start of next turn.

## Raw rules HTML

```html
Conjure 2 arrows. <br>Balance: Conjure 2 more at the start of next turn.
```

## Observed keyword / token leads

`Balance`, `Conjure`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
