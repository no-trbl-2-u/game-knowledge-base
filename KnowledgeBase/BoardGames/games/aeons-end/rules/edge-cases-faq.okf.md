---
okf_version: 0.2
type: rule_category
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
    notes: "BGG community page and classification."
  - id: "src-003"
    title: "UltraBoardGames — Aeons End Game Rules"
    url: "https://www.ultraboardgames.com/aeons-end/game-rules.php"
    kind: other
    provenance: secondary
    retrieved_at: "2026-07-08"
    notes: "Secondary rules summary used for edge-case leads."
  - id: "src-007"
    title: "Aeon's End Rulebook (official, base game)"
    url: "https://cdn.1j1ju.com/medias/3f/5c/9e-aeons-end-rulebook.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-08"
    notes: "Official base-game rulebook (c 2016 Lone Oak Games), 20 pages, mirrored on 1j1ju.com's rules library after the BGG filepage (src-006) returned a Cloudflare 403 challenge; retrieved via curl -L and text-extracted with pypdf."
confidence: high
status: verified
---

## Summary

The official base-game rulebook confirms every edge case previously sourced only from UltraBoardGames, and adds the win/loss conditions, corruption-deck-empty ruling, and turn-order-deck composition rules.

## Source-backed facts

- Claim: If a supply pile runs out, it stays empty and is not replaced.
  Source: src-007
  Evidence: "Empty Supply Piles: If a supply pile runs out, it is considered empty. Do not replace it."
  Confidence: high
- Claim: When the turn-order deck is empty and a card must be drawn or revealed, all turn-order cards are shuffled together to re-form the deck.
  Source: src-007
  Evidence: "When the turn order deck is empty and a new turn order card must be drawn or revealed, shuffle all of the turn order cards together and place them facedown to make the turn order deck again."
  Confidence: high
- Claim: The turn-order deck always contains four player turn-order cards and two nemesis turn-order cards; a 3-player game uses one card per player plus a wild card that lets the players choose who takes that turn.
  Source: src-007
  Evidence: "The turn order deck is always composed of four player turn order cards and two nemesis turn order cards... For three players, place one turn order card for each player plus the wild turn order card in the deck. When the wild turn order card is drawn, the players decide which one of them will take that turn."
  Confidence: high
- Claim: The Nemesis deck is built in three shuffled tiers (stacked tier 3 on the bottom, tier 1 on top) and is never reshuffled once assembled.
  Source: src-007
  Evidence: "Shuffle each pile of cards separately. Place the tier 3 cards on bottom facedown, the tier 2 cards facedown on top of the tier 3 cards, and the tier 1 cards facedown on top of the tier 2 cards... Do not shuffle the nemesis deck once it has been created."
  Confidence: high
- Claim: If a player would gain a corruption and the corruption deck is empty, Gravehold suffers 2 damage instead of the player gaining a corruption.
  Source: src-007
  Evidence: "If a player would gain a corruption and the corruption deck is empty, Gravehold suffers 2 damage instead."
  Confidence: high
- Claim: Players win if the nemesis deck and all minions/powers are cleared, or the nemesis reaches 0 life; players lose if all players are exhausted (0 life) or Gravehold reaches 0 life, and some nemeses add their own immediate-loss condition on their mat.
  Source: src-007
  Evidence: "The players are victorious if... The nemesis has no cards in its deck and no minions or powers in play. [or] The nemesis has 0 life."; "The players lose if... All the players are exhausted (have 0 life). [or] Gravehold has 0 life. In addition, a nemesis may have a specific victory condition listed on the nemesis mat that causes the players to lose immediately."
  Confidence: high
- Claim: BGG notes an errata lead for second edition and expansions, but no official second-edition errata document was located during this pass.
  Source: src-001
  Evidence: "2nd Edition Errata (AE + WE + all expansions)".
  Confidence: medium

## Rules / Mechanics

- Empty market piles reduce future deckbuilding options; empty corruption deck converts corruption gain into direct Gravehold damage instead.
- The turn-order deck resets by shuffling because variable turn order must remain unpredictable within bounded composition.
- The Nemesis deck remains ordered by tier to preserve escalation.

## Open questions

- What are the official second-edition errata items for base-game cards and Nemesis rules? (BGG lead not yet retrieved — see `sources.okf.md` retry notes.)
- Which card interactions most often cause rules disputes?

## Retry notes
- 2026-07-08: Resolved for base-game rules. The BGG filepage (src-006) is Cloudflare-blocked (HTTP 403, challenge page), but a legitimate official-rulebook mirror was found via web search on 1j1ju.com's rules library and successfully retrieved/extracted, confirming and extending every edge case above. The 2nd-edition errata document itself is still unretrieved.
