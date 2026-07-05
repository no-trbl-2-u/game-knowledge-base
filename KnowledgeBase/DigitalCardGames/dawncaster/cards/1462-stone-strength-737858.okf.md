---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 737858
  name: "Stone Strength"
  ordinal: 1462
  slug: "stone-strength"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Catalyst"
  color: "Red"
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
  - "Anger"
  - "Return"
  - "Stance"
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
    url: "https://blightbane.io/card/Stone_Strength"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Stone Strength

## Card identity

- **Ordinal:** 1462 of 1692 generated cards
- **Source card id:** `737858`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Catalyst
- **Color:** Red
- **Cost summary:** blood=1

## Source-backed facts

- Claim: `Stone Strength` appears in the Neurrone Dawncaster SQLite card table with id `737858`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain 2 Anger.
Return this to your hand after entering a Stance.

## Raw rules HTML

```html
Gain 2 Anger.<br>Return this to your hand after entering a Stance.
```

## Observed keyword / token leads

`Anger`, `Return`, `Stance`
