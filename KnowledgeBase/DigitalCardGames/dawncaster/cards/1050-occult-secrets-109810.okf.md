---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 109810
  name: "Occult Secrets"
  ordinal: 1050
  slug: "occult-secrets"
  category: "Action"
  type: "Magic"
  rarity: "Uncommon"
  expansion: "Eclypse"
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
  - "Cursed"
  - "Hex"
  - "Inflict"
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
    url: "https://blightbane.io/card/Occult_Secrets"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Occult Secrets

## Card identity

- **Ordinal:** 1050 of 1692 generated cards
- **Source card id:** `109810`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Uncommon
- **Expansion:** Eclypse
- **Color:** Blue
- **Cost summary:** int=2, blood=1

## Source-backed facts

- Claim: `Occult Secrets` appears in the Neurrone Dawncaster SQLite card table with id `109810`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Draw 2 cards.
Inflict a random Hex for each Cursed card drawn.

## Raw rules HTML

```html
Draw 2 cards.<br>Inflict a random Hex for each Cursed card drawn.
```

## Observed keyword / token leads

`Cursed`, `Hex`, `Inflict`
