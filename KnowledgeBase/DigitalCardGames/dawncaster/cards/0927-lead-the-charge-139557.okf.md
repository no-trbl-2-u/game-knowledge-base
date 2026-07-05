---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 139557
  name: "Lead the Charge"
  ordinal: 927
  slug: "lead-the-charge"
  category: "Action"
  type: "Utility"
  rarity: "Common"
  expansion: "Catalyst"
  color: "Purple"
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
  - "Banner"
  - "Blessing"
  - "Gain Rally"
  - "Memorized"
  - "ownedbanners"
  - "Repeat"
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
    url: "https://blightbane.io/card/Lead_the_Charge"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Lead the Charge

## Card identity

- **Ordinal:** 927 of 1692 generated cards
- **Source card id:** `139557`
- **Category:** Action
- **Type:** Utility
- **Rarity:** Common
- **Expansion:** Catalyst
- **Color:** Purple
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Lead the Charge` appears in the Neurrone Dawncaster SQLite card table with id `139557`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Gain Rally and a Blessing based on the energy spent. Repeat for each Banner you own ([[ownedbanners]]). Memorized.

## Raw rules HTML

```html
Gain Rally and a Blessing based on the energy spent. Repeat for each Banner you own ([[ownedbanners]]). Memorized.
```

## Observed keyword / token leads

`Banner`, `Blessing`, `Gain Rally`, `Memorized`, `ownedbanners`, `Repeat`
