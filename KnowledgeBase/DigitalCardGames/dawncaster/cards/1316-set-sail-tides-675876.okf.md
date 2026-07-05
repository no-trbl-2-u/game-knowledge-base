---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 675876
  name: "Set Sail (Tides)"
  ordinal: 1316
  slug: "set-sail-tides"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Eclypse"
  color: "Green"
  cost:
    dex: 3
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Add"
  - "Gain DEX"
  - "Persistent"
  - "s"
  - "tempValue+1"
  - "Tidal"
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
    url: "https://blightbane.io/card/Set_Sail_%28Tides%29"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Set Sail (Tides)

## Card identity

- **Ordinal:** 1316 of 1692 generated cards
- **Source card id:** `675876`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Eclypse
- **Color:** Green
- **Cost summary:** dex=3

## Source-backed facts

- Claim: `Set Sail (Tides)` appears in the Neurrone Dawncaster SQLite card table with id `675876`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Draw [[tempValue+1]] card[[s]]. 
Gain DEX for each card drawn this way. Tidal: Add an extra card to draw. Persistent.

## Raw rules HTML

```html
Draw [[tempValue+1]] card[[s]]. <br>Gain DEX for each card drawn this way. Tidal: Add an extra card to draw. Persistent.
```

## Observed keyword / token leads

`Add`, `Gain DEX`, `Persistent`, `s`, `tempValue+1`, `Tidal`
