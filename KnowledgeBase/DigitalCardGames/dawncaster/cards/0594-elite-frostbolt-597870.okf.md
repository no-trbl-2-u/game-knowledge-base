---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 597870
  name: "Elite Frostbolt"
  ordinal: 594
  slug: "elite-frostbolt"
  category: "Action"
  type: "Magic"
  rarity: "Legendary"
  expansion: "Core"
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
  - "Inflict Frozen"
  - "Lifedrain"
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
    url: "https://blightbane.io/card/Elite_Frostbolt"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Elite Frostbolt

## Card identity

- **Ordinal:** 594 of 1692 generated cards
- **Source card id:** `597870`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Legendary
- **Expansion:** Core
- **Color:** Blue
- **Cost summary:** int=1

## Source-backed facts

- Claim: `Elite Frostbolt` appears in the Neurrone Dawncaster SQLite card table with id `597870`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:4] damage.
Inflict Frozen equal to 
the damage dealt. Unique. Lifedrain.

## Raw rules HTML

```html
Deal [damage:4] damage.<br>Inflict Frozen equal to <br>the damage dealt. Unique. Lifedrain.
```

## Observed keyword / token leads

`Inflict Frozen`, `Lifedrain`
