---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 351802
  name: "Shard of Malice"
  ordinal: 1328
  slug: "shard-of-malice"
  category: "Artifact"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Core Extended"
  color: "Orange"
  cost:
  dex: 1
  int: 0
  str: 1
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Bleeding"
  - "Inflict"
  - "Memorized"
  - "Poison"
  - "Use DEX"
  - "Use STR"
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
    url: "https://blightbane.io/card/Shard_of_Malice"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Shard of Malice

## Card identity

- **Ordinal:** 1328 of 1692 generated cards
- **Source card id:** `351802`
- **Category:** Artifact
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Core Extended
- **Color:** Orange
- **Cost summary:** dex=1, str=1

## Source-backed facts

- Claim: `Shard of Malice` appears in the Neurrone Dawncaster SQLite card table with id `351802`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Use DEX: Inflict 4 Poison.
Use STR: Inflict 2 Bleeding. Unique. Memorized.

## Raw rules HTML

```html
Use DEX: Inflict 4 Poison.<br>Use STR: Inflict 2 Bleeding. Unique. Memorized.
```

## Observed keyword / token leads

`Bleeding`, `Inflict`, `Memorized`, `Poison`, `Use DEX`, `Use STR`
