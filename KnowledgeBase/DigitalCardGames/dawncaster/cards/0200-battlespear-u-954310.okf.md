---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: 954310
  name: "Battlespear U"
  ordinal: 200
  slug: "battlespear-u"
  category: "Basic Attack"
  type: "Divine"
  rarity: "Rare"
  expansion: "None"
  color: "Red"
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
  - "On Hit"
  - "Untempered"
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
    url: "https://blightbane.io/card/Battlespear_U"
    kind: other
    provenance: community
    retrieved_at: "2026-07-05"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
confidence: medium
status: draft
---

# Battlespear U

## Card identity

- **Ordinal:** 200 of first 500 generated cards
- **Source card id:** `954310`
- **Category:** Basic Attack
- **Type:** Divine
- **Rarity:** Rare
- **Expansion:** None
- **Color:** Red
- **Cost summary:** neutral=1

## Source-backed facts

- Claim: `Battlespear U` appears in the Neurrone Dawncaster SQLite card table with id `954310`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

Deal [damage:5] damage.
On Hit: Upgrade this by 5. Untempered.

## Raw rules HTML

```html
Deal [damage:5] damage.<br>On Hit: Upgrade this by 5. Untempered.
```

## Observed keyword / token leads

`On Hit`, `Untempered`, `Upgrade`

## Design notes for SomberSoft

- Preserve this record as source evidence, not final design guidance.
- Use the observed terms to seed parsing, clustering, and the future keyword glossary.
