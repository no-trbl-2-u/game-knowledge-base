---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 522498
  name: "Halo of Conviction"
  ordinal: 780
  slug: "halo-of-conviction"
  category: "Enchantment"
  type: "Divine"
  rarity: "Common"
  expansion: "Infinitum"
  color: "Purple"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 1
    blood: 0
observed_terms:
  - "Memorized"
  - "Zeal"
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
    url: "https://blightbane.io/card/Halo_of_Conviction"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Halo of Conviction

## Card identity

- **Ordinal:** 780 of 1692 generated cards
- **Source card id:** `522498`
- **Category:** Enchantment
- **Type:** Divine
- **Rarity:** Common
- **Expansion:** Infinitum
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Halo of Conviction` appears in the Neurrone Dawncaster SQLite card table with id `522498`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Whenever you bury a card, gain 1 Zeal. Unique. Memorized.

## Raw rules HTML

```html
Whenever you bury a card, gain 1 Zeal. Unique. Memorized.
```

## Observed keyword / token leads

`Memorized`, `Zeal`
