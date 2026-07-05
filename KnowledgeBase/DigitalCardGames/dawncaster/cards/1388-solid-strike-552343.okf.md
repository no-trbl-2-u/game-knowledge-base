---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 552343
  name: "Solid Strike"
  ordinal: 1388
  slug: "solid-strike"
  category: "Action"
  type: "Melee"
  rarity: "Common"
  expansion: "Catalyst"
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
  - "Brittle"
  - "Inflict"
  - "On Draw"
  - "tempValue"
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
    url: "https://blightbane.io/card/Solid_Strike"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Solid Strike

## Card identity

- **Ordinal:** 1388 of 1692 generated cards
- **Source card id:** `552343`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Common
- **Expansion:** Catalyst
- **Color:** Red
- **Cost summary:** str=2

## Source-backed facts

- Claim: `Solid Strike` appears in the Neurrone Dawncaster SQLite card table with id `552343`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:4+[[tempValue]]] damage.
On Draw: Inflict 4 Brittle and increase this card's next damage by 6.

## Raw rules HTML

```html
Deal [damage:4+[[tempValue]]] damage.<br>On Draw: Inflict 4 Brittle and increase this card's next damage by 6.
```

## Observed keyword / token leads

`Brittle`, `Inflict`, `On Draw`, `tempValue`
