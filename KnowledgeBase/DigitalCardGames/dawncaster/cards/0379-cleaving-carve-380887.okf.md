---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 380887
  name: "Cleaving Carve"
  ordinal: 379
  slug: "cleaving-carve"
  category: "Action"
  type: "Melee"
  rarity: "Rare"
  expansion: "Synthesis"
  color: "Red"
  cost:
  dex: 0
  int: 0
  str: 2
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Adaptation"
  - "adaptations"
  - "Attack"
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
    url: "https://blightbane.io/card/Cleaving_Carve"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Cleaving Carve

## Card identity

- **Ordinal:** 379 of first 500 generated cards
- **Source card id:** `380887`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Rare
- **Expansion:** Synthesis
- **Color:** Red
- **Cost summary:** str=2

## Source-backed facts

- Claim: `Cleaving Carve` appears in the Neurrone Dawncaster SQLite card table with id `380887`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:6] damage. 
Attack again for each Adaptation ([[adaptations]]).

## Raw rules HTML

```html
Deal [damage:6] damage. 
Attack again for each Adaptation ([[adaptations]]).
```

## Observed keyword / token leads

`Adaptation`, `adaptations`, `Attack`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
