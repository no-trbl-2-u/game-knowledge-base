---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 26564
  name: "Psionic Pulse"
  ordinal: 1144
  slug: "psionic-pulse"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Synthesis"
  color: "Blue"
  cost:
    dex: 0
    int: 2
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "(cardvalue)"
  - "cardsInHand"
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
    url: "https://blightbane.io/card/Psionic_Pulse"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Psionic Pulse

## Card identity

- **Ordinal:** 1144 of 1692 generated cards
- **Source card id:** `26564`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Synthesis
- **Color:** Blue
- **Cost summary:** int=2

## Source-backed facts

- Claim: `Psionic Pulse` appears in the Neurrone Dawncaster SQLite card table with id `26564`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Draw a card for each time you've played this ([[(cardvalue)]]), then deal damage equal to the cards in hand ([[cardsInHand]]).

## Raw rules HTML

```html
Draw a card for each time you've played this ([[(cardvalue)]]), then deal damage equal to the cards in hand ([[cardsInHand]]).
```

## Observed keyword / token leads

`(cardvalue)`, `cardsInHand`
