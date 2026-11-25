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
    notes: "Review evidence on party formation and chapter setup."
  - id: "src-007"
    title: "Oathsworn — Shadowborne Games Resources (Printable Files)"
    url: "https://www.shadowborne-games.com/pages/resources"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-11-18"
    notes: "Lists the two official English PDF rulebooks by exact Google Drive file ID. Registered here (was previously recorded only as a locally-numbered id inside scout-report.okf.md, which collided with this file's own src-006; librarian 2026-11-25 fixed the collision by registering it canonically here)."
  - id: "src-008"
    title: "Oathsworn: Into the Deepwood — Story Rule Book"
    url: "https://drive.google.com/open?id=1eUmHux5TOpkzpGDTyn1epZWFoK2jM-8m"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-11-25"
    notes: "Official rulebook, linked from src-007. Retrieved by following Google Drive's uc?export=download redirect with a cookie jar; HTTP 200, application/pdf, 81,909,402 bytes (matches the PDF's own declared Linearized length), SHA-256 e111d84e699e19b3d8307d7e11a577a1b820fed61e1edbfdb76db6c18255636d, 20 pages, parses cleanly with pypdf. This is the governing-rules document for Free Company/character setup, story actions, checks, and Appendix I token rules. The large-file Google Drive virus-scan interstitial that truncated the 2026-11-18 attempt did not reappear on retrieval; no confirm-token step was needed for this file (contrast src-009)."
  - id: "src-009"
    title: "Oathsworn: Into the Deepwood — Encounter Rule Book"
    url: "https://drive.google.com/open?id=1C20PYk17Mh_cAAQxgKNl1JjcsmTmZBlQ"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-11-25"
    notes: "Official rulebook, linked from src-007. Google Drive served its large-file virus-scan warning page for this asset; followed the warning page's own download form (action https://drive.usercontent.google.com/download with id/export/confirm/uuid parameters) to retrieve the real object: HTTP 200, application/pdf, 125,239,772 bytes (matches the PDF's own declared Linearized length), SHA-256 1805c3d05a34a01b1d882524dab064c5c756a60754f81f6f25a713d5e0b7fddd, 36 pages, parses cleanly with pypdf. This is the governing-rules document for Encounter setup, round phases, combat resolution, enemy targeting/movement, leveling, and the official FAQ."
confidence: high
status: verified
---

## Source registry

The publisher page and BGG page establish identity and product positioning. BGG Data supplies a retrievable snapshot of the BGG score signal. Reviews are used only for reception and high-level system summaries, not as substitutes for official rules text. src-008 and src-009 are the official Story and Encounter Rule Books and now anchor the rules-category docs; reviews are retained only for reception evidence and are no longer cited for rules claims the rulebooks themselves settle.

## Open questions

The official rulebooks are now retrieved and extracted (src-008, src-009; see the 2026-11-25 librarian note on scout-report.okf.md). The BGG page (src-001) itself remains blocked from direct fetch, matching the systemic boardgamegeek.com block documented across this corpus; src-003's BGG-derived mirror stands in for current rating/rank/weight pending an authenticated BGG session.
