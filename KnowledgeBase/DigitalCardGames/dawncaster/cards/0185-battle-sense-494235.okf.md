---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 494235
  name: "Battle Sense"
  ordinal: 185
  slug: "battle-sense"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Metamorphosis"
  color: "Red"
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
  - "Armor"
  - "Foretell"
  - "foretell+3"
  - "my(status)Armor"
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
    url: "https://blightbane.io/card/Battle_Sense"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Battle Sense

## Card identity

- **Ordinal:** 185 of first 500 generated cards
- **Source card id:** `494235`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Metamorphosis
- **Color:** Red
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Battle Sense` appears in the Neurrone Dawncaster SQLite card table with id `494235`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Foretell [[foretell+3]].
Draw a card and take 3 damage. This damage is reduced by your Armor ([[my(status)Armor]]).

## Raw rules HTML

```html
Foretell [[foretell+3]].<br>Draw a card and take 3 damage. This damage is reduced by your Armor ([[my(status)Armor]]).
```

## Observed keyword / token leads

`Armor`, `Foretell`, `foretell+3`, `my(status)Armor`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
