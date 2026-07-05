---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 322523
  name: "Surge of Strength"
  ordinal: 1498
  slug: "surge-of-strength"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Core"
  color: "Red"
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
  - "Gain STR"
  - "HEALTH"
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
    url: "https://blightbane.io/card/Surge_of_Strength"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Surge of Strength

## Card identity

- **Ordinal:** 1498 of 1692 generated cards
- **Source card id:** `322523`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Core
- **Color:** Red
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Surge of Strength` appears in the Neurrone Dawncaster SQLite card table with id `322523`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain STR and [healing:1] HEALTH

## Raw rules HTML

```html
Gain STR and [healing:1] HEALTH
```

## Observed keyword / token leads

`Gain STR`, `HEALTH`
