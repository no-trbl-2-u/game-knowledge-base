---
okf_version: 0.1
type: scout_report
game:
  title: "Dune: Imperium"
  slug: "dune-imperium"
  bgg_id: 316554
  publisher: "Dire Wolf"
  year: 2020
  edition: "English base game"
scope: "base game"
sources:
  - id: "src-001"
    title: "Dune: Imperium — BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/316554/dune-imperium"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-06-30"
    notes: "Discovery source."
  - id: "src-002"
    title: "Dune: Imperium — Dire Wolf product page"
    url: "https://www.direwolfdigital.com/dune-imperium/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-06-30"
    notes: "Official product/source gateway."
  - id: "src-003"
    title: "DUNE_IMPERIUM_Rules_2020_10_26.pdf"
    url: "https://d19y2ttatozxjp.cloudfront.net/pdfs/DUNE_IMPERIUM_Rules_2020_10_26.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-06-30"
    notes: "Official rulebook downloaded and converted with pdftotext."
  - id: "src-004"
    title: "DUNE_IMPERIUM_FAQ_25-1-13.pdf"
    url: "https://d19y2ttatozxjp.cloudfront.net/pdfs/DUNE_IMPERIUM_FAQ_25-1-13.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-06-30"
    notes: "Official FAQ/errata downloaded and converted with pdftotext."
  - id: "src-005"
    title: "BG_Dune_Imperium_Board_Spaces_Sheet.pdf"
    url: "https://d19y2ttatozxjp.cloudfront.net/pdfs/BG_Dune_Imperium_Board_Spaces_Sheet.pdf"
    kind: other
    provenance: official
    retrieved_at: "2026-06-30"
    notes: "Official board-space sheet downloaded."
  - id: "src-006"
    title: "Dune: Imperium Rulebook and Supplements — BGG file page"
    url: "https://boardgamegeek.com/filepage/210689/dune-imperium-rulebook-and-supplements"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-06-30"
    notes: "Player usability complaint lead."
  - id: "src-008"
    title: "Dune Imperium is My Pick from 2020 — There Will Be Games"
    url: "https://therewillbe.games/articles-boardgame-reviews/8630-dune-imperium-is-my-pick-from-2020"
    kind: review
    provenance: secondary
    retrieved_at: "2026-06-30"
    notes: "Reception source."
  - id: "src-009"
    title: "Dune: Imperium — Geeky Guide"
    url: "https://www.geeky-guide.com/board-games/dune-imperium"
    kind: review
    provenance: secondary
    retrieved_at: "2026-06-30"
    notes: "Reception source."
  - id: "src-010"
    title: "Dune: Imperium — Dune goes all Euro and stuff"
    url: "https://douglassun.substack.com/p/dune-imperium-dune-goes-all-euro"
    kind: review
    provenance: secondary
    retrieved_at: "2026-06-30"
    notes: "Reception/source for balance concern."
  - id: "src-011"
    title: "Dune: Imperium App — App Store ratings/reviews"
    url: "https://apps.apple.com/us/app/dune-imperium/id1575414319"
    kind: review
    provenance: secondary
    retrieved_at: "2026-06-30"
    notes: "Digital adaptation reception and onboarding comments."
confidence: high
status: verified
---

## Summary

Daily scout chose **Dune: Imperium**. The official rulebook was found and used. The entry is complete under `KnowledgeBase/BoardGames/games/dune-imperium/` with index, sources, six rule documents, reception review synthesis, better-if synthesis, and this report.

## Source-backed facts

- Claim: BGG discovery marked Dune: Imperium as high-rank/high-rating and suitable for selection.
  Source: src-001
  Evidence: Search extraction showed rank around Overall 5/6, Strategy 7, rating 8.4, and tens of thousands of ratings/comments.
  Confidence: medium
- Claim: Official rulebook/FAQ/board-space files exist on Dire Wolf/CloudFront resource paths.
  Source: src-002, src-003, src-004, src-005
  Evidence: Terminal retrieval of publisher resources listed and downloaded official PDF URLs.
  Confidence: high
- Claim: The game combines deck-building with worker placement.
  Source: src-003
  Evidence: Rulebook p.2 / lines 17-21.
  Confidence: high
- Claim: The game ends at 10+ VP or empty Conflict Deck.
  Source: src-003
  Evidence: Rulebook p.6 / lines 371-373.
  Confidence: high

## Scout path

1. Checked existing game directory; `KnowledgeBase/BoardGames/games` did not exist, so Dune: Imperium was not already present.
2. Used BGG search results as discovery layer for rank, metadata, mechanism tags, file leads, and reception leads.
3. Located official Dire Wolf product/resource page.
4. Downloaded official rulebook, FAQ, and board-space PDF from `d19y2ttatozxjp.cloudfront.net` links exposed by the publisher resource page.
5. Converted PDFs with `pdftotext` and used short snippets/page/line references only.
6. Gathered review/player friction leads from BGG snippets, There Will Be Games, Geeky Guide, Substack review, and App Store review extraction.
7. Wrote OKF entry without mirroring copyrighted rulebook text.

## Strongest rule lesson

Dual-use cards create strategic pressure by binding action access and later reveal value into one object. A card is not merely a card; it is a route, a resource, and a withheld threat.

## Strongest reception complaint

Onboarding/procedure load: players praise the system but report a steep learning curve, procedural teaching burden, and timing ambiguity amplified by hidden intrigue and combat.

## Top 3 better-if opportunities

1. onboarding — scripted first round and card/board access tutorial.
2. rules ambiguity — timing-window player aid for Plot/Combat/Endgame Intrigue, reveal draws, and "when you win" effects.
3. component clarity — compact printable references/rule index to reduce table-footprint and lookup friction.

## Design implications for SomberSoft

- Use dual-use cards only when both uses matter.
- Let hidden combat create dread, but expose enough public risk indicators to prevent accusations of arbitrary loss.
- In digital adaptations, automate legality and timing but also explain why an action is legal/illegal; rules enforcement without explanation does not teach dominion.

## Open questions

- Do Uprising's changes represent a better official patch target than the original base game?
- Which player complaints are first-play friction versus persistent design cost?
- Can digital telemetry validate or dismiss leader-balance claims such as Glossu Rabban combat dominance?
