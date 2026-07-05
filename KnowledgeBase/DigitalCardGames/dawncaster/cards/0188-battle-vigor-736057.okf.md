---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 736057
  name: "Battle Vigor"
  ordinal: 188
  slug: "battle-vigor"
  category: "Enchantment"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Core"
  color: "Red"
  cost:
    dex: 0
    int: 0
    str: 1
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Take"
  - "Turn"
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
    url: "https://blightbane.io/card/Battle_Vigor"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Battle Vigor

## Card identity

- **Ordinal:** 188 of 1692 generated cards
- **Source card id:** `736057`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Core
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Battle Vigor` appears in the Neurrone Dawncaster SQLite card table with id `736057`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Start of Turn: Take 1 damage and draw a card. Unique.

## Raw rules HTML

```html
Start of Turn: Take 1 damage and draw a card. Unique.
```

## Observed keyword / token leads

`Take`, `Turn`
