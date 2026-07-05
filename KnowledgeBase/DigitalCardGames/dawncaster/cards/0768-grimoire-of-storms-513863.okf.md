---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 513863
  name: "Grimoire of Storms"
  ordinal: 768
  slug: "grimoire-of-storms"
  category: "Equipment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Eclypse"
  color: "Black"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 3
observed_terms:
  - "Activate"
  - "Deplete"
  - "Durability"
  - "Gain Amp"
  - "Lightning Action"
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
    url: "https://blightbane.io/card/Grimoire_of_Storms"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Grimoire of Storms

## Card identity

- **Ordinal:** 768 of 1692 generated cards
- **Source card id:** `513863`
- **Category:** Equipment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Eclypse
- **Color:** Black
- **Cost summary:** blood=3

## Source-backed facts

- Claim: `Grimoire of Storms` appears in the Neurrone Dawncaster SQLite card table with id `513863`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Activate to delve a Lightning Action and play it. Deplete: Gain Amp Up. Durability (3/3). Unique.

## Raw rules HTML

```html
Activate to delve a Lightning Action and play it. Deplete: Gain Amp Up. Durability (3/3). Unique.
```

## Observed keyword / token leads

`Activate`, `Deplete`, `Durability`, `Gain Amp`, `Lightning Action`
