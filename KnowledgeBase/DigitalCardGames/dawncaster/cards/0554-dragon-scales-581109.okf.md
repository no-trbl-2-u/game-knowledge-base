---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 581109
  name: "Dragon Scales"
  ordinal: 554
  slug: "dragon-scales"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Core Extended"
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
  - "Armor"
  - "Increase"
  - "Persistent"
  - "Reflect"
  - "tempValue+3"
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
    url: "https://blightbane.io/card/Dragon_Scales"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Dragon Scales

## Card identity

- **Ordinal:** 554 of 1692 generated cards
- **Source card id:** `581109`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Core Extended
- **Color:** Aqua
- **Cost summary:** dexint=1

## Source-backed facts

- Claim: `Dragon Scales` appears in the Neurrone Dawncaster SQLite card table with id `581109`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain [[tempValue+3]] Armor and [[tempValue+3]] Reflect. Start of Turn: Increase both by 3. Persistent.

## Raw rules HTML

```html
Gain [[tempValue+3]] Armor and [[tempValue+3]] Reflect. Start of Turn: Increase both by 3. Persistent.
```

## Observed keyword / token leads

`Armor`, `Increase`, `Persistent`, `Reflect`, `tempValue+3`, `Turn`
