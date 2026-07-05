---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 581939
  name: "Court Fungus"
  ordinal: 432
  slug: "court-fungus"
  category: "Enchantment"
  type: "Utility"
  rarity: "Common"
  expansion: "None"
  color: "Black"
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
  - "Court Fungus"
  - "enchantmentStacks+1"
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
    url: "https://blightbane.io/card/Court_Fungus"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Court Fungus

## Card identity

- **Ordinal:** 432 of first 500 generated cards
- **Source card id:** `581939`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** None
- **Color:** Black
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Court Fungus` appears in the Neurrone Dawncaster SQLite card table with id `581939`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

The next Court Fungus you draw will cause you to take [[enchantmentStacks+1]] damage. Unique.

## Raw rules HTML

```html
The next Court Fungus you draw will cause you to take [[enchantmentStacks+1]] damage. Unique.
```

## Observed keyword / token leads

`Court Fungus`, `enchantmentStacks+1`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
