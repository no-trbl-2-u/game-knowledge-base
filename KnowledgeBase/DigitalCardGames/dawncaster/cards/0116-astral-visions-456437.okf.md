---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 456437
  name: "Astral Visions"
  ordinal: 116
  slug: "astral-visions"
  category: "Action"
  type: "Utility"
  rarity: "Rare"
  expansion: "Infinitum"
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
  - "Conjure Stardarts"
  - "Foretell"
  - "foretell+3"
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
    url: "https://blightbane.io/card/Astral_Visions"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Astral Visions

## Card identity

- **Ordinal:** 116 of 1692 generated cards
- **Source card id:** `456437`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Infinitum
- **Color:** Aqua
- **Cost summary:** dexint=1

## Source-backed facts

- Claim: `Astral Visions` appears in the Neurrone Dawncaster SQLite card table with id `456437`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Foretell [[foretell+3]] and draw a card. Conjure Stardarts equal to the cost of the card drawn this way.

## Raw rules HTML

```html
Foretell [[foretell+3]] and draw a card. Conjure Stardarts equal to the cost of the card drawn this way.
```

## Observed keyword / token leads

`Conjure Stardarts`, `Foretell`, `foretell+3`
