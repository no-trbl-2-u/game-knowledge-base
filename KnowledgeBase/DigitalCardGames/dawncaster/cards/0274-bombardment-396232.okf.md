---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 396232
  name: "Bombardment"
  ordinal: 274
  slug: "bombardment"
  category: "Action"
  type: "Ranged"
  rarity: "Monster"
  expansion: "None"
  color: "Monster"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "areaSpecial"
  - "Momentum"
  - "Raise"
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
    url: "https://blightbane.io/card/Bombardment"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Bombardment

## Card identity

- **Ordinal:** 274 of 1692 generated cards
- **Source card id:** `396232`
- **Category:** Action
- **Type:** Ranged
- **Rarity:** Monster
- **Expansion:** None
- **Color:** Monster
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Bombardment` appears in the Neurrone Dawncaster SQLite card table with id `396232`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Start of Turn:
Deal [damage:3] damage for each  Momentum ([[areaSpecial]]).
Raise  Momentum by 1.

## Raw rules HTML

```html
Start of Turn:<br>Deal [damage:3] damage for each  Momentum ([[areaSpecial]]).<br>Raise  Momentum by 1.
```

## Observed keyword / token leads

`areaSpecial`, `Momentum`, `Raise`, `Turn`
