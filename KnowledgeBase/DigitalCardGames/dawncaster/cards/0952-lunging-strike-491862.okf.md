---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 491862
  name: "Lunging Strike"
  ordinal: 952
  slug: "lunging-strike"
  category: "Action"
  type: "Melee"
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
  - "Enter Steady"
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
    url: "https://blightbane.io/card/Lunging_Strike"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Lunging Strike

## Card identity

- **Ordinal:** 952 of 1692 generated cards
- **Source card id:** `491862`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Common
- **Expansion:** Catalyst
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Lunging Strike` appears in the Neurrone Dawncaster SQLite card table with id `491862`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:5] damage.
Enter Steady Stance.

## Raw rules HTML

```html
Deal [damage:5] damage.<br>Enter Steady Stance.
```

## Observed keyword / token leads

`Enter Steady`, `Stance`
