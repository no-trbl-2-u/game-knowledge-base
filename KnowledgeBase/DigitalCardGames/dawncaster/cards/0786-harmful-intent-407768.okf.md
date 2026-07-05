---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 407768
  name: "Harmful Intent"
  ordinal: 786
  slug: "harmful-intent"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Infinitum"
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
  - "Add"
  - "Ambush"
  - "Snares"
  - "Upgrade"
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
    url: "https://blightbane.io/card/Harmful_Intent"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Harmful Intent

## Card identity

- **Ordinal:** 786 of 1692 generated cards
- **Source card id:** `407768`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Infinitum
- **Color:** Green
- **Cost summary:** dex=1

## Source-backed facts

- Claim: `Harmful Intent` appears in the Neurrone Dawncaster SQLite card table with id `407768`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Add 2 Snares to the foe's deck. Ambush: Upgrade all Snares by 4.

## Raw rules HTML

```html
Add 2 Snares to the foe's deck. Ambush: Upgrade all Snares by 4.
```

## Observed keyword / token leads

`Add`, `Ambush`, `Snares`, `Upgrade`
