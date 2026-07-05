---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 618846
  name: "Ancient Curse"
  ordinal: 53
  slug: "ancient-curse"
  category: "Action"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Eclypse"
  color: "Orange"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 1
  intstr: 0
  blood: 0
observed_terms:
  - "After"
  - "Deadly Effigy"
  - "Heavy"
  - "tempValue"
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
    url: "https://blightbane.io/card/Ancient_Curse"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Ancient Curse

## Card identity

- **Ordinal:** 53 of first 500 generated cards
- **Source card id:** `618846`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Eclypse
- **Color:** Orange
- **Cost summary:** dexstr=1

## Source-backed facts

- Claim: `Ancient Curse` appears in the Neurrone Dawncaster SQLite card table with id `618846`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Draw a card. 
After you cast this ([[tempValue]]/4) times, shuffle a Deadly Effigy into your foe's discardpile. Heavy.

## Raw rules HTML

```html
Draw a card. <br>After you cast this ([[tempValue]]/4) times, shuffle a Deadly Effigy into your foe's discardpile. Heavy.
```

## Observed keyword / token leads

`After`, `Deadly Effigy`, `Heavy`, `tempValue`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
