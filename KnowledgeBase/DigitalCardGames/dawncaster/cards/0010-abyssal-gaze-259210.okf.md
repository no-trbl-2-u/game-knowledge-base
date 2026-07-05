---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 259210
  name: "Abyssal Gaze"
  ordinal: 10
  slug: "abyssal-gaze"
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
  - "Dark Embrace"
  - "Inflict"
  - "Weakness"
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
    url: "https://blightbane.io/card/Abyssal_Gaze"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Abyssal Gaze

## Card identity

- **Ordinal:** 10 of first 500 generated cards
- **Source card id:** `259210`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Monster
- **Expansion:** None
- **Color:** Monster
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Abyssal Gaze` appears in the Neurrone Dawncaster SQLite card table with id `259210`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Inflict 1 Weakness.
Add 1 stack to your foe's Dark Embrace.

## Raw rules HTML

```html
Inflict 1 Weakness.<br>Add 1 stack to your foe's Dark Embrace.
```

## Observed keyword / token leads

`Add`, `Dark Embrace`, `Inflict`, `Weakness`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
