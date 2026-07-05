---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 563096
  name: "Thousand Cuts"
  ordinal: 1540
  slug: "thousand-cuts"
  category: "Action"
  type: "Melee"
  rarity: "Common"
  expansion: "Core"
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
  - "DEX"
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
    url: "https://blightbane.io/card/Thousand_Cuts"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Thousand Cuts

## Card identity

- **Ordinal:** 1540 of 1692 generated cards
- **Source card id:** `563096`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Common
- **Expansion:** Core
- **Color:** Green
- **Cost summary:** dex=1

## Source-backed facts

- Claim: `Thousand Cuts` appears in the Neurrone Dawncaster SQLite card table with id `563096`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:3] damage for 
each of your DEX.

## Raw rules HTML

```html
Deal [damage:3] damage for <br>each of your DEX.
```

## Observed keyword / token leads

`DEX`
