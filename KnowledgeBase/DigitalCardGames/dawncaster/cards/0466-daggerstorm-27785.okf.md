---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 27785
  name: "Daggerstorm"
  ordinal: 466
  slug: "daggerstorm"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Metaprogress"
  color: "Green"
  cost:
    dex: 2
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Basic Attack"
  - "Gain DEX"
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
    url: "https://blightbane.io/card/Daggerstorm"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Daggerstorm

## Card identity

- **Ordinal:** 466 of 1692 generated cards
- **Source card id:** `27785`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Metaprogress
- **Color:** Green
- **Cost summary:** dex=2

## Source-backed facts

- Claim: `Daggerstorm` appears in the Neurrone Dawncaster SQLite card table with id `27785`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Draw 3 cards.
Gain DEX for every Basic Attack drawn.

## Raw rules HTML

```html
Draw 3 cards.<br>Gain DEX for every Basic Attack drawn.
```

## Observed keyword / token leads

`Basic Attack`, `Gain DEX`
