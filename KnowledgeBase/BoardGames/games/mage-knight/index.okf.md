---
okf_version: 0.1
type: game_index
game:
  title: "Mage Knight Board Game"
  slug: "mage-knight"
  bgg_id: 96848
  publisher: "WizKids"
  year: 2011
  edition: "English base game / rules updated March 2012"
scope: "base game"
sources:
  - id: "src-001"
    title: "Mage Knight Board Game — BoardGameGeek"
    url: "https://boardgamegeek.com/boardgame/96848/mage-knight-board-game"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-03"
    notes: "Discovery layer for metadata, mechanisms, classification, official-link lead, review/forum leads, complexity signal."
  - id: "src-002"
    title: "Mage Knight — WizKids product page"
    url: "https://wizkids.com/mage-knight"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-03"
    notes: "Official product page; web search extraction exposed overview, details, component list, and official rule/FAQ links."
  - id: "src-003"
    title: "MK_rulebook_ENG_searchable-mar2012.pdf"
    url: "https://wizkidsgames.com/wp-content/uploads/mage/MK_rulebook_ENG_searchable-mar2012.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-03"
    notes: "Official rulebook linked by WizKids. Direct extraction timed out and TLS hostname failed in terminal; rules facts use extracted search snippets and secondary rule-page corroboration, not mirrored PDF text."
  - id: "src-004"
    title: "MK_walkthrough_ENG_searchable-mar2012.pdf"
    url: "https://wizkidsgames.com/wp-content/uploads/mage/MK_walkthrough_ENG_searchable-mar2012.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-03"
    notes: "Official walkthrough linked by WizKids; used as official availability evidence, not fully extracted."
  - id: "src-005"
    title: "MK_FAQ_1.0v2.pdf"
    url: "https://wizkidsgames.com/wp-content/uploads/mage/MK_FAQ_1.0v2.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-03"
    notes: "Official FAQ linked by WizKids; direct extraction failed, but BGG FAQ confirms active rules questions."
confidence: medium
status: needs_followup
---

## Summary

Mage Knight Board Game is a 2011 WizKids title by Vlaada Chvátil about exploring and conquering the Atlantean Empire through deck-driven movement, combat, influence, mana management, units, reputation, fame, scenarios, solo/co-op/competitive modes, and character progression. It was selected because it is not yet present in the KB, BGG exposes a heavy-game reception signal, and WizKids still publishes official rules, walkthrough, and FAQ links.

## Source-backed facts

- Claim: BGG lists Mage Knight Board Game as item ID 96848, designed by Vlaada Chvátil and published by WizKids.
  Source: src-001
  Evidence: BGG search extract: "Designer ... Vlaada Chvátil" and "Publisher ... WizKids" on the Mage Knight Board Game page.
  Confidence: high
- Claim: BGG classifies the game with adventure, exploration, fantasy, and fighting categories and mechanisms including card-play conflict resolution, cooperative game, deck/bag/pool building, dice rolling, grid movement, and variable-player powers.
  Source: src-001
  Evidence: BGG extract mechanism/category block.
  Confidence: high
- Claim: WizKids positions Mage Knight as "Epic Exploration and Conquest" mixing character development, intrigue, and combat.
  Source: src-002
  Evidence: WizKids snippet: "a game of Epic Exploration and Conquest that mixes character development, intrigue, and the clashing of swords".
  Confidence: high
- Claim: WizKids lists release date November 2011, 1-4 players, ages 14+, and 1-4 hour game time.
  Source: src-002
  Evidence: WizKids Details table: "Release Date November 2011", "Game Time 1-4 Hours", "Ages 14+", "Players 1-4".
  Confidence: high
- Claim: WizKids officially links a Game Walkthrough, Download Rules, and Official FAQ.
  Source: src-002
  Evidence: WizKids page links named "Game Walkthrough", "Download Rules", and "Official FAQ".
  Confidence: high

## Rules / Mechanics

Mage Knight is an optimization adventure system. The main verbs are move, explore, interact, recruit, fight, heal, gain fame/reputation, learn stronger cards, and conquer scenario targets. Its lesson is not simply complexity; it is compression. One hand of cards becomes mobility, purchasing power, attack, block, healing, and timing pressure.

## Player friction

The strongest friction signals are rules density, long play time, turn analysis, and downtime outside solo play. BGG lists a complexity weight of 4.38/5 in search extraction, and player comments cite "rules checking" and "fiddly rules."

## Praised design

Reception praises the game as a dense solo/co-op puzzle with meaningful character progression, replayability, deterministic combat, and strong card-combo payoff.

## Better-if opportunities

See `reception/better-if.okf.md`.

## Design implications for SomberSoft

- High agency can come from forcing players to wring multiple currencies out of one hand, not from offering many unpriced menu actions.
- Solo/co-op automation benefits when the clock is structural: deck exhaustion and scenario rounds press the player without a full enemy AI script.
- Rules reference burden is a design cost. If a game wants Mage Knight depth, it needs Mage Knight-grade player aids or better.

## Open questions

- Direct PDF text extraction failed this run; verify page references from the official PDFs with a later browser/PDF-capable fetch.
- Decide whether Ultimate Edition deserves a separate edition entry after base-game study is complete.

## Retry notes
- 2026-07-04: Retried the official rulebook/walkthrough/FAQ PDFs at both `wizkidsgames.com` and `wizkids.com` hosts; all three now return HTTP 500 Internal Server Error on both hostnames (previously only a TLS hostname mismatch on `wizkidsgames.com`). This looks like a server-side outage/misconfiguration at WizKids, not a fetch-tool issue. A future attempt needs a Wayback Machine snapshot of the three PDFs, or to re-check `wizkids.com/mage-knight` for relocated download links once the WizKids site is healthy again.
