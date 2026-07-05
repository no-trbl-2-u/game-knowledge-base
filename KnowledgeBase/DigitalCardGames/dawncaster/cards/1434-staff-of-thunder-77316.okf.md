---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 77316
  name: "Staff of Thunder"
  ordinal: 1434
  slug: "staff-of-thunder"
  category: "Basic Attack"
  type: "Magic"
  rarity: "Rare"
  expansion: "Core"
  color: "Brown"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 2
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Chain"
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
    url: "https://blightbane.io/card/Staff_of_Thunder"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Staff of Thunder

## Card identity

- **Ordinal:** 1434 of 1692 generated cards
- **Source card id:** `77316`
- **Category:** Basic Attack
- **Type:** Magic
- **Rarity:** Rare
- **Expansion:** Core
- **Color:** Brown
- **Cost summary:** neutral=2

## Source-backed facts

- Claim: `Staff of Thunder` appears in the Neurrone Dawncaster SQLite card table with id `77316`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:3] damage 
three times. Chain.

## Raw rules HTML

```html
Deal [damage:3] damage <br>three times. Chain.
```

## Observed keyword / token leads

`Chain`
