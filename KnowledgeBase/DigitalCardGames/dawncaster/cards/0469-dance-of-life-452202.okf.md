---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 452202
  name: "Dance of Life"
  ordinal: 469
  slug: "dance-of-life"
  category: "Action"
  type: "Utility"
  rarity: "Rare"
  expansion: "Eclypse"
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
  blood: 0
observed_terms:
  - "Completing"
  - "Gain Ritualist"
  - "Heavy"
  - "Maximum HEALTH"
  - "myMaxHealth/20"
  - "Performance"
  - "Restore"
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
    url: "https://blightbane.io/card/Dance_of_Life"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Dance of Life

## Card identity

- **Ordinal:** 469 of 1692 generated cards
- **Source card id:** `452202`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Eclypse
- **Color:** Orange
- **Cost summary:** dexstr=1

## Source-backed facts

- Claim: `Dance of Life` appears in the Neurrone Dawncaster SQLite card table with id `452202`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain Ritualist. Restore 5% of your Maximum HEALTH ([[myMaxHealth/20]]). Completing a Performance returns this to hand. Heavy.

## Raw rules HTML

```html
Gain Ritualist. Restore 5% of your Maximum HEALTH ([[myMaxHealth/20]]). Completing a Performance returns this to hand. Heavy.
```

## Observed keyword / token leads

`Completing`, `Gain Ritualist`, `Heavy`, `Maximum HEALTH`, `myMaxHealth/20`, `Performance`, `Restore`
