---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 217158
  name: "Ghostcleave"
  ordinal: 731
  slug: "ghostcleave"
  category: "Action"
  type: "Melee"
  rarity: "Common"
  expansion: "Infinitum"
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
  - "Critical Hit"
  - "Lifedrain"
  - "permaValue"
  - "Rebound"
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
    url: "https://blightbane.io/card/Ghostcleave"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Ghostcleave

## Card identity

- **Ordinal:** 731 of 1692 generated cards
- **Source card id:** `217158`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Common
- **Expansion:** Infinitum
- **Color:** Orange
- **Cost summary:** dexstr=1

## Source-backed facts

- Claim: `Ghostcleave` appears in the Neurrone Dawncaster SQLite card table with id `217158`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:3] damage. 
Rebound ([[permaValue]]/3):
Lifedrain and Critical Hit.

## Raw rules HTML

```html
Deal [damage:3] damage. <br>Rebound ([[permaValue]]/3):<br>Lifedrain and Critical Hit.
```

## Observed keyword / token leads

`Critical Hit`, `Lifedrain`, `permaValue`, `Rebound`
