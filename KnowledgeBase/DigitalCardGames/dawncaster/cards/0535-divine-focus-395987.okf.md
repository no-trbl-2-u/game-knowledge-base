---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 395987
  name: "Divine Focus"
  ordinal: 535
  slug: "divine-focus"
  category: "Item"
  type: "Divine"
  rarity: "Legendary"
  expansion: "Infinitum"
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
  - "Gain HOLY"
  - "Holy Cards"
  - "While"
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
    url: "https://blightbane.io/card/Divine_Focus"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Divine Focus

## Card identity

- **Ordinal:** 535 of 1692 generated cards
- **Source card id:** `395987`
- **Category:** Item
- **Type:** Divine
- **Rarity:** Legendary
- **Expansion:** Infinitum
- **Color:** Purple
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Divine Focus` appears in the Neurrone Dawncaster SQLite card table with id `395987`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain HOLY.
While this is in your
deck, you have access
to Holy Cards.

## Raw rules HTML

```html
Gain HOLY.<br>While this is in your<br>deck, you have access<br>to Holy Cards.
```

## Observed keyword / token leads

`Gain HOLY`, `Holy Cards`, `While`
