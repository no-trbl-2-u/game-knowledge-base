---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 73787
  name: "Elite Fireball"
  ordinal: 593
  slug: "elite-fireball"
  category: "Action"
  type: "Magic"
  rarity: "Legendary"
  expansion: "Core"
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
  - "Inflict Burning"
  - "Lifedrain"
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
    url: "https://blightbane.io/card/Elite_Fireball"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Elite Fireball

## Card identity

- **Ordinal:** 593 of 1692 generated cards
- **Source card id:** `73787`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Legendary
- **Expansion:** Core
- **Color:** Blue
- **Cost summary:** int=1

## Source-backed facts

- Claim: `Elite Fireball` appears in the Neurrone Dawncaster SQLite card table with id `73787`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:8] damage.
Inflict Burning equal to half the damage dealt. Unique. Lifedrain.

## Raw rules HTML

```html
Deal [damage:8] damage.<br>Inflict Burning equal to half the damage dealt. Unique. Lifedrain.
```

## Observed keyword / token leads

`Inflict Burning`, `Lifedrain`
