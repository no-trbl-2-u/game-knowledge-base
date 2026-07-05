---
okf_version: 0.2
type: sources
game:
  title: "The Quacks of Quedlinburg"
  slug: "the-quacks-of-quedlinburg"
  bgg_id: 244521
  publisher: "Schmidt Spiele / North Star Games"
  year: 2018
  weight: 1.94
  edition: "English base game / Quacks current listing"
scope: "base game"
mechanics: [deck-bag-and-pool-building, push-your-luck, catch-up-mechanism, simultaneous-action-selection, dice-rolling, variable-setup]
sources:
  - id: "src-001"
    title: "Quacks | Board Game | BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/244521/quacks"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-05"
    notes: "Discovery layer for metadata and current BGG listing."
  - id: "src-002"
    title: "The Quacks of Quedlinburg official product page"
    url: "https://www.schmidtspiele.de/detail/product/the-quacks-of-quedlinburg.html"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-05"
    notes: "Official product page; identifies English game-instructions file name."
  - id: "src-003"
    title: "The Quacks of Quedlinburg Rulebook PDF"
    url: "https://cdn.1j1ju.com/medias/ba/73/db-the-quacks-of-quedlinburg-rulebook.pdf"
    kind: rulebook_pdf
    provenance: secondary
    retrieved_at: "2026-07-05"
    notes: "Accessible English PDF mirror; not publisher-hosted. Used sparingly for rule claims."
  - id: "src-004"
    title: "The Quacks of Quedlinburg = strange name, fun game"
    url: "https://www.theboardgamefamily.com/2019/05/quacks-quedlinburg-board-game-review"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-05"
    notes: "Family review praising replayability, catch-up, icon reminders, and broad family appeal."
  - id: "src-005"
    title: "Quacks of Quedlinburg Review"
    url: "https://tbgd.blog/2019/10/30/quacks-of-quedlinburg-review"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-05"
    notes: "Review with concrete complaints about luck, component wear, cheating potential, and late runaway perception."
  - id: "src-006"
    title: "The Quacks of Quedlinburg Review: Risky Bag Building"
    url: "https://whatsericplaying.com/2019/09/16/the-quacks-of-quedlinburg"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-05"
    notes: "Review with setup/play notes, strategy advice, and praise for catch-up and variable books."
confidence: high
status: verified
---

## Summary

Sources are adequate for a verified base-game scout: BGG for metadata, Schmidt Spiele for official product identity, an accessible English rulebook mirror for rules, and three independent reviews for reception.

## Source-backed facts

- Claim: The official product page exists and lists a game-instructions file named `88220_Quack_rules_english_2024.pdf`.
  Source: src-002
  Evidence: "Game instructions"; "88220_Quack_rules_english_2024.pdf".
  Confidence: high
- Claim: The accessible rulebook source is not publisher-hosted and should be treated as secondary provenance.
  Source: src-003
  Evidence: URL host is `cdn.1j1ju.com`, not Schmidt Spiele or CMYK.
  Confidence: high

## Open questions

- Direct official PDF URL from Schmidt Spiele was not separately extracted; future librarian pass may replace src-003 with a publisher-hosted file if accessible.
