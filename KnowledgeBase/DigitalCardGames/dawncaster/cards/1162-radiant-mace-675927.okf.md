---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 675927
  name: "Radiant Mace"
  ordinal: 1162
  slug: "radiant-mace"
  category: "Basic Attack"
  type: "Divine"
  rarity: "Common"
  expansion: "Metaprogress"
  color: "Brown"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 1
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "(cardvalue)"
  - "Critical Hit"
  - "Gain HOLY"
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
    url: "https://blightbane.io/card/Radiant_Mace"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Radiant Mace

## Card identity

- **Ordinal:** 1162 of 1692 generated cards
- **Source card id:** `675927`
- **Category:** Basic Attack
- **Type:** Divine
- **Rarity:** Common
- **Expansion:** Metaprogress
- **Color:** Brown
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Radiant Mace` appears in the Neurrone Dawncaster SQLite card table with id `675927`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:3] damage.
Gain HOLY and Critical Hit every ([[(cardvalue)]]/3) attacks.

## Raw rules HTML

```html
Deal [damage:3] damage.<br>Gain HOLY and Critical Hit every ([[(cardvalue)]]/3) attacks.
```

## Observed keyword / token leads

`(cardvalue)`, `Critical Hit`, `Gain HOLY`
