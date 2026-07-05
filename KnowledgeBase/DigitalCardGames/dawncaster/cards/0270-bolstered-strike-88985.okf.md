---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 88985
  name: "Bolstered Strike"
  ordinal: 270
  slug: "bolstered-strike"
  category: "Action"
  type: "Melee"
  rarity: "Common"
  expansion: "Core"
  color: "Purple"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 1
  blood: 0
observed_terms:
  - "Bash"
  - "Conjure"
  - "On Hit"
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
    url: "https://blightbane.io/card/Bolstered_Strike"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Bolstered Strike

## Card identity

- **Ordinal:** 270 of 1692 generated cards
- **Source card id:** `88985`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Common
- **Expansion:** Core
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Bolstered Strike` appears in the Neurrone Dawncaster SQLite card table with id `88985`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:4] damage.
On Hit: Conjure a 
free Bash

## Raw rules HTML

```html
Deal [damage:4] damage.<br>On Hit: Conjure a <br>free Bash
```

## Observed keyword / token leads

`Bash`, `Conjure`, `On Hit`
