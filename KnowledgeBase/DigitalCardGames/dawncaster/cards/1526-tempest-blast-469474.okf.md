---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 469474
  name: "Tempest Blast"
  ordinal: 1526
  slug: "tempest-blast"
  category: "Action"
  type: "Divine"
  rarity: "Common"
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
    intstr: 1
    blood: 0
observed_terms:
  - "Chain"
  - "Crushing"
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
    url: "https://blightbane.io/card/Tempest_Blast"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Tempest Blast

## Card identity

- **Ordinal:** 1526 of 1692 generated cards
- **Source card id:** `469474`
- **Category:** Action
- **Type:** Divine
- **Rarity:** Common
- **Expansion:** Eclypse
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Tempest Blast` appears in the Neurrone Dawncaster SQLite card table with id `469474`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:5] damage.
Crushing: Draw a card and double your Chain. Chain.

## Raw rules HTML

```html
Deal [damage:5] damage.<br>Crushing: Draw a card and double your Chain. Chain.
```

## Observed keyword / token leads

`Chain`, `Crushing`
