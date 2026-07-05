---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 783723
  name: "Arcanist's Locket"
  ordinal: 98
  slug: "arcanist-s-locket"
  category: "Item"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Catalyst"
  color: "Brown"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 1
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Focus"
  - "Gain INT"
  - "INT"
  - "While"
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
    url: "https://blightbane.io/card/Arcanist%27s_Locket"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Arcanist's Locket

## Card identity

- **Ordinal:** 98 of first 500 generated cards
- **Source card id:** `783723`
- **Category:** Item
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Catalyst
- **Color:** Brown
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Arcanist's Locket` appears in the Neurrone Dawncaster SQLite card table with id `783723`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain INT and Focus.
While this is in your deck, rewards include cards that cost INT.

## Raw rules HTML

```html
Gain INT and Focus.<br>While this is in your deck, rewards include cards that cost INT.
```

## Observed keyword / token leads

`Focus`, `Gain INT`, `INT`, `While`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
