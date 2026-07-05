---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 230637
  name: "Dark Aspiration"
  ordinal: 477
  slug: "dark-aspiration"
  category: "Action"
  type: "Corruption"
  rarity: "Common"
  expansion: "Catalyst"
  color: "Green"
  cost:
  dex: 1
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 2
observed_terms:
  - "Corrupted"
  - "Increase"
  - "Sinister"
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
    url: "https://blightbane.io/card/Dark_Aspiration"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Dark Aspiration

## Card identity

- **Ordinal:** 477 of 1692 generated cards
- **Source card id:** `230637`
- **Category:** Action
- **Type:** Corruption
- **Rarity:** Common
- **Expansion:** Catalyst
- **Color:** Green
- **Cost summary:** dex=1, blood=2

## Source-backed facts

- Claim: `Dark Aspiration` appears in the Neurrone Dawncaster SQLite card table with id `230637`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Draw a card.
Corrupted: Increase your Sinister by 3. Sinister

## Raw rules HTML

```html
Draw a card.<br>Corrupted: Increase your Sinister by 3. Sinister
```

## Observed keyword / token leads

`Corrupted`, `Increase`, `Sinister`
