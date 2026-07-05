---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 122522
  name: "Pirate Bank (Tides)"
  ordinal: 1092
  slug: "pirate-bank-tides"
  category: "Action"
  type: "Utility"
  rarity: "Legendary"
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
  - "GOLD"
  - "Increase"
  - "myGold/50"
  - "Persistent"
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
    url: "https://blightbane.io/card/Pirate_Bank_%28Tides%29"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Pirate Bank (Tides)

## Card identity

- **Ordinal:** 1092 of 1692 generated cards
- **Source card id:** `122522`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Eclypse
- **Color:** Green
- **Cost summary:** dex=3

## Source-backed facts

- Claim: `Pirate Bank (Tides)` appears in the Neurrone Dawncaster SQLite card table with id `122522`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal damage equal 
to |#[[tempValue+1]]*2#|% of your GOLD (|#[[myGold/50]]*[[tempValue+1]]#|).
Tidal: Increase this by 2%. Unique. Persistent.

## Raw rules HTML

```html
Deal damage equal <br>to |#[[tempValue+1]]*2#|% of your GOLD (|#[[myGold/50]]*[[tempValue+1]]#|).<br>Tidal: Increase this by 2%. Unique. Persistent.
```

## Observed keyword / token leads

`GOLD`, `Increase`, `myGold/50`, `Persistent`, `tempValue+1`, `Tidal`
