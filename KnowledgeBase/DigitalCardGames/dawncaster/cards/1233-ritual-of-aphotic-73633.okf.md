---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 73633
  name: "Ritual of Aphotic"
  ordinal: 1233
  slug: "ritual-of-aphotic"
  category: "Performance"
  type: "Utility"
  rarity: "Common"
  expansion: "None"
  color: "Orange"
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
  - "Add"
  - "After"
  - "myLevel/2"
  - "Performances"
  - "Poison"
  - "Potency"
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
    url: "https://blightbane.io/card/Ritual_of_Aphotic"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Ritual of Aphotic

## Card identity

- **Ordinal:** 1233 of 1692 generated cards
- **Source card id:** `73633`
- **Category:** Performance
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** None
- **Color:** Orange
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Ritual of Aphotic` appears in the Neurrone Dawncaster SQLite card table with id `73633`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

After 2 Performances,
inflict |#3+[[myLevel/2]]#| Poison and gain |#1+[[myLevel/2]]#| Potency. Add 1 to both for every 2 levels ([[myLevel/2]])

## Raw rules HTML

```html
After 2 Performances,<br>inflict |#3+[[myLevel/2]]#| Poison and gain |#1+[[myLevel/2]]#| Potency. Add 1 to both for every 2 levels ([[myLevel/2]])
```

## Observed keyword / token leads

`Add`, `After`, `myLevel/2`, `Performances`, `Poison`, `Potency`
