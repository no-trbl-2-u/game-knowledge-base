---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 83140
  name: "Take the Hit"
  ordinal: 1513
  slug: "take-the-hit"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Infinitum"
  color: "Red"
  cost:
  dex: 0
  int: 0
  str: 1
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Charges"
  - "Prevent"
  - "Stagger"
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
    url: "https://blightbane.io/card/Take_the_Hit"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Take the Hit

## Card identity

- **Ordinal:** 1513 of 1692 generated cards
- **Source card id:** `83140`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Infinitum
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Take the Hit` appears in the Neurrone Dawncaster SQLite card table with id `83140`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Prevent all damage taken during your foe's turn, then gain Stagger equal to the damage prevented. Charges (3/3).

## Raw rules HTML

```html
Prevent all damage taken during your foe's turn, then gain Stagger equal to the damage prevented. Charges (3/3).
```

## Observed keyword / token leads

`Charges`, `Prevent`, `Stagger`
