---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 507703
  name: "Aethershock"
  ordinal: 28
  slug: "aethershock"
  category: "Action"
  type: "Magic"
  rarity: "Uncommon"
  expansion: "Catalyst"
  color: "Orange"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 3
    intstr: 0
    blood: 0
observed_terms:
  - "After"
  - "Chain"
  - "Lightning"
  - "tempValue+1"
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
    url: "https://blightbane.io/card/Aethershock"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Aethershock

## Card identity

- **Ordinal:** 28 of 1692 generated cards
- **Source card id:** `507703`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Uncommon
- **Expansion:** Catalyst
- **Color:** Orange
- **Cost summary:** dexstr=3

## Source-backed facts

- Claim: `Aethershock` appears in the Neurrone Dawncaster SQLite card table with id `507703`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:1] to [damage:[[tempValue+1]]] damage. 
After you play a Lightning card, lower this cost by 1 and increase the damage range by 10. Chain.

## Raw rules HTML

```html
Deal [damage:1] to [damage:[[tempValue+1]]] damage. <br>After you play a Lightning card, lower this cost by 1 and increase the damage range by 10. Chain.
```

## Observed keyword / token leads

`After`, `Chain`, `Lightning`, `tempValue+1`
