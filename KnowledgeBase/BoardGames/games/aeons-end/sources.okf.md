---
okf_version: 0.2
type: sources
game:
  title: "Aeon's End"
  slug: "aeons-end"
  bgg_id: 191189
  publisher: "Indie Boards & Cards"
  year: 2016
  weight: 2.80
  edition: "core game / second edition product page referenced"
scope: "base game"
mechanics: [cooperative-game, deck-bag-and-pool-building, deck-building, hand-management, variable-player-powers, solo-solitaire-game]
sources:
  - id: "src-001"
    title: "BoardGameGeek — Aeon's End"
    url: "https://boardgamegeek.com/boardgame/191189/aeons-end"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-08"
    notes: "BGG metadata: rating 7.9, rank about 108, 24K ratings, weight 2.80, mechanisms including Cooperative Game and Deck, Bag, and Pool Building."
  - id: "src-002"
    title: "Indie Boards & Cards — Aeon's End"
    url: "https://indieboardsandcards.com/our-games/aeons-end/"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-08"
    notes: "Official product page. Release shown as September 2017 for product page; description matches BGG."
  - id: "src-003"
    title: "UltraBoardGames — Aeons End Game Rules"
    url: "https://www.ultraboardgames.com/aeons-end/game-rules.php"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-08"
    notes: "Secondary rules text used for categorized rule extraction when direct official rulebook retrieval was not available."
  - id: "src-004"
    title: "Meeple Mountain — Aeon’s End Game Review"
    url: "https://www.meeplemountain.com/reviews/aeons-end/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-08"
    notes: "Andrew Lynch review published 2025-05-29; strong praise for no-shuffle deterministic deckbuilding and notes high difficulty."
  - id: "src-005"
    title: "BoardGameGeek — Aeon's End Ratings & Comments"
    url: "https://boardgamegeek.com/boardgame/191189/aeons-end/ratings?comment=1&rated=1"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-08"
    notes: "Community comment snippets used for reception friction such as setup tedium and market limitation."
  - id: "src-006"
    title: "BoardGameGeek filepage — Aeon's End Final Rulebook"
    url: "https://boardgamegeek.com/filepage/141295/aeons-end-final-rulebook"
    kind: rulebook_pdf
    provenance: community
    retrieved_at: "2026-07-08"
    notes: "Cloudflare-blocked (HTTP 403, challenge page) on retry; superseded by src-007, a mirror of the same official rulebook."
  - id: "src-007"
    title: "Aeon's End Rulebook (official, base game)"
    url: "https://cdn.1j1ju.com/medias/3f/5c/9e-aeons-end-rulebook.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-08"
    notes: "Official base-game rulebook (c 2016 Lone Oak Games), 20 pages, mirrored on 1j1ju.com's rules library; retrieved via curl -L and text-extracted with pypdf."
confidence: high
status: verified
---

## Summary

The publisher page and BGG page establish identity, selection signal, and focus fit. A 2026-07-08 retry found the BGG rulebook filepage still Cloudflare-blocked, but located and retrieved an equivalent official-rulebook mirror, resolving the run's main followup.

## Source-backed facts

- Claim: The official publisher page exists and describes the game as cooperative deckbuilding with variable turn order and discard-order planning.
  Source: src-002
  Evidence: "cooperative game that explores the deckbuilding genre"; "variable turn order"; "deck management rules".
  Confidence: high
- Claim: BGG supplies the strongest selection signal found in this run: displayed rating 7.9, about 24K ratings, rank about 108, and weight 2.80.
  Source: src-001
  Evidence: "BGG Rating 7.9"; "24K ratings"; "Overall Rank 108"; "Weight 2.80 / 5".
  Confidence: high
- Claim: The official base-game rulebook (Lone Oak Games, 2016) was retrieved in full and its text confirms the game's core structural claims (no-shuffle player decks, tiered non-reshuffled nemesis deck, turn-order deck composition).
  Source: src-007
  Evidence: Rulebook credits page: "© 2016 Lone Oak Games."; body text confirms deck/turn-order/nemesis mechanics also summarized by src-003.
  Confidence: high

## Open questions

- Whether this rulebook mirror (src-007) reflects first-printing or a later-printing edition; no explicit printing/version date was found in the extracted text (unlike Mage Knight's dated PDFs).
- Whether Indie Boards & Cards hosts a current rulebook at a URL not exposed by the product-page extraction, and whether a 2nd-edition errata document exists (BGG mentions one but it was not located this pass).

## Retry notes
- 2026-07-08: Resolved. `src-006` (BGG filepage) is Cloudflare-blocked; a web search surfaced `src-007`, an official-rulebook mirror on 1j1ju.com's rules library, successfully retrieved and text-extracted (20 pages, pypdf). Rule claims in `rules/edge-cases-faq.okf.md` were verified and upgraded against this text.
