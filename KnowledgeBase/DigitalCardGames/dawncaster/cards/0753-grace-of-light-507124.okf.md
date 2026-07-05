---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 507124
  name: "Grace of Light"
  ordinal: 753
  slug: "grace-of-light"
  category: "Action"
  type: "Divine"
  rarity: "Common"
  expansion: "Synthesis"
  color: "Gold"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 1
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Blessings"
  - "Increase"
  - "Performance"
  - "performanceStacks"
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
    url: "https://blightbane.io/card/Grace_of_Light"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Grace of Light

## Card identity

- **Ordinal:** 753 of 1692 generated cards
- **Source card id:** `507124`
- **Category:** Action
- **Type:** Divine
- **Rarity:** Common
- **Expansion:** Synthesis
- **Color:** Gold
- **Cost summary:** holy=1

## Source-backed facts

- Claim: `Grace of Light` appears in the Neurrone Dawncaster SQLite card table with id `507124`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Increase each of your Blessings by your current Performance ([[performanceStacks]]).

## Raw rules HTML

```html
Increase each of your Blessings by your current Performance ([[performanceStacks]]).
```

## Observed keyword / token leads

`Blessings`, `Increase`, `Performance`, `performanceStacks`
