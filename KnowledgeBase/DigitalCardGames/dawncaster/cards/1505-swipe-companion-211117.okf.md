---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 211117
  name: "Swipe (Companion)"
  ordinal: 1505
  slug: "swipe-companion"
  category: "Action"
  type: "Melee"
  rarity: "Uncommon"
  expansion: "Synthesis"
  color: "Orange"
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
  - "Advantage"
  - "Attacks"
  - "companionlevel+4"
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
    url: "https://blightbane.io/card/Swipe_%28Companion%29"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Swipe (Companion)

## Card identity

- **Ordinal:** 1505 of 1692 generated cards
- **Source card id:** `211117`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Uncommon
- **Expansion:** Synthesis
- **Color:** Orange
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Swipe (Companion)` appears in the Neurrone Dawncaster SQLite card table with id `211117`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:[[companionlevel+4]]] damage twice.
Advantage: Attacks two more times.

## Raw rules HTML

```html
Deal [damage:[[companionlevel+4]]] damage twice.
Advantage: Attacks two more times.
```

## Observed keyword / token leads

`Advantage`, `Attacks`, `companionlevel+4`
