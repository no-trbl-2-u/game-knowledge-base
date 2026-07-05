---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 81167
  name: "Desert Rush"
  ordinal: 521
  slug: "desert-rush"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Eclypse"
  color: "Aqua"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 1
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Agile"
  - "Foretell"
  - "foretell+3"
  - "Foretold"
  - "Free"
  - "Momentum"
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
    url: "https://blightbane.io/card/Desert_Rush"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Desert Rush

## Card identity

- **Ordinal:** 521 of 1692 generated cards
- **Source card id:** `81167`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Eclypse
- **Color:** Aqua
- **Cost summary:** dexint=1

## Source-backed facts

- Claim: `Desert Rush` appears in the Neurrone Dawncaster SQLite card table with id `81167`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Foretell [[foretell+3]], then gain Momentum for each card Foretold. Free while Agile.

## Raw rules HTML

```html
Foretell [[foretell+3]], then gain Momentum for each card Foretold. Free while Agile.
```

## Observed keyword / token leads

`Agile`, `Foretell`, `foretell+3`, `Foretold`, `Free`, `Momentum`
