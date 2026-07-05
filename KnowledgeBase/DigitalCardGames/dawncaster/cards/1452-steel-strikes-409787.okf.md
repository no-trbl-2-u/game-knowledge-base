---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 409787
  name: "Steel Strikes"
  ordinal: 1452
  slug: "steel-strikes"
  category: "Action"
  type: "Melee"
  rarity: "Uncommon"
  expansion: "Synthesis"
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
  - "Adaptation"
  - "adaptations"
  - "Gain STR"
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
    url: "https://blightbane.io/card/Steel_Strikes"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Steel Strikes

## Card identity

- **Ordinal:** 1452 of 1692 generated cards
- **Source card id:** `409787`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Uncommon
- **Expansion:** Synthesis
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Steel Strikes` appears in the Neurrone Dawncaster SQLite card table with id `409787`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:1] damage.
On Hit: Gain STR for each Adaptation ([[adaptations]]).

## Raw rules HTML

```html
Deal [damage:1] damage.
On Hit: Gain STR for each Adaptation ([[adaptations]]).
```

## Observed keyword / token leads

`Adaptation`, `adaptations`, `Gain STR`, `On Hit`
