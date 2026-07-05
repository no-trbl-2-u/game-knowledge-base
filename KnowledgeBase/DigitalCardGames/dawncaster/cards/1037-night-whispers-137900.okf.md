---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 137900
  name: "Night Whispers"
  ordinal: 1037
  slug: "night-whispers"
  category: "Action"
  type: "Corruption"
  rarity: "Rare"
  expansion: "Synthesis"
  color: "Blue"
  cost:
    dex: 0
    int: 2
    str: 0
    holy: 0
    neutral: 0
    dexint: 0
    dexstr: 0
    intstr: 0
    blood: 1
observed_terms:
  - "Dominated"
  - "HEALTH"
  - "Otherwise"
  - "Sleeping"
  - "Subjugate"
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
    url: "https://blightbane.io/card/Night_Whispers"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Night Whispers

## Card identity

- **Ordinal:** 1037 of 1692 generated cards
- **Source card id:** `137900`
- **Category:** Action
- **Type:** Corruption
- **Rarity:** Rare
- **Expansion:** Synthesis
- **Color:** Blue
- **Cost summary:** int=2, blood=1

## Source-backed facts

- Claim: `Night Whispers` appears in the Neurrone Dawncaster SQLite card table with id `137900`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Subjugate your foe if they are Dominated or Sleeping and have less HEALTH than you. Otherwise inflict 1 Dominated.

## Raw rules HTML

```html
Subjugate your foe if they are Dominated or Sleeping and have less HEALTH than you. Otherwise inflict 1 Dominated.
```

## Observed keyword / token leads

`Dominated`, `HEALTH`, `Otherwise`, `Sleeping`, `Subjugate`
