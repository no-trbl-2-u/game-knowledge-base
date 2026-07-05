---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 761173
  name: "Umbral Lance"
  ordinal: 1594
  slug: "umbral-lance"
  category: "Action"
  type: "Magic"
  rarity: "Uncommon"
  expansion: "Metamorphosis"
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
  blood: 2
observed_terms:
  - "Add"
  - "Vile Wound"
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
    url: "https://blightbane.io/card/Umbral_Lance"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Umbral Lance

## Card identity

- **Ordinal:** 1594 of 1692 generated cards
- **Source card id:** `761173`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Uncommon
- **Expansion:** Metamorphosis
- **Color:** Blue
- **Cost summary:** int=1, blood=2

## Source-backed facts

- Claim: `Umbral Lance` appears in the Neurrone Dawncaster SQLite card table with id `761173`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:3] damage.
Add a Vile Wound to the foe's deck.

## Raw rules HTML

```html
Deal [damage:3] damage.<br>Add a Vile Wound to the foe's deck.
```

## Observed keyword / token leads

`Add`, `Vile Wound`
