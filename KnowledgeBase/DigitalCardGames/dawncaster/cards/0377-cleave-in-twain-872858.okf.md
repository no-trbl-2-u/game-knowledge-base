---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 872858
  name: "Cleave in Twain"
  ordinal: 377
  slug: "cleave-in-twain"
  category: "Action"
  type: "Melee"
  rarity: "Legendary"
  expansion: "Core Extended"
  color: "Red"
  cost:
    dex: 0
    int: 0
    str: 4
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Grounded"
  - "Health"
  - "HEALTH"
  - "Set"
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
    url: "https://blightbane.io/card/Cleave_in_Twain"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Cleave in Twain

## Card identity

- **Ordinal:** 377 of 1692 generated cards
- **Source card id:** `872858`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Legendary
- **Expansion:** Core Extended
- **Color:** Red
- **Cost summary:** str=4

## Source-backed facts

- Claim: `Cleave in Twain` appears in the Neurrone Dawncaster SQLite card table with id `872858`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Set the enemy Health to half their current HEALTH. Grounded.

## Raw rules HTML

```html
Set the enemy Health to half their current HEALTH. Grounded.
```

## Observed keyword / token leads

`Grounded`, `Health`, `HEALTH`, `Set`
