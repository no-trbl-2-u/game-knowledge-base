---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 639599
  name: "Duelist Contract"
  ordinal: 571
  slug: "duelist-contract"
  category: "Enchantment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "None"
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
    blood: 0
observed_terms:
  - "Execute"
  - "Upgrade"
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
    url: "https://blightbane.io/card/Duelist_Contract"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Duelist Contract

## Card identity

- **Ordinal:** 571 of 1692 generated cards
- **Source card id:** `639599`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** None
- **Color:** Orange
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Duelist Contract` appears in the Neurrone Dawncaster SQLite card table with id `639599`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Execute: Upgrade all card rewards by by 5 if you took no damage this combat. Unique.

## Raw rules HTML

```html
Execute: Upgrade all card rewards by by 5 if you took no damage this combat. Unique.
```

## Observed keyword / token leads

`Execute`, `Upgrade`
