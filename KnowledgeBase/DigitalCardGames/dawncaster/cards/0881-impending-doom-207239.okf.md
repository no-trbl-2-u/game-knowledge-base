---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 207239
  name: "Impending Doom"
  ordinal: 881
  slug: "impending-doom"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Catalyst"
  color: "Aqua"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 1
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Channel"
  - "Doom"
  - "Focus"
  - "my(status)Focus"
  - "Turn"
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
    url: "https://blightbane.io/card/Impending_Doom"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Impending Doom

## Card identity

- **Ordinal:** 881 of 1692 generated cards
- **Source card id:** `207239`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Catalyst
- **Color:** Aqua
- **Cost summary:** dexint=1

## Source-backed facts

- Claim: `Impending Doom` appears in the Neurrone Dawncaster SQLite card table with id `207239`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Start of Turn: inflict Doom equal to your Focus ([[my(status)Focus]]). Channel.

## Raw rules HTML

```html
Start of Turn: inflict Doom equal to your Focus ([[my(status)Focus]]). Channel.
```

## Observed keyword / token leads

`Channel`, `Doom`, `Focus`, `my(status)Focus`, `Turn`
