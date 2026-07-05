---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 973883
  name: "Ring of Power"
  ordinal: 1227
  slug: "ring-of-power"
  category: "Item"
  type: "Magic"
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
  - "Burning"
  - "damageBonus"
  - "Frozen"
  - "GOLD"
  - "HEALTH"
  - "myGold"
  - "Randomly"
  - "Repeat"
  - "Upgradeable"
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
    url: "https://blightbane.io/card/Ring_of_Power"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Ring of Power

## Card identity

- **Ordinal:** 1227 of 1692 generated cards
- **Source card id:** `973883`
- **Category:** Item
- **Type:** Magic
- **Rarity:** Legendary
- **Expansion:** Core Extended
- **Color:** Brown
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Ring of Power` appears in the Neurrone Dawncaster SQLite card table with id `973883`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Randomly deal [damage:5] damage, inflict |#5+[[damageBonus]]#| Burning or Frozen or gain |#5+[[damageBonus]]#| HEALTH. Repeat for every 200 GOLD you own ([[myGold]]). Upgradeable.

## Raw rules HTML

```html
Randomly deal [damage:5] damage, inflict |#5+[[damageBonus]]#| Burning or Frozen or gain |#5+[[damageBonus]]#| HEALTH. Repeat for every 200 GOLD you own ([[myGold]]). Upgradeable.
```

## Observed keyword / token leads

`Burning`, `damageBonus`, `Frozen`, `GOLD`, `HEALTH`, `myGold`, `Randomly`, `Repeat`, `Upgradeable`
