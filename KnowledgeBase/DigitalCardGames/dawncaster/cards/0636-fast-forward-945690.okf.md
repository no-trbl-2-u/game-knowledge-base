---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 945690
  name: "Fast Forward"
  ordinal: 636
  slug: "fast-forward"
  category: "Action"
  type: "Magic"
  rarity: "Common"
  expansion: "Infinitum"
  color: "Blue"
  cost:
    dex: 0
    int: 1
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Haste"
  - "Scholar"
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
    url: "https://blightbane.io/card/Fast_Forward"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Fast Forward

## Card identity

- **Ordinal:** 636 of 1692 generated cards
- **Source card id:** `945690`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Common
- **Expansion:** Infinitum
- **Color:** Blue
- **Cost summary:** int=1

## Source-backed facts

- Claim: `Fast Forward` appears in the Neurrone Dawncaster SQLite card table with id `945690`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain 2 Haste or inflict 2 Slow or draw a card.
Scholar: Do all three.

## Raw rules HTML

```html
Gain 2 Haste or inflict 2 Slow or draw a card.<br>Scholar: Do all three.
```

## Observed keyword / token leads

`Haste`, `Scholar`, `Slow`
