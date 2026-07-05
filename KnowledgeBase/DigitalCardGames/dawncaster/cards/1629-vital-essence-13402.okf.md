---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 13402
  name: "Vital Essence"
  ordinal: 1629
  slug: "vital-essence"
  category: "Action"
  type: "Utility"
  rarity: "Rare"
  expansion: "Metamorphosis"
  color: "Red"
  cost:
    dex: 0
    int: 0
    str: 1
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Grounded"
  - "Maximum HEALTH"
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
    url: "https://blightbane.io/card/Vital_Essence"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Vital Essence

## Card identity

- **Ordinal:** 1629 of 1692 generated cards
- **Source card id:** `13402`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Metamorphosis
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Vital Essence` appears in the Neurrone Dawncaster SQLite card table with id `13402`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

One Use:
Gain +5 Maximum HEALTH. Grounded.

## Raw rules HTML

```html
One Use:<br>Gain +5 Maximum HEALTH. Grounded.
```

## Observed keyword / token leads

`Grounded`, `Maximum HEALTH`, `One Use`
