---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 548213
  name: "Battle Hardened"
  ordinal: 182
  slug: "battle-hardened"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Synthesis"
  color: "Purple"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 1
  blood: 0
observed_terms:
  - "Bolster"
  - "Gain Bolster"
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
    url: "https://blightbane.io/card/Battle_Hardened"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Battle Hardened

## Card identity

- **Ordinal:** 182 of 1692 generated cards
- **Source card id:** `548213`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Synthesis
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Battle Hardened` appears in the Neurrone Dawncaster SQLite card table with id `548213`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain 1 Bolster.
Gain Bolster each time you take or deal damage this turn.

## Raw rules HTML

```html
Gain 1 Bolster.
Gain Bolster each time you take or deal damage this turn.
```

## Observed keyword / token leads

`Bolster`, `Gain Bolster`
