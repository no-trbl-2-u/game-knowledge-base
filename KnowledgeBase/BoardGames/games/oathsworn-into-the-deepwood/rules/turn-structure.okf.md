---
okf_version: 0.2
type: rule_category
game:
  title: "Oathsworn: Into the Deepwood"
  slug: "oathsworn-into-the-deepwood"
  bgg_id: 251661
  publisher: "Shadowborne Games"
  year: 2022
  weight: 3.70
  edition: "base game"
scope: "base game"
mechanics: [campaign-game, cooperative-game, dice-rolling, hand-management, point-to-point-movement, variable-player-powers]
sources:
  - id: "src-005"
    title: "Oathsworn Review — Tabletop Gaming"
    url: "https://www.tabletopgaming.co.uk/reviews/oathsworn-into-the-deepwood-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-15"
    notes: "Narrative/combat structure summary."
  - id: "src-009"
    title: "Oathsworn: Into the Deepwood — Encounter Rule Book"
    url: "https://drive.google.com/open?id=1C20PYk17Mh_cAAQxgKNl1JjcsmTmZBlQ"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-11-25"
    notes: "Official rulebook; Sequence of Play. See sources.okf.md for the full technical receipt."
confidence: high
status: verified
---

## Source-backed facts

- Claim: Each chapter alternates a narrative Story part (resolved via the Story Book/Companion App, locations, and checks) with a tactical Encounter part played in rounds; this confirms src-005's reviewer-level description of alternating world-state development and a distinct combat mechanism.
  Source: src-005, src-009
  Evidence: "An Encounter is played out over a series of rounds." (Encounter Rule Book p.8); reviewer summary of alternating narrative and combat.
  Confidence: high

- Claim: Each Encounter round consists of exactly four phases, performed in fixed order: (1) Refresh Phase — regain cooldown-0 Ability Cards and regenerate Animus; (2) Oathsworn Phase — players take turns, in clockwise order from a freely chosen first player, each optionally making one move action and playing up to one Ability Card, until all players decline further turns; (3) Encounter Phase — draw and resolve a Stage Card, then activate minions; (4) End of Round Phase — end round-duration effects. If the Free Company starts ambushed, Round 1 skips straight to the Encounter Phase.
  Source: src-009
  Evidence: "Each round consists of the following four phases, performed in order: 1. Refresh Phase... 2. Oathsworn Phase... 3. Encounter Phase... 4. End of Round Phase..." (Encounter Rule Book p.8).
  Confidence: high

- Claim: On a full character's turn, both the move action and playing an Ability Card are optional; a companion may instead make one move action and either attack or activate a special ability per their Companion/Archetype Card.
  Source: src-009
  Evidence: "On your turn, you may make one move action and play up to one Ability Card. Both of these are optional... Companions may make one move action and either attack or activate a special ability" (Encounter Rule Book p.8).
  Confidence: high

## Turn sequence

A chapter resolves its Story part (location-by-location narrative, checks, and story actions) before its Encounter part (the four-phase round structure above), repeating until the Encounter is won or the Free Company is reduced to zero conscious Oathsworn. Enemy activation within the Encounter Phase follows a fixed targeting/movement procedure (see rules/edge-cases-faq.okf.md).
