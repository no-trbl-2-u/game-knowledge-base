---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 966324
  name: "Lightning Shield"
  ordinal: 942
  slug: "lightning-shield"
  category: "Action"
  type: "Magic"
  rarity: "Common"
  expansion: "Catalyst"
  color: "Blue"
  cost:
  dex: 0
  int: 1
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 0
  blood: 0
observed_terms:
  - "Attune"
  - "Barrier"
  - "Chain"
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
    url: "https://blightbane.io/card/Lightning_Shield"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Lightning Shield

## Card identity

- **Ordinal:** 942 of 1692 generated cards
- **Source card id:** `966324`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Common
- **Expansion:** Catalyst
- **Color:** Blue
- **Cost summary:** int=1

## Source-backed facts

- Claim: `Lightning Shield` appears in the Neurrone Dawncaster SQLite card table with id `966324`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain 3 Barrier.
At the start of next turn, gain Chain equal to your Barrier. Attune. Chain.

## Raw rules HTML

```html
Gain 3 Barrier.<br>At the start of next turn, gain Chain equal to your Barrier. Attune. Chain.
```

## Observed keyword / token leads

`Attune`, `Barrier`, `Chain`
