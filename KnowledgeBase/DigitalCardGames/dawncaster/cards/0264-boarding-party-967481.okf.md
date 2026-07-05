---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 967481
  name: "Boarding Party"
  ordinal: 264
  slug: "boarding-party"
  category: "Action"
  type: "Melee"
  rarity: "Uncommon"
  expansion: "Eclypse"
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
  - "Ambush"
  - "DEX"
  - "enemyEnergy"
  - "enemyHand"
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
    url: "https://blightbane.io/card/Boarding_Party"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Boarding Party

## Card identity

- **Ordinal:** 264 of first 500 generated cards
- **Source card id:** `967481`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Uncommon
- **Expansion:** Eclypse
- **Color:** Green
- **Cost summary:** dex=2

## Source-backed facts

- Claim: `Boarding Party` appears in the Neurrone Dawncaster SQLite card table with id `967481`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:4] damage.
Ambush: Draw cards equal to your foe's cards ([[enemyHand]]) and gain DEX equal to their energy ([[enemyEnergy]]).

## Raw rules HTML

```html
Deal [damage:4] damage.<br>Ambush: Draw cards equal to your foe's cards ([[enemyHand]]) and gain DEX equal to their energy ([[enemyEnergy]]).
```

## Observed keyword / token leads

`Ambush`, `DEX`, `enemyEnergy`, `enemyHand`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
