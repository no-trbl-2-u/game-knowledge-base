---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 1198
  name: "Spellsnap"
  ordinal: 1422
  slug: "spellsnap"
  category: "Enchantment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Metaprogress"
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
  - "imprints"
  - "Magic Action"
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
    url: "https://blightbane.io/card/Spellsnap"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Spellsnap

## Card identity

- **Ordinal:** 1422 of 1692 generated cards
- **Source card id:** `1198`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Metaprogress
- **Color:** Blue
- **Cost summary:** int=2

## Source-backed facts

- Claim: `Spellsnap` appears in the Neurrone Dawncaster SQLite card table with id `1198`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, conjure a free copy of the next Magic Action you play at the start of your turn. ([[imprints]]) Unique.

## Raw rules HTML

```html
This combat, conjure a free copy of the next Magic Action you play at the start of your turn. ([[imprints]]) Unique.
```

## Observed keyword / token leads

`imprints`, `Magic Action`
