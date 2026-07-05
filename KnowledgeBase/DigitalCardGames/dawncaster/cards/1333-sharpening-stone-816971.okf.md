---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 816971
  name: "Sharpening Stone"
  ordinal: 1333
  slug: "sharpening-stone"
  category: "Item"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Core Extended"
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
  - "Grounded"
  - "One Use"
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
    url: "https://blightbane.io/card/Sharpening_Stone"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Sharpening Stone

## Card identity

- **Ordinal:** 1333 of 1692 generated cards
- **Source card id:** `816971`
- **Category:** Item
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Core Extended
- **Color:** Brown
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Sharpening Stone` appears in the Neurrone Dawncaster SQLite card table with id `816971`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

One Use: Upgrade the next Basic Attack you play by 2. Grounded.

## Raw rules HTML

```html
One Use: Upgrade the next Basic Attack you play by 2. Grounded.
```

## Observed keyword / token leads

`Basic Attack`, `Grounded`, `One Use`, `Upgrade`
