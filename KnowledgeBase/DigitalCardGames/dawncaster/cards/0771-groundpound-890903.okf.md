---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 890903
  name: "Groundpound"
  ordinal: 771
  slug: "groundpound"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Catalyst"
  color: "Red"
  cost:
    dex: 0
    int: 0
    str: 1
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Brittle"
  - "cardsDrawnThisTurn"
  - "Enter Shattering"
  - "Stance"
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
    url: "https://blightbane.io/card/Groundpound"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Groundpound

## Card identity

- **Ordinal:** 771 of 1692 generated cards
- **Source card id:** `890903`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Catalyst
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Groundpound` appears in the Neurrone Dawncaster SQLite card table with id `890903`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Enter Shattering 
Stance and inflict 2 Brittle for every card you've drawn ([[cardsDrawnThisTurn]]).

## Raw rules HTML

```html
Enter Shattering <br>Stance and inflict 2 Brittle for every card you've drawn ([[cardsDrawnThisTurn]]).
```

## Observed keyword / token leads

`Brittle`, `cardsDrawnThisTurn`, `Enter Shattering`, `Stance`
