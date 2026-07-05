---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 201171
  name: "Winter Harvest"
  ordinal: 1674
  slug: "winter-harvest"
  category: "Action"
  type: "Magic"
  rarity: "Rare"
  expansion: "Core Extended"
  color: "Blue"
  cost:
    dex: 0
    int: 2
    str: 0
    holy: 0
    neutral: 1
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Critical Hit"
  - "Deals"
  - "Frozen"
  - "other(status)Frozen"
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
    url: "https://blightbane.io/card/Winter_Harvest"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Winter Harvest

## Card identity

- **Ordinal:** 1674 of 1692 generated cards
- **Source card id:** `201171`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Rare
- **Expansion:** Core Extended
- **Color:** Blue
- **Cost summary:** int=2, neutral=1

## Source-backed facts

- Claim: `Winter Harvest` appears in the Neurrone Dawncaster SQLite card table with id `201171`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:5] damage.
Deals additional damage equal to the foe's Frozen ([[other(status)Frozen]]). Critical Hit if the target is Frozen.

## Raw rules HTML

```html
Deal [damage:5] damage.<br>Deals additional damage equal to the foe's Frozen ([[other(status)Frozen]]). Critical Hit if the target is Frozen.
```

## Observed keyword / token leads

`Critical Hit`, `Deals`, `Frozen`, `other(status)Frozen`
