---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 720126
  name: "Form of the Dragon"
  ordinal: 701
  slug: "form-of-the-dragon"
  category: "Form"
  type: "Utility"
  rarity: "Legendary"
  expansion: "None"
  color: "Aqua"
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
  - "Channel"
  - "Cleanse"
  - "Gain INT"
  - "Turn"
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
    url: "https://blightbane.io/card/Form_of_the_Dragon"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Form of the Dragon

## Card identity

- **Ordinal:** 701 of 1692 generated cards
- **Source card id:** `720126`
- **Category:** Form
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** None
- **Color:** Aqua
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Form of the Dragon` appears in the Neurrone Dawncaster SQLite card table with id `720126`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Whenever you discard a card, Cleanse an affliction. Start of Turn: Gain INT. Channel.

## Raw rules HTML

```html
Whenever you discard a card, Cleanse an affliction. Start of Turn: Gain INT. Channel.
```

## Observed keyword / token leads

`Channel`, `Cleanse`, `Gain INT`, `Turn`
