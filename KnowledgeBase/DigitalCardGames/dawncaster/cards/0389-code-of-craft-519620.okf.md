---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 519620
  name: "Code of Craft"
  ordinal: 389
  slug: "code-of-craft"
  category: "Code"
  type: "Utility"
  rarity: "Rare"
  expansion: "Synthesis"
  color: "Red"
  cost:
  dex: 0
  int: 0
  str: 3
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Adapt"
  - "Adaptation"
  - "Code"
  - "Grounded"
  - "totalAdaptationSlots"
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
    url: "https://blightbane.io/card/Code_of_Craft"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Code of Craft

## Card identity

- **Ordinal:** 389 of 1692 generated cards
- **Source card id:** `519620`
- **Category:** Code
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Synthesis
- **Color:** Red
- **Cost summary:** str=3

## Source-backed facts

- Claim: `Code of Craft` appears in the Neurrone Dawncaster SQLite card table with id `519620`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Adapt any card you draw.
Code: your deck has 30 or more Adaptation slots across all cards ([[totalAdaptationSlots]]/30). Unique. Grounded.

## Raw rules HTML

```html
Adapt any card you draw.
Code: your deck has 30 or more Adaptation slots across all cards ([[totalAdaptationSlots]]/30). Unique. Grounded.
```

## Observed keyword / token leads

`Adapt`, `Adaptation`, `Code`, `Grounded`, `totalAdaptationSlots`
