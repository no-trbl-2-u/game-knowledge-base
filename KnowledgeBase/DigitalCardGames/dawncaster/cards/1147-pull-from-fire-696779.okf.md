---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 696779
  name: "Pull from Fire"
  ordinal: 1147
  slug: "pull-from-fire"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Synthesis"
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
  - "Adaptation"
  - "Melee"
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
    url: "https://blightbane.io/card/Pull_from_Fire"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Pull from Fire

## Card identity

- **Ordinal:** 1147 of 1692 generated cards
- **Source card id:** `696779`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Synthesis
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Pull from Fire` appears in the Neurrone Dawncaster SQLite card table with id `696779`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Draw a card.
If it's a Melee action, add an Adaptation slot.

## Raw rules HTML

```html
Draw a card.
If it's a Melee action, add an Adaptation slot.
```

## Observed keyword / token leads

`Adaptation`, `Melee`
