---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 994539
  name: "Guiding Shot"
  ordinal: 775
  slug: "guiding-shot"
  category: "Action"
  type: "Ranged"
  rarity: "Uncommon"
  expansion: "Infinitum"
  color: "Aqua"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 1
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Focus"
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
    url: "https://blightbane.io/card/Guiding_Shot"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Guiding Shot

## Card identity

- **Ordinal:** 775 of 1692 generated cards
- **Source card id:** `994539`
- **Category:** Action
- **Type:** Ranged
- **Rarity:** Uncommon
- **Expansion:** Infinitum
- **Color:** Aqua
- **Cost summary:** dexint=1

## Source-backed facts

- Claim: `Guiding Shot` appears in the Neurrone Dawncaster SQLite card table with id `994539`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Draw a card.
Deal damage and gain Focus equal its cost.

## Raw rules HTML

```html
Draw a card.<br>Deal damage and gain Focus equal its cost.
```

## Observed keyword / token leads

`Focus`
