---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 69574
  name: "Scatterbrain"
  ordinal: 1288
  slug: "scatterbrain"
  category: "Action"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Synthesis"
  color: "Blue"
  cost:
  dex: 0
  int: 3
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Boss"
  - "Can"
  - "Grounded"
  - "Replace"
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
    url: "https://blightbane.io/card/Scatterbrain"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Scatterbrain

## Card identity

- **Ordinal:** 1288 of 1692 generated cards
- **Source card id:** `69574`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Synthesis
- **Color:** Blue
- **Cost summary:** int=3

## Source-backed facts

- Claim: `Scatterbrain` appears in the Neurrone Dawncaster SQLite card table with id `69574`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Replace all cards in your foe's deck and hand with cards from random enemies. Can't be used against Boss enemies. Grounded.

## Raw rules HTML

```html
Replace all cards in your foe's deck and hand with cards from random enemies. Can't be used against Boss enemies. Grounded.
```

## Observed keyword / token leads

`Boss`, `Can`, `Grounded`, `Replace`
