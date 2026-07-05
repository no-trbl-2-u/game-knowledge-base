---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 898850
  name: "Prismatic Shard"
  ordinal: 1131
  slug: "prismatic-shard"
  category: "Artifact"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Core Extended"
  color: "Brown"
  cost:
  dex: 1
  int: 1
  str: 1
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Anger"
  - "Evasion"
  - "Focus"
  - "HEALTH"
  - "Memorized"
  - "Use DEX"
  - "Use HOLY"
  - "Use INT"
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
    url: "https://blightbane.io/card/Prismatic_Shard"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Prismatic Shard

## Card identity

- **Ordinal:** 1131 of 1692 generated cards
- **Source card id:** `898850`
- **Category:** Artifact
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Core Extended
- **Color:** Brown
- **Cost summary:** dex=1, int=1, str=1

## Source-backed facts

- Claim: `Prismatic Shard` appears in the Neurrone Dawncaster SQLite card table with id `898850`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Use DEX: Gain 1 Evasion.
Use INT: Gain 1 Focus.
Use STR: Gain 1 Anger.
Use HOLY: Gain 3 HEALTH. Unique. Memorized.

## Raw rules HTML

```html
Use DEX: Gain 1 Evasion.<br>Use INT: Gain 1 Focus.<br>Use STR: Gain 1 Anger.<br>Use HOLY: Gain 3 HEALTH. Unique. Memorized.
```

## Observed keyword / token leads

`Anger`, `Evasion`, `Focus`, `HEALTH`, `Memorized`, `Use DEX`, `Use HOLY`, `Use INT`, `Use STR`
