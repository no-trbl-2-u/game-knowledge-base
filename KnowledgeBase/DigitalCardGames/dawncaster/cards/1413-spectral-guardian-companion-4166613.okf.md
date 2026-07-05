---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 4166613
  name: "Spectral Guardian (Companion)"
  ordinal: 1413
  slug: "spectral-guardian-companion"
  category: "Enchantment"
  type: "Utility"
  rarity: "Rare"
  expansion: "None"
  color: "Orange"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 2
  intstr: 0
  blood: 0
observed_terms:
  - "Afflictions"
  - "otherAfflictions"
  - "Reduce"
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
    url: "https://blightbane.io/card/Spectral_Guardian_%28Companion%29"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Spectral Guardian (Companion)

## Card identity

- **Ordinal:** 1413 of 1692 generated cards
- **Source card id:** `4166613`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** None
- **Color:** Orange
- **Cost summary:** dexstr=2

## Source-backed facts

- Claim: `Spectral Guardian (Companion)` appears in the Neurrone Dawncaster SQLite card table with id `4166613`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Reduce any damage dealt to you by the number of Afflictions on your foe ([[otherAfflictions]]). Unique.

## Raw rules HTML

```html
Reduce any damage dealt to you by the number of Afflictions on your foe ([[otherAfflictions]]). Unique.
```

## Observed keyword / token leads

`Afflictions`, `otherAfflictions`, `Reduce`
