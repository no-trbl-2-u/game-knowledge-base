---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 180017
  name: "Stone Stance"
  ordinal: 1461
  slug: "stone-stance"
  category: "Form"
  type: "Utility"
  rarity: "Common"
  expansion: "Catalyst"
  color: "Red"
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
  - "Armor"
  - "Bleeding"
  - "Immune"
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
    url: "https://blightbane.io/card/Stone_Stance"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Stone Stance

## Card identity

- **Ordinal:** 1461 of 1692 generated cards
- **Source card id:** `180017`
- **Category:** Form
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Catalyst
- **Color:** Red
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Stone Stance` appears in the Neurrone Dawncaster SQLite card table with id `180017`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Whenever you gain Armor, gain 1 more. You are Immune to Bleeding.

## Raw rules HTML

```html
Whenever you gain Armor, gain 1 more. You are Immune to Bleeding.
```

## Observed keyword / token leads

`Armor`, `Bleeding`, `Immune`
