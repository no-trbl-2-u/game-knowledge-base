---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 41020035
  name: "Chromatic Breath"
  ordinal: 365
  slug: "chromatic-breath"
  category: "Action"
  type: "Magic"
  rarity: "Common"
  expansion: "Core Extended"
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
  - "Attunement"
  - "difficultyBonus+3"
  - "Has"
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
    url: "https://blightbane.io/card/Chromatic_Breath"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Chromatic Breath

## Card identity

- **Ordinal:** 365 of 1692 generated cards
- **Source card id:** `41020035`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Common
- **Expansion:** Core Extended
- **Color:** Blue
- **Cost summary:** int=1

## Source-backed facts

- Claim: `Chromatic Breath` appears in the Neurrone Dawncaster SQLite card table with id `41020035`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:[[difficultyBonus+3]]] damage. Has an additional effect based on your Attunement.

## Raw rules HTML

```html
Deal [damage:[[difficultyBonus+3]]] damage. Has an additional effect based on your Attunement.
```

## Observed keyword / token leads

`Attunement`, `difficultyBonus+3`, `Has`
