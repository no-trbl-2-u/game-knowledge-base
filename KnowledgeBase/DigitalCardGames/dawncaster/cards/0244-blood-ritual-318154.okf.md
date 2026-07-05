---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 318154
  name: "Blood Ritual"
  ordinal: 244
  slug: "blood-ritual"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Infinitum"
  color: "Orange"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 1
observed_terms:
  - "Ancestral"
  - "Bleeding"
  - "Charges"
  - "Inflict"
  - "Return"
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
    url: "https://blightbane.io/card/Blood_Ritual"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Blood Ritual

## Card identity

- **Ordinal:** 244 of 1692 generated cards
- **Source card id:** `318154`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Infinitum
- **Color:** Orange
- **Cost summary:** blood=1

## Source-backed facts

- Claim: `Blood Ritual` appears in the Neurrone Dawncaster SQLite card table with id `318154`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Inflict 3 Bleeding. 
Ancestral: Return a random card from your discard pile to your hand. Charges (3/3).

## Raw rules HTML

```html
Inflict 3 Bleeding. <br>Ancestral: Return a random card from your discard pile to your hand. Charges (3/3).
```

## Observed keyword / token leads

`Ancestral`, `Bleeding`, `Charges`, `Inflict`, `Return`
