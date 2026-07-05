---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 977875
  name: "Alone in the Dark"
  ordinal: 43
  slug: "alone-in-the-dark"
  category: "Action"
  type: "Melee"
  rarity: "Common"
  expansion: "Catalyst"
  color: "Orange"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 1
    intstr: 0
    blood: 2
observed_terms:
  - "Blessings"
  - "Darkness"
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
    url: "https://blightbane.io/card/Alone_in_the_Dark"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Alone in the Dark

## Card identity

- **Ordinal:** 43 of 1692 generated cards
- **Source card id:** `977875`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Common
- **Expansion:** Catalyst
- **Color:** Orange
- **Cost summary:** dexstr=1, blood=2

## Source-backed facts

- Claim: `Alone in the Dark` appears in the Neurrone Dawncaster SQLite card table with id `977875`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:5] damage.
On Hit: Your foe can't gain Blessings this round.
Darkness 7.

## Raw rules HTML

```html
Deal [damage:5] damage.<br>On Hit: Your foe can't gain Blessings this round.<br>Darkness 7.
```

## Observed keyword / token leads

`Blessings`, `Darkness`, `On Hit`
