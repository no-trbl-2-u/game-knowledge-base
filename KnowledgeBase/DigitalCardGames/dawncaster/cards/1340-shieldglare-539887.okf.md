---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 539887
  name: "Shieldglare"
  ordinal: 1340
  slug: "shieldglare"
  category: "Action"
  type: "Divine"
  rarity: "Uncommon"
  expansion: "Catalyst"
  color: "Purple"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 1
  blood: 0
observed_terms:
  - "HOLY"
  - "Impervious"
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
    url: "https://blightbane.io/card/Shieldglare"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Shieldglare

## Card identity

- **Ordinal:** 1340 of 1692 generated cards
- **Source card id:** `539887`
- **Category:** Action
- **Type:** Divine
- **Rarity:** Uncommon
- **Expansion:** Catalyst
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Shieldglare` appears in the Neurrone Dawncaster SQLite card table with id `539887`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:5] damage.
If you have 3 or more types of energy, gain HOLY and Impervious.

## Raw rules HTML

```html
Deal [damage:5] damage.<br>If you have 3 or more types of energy, gain HOLY and Impervious.
```

## Observed keyword / token leads

`HOLY`, `Impervious`
