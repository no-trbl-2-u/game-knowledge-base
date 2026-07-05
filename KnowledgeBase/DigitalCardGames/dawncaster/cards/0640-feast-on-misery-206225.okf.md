---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 206225
  name: "Feast on Misery"
  ordinal: 640
  slug: "feast-on-misery"
  category: "Action"
  type: "Utility"
  rarity: "Rare"
  expansion: "Infinitum"
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
  - "Add"
  - "Afflictions"
  - "Corrupted"
  - "Forbidden Fruit"
  - "hexes"
  - "Hexes"
  - "otherAfflictions"
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
    url: "https://blightbane.io/card/Feast_on_Misery"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Feast on Misery

## Card identity

- **Ordinal:** 640 of 1692 generated cards
- **Source card id:** `206225`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Infinitum
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Feast on Misery` appears in the Neurrone Dawncaster SQLite card table with id `206225`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Add a Forbidden Fruit to your deck. Corrupted: Draw a card for each of your foe's Afflictions and Hexes (|#[[otherAfflictions]]+[[hexes]]#|). Unique.

## Raw rules HTML

```html
Add a Forbidden Fruit to your deck. Corrupted: Draw a card for each of your foe's Afflictions and Hexes (|#[[otherAfflictions]]+[[hexes]]#|). Unique.
```

## Observed keyword / token leads

`Add`, `Afflictions`, `Corrupted`, `Forbidden Fruit`, `hexes`, `Hexes`, `otherAfflictions`
