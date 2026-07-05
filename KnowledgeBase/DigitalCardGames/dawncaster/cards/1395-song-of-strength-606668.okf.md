---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 606668
  name: "Song of Strength"
  ordinal: 1395
  slug: "song-of-strength"
  category: "Performance"
  type: "Utility"
  rarity: "Legendary"
  expansion: "None"
  color: "None"
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
  - "After"
  - "myLevel"
  - "Performances"
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
    url: "https://blightbane.io/card/Song_of_Strength"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Song of Strength

## Card identity

- **Ordinal:** 1395 of 1692 generated cards
- **Source card id:** `606668`
- **Category:** Performance
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** None
- **Color:** None
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Song of Strength` appears in the Neurrone Dawncaster SQLite card table with id `606668`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

After 4 Performances, 
deal 10 damage per level (|#[[myLevel]]*10#|).

## Raw rules HTML

```html
After 4 Performances, <br>deal 10 damage per level (|#[[myLevel]]*10#|).
```

## Observed keyword / token leads

`After`, `myLevel`, `Performances`
