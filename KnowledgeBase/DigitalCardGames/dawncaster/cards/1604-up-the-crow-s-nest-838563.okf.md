---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 838563
  name: "Up the Crow's Nest"
  ordinal: 1604
  slug: "up-the-crow-s-nest"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Eclypse"
  color: "Green"
  cost:
  dex: 1
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
  - "damageBonus+1"
  - "Reset"
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
    url: "https://blightbane.io/card/Up_the_Crow%27s_Nest"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Up the Crow's Nest

## Card identity

- **Ordinal:** 1604 of 1692 generated cards
- **Source card id:** `838563`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Eclypse
- **Color:** Green
- **Cost summary:** dex=1

## Source-backed facts

- Claim: `Up the Crow's Nest` appears in the Neurrone Dawncaster SQLite card table with id `838563`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Reset your Ambush.
Your next ranged attack deals |#[[damageBonus+1]]*3#| more damage. Upgradeable.

## Raw rules HTML

```html
Reset your Ambush.<br>Your next ranged attack deals |#[[damageBonus+1]]*3#| more damage. Upgradeable.
```

## Observed keyword / token leads

`Ambush`, `damageBonus+1`, `Reset`, `Upgradeable`
