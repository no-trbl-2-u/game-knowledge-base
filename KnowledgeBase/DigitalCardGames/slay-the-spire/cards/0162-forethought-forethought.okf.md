---
okf_version: 0.2
type: card_record
card:
  name: "Forethought"
  slug: "forethought"
  source_id: "FORETHOUGHT"
  ordinal: 162
  character: "colorless"
  color: "colorless"
  rarity: "Uncommon"
  type: "Skill"
  cost: "0"
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

- Claim: The card is Forethought (colorless, Uncommon, Skill) with source identifier FORETHOUGHT.
  Source: src-001
  Evidence: dataset row id=FORETHOUGHT, name=Forethought, color=colorless, rarity=Uncommon, type=Skill
  Confidence: high

## Rules text

Put a card from your hand to the bottom of your draw pile. It costs 0 until played.

## Upgrade differences

Put any number of cards from your hand to the bottom of your draw pile. They cost 0 until played.

- Claim: The upgrade form is represented by the source payload's upgrade description and cost fields.
  Source: src-001
  Evidence: raw_json.upgrade in the dataset row.
  Confidence: high

## Provenance

- Claim: This record is generated from the CC BY 4.0 dataset snapshot and retains the source identifier; no card art is redistributed.
  Source: src-001, src-002
  Evidence: dataset README and LICENSE-DATA distinguish factual card data from Mega Crit game IP and exclude art from this corpus.
  Confidence: high
