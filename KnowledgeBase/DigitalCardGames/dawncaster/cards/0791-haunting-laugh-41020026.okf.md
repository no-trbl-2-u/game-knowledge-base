---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 41020026
  name: "Haunting Laugh"
  ordinal: 791
  slug: "haunting-laugh"
  category: "Action"
  type: "Corruption"
  rarity: "Common"
  expansion: "Core Extended"
  color: "Purple"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 1
  blood: 0
observed_terms:
  - "Corruption"
  - "corruptionsInHand"
  - "Fear"
  - "Inflict"
  - "Repeat"
  - "Swap"
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
    url: "https://blightbane.io/card/Haunting_Laugh"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Haunting Laugh

## Card identity

- **Ordinal:** 791 of 1692 generated cards
- **Source card id:** `41020026`
- **Category:** Action
- **Type:** Corruption
- **Rarity:** Common
- **Expansion:** Core Extended
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Haunting Laugh` appears in the Neurrone Dawncaster SQLite card table with id `41020026`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Inflict 10 Fear.
Repeat for each Corruption in hand ([[corruptionsInHand]]). Swap.

## Raw rules HTML

```html
Inflict 10 Fear.<br>Repeat for each Corruption in hand ([[corruptionsInHand]]). Swap.
```

## Observed keyword / token leads

`Corruption`, `corruptionsInHand`, `Fear`, `Inflict`, `Repeat`, `Swap`
