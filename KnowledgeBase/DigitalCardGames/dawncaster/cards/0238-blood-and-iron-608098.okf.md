---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 608098
  name: "Blood and Iron"
  ordinal: 238
  slug: "blood-and-iron"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Eclypse"
  color: "Red"
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
  - "Battlespear"
  - "Create"
  - "damageTakenLastTurn"
  - "If HOLY"
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
    url: "https://blightbane.io/card/Blood_and_Iron"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Blood and Iron

## Card identity

- **Ordinal:** 238 of first 500 generated cards
- **Source card id:** `608098`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Eclypse
- **Color:** Red
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Blood and Iron` appears in the Neurrone Dawncaster SQLite card table with id `608098`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Create a Battlespear.
If HOLY was spent, upgrade it for each damage you took since your last turn ([[damageTakenLastTurn]]).

## Raw rules HTML

```html
Create a Battlespear.<br>If HOLY was spent, upgrade it for each damage you took since your last turn ([[damageTakenLastTurn]]).
```

## Observed keyword / token leads

`Battlespear`, `Create`, `damageTakenLastTurn`, `If HOLY`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
