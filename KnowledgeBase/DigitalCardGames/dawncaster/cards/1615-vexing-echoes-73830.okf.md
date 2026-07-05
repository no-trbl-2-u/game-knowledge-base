---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 73830
  name: "Vexing Echoes"
  ordinal: 1615
  slug: "vexing-echoes"
  category: "Action"
  type: "Corruption"
  rarity: "Legendary"
  expansion: "Eclypse"
  color: "Blue"
  cost:
  dex: 0
  int: 2
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 2
observed_terms:
  - "Choose"
  - "Conjure"
  - "Corruption OR"
  - "Cursed"
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
    url: "https://blightbane.io/card/Vexing_Echoes"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Vexing Echoes

## Card identity

- **Ordinal:** 1615 of 1692 generated cards
- **Source card id:** `73830`
- **Category:** Action
- **Type:** Corruption
- **Rarity:** Legendary
- **Expansion:** Eclypse
- **Color:** Blue
- **Cost summary:** int=2, blood=2

## Source-backed facts

- Claim: `Vexing Echoes` appears in the Neurrone Dawncaster SQLite card table with id `73830`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Choose one: Conjure a free copy of every non-conjured Corruption OR Cursed card you play this combat Unique.

## Raw rules HTML

```html
Choose one: Conjure a free copy of every non-conjured Corruption OR Cursed card you play this combat Unique.
```

## Observed keyword / token leads

`Choose`, `Conjure`, `Corruption OR`, `Cursed`
