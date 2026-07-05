---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 816828
  name: "Dragon Breath"
  ordinal: 549
  slug: "dragon-breath"
  category: "Action"
  type: "Magic"
  rarity: "Uncommon"
  expansion: "Metamorphosis"
  color: "Aqua"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 2
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Barrier"
  - "Inflict Burning"
  - "Persistent"
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
    url: "https://blightbane.io/card/Dragon_Breath"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Dragon Breath

## Card identity

- **Ordinal:** 549 of 1692 generated cards
- **Source card id:** `816828`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Uncommon
- **Expansion:** Metamorphosis
- **Color:** Aqua
- **Cost summary:** dexint=2

## Source-backed facts

- Claim: `Dragon Breath` appears in the Neurrone Dawncaster SQLite card table with id `816828`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Discard a card.
Inflict Burning and gain Barrier equal to that cards cost, for each round this was in hand ([[tempValue+1]]). Persistent.

## Raw rules HTML

```html
Discard a card.<br>Inflict Burning and gain Barrier equal to that cards cost, for each round this was in hand ([[tempValue+1]]). Persistent.
```

## Observed keyword / token leads

`Barrier`, `Inflict Burning`, `Persistent`, `tempValue+1`
