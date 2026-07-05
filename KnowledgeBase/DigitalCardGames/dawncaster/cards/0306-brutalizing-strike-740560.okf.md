---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 740560
  name: "Brutalizing Strike"
  ordinal: 306
  slug: "brutalizing-strike"
  category: "Action"
  type: "Melee"
  rarity: "Common"
  expansion: "Synthesis"
  color: "Red"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 0
    neutral: 3
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Adaptation"
  - "adaptations"
  - "Costs NEUTRAL"
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
    url: "https://blightbane.io/card/Brutalizing_Strike"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Brutalizing Strike

## Card identity

- **Ordinal:** 306 of 1692 generated cards
- **Source card id:** `740560`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Common
- **Expansion:** Synthesis
- **Color:** Red
- **Cost summary:** neutral=3

## Source-backed facts

- Claim: `Brutalizing Strike` appears in the Neurrone Dawncaster SQLite card table with id `740560`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:12] damage.
Costs NEUTRAL less for each Adaptation ([[adaptations]]).

## Raw rules HTML

```html
Deal [damage:12] damage.
Costs NEUTRAL less for each Adaptation ([[adaptations]]).
```

## Observed keyword / token leads

`Adaptation`, `adaptations`, `Costs NEUTRAL`
