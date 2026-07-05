---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 685401
  name: "Wavebreaker"
  ordinal: 1653
  slug: "wavebreaker"
  category: "Action"
  type: "Magic"
  rarity: "Uncommon"
  expansion: "Catalyst"
  color: "Aqua"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 2
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Clones"
  - "clones"
  - "Repeat"
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
    url: "https://blightbane.io/card/Wavebreaker"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Wavebreaker

## Card identity

- **Ordinal:** 1653 of 1692 generated cards
- **Source card id:** `685401`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Uncommon
- **Expansion:** Catalyst
- **Color:** Aqua
- **Cost summary:** dexint=2

## Source-backed facts

- Claim: `Wavebreaker` appears in the Neurrone Dawncaster SQLite card table with id `685401`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:2] damage. 
Repeat for each
of your Clones ([[clones]]).

## Raw rules HTML

```html
Deal [damage:2] damage. <br>Repeat for each<br>of your Clones ([[clones]]).
```

## Observed keyword / token leads

`Clones`, `clones`, `Repeat`
