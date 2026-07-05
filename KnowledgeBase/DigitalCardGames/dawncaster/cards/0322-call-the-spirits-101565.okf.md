---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 101565
  name: "Call the Spirits"
  ordinal: 322
  slug: "call-the-spirits"
  category: "Action"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Infinitum"
  color: "Orange"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 1
observed_terms:
  - "DEX"
  - "Gain DEX"
  - "tempValue"
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
    url: "https://blightbane.io/card/Call_the_Spirits"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Call the Spirits

## Card identity

- **Ordinal:** 322 of 1692 generated cards
- **Source card id:** `101565`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Infinitum
- **Color:** Orange
- **Cost summary:** blood=1

## Source-backed facts

- Claim: `Call the Spirits` appears in the Neurrone Dawncaster SQLite card table with id `101565`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain DEX.
Gain additional DEX for each time you played this card this combat ([[tempValue]]).

## Raw rules HTML

```html
Gain DEX.<br>Gain additional DEX for each time you played this card this combat ([[tempValue]]).
```

## Observed keyword / token leads

`DEX`, `Gain DEX`, `tempValue`
