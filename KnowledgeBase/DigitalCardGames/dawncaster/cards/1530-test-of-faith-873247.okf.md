---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 873247
  name: "Test of Faith"
  ordinal: 1530
  slug: "test-of-faith"
  category: "Action"
  type: "Divine"
  rarity: "Common"
  expansion: "Eclypse"
  color: "Red"
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
  - "allEnergy"
  - "HOLY"
  - "Oathbound"
  - "Take"
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
    url: "https://blightbane.io/card/Test_of_Faith"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Test of Faith

## Card identity

- **Ordinal:** 1530 of 1692 generated cards
- **Source card id:** `873247`
- **Category:** Action
- **Type:** Divine
- **Rarity:** Common
- **Expansion:** Eclypse
- **Color:** Red
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Test of Faith` appears in the Neurrone Dawncaster SQLite card table with id `873247`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Take damage equal to your energy ([[allEnergy]]), then convert it to HOLY. If you are Oathbound, draw a card.

## Raw rules HTML

```html
Take damage equal to your energy ([[allEnergy]]), then convert it to HOLY. If you are Oathbound, draw a card.
```

## Observed keyword / token leads

`allEnergy`, `HOLY`, `Oathbound`, `Take`
