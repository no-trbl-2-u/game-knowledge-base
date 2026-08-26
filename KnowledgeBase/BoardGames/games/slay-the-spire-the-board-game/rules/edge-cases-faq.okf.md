---
okf_version: 0.2
type: rule_category
game:
  title: "Slay the Spire: The Board Game"
  slug: "slay-the-spire-the-board-game"
  bgg_id: 338960
  publisher: "Contention Games"
  year: 2024
  edition: "base game"
scope: "base game"
mechanics: [deck-building, cooperative-game, hand-management, campaign-game, point-to-point-movement, variable-player-powers, solo-solitaire-game]
sources:
  - id: "src-002"
    title: "Rulebook - Contention Games"
    url: "https://contentiongames.com/_images/STS_KS_Rulebook.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-08"
    notes: "Full 24-page text extracted (pypdf) via curl -L on 2026-07-08, not just the table of contents. This hosted copy still lists 'Sequential Turns' as an optional rule on page 23 with no teardown section and no Ascension 7/A7 mention, so it predates the v2.30 change BGG (src-003) describes — likely v2.27 or earlier."
  - id: "src-003"
    title: "Slay the Spire - Official Rulebook"
    url: "https://boardgamegeek.com/filepage/276680/slay-the-spire-official-rulebook"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-07-04"
    notes: "v2.27/v2.30 change notes, A7 sticker fix."
  - id: "src-004"
    title: "Contention Games Kickstarter FAQ (Downfall/reprint)"
    url: "https://www.kickstarter.com/projects/contentiongames/sts-downfall/faqs?category_id=34&total_hits=670267"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-04"
    notes: "Reprint reset-game and Gremlin Leader clarifications."
  - id: "src-007"
    title: "REVIEW: Slay the Spire: The Board Game"
    url: "https://rollinginthemeep.com/2025/05/22/review-slay-the-spire-the-board-game"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-04"
    notes: "Solo play weakness relative to the video game."
  - id: "src-008"
    title: "A Review of Slay The Spire (The Board Game) From Someone Who Doesn't Like Rogue-like Games And Has Never Played The Video Game!"
    url: "https://coopgestalt.com/2024/06/13/a-review-of-slay-the-spire-the-board-game-from-someone-who-doesnt-like-rogue-like-games-and-has-never-played-the-video-game"
    kind: review
    provenance: secondary
    retrieved_at: "2026-07-04"
    notes: "Rulebook ambiguity assuming video-game knowledge."
confidence: high
status: needs_followup
followups:
  - source_id: "src-004"
    url: "https://www.kickstarter.com/projects/contentiongames/sts-downfall/faqs?category_id=34&total_hits=670267"
    failure: blocked
    fallback: "Existing extracted rulebook text (src-002) and BGG change-note summary (src-003) cover general FAQ/errata ground; the Downfall/reprint reset-game clarification and Gremlin Leader wording are not independently confirmed."
    retry_needs: wayback_snapshot
    notes: "2026-07-04: WebFetch and curl -L both returned HTTP 403 (Kickstarter bot/verification wall). 2026-07-08 (librarian): retried via Wayback CDX search; zero snapshots exist for this project's FAQ page. 2026-08-26 (librarian): re-retried direct fetch (still 403) and the Wayback availability API (still zero snapshots, matching 2026-07-08). Found the topic discussed on BGG threads 3296089, 3290922, and 3364531 (Gremlin Leader / Act 1 summon deck) via WebSearch snippets — confirms a rulebook clarification exists stating Gremlins are in the Act 1 summon deck — but BGG WebFetch returns 403 and the XML API now returns 401, so no exact quote could be extracted; snippets are paraphrase, not citable Evidence. Next attempt needs an authenticated Kickstarter/BGG session or a working archive.org path."
  - source_id: "src-002"
    url: "https://contentiongames.com/_images/STS_KS_Rulebook.pdf"
    failure: other
    fallback: "Full 24-page text is extracted and used for the sections above, but this hosted copy predates the v2.30 revision (no teardown section, no Ascension 7/A7 sticker-fix text, still lists Sequential Turns as optional)."
    retry_needs: alternate_source
    notes: "2026-08-26 (librarian): re-fetched src-002 directly (still HTTP 200, still 24 pages, unchanged via pdftotext diff — Contention Games' own hosted PDF still predates v2.30). Located a candidate v2.30 PDF on Scribd ('Slay the Spire - Rulebook v2.30 Reprint Web', https://www.scribd.com/document/815966403/Slay-the-Spire-Rulebook-v2-30-Reprint-Web) with a confirmed Wayback snapshot (http://web.archive.org/web/20260802053352/https://www.scribd.com/document/815966403/...), but Scribd serves a JS bot-challenge wall to direct fetch and archive.org was returning HTTP 503 site-wide outages during this pass. Next attempt should retry that exact Wayback snapshot URL once archive.org's outage clears."
---

# Edge cases and FAQ

## Official FAQ locations
- **Source-backed fact [high][src-002]:** The rulebook table of contents includes FAQ pages 18-19, Triggered Abilities page 19, Unlocks & Ascension page 20, Achievements & Daily Climb page 21, Act IV & Quick Start Rules page 22, Optional Rules page 23, and Abilities & Keywords page 24.
- **Source-backed fact [high][src-003]:** BGG file entry lists official rulebook v2.30 and v2.27; v2.27 is said to include the A7 sticker fix.

## FAQ answers (official rulebook, pages 18-19)
- **Source-backed fact [high][src-002]:** No maximum hand size. Block cannot prevent "Lose X HP" effects (only damage from hits/damage effects). If a token supply runs out, further gains of that token are ignored (gold, Strength, Poison, etc.), though a drawn Shiv can still be played for damage immediately. Cards have no memory once they leave hand, except self-referential cost effects (e.g. Streamline in the discard pile with 2 Powers in play still costs 0).
  Evidence: "No, there is no maximum hand size."; "You can only block damage."; "If you run out of tokens, you can't gain or apply more tokens. The effect is ignored."; "Cards have no memory once they leave your hand... cards with an ability that changes their own cost still have an effect while in the discard pile."
- **Source-backed fact [high][src-002]:** Summons do not flee combat when their summoner dies (unlike the video game); Buffer can be triggered separately by each hit of a multi-attack; an effect that tries to play an unplayable card (e.g. via Distilled Chaos/Mayhem) is ignored and the card is discarded instead.
  Evidence: "Unlike the video game, Summons don't 'flee' combat when the enemy that summoned them is killed."; "HP loss from each hit in a multi-attack can trigger Buffer separately."; "If an effect tries to play a card that can't be played, ignore the effect and discard that card instead."
- **Source-backed fact [high][src-002]:** Copies of a played card are separate cards that cost no Energy, use the original's X value, can have different targets, and cannot themselves be copied; only one effect that plays cards multiple times can apply to a given card at a time.
  Evidence: "Copies do not cost Energy to play... Each copy can have different targets... Copies cannot also be copied."; "A card can only be affected by one effect that plays cards multiple times. Any additional effects that would play a card multiple times wait for the next valid card."

## Triggered ability timing (official rulebook, page 19)
- **Source-backed fact [high][src-002]:** "Start of turn"/"End of turn" abilities trigger only during the Player Turn (the Enemy Turn has neither phase); "Once per combat" and "Once per room" abilities flip face down when used and flip back up after combat/the Event.
  Evidence: "Relics and Powers with this phrase trigger at the start of the Player Turn... Note that the Enemy Turn doesn't have a 'Start of Turn' phase."; "Once used, flip the item face down. Flip it face up after combat."

## Ascension, Unlocks, and Act IV (official rulebook, pages 20-22)
- **Source-backed fact [high][src-002]:** Ascension 1 unlocks after defeating an Act II Boss (Act III if solo); each higher Ascension requires playing with all previous Ascension modifiers active and defeating an Act II (or solo Act III) Boss again. Players don't have to play at their highest unlocked Ascension.
  Evidence: "After you defeat an Act II Boss (Act III if you're playing solo), unlock Ascension 1. To unlock higher Ascensions, you must be playing with the modifiers of all previous Ascension levels and defeat an Act II Boss."
- **Source-backed fact [high][src-002]:** Act IV requires unlocking via the Unlocks checklist and collecting all 3 keys (Ruby, Sapphire, Emerald) by the end of Act III; players heal at the start of Act IV the same way as at the start of Acts II/III.
  Evidence: "Act IV must be unlocked... To enter Act IV you must obtain all 3 keys by the end of Act III."; "Players heal at the start of Act IV, just like they do at the start of Acts II and III."
- **Source-backed fact [high][src-002]:** Quick Start Rules let a party begin directly in Act II, III, or IV by working down a rewards table (Neow Bonus, Gold, Card Rewards, dice-rolled Transform/Potion/Relic/Rare Rewards/Boss Relics, Upgrades) one reward at a time; a Catch Up variant lets only the joining players use the table.
  Evidence: "To start the game in Act II or later, use the table below. Gain all rewards in the top row for the starting Act, then proceed down to the next row... Gain rewards one at a time, without seeing the next reward."; "Catch Up - These rules can be used to bring in new players at the start of an Act."

## Optional rules (official rulebook, page 23)
- **Source-backed fact [high][src-002]:** "The Last Stand" lets surviving players continue a Boss fight after a teammate dies (retargeting enemies toward the nearest populated row) and still counts as beating that Act/game if at least one player survives, but a dead player blocks advancing to the next Act. "Sequential Turns" is an optional alternative to simultaneous Player Turns, taken in lane order with the die rolled only on the first Player Turn of the round. The "Golden Rule": card text overrides the rules when they contradict.
  Evidence: "If at least one player survives, treat this as beating that Act (or the game, if it's your final Act). If a player died, you cannot continue to the next Act."; "The player that starts the round in the bottom lane (Lane 1) takes their Player Turn, followed by the player to their left... The die is only rolled during the first Player Turn in a round."; "Whenever a card's text contradicts the rules, the card text takes precedence."
- **Source-backed fact [high][src-002]:** This hosted rulebook copy (last-modified 2024-03-23) still presents "Sequential Turns" as an optional rule and has no teardown section or Ascension 7/A7 sticker-fix text, indicating it predates the v2.30 revision BGG (src-003) describes.
  Evidence: No occurrence of "teardown", "Ascension 7", or "A7" anywhere in the extracted 24-page text; "Sequential Turns" appears intact under Optional Rules (page 23).

## Known clarifications / errata leads
- **Source-backed fact [medium][src-003]:** A BGG comment identifies the A7 sticker fix as a misprint in the rules for Ascension 7; a designer/publisher comment says if a player lacks the sticker fix then they likely have wave 2 or later edition.
- **Source-backed fact [medium][src-003]:** The v2.30 change note says teardown rules were added to page 23 and optional rules for sequential turns were cut.
- **Source-backed fact [medium][src-004]:** Downfall/reprint FAQ says later reprints added a rulebook section on how to reset the game and clarification to Gremlin Leader that Gremlins are in Act 1 summon deck.

## Player-discovered ambiguity
- **Player friction [rules ambiguity][high][src-008]:** Rulebook may assume video-game knowledge, especially around how to continue after Act III and how to handle summon deck organization.
- **Player friction [solo/co-op automation][medium][src-007]:** Solo play is considered weaker by Rolling In The Meep because it feels too close to the video game; cooperative play provides the tabletop justification.

## Open questions
- [high] Obtain direct v2.30 PDF text (this pass's copy of src-002 predates it) and record exact FAQ answers by page, especially the teardown section and Ascension 7/A7 sticker fix wording.
- [medium] Track whether Downfall/reprint reset-game clarification supersedes base retail rulebook language.
- [medium] Check official Discord/FAQ for living errata, if accessible.

## Retry notes

Historical log; the frontmatter `followups:` block above is now the source of truth for retry status (converted from this prose during the 2026-08-26 librarian pass per OKF 0.2 §6).

- 2026-07-04: Retried `src-004` (Kickstarter FAQ) via WebFetch and `curl -L`; both returned HTTP 403 (Kickstarter's bot/verification wall blocks non-browser fetches). A future attempt needs either an authenticated/browser-based fetch or an archived mirror (e.g. Wayback Machine snapshot) of the FAQ page to confirm whether the reset-game clarification supersedes the base retail rulebook.
- 2026-07-08 (librarian pass): `src-002` resolved — retried with `curl -L`, got HTTP 200 (no block this time), and extracted the full 24-page rulebook text with pypdf instead of just the table of contents; FAQ answers, triggered-ability timing, Ascension/Unlocks/Act IV, and Optional Rules sections added above with high confidence. `src-004` (Kickstarter FAQ) still unresolved: retried via Wayback Machine CDX search (`kickstarter.com/projects/contentiongames/sts-downfall/faqs*`) and found zero snapshots exist for that project's FAQ page. Next attempt needs an authenticated Kickstarter session or a different archival source (e.g. a BGG thread quoting the FAQ text) — Wayback has no copy to fall back on.
- 2026-08-26 (librarian pass): both followups retried and remain open; see `followups:` block above for exact dated outcomes (Kickstarter FAQ still 403/no Wayback snapshot; a v2.30 rulebook lead was found on Scribd with a confirmed but currently unreadable Wayback snapshot).
