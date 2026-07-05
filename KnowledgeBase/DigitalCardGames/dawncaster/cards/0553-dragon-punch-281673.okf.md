---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 281673
  name: "Dragon Punch"
  ordinal: 553
  slug: "dragon-punch"
  category: "Action"
  type: "Melee"
  rarity: "Common"
  expansion: "Metamorphosis"
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
  - "Focus"
  - "Increase"
  - "Persistent"
  - "tempValue"
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
    url: "https://blightbane.io/card/Dragon_Punch"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Dragon Punch

## Card identity

- **Ordinal:** 553 of 1692 generated cards
- **Source card id:** `281673`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Common
- **Expansion:** Metamorphosis
- **Color:** Aqua
- **Cost summary:** dexint=1

## Source-backed facts

- Claim: `Dragon Punch` appears in the Neurrone Dawncaster SQLite card table with id `281673`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:[[tempValue]]+1] damage twice. 
Start of Turn: Increase the damage by your Focus. Persistent.

## Raw rules HTML

```html
Deal [damage:[[tempValue]]+1] damage twice. <br>Start of Turn: Increase the damage by your Focus. Persistent.
```

## Observed keyword / token leads

`Focus`, `Increase`, `Persistent`, `tempValue`, `Turn`
