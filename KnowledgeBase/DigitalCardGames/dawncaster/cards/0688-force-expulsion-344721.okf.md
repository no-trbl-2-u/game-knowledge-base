---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 344721
  name: "Force Expulsion"
  ordinal: 688
  slug: "force-expulsion"
  category: "Action"
  type: "Magic"
  rarity: "Rare"
  expansion: "Metamorphosis"
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
  - "Barrier"
  - "Shocked"
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
    url: "https://blightbane.io/card/Force_Expulsion"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Force Expulsion

## Card identity

- **Ordinal:** 688 of 1692 generated cards
- **Source card id:** `344721`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Rare
- **Expansion:** Metamorphosis
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Force Expulsion` appears in the Neurrone Dawncaster SQLite card table with id `344721`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal damage equal to twice your Barrier, then remove all Barrier. If this dealt 10 or more damage, inflict 2 Shocked.

## Raw rules HTML

```html
Deal damage equal to twice your Barrier, then remove all Barrier. If this dealt 10 or more damage, inflict 2 Shocked.
```

## Observed keyword / token leads

`Barrier`, `Shocked`
