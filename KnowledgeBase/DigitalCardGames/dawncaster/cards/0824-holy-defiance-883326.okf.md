---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 883326
  name: "Holy Defiance"
  ordinal: 824
  slug: "holy-defiance"
  category: "Enchantment"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Eclypse"
  color: "Red"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 2
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "HEALTH"
  - "On Death"
  - "Overkill"
  - "Starts"
  - "Upgrade"
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
    url: "https://blightbane.io/card/Holy_Defiance"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Holy Defiance

## Card identity

- **Ordinal:** 824 of 1692 generated cards
- **Source card id:** `883326`
- **Category:** Enchantment
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Eclypse
- **Color:** Red
- **Cost summary:** holy=2

## Source-backed facts

- Claim: `Holy Defiance` appears in the Neurrone Dawncaster SQLite card table with id `883326`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

On Death: Upgrade all cards in your deck equal to the Overkill. Starts in play if you start combat below 10% HEALTH. Unique.

## Raw rules HTML

```html
On Death: Upgrade all cards in your deck equal to the Overkill. Starts in play if you start combat below 10% HEALTH. Unique.
```

## Observed keyword / token leads

`HEALTH`, `On Death`, `Overkill`, `Starts`, `Upgrade`
