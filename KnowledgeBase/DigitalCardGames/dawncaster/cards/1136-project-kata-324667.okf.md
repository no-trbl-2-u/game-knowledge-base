---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 324667
  name: "Project Kata"
  ordinal: 1136
  slug: "project-kata"
  category: "Enchantment"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Synthesis"
  color: "Aqua"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 2
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "highestCopiesPlayed"
  - "Mantra"
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
    url: "https://blightbane.io/card/Project_Kata"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Project Kata

## Card identity

- **Ordinal:** 1136 of 1692 generated cards
- **Source card id:** `324667`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Synthesis
- **Color:** Aqua
- **Cost summary:** dexint=2

## Source-backed facts

- Claim: `Project Kata` appears in the Neurrone Dawncaster SQLite card table with id `324667`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, deal damage equal to the highest number of copies of a card you've played this turn whenever you play a Mantra ([[highestCopiesPlayed]]). Unique.

## Raw rules HTML

```html
This combat, deal damage equal to the highest number of copies of a card you've played this turn whenever you play a Mantra ([[highestCopiesPlayed]]). Unique.
```

## Observed keyword / token leads

`highestCopiesPlayed`, `Mantra`
