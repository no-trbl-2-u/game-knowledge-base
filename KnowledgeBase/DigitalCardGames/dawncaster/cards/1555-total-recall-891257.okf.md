---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 891257
  name: "Total Recall"
  ordinal: 1555
  slug: "total-recall"
  category: "Action"
  type: "Utility"
  rarity: "Legendary"
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
  - "differentCards"
  - "Experience"
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
    url: "https://blightbane.io/card/Total_Recall"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Total Recall

## Card identity

- **Ordinal:** 1555 of 1692 generated cards
- **Source card id:** `891257`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Catalyst
- **Color:** Orange
- **Cost summary:** dexstr=1

## Source-backed facts

- Claim: `Total Recall` appears in the Neurrone Dawncaster SQLite card table with id `891257`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

If your foe dies this turn, it grants +2% Experience for every different card in your deck ([[differentCards]]). Unique.

## Raw rules HTML

```html
If your foe dies this turn, it grants +2% Experience for every different card in your deck ([[differentCards]]). Unique.
```

## Observed keyword / token leads

`differentCards`, `Experience`
