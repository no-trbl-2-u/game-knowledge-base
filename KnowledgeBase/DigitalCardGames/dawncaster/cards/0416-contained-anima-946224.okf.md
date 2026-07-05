---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 946224
  name: "Contained Anima"
  ordinal: 416
  slug: "contained-anima"
  category: "Artifact"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Core"
  color: "Black"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 1
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Corruption"
  - "corruptionCards"
  - "Grounded"
  - "Improves"
  - "Maximum Health"
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
    url: "https://blightbane.io/card/Contained_Anima"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Contained Anima

## Card identity

- **Ordinal:** 416 of 1692 generated cards
- **Source card id:** `946224`
- **Category:** Artifact
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Core
- **Color:** Black
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Contained Anima` appears in the Neurrone Dawncaster SQLite card table with id `946224`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

One Use: Gain |#[[corruptionCards]]*3#| Maximum Health. Improves for each Corruption in your deck ([[corruptionCards]]). Unique. Grounded.

## Raw rules HTML

```html
One Use: Gain |#[[corruptionCards]]*3#| Maximum Health. Improves for each Corruption in your deck ([[corruptionCards]]). Unique. Grounded.
```

## Observed keyword / token leads

`Corruption`, `corruptionCards`, `Grounded`, `Improves`, `Maximum Health`, `One Use`
