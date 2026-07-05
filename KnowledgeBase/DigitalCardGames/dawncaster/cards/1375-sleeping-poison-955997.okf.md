---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 955997
  name: "Sleeping Poison"
  ordinal: 1375
  slug: "sleeping-poison"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Infinitum"
  color: "Green"
  cost:
    dex: 1
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Charges"
  - "Inflict"
  - "Jinxed"
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
    url: "https://blightbane.io/card/Sleeping_Poison"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Sleeping Poison

## Card identity

- **Ordinal:** 1375 of 1692 generated cards
- **Source card id:** `955997`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Infinitum
- **Color:** Green
- **Cost summary:** dex=1

## Source-backed facts

- Claim: `Sleeping Poison` appears in the Neurrone Dawncaster SQLite card table with id `955997`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Inflict 1 Jinxed the next 2 times your foe plays a card that did not start in their deck. Charges (2/2).

## Raw rules HTML

```html
Inflict 1 Jinxed the next 2 times your foe plays a card that did not start in their deck. Charges (2/2).
```

## Observed keyword / token leads

`Charges`, `Inflict`, `Jinxed`
