---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 677061
  name: "Dancing Daggers"
  ordinal: 471
  slug: "dancing-daggers"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Metamorphosis"
  color: "Green"
  cost:
  dex: 1
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Basic Attack"
  - "Lasting"
  - "Performing Perform"
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
    url: "https://blightbane.io/card/Dancing_Daggers"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Dancing Daggers

## Card identity

- **Ordinal:** 471 of first 500 generated cards
- **Source card id:** `677061`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Metamorphosis
- **Color:** Green
- **Cost summary:** dex=1

## Source-backed facts

- Claim: `Dancing Daggers` appears in the Neurrone Dawncaster SQLite card table with id `677061`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Draw a card.
This turn, while Performing Perform 1 after making a Basic Attack. Lasting.

## Raw rules HTML

```html
Draw a card.<br>This turn, while Performing Perform 1 after making a Basic Attack. Lasting.
```

## Observed keyword / token leads

`Basic Attack`, `Lasting`, `Performing Perform`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
