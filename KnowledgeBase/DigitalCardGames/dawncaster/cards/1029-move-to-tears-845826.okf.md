---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 845826
  name: "Move to Tears"
  ordinal: 1029
  slug: "move-to-tears"
  category: "Action"
  type: "Utility"
  rarity: "Rare"
  expansion: "Metamorphosis"
  color: "Green"
  cost:
  dex: 2
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Bleeding"
  - "other(status)Bleeding"
  - "Perform"
  - "Persistent"
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
    url: "https://blightbane.io/card/Move_to_Tears"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Move to Tears

## Card identity

- **Ordinal:** 1029 of 1692 generated cards
- **Source card id:** `845826`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Metamorphosis
- **Color:** Green
- **Cost summary:** dex=2

## Source-backed facts

- Claim: `Move to Tears` appears in the Neurrone Dawncaster SQLite card table with id `845826`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Perform equal to the foe's Bleeding ([[other(status)Bleeding]]). 
At the start of the turn, inflict 2 Bleeding. Persistent.

## Raw rules HTML

```html
Perform equal to the foe's Bleeding ([[other(status)Bleeding]]). <br>At the start of the turn, inflict 2 Bleeding. Persistent.
```

## Observed keyword / token leads

`Bleeding`, `other(status)Bleeding`, `Perform`, `Persistent`
