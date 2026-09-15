---
okf_version: 0.2
type: sources
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
  - id: "src-001"
    title: "Oathsworn: Into the Deepwood — BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/251661/oathsworn-into-the-deepwood"
    kind: bgg_page
    provenance: official
    retrieved_at: "2026-07-15"
    notes: "BGG identity and discovery page."
  - id: "src-002"
    title: "Oathsworn — Shadowborne Games"
    url: "https://www.shadowborne-games.com/pages/oathsworn"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-15"
    notes: "Publisher product page."
  - id: "src-003"
    title: "Oathsworn: Into the Deepwood — BGG Data"
    url: "https://www.bggdata.co.za/game/251661/oathsworn-into-the-deepwood/"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-15"
    notes: "BGG-facing rating, rank, weight, and summary mirror."
  - id: "src-004"
    title: "Oathsworn: Into the Deepwood Review — Meeple Mountain"
    url: "https://www.meeplemountain.com/reviews/oathsworn-into-the-deepwood/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-15"
    notes: "Review evidence on scale, combat, and complexity."
  - id: "src-005"
    title: "Oathsworn: Into the Deepwood Review — Tabletop Gaming"
    url: "https://www.tabletopgaming.co.uk/reviews/oathsworn-into-the-deepwood-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-15"
    notes: "Review evidence on campaign state and combat-resolution choices."
  - id: "src-006"
    title: "Oathsworn Into the Deepwood Review — Age of Miniatures"
    url: "https://ageofminiatures.com/oathsworn-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-15"
    notes: "Review evidence on party formation and chapter setup. Flagged ETIMEDOUT by the weekly check-links sweep on 2026-07-20; reconfirmed live (HTTP 200, same review text) in the 2026-08-15 and 2026-09-15 audit passes. Transient, not link rot."
  - id: "src-007"
    title: "Oathsworn: Into the Deepwood — Encounter Rule Book (official, English)"
    url: "https://drive.google.com/file/d/1C20PYk17Mh_cAAQxgKNl1JjcsmTmZBlQ/view?usp=sharing"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-09-15"
    notes: "2026-09-15 audit pass, alternate_source retry resolved: located via Shadowborne Games' official 'Printable Files' resources page (shadowborne-games.com/pages/resources), not via BGG. HTTP 200 via drive.usercontent.google.com; application/pdf; 125,239,772 bytes; 36 pages; SHA-256 1805c3d05a34a01b1d882524dab064c5c756a60754f81f6f25a713d5e0b7fddd."
  - id: "src-008"
    title: "Oathsworn: Into the Deepwood — Story Rule Book (official, English)"
    url: "https://drive.google.com/file/d/1eUmHux5TOpkzpGDTyn1epZWFoK2jM-8m/view?usp=sharing"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-09-15"
    notes: "2026-09-15 audit pass: same official resources page as src-007. HTTP 200; application/pdf; 81,909,402 bytes; 20 pages; SHA-256 e111d84e699e19b3d8307d7e11a577a1b820fed61e1edbfdb76db6c18255636d. Not yet mined for body claims this pass; covers the Story half of a chapter only."
confidence: high
status: verified
---

## Source registry

The publisher page and BGG page establish identity and product positioning. BGG Data supplies a retrievable snapshot of the BGG score signal. Reviews are used only for reception and high-level system summaries, not as substitutes for official rules text. The 2026-09-15 audit pass resolved the open official-rulebook gap: Shadowborne Games' own resources page links both rulebooks directly, bypassing the BGG discovery block this game's `scout-report.okf.md` followup had flagged.

## Open questions

- The Story Rule Book (src-008) has not yet been mined for body claims; a future pass should extract its chapter-narrative and city-map procedures.
