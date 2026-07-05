---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 126459
  name: "Battle Broth"
  ordinal: 180
  slug: "battle-broth"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Eclypse"
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
  - "Charges"
  - "Create"
  - "Ingredient"
  - "Stance"
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
    url: "https://blightbane.io/card/Battle_Broth"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Battle Broth

## Card identity

- **Ordinal:** 180 of first 500 generated cards
- **Source card id:** `126459`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Eclypse
- **Color:** Red
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Battle Broth` appears in the Neurrone Dawncaster SQLite card table with id `126459`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Create an Ingredient.
Whenever you enter a Stance, return this to hand. Charges (5/5).

## Raw rules HTML

```html
Create an Ingredient.<br>Whenever you enter a Stance, return this to hand. Charges (5/5).
```

## Observed keyword / token leads

`Charges`, `Create`, `Ingredient`, `Stance`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
