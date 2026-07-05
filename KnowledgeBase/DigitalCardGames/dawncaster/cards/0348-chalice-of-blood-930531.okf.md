---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 930531
  name: "Chalice of Blood"
  ordinal: 348
  slug: "chalice-of-blood"
  category: "Action"
  type: "Divine"
  rarity: "Legendary"
  expansion: "Infinitum"
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
    blood: 3
observed_terms:
  - "Grounded"
  - "Heavy"
  - "Maximum Health"
  - "On Draw"
  - "One Use"
  - "permaValue"
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
    url: "https://blightbane.io/card/Chalice_of_Blood"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Chalice of Blood

## Card identity

- **Ordinal:** 348 of 1692 generated cards
- **Source card id:** `930531`
- **Category:** Action
- **Type:** Divine
- **Rarity:** Legendary
- **Expansion:** Infinitum
- **Color:** Black
- **Cost summary:** blood=3

## Source-backed facts

- Claim: `Chalice of Blood` appears in the Neurrone Dawncaster SQLite card table with id `930531`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

On Draw: Take [[permaValue]] damage then upgrade this by 2. 
One Use: Gain [[permaValue]] Maximum Health. Grounded. Heavy.

## Raw rules HTML

```html
On Draw: Take [[permaValue]] damage then upgrade this by 2. <br>One Use: Gain [[permaValue]] Maximum Health. Grounded. Heavy.
```

## Observed keyword / token leads

`Grounded`, `Heavy`, `Maximum Health`, `On Draw`, `One Use`, `permaValue`, `Take`
