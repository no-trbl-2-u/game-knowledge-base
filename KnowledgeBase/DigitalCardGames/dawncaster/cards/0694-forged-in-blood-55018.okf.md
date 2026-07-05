---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 55018
  name: "Forged in Blood"
  ordinal: 694
  slug: "forged-in-blood"
  category: "Action"
  type: "Divine"
  rarity: "Legendary"
  expansion: "Eclypse"
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
  - "Battlespear"
  - "Create"
  - "damageTakenLastTurn"
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
    url: "https://blightbane.io/card/Forged_in_Blood"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Forged in Blood

## Card identity

- **Ordinal:** 694 of 1692 generated cards
- **Source card id:** `55018`
- **Category:** Action
- **Type:** Divine
- **Rarity:** Legendary
- **Expansion:** Eclypse
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Forged in Blood` appears in the Neurrone Dawncaster SQLite card table with id `55018`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Create a Battlespear.
Upgrade all Untempered cards for each damage you took since last round ([[damageTakenLastTurn]]).

## Raw rules HTML

```html
Create a Battlespear.<br>Upgrade all Untempered cards for each damage you took since last round ([[damageTakenLastTurn]]).
```

## Observed keyword / token leads

`Battlespear`, `Create`, `damageTakenLastTurn`, `Untempered`, `Upgrade`
