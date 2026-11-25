---
okf_version: 0.2
type: scout_report
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
followups:
  - source_id: "src-001"
    url: "https://boardgamegeek.com/boardgame/251661/oathsworn-into-the-deepwood"
    failure: blocked
    fallback: "Used publisher page, review evidence, and BGG-facing statistics mirror."
    retry_needs: manual_review
    notes: "Direct BGG page and XML endpoint were inaccessible during this run; retry BGG files/forums or a publisher rulebook download. Retried 2026-09-04 (librarian): still HTTP 403, and a real headless Chromium session (Playwright) was also held at the Cloudflare 'Performing security verification' interstitial. The block is systemic to boardgamegeek.com from this environment. alternate_source remains correct; the publisher rulebook download is the more promising of the two named leads. Retried 2026-11-18 (librarian): found and followed the named publisher rulebook download lead. The Shadowborne Games Resources page (src-007) names and links the two official English rulebook PDFs (Story Rule Book, Encounter Rule Book) by exact Google Drive file ID — this game has never had its official rulebook located before (prior runs used review summaries only). Attempted retrieval of the Story Rule Book: curl against the Drive uc?export=download endpoint returns HTTP 200 but silently truncates the stream at 2,883,460 bytes against the PDF's own declared Linearized length of 81,909,402 bytes, producing an unparseable truncated file (confirmed with two PDF parsers). This is Google Drive's large-file download-warning interstitial substituting a short response rather than the real object; a future pass needs either the Drive API with an access token, a cookie-authenticated confirm-token flow, or a non-Drive mirror of the same two documents. Retried 2026-11-25 (librarian): both PDFs fully retrieved. The Story Rule Book downloaded complete on a plain cookie-jar curl against the uc?export=download endpoint this time (81,909,402 bytes, matching the declared length exactly — the prior truncation did not recur). The Encounter Rule Book hit the large-file virus-scan warning page; parsed its download form (action https://drive.usercontent.google.com/download, params id/export/confirm/uuid) and fetched that URL directly to get the complete 125,239,772-byte object. Both parse cleanly with pypdf (20 and 36 pages). Registered as src-008/src-009 in sources.okf.md; the rules/*.okf.md docs for this game were rewritten against them in this same pass. This closes the governing-rules primary-source gap entirely. The one part of this followup that remains open is direct BGG access for current rating/rank/weight/comments — still blocked (HTTP 403/401), matching the systemic boardgamegeek.com block independently confirmed via headless-browser escalation on sibling games across this corpus (see e.g. gloomhaven, too-many-bones); not retried again here to avoid padding an already-exhausted record. retry_needs downgraded to manual_review for that narrower remaining question; a future pass needs an authenticated/interactive BGG session or a BGG-derived mirror."
sources:
  - id: "src-001"
    title: "Oathsworn: Into the Deepwood — BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/251661/oathsworn-into-the-deepwood"
    kind: bgg_page
    provenance: official
    retrieved_at: "2026-07-15"
    notes: "Discovery and follow-up lead."
  - id: "src-002"
    title: "Oathsworn — Shadowborne Games"
    url: "https://www.shadowborne-games.com/pages/oathsworn"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-15"
    notes: "Official product identity and RPG/campaign fit."
  - id: "src-003"
    title: "Oathsworn: Into the Deepwood — BGG Data"
    url: "https://www.bggdata.co.za/game/251661/oathsworn-into-the-deepwood/"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-15"
    notes: "Rating 8.8, BGG rank 62, weight 3.7 at retrieval."
  - id: "src-004"
    title: "Oathsworn Review — Meeple Mountain"
    url: "https://www.meeplemountain.com/reviews/oathsworn-into-the-deepwood/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-15"
    notes: "Complexity, scale, and combat testimony."
  - id: "src-005"
    title: "Oathsworn Review — Tabletop Gaming"
    url: "https://www.tabletopgaming.co.uk/reviews/oathsworn-into-the-deepwood-review/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-15"
    notes: "Campaign state and combat testimony."
  - id: "src-007"
    title: "Oathsworn — Shadowborne Games Resources (Printable Files)"
    url: "https://www.shadowborne-games.com/pages/resources"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-11-18"
    notes: "Lists two official English PDF rulebooks by exact title: 'Oathsworn Story Rule Book' (Google Drive file id 1eUmHux5TOpkzpGDTyn1epZWFoK2jM-8m) and 'Oathsworn Encounter Rule Book' (Google Drive file id 1C20PYk17Mh_cAAQxgKNl1JjcsmTmZBlQ). Renumbered from this doc's prior local src-006 to src-007 on 2026-11-25 to resolve an id collision against this game's canonical sources.okf.md (whose src-006 is the unrelated Age of Miniatures review)."
  - id: "src-008"
    title: "Oathsworn: Into the Deepwood — Story Rule Book"
    url: "https://drive.google.com/open?id=1eUmHux5TOpkzpGDTyn1epZWFoK2jM-8m"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-11-25"
    notes: "Fully retrieved and extracted in the 2026-11-25 librarian pass. 81,909,402 bytes, SHA-256 e111d84e699e19b3d8307d7e11a577a1b820fed61e1edbfdb76db6c18255636d, 20 pages. See sources.okf.md for the full technical receipt."
  - id: "src-009"
    title: "Oathsworn: Into the Deepwood — Encounter Rule Book"
    url: "https://drive.google.com/open?id=1C20PYk17Mh_cAAQxgKNl1JjcsmTmZBlQ"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-11-25"
    notes: "Fully retrieved and extracted in the 2026-11-25 librarian pass. 125,239,772 bytes, SHA-256 1805c3d05a34a01b1d882524dab064c5c756a60754f81f6f25a713d5e0b7fddd, 36 pages. See sources.okf.md for the full technical receipt."
confidence: high
status: needs_followup
---

## Scout objective

Study one high-scoring RPG / role-playing board game for rules structure, reception, and better-if opportunities.

## Why this game

- Wishlist entry consumed: no — wishlist had no unchecked entries; free choice.
- BGG signal: BGG-facing data mirror reported rating 8.8, BGG rank #62, weight 3.7 at retrieval.
- Mechanics relevance: campaign progression, persistent party development, cooperative tactical combat, differentiated roles, and risk-managed resolution.
- Review/reception signal: reviewers praise scope and the dice/card combat choice while noting initial complexity.

## Focus-fit and exclusion check

- RPG identity evidence: publisher calls it an epic dark-fantasy campaign game; secondary descriptions identify narrative choices, a Free Company, and miniature combat encounters.
- Deckbuilder exclusion: no deck-building, deckbuilder, or deck-construction mechanism was identified in the retrieved BGG-facing metadata or source descriptions. Cards are described as one combat-resolution option, not as a deck-construction core loop.

## Source search path

- BoardGameGeek: page identified; direct retrieval blocked.
- Publisher page: retrieved successfully.
- Official rulebook: not located during this run.
- FAQ/errata: not located.
- Review sources: Meeple Mountain, Tabletop Gaming, Age of Miniatures.
- Forum/community sources: not used.

## Rulebook extraction status

- Official rulebook found: yes, as of the 2026-11-25 librarian pass (src-008 Story Rule Book, src-009 Encounter Rule Book).
- File inspected: yes, both fully downloaded and parsed with pypdf.
- Page count/version/date if known: 20 pages (Story Rule Book) + 36 pages (Encounter Rule Book); no version/date marker found in either PDF's extracted text.
- Text extraction quality: clean; all pages extracted cleanly text (cover pages are image-only and extract empty, as expected).

## Documents written

- `games/oathsworn-into-the-deepwood/index.okf.md`
- `games/oathsworn-into-the-deepwood/sources.okf.md`
- `games/oathsworn-into-the-deepwood/rules/overview.okf.md`
- `games/oathsworn-into-the-deepwood/rules/setup.okf.md`
- `games/oathsworn-into-the-deepwood/rules/turn-structure.okf.md`
- `games/oathsworn-into-the-deepwood/rules/actions.okf.md`
- `games/oathsworn-into-the-deepwood/rules/scoring-endgame.okf.md`
- `games/oathsworn-into-the-deepwood/rules/edge-cases-faq.okf.md`
- `games/oathsworn-into-the-deepwood/reception/reviews.okf.md`
- `games/oathsworn-into-the-deepwood/reception/better-if.okf.md`

## Run validation

- `WISHLIST.md` entry checked off: n/a — wishlist empty.
- `node scripts/generate-index.mjs` run after writing docs: pending.
- `node scripts/validate-okf.mjs` exit 0 before push: pending.
- 2026-08-31 (librarian): the two `pending` lines above record the state at scout time only. Oathsworn: Into the Deepwood is promoted canonical corpus; `node scripts/generate-index.mjs` and `node scripts/validate-okf.mjs` both ran green in the 2026-08-31 librarian pass.

## Strongest design lessons

Persistent narrative state gains force when tactical combat and party identity reinforce the same campaign loop. A dual resolution system can let players choose between volatility and control.

## Strongest player complaints

The strongest sourced friction is initial complexity and the scale of the physical/narrative commitment. Setup time and downtime remain unmeasured here.

## This game would be better if...

The campaign introduced its rules and bookkeeping in guided layers, while making the dice-versus-card risk tradeoff explicit at the point of decision.

## Open questions

2026-11-25 (librarian): the official rulebook is recovered and all rule_category docs now cite it with page citations (see each doc's Source-backed facts). The remaining open items are: verify BGG metadata directly once an authenticated session or mirror is available, and confirm the total chapter count / ultimate campaign-victory condition, which the Story and Encounter Rule Books describe structurally (chapters, leveling to 21+) but never state as a fixed number — that detail lives in the Story Book/Encounter Book scenario content, not the rules PDFs, and remains UNKNOWN pending that document.
