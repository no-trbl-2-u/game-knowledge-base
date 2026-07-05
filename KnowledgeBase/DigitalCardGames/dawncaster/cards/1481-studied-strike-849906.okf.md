---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 849906
  name: "Studied Strike"
  ordinal: 1481
  slug: "studied-strike"
  category: "Action"
  type: "Melee"
  rarity: "Common"
  expansion: "Synthesis"
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
  - "Add"
  - "tempValue+3"
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
    url: "https://blightbane.io/card/Studied_Strike"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Studied Strike

## Card identity

- **Ordinal:** 1481 of 1692 generated cards
- **Source card id:** `849906`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Common
- **Expansion:** Synthesis
- **Color:** Aqua
- **Cost summary:** dexint=1

## Source-backed facts

- Claim: `Studied Strike` appears in the Neurrone Dawncaster SQLite card table with id `849906`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:[[tempValue+3]]] damage.
Add 3 damage whenever you play a copy of a card you've played this turn.

## Raw rules HTML

```html
Deal [damage:[[tempValue+3]]] damage.
Add 3 damage whenever you play a copy of a card you've played this turn.
```

## Observed keyword / token leads

`Add`, `tempValue+3`
