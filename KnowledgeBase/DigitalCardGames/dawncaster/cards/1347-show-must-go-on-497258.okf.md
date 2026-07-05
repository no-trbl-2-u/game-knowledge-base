---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 497258
  name: "Show must go on"
  ordinal: 1347
  slug: "show-must-go-on"
  category: "Enchantment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Metamorphosis"
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
  - "HEALTH"
  - "Perform"
  - "Performance"
  - "performanceStacks"
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
    url: "https://blightbane.io/card/Show_must_go_on"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Show must go on

## Card identity

- **Ordinal:** 1347 of 1692 generated cards
- **Source card id:** `497258`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Metamorphosis
- **Color:** Green
- **Cost summary:** dex=1

## Source-backed facts

- Claim: `Show must go on` appears in the Neurrone Dawncaster SQLite card table with id `497258`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, Perform 1 at the beginning of the round. Whenever you Perform, gain HEALTH equal to your Performance ([[performanceStacks]]). Unique.

## Raw rules HTML

```html
This combat, Perform 1 at the beginning of the round. Whenever you Perform, gain HEALTH equal to your Performance ([[performanceStacks]]). Unique.
```

## Observed keyword / token leads

`HEALTH`, `Perform`, `Performance`, `performanceStacks`
