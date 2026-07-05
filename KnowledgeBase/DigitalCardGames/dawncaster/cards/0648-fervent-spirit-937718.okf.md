---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 937718
  name: "Fervent Spirit"
  ordinal: 648
  slug: "fervent-spirit"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Synthesis"
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
  - "allEnergy"
  - "Also"
  - "Bolster"
  - "Burning"
  - "Frenzy"
  - "Spend"
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
    url: "https://blightbane.io/card/Fervent_Spirit"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Fervent Spirit

## Card identity

- **Ordinal:** 648 of 1692 generated cards
- **Source card id:** `937718`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Synthesis
- **Color:** Purple
- **Cost summary:** intstr=1

## Source-backed facts

- Claim: `Fervent Spirit` appears in the Neurrone Dawncaster SQLite card table with id `937718`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Spend all your energy then inflict that much Burning. Frenzy: Also gain that much Bolster ([[allEnergy]]).

## Raw rules HTML

```html
Spend all your energy then inflict that much Burning. Frenzy: Also gain that much Bolster ([[allEnergy]]).
```

## Observed keyword / token leads

`allEnergy`, `Also`, `Bolster`, `Burning`, `Frenzy`, `Spend`
