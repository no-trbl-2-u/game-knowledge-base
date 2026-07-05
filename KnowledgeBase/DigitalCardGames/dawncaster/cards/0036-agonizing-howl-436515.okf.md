---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 436515
  name: "Agonizing Howl"
  ordinal: 36
  slug: "agonizing-howl"
  category: "Action"
  type: "Utility"
  rarity: "Monster"
  expansion: "None"
  color: "Monster"
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
  - "Add"
  - "Blessing"
  - "difficulty"
  - "Dispel"
  - "Terrors"
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
    url: "https://blightbane.io/card/Agonizing_Howl"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Agonizing Howl

## Card identity

- **Ordinal:** 36 of first 500 generated cards
- **Source card id:** `436515`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Monster
- **Expansion:** None
- **Color:** Monster
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Agonizing Howl` appears in the Neurrone Dawncaster SQLite card table with id `436515`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Dispel a Blessing.
Add [[difficulty]] Terrors to
your foe’s deck.

## Raw rules HTML

```html
Dispel a Blessing.<br>Add [[difficulty]] Terrors to<br>your foe’s deck.
```

## Observed keyword / token leads

`Add`, `Blessing`, `difficulty`, `Dispel`, `Terrors`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
