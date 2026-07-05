---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 714376
  name: "Battlespear D"
  ordinal: 196
  slug: "battlespear-d"
  category: "Basic Attack"
  type: "Divine"
  rarity: "Rare"
  expansion: "None"
  color: "Red"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 1
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Add"
  - "damageTakenLastTurn"
  - "Untempered"
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
    url: "https://blightbane.io/card/Battlespear_D"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Battlespear D

## Card identity

- **Ordinal:** 196 of 1692 generated cards
- **Source card id:** `714376`
- **Category:** Basic Attack
- **Type:** Divine
- **Rarity:** Rare
- **Expansion:** None
- **Color:** Red
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Battlespear D` appears in the Neurrone Dawncaster SQLite card table with id `714376`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:[[damageTakenLastTurn]]+5] damage. 
Add any damage you took since your last turn ([[damageTakenLastTurn]]). Untempered.

## Raw rules HTML

```html
Deal [damage:[[damageTakenLastTurn]]+5] damage. <br>Add any damage you took since your last turn ([[damageTakenLastTurn]]). Untempered.
```

## Observed keyword / token leads

`Add`, `damageTakenLastTurn`, `Untempered`
