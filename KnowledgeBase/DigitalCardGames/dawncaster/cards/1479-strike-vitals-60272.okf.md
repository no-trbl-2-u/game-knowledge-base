---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 60272
  name: "Strike Vitals"
  ordinal: 1479
  slug: "strike-vitals"
  category: "Action"
  type: "Melee"
  rarity: "Rare"
  expansion: "Catalyst"
  color: "Red"
  cost:
    dex: 0
    int: 0
    str: 3
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "HEALTH"
  - "Lifedrain"
  - "Melee"
  - "On Hit"
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
    url: "https://blightbane.io/card/Strike_Vitals"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Strike Vitals

## Card identity

- **Ordinal:** 1479 of 1692 generated cards
- **Source card id:** `60272`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Rare
- **Expansion:** Catalyst
- **Color:** Red
- **Cost summary:** str=3

## Source-backed facts

- Claim: `Strike Vitals` appears in the Neurrone Dawncaster SQLite card table with id `60272`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:5] damage.
On Hit: Your foe can't gain HEALTH next turn, and your next Melee attack this turn gains Lifedrain.

## Raw rules HTML

```html
Deal [damage:5] damage.<br>On Hit: Your foe can't gain HEALTH next turn, and your next Melee attack this turn gains Lifedrain.
```

## Observed keyword / token leads

`HEALTH`, `Lifedrain`, `Melee`, `On Hit`
