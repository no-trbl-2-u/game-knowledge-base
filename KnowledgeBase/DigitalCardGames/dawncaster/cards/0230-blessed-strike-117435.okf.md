---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 117435
  name: "Blessed Strike"
  ordinal: 230
  slug: "blessed-strike"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Core"
  color: "Purple"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 1
  blood: 0
observed_terms:
  - "Basic Attack"
  - "Blessing"
  - "Chain"
  - "Make"
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
    url: "https://blightbane.io/card/Blessed_Strike"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Blessed Strike

## Card identity

- **Ordinal:** 230 of 1692 generated cards
- **Source card id:** `117435`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Core
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Blessed Strike` appears in the Neurrone Dawncaster SQLite card table with id `117435`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Make a Basic Attack. 
Gain a random Blessing with 2 stacks. Chain.

## Raw rules HTML

```html
Make a Basic Attack. <br>Gain a random Blessing with 2 stacks. Chain.
```

## Observed keyword / token leads

`Basic Attack`, `Blessing`, `Chain`, `Make`
