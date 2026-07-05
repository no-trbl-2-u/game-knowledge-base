---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 458928
  name: "Dark Inquiry"
  ordinal: 483
  slug: "dark-inquiry"
  category: "Action"
  type: "Corruption"
  rarity: "Common"
  expansion: "Metamorphosis"
  color: "Blue"
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
  - "Corrupted"
  - "Foretell"
  - "foretell+3"
  - "HEALTH"
  - "Scholar"
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
    url: "https://blightbane.io/card/Dark_Inquiry"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Dark Inquiry

## Card identity

- **Ordinal:** 483 of first 500 generated cards
- **Source card id:** `458928`
- **Category:** Action
- **Type:** Corruption
- **Rarity:** Common
- **Expansion:** Metamorphosis
- **Color:** Blue
- **Cost summary:** blood=1

## Source-backed facts

- Claim: `Dark Inquiry` appears in the Neurrone Dawncaster SQLite card table with id `458928`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Foretell [[foretell+3]].
Corrupted: Gain 4 HEALTH.
Scholar: Draw a card.

## Raw rules HTML

```html
Foretell [[foretell+3]].<br>Corrupted: Gain 4 HEALTH.<br>Scholar: Draw a card.
```

## Observed keyword / token leads

`Corrupted`, `Foretell`, `foretell+3`, `HEALTH`, `Scholar`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
