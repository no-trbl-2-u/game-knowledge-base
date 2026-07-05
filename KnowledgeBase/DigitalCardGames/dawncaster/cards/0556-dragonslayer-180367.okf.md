---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 180367
  name: "Dragonslayer"
  ordinal: 556
  slug: "dragonslayer"
  category: "Action"
  type: "Melee"
  rarity: "Rare"
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
  - "Maximum HEALTH"
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
    url: "https://blightbane.io/card/Dragonslayer"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Dragonslayer

## Card identity

- **Ordinal:** 556 of 1692 generated cards
- **Source card id:** `180367`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Rare
- **Expansion:** Catalyst
- **Color:** Red
- **Cost summary:** str=2

## Source-backed facts

- Claim: `Dragonslayer` appears in the Neurrone Dawncaster SQLite card table with id `180367`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:5] damage.
Deal additional damage equal to 10% of your foe's Maximum HEALTH.

## Raw rules HTML

```html
Deal [damage:5] damage.<br>Deal additional damage equal to 10% of your foe's Maximum HEALTH.
```

## Observed keyword / token leads

`Maximum HEALTH`
