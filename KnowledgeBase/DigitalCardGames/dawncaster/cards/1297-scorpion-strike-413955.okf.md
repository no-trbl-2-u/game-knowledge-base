---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 413955
  name: "Scorpion Strike"
  ordinal: 1297
  slug: "scorpion-strike"
  category: "Action"
  type: "Melee"
  rarity: "Rare"
  expansion: "Eclypse"
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
  - "Agile"
  - "Inflict Doom"
  - "Inflict Stunned"
  - "Persistent"
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
    url: "https://blightbane.io/card/Scorpion_Strike"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Scorpion Strike

## Card identity

- **Ordinal:** 1297 of 1692 generated cards
- **Source card id:** `413955`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Rare
- **Expansion:** Eclypse
- **Color:** Aqua
- **Cost summary:** dexint=1

## Source-backed facts

- Claim: `Scorpion Strike` appears in the Neurrone Dawncaster SQLite card table with id `413955`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:6] damage.
Inflict Doom for each damage dealt. Agile: Inflict Stunned. Persistent.

## Raw rules HTML

```html
Deal [damage:6] damage.<br>Inflict Doom for each damage dealt. Agile: Inflict Stunned. Persistent.
```

## Observed keyword / token leads

`Agile`, `Inflict Doom`, `Inflict Stunned`, `Persistent`
