---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 872511
  name: "Body of Steel"
  ordinal: 265
  slug: "body-of-steel"
  category: "Enchantment"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Core"
  color: "Red"
  cost:
  dex: 0
  int: 0
  str: 1
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "HEALTH"
  - "Reflect"
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
    url: "https://blightbane.io/card/Body_of_Steel"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Body of Steel

## Card identity

- **Ordinal:** 265 of first 500 generated cards
- **Source card id:** `872511`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Core
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Body of Steel` appears in the Neurrone Dawncaster SQLite card table with id `872511`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, gain Reflect equal to the HEALTH you gain. Unique.

## Raw rules HTML

```html
This combat, gain Reflect equal to the HEALTH you gain. Unique.
```

## Observed keyword / token leads

`HEALTH`, `Reflect`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
