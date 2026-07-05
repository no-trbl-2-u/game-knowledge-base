---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 714950
  name: "Gift of Nature"
  ordinal: 732
  slug: "gift-of-nature"
  category: "Item"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Core Extended"
  color: "Brown"
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
  - "Heal"
  - "HEALTH"
  - "Monster Cards"
  - "One Use"
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
    url: "https://blightbane.io/card/Gift_of_Nature"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Gift of Nature

## Card identity

- **Ordinal:** 732 of 1692 generated cards
- **Source card id:** `714950`
- **Category:** Item
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Core Extended
- **Color:** Brown
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Gift of Nature` appears in the Neurrone Dawncaster SQLite card table with id `714950`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

One Use: Heal 5 HEALTH.
While this card is in your deck, Monster Cards can appear in combat rewards.

## Raw rules HTML

```html
One Use: Heal 5 HEALTH.
While this card is in your deck, Monster Cards can appear in combat rewards.
```

## Observed keyword / token leads

`Heal`, `HEALTH`, `Monster Cards`, `One Use`, `While`
