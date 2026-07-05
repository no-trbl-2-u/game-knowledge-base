---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 200640
  name: "Melee Mastery"
  ordinal: 1011
  slug: "melee-mastery"
  category: "Action"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Synthesis"
  color: "Red"
  cost:
  dex: 0
  int: 0
  str: 1
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Basic Attack"
  - "Choose"
  - "Melee Action"
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
    url: "https://blightbane.io/card/Melee_Mastery"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Melee Mastery

## Card identity

- **Ordinal:** 1011 of 1692 generated cards
- **Source card id:** `200640`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Synthesis
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Melee Mastery` appears in the Neurrone Dawncaster SQLite card table with id `200640`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Choose a Melee Action from your deck. This turn, whenever you make a Basic Attack play a copy of the chosen card instead.

## Raw rules HTML

```html
Choose a Melee Action from your deck. This turn, whenever you make a Basic Attack play a copy of the chosen card instead.
```

## Observed keyword / token leads

`Basic Attack`, `Choose`, `Melee Action`
