---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 638211
  name: "Forged in Fire"
  ordinal: 695
  slug: "forged-in-fire"
  category: "Action"
  type: "Divine"
  rarity: "Legendary"
  expansion: "Eclypse"
  color: "Gold"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 1
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Battlespear"
  - "Create"
  - "healingTurn"
  - "HEALTH"
  - "Untempered"
  - "Upgrade"
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
    url: "https://blightbane.io/card/Forged_in_Fire"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Forged in Fire

## Card identity

- **Ordinal:** 695 of 1692 generated cards
- **Source card id:** `638211`
- **Category:** Action
- **Type:** Divine
- **Rarity:** Legendary
- **Expansion:** Eclypse
- **Color:** Gold
- **Cost summary:** holy=1

## Source-backed facts

- Claim: `Forged in Fire` appears in the Neurrone Dawncaster SQLite card table with id `638211`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Create a Battlespear. Upgrade all Untempered cards for each HEALTH you gained this turn ([[healingTurn]]).

## Raw rules HTML

```html
Create a Battlespear. Upgrade all Untempered cards for each HEALTH you gained this turn ([[healingTurn]]).
```

## Observed keyword / token leads

`Battlespear`, `Create`, `healingTurn`, `HEALTH`, `Untempered`, `Upgrade`
