---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 513283
  name: "Grievous Injury"
  ordinal: 764
  slug: "grievous-injury"
  category: "Action"
  type: "Melee"
  rarity: "Rare"
  expansion: "Infinitum"
  color: "Orange"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 1
  intstr: 0
  blood: 1
observed_terms:
  - "Bloodlust"
  - "Deep Wound"
  - "Inflict"
  - "Lifedrain"
  - "permaValue"
  - "Rebound"
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
    url: "https://blightbane.io/card/Grievous_Injury"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Grievous Injury

## Card identity

- **Ordinal:** 764 of 1692 generated cards
- **Source card id:** `513283`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Rare
- **Expansion:** Infinitum
- **Color:** Orange
- **Cost summary:** dexstr=1, blood=1

## Source-backed facts

- Claim: `Grievous Injury` appears in the Neurrone Dawncaster SQLite card table with id `513283`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:3] damage.
Bloodlust: Lifedrain. Rebound ([[permaValue]]/4): Inflict a Deep Wound.

## Raw rules HTML

```html
Deal [damage:3] damage.<br>Bloodlust: Lifedrain. Rebound ([[permaValue]]/4): Inflict a Deep Wound.
```

## Observed keyword / token leads

`Bloodlust`, `Deep Wound`, `Inflict`, `Lifedrain`, `permaValue`, `Rebound`
