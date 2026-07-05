---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 109886
  name: "Favor of the Gods"
  ordinal: 638
  slug: "favor-of-the-gods"
  category: "Action"
  type: "Divine"
  rarity: "Common"
  expansion: "Core"
  color: "Purple"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Blessing"
  - "HOLY"
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
    url: "https://blightbane.io/card/Favor_of_the_Gods"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Favor of the Gods

## Card identity

- **Ordinal:** 638 of 1692 generated cards
- **Source card id:** `109886`
- **Category:** Action
- **Type:** Divine
- **Rarity:** Common
- **Expansion:** Core
- **Color:** Purple
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Favor of the Gods` appears in the Neurrone Dawncaster SQLite card table with id `109886`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain a random Blessing for each HOLY energy you have.

## Raw rules HTML

```html
Gain a random Blessing for each HOLY energy you have.
```

## Observed keyword / token leads

`Blessing`, `HOLY`
