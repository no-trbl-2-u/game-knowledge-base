---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 695118
  name: "Shield of Faith"
  ordinal: 1338
  slug: "shield-of-faith"
  category: "Action"
  type: "Divine"
  rarity: "Common"
  expansion: "Core"
  color: "Gold"
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
  - "Armor"
  - "Gain HOLY"
  - "On Draw"
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
    url: "https://blightbane.io/card/Shield_of_Faith"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Shield of Faith

## Card identity

- **Ordinal:** 1338 of 1692 generated cards
- **Source card id:** `695118`
- **Category:** Action
- **Type:** Divine
- **Rarity:** Common
- **Expansion:** Core
- **Color:** Gold
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Shield of Faith` appears in the Neurrone Dawncaster SQLite card table with id `695118`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain HOLY.
On Draw: Gain 6 Armor

## Raw rules HTML

```html
Gain HOLY.<br>On Draw: Gain 6 Armor
```

## Observed keyword / token leads

`Armor`, `Gain HOLY`, `On Draw`
