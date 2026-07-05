---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 631394
  name: "Lock and Load"
  ordinal: 944
  slug: "lock-and-load"
  category: "Action"
  type: "Utility"
  rarity: "Rare"
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
  - "Ammo"
  - "Bomb"
  - "Conjure"
  - "Reload"
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
    url: "https://blightbane.io/card/Lock_and_Load"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Lock and Load

## Card identity

- **Ordinal:** 944 of 1692 generated cards
- **Source card id:** `631394`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Rare
- **Expansion:** Infinitum
- **Color:** Red
- **Cost summary:** str=1

## Source-backed facts

- Claim: `Lock and Load` appears in the Neurrone Dawncaster SQLite card table with id `631394`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Conjure a Bomb.
Reload all your Ammo.

## Raw rules HTML

```html
Conjure a Bomb.<br>Reload all your Ammo.
```

## Observed keyword / token leads

`Ammo`, `Bomb`, `Conjure`, `Reload`
