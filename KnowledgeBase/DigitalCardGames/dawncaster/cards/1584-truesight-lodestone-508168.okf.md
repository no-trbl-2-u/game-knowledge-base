---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 508168
  name: "Truesight Lodestone"
  ordinal: 1584
  slug: "truesight-lodestone"
  category: "Artifact"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Infinitum"
  color: "Aqua"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 3
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "damageBonus"
  - "Unplayable"
  - "Upgrade"
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
    url: "https://blightbane.io/card/Truesight_Lodestone"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Truesight Lodestone

## Card identity

- **Ordinal:** 1584 of 1692 generated cards
- **Source card id:** `508168`
- **Category:** Artifact
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Infinitum
- **Color:** Aqua
- **Cost summary:** neutral=3

## Source-backed facts

- Claim: `Truesight Lodestone` appears in the Neurrone Dawncaster SQLite card table with id `508168`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Upgrade all card rewards by |#2+[[damageBonus]]#| while this is in your deck. Upgradeable. Unplayable.

## Raw rules HTML

```html
Upgrade all card rewards by |#2+[[damageBonus]]#| while this is in your deck. Upgradeable. Unplayable.
```

## Observed keyword / token leads

`damageBonus`, `Unplayable`, `Upgrade`, `Upgradeable`
