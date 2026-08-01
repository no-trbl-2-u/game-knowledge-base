---
okf_version: 0.2
type: design_reference
topic: "MTG — the color pie as a permission system: what each color may and may not do"
mechanics: []
better_if_labels: [balance-faction-asymmetry, strategic-depth]
sources:
  - id: "src-001"
    title: "Mark Rosewater — Mechanical Color Pie 2021 (Making Magic)"
    url: "https://magic.wizards.com/en/news/making-magic/mechanical-color-pie-2021"
    kind: other
    provenance: official
    retrieved_at: "2026-08-01"
    notes: "2021-10-18 snapshot cataloguing every ability's color assignment as primary/secondary/tertiary."
  - id: "src-002"
    title: "Mark Rosewater — The Value of Pie (Making Magic)"
    url: "https://magic.wizards.com/en/news/making-magic/value-pie-2003-08-18-0"
    kind: other
    provenance: official
    retrieved_at: "2026-08-01"
    notes: "2003-08-18 philosophy piece on why the color pie exists at all."
confidence: medium
status: verified
---

## Summary

Magic's color pie is not a stat-modifier or a matching-cost tax — it is a
permission system. Every ability in the game is assigned to colors at one of
three access levels (primary, secondary, tertiary), and each color carries
deliberate, exploitable weaknesses. Rosewater's position is that this
restriction system, not any individual mechanic, is the heart of the game:
identity comes from what a color is *forbidden* to do as much as from what
it does well. The 2021 "Mechanical Color Pie" article is the working
reference document — a literal registry of ability-by-ability permissions.

## Source-backed facts

- Claim: The color pie is, in its designer's words, the core of what makes
  Magic work.
  Source: src-002
  Evidence: "I believe the color pie is the heart of the game. I think it's at the core of what makes Magic tick."
  Confidence: high

- Claim: Access to an ability is tiered: "primary" means highest volume and
  usually lowest rarity in that color.
  Source: src-001
  Evidence: "This is the color (or colors) the ability is seen in most. That means it shows up in the highest volume and usually at the lowest rarity."
  Confidence: high

- Claim: "Secondary" access is regular but reduced; "tertiary" access is
  occasional, not present in every set.
  Source: src-001
  Evidence: "This is the color (or colors) that gets the ability occasionally. It's not every set."
  Confidence: high

- Claim: Weaknesses are load-bearing: each color has built-in gaps opponents
  can exploit, and this is intended.
  Source: src-002
  Evidence: "Each color has built in weaknesses that the opponent can exploit. But that doesn't mean you can't find creative solutions."
  Confidence: high

- Claim: The same effect may exist in multiple colors but with
  color-specific riders — e.g. black may draw cards, but must pay an extra
  cost that blue does not.
  Source: src-001
  Evidence: "Blue is best at card drawing. It has the most of it and no restrictions. Black's card drawing must involve paying some other cost."
  Confidence: high

- Claim: Removing the permission system would trade personality for
  efficiency — restrictions are what give colors identity.
  Source: src-002
  Evidence: "You have efficiency at the sake of personality...the most important part of the color pie."
  Confidence: medium

- Claim: Distinct, even blaring, color identity is a stated design goal the
  pie exists to serve.
  Source: src-002
  Evidence: "I want colors that are blaringly unique in what they represent. This is what the color pie adds to the game."
  Confidence: high

## Implications for designers

- A color/suit/die system earns its keep when it answers "what is this
  faction *allowed* to do," not "what discount does it get." If colors are
  only a matching-cost tax, the identity work is not being done.
- Permission is graded, not binary: primary/secondary/tertiary lets an
  effect exist everywhere while still feeling owned by one color. Volume
  and rarity are the enforcement levers.
- The cheapest way to differentiate two colors sharing an effect is a
  rider: same effect, different extra cost or condition per color.
- Write the permission registry down. The Mechanical Color Pie is a living
  document R&D actually consults; an unwritten pie drifts.
- Weaknesses must be real enough to exploit; a faction with no forbidden
  zone has no identity and no counterplay story.

## Open questions

- Quotes were machine-extracted from fetched bodies; re-verify verbatim
  wording in the next audit pass.
- The 2021 article's full ability-by-ability registry was not captured
  here — only the framing. If a project needs the actual assignments
  (e.g. to model a four-color permission table), fetch and excerpt the
  relevant ability families.
