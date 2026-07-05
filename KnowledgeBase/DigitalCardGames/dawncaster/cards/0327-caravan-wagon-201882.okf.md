---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 201882
  name: "Caravan Wagon"
  ordinal: 327
  slug: "caravan-wagon"
  category: "Enchantment"
  type: "Utility"
  rarity: "Common"
  expansion: "None"
  color: "Brown"
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
  - "areaSpecial"
  - "Brightcandle"
  - "Current Health"
  - "Protect"
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
    url: "https://blightbane.io/card/Caravan_Wagon"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Caravan Wagon

## Card identity

- **Ordinal:** 327 of 1692 generated cards
- **Source card id:** `201882`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** None
- **Color:** Brown
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Caravan Wagon` appears in the Neurrone Dawncaster SQLite card table with id `201882`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Protect the caravan until you reach Brightcandle to earn a reward! Current Health: ([[areaSpecial]]/100). Unique.

## Raw rules HTML

```html
Protect the caravan until you reach Brightcandle to earn a reward! Current Health: ([[areaSpecial]]/100). Unique.
```

## Observed keyword / token leads

`areaSpecial`, `Brightcandle`, `Current Health`, `Protect`
