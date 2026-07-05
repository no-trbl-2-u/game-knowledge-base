---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 287785
  name: "Shadow Mastery"
  ordinal: 1319
  slug: "shadow-mastery"
  category: "Action"
  type: "Corruption"
  rarity: "Rare"
  expansion: "Catalyst"
  color: "Orange"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 4
observed_terms:
  - "damageBonus"
  - "Darkness"
  - "Increase"
  - "permaValue"
  - "Rebound"
  - "Upgradeable"
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
    url: "https://blightbane.io/card/Shadow_Mastery"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Shadow Mastery

## Card identity

- **Ordinal:** 1319 of 1692 generated cards
- **Source card id:** `287785`
- **Category:** Action
- **Type:** Corruption
- **Rarity:** Rare
- **Expansion:** Catalyst
- **Color:** Orange
- **Cost summary:** blood=4

## Source-backed facts

- Claim: `Shadow Mastery` appears in the Neurrone Dawncaster SQLite card table with id `287785`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Darkness |#10+[[damageBonus]]#|.
Rebound ([[permaValue]]/|#1+[[damageBonus]]#|): Increase this Darkness and Rebound value by one. Upgradeable.

## Raw rules HTML

```html
Darkness |#10+[[damageBonus]]#|.<br>Rebound ([[permaValue]]/|#1+[[damageBonus]]#|): Increase this Darkness and Rebound value by one. Upgradeable.
```

## Observed keyword / token leads

`damageBonus`, `Darkness`, `Increase`, `permaValue`, `Rebound`, `Upgradeable`
