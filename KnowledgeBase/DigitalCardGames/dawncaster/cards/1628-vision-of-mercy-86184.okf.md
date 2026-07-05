---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 86184
  name: "Vision of Mercy"
  ordinal: 1628
  slug: "vision-of-mercy"
  category: "Action"
  type: "Utility"
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
  - "Charmed"
  - "damageBonus+1"
  - "HOLY"
  - "Inflict"
  - "Repeat"
  - "Upgradeable"
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
    url: "https://blightbane.io/card/Vision_of_Mercy"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Vision of Mercy

## Card identity

- **Ordinal:** 1628 of 1692 generated cards
- **Source card id:** `86184`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Synthesis
- **Color:** Gold
- **Cost summary:** holy=1

## Source-backed facts

- Claim: `Vision of Mercy` appears in the Neurrone Dawncaster SQLite card table with id `86184`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Inflict [[damageBonus+1]] Charmed.
Repeat for each of your HOLY energy. Upgradeable.

## Raw rules HTML

```html
Inflict [[damageBonus+1]] Charmed.
Repeat for each of your HOLY energy. Upgradeable.
```

## Observed keyword / token leads

`Charmed`, `damageBonus+1`, `HOLY`, `Inflict`, `Repeat`, `Upgradeable`
