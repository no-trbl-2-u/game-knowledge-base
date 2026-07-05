---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 53061
  name: "Flat-Tipped Ammo"
  ordinal: 673
  slug: "flat-tipped-ammo"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Infinitum"
  color: "Red"
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
  - "Ranged"
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
    url: "https://blightbane.io/card/Flat-Tipped_Ammo"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Flat-Tipped Ammo

## Card identity

- **Ordinal:** 673 of 1692 generated cards
- **Source card id:** `53061`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Infinitum
- **Color:** Red
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Flat-Tipped Ammo` appears in the Neurrone Dawncaster SQLite card table with id `53061`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Your next 3 Ranged actions inflict Stagger equal to their damage.

## Raw rules HTML

```html
Your next 3 Ranged actions inflict Stagger equal to their damage.
```

## Observed keyword / token leads

`Ranged`, `Stagger`
