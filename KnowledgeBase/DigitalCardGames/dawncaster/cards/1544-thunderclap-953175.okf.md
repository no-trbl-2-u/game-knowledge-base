---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 953175
  name: "Thunderclap"
  ordinal: 1544
  slug: "thunderclap"
  category: "Action"
  type: "Magic"
  rarity: "Uncommon"
  expansion: "Metamorphosis"
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
  - "Cascade"
  - "Chain"
  - "Critical Hit"
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
    url: "https://blightbane.io/card/Thunderclap"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Thunderclap

## Card identity

- **Ordinal:** 1544 of 1692 generated cards
- **Source card id:** `953175`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Uncommon
- **Expansion:** Metamorphosis
- **Color:** Orange
- **Cost summary:** dexstr=1

## Source-backed facts

- Claim: `Thunderclap` appears in the Neurrone Dawncaster SQLite card table with id `953175`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:1] to [damage:6] damage.
Cascade: Your next action this turn inflicts a Critical Hit. Chain.

## Raw rules HTML

```html
Deal [damage:1] to [damage:6] damage.<br>Cascade: Your next action this turn inflicts a Critical Hit. Chain.
```

## Observed keyword / token leads

`Cascade`, `Chain`, `Critical Hit`
