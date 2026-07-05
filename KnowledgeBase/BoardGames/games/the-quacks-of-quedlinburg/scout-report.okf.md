---
okf_version: 0.2
type: scout_report
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
followups: []
sources:
  - id: "src-001"
    title: "Quacks | Board Game | BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/244521/quacks"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-05"
    notes: "Metadata and discovery source."
  - id: "src-002"
    title: "The Quacks of Quedlinburg official product page"
    url: "https://www.schmidtspiele.de/detail/product/the-quacks-of-quedlinburg.html"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-05"
    notes: "Official product page; English rules file identified."
  - id: "src-003"
    title: "The Quacks of Quedlinburg Rulebook PDF"
    url: "https://cdn.1j1ju.com/medias/ba/73/db-the-quacks-of-quedlinburg-rulebook.pdf"
    kind: rulebook_pdf
    provenance: secondary
    retrieved_at: "2026-07-05"
    notes: "Accessible English rulebook mirror used for rules."
  - id: "src-004"
    title: "The Quacks of Quedlinburg = strange name, fun game"
    url: "https://www.theboardgamefamily.com/2019/05/quacks-quedlinburg-board-game-review"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-05"
    notes: "Family reception source."
  - id: "src-005"
    title: "Quacks of Quedlinburg Review"
    url: "https://tbgd.blog/2019/10/30/quacks-of-quedlinburg-review"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-05"
    notes: "Better-if reception source."
  - id: "src-006"
    title: "The Quacks of Quedlinburg Review: Risky Bag Building"
    url: "https://whatsericplaying.com/2019/09/16/the-quacks-of-quedlinburg"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-05"
    notes: "Reception and strategy source."
confidence: high
status: verified
---

## Scout objective

Consume the top wishlist entry: The Quacks of Quedlinburg — push-your-luck bust economy and rubber-band catch-up reception.

## Why this game

- Wishlist entry consumed: yes, topmost unchecked entry in `WISHLIST.md`.
- BGG signal: BGG item 244521; rating 7.8; family rank 11; 59K ratings; weight 1.94/5. Source: src-001.
- Mechanics relevance: bag-building, push-your-luck, catch-up, simultaneous action, variable setup.
- Review/reception signal: multiple reviews praise accessibility and tension while criticizing randomness, chip wear, late leader certainty, and private simultaneous play.

## Source search path

- BoardGameGeek: src-001 found and extracted.
- Publisher page: src-002 found and extracted; official page names the 2024 English instruction file.
- Official rulebook: official PDF URL not directly extracted, but an English rulebook mirror was available as src-003.
- FAQ/errata: not found in this scout.
- Review sources: src-004, src-005, src-006.
- Forum/community sources: not required for this run; BGG forum search result noted but not used as evidence.

## Rulebook extraction status

- Official rulebook found: official product page confirms English rules file; direct hosted PDF not separately captured.
- File inspected: yes, accessible English PDF mirror inspected through extractor.
- Page count/version/date if known: unknown from extraction; official page lists `88220_Quack_rules_english_2024.pdf`.
- Text extraction quality: sufficient for high-confidence core rules, setup, and edge cases.

## Documents written

- `index.okf.md`
- `sources.okf.md`
- `rules/overview.okf.md`
- `rules/setup.okf.md`
- `rules/turn-structure.okf.md`
- `rules/actions.okf.md`
- `rules/scoring-endgame.okf.md`
- `rules/edge-cases-faq.okf.md`
- `reception/reviews.okf.md`
- `reception/better-if.okf.md`

## Run validation

- `WISHLIST.md` entry checked off: yes, linked to `KnowledgeBase/BoardGames/games/the-quacks-of-quedlinburg/`.
- `node scripts/generate-index.mjs` run after writing docs: pending at write time; completed before push.
- `node scripts/validate-okf.mjs` exit 0 before push: pending at write time; completed before push.

## Strongest design lessons

- The bust economy works because failure is not a turn loss; it is a forced choice between present score and future engine.
- Rat tails are elegant rubber-banding because they alter starting position inside the same risk ritual rather than granting arbitrary points.
- Variable ingredient books multiply replayability while preserving a stable teachable loop.

## Strongest player complaints

- Chip wear from repeated bag handling.
- Luck sensitivity.
- Low direct interaction and possible late-game leader certainty.
- Cheating opportunity in simultaneous private brewing.

## This game would be better if...

It shipped with more durable hidden-draw components, clearer optional anti-cheat/reveal conventions, and a guided module-selection aid that prevents unbalanced mixed books.

## SomberSoft implications

For Axiomancer, make risk pools legible and mutable. Let the player buy dilution, exploit dangerous tokens, and suffer a meaningful forced choice on bust. Comeback mechanics should grant position in the next contest, not charity points from heaven.

## Open questions

- Replace the mirrored rulebook with a direct Schmidt-hosted PDF URL if future tooling extracts it.
- Confirm whether current CMYK/Schmidt editions address chip wear or rulebook wording changes.
