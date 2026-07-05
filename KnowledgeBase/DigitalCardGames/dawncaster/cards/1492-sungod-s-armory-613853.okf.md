---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 613853
  name: "Sungod's Armory"
  ordinal: 1492
  slug: "sungod-s-armory"
  category: "Action"
  type: "Divine"
  rarity: "Legendary"
  expansion: "Eclypse"
  color: "Red"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 3
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Basic Attacks"
  - "If HOLY"
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
    url: "https://blightbane.io/card/Sungod%27s_Armory"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Sungod's Armory

## Card identity

- **Ordinal:** 1492 of 1692 generated cards
- **Source card id:** `613853`
- **Category:** Action
- **Type:** Divine
- **Rarity:** Legendary
- **Expansion:** Eclypse
- **Color:** Red
- **Cost summary:** neutral=3

## Source-backed facts

- Claim: `Sungod's Armory` appears in the Neurrone Dawncaster SQLite card table with id `613853`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Draw all Basic Attacks from your deck and discard pile. If HOLY was spent, make them all free.

## Raw rules HTML

```html
Draw all Basic Attacks from your deck and discard pile. If HOLY was spent, make them all free.
```

## Observed keyword / token leads

`Basic Attacks`, `If HOLY`
