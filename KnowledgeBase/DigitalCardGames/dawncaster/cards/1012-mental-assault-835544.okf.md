---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 835544
  name: "Mental Assault"
  ordinal: 1012
  slug: "mental-assault"
  category: "Action"
  type: "Utility"
  rarity: "Rare"
  expansion: "Core"
  color: "Aqua"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 3
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Attacks"
  - "Basic Attacks"
  - "Focus"
  - "Make"
  - "my(status)Focus"
  - "Scholar"
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
    url: "https://blightbane.io/card/Mental_Assault"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Mental Assault

## Card identity

- **Ordinal:** 1012 of 1692 generated cards
- **Source card id:** `835544`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Core
- **Color:** Aqua
- **Cost summary:** dexint=3

## Source-backed facts

- Claim: `Mental Assault` appears in the Neurrone Dawncaster SQLite card table with id `835544`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Make 3 Basic Attacks.
Scholar: Make additional Attacks for every point of Focus ([[my(status)Focus]]).

## Raw rules HTML

```html
Make 3 Basic Attacks.<br>Scholar: Make additional Attacks for every point of Focus ([[my(status)Focus]]).
```

## Observed keyword / token leads

`Attacks`, `Basic Attacks`, `Focus`, `Make`, `my(status)Focus`, `Scholar`
