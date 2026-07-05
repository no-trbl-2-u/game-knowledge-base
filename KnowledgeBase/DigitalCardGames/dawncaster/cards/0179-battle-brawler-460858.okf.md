---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 460858
  name: "Battle Brawler"
  ordinal: 179
  slug: "battle-brawler"
  category: "Enchantment"
  type: "Utility"
  rarity: "Rare"
  expansion: "Infinitum"
  color: "Red"
  cost:
    dex: 0
    int: 0
    str: 2
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "my(status)Stagger"
  - "Stagger"
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
    url: "https://blightbane.io/card/Battle_Brawler"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Battle Brawler

## Card identity

- **Ordinal:** 179 of 1692 generated cards
- **Source card id:** `460858`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Infinitum
- **Color:** Red
- **Cost summary:** str=2

## Source-backed facts

- Claim: `Battle Brawler` appears in the Neurrone Dawncaster SQLite card table with id `460858`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

This combat, your actions deal additional damage equal to your Stagger ([[my(status)Stagger]]). Unique.

## Raw rules HTML

```html
This combat, your actions deal additional damage equal to your Stagger ([[my(status)Stagger]]). Unique.
```

## Observed keyword / token leads

`my(status)Stagger`, `Stagger`
