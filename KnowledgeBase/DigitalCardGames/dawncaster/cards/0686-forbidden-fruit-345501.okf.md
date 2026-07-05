---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 345501
  name: "Forbidden Fruit"
  ordinal: 686
  slug: "forbidden-fruit"
  category: "Action"
  type: "Corruption"
  rarity: "Common"
  expansion: "Metamorphosis"
  color: "Black"
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
  - "HEALTH"
  - "One Use"
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
    url: "https://blightbane.io/card/Forbidden_Fruit"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Forbidden Fruit

## Card identity

- **Ordinal:** 686 of 1692 generated cards
- **Source card id:** `345501`
- **Category:** Action
- **Type:** Corruption
- **Rarity:** Common
- **Expansion:** Metamorphosis
- **Color:** Black
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Forbidden Fruit` appears in the Neurrone Dawncaster SQLite card table with id `345501`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

One Use: Gain 5 HEALTH.

## Raw rules HTML

```html
One Use: Gain 5 HEALTH.
```

## Observed keyword / token leads

`HEALTH`, `One Use`
