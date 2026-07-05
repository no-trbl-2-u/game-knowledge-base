---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 996896
  name: "Ancient Stirrings"
  ordinal: 55
  slug: "ancient-stirrings"
  category: "Action"
  type: "Utility"
  rarity: "Rare"
  expansion: "Metamorphosis"
  color: "Aqua"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 2
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Dragon"
  - "Form"
  - "Shift"
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
    url: "https://blightbane.io/card/Ancient_Stirrings"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Ancient Stirrings

## Card identity

- **Ordinal:** 55 of first 500 generated cards
- **Source card id:** `996896`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Metamorphosis
- **Color:** Aqua
- **Cost summary:** dexint=2

## Source-backed facts

- Claim: `Ancient Stirrings` appears in the Neurrone Dawncaster SQLite card table with id `996896`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Discard all cards in hand.
Shift into Form of the Dragon.
If you were in Form of the Dragon already, draw 5 cards.

## Raw rules HTML

```html
Discard all cards in hand.<br>Shift into Form of the Dragon.<br>If you were in Form of the Dragon already, draw 5 cards.
```

## Observed keyword / token leads

`Dragon`, `Form`, `Shift`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
