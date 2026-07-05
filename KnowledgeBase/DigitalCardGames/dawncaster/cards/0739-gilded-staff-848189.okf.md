---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 848189
  name: "Gilded Staff"
  ordinal: 739
  slug: "gilded-staff"
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
  neutral: 2
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "HOLY"
  - "Trigger"
  - "Turn"
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
    url: "https://blightbane.io/card/Gilded_Staff"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Gilded Staff

## Card identity

- **Ordinal:** 739 of 1692 generated cards
- **Source card id:** `848189`
- **Category:** Basic Attack
- **Type:** Divine
- **Rarity:** Common
- **Expansion:** Metaprogress
- **Color:** Brown
- **Cost summary:** neutral=2

## Source-backed facts

- Claim: `Gilded Staff` appears in the Neurrone Dawncaster SQLite card table with id `848189`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:6] damage.
Trigger all Start of Turn effects if HOLY was spent to play this card.

## Raw rules HTML

```html
Deal [damage:6] damage.
Trigger all Start of Turn effects if HOLY was spent to play this card.
```

## Observed keyword / token leads

`HOLY`, `Trigger`, `Turn`
