---
okf_version: 0.2
type: scout_report
game:
  title: "Root"
  slug: "root"
  bgg_id: 237182
  publisher: "Leder Games"
  year: 2018
  weight: 3.84
  edition: "base game / current Leder rules library"
scope: "base game"
mechanics: [action-points, action-queue, action-retrieval, area-majority-influence, area-movement, dice-rolling, hand-management, multi-use-cards, negotiation, variable-player-powers, variable-setup]
sources:
  - id: "src-001"
    title: "Root | Board Game | BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/237182/root"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-06"
    notes: "Discovery source and metadata."
  - id: "src-002"
    title: "Leder Games Resources"
    url: "https://ledergames.com/pages/resources"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-08"
    notes: "Retried with a browser-capable fetch; resolved. Page lists direct PDF links for Law of Root (Oct 2025), Learning to Play, Walking Through Root, Root Rules and Errata, and Root Update Kit."
  - id: "src-003"
    title: "Leder Rules Library — Root"
    url: "https://rules.ledergames.com/?product=root"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-06"
    notes: "Official live rules and errata library; search excerpts used for rules claims."
  - id: "src-004"
    title: "How to play Root: board game's rules, setup and scoring explained"
    url: "https://www.dicebreaker.com/games/root-game/how-to/how-to-play-root-board-game"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-08"
    notes: "Retried via curl -L (the page is reachable; the earlier failure was a fetch-tool timeout, not a dead link) and cross-checked its quoted claims against the fetched text; all matched."
  - id: "src-007"
    title: "Law of Root (official rulebook PDF, Oct 2025 printing)"
    url: "https://cdn.shopify.com/s/files/1/0106/0162/7706/files/Root_Base_Law_Oct_2025.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-08"
    notes: "Direct PDF link surfaced by the browser-capable retry of src-002; retrieved via curl -L and text-extracted with pypdf, 32 pages. Confirms turn phases, 30-VP win condition, and dominance-card alternate wins with page references."
  - id: "src-005"
    title: "Root — Shut Up & Sit Down"
    url: "https://www.shutupandsitdown.com/games/root/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-06"
    notes: "Extracted successfully for faction and reception overview."
  - id: "src-006"
    title: "Root Board Game Review"
    url: "https://gideonsgaming.com/root-board-game-review"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-06"
    notes: "Search excerpts used for reception and better-if claims; extraction timed out."
confidence: high
status: verified
---

## Scout objective

Study Root as a high-signal asymmetric conflict game with official rules access and strong reception evidence.

## Why this game

- Wishlist entry consumed: wishlist empty — free choice.
- BGG signal: BGG page showed Root (2018), rank 34, rating 8.1, 65K ratings, weight 3.84/5.
- Mechanics relevance: variable player powers, area majority/influence, area movement, action systems, dice battle, cards, and negotiation.
- Review/reception signal: secondary sources emphasize high complexity, high strategic depth, strong asymmetry, and player-count/faction-mix pressure.

## Source search path

- BoardGameGeek: found Root item 237182 and metadata.
- Publisher page: Leder resources page found official rules links; extraction timed out.
- Official rulebook/rules: Leder Rules Library found and used through search excerpts.
- FAQ/errata: Leder Rules Library cited as official live rules/errata.
- Review sources: Shut Up & Sit Down, Dicebreaker, Gideon's Gaming.
- Forum/community sources: not used except BGG public metadata; no community rule interpretation was needed.

## Rulebook extraction status

- Official rulebook found: yes, via Leder resources page.
- File inspected: no direct PDF extraction; live official rules excerpts inspected through search.
- Page count/version/date if known: resources page lists "Law of Root, Oct 2025"; PDF page count not confirmed.
- Text extraction quality: partial; sufficient for high-level rules docs, not for page-specific granular citations.

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

- `WISHLIST.md` entry checked off: n-a, wishlist already fully checked.
- `node scripts/generate-index.mjs` run after writing docs: yes.
- `node scripts/validate-okf.mjs` exit 0 before push: yes.

## Strongest design lessons

Root keeps a common timing/map skeleton while moving most complexity into faction-local procedure. That lets asymmetry feel radical without making the board itself unreadable.

## Strongest player complaints

The player must learn more than their own turn. Reviews identify the real burden as understanding every faction enough to oppose it.

## This game would be better if...

The first-play path and table aids reduced opponent-faction opacity, and low-player-count faction pressure were less dependent on expansions or automated substitutes.

## Open questions

- Identify the most common live-table rules disputes from official FAQ, BGG rules forum, or Root community sources.

## Retry notes
- 2026-07-08 (librarian pass): Resolved. `src-002` (Leder resources page) and `src-004` (Dicebreaker how-to) both fetched successfully this time — `src-002` via a browser-capable fetch, `src-004` via `curl -L` (the earlier failures were fetch-tool timeouts, not dead links or blocks). The resources page exposed a direct link to the October 2025 Law of Root PDF (`src-007`), which was downloaded and text-extracted with pypdf (32 pages); `sources.okf.md` now cites it with page references for the turn-phase names and victory conditions. Dicebreaker's previously-cited quotes were cross-checked against the freshly fetched page text and all matched.
