---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 426088
  name: "Arcane Ripple"
  ordinal: 92
  slug: "arcane-ripple"
  category: "Action"
  type: "Magic"
  rarity: "Rare"
  expansion: "Infinitum"
  color: "Blue"
  cost:
  dex: 0
  int: 2
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Conjure"
  - "Free"
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
    url: "https://blightbane.io/card/Arcane_Ripple"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Arcane Ripple

## Card identity

- **Ordinal:** 92 of first 500 generated cards
- **Source card id:** `426088`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Rare
- **Expansion:** Infinitum
- **Color:** Blue
- **Cost summary:** int=2

## Source-backed facts

- Claim: `Arcane Ripple` appears in the Neurrone Dawncaster SQLite card table with id `426088`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:1] damage.
Free when conjured.
Conjure a base copy at the start of next combat.

## Raw rules HTML

```html
Deal [damage:1] damage.<br>Free when conjured.<br>Conjure a base copy at the start of next combat.
```

## Observed keyword / token leads

`Conjure`, `Free`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
