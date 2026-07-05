---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 706262
  name: "Ritual of Vodou"
  ordinal: 1237
  slug: "ritual-of-vodou"
  category: "Performance"
  type: "Utility"
  rarity: "Common"
  expansion: "None"
  color: "Orange"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "After"
  - "HEALTH"
  - "Maximum Health"
  - "myMaxHealth"
  - "Performances"
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
    url: "https://blightbane.io/card/Ritual_of_Vodou"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Ritual of Vodou

## Card identity

- **Ordinal:** 1237 of 1692 generated cards
- **Source card id:** `706262`
- **Category:** Performance
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** None
- **Color:** Orange
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Ritual of Vodou` appears in the Neurrone Dawncaster SQLite card table with id `706262`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

After 10 Performances, swap your HEALTH with your foe's HEALTH if its lower than your Maximum Health ([[myMaxHealth]]).

## Raw rules HTML

```html
After 10 Performances, swap your HEALTH with your foe's HEALTH if its lower than your Maximum Health ([[myMaxHealth]]).
```

## Observed keyword / token leads

`After`, `HEALTH`, `Maximum Health`, `myMaxHealth`, `Performances`
