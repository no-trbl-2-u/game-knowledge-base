---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 362272
  name: "Centaur's Truth"
  ordinal: 339
  slug: "centaur-s-truth"
  category: "Path"
  type: "Utility"
  rarity: "Rare"
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
  - "Advance"
  - "After"
  - "Barrier"
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
    url: "https://blightbane.io/card/Centaur%27s_Truth"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Centaur's Truth

## Card identity

- **Ordinal:** 339 of 1692 generated cards
- **Source card id:** `362272`
- **Category:** Path
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Eclypse
- **Color:** Aqua
- **Cost summary:** dexint=1

## Source-backed facts

- Claim: `Centaur's Truth` appears in the Neurrone Dawncaster SQLite card table with id `362272`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

After you draw 3 additional cards in a turn, gain 10 Barrier and Advance. Unique.

## Raw rules HTML

```html
After you draw 3 additional cards in a turn, gain 10 Barrier and Advance. Unique.
```

## Observed keyword / token leads

`Advance`, `After`, `Barrier`
