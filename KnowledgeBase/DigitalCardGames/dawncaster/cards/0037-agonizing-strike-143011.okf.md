---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 143011
  name: "Agonizing Strike"
  ordinal: 37
  slug: "agonizing-strike"
  category: "Action"
  type: "Melee"
  rarity: "Monster"
  expansion: "None"
  color: "Monster"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 1
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Impervious"
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
    url: "https://blightbane.io/card/Agonizing_Strike"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Agonizing Strike

## Card identity

- **Ordinal:** 37 of 1692 generated cards
- **Source card id:** `143011`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Monster
- **Expansion:** None
- **Color:** Monster
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Agonizing Strike` appears in the Neurrone Dawncaster SQLite card table with id `143011`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:8] damage. 
Gain 1 Impervious.

## Raw rules HTML

```html
Deal [damage:8] damage. <br>Gain 1 Impervious.
```

## Observed keyword / token leads

`Impervious`
