---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 7263
  name: "Sharp Wires"
  ordinal: 1332
  slug: "sharp-wires"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Infinitum"
  color: "Green"
  cost:
    dex: 2
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Add"
  - "damageBonus"
  - "Snare"
  - "Snares"
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
    url: "https://blightbane.io/card/Sharp_Wires"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Sharp Wires

## Card identity

- **Ordinal:** 1332 of 1692 generated cards
- **Source card id:** `7263`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Infinitum
- **Color:** Green
- **Cost summary:** dex=2

## Source-backed facts

- Claim: `Sharp Wires` appears in the Neurrone Dawncaster SQLite card table with id `7263`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Add a Snare to the foe's deck, then upgrade all Snares equal to upgrades on this card ([[damageBonus]]).

## Raw rules HTML

```html
Add a Snare to the foe's deck, then upgrade all Snares equal to upgrades on this card ([[damageBonus]]).
```

## Observed keyword / token leads

`Add`, `damageBonus`, `Snare`, `Snares`
