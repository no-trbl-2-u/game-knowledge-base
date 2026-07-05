---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 2485283
  name: "Witching Hour"
  ordinal: 1677
  slug: "witching-hour"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Eclypse"
  color: "Blue"
  cost:
  dex: 0
  int: 1
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Cursed"
  - "Increases"
  - "Potency"
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
    url: "https://blightbane.io/card/Witching_Hour"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Witching Hour

## Card identity

- **Ordinal:** 1677 of 1692 generated cards
- **Source card id:** `2485283`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Eclypse
- **Color:** Blue
- **Cost summary:** int=1

## Source-backed facts

- Claim: `Witching Hour` appears in the Neurrone Dawncaster SQLite card table with id `2485283`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain [[tempValue+1]] Potency. 
Increases by 1 whenever you play a Cursed card.

## Raw rules HTML

```html
Gain [[tempValue+1]] Potency. <br>Increases by 1 whenever you play a Cursed card.
```

## Observed keyword / token leads

`Cursed`, `Increases`, `Potency`, `tempValue+1`
