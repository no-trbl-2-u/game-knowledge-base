---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 448820
  name: "Pirate's Parley"
  ordinal: 1099
  slug: "pirate-s-parley"
  category: "Action"
  type: "Melee"
  rarity: "Legendary"
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
  - "Booty"
  - "damageDealtThisTurn"
  - "Elite"
  - "Execute"
  - "GOLD"
  - "Inflict Charmed"
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
    url: "https://blightbane.io/card/Pirate%27s_Parley"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Pirate's Parley

## Card identity

- **Ordinal:** 1099 of 1692 generated cards
- **Source card id:** `448820`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Legendary
- **Expansion:** Eclypse
- **Color:** Green
- **Cost summary:** dex=1

## Source-backed facts

- Claim: `Pirate's Parley` appears in the Neurrone Dawncaster SQLite card table with id `448820`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:5] damage.
Inflict Charmed equal to the damage you dealt this turn ([[damageDealtThisTurn]]). Execute: Gain 10 GOLD. If the enemy was Elite, gain a Booty.

## Raw rules HTML

```html
Deal [damage:5] damage.<br>Inflict Charmed equal to the damage you dealt this turn ([[damageDealtThisTurn]]). Execute: Gain 10 GOLD. If the enemy was Elite, gain a Booty.
```

## Observed keyword / token leads

`Booty`, `damageDealtThisTurn`, `Elite`, `Execute`, `GOLD`, `Inflict Charmed`
