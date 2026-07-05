---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 11494
  name: "Eldritch Flame"
  ordinal: 585
  slug: "eldritch-flame"
  category: "Action"
  type: "Magic"
  rarity: "Common"
  expansion: "Metamorphosis"
  color: "Blue"
  cost:
    dex: 0
    int: 3
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Add"
  - "corruptionCards"
  - "Corruptions"
  - "Forbidden Fruit"
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
    url: "https://blightbane.io/card/Eldritch_Flame"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Eldritch Flame

## Card identity

- **Ordinal:** 585 of 1692 generated cards
- **Source card id:** `11494`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Common
- **Expansion:** Metamorphosis
- **Color:** Blue
- **Cost summary:** int=3

## Source-backed facts

- Claim: `Eldritch Flame` appears in the Neurrone Dawncaster SQLite card table with id `11494`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal 2 damage for each of your Corruptions ([[corruptionCards]]).
Add a Forbidden Fruit to your discard pile.

## Raw rules HTML

```html
Deal 2 damage for each of your Corruptions ([[corruptionCards]]).<br>Add a Forbidden Fruit to your discard pile.
```

## Observed keyword / token leads

`Add`, `corruptionCards`, `Corruptions`, `Forbidden Fruit`
