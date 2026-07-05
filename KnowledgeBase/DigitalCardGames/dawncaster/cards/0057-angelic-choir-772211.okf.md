---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 772211
  name: "Angelic Choir"
  ordinal: 57
  slug: "angelic-choir"
  category: "Enchantment"
  type: "Divine"
  rarity: "Rare"
  expansion: "Synthesis"
  color: "Gold"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 1
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "HEALTH"
  - "HOLY"
  - "Hymn"
  - "Performance"
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
    url: "https://blightbane.io/card/Angelic_Choir"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Angelic Choir

## Card identity

- **Ordinal:** 57 of 1692 generated cards
- **Source card id:** `772211`
- **Category:** Enchantment
- **Type:** Divine
- **Rarity:** Rare
- **Expansion:** Synthesis
- **Color:** Gold
- **Cost summary:** holy=1

## Source-backed facts

- Claim: `Angelic Choir` appears in the Neurrone Dawncaster SQLite card table with id `772211`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, whenever you complete a Performance or Hymn gain 1 HEALTH and HOLY. Unique.

## Raw rules HTML

```html
This combat, whenever you complete a Performance or Hymn gain 1 HEALTH and HOLY. Unique.
```

## Observed keyword / token leads

`HEALTH`, `HOLY`, `Hymn`, `Performance`
