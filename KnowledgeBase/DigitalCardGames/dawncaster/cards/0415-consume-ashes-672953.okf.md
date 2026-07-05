---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 672953
  name: "Consume Ashes"
  ordinal: 415
  slug: "consume-ashes"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Infinitum"
  color: "Orange"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 1
observed_terms:
  - "Anger"
  - "Gain Regenerate"
  - "Move"
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
    url: "https://blightbane.io/card/Consume_Ashes"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Consume Ashes

## Card identity

- **Ordinal:** 415 of first 500 generated cards
- **Source card id:** `672953`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Infinitum
- **Color:** Orange
- **Cost summary:** blood=1

## Source-backed facts

- Claim: `Consume Ashes` appears in the Neurrone Dawncaster SQLite card table with id `672953`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Move the top card of your deck to your discard pile. Gain Regenerate and Anger equal to twice its cost.

## Raw rules HTML

```html
Move the top card of your deck to your discard pile. Gain Regenerate and Anger equal to twice its cost.
```

## Observed keyword / token leads

`Anger`, `Gain Regenerate`, `Move`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
