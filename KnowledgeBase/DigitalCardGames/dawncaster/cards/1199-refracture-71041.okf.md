---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 71041
  name: "Refracture"
  ordinal: 1199
  slug: "refracture"
  category: "Action"
  type: "Divine"
  rarity: "Common"
  expansion: "Catalyst"
  color: "Purple"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 1
    blood: 0
observed_terms:
  - "Repeat"
  - "typesOfEnergy"
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
    url: "https://blightbane.io/card/Refracture"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Refracture

## Card identity

- **Ordinal:** 1199 of 1692 generated cards
- **Source card id:** `71041`
- **Category:** Action
- **Type:** Divine
- **Rarity:** Common
- **Expansion:** Catalyst
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Refracture` appears in the Neurrone Dawncaster SQLite card table with id `71041`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:4] damage.
Repeat for every type of energy you have ([[typesOfEnergy]]).

## Raw rules HTML

```html
Deal [damage:4] damage.<br>Repeat for every type of energy you have ([[typesOfEnergy]]).
```

## Observed keyword / token leads

`Repeat`, `typesOfEnergy`
