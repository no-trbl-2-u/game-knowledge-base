---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 740554
  name: "Bound Spirit"
  ordinal: 291
  slug: "bound-spirit"
  category: "Enchantment"
  type: "Utility"
  rarity: "Monster"
  expansion: "None"
  color: "Monster"
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
  - "Barrier"
  - "difficulty"
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
    url: "https://blightbane.io/card/Bound_Spirit"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Bound Spirit

## Card identity

- **Ordinal:** 291 of first 500 generated cards
- **Source card id:** `740554`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Monster
- **Expansion:** None
- **Color:** Monster
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Bound Spirit` appears in the Neurrone Dawncaster SQLite card table with id `740554`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

At the end of your turn, restore |#10*[[difficulty]]#| Barrier, then gain HEALTH equal to half your Barrier. Unique.

## Raw rules HTML

```html
At the end of your turn, restore |#10*[[difficulty]]#| Barrier, then gain HEALTH equal to half your Barrier. Unique.
```

## Observed keyword / token leads

`Barrier`, `difficulty`, `HEALTH`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
