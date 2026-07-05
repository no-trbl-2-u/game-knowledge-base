---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 98955
  name: "Oath of Blood"
  ordinal: 1043
  slug: "oath-of-blood"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Eclypse"
  color: "Red"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 1
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Anger"
  - "If HOLY"
  - "Oathbound"
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
    url: "https://blightbane.io/card/Oath_of_Blood"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Oath of Blood

## Card identity

- **Ordinal:** 1043 of 1692 generated cards
- **Source card id:** `98955`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Eclypse
- **Color:** Red
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Oath of Blood` appears in the Neurrone Dawncaster SQLite card table with id `98955`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain 3 Anger.
If HOLY was spent, gain Oathbound.

## Raw rules HTML

```html
Gain 3 Anger.<br>If HOLY was spent, gain Oathbound.
```

## Observed keyword / token leads

`Anger`, `If HOLY`, `Oathbound`
