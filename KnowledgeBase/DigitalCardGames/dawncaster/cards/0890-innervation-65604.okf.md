---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 65604
  name: "Innervation"
  ordinal: 890
  slug: "innervation"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Core Extended"
  color: "Orange"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 1
    intstr: 0
    blood: 0
observed_terms:
  - "Chain"
  - "Channel"
  - "Conjure"
  - "Critical Hit"
  - "Lightning"
  - "my(status)Chain"
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
    url: "https://blightbane.io/card/Innervation"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Innervation

## Card identity

- **Ordinal:** 890 of 1692 generated cards
- **Source card id:** `65604`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Core Extended
- **Color:** Orange
- **Cost summary:** dexstr=1

## Source-backed facts

- Claim: `Innervation` appears in the Neurrone Dawncaster SQLite card table with id `65604`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Conjure a Lightning card. Channel: Lightning actions gain a 10% chance to Critical Hit for each stack of Chain ([[my(status)Chain]]). Chain.

## Raw rules HTML

```html
Conjure a Lightning card. Channel: Lightning actions gain a 10% chance to Critical Hit for each stack of Chain ([[my(status)Chain]]). Chain.
```

## Observed keyword / token leads

`Chain`, `Channel`, `Conjure`, `Critical Hit`, `Lightning`, `my(status)Chain`
