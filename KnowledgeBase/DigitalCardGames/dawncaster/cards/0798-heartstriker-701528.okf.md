---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 701528
  name: "Heartstriker"
  ordinal: 798
  slug: "heartstriker"
  category: "Action"
  type: "Melee"
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
    dexstr: 0
    intstr: 0
    blood: 3
observed_terms:
  - "Critical Hit"
  - "Darkness"
  - "Piercing"
  - "While"
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
    url: "https://blightbane.io/card/Heartstriker"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Heartstriker

## Card identity

- **Ordinal:** 798 of 1692 generated cards
- **Source card id:** `701528`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Uncommon
- **Expansion:** Catalyst
- **Color:** Orange
- **Cost summary:** blood=3

## Source-backed facts

- Claim: `Heartstriker` appears in the Neurrone Dawncaster SQLite card table with id `701528`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:5] damage. 
While in Darkness, this card's damage is Piercing and inflicts a Critical Hit.

## Raw rules HTML

```html
Deal [damage:5] damage. <br>While in Darkness, this card's damage is Piercing and inflicts a Critical Hit.
```

## Observed keyword / token leads

`Critical Hit`, `Darkness`, `Piercing`, `While`
