---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 320326
  name: "Slayer's Advance"
  ordinal: 1372
  slug: "slayer-s-advance"
  category: "Action"
  type: "Melee"
  rarity: "Common"
  expansion: "Catalyst"
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
  - "Darkness"
  - "Execute"
  - "Overkill"
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
    url: "https://blightbane.io/card/Slayer%27s_Advance"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Slayer's Advance

## Card identity

- **Ordinal:** 1372 of 1692 generated cards
- **Source card id:** `320326`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Common
- **Expansion:** Catalyst
- **Color:** Orange
- **Cost summary:** dexstr=1

## Source-backed facts

- Claim: `Slayer's Advance` appears in the Neurrone Dawncaster SQLite card table with id `320326`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:5] damage.
Execute: Start next combat with additional Darkness equal to the Overkill.

## Raw rules HTML

```html
Deal [damage:5] damage.<br>Execute: Start next combat with additional Darkness equal to the Overkill.
```

## Observed keyword / token leads

`Darkness`, `Execute`, `Overkill`
