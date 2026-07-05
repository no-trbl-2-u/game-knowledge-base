---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 14680
  name: "Hungering Strike"
  ordinal: 833
  slug: "hungering-strike"
  category: "Action"
  type: "Melee"
  rarity: "Uncommon"
  expansion: "Metaprogress"
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
    blood: 2
observed_terms:
  - "Execute"
  - "Lifedrain"
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
    url: "https://blightbane.io/card/Hungering_Strike"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Hungering Strike

## Card identity

- **Ordinal:** 833 of 1692 generated cards
- **Source card id:** `14680`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Uncommon
- **Expansion:** Metaprogress
- **Color:** Orange
- **Cost summary:** dexstr=1, blood=2

## Source-backed facts

- Claim: `Hungering Strike` appears in the Neurrone Dawncaster SQLite card table with id `14680`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:5] damage.
Execute: Lifedrain.

## Raw rules HTML

```html
Deal [damage:5] damage.<br>Execute: Lifedrain.
```

## Observed keyword / token leads

`Execute`, `Lifedrain`
