---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 171344
  name: "Soulfire Bomb"
  ordinal: 1405
  slug: "soulfire-bomb"
  category: "Action"
  type: "Ranged"
  rarity: "Legendary"
  expansion: "None"
  color: "Brown"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 3
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Charge"
  - "Lifedrain"
  - "Persistent"
  - "Ready"
  - "Reaping"
  - "Speed"
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
    url: "https://blightbane.io/card/Soulfire_Bomb"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Soulfire Bomb

## Card identity

- **Ordinal:** 1405 of 1692 generated cards
- **Source card id:** `171344`
- **Category:** Action
- **Type:** Ranged
- **Rarity:** Legendary
- **Expansion:** None
- **Color:** Brown
- **Cost summary:** neutral=3

## Source-backed facts

- Claim: `Soulfire Bomb` appears in the Neurrone Dawncaster SQLite card table with id `171344`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:10] damage.
Ready after 3 turns. Speed up the timer when you use a Charge. Persistent. Lifedrain. Reaping.

## Raw rules HTML

```html
Deal [damage:10] damage.<br>Ready after 3 turns. Speed up the timer when you use a Charge. Persistent. Lifedrain. Reaping.
```

## Observed keyword / token leads

`Charge`, `Lifedrain`, `Persistent`, `Ready`, `Reaping`, `Speed`
