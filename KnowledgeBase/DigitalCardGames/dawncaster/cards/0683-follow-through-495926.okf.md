---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 495926
  name: "Follow Through"
  ordinal: 683
  slug: "follow-through"
  category: "Action"
  type: "Melee"
  rarity: "Rare"
  expansion: "Metamorphosis"
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
  - "actionsPlayed"
  - "Deep Wound"
  - "Flow"
  - "Hits"
  - "otherWounds"
  - "STR"
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
    url: "https://blightbane.io/card/Follow_Through"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Follow Through

## Card identity

- **Ordinal:** 683 of 1692 generated cards
- **Source card id:** `495926`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Rare
- **Expansion:** Metamorphosis
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Follow Through` appears in the Neurrone Dawncaster SQLite card table with id `495926`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:3] damage.
Flow ([[actionsPlayed]]/4): When this attack Hits, inflict a Deep Wound and gain STR for every Deep Wound you've inflicted ([[otherWounds]]).

## Raw rules HTML

```html
Deal [damage:3] damage.<br>Flow ([[actionsPlayed]]/4): When this attack Hits, inflict a Deep Wound and gain STR for every Deep Wound you've inflicted ([[otherWounds]]).
```

## Observed keyword / token leads

`actionsPlayed`, `Deep Wound`, `Flow`, `Hits`, `otherWounds`, `STR`
