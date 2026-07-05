---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 34038
  name: "Song of Prime"
  ordinal: 1391
  slug: "song-of-prime"
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
  - "HEALTH"
  - "Performances"
  - "Restore"
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
    url: "https://blightbane.io/card/Song_of_Prime"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Song of Prime

## Card identity

- **Ordinal:** 1391 of 1692 generated cards
- **Source card id:** `34038`
- **Category:** Performance
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** None
- **Color:** None
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Song of Prime` appears in the Neurrone Dawncaster SQLite card table with id `34038`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

After 4 Performances, 
Restore 10% of your HEALTH.

## Raw rules HTML

```html
After 4 Performances, <br>Restore 10% of your HEALTH.
```

## Observed keyword / token leads

`After`, `HEALTH`, `Performances`, `Restore`
