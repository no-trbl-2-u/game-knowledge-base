---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 256754
  name: "Adrenaline Rush"
  ordinal: 20
  slug: "adrenaline-rush"
  category: "Action"
  type: "Utility"
  rarity: "Rare"
  expansion: "Metaprogress"
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
  - "Charges"
  - "DEX"
  - "Finale"
  - "Gain DEX"
  - "Performance"
  - "performanceStacks"
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
    url: "https://blightbane.io/card/Adrenaline_Rush"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Adrenaline Rush

## Card identity

- **Ordinal:** 20 of 1692 generated cards
- **Source card id:** `256754`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Metaprogress
- **Color:** Green
- **Cost summary:** dex=1

## Source-backed facts

- Claim: `Adrenaline Rush` appears in the Neurrone Dawncaster SQLite card table with id `256754`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain DEX equal to your current Performance ([[performanceStacks]]). 
Finale: Draw cards equal your DEX. Charges (1/1).

## Raw rules HTML

```html
Gain DEX equal to your current Performance ([[performanceStacks]]). <br>Finale: Draw cards equal your DEX. Charges (1/1).
```

## Observed keyword / token leads

`Charges`, `DEX`, `Finale`, `Gain DEX`, `Performance`, `performanceStacks`
