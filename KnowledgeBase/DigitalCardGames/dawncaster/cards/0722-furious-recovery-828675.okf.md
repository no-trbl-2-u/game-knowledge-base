---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 828675
  name: "Furious Recovery"
  ordinal: 722
  slug: "furious-recovery"
  category: "Action"
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
  - "damageBonus"
  - "Fury"
  - "Rally"
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
    url: "https://blightbane.io/card/Furious_Recovery"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Furious Recovery

## Card identity

- **Ordinal:** 722 of 1692 generated cards
- **Source card id:** `828675`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Core
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Furious Recovery` appears in the Neurrone Dawncaster SQLite card table with id `828675`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain |#[[damageBonus]]+1#| Rally and shuffle up to |#[[damageBonus]]+1#| Fury card(s) from your discard pile into your deck.
Upgradeable.

## Raw rules HTML

```html
Gain |#[[damageBonus]]+1#| Rally and shuffle up to |#[[damageBonus]]+1#| Fury card(s) from your discard pile into your deck.<br>Upgradeable.
```

## Observed keyword / token leads

`damageBonus`, `Fury`, `Rally`, `Upgradeable`
