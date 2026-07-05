---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 44365
  name: "Demonform II"
  ordinal: 517
  slug: "demonform-ii"
  category: "Form"
  type: "Corruption"
  rarity: "Legendary"
  expansion: "Eclypse"
  color: "Purple"
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
  - "myCurrentHealth"
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
    url: "https://blightbane.io/card/Demonform_II"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Demonform II

## Card identity

- **Ordinal:** 517 of 1692 generated cards
- **Source card id:** `44365`
- **Category:** Form
- **Type:** Corruption
- **Rarity:** Legendary
- **Expansion:** Eclypse
- **Color:** Purple
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Demonform II` appears in the Neurrone Dawncaster SQLite card table with id `44365`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Draw 2 additional cards. At the end of your turn, lose half of your current HEALTH (|#[[myCurrentHealth]]/2#|).

## Raw rules HTML

```html
Draw 2 additional cards. At the end of your turn, lose half of your current HEALTH (|#[[myCurrentHealth]]/2#|).
```

## Observed keyword / token leads

`HEALTH`, `myCurrentHealth`
