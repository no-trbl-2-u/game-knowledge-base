---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 735408
  name: "On my Command"
  ordinal: 1054
  slug: "on-my-command"
  category: "Action"
  type: "Utility"
  rarity: "Common"
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
  - "Basic Attack"
  - "Charges"
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
    url: "https://blightbane.io/card/On_my_Command"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# On my Command

## Card identity

- **Ordinal:** 1054 of 1692 generated cards
- **Source card id:** `735408`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Infinitum
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `On my Command` appears in the Neurrone Dawncaster SQLite card table with id `735408`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Make a Basic Attack. Charges (5/5).

## Raw rules HTML

```html
Make a Basic Attack. Charges (5/5).
```

## Observed keyword / token leads

`Basic Attack`, `Charges`, `Make`
