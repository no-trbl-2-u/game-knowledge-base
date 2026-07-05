---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 777609
  name: "Apex Predator"
  ordinal: 68
  slug: "apex-predator"
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
  - "Critical Hit"
  - "Darkness"
  - "Ferocity"
  - "While"
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
    url: "https://blightbane.io/card/Apex_Predator"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Apex Predator

## Card identity

- **Ordinal:** 68 of 1692 generated cards
- **Source card id:** `777609`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Monster
- **Expansion:** None
- **Color:** Monster
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Apex Predator` appears in the Neurrone Dawncaster SQLite card table with id `777609`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Start combat with Darkness equal to your health. While you have 10 more Ferocity, your next attack inflicts a Critical Hit. Unique.

## Raw rules HTML

```html
Start combat with Darkness equal to your health. While you have 10 more Ferocity, your next attack inflicts a Critical Hit. Unique.
```

## Observed keyword / token leads

`Critical Hit`, `Darkness`, `Ferocity`, `While`
