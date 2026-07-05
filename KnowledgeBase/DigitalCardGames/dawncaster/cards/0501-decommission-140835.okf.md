---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 140835
  name: "Decommission"
  ordinal: 501
  slug: "decommission"
  category: "Action"
  type: "Melee"
  rarity: "Rare"
  expansion: "Synthesis"
  color: "Purple"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 2
  blood: 0
observed_terms:
  - "allDurability"
  - "allDurability+6"
  - "Durability"
  - "Equipment"
  - "Execute"
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
    url: "https://blightbane.io/card/Decommission"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Decommission

## Card identity

- **Ordinal:** 501 of 1692 generated cards
- **Source card id:** `140835`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Rare
- **Expansion:** Synthesis
- **Color:** Purple
- **Cost summary:** intstr=2

## Source-backed facts

- Claim: `Decommission` appears in the Neurrone Dawncaster SQLite card table with id `140835`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:[[allDurability+6]]] damage.
This damage is improved by the sum of your Durability ([[allDurability]]). Execute: This combat yields only Equipment cards as rewards.

## Raw rules HTML

```html
Deal [damage:[[allDurability+6]]] damage.
This damage is improved by the sum of your Durability ([[allDurability]]). Execute: This combat yields only Equipment cards as rewards.
```

## Observed keyword / token leads

`allDurability`, `allDurability+6`, `Durability`, `Equipment`, `Execute`
