---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 625122
  name: "Hail of Steel"
  ordinal: 777
  slug: "hail-of-steel"
  category: "Action"
  type: "Utility"
  rarity: "Rare"
  expansion: "Metamorphosis"
  color: "Purple"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 2
    blood: 0
observed_terms:
  - "Basic"
  - "Blessings"
  - "Make"
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
    url: "https://blightbane.io/card/Hail_of_Steel"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Hail of Steel

## Card identity

- **Ordinal:** 777 of 1692 generated cards
- **Source card id:** `625122`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Metamorphosis
- **Color:** Purple
- **Cost summary:** intstr=2

## Source-backed facts

- Claim: `Hail of Steel` appears in the Neurrone Dawncaster SQLite card table with id `625122`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Make a Basic attack.
Repeat for every one of your Blessings.

## Raw rules HTML

```html
Make a Basic attack.<br>Repeat for every one of your Blessings.
```

## Observed keyword / token leads

`Basic`, `Blessings`, `Make`, `Repeat`
