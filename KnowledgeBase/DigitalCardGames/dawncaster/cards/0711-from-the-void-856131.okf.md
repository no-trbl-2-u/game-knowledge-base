---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 856131
  name: "From the Void"
  ordinal: 711
  slug: "from-the-void"
  category: "Action"
  type: "Corruption"
  rarity: "Legendary"
  expansion: "Eclypse"
  color: "Blue"
  cost:
  dex: 0
  int: 1
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 2
observed_terms:
  - "Charges"
  - "Corruptions"
  - "Return"
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
    url: "https://blightbane.io/card/From_the_Void"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# From the Void

## Card identity

- **Ordinal:** 711 of 1692 generated cards
- **Source card id:** `856131`
- **Category:** Action
- **Type:** Corruption
- **Rarity:** Legendary
- **Expansion:** Eclypse
- **Color:** Blue
- **Cost summary:** int=1, blood=2

## Source-backed facts

- Claim: `From the Void` appears in the Neurrone Dawncaster SQLite card table with id `856131`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Return all Corruptions from your discard pile to your hand. Charges (3/3).

## Raw rules HTML

```html
Return all Corruptions from your discard pile to your hand. Charges (3/3).
```

## Observed keyword / token leads

`Charges`, `Corruptions`, `Return`
