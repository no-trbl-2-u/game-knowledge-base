---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 884552
  name: "Acquisition"
  ordinal: 13
  slug: "acquisition"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Catalyst"
  color: "Green"
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
  - "Delve"
  - "GOLD"
  - "HOLY"
  - "Pay"
  - "permaValue"
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
    url: "https://blightbane.io/card/Acquisition"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Acquisition

## Card identity

- **Ordinal:** 13 of 1692 generated cards
- **Source card id:** `884552`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Catalyst
- **Color:** Green
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Acquisition` appears in the Neurrone Dawncaster SQLite card table with id `884552`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Pay [[permaValue]] GOLD:
Delve a HOLY card and add it to your deck.

## Raw rules HTML

```html
Pay [[permaValue]] GOLD:<br>Delve a HOLY card and add it to your deck.
```

## Observed keyword / token leads

`Delve`, `GOLD`, `HOLY`, `Pay`, `permaValue`
