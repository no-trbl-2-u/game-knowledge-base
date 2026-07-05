---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 5158902
  name: "Arboreal Claws"
  ordinal: 79
  slug: "arboreal-claws"
  category: "Basic Attack"
  type: "Melee"
  rarity: "Common"
  expansion: "Metaprogress"
  color: "Brown"
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
  - "Increase"
  - "NEUTRAL"
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
    url: "https://blightbane.io/card/Arboreal_Claws"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Arboreal Claws

## Card identity

- **Ordinal:** 79 of first 500 generated cards
- **Source card id:** `5158902`
- **Category:** Basic Attack
- **Type:** Melee
- **Rarity:** Common
- **Expansion:** Metaprogress
- **Color:** Brown
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Arboreal Claws` appears in the Neurrone Dawncaster SQLite card table with id `5158902`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:8] damage.
Increase the cost of all cards in hand by NEUTRAL.

## Raw rules HTML

```html
Deal [damage:8] damage.
Increase the cost of all cards in hand by NEUTRAL.
```

## Observed keyword / token leads

`Increase`, `NEUTRAL`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
