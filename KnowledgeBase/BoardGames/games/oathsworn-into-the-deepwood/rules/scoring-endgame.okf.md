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
  - id: "src-002"
    title: "Oathsworn — Shadowborne Games"
    url: "https://www.shadowborne-games.com/pages/oathsworn"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-15"
    notes: "Campaign framing."
  - id: "src-005"
    title: "Oathsworn Review — Tabletop Gaming"
    url: "https://www.tabletopgaming.co.uk/reviews/oathsworn-into-the-deepwood-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-15"
    notes: "Persistent world-state summary."
  - id: "src-008"
    title: "Oathsworn: Into the Deepwood — Story Rule Book"
    url: "https://drive.google.com/open?id=1eUmHux5TOpkzpGDTyn1epZWFoK2jM-8m"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-11-25"
    notes: "Official rulebook; Running Out of Items (Knockout Track as campaign score), campaign-failure condition. See sources.okf.md for the full technical receipt."
  - id: "src-009"
    title: "Oathsworn: Into the Deepwood — Encounter Rule Book"
    url: "https://drive.google.com/open?id=1C20PYk17Mh_cAAQxgKNl1JjcsmTmZBlQ"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-11-25"
    notes: "Official rulebook; Ending the Encounter, Tally Level Loot and Losses, Oathsworn Levels. See sources.okf.md for the full technical receipt."
confidence: high
status: verified
---

## Campaign persistence

This is campaign progression rather than a conventional victory-point euro: player actions develop the world state and the Free Company's characters level up, and the party continues through chapters. A single running tally — the Knockout Track — is the closest thing to a campaign score, and it counts against the Free Company (lower is better).

- Claim: The Free Company Sheet's Knockout Track is explicitly named as the campaign score, and it accumulates penalty ticks rather than points — a higher track total means a lower overall score.
  Source: src-008
  Evidence: "This track records your overall score for the campaign. The higher the track, the lower your overall score." (Story Rule Book p.12). This confirms and sharpens src-005's "world-state changes and develops" framing: the tracked state includes an explicit, inverted score.
  Confidence: high

- Claim: An Encounter ends in success when all of the enemy's HP dice are removed from the Encounter Board, or in failure when all four Oathsworn are reduced to 0 HP (unconscious, or killed under the Hardcore variant). If both conditions would occur simultaneously, it counts as success.
  Source: src-009
  Evidence: "An Encounter ends in one of two ways. Either the Encounter is defeated by removing all their HP dice from the Encounter Board or the Free Company is defeated when all Oathsworn go unconscious. If both events happen at the same time, the Encounter is defeated." (Encounter Rule Book p.24).
  Confidence: high

- Claim: On Encounter failure, the Free Company either moves on and accepts the loss, or replays the Encounter at the cost of 4 Knockout Track ticks (modified by difficulty: +2/+1 on Journeyman/Pilgrim, -1/-2 on Grim/Dread); replaying does not add further ticks on subsequent attempts. Separately, each unconscious/dead Oathsworn at the end of an Encounter marks a further Knockout tick, grants an Injury Card, and costs a lost item.
  Source: src-009
  Evidence: "Replay the Encounter: Mark 4 ticks on the Knockout Track... This is your score for the Encounter regardless of future successes" (Encounter Rule Book p.24); Losses steps 1-3 (Encounter Rule Book p.24).
  Confidence: high

- Claim: After every Encounter, the Free Company gains 1 character Level (per a fixed per-level bonus table running at least to level 21) and loots fixed quantities of Common and Unique Item Cards for the next chapter.
  Source: src-009
  Evidence: Oathsworn Levels table and Loot steps (Encounter Rule Book pp.24-26).
  Confidence: high

- Claim: The campaign fails outright — independent of any single Encounter's outcome — if the Free Company ever has fewer than 4 available Oathsworn remaining (relevant mainly under the Hardcore variant, where defeated Oathsworn are killed rather than merely knocked unconscious and can never be played again).
  Source: src-008
  Evidence: "If you ever have fewer than 4 available Oathsworn remaining, then your journey is over; you have failed to complete the campaign." (Story Rule Book p.9).
  Confidence: high

## Open questions

The precise number of chapters in the base campaign and what, concretely, constitutes a full campaign "win" (as opposed to the per-Encounter success/failure and running Knockout score above) are not stated in either rules PDF — that resolution lives in the Story Book/Encounter Book scenario content, which is out of this corpus's copyright scope, so it stays UNKNOWN pending a document that states it.
