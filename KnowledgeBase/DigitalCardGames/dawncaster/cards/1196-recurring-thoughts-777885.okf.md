---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 777885
  name: "Recurring Thoughts"
  ordinal: 1196
  slug: "recurring-thoughts"
  category: "Action"
  type: "Utility"
  rarity: "Rare"
  expansion: "Synthesis"
  color: "Aqua"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 3
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Choose"
  - "Conjure"
  - "damageBonus+1"
  - "Upgradeable"
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
    url: "https://blightbane.io/card/Recurring_Thoughts"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Recurring Thoughts

## Card identity

- **Ordinal:** 1196 of 1692 generated cards
- **Source card id:** `777885`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Synthesis
- **Color:** Aqua
- **Cost summary:** dexint=3

## Source-backed facts

- Claim: `Recurring Thoughts` appears in the Neurrone Dawncaster SQLite card table with id `777885`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Choose a card in your hand. Conjure [[damageBonus+1]] copies of it. Upgradeable.

## Raw rules HTML

```html
Choose a card in your hand. Conjure [[damageBonus+1]] copies of it. Upgradeable.
```

## Observed keyword / token leads

`Choose`, `Conjure`, `damageBonus+1`, `Upgradeable`
