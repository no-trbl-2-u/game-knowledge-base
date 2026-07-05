---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 693076
  name: "Sanguine Casting"
  ordinal: 1278
  slug: "sanguine-casting"
  category: "Action"
  type: "Corruption"
  rarity: "Rare"
  expansion: "Metaprogress"
  color: "Blue"
  cost:
  dex: 0
  int: 1
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Blood"
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
    url: "https://blightbane.io/card/Sanguine_Casting"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Sanguine Casting

## Card identity

- **Ordinal:** 1278 of 1692 generated cards
- **Source card id:** `693076`
- **Category:** Action
- **Type:** Corruption
- **Rarity:** Rare
- **Expansion:** Metaprogress
- **Color:** Blue
- **Cost summary:** int=1

## Source-backed facts

- Claim: `Sanguine Casting` appears in the Neurrone Dawncaster SQLite card table with id `693076`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Draw your highest cost card, then convert its cost to Blood. Unique.

## Raw rules HTML

```html
Draw your highest cost card, then convert its cost to Blood. Unique.
```

## Observed keyword / token leads

`Blood`
