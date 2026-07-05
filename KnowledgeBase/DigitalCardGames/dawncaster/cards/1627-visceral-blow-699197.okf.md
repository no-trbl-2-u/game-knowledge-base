---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 699197
  name: "Visceral Blow"
  ordinal: 1627
  slug: "visceral-blow"
  category: "Action"
  type: "Melee"
  rarity: "Rare"
  expansion: "Metamorphosis"
  color: "Red"
  cost:
  dex: 0
  int: 0
  str: 3
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 1
observed_terms:
  - "HEALTH"
  - "myCurrentHealth"
  - "Reduce"
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
    url: "https://blightbane.io/card/Visceral_Blow"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Visceral Blow

## Card identity

- **Ordinal:** 1627 of 1692 generated cards
- **Source card id:** `699197`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Rare
- **Expansion:** Metamorphosis
- **Color:** Red
- **Cost summary:** str=3, blood=1

## Source-backed facts

- Claim: `Visceral Blow` appears in the Neurrone Dawncaster SQLite card table with id `699197`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:100] damage.
Reduce this damage by your remaining HEALTH ([[myCurrentHealth]]).

## Raw rules HTML

```html
Deal [damage:100] damage.<br>Reduce this damage by your remaining HEALTH ([[myCurrentHealth]]).
```

## Observed keyword / token leads

`HEALTH`, `myCurrentHealth`, `Reduce`
