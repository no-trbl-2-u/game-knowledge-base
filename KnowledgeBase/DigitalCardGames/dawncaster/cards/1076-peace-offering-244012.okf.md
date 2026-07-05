---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 244012
  name: "Peace Offering"
  ordinal: 1076
  slug: "peace-offering"
  category: "Action"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Catalyst"
  color: "Purple"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 1
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Charmed"
  - "Inflict"
  - "Magic"
  - "Melee"
  - "Ranged"
  - "Repeat"
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
    url: "https://blightbane.io/card/Peace_Offering"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Peace Offering

## Card identity

- **Ordinal:** 1076 of 1692 generated cards
- **Source card id:** `244012`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Catalyst
- **Color:** Purple
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Peace Offering` appears in the Neurrone Dawncaster SQLite card table with id `244012`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Inflict 4 Charmed.
Repeat for each color energy you have. This round, you and your foe can't play Melee, Magic or Ranged actions. Unique.

## Raw rules HTML

```html
Inflict 4 Charmed.<br>Repeat for each color energy you have. This round, you and your foe can't play Melee, Magic or Ranged actions. Unique.
```

## Observed keyword / token leads

`Charmed`, `Inflict`, `Magic`, `Melee`, `Ranged`, `Repeat`
