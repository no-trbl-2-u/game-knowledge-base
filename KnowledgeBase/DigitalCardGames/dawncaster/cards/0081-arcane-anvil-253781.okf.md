---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 253781
  name: "Arcane Anvil"
  ordinal: 81
  slug: "arcane-anvil"
  category: "Item"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Catalyst"
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
  - "Add"
  - "Basic Attack"
  - "One Use"
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
    url: "https://blightbane.io/card/Arcane_Anvil"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Arcane Anvil

## Card identity

- **Ordinal:** 81 of 1692 generated cards
- **Source card id:** `253781`
- **Category:** Item
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Catalyst
- **Color:** Brown
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Arcane Anvil` appears in the Neurrone Dawncaster SQLite card table with id `253781`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

One Use:
Add any Basic Attack 
to your deck.

## Raw rules HTML

```html
One Use:<br>Add any Basic Attack <br>to your deck.
```

## Observed keyword / token leads

`Add`, `Basic Attack`, `One Use`
