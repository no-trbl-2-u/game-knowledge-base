---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 505304
  name: "Glimpse of Evil"
  ordinal: 744
  slug: "glimpse-of-evil"
  category: "Action"
  type: "Corruption"
  rarity: "Common"
  expansion: "Eclypse"
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
  - "Add"
  - "Bane"
  - "Corrupted"
  - "Inflict"
  - "Terror"
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
    url: "https://blightbane.io/card/Glimpse_of_Evil"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Glimpse of Evil

## Card identity

- **Ordinal:** 744 of 1692 generated cards
- **Source card id:** `505304`
- **Category:** Action
- **Type:** Corruption
- **Rarity:** Common
- **Expansion:** Eclypse
- **Color:** Blue
- **Cost summary:** int=1

## Source-backed facts

- Claim: `Glimpse of Evil` appears in the Neurrone Dawncaster SQLite card table with id `505304`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Inflict 1 Bane.
Corrupted: Add a Terror to your foe's deck.

## Raw rules HTML

```html
Inflict 1 Bane.<br>Corrupted: Add a Terror to your foe's deck.
```

## Observed keyword / token leads

`Add`, `Bane`, `Corrupted`, `Inflict`, `Terror`
