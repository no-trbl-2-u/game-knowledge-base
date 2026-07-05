---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 69836
  name: "Spirit Arrow"
  ordinal: 1426
  slug: "spirit-arrow"
  category: "Action"
  type: "Ranged"
  rarity: "Common"
  expansion: "None"
  color: "Aqua"
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
  - "Deals"
  - "Focus"
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
    url: "https://blightbane.io/card/Spirit_Arrow"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Spirit Arrow

## Card identity

- **Ordinal:** 1426 of 1692 generated cards
- **Source card id:** `69836`
- **Category:** Action
- **Type:** Ranged
- **Rarity:** Common
- **Expansion:** None
- **Color:** Aqua
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Spirit Arrow` appears in the Neurrone Dawncaster SQLite card table with id `69836`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:2] damage.
Deals 1 additional damage for every point of Focus.

## Raw rules HTML

```html
Deal [damage:2] damage.<br>Deals 1 additional damage for every point of Focus.
```

## Observed keyword / token leads

`Deals`, `Focus`
