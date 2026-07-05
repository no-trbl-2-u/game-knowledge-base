---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 339291
  name: "Radiant Recovery"
  ordinal: 1164
  slug: "radiant-recovery"
  category: "Action"
  type: "Divine"
  rarity: "Rare"
  expansion: "Core Extended"
  color: "Blue"
  cost:
    dex: 0
    int: 1
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "damageBonus+2"
  - "healingTurn"
  - "HEALTH"
  - "Upgradable"
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
    url: "https://blightbane.io/card/Radiant_Recovery"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Radiant Recovery

## Card identity

- **Ordinal:** 1164 of 1692 generated cards
- **Source card id:** `339291`
- **Category:** Action
- **Type:** Divine
- **Rarity:** Rare
- **Expansion:** Core Extended
- **Color:** Blue
- **Cost summary:** int=1

## Source-backed facts

- Claim: `Radiant Recovery` appears in the Neurrone Dawncaster SQLite card table with id `339291`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain [[damageBonus+2]] HEALTH. 
At the end of this turn, deal damage equal to the HEALTH you've gained ([[healingTurn]]).  Upgradable.

## Raw rules HTML

```html
Gain [[damageBonus+2]] HEALTH. 
At the end of this turn, deal damage equal to the HEALTH you've gained ([[healingTurn]]).  Upgradable.
```

## Observed keyword / token leads

`damageBonus+2`, `healingTurn`, `HEALTH`, `Upgradable`
