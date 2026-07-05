---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 93423
  name: "Steady Ground"
  ordinal: 1443
  slug: "steady-ground"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Metamorphosis"
  color: "Red"
  cost:
    dex: 0
    int: 0
    str: 1
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Armor"
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
    url: "https://blightbane.io/card/Steady_Ground"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Steady Ground

## Card identity

- **Ordinal:** 1443 of 1692 generated cards
- **Source card id:** `93423`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Metamorphosis
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Steady Ground` appears in the Neurrone Dawncaster SQLite card table with id `93423`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain 3 Armor.
Your next action this turn inflicts a Critical Hit

## Raw rules HTML

```html
Gain 3 Armor.<br>Your next action this turn inflicts a Critical Hit
```

## Observed keyword / token leads

`Armor`, `Critical Hit`
