---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 838666
  name: "Aura of Conviction"
  ordinal: 123
  slug: "aura-of-conviction"
  category: "Enchantment"
  type: "Divine"
  rarity: "Uncommon"
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
  - "Burning"
  - "Charmed"
  - "Memorized"
  - "Turn"
  - "Zeal"
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
    url: "https://blightbane.io/card/Aura_of_Conviction"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Aura of Conviction

## Card identity

- **Ordinal:** 123 of first 500 generated cards
- **Source card id:** `838666`
- **Category:** Enchantment
- **Type:** Divine
- **Rarity:** Uncommon
- **Expansion:** Synthesis
- **Color:** Gold
- **Cost summary:** holy=1

## Source-backed facts

- Claim: `Aura of Conviction` appears in the Neurrone Dawncaster SQLite card table with id `838666`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Start of Turn: Gain 1 Zeal.
This combat, Charmed and Burning you inflict is increased by your Zeal. Unique. Memorized.

## Raw rules HTML

```html
Start of Turn: Gain 1 Zeal.
This combat, Charmed and Burning you inflict is increased by your Zeal. Unique. Memorized.
```

## Observed keyword / token leads

`Burning`, `Charmed`, `Memorized`, `Turn`, `Zeal`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
