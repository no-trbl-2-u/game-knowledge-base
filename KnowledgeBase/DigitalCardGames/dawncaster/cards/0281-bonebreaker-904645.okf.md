---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 904645
  name: "Bonebreaker"
  ordinal: 281
  slug: "bonebreaker"
  category: "Action"
  type: "Melee"
  rarity: "Monster"
  expansion: "None"
  color: "Monster"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 2
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Lifedrain"
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
    url: "https://blightbane.io/card/Bonebreaker"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Bonebreaker

## Card identity

- **Ordinal:** 281 of 1692 generated cards
- **Source card id:** `904645`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Monster
- **Expansion:** None
- **Color:** Monster
- **Cost summary:** neutral=2

## Source-backed facts

- Claim: `Bonebreaker` appears in the Neurrone Dawncaster SQLite card table with id `904645`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:5] damage twice. Lifedrain.

## Raw rules HTML

```html
Deal [damage:5] damage twice. Lifedrain.
```

## Observed keyword / token leads

`Lifedrain`
