---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 127946
  name: "Soul of Vengeance"
  ordinal: 1400
  slug: "soul-of-vengeance"
  category: "Conjuration"
  type: "Utility"
  rarity: "Common"
  expansion: "Metamorphosis"
  color: "Orange"
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
  - "Critical Hit"
  - "On Draw"
  - "Soul"
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
    url: "https://blightbane.io/card/Soul_of_Vengeance"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Soul of Vengeance

## Card identity

- **Ordinal:** 1400 of 1692 generated cards
- **Source card id:** `127946`
- **Category:** Conjuration
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Metamorphosis
- **Color:** Orange
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Soul of Vengeance` appears in the Neurrone Dawncaster SQLite card table with id `127946`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

On Draw: Gain 1 Soul.
Your next action this turn inflicts a Critical Hit.

## Raw rules HTML

```html
On Draw: Gain 1 Soul.<br>Your next action this turn inflicts a Critical Hit.
```

## Observed keyword / token leads

`Critical Hit`, `On Draw`, `Soul`
