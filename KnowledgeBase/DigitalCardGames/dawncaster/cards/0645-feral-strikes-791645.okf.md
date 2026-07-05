---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 791645
  name: "Feral Strikes"
  ordinal: 645
  slug: "feral-strikes"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Core"
  color: "Orange"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 1
  intstr: 0
  blood: 0
observed_terms:
  - "Basic Attack"
  - "Frenzy"
  - "Gain Anger"
  - "Make"
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
    url: "https://blightbane.io/card/Feral_Strikes"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Feral Strikes

## Card identity

- **Ordinal:** 645 of 1692 generated cards
- **Source card id:** `791645`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Core
- **Color:** Orange
- **Cost summary:** dexstr=1

## Source-backed facts

- Claim: `Feral Strikes` appears in the Neurrone Dawncaster SQLite card table with id `791645`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Make a Basic Attack.
Frenzy: Gain Anger for every attack that hit.

## Raw rules HTML

```html
Make a Basic Attack.<br>Frenzy: Gain Anger for every attack that hit.
```

## Observed keyword / token leads

`Basic Attack`, `Frenzy`, `Gain Anger`, `Make`
