---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 135506
  name: "Suspicious Offer"
  ordinal: 1502
  slug: "suspicious-offer"
  category: "Action"
  type: "Utility"
  rarity: "Legendary"
  expansion: "Infinitum"
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
  blood: 0
observed_terms:
  - "highestSnareUpgrade"
  - "Put"
  - "Snare"
  - "Upgrade"
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
    url: "https://blightbane.io/card/Suspicious_Offer"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Suspicious Offer

## Card identity

- **Ordinal:** 1502 of 1692 generated cards
- **Source card id:** `135506`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Legendary
- **Expansion:** Infinitum
- **Color:** Green
- **Cost summary:** dex=1

## Source-backed facts

- Claim: `Suspicious Offer` appears in the Neurrone Dawncaster SQLite card table with id `135506`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Put a Snare on top of your foe's deck. Upgrade it equal to the most upgraded Snare in their deck ([[highestSnareUpgrade]]).

## Raw rules HTML

```html
Put a Snare on top of your foe's deck. Upgrade it equal to the most upgraded Snare in their deck ([[highestSnareUpgrade]]).
```

## Observed keyword / token leads

`highestSnareUpgrade`, `Put`, `Snare`, `Upgrade`
