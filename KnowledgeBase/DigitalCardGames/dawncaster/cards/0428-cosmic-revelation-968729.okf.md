---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 968729
  name: "Cosmic Revelation"
  ordinal: 428
  slug: "cosmic-revelation"
  category: "Action"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Infinitum"
  color: "Aqua"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 3
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Focus"
  - "Foretold"
  - "permaValue+3"
  - "Revelation"
  - "tempValue"
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
    url: "https://blightbane.io/card/Cosmic_Revelation"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Cosmic Revelation

## Card identity

- **Ordinal:** 428 of 1692 generated cards
- **Source card id:** `968729`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Infinitum
- **Color:** Aqua
- **Cost summary:** dexint=3

## Source-backed facts

- Claim: `Cosmic Revelation` appears in the Neurrone Dawncaster SQLite card table with id `968729`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain 3 Focus.
When this was Foretold ([[tempValue]]/[[permaValue+3]]) times, delve a Revelation, then permanently increase this requirement by 1. Unique.

## Raw rules HTML

```html
Gain 3 Focus.<br>When this was Foretold ([[tempValue]]/[[permaValue+3]]) times, delve a Revelation, then permanently increase this requirement by 1. Unique.
```

## Observed keyword / token leads

`Focus`, `Foretold`, `permaValue+3`, `Revelation`, `tempValue`
