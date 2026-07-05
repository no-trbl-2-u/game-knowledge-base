---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 31471
  name: "Stormshell"
  ordinal: 1475
  slug: "stormshell"
  category: "Action"
  type: "Utility"
  rarity: "Rare"
  expansion: "Core Extended"
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
  - "Barrier"
  - "Chain"
  - "Channel"
  - "When Stormshell"
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
    url: "https://blightbane.io/card/Stormshell"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Stormshell

## Card identity

- **Ordinal:** 1475 of 1692 generated cards
- **Source card id:** `31471`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Core Extended
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Stormshell` appears in the Neurrone Dawncaster SQLite card table with id `31471`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

At the start of your turn, gain 2 Chain, then increase this by 2. When Stormshell is removed, gain Barrier equal to your Chain. Channel.

## Raw rules HTML

```html
At the start of your turn, gain 2 Chain, then increase this by 2. When Stormshell is removed, gain Barrier equal to your Chain. Channel.
```

## Observed keyword / token leads

`Barrier`, `Chain`, `Channel`, `When Stormshell`
