---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 707474
  name: "Coiled Strike"
  ordinal: 397
  slug: "coiled-strike"
  category: "Action"
  type: "Melee"
  rarity: "Uncommon"
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
  - "Adapt"
  - "Persistent"
  - "Turn"
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
    url: "https://blightbane.io/card/Coiled_Strike"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Coiled Strike

## Card identity

- **Ordinal:** 397 of 1692 generated cards
- **Source card id:** `707474`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Uncommon
- **Expansion:** Synthesis
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Coiled Strike` appears in the Neurrone Dawncaster SQLite card table with id `707474`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:3] damage. 
Start of Turn: Adapt this. Persistent.

## Raw rules HTML

```html
Deal [damage:3] damage. 
Start of Turn: Adapt this. Persistent.
```

## Observed keyword / token leads

`Adapt`, `Persistent`, `Turn`
