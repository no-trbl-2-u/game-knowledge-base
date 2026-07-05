---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 470031
  name: "Dark Revenance"
  ordinal: 488
  slug: "dark-revenance"
  category: "Artifact"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Catalyst"
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
  blood: 3
observed_terms:
  - "Darkness"
  - "Health"
  - "Undead"
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
    url: "https://blightbane.io/card/Dark_Revenance"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Dark Revenance

## Card identity

- **Ordinal:** 488 of first 500 generated cards
- **Source card id:** `470031`
- **Category:** Artifact
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Catalyst
- **Color:** Orange
- **Cost summary:** blood=3

## Source-backed facts

- Claim: `Dark Revenance` appears in the Neurrone Dawncaster SQLite card table with id `470031`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, if you would die, remove this from your deck, gain Health equal to your Darkness and become Undead instead. Unique.

## Raw rules HTML

```html
This combat, if you would die, remove this from your deck, gain Health equal to your Darkness and become Undead instead. Unique.
```

## Observed keyword / token leads

`Darkness`, `Health`, `Undead`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
