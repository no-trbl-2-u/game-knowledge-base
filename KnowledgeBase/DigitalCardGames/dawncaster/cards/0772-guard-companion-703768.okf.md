---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 703768
  name: "Guard (Companion)"
  ordinal: 772
  slug: "guard-companion"
  category: "Action"
  type: "Utility"
  rarity: "Rare"
  expansion: "Synthesis"
  color: "Orange"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 2
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Advantage"
  - "Armor"
  - "companionlevel*2"
  - "companionlevel/2"
  - "Regenerate"
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
    url: "https://blightbane.io/card/Guard_%28Companion%29"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Guard (Companion)

## Card identity

- **Ordinal:** 772 of 1692 generated cards
- **Source card id:** `703768`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Synthesis
- **Color:** Orange
- **Cost summary:** neutral=2

## Source-backed facts

- Claim: `Guard (Companion)` appears in the Neurrone Dawncaster SQLite card table with id `703768`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain [[companionlevel*2]] Armor. 
Advantage: Gain [[companionlevel/2]] Regenerate.

## Raw rules HTML

```html
Gain [[companionlevel*2]] Armor. 
Advantage: Gain [[companionlevel/2]] Regenerate.
```

## Observed keyword / token leads

`Advantage`, `Armor`, `companionlevel*2`, `companionlevel/2`, `Regenerate`
