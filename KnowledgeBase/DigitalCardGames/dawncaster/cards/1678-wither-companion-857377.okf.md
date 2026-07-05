---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 857377
  name: "Wither (Companion)"
  ordinal: 1678
  slug: "wither-companion"
  category: "Action"
  type: "Magic"
  rarity: "Rare"
  expansion: "Synthesis"
  color: "Orange"
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
  - "Advantage"
  - "Affliction"
  - "companionlevel"
  - "Decay"
  - "Gain HEALTH"
  - "Inflict"
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
    url: "https://blightbane.io/card/Wither_%28Companion%29"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Wither (Companion)

## Card identity

- **Ordinal:** 1678 of 1692 generated cards
- **Source card id:** `857377`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Rare
- **Expansion:** Synthesis
- **Color:** Orange
- **Cost summary:** neutral=2

## Source-backed facts

- Claim: `Wither (Companion)` appears in the Neurrone Dawncaster SQLite card table with id `857377`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Inflict [[companionlevel]] Decay.
Advantage: Gain HEALTH equal to your foe's highest Affliction.

## Raw rules HTML

```html
Inflict [[companionlevel]] Decay.
Advantage: Gain HEALTH equal to your foe's highest Affliction.
```

## Observed keyword / token leads

`Advantage`, `Affliction`, `companionlevel`, `Decay`, `Gain HEALTH`, `Inflict`
