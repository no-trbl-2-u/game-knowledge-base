---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 370469
  name: "Test Subject"
  ordinal: 1531
  slug: "test-subject"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Eclypse"
  color: "Blue"
  cost:
    dex: 0
    int: 1
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "damageBonus+1"
  - "Inflict"
  - "Upgradeable"
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
    url: "https://blightbane.io/card/Test_Subject"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Test Subject

## Card identity

- **Ordinal:** 1531 of 1692 generated cards
- **Source card id:** `370469`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Eclypse
- **Color:** Blue
- **Cost summary:** int=1

## Source-backed facts

- Claim: `Test Subject` appears in the Neurrone Dawncaster SQLite card table with id `370469`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Inflict 1 to [[damageBonus+1]] random afflictions with 1 to [[damageBonus+1]] stacks. When this is transformed, add a copy to your deck and upgrade it by 1. Upgradeable.

## Raw rules HTML

```html
Inflict 1 to [[damageBonus+1]] random afflictions with 1 to [[damageBonus+1]] stacks. When this is transformed, add a copy to your deck and upgrade it by 1. Upgradeable.
```

## Observed keyword / token leads

`damageBonus+1`, `Inflict`, `Upgradeable`
