---
okf_version: 0.2
type: better_if
game:
  title: "Sword & Sorcery: Immortal Souls"
  slug: "sword-and-sorcery-immortal-souls"
  bgg_id: 170771
  publisher: "Ares Games"
  year: 2017
  players:
    min: 1
    max: 5
  complexity: expert
  weight: null
  edition: "base/standalone release"
scope: "design improvement synthesis"
mechanics: ["campaign-game", "action-points", "area-movement", "cooperative-game", "dice-rolling", "modular-board", "solo-solitaire-game", "variable-player-powers"]
better_if_labels: ["campaign-progression", "setup-teardown", "onboarding"]
sources:
  - id: "src-001"
    title: "BoardGameGeek game page"
    url: "https://boardgamegeek.com/boardgame/170771/sword-sorcery-immortal-souls"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-29"
    notes: "Canonical page blocked by site edge."
  - id: "src-002"
    title: "BoardGameGeek item API record"
    url: "https://api.geekdo.com/api/geekitems?ajax=1&objectid=170771&objecttype=thing&request=thing"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-29"
    notes: "Returned metadata, publisher links, mechanism links, and the campaign/RPG description."
  - id: "src-003"
    title: "Sword & Sorcery official site"
    url: "https://www.sword-and-sorcery.com/home-page/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-29"
    notes: "Official line site fetched successfully; product identity was corroborated with the Ares rulebook page."
  - id: "src-004"
    title: "Sword & Sorcery: Immortal Souls English Rulebook — Ares Games"
    url: "https://boardgamegeek.com/boardgame/170771/sword-sorcery-immortal-souls"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-29"
    notes: "Ares page identifying the complete rulebook was also fetched at https://www.aresgames.eu/18265; direct PDF downloaded successfully, but host certificate validation failed in this environment."
  - id: "src-005"
    title: "Sword & Sorcery: Immortal Souls Review — The Dice Tower"
    url: "https://www.youtube.com/watch?v=t5n4MNk7XhU"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-29"
    notes: "Independent review video; fetched page metadata identifies the title, reviewer, channel, and runtime."
  - id: "src-006"
    title: "BGG top-1000 ranking snapshot"
    url: "https://raw.githubusercontent.com/5h-am/Board_Game_Store/b018bd937292fc41a2297ce868bf2938b45244da/boardgameDatabase/boardgames_ranks.csv"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-29"
    notes: "Snapshot used for rating, Bayes average, rank, and vote count."
confidence: medium
status: verified
last_verified: "2026-07-29"
summary: "Campaign re-entry and friction opportunities."
---

# Better-if — Sword & Sorcery: Immortal Souls

## Campaign-progression opportunity

- Claim: The campaign is better when persistent state, unlocks, and next-session obligations can be audited quickly.
  Source: src-002
  Evidence: Heroes grow across the story through Soul points, restored legendary status, multiple powers, magic, soul weapons, and artifacts.
  Confidence: medium

## Friction opportunity

- Claim: A targeted improvement should reduce the documented friction without flattening the campaign's consequential choices.
  Source: src-005
  Evidence: No review-text friction claim was extracted from the fetched video page; rules burden, scenario balance, and campaign length remain unknown in this batch.
  Confidence: low
