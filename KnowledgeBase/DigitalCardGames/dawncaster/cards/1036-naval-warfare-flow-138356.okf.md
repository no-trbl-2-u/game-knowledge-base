---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 138356
  name: "Naval Warfare (Flow)"
  ordinal: 1036
  slug: "naval-warfare-flow"
  category: "Action"
  type: "Ranged"
  rarity: "Common"
  expansion: "Eclypse"
  color: "Green"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 3
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "NEUTRAL"
  - "Persistent"
  - "tempValue+10"
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
    url: "https://blightbane.io/card/Naval_Warfare_%28Flow%29"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Naval Warfare (Flow)

## Card identity

- **Ordinal:** 1036 of 1692 generated cards
- **Source card id:** `138356`
- **Category:** Action
- **Type:** Ranged
- **Rarity:** Common
- **Expansion:** Eclypse
- **Color:** Green
- **Cost summary:** neutral=3

## Source-backed facts

- Claim: `Naval Warfare (Flow)` appears in the Neurrone Dawncaster SQLite card table with id `138356`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:[[tempValue+10]]] damage.
Whenever you play a Tidal card, reduce this cost by NEUTRAL and add 10 damage. Persistent.

## Raw rules HTML

```html
Deal [damage:[[tempValue+10]]] damage.
Whenever you play a Tidal card, reduce this cost by NEUTRAL and add 10 damage. Persistent.
```

## Observed keyword / token leads

`NEUTRAL`, `Persistent`, `tempValue+10`, `Tidal`
