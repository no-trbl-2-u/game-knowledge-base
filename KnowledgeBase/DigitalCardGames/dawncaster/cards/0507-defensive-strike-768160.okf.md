---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 768160
  name: "Defensive Strike"
  ordinal: 507
  slug: "defensive-strike"
  category: "Action"
  type: "Melee"
  rarity: "Uncommon"
  expansion: "Core"
  color: "Red"
  cost:
    dex: 0
    int: 0
    str: 1
    holy: 0
    neutral: 1
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "Gain Armor"
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
    url: "https://blightbane.io/card/Defensive_Strike"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Defensive Strike

## Card identity

- **Ordinal:** 507 of 1692 generated cards
- **Source card id:** `768160`
- **Category:** Action
- **Type:** Melee
- **Rarity:** Uncommon
- **Expansion:** Core
- **Color:** Red
- **Cost summary:** str=1, neutral=1

## Source-backed facts

- Claim: `Defensive Strike` appears in the Neurrone Dawncaster SQLite card table with id `768160`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:6] damage. 
Gain Armor equal to the damage dealt.

## Raw rules HTML

```html
Deal [damage:6] damage. <br>Gain Armor equal to the damage dealt.
```

## Observed keyword / token leads

`Gain Armor`
