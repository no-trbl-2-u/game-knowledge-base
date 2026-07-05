---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 205682
  name: "Calm the Hunger"
  ordinal: 325
  slug: "calm-the-hunger"
  category: "Action"
  type: "Magic"
  rarity: "Common"
  expansion: "Eclypse"
  color: "Purple"
  cost:
  dex: 0
  int: 0
  str: 0
  holy: 0
  neutral: 0
  dexint: 0
  dexstr: 0
  intstr: 1
  blood: 0
observed_terms:
  - "Anger"
  - "Lifedrain"
  - "Remove VOIDVOID"
  - "Remove VOIDVOIDVOID"
  - "Remove VOIDVOIDVOIDVOID"
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
    url: "https://blightbane.io/card/Calm_the_Hunger"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Calm the Hunger

## Card identity

- **Ordinal:** 325 of 1692 generated cards
- **Source card id:** `205682`
- **Category:** Action
- **Type:** Magic
- **Rarity:** Common
- **Expansion:** Eclypse
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Calm the Hunger` appears in the Neurrone Dawncaster SQLite card table with id `205682`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:5] damage.
Remove VOIDVOID: Gain 1 Anger.
Remove VOIDVOIDVOID: Lifedrain.
Remove VOIDVOIDVOIDVOID: Draw 1.

## Raw rules HTML

```html
Deal [damage:5] damage.<br>Remove VOIDVOID: Gain 1 Anger.<br>Remove VOIDVOIDVOID: Lifedrain.<br>Remove VOIDVOIDVOIDVOID: Draw 1.
```

## Observed keyword / token leads

`Anger`, `Lifedrain`, `Remove VOIDVOID`, `Remove VOIDVOIDVOID`, `Remove VOIDVOIDVOIDVOID`
