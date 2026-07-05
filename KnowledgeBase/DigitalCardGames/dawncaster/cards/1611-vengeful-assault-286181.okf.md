---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 286181
  name: "Vengeful Assault"
  ordinal: 1611
  slug: "vengeful-assault"
  category: "Action"
  type: "Ranged"
  rarity: "Common"
  expansion: "Eclypse"
  color: "Red"
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
  - "Basic Attack"
  - "If HOLY"
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
    url: "https://blightbane.io/card/Vengeful_Assault"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Vengeful Assault

## Card identity

- **Ordinal:** 1611 of 1692 generated cards
- **Source card id:** `286181`
- **Category:** Action
- **Type:** Ranged
- **Rarity:** Common
- **Expansion:** Eclypse
- **Color:** Red
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Vengeful Assault` appears in the Neurrone Dawncaster SQLite card table with id `286181`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:6] damage.
If HOLY was spent, play a Basic Attack from your discard pile.

## Raw rules HTML

```html
Deal [damage:6] damage.<br>If HOLY was spent, play a Basic Attack from your discard pile.
```

## Observed keyword / token leads

`Basic Attack`, `If HOLY`
