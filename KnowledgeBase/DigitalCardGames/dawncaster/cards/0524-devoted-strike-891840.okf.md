---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 891840
  name: "Devoted Strike"
  ordinal: 524
  slug: "devoted-strike"
  category: "Action"
  type: "Melee"
  rarity: "Common"
  expansion: "Core"
  color: "Gold"
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
  - "Gain HOLY"
  - "HOLY"
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
    url: "https://blightbane.io/card/Devoted_Strike"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Devoted Strike

## Card identity

- **Ordinal:** 524 of 1692 generated cards
- **Source card id:** `891840`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Common
- **Expansion:** Core
- **Color:** Gold
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Devoted Strike` appears in the Neurrone Dawncaster SQLite card table with id `891840`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:5] damage. 
On Hit: Gain HOLY HOLY at the start of next turn.

## Raw rules HTML

```html
Deal [damage:5] damage. <br>On Hit: Gain HOLY HOLY at the start of next turn.
```

## Observed keyword / token leads

`Gain HOLY`, `HOLY`, `On Hit`
