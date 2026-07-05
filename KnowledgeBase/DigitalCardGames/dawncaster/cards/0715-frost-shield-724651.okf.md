---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 724651
  name: "Frost Shield"
  ordinal: 715
  slug: "frost-shield"
  category: "Action"
  type: "Magic"
  rarity: "Common"
  expansion: "Catalyst"
  color: "Blue"
  cost:
  dex: 0
  int: 1
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Attune"
  - "Barrier"
  - "Frozen"
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
    url: "https://blightbane.io/card/Frost_Shield"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Frost Shield

## Card identity

- **Ordinal:** 715 of 1692 generated cards
- **Source card id:** `724651`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Common
- **Expansion:** Catalyst
- **Color:** Blue
- **Cost summary:** int=1

## Source-backed facts

- Claim: `Frost Shield` appears in the Neurrone Dawncaster SQLite card table with id `724651`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain 3 Barrier.
At the start of next turn, inflict Frozen equal to your Barrier. Attune.

## Raw rules HTML

```html
Gain 3 Barrier.<br>At the start of next turn, inflict Frozen equal to your Barrier. Attune.
```

## Observed keyword / token leads

`Attune`, `Barrier`, `Frozen`
