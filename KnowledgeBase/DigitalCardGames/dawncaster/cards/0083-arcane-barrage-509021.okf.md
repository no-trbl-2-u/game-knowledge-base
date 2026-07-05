---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 509021
  name: "Arcane Barrage"
  ordinal: 83
  slug: "arcane-barrage"
  category: "Action"
  type: "Magic"
  rarity: "Common"
  expansion: "Catalyst"
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
  - "(cardvalue)"
  - "Arcane Barrage"
  - "Mergecraft"
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
    url: "https://blightbane.io/card/Arcane_Barrage"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Arcane Barrage

## Card identity

- **Ordinal:** 83 of 1692 generated cards
- **Source card id:** `509021`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Common
- **Expansion:** Catalyst
- **Color:** Blue
- **Cost summary:** int=1

## Source-backed facts

- Claim: `Arcane Barrage` appears in the Neurrone Dawncaster SQLite card table with id `509021`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:1] damage.
Repeat for each Arcane Barrage you've played this combat ([[(cardvalue)]]). Mergecraft 1.

## Raw rules HTML

```html
Deal [damage:1] damage.<br>Repeat for each Arcane Barrage you've played this combat ([[(cardvalue)]]). Mergecraft 1.
```

## Observed keyword / token leads

`(cardvalue)`, `Arcane Barrage`, `Mergecraft`, `Repeat`
