---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 882174
  name: "Worldbreaker"
  ordinal: 1683
  slug: "worldbreaker"
  category: "Action"
  type: "Melee"
  rarity: "Legendary"
  expansion: "Catalyst"
  color: "Red"
  cost:
  dex: 0
  int: 0
  str: 1
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Can"
  - "Double"
  - "On Draw"
  - "tempValue+1"
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
    url: "https://blightbane.io/card/Worldbreaker"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Worldbreaker

## Card identity

- **Ordinal:** 1683 of 1692 generated cards
- **Source card id:** `882174`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Legendary
- **Expansion:** Catalyst
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Worldbreaker` appears in the Neurrone Dawncaster SQLite card table with id `882174`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:[[tempValue+1]]*4] damage.
On Draw: Double the next damage this card deals.
Can't be upgraded.

## Raw rules HTML

```html
Deal [damage:[[tempValue+1]]*4] damage.
On Draw: Double the next damage this card deals.
Can't be upgraded.
```

## Observed keyword / token leads

`Can`, `Double`, `On Draw`, `tempValue+1`
