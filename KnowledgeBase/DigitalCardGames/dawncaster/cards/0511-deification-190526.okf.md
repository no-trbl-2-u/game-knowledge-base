---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 190526
  name: "Deification"
  ordinal: 511
  slug: "deification"
  category: "Action"
  type: "Divine"
  rarity: "Legendary"
  expansion: "Metamorphosis"
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
  - "Ascend"
  - "Bury"
  - "Charges"
  - "HOLY"
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
    url: "https://blightbane.io/card/Deification"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Deification

## Card identity

- **Ordinal:** 511 of 1692 generated cards
- **Source card id:** `190526`
- **Category:** Action
- **Type:** Divine
- **Rarity:** Legendary
- **Expansion:** Metamorphosis
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Deification` appears in the Neurrone Dawncaster SQLite card table with id `190526`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Bury 3 cards.
Ascend if you have HOLY. Charges (1/1).

## Raw rules HTML

```html
Bury 3 cards.<br>Ascend if you have HOLY. Charges (1/1).
```

## Observed keyword / token leads

`Ascend`, `Bury`, `Charges`, `HOLY`
