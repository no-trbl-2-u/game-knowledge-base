---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 576855
  name: "Song of Slaughter"
  ordinal: 1394
  slug: "song-of-slaughter"
  category: "Performance"
  type: "Utility"
  rarity: "Rare"
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
  - "Piercing"
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
    url: "https://blightbane.io/card/Song_of_Slaughter"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Song of Slaughter

## Card identity

- **Ordinal:** 1394 of 1692 generated cards
- **Source card id:** `576855`
- **Category:** Performance
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** None
- **Color:** None
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Song of Slaughter` appears in the Neurrone Dawncaster SQLite card table with id `576855`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

After 6 Performances, 
deal 7 damage per level (|#[[myLevel]]*7#|). Piercing.

## Raw rules HTML

```html
After 6 Performances, <br>deal 7 damage per level (|#[[myLevel]]*7#|). Piercing.
```

## Observed keyword / token leads

`After`, `myLevel`, `Performances`, `Piercing`
