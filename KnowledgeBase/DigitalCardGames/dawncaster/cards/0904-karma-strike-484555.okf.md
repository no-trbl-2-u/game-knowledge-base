---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 484555
  name: "Karma Strike"
  ordinal: 904
  slug: "karma-strike"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Core"
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
  - "Attacks"
  - "Make Basic"
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
    url: "https://blightbane.io/card/Karma_Strike"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Karma Strike

## Card identity

- **Ordinal:** 904 of 1692 generated cards
- **Source card id:** `484555`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Core
- **Color:** Aqua
- **Cost summary:** dexint=1

## Source-backed facts

- Claim: `Karma Strike` appears in the Neurrone Dawncaster SQLite card table with id `484555`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Discard a card.
Make Basic Attacks equal to that card's energy cost.

## Raw rules HTML

```html
Discard a card.<br>Make Basic Attacks equal to that card's energy cost.
```

## Observed keyword / token leads

`Attacks`, `Make Basic`
