---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 466360
  name: "Passing of Time"
  ordinal: 1073
  slug: "passing-of-time"
  category: "Action"
  type: "Utility"
  rarity: "Legendary"
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
  - "Conjure"
  - "Foretell"
  - "foretell+3"
  - "Memorized"
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
    url: "https://blightbane.io/card/Passing_of_Time"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Passing of Time

## Card identity

- **Ordinal:** 1073 of 1692 generated cards
- **Source card id:** `466360`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Eclypse
- **Color:** Aqua
- **Cost summary:** dexint=1

## Source-backed facts

- Claim: `Passing of Time` appears in the Neurrone Dawncaster SQLite card table with id `466360`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Foretell [[foretell+3]].
Conjure a free copy of any Memorized card revealed this way.

## Raw rules HTML

```html
Foretell [[foretell+3]].<br>Conjure a free copy of any Memorized card revealed this way.
```

## Observed keyword / token leads

`Conjure`, `Foretell`, `foretell+3`, `Memorized`
