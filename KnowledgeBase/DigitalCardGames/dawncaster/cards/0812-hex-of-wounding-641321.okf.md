---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 641321
  name: "Hex of Wounding"
  ordinal: 812
  slug: "hex-of-wounding"
  category: "Enchantment"
  type: "Corruption"
  rarity: "Common"
  expansion: "None"
  color: "Brown"
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
  - "Bleeding"
  - "Hexes"
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
    url: "https://blightbane.io/card/Hex_of_Wounding"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Hex of Wounding

## Card identity

- **Ordinal:** 812 of 1692 generated cards
- **Source card id:** `641321`
- **Category:** Enchantment
- **Type:** Corruption
- **Rarity:** Common
- **Expansion:** None
- **Color:** Brown
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Hex of Wounding` appears in the Neurrone Dawncaster SQLite card table with id `641321`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Start of turn:
Gain 1 Bleeding for each of your Hexes. Unique.

## Raw rules HTML

```html
Start of turn:<br>Gain 1 Bleeding for each of your Hexes. Unique.
```

## Observed keyword / token leads

`Bleeding`, `Hexes`
