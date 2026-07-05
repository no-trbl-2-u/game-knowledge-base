---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 126901
  name: "Mystic Assault"
  ordinal: 1032
  slug: "mystic-assault"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Synthesis"
  color: "Aqua"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 1
    dexint: 2
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Basic Attack"
  - "Enchantment"
  - "Make"
  - "myEnchantments"
  - "Repeat"
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
    url: "https://blightbane.io/card/Mystic_Assault"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Mystic Assault

## Card identity

- **Ordinal:** 1032 of 1692 generated cards
- **Source card id:** `126901`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Synthesis
- **Color:** Aqua
- **Cost summary:** neutral=1, dexint=2

## Source-backed facts

- Claim: `Mystic Assault` appears in the Neurrone Dawncaster SQLite card table with id `126901`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Make a Basic Attack.
Repeat for each active Enchantment ([[myEnchantments]]).

## Raw rules HTML

```html
Make a Basic Attack.
Repeat for each active Enchantment ([[myEnchantments]]).
```

## Observed keyword / token leads

`Basic Attack`, `Enchantment`, `Make`, `myEnchantments`, `Repeat`
