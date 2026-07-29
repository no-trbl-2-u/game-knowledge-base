---
okf_version: 0.2
type: better_if
game:
  title: "Aeon's End: Legacy"
  slug: "aeons-end-legacy"
  bgg_id: 241451
  publisher: "Indie Boards & Cards"
  year: 2019
  players:
    min: 1
    max: 4
  complexity: expert
  weight: null
  edition: "base/standalone release"
scope: "design improvement synthesis"
mechanics: ["campaign-game", "cooperative-game", "deck-bag-and-pool-building", "hand-management", "legacy-game", "open-drafting", "solo-solitaire-game", "variable-player-powers"]
better_if_labels: ["campaign-progression", "setup-teardown", "onboarding"]
sources:
  - id: "src-001"
    title: "BoardGameGeek game page"
    url: "https://boardgamegeek.com/boardgame/241451/aeons-end-legacy"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-29"
    notes: "Canonical page blocked by site edge."
  - id: "src-002"
    title: "BoardGameGeek item API record"
    url: "https://api.geekdo.com/api/geekitems?ajax=1&objectid=241451&objecttype=thing&request=thing"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-29"
    notes: "Returned metadata, premise, publisher links, and mechanism links."
  - id: "src-003"
    title: "Aeon's End: Legacy — Indie Boards & Cards official product page"
    url: "http://www.indieboardsandcards.com/index.php/games/aeons-end-legacy/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-29"
    notes: "Publisher server returned Not Acceptable; URL was preserved from BGG's official website field."
  - id: "src-004"
    title: "Aeon's End: Legacy rulebook candidate — Indie Boards & Cards"
    url: "https://indieboardsandcards.com/our-games/aeons-end-legacy/"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-29"
    notes: "Candidate filename returned 404; no substitute PDF was invented."
  - id: "src-005"
    title: "Aeon's End: Legacy Review — The Dice Tower"
    url: "https://www.youtube.com/watch?v=ukkgf4HAXYk"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-29"
    notes: "Independent review video; fetched page metadata identifies the title, reviewer, and channel."
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

# Better-if — Aeon's End: Legacy

## Campaign-progression opportunity

- Claim: The campaign is better when persistent state, unlocks, and next-session obligations can be audited quickly.
  Source: src-002
  Evidence: Legacy Game and Scenario / Mission / Campaign Game are explicit BGG mechanism tags, establishing persistent campaign structure; exact reset and carry-forward rules remain unverified.
  Confidence: medium

## Friction opportunity

- Claim: A targeted improvement should reduce the documented friction without flattening the campaign's consequential choices.
  Source: src-005
  Evidence: No review-text friction claim was extracted from the fetched video page; friction is unknown, not disproven.
  Confidence: low
