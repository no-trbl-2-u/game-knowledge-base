---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 967014
  name: "Arcane Visions"
  ordinal: 94
  slug: "arcane-visions"
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
  dexint: 2
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Conjure"
  - "Foretell"
  - "foretell+3"
  - "Magic Action"
  - "Scholar"
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
    url: "https://blightbane.io/card/Arcane_Visions"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Arcane Visions

## Card identity

- **Ordinal:** 94 of 1692 generated cards
- **Source card id:** `967014`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Infinitum
- **Color:** Aqua
- **Cost summary:** dexint=2

## Source-backed facts

- Claim: `Arcane Visions` appears in the Neurrone Dawncaster SQLite card table with id `967014`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Foretell [[foretell+3]].
Scholar: Conjure a free copy of any Magic Action revealed.

## Raw rules HTML

```html
Foretell [[foretell+3]].<br>Scholar: Conjure a free copy of any Magic Action revealed.
```

## Observed keyword / token leads

`Conjure`, `Foretell`, `foretell+3`, `Magic Action`, `Scholar`
