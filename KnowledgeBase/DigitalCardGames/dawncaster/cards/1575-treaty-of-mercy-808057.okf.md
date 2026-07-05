---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 808057
  name: "Treaty of Mercy"
  ordinal: 1575
  slug: "treaty-of-mercy"
  category: "Action"
  type: "Utility"
  rarity: "Rare"
  expansion: "None"
  color: "Gold"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 3
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Both"
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
    url: "https://blightbane.io/card/Treaty_of_Mercy"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Treaty of Mercy

## Card identity

- **Ordinal:** 1575 of 1692 generated cards
- **Source card id:** `808057`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** None
- **Color:** Gold
- **Cost summary:** holy=3

## Source-backed facts

- Claim: `Treaty of Mercy` appears in the Neurrone Dawncaster SQLite card table with id `808057`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Both combatants 
gain 5 HEALTH.

## Raw rules HTML

```html
Both combatants <br>gain 5 HEALTH.
```

## Observed keyword / token leads

`Both`, `HEALTH`
