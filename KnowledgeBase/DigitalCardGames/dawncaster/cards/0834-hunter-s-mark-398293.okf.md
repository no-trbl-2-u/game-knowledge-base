---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 398293
  name: "Hunter's Mark"
  ordinal: 834
  slug: "hunter-s-mark"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Core"
  color: "Orange"
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
    url: "https://blightbane.io/card/Hunter%27s_Mark"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Hunter's Mark

## Card identity

- **Ordinal:** 834 of 1692 generated cards
- **Source card id:** `398293`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Core
- **Color:** Orange
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Hunter's Mark` appears in the Neurrone Dawncaster SQLite card table with id `398293`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

If the enemy dies this turn, gain 5 HEALTH and draw 2 additional cards at the start of next combat. Unique.

## Raw rules HTML

```html
If the enemy dies this turn, gain 5 HEALTH and draw 2 additional cards at the start of next combat. Unique.
```

## Observed keyword / token leads

`HEALTH`
