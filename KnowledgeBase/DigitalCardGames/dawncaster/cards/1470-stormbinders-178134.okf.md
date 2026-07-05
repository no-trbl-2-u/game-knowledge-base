---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 178134
  name: "Stormbinders"
  ordinal: 1470
  slug: "stormbinders"
  category: "Basic Attack"
  type: "Magic"
  rarity: "Common"
  expansion: "None"
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
  - "Chain"
  - "Swap"
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
    url: "https://blightbane.io/card/Stormbinders"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Stormbinders

## Card identity

- **Ordinal:** 1470 of 1692 generated cards
- **Source card id:** `178134`
- **Category:** Basic Attack
- **Type:** Magic
- **Rarity:** Common
- **Expansion:** None
- **Color:** Brown
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Stormbinders` appears in the Neurrone Dawncaster SQLite card table with id `178134`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:1] to [damage:10] damage.
Swap when drawn. Chain.

## Raw rules HTML

```html
Deal [damage:1] to [damage:10] damage.<br>Swap when drawn. Chain.
```

## Observed keyword / token leads

`Chain`, `Swap`
