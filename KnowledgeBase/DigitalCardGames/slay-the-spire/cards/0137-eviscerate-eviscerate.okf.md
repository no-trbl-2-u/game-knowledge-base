---
okf_version: 0.2
type: card_record
card:
  name: "Eviscerate"
  slug: "eviscerate"
  source_id: "EVISCERATE"
  ordinal: 137
  character: "silent"
  color: "silent"
  rarity: "Uncommon"
  type: "Attack"
  cost: "3"
  keywords: []
upgrade:
  cost: null
sources:
  - id: "src-001"
    title: "Slay the Spire 1 Cards dataset"
    url: "https://huggingface.co/datasets/t22000t/slay-the-spire-1-cards"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-15"
    notes: "CC BY 4.0 dataset snapshot; source id is the upstream stable card identifier."
  - id: "src-002"
    title: "Spire Archive upstream parser/API"
    url: "https://github.com/nkhoit/spire-archive"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-15"
    notes: "Upstream source named by the dataset; parsed from Slay the Spire game files."
confidence: high
status: verified
---

## Source-backed facts

- Claim: The card is Eviscerate (silent, Uncommon, Attack) with source identifier EVISCERATE.
  Source: src-001
  Evidence: dataset row id=EVISCERATE, name=Eviscerate, color=silent, rarity=Uncommon, type=Attack
  Confidence: high

## Rules text

Costs 1 less [G]
for each card discarded this turn.
Deal 7 damage 3 times.

## Upgrade differences

Costs 1 less [G]
for each card discarded this turn.
Deal 9 damage 3 times.

- Claim: The upgrade form is represented by the source payload's upgrade description and cost fields.
  Source: src-001
  Evidence: raw_json.upgrade in the dataset row.
  Confidence: high

## Provenance

- Claim: This record is generated from the CC BY 4.0 dataset snapshot and retains the source identifier; no card art is redistributed.
  Source: src-001, src-002
  Evidence: dataset README and LICENSE-DATA distinguish factual card data from Mega Crit game IP and exclude art from this corpus.
  Confidence: high
