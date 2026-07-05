---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 661847
  name: "Bathe in Blood"
  ordinal: 177
  slug: "bathe-in-blood"
  category: "Action"
  type: "Divine"
  rarity: "Monster"
  expansion: "None"
  color: "Monster"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Bleeding"
  - "Inflict"
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
    url: "https://blightbane.io/card/Bathe_in_Blood"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Bathe in Blood

## Card identity

- **Ordinal:** 177 of 1692 generated cards
- **Source card id:** `661847`
- **Category:** Action
- **Type:** Divine
- **Rarity:** Monster
- **Expansion:** None
- **Color:** Monster
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Bathe in Blood` appears in the Neurrone Dawncaster SQLite card table with id `661847`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Inflict 3 Bleeding 
Gain 3 Bleeding.

## Raw rules HTML

```html
Inflict 3 Bleeding <br>Gain 3 Bleeding.
```

## Observed keyword / token leads

`Bleeding`, `Inflict`
