---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 637334
  name: "Hidden Flurry"
  ordinal: 816
  slug: "hidden-flurry"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Eclypse"
  color: "Green"
  cost:
    dex: 1
    int: 0
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "After"
  - "Basic Attack"
  - "Make"
  - "s"
  - "Sinister"
  - "tempValue+1"
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
    url: "https://blightbane.io/card/Hidden_Flurry"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Hidden Flurry

## Card identity

- **Ordinal:** 816 of 1692 generated cards
- **Source card id:** `637334`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Eclypse
- **Color:** Green
- **Cost summary:** dex=1

## Source-backed facts

- Claim: `Hidden Flurry` appears in the Neurrone Dawncaster SQLite card table with id `637334`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Make [[tempValue+1]] Basic Attack[[s]].
After you play a Sinister card, add one attack Sinister.

## Raw rules HTML

```html
Make [[tempValue+1]] Basic Attack[[s]].<br>After you play a Sinister card, add one attack Sinister.
```

## Observed keyword / token leads

`After`, `Basic Attack`, `Make`, `s`, `Sinister`, `tempValue+1`
