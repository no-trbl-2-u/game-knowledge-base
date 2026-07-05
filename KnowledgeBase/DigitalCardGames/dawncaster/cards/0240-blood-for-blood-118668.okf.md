---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 118668
  name: "Blood for Blood"
  ordinal: 240
  slug: "blood-for-blood"
  category: "Action"
  type: "Melee"
  rarity: "Uncommon"
  expansion: "Core"
  color: "Red"
  cost:
    dex: 0
    int: 0
    str: 1
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Bleeding"
  - "Blood"
  - "Charges"
  - "Convert"
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
    url: "https://blightbane.io/card/Blood_for_Blood"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Blood for Blood

## Card identity

- **Ordinal:** 240 of 1692 generated cards
- **Source card id:** `118668`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Uncommon
- **Expansion:** Core
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Blood for Blood` appears in the Neurrone Dawncaster SQLite card table with id `118668`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Draw a card.
Convert its cost to Blood and inflict Bleeding equal to its cost. Charges (3/3).

## Raw rules HTML

```html
Draw a card.<br>Convert its cost to Blood and inflict Bleeding equal to its cost. Charges (3/3).
```

## Observed keyword / token leads

`Bleeding`, `Blood`, `Charges`, `Convert`
