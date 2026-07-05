---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 456818
  name: "Aspect of Wisdom"
  ordinal: 111
  slug: "aspect-of-wisdom"
  category: "Enchantment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "None"
  color: "Gold"
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
  - "Conjure"
  - "Turn"
  - "Virtue"
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
    url: "https://blightbane.io/card/Aspect_of_Wisdom"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Aspect of Wisdom

## Card identity

- **Ordinal:** 111 of first 500 generated cards
- **Source card id:** `456818`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** None
- **Color:** Gold
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Aspect of Wisdom` appears in the Neurrone Dawncaster SQLite card table with id `456818`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Start of Turn.
Conjure a random Virtue. Unique.

## Raw rules HTML

```html
Start of Turn.<br>Conjure a random Virtue. Unique.
```

## Observed keyword / token leads

`Conjure`, `Turn`, `Virtue`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
