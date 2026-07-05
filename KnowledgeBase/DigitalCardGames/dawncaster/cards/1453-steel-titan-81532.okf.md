---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 81532
  name: "Steel Titan"
  ordinal: 1453
  slug: "steel-titan"
  category: "Action"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Synthesis"
  color: "Purple"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 1
    blood: 0
observed_terms:
  - "Armor"
  - "Combat"
  - "damageBonus+10"
  - "Gain Fortified"
  - "Upgradeable"
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
    url: "https://blightbane.io/card/Steel_Titan"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Steel Titan

## Card identity

- **Ordinal:** 1453 of 1692 generated cards
- **Source card id:** `81532`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Synthesis
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Steel Titan` appears in the Neurrone Dawncaster SQLite card table with id `81532`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain Fortified.
Start of Combat: Gain [[damageBonus+10]] Armor. Upgradeable.

## Raw rules HTML

```html
Gain Fortified.
Start of Combat: Gain [[damageBonus+10]] Armor. Upgradeable.
```

## Observed keyword / token leads

`Armor`, `Combat`, `damageBonus+10`, `Gain Fortified`, `Upgradeable`
