---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 647227
  name: "Meteor Storm"
  ordinal: 1014
  slug: "meteor-storm"
  category: "Action"
  type: "Magic"
  rarity: "Uncommon"
  expansion: "Core"
  color: "Blue"
  cost:
  dex: 0
  int: 3
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Burning"
  - "Bury"
  - "Channel"
  - "Foretold"
  - "Free"
  - "Turn"
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
    url: "https://blightbane.io/card/Meteor_Storm"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Meteor Storm

## Card identity

- **Ordinal:** 1014 of 1692 generated cards
- **Source card id:** `647227`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Uncommon
- **Expansion:** Core
- **Color:** Blue
- **Cost summary:** int=3

## Source-backed facts

- Claim: `Meteor Storm` appears in the Neurrone Dawncaster SQLite card table with id `647227`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Bury 3 cards.
Start of Turn: Deal [damage:12] damage, inflict Burning equal to half the damage. Free after being Foretold. Channel.

## Raw rules HTML

```html
Bury 3 cards.<br>Start of Turn: Deal [damage:12] damage, inflict Burning equal to half the damage. Free after being Foretold. Channel.
```

## Observed keyword / token leads

`Burning`, `Bury`, `Channel`, `Foretold`, `Free`, `Turn`
