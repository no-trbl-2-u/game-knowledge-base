---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 24952
  name: "Steel Faith"
  ordinal: 1448
  slug: "steel-faith"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
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
  - "Blessings"
  - "Gain Armor"
  - "highestBlessings"
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
    url: "https://blightbane.io/card/Steel_Faith"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Steel Faith

## Card identity

- **Ordinal:** 1448 of 1692 generated cards
- **Source card id:** `24952`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Synthesis
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Steel Faith` appears in the Neurrone Dawncaster SQLite card table with id `24952`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain Armor equal to your highest stack of Blessings ([[highestBlessings]]).

## Raw rules HTML

```html
Gain Armor equal to your highest stack of Blessings ([[highestBlessings]]).
```

## Observed keyword / token leads

`Blessings`, `Gain Armor`, `highestBlessings`
