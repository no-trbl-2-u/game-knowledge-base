---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 346159
  name: "Abyssal Anchor"
  ordinal: 4
  slug: "abyssal-anchor"
  category: "Enchantment"
  type: "Utility"
  rarity: "Monster"
  expansion: "None"
  color: "Monster"
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
  - "Anger"
  - "HEALTH"
  - "Maximum"
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
    url: "https://blightbane.io/card/Abyssal_Anchor"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Abyssal Anchor

## Card identity

- **Ordinal:** 4 of 1692 generated cards
- **Source card id:** `346159`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Monster
- **Expansion:** None
- **Color:** Monster
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Abyssal Anchor` appears in the Neurrone Dawncaster SQLite card table with id `346159`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Whenever you gain HEALTH over your Maximum, gain an equal amount of Anger. Unique.

## Raw rules HTML

```html
Whenever you gain HEALTH over your Maximum, gain an equal amount of Anger. Unique.
```

## Observed keyword / token leads

`Anger`, `HEALTH`, `Maximum`
