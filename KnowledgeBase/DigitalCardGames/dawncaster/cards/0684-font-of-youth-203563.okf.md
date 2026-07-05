---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 203563
  name: "Font of Youth"
  ordinal: 684
  slug: "font-of-youth"
  category: "Location"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Eclypse"
  color: "Green"
  cost:
  dex: 1
  int: 0
  str: 0
  holy: 0
  neutral: 2
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "After"
  - "Grounded"
  - "HEALTH"
  - "Persistent"
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
    url: "https://blightbane.io/card/Font_of_Youth"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Font of Youth

## Card identity

- **Ordinal:** 684 of 1692 generated cards
- **Source card id:** `203563`
- **Category:** Location
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Eclypse
- **Color:** Green
- **Cost summary:** dex=1, neutral=2

## Source-backed facts

- Claim: `Font of Youth` appears in the Neurrone Dawncaster SQLite card table with id `203563`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, heal to full HEALTH at the start of your turn. After healing 100 HEALTH, remove it. Unique. Grounded. Persistent.

## Raw rules HTML

```html
This combat, heal to full HEALTH at the start of your turn. After healing 100 HEALTH, remove it. Unique. Grounded. Persistent.
```

## Observed keyword / token leads

`After`, `Grounded`, `HEALTH`, `Persistent`
