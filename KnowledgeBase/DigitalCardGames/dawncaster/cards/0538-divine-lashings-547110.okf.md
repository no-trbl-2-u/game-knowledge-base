---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 547110
  name: "Divine Lashings"
  ordinal: 538
  slug: "divine-lashings"
  category: "Action"
  type: "Divine"
  rarity: "Uncommon"
  expansion: "Infinitum"
  color: "Gold"
  cost:
    dex: 0
    int: 0
    str: 0
    holy: 2
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 0
observed_terms:
  - "my(status)Zeal"
  - "Take"
  - "Zeal"
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
    url: "https://blightbane.io/card/Divine_Lashings"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Divine Lashings

## Card identity

- **Ordinal:** 538 of 1692 generated cards
- **Source card id:** `547110`
- **Category:** Action
- **Type:** Divine
- **Rarity:** Uncommon
- **Expansion:** Infinitum
- **Color:** Gold
- **Cost summary:** holy=2

## Source-backed facts

- Claim: `Divine Lashings` appears in the Neurrone Dawncaster SQLite card table with id `547110`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Take damage equal to your Zeal, then deal [damage:0] damage for each point of your Zeal ([[my(status)Zeal]]).

## Raw rules HTML

```html
Take damage equal to your Zeal, then deal [damage:0] damage for each point of your Zeal ([[my(status)Zeal]]).
```

## Observed keyword / token leads

`my(status)Zeal`, `Take`, `Zeal`
