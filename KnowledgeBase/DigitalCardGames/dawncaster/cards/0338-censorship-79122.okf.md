---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 79122
  name: "Censorship"
  ordinal: 338
  slug: "censorship"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Infinitum"
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
  - "Bury"
  - "HEALTH"
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
    url: "https://blightbane.io/card/Censorship"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Censorship

## Card identity

- **Ordinal:** 338 of 1692 generated cards
- **Source card id:** `79122`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Infinitum
- **Color:** Gold
- **Cost summary:** holy=1

## Source-backed facts

- Claim: `Censorship` appears in the Neurrone Dawncaster SQLite card table with id `79122`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Bury a card in your deck, then gain Zeal and HEALTH equal to twice its cost.

## Raw rules HTML

```html
Bury a card in your deck, then gain Zeal and HEALTH equal to twice its cost.
```

## Observed keyword / token leads

`Bury`, `HEALTH`, `Zeal`
