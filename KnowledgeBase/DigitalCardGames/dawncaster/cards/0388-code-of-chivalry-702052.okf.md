---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 702052
  name: "Code of Chivalry"
  ordinal: 388
  slug: "code-of-chivalry"
  category: "Code"
  type: "Divine"
  rarity: "Legendary"
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
  - "Blessings"
  - "Code"
  - "Double"
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
    url: "https://blightbane.io/card/Code_of_Chivalry"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Code of Chivalry

## Card identity

- **Ordinal:** 388 of 1692 generated cards
- **Source card id:** `702052`
- **Category:** Code
- **Type:** Divine
- **Rarity:** Legendary
- **Expansion:** Catalyst
- **Color:** Gold
- **Cost summary:** holy=3

## Source-backed facts

- Claim: `Code of Chivalry` appears in the Neurrone Dawncaster SQLite card table with id `702052`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Start of Turn:
Double your Blessings.
Code: Your deck contains no duplicate cards. Unique. Grounded.

## Raw rules HTML

```html
Start of Turn:<br>Double your Blessings.<br>Code: Your deck contains no duplicate cards. Unique. Grounded.
```

## Observed keyword / token leads

`Blessings`, `Code`, `Double`, `Grounded`, `Turn`
