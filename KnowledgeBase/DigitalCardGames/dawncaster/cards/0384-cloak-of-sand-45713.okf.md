---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 45713
  name: "Cloak of Sand"
  ordinal: 384
  slug: "cloak-of-sand"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Eclypse"
  color: "Aqua"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Ambush"
  - "Gain Swiftness"
  - "Momentum"
  - "Reset"
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
    url: "https://blightbane.io/card/Cloak_of_Sand"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Cloak of Sand

## Card identity

- **Ordinal:** 384 of 1692 generated cards
- **Source card id:** `45713`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Eclypse
- **Color:** Aqua
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Cloak of Sand` appears in the Neurrone Dawncaster SQLite card table with id `45713`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain Swiftness.
Gain 2 Momentum.
Reset your Ambush.

## Raw rules HTML

```html
Gain Swiftness.<br>Gain 2 Momentum.<br>Reset your Ambush.
```

## Observed keyword / token leads

`Ambush`, `Gain Swiftness`, `Momentum`, `Reset`
