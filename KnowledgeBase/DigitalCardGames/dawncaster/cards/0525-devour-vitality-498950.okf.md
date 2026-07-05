---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 498950
  name: "Devour Vitality"
  ordinal: 525
  slug: "devour-vitality"
  category: "Action"
  type: "Melee"
  rarity: "Rare"
  expansion: "Core Extended"
  color: "Orange"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 2
    intstr: 0
    blood: 1
observed_terms:
  - "Execute"
  - "Maximum HEALTH"
  - "otherMaxHealth"
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
    url: "https://blightbane.io/card/Devour_Vitality"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Devour Vitality

## Card identity

- **Ordinal:** 525 of 1692 generated cards
- **Source card id:** `498950`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Rare
- **Expansion:** Core Extended
- **Color:** Orange
- **Cost summary:** dexstr=2, blood=1

## Source-backed facts

- Claim: `Devour Vitality` appears in the Neurrone Dawncaster SQLite card table with id `498950`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:8] damage. 
Execute: Gain 5% of the foes total health as your own Maximum HEALTH (|#[[otherMaxHealth]]/20#|).

## Raw rules HTML

```html
Deal [damage:8] damage. 
Execute: Gain 5% of the foes total health as your own Maximum HEALTH (|#[[otherMaxHealth]]/20#|).
```

## Observed keyword / token leads

`Execute`, `Maximum HEALTH`, `otherMaxHealth`
