---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 338628
  name: "Ire of Serem-Pek"
  ordinal: 896
  slug: "ire-of-serem-pek"
  category: "Enchantment"
  type: "Utility"
  rarity: "Common"
  expansion: "None"
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
  blood: 0
observed_terms:
  - "Combat"
  - "Gain Doom"
  - "HEALTH"
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
    url: "https://blightbane.io/card/Ire_of_Serem-Pek"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Ire of Serem-Pek

## Card identity

- **Ordinal:** 896 of 1692 generated cards
- **Source card id:** `338628`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** None
- **Color:** Black
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Ire of Serem-Pek` appears in the Neurrone Dawncaster SQLite card table with id `338628`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Start of Combat: Gain Doom equal to your current HEALTH. Unique.

## Raw rules HTML

```html
Start of Combat: Gain Doom equal to your current HEALTH. Unique.
```

## Observed keyword / token leads

`Combat`, `Gain Doom`, `HEALTH`
