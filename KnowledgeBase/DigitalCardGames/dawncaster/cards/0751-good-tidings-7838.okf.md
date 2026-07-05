---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 7838
  name: "Good Tidings"
  ordinal: 751
  slug: "good-tidings"
  category: "Action"
  type: "Utility"
  rarity: "Rare"
  expansion: "Eclypse"
  color: "Aqua"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 1
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Affliction"
  - "Channel"
  - "Focus"
  - "Tide"
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
    url: "https://blightbane.io/card/Good_Tidings"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Good Tidings

## Card identity

- **Ordinal:** 751 of 1692 generated cards
- **Source card id:** `7838`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Eclypse
- **Color:** Aqua
- **Cost summary:** dexint=1

## Source-backed facts

- Claim: `Good Tidings` appears in the Neurrone Dawncaster SQLite card table with id `7838`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Whenever you change the Tide, gain 1 Focus and cleanse an Affliction. Channel.

## Raw rules HTML

```html
Whenever you change the Tide, gain 1 Focus and cleanse an Affliction. Channel.
```

## Observed keyword / token leads

`Affliction`, `Channel`, `Focus`, `Tide`
