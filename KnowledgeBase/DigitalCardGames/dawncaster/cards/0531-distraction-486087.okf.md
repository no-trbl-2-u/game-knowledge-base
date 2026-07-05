---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 486087
  name: "Distraction"
  ordinal: 531
  slug: "distraction"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Metaprogress"
  color: "Green"
  cost:
  dex: 1
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Add"
  - "Ambush"
  - "Corruption"
  - "enemyCorruptions"
  - "Glimmer"
  - "HEALTH"
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
    url: "https://blightbane.io/card/Distraction"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Distraction

## Card identity

- **Ordinal:** 531 of 1692 generated cards
- **Source card id:** `486087`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Metaprogress
- **Color:** Green
- **Cost summary:** dex=1

## Source-backed facts

- Claim: `Distraction` appears in the Neurrone Dawncaster SQLite card table with id `486087`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Add a Glimmer to the foe's deck. Ambush: Gain 2 HEALTH for each Corruption in the foe's deck ([[enemyCorruptions]]).

## Raw rules HTML

```html
Add a Glimmer to the foe's deck. Ambush: Gain 2 HEALTH for each Corruption in the foe's deck ([[enemyCorruptions]]).
```

## Observed keyword / token leads

`Add`, `Ambush`, `Corruption`, `enemyCorruptions`, `Glimmer`, `HEALTH`
