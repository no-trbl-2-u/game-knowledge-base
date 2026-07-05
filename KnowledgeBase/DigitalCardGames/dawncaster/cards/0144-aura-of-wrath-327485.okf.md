---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 327485
  name: "Aura of Wrath"
  ordinal: 144
  slug: "aura-of-wrath"
  category: "Enchantment"
  type: "Utility"
  rarity: "Common"
  expansion: "None"
  color: "Gold"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 1
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Affliction"
  - "Convert"
  - "Turn"
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
    url: "https://blightbane.io/card/Aura_of_Wrath"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Aura of Wrath

## Card identity

- **Ordinal:** 144 of 1692 generated cards
- **Source card id:** `327485`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** None
- **Color:** Gold
- **Cost summary:** holy=1

## Source-backed facts

- Claim: `Aura of Wrath` appears in the Neurrone Dawncaster SQLite card table with id `327485`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Start of Turn:
Convert a random 
Affliction to Zeal. Unique.

## Raw rules HTML

```html
Start of Turn:<br>Convert a random <br>Affliction to Zeal. Unique.
```

## Observed keyword / token leads

`Affliction`, `Convert`, `Turn`, `Zeal`
