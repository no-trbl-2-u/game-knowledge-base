---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 813243
  name: "Ancient Whetstone"
  ordinal: 56
  slug: "ancient-whetstone"
  category: "Artifact"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Infinitum"
  color: "Brown"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 1
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Basic Attack"
  - "damageBonus"
  - "Grounded"
  - "Heavy"
  - "On Draw"
  - "One Use"
  - "Slow"
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
    url: "https://blightbane.io/card/Ancient_Whetstone"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Ancient Whetstone

## Card identity

- **Ordinal:** 56 of 1692 generated cards
- **Source card id:** `813243`
- **Category:** Artifact
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Infinitum
- **Color:** Brown
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Ancient Whetstone` appears in the Neurrone Dawncaster SQLite card table with id `813243`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

On Draw: Gain [[damageBonus]] Slow
and upgrade this by 1. 
One Use: The next Basic Attack you play is upgraded by [[damageBonus]]. Unique. Grounded. Heavy.

## Raw rules HTML

```html
On Draw: Gain [[damageBonus]] Slow<br>and upgrade this by 1. <br>One Use: The next Basic Attack you play is upgraded by [[damageBonus]]. Unique. Grounded. Heavy.
```

## Observed keyword / token leads

`Basic Attack`, `damageBonus`, `Grounded`, `Heavy`, `On Draw`, `One Use`, `Slow`
