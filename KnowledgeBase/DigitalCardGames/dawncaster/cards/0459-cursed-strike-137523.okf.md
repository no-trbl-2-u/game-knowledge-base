---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 137523
  name: "Cursed Strike"
  ordinal: 459
  slug: "cursed-strike"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Core Extended"
  color: "Orange"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 1
  intstr: 0
  blood: 0
observed_terms:
  - "Basic Attack"
  - "Inflict"
  - "Make"
  - "Random Affliction"
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
    url: "https://blightbane.io/card/Cursed_Strike"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Cursed Strike

## Card identity

- **Ordinal:** 459 of 1692 generated cards
- **Source card id:** `137523`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Core Extended
- **Color:** Orange
- **Cost summary:** dexstr=1

## Source-backed facts

- Claim: `Cursed Strike` appears in the Neurrone Dawncaster SQLite card table with id `137523`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Make a Basic Attack.
Inflict a Random Affliction with 3 stacks.

## Raw rules HTML

```html
Make a Basic Attack.<br>Inflict a Random Affliction with 3 stacks.
```

## Observed keyword / token leads

`Basic Attack`, `Inflict`, `Make`, `Random Affliction`
