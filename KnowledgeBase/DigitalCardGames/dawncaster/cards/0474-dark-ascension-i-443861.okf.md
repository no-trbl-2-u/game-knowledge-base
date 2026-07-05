---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 443861
  name: "Dark Ascension I"
  ordinal: 474
  slug: "dark-ascension-i"
  category: "Form"
  type: "Corruption"
  rarity: "Common"
  expansion: "None"
  color: "None"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Anger"
  - "Ascend"
  - "difficulty"
  - "Reach"
  - "VOID"
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
    url: "https://blightbane.io/card/Dark_Ascension_I"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Dark Ascension I

## Card identity

- **Ordinal:** 474 of first 500 generated cards
- **Source card id:** `443861`
- **Category:** Form
- **Type:** Corruption
- **Rarity:** Common
- **Expansion:** None
- **Color:** None
- **Cost summary:** free / no listed energy cost

## Source-backed facts

- Claim: `Dark Ascension I` appears in the Neurrone Dawncaster SQLite card table with id `443861`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

At the start of your turn, gain [[difficulty]] Anger. Reach 5 VOID to Ascend to the next form.

## Raw rules HTML

```html
At the start of your turn, gain [[difficulty]] Anger. Reach 5 VOID to Ascend to the next form.
```

## Observed keyword / token leads

`Anger`, `Ascend`, `difficulty`, `Reach`, `VOID`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
