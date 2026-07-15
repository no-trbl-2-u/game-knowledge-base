---
okf_version: 0.2
type: card_record
card:
  name: "Ghostly Armor"
  slug: "ghostly-armor"
  source_id: "GHOSTLY_ARMOR"
  ordinal: 166
  character: "ironclad"
  color: "ironclad"
  rarity: "Uncommon"
  type: "Skill"
  cost: "1"
  keywords: ["Block", "Ethereal"]
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

- Claim: The card is Ghostly Armor (ironclad, Uncommon, Skill) with source identifier GHOSTLY_ARMOR.
  Source: src-001
  Evidence: dataset row id=GHOSTLY_ARMOR, name=Ghostly Armor, color=ironclad, rarity=Uncommon, type=Skill
  Confidence: high

## Rules text

Ethereal.
Gain 10 Block.

## Upgrade differences

Ethereal.
Gain 13 Block.

- Claim: The upgrade form is represented by the source payload's upgrade description and cost fields.
  Source: src-001
  Evidence: raw_json.upgrade in the dataset row.
  Confidence: high

## Provenance

- Claim: This record is generated from the CC BY 4.0 dataset snapshot and retains the source identifier; no card art is redistributed.
  Source: src-001, src-002
  Evidence: dataset README and LICENSE-DATA distinguish factual card data from Mega Crit game IP and exclude art from this corpus.
  Confidence: high
