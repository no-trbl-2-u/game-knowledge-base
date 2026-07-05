---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 266408
  name: "Whirling Strikes"
  ordinal: 1659
  slug: "whirling-strikes"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Core"
  color: "Orange"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 2
  intstr: 0
  blood: 0
observed_terms:
  - "Basic Attack"
  - "basicsPlayed"
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
    url: "https://blightbane.io/card/Whirling_Strikes"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Whirling Strikes

## Card identity

- **Ordinal:** 1659 of 1692 generated cards
- **Source card id:** `266408`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Core
- **Color:** Orange
- **Cost summary:** dexstr=2

## Source-backed facts

- Claim: `Whirling Strikes` appears in the Neurrone Dawncaster SQLite card table with id `266408`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Make a Basic Attack.
Repeat for every Basic Attack you've made this round ([[basicsPlayed]]).

## Raw rules HTML

```html
Make a Basic Attack.<br>Repeat for every Basic Attack you've made this round ([[basicsPlayed]]).
```

## Observed keyword / token leads

`Basic Attack`, `basicsPlayed`, `Make`, `Repeat`
