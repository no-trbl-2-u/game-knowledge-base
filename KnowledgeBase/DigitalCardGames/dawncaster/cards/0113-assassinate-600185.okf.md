---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 600185
  name: "Assassinate"
  ordinal: 113
  slug: "assassinate"
  category: "Action"
  type: "Melee"
  rarity: "Rare"
  expansion: "Core"
  color: "Green"
  cost:
  dex: 1
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Each"
  - "HEALTH"
  - "On Hit"
  - "sinister"
  - "Sinister"
  - "Slay"
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
    url: "https://blightbane.io/card/Assassinate"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Assassinate

## Card identity

- **Ordinal:** 113 of first 500 generated cards
- **Source card id:** `600185`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Rare
- **Expansion:** Core
- **Color:** Green
- **Cost summary:** dex=1

## Source-backed facts

- Claim: `Assassinate` appears in the Neurrone Dawncaster SQLite card table with id `600185`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:4] damage. 
On Hit: Slay your foe if their HEALTH is |#[[sinister]]*5#| or less. Each point of Sinister improves this range by 5 Sinister.

## Raw rules HTML

```html
Deal [damage:4] damage. <br>On Hit: Slay your foe if their HEALTH is |#[[sinister]]*5#| or less. Each point of Sinister improves this range by 5 Sinister.
```

## Observed keyword / token leads

`Each`, `HEALTH`, `On Hit`, `sinister`, `Sinister`, `Slay`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
