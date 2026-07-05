---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 840427
  name: "Ritual Totem"
  ordinal: 1238
  slug: "ritual-totem"
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
  neutral: 2
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Summon"
  - "Totem"
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
    url: "https://blightbane.io/card/Ritual_Totem"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Ritual Totem

## Card identity

- **Ordinal:** 1238 of 1692 generated cards
- **Source card id:** `840427`
- **Category:** Basic Attack
- **Type:** Melee
- **Rarity:** Common
- **Expansion:** Metaprogress
- **Color:** Brown
- **Cost summary:** neutral=2

## Source-backed facts

- Claim: `Ritual Totem` appears in the Neurrone Dawncaster SQLite card table with id `840427`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:6] damage.
Summon a Totem.

## Raw rules HTML

```html
Deal [damage:6] damage.<br>Summon a Totem.
```

## Observed keyword / token leads

`Summon`, `Totem`
