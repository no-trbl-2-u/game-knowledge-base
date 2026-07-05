---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 329045
  name: "Ten-Sided Strike"
  ordinal: 1527
  slug: "ten-sided-strike"
  category: "Action"
  type: "Melee"
  rarity: "Uncommon"
  expansion: "Eclypse"
  color: "Green"
  cost:
  dex: 1
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Conjure"
  - "DEX"
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
    url: "https://blightbane.io/card/Ten-Sided_Strike"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Ten-Sided Strike

## Card identity

- **Ordinal:** 1527 of 1692 generated cards
- **Source card id:** `329045`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Uncommon
- **Expansion:** Eclypse
- **Color:** Green
- **Cost summary:** dex=1

## Source-backed facts

- Claim: `Ten-Sided Strike` appears in the Neurrone Dawncaster SQLite card table with id `329045`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:5] damage.
On Hit: Conjure a copy that costs DEX, then add a random keyword.

## Raw rules HTML

```html
Deal [damage:5] damage.<br>On Hit: Conjure a copy that costs DEX, then add a random keyword.
```

## Observed keyword / token leads

`Conjure`, `DEX`, `On Hit`
