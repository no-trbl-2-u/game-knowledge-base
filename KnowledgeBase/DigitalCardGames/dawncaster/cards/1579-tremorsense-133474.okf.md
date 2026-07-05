---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 133474
  name: "Tremorsense"
  ordinal: 1579
  slug: "tremorsense"
  category: "Action"
  type: "Magic"
  rarity: "Common"
  expansion: "Catalyst"
  color: "Orange"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 1
  intstr: 0
  blood: 0
observed_terms:
  - "Inflict"
  - "Stagger"
  - "Summon"
  - "Totem"
  - "totems"
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
    url: "https://blightbane.io/card/Tremorsense"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Tremorsense

## Card identity

- **Ordinal:** 1579 of 1692 generated cards
- **Source card id:** `133474`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Common
- **Expansion:** Catalyst
- **Color:** Orange
- **Cost summary:** dexstr=1

## Source-backed facts

- Claim: `Tremorsense` appears in the Neurrone Dawncaster SQLite card table with id `133474`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Summon a Totem.
Inflict 3 Stagger for each type of Totem you control ([[totems]]).

## Raw rules HTML

```html
Summon a Totem.<br>Inflict 3 Stagger for each type of Totem you control ([[totems]]).
```

## Observed keyword / token leads

`Inflict`, `Stagger`, `Summon`, `Totem`, `totems`
