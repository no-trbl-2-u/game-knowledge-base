---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 531624
  name: "Snake Familiar"
  ordinal: 1382
  slug: "snake-familiar"
  category: "Equipment"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Eclypse"
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
  - "Activate"
  - "Affliction"
  - "Corrupted"
  - "Durability"
  - "Gain HEALTH"
  - "otherAfflictions"
  - "Poison"
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
    url: "https://blightbane.io/card/Snake_Familiar"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Snake Familiar

## Card identity

- **Ordinal:** 1382 of 1692 generated cards
- **Source card id:** `531624`
- **Category:** Equipment
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Eclypse
- **Color:** Brown
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Snake Familiar` appears in the Neurrone Dawncaster SQLite card table with id `531624`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Activate to inflict 3 Poison. Corrupted: Gain HEALTH for each Affliction on your foe ([[otherAfflictions]]). Durability (3/3). Unique.

## Raw rules HTML

```html
Activate to inflict 3 Poison. Corrupted: Gain HEALTH for each Affliction on your foe ([[otherAfflictions]]). Durability (3/3). Unique.
```

## Observed keyword / token leads

`Activate`, `Affliction`, `Corrupted`, `Durability`, `Gain HEALTH`, `otherAfflictions`, `Poison`
