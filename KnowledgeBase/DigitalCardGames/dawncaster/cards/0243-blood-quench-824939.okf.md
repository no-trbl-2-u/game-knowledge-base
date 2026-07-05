---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 824939
  name: "Blood Quench"
  ordinal: 243
  slug: "blood-quench"
  category: "Action"
  type: "Utility"
  rarity: "Uncommon"
  expansion: "Synthesis"
  color: "Red"
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
  - "Adapted"
  - "Draining Adaptation"
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
    url: "https://blightbane.io/card/Blood_Quench"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Blood Quench

## Card identity

- **Ordinal:** 243 of first 500 generated cards
- **Source card id:** `824939`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Uncommon
- **Expansion:** Synthesis
- **Color:** Red
- **Cost summary:** blood=1

## Source-backed facts

- Claim: `Blood Quench` appears in the Neurrone Dawncaster SQLite card table with id `824939`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Draw a card. 
If it can be Adapted, add the Draining Adaptation.

## Raw rules HTML

```html
Draw a card. 
If it can be Adapted, add the Draining Adaptation.
```

## Observed keyword / token leads

`Adapted`, `Draining Adaptation`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
