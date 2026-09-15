---
okf_version: 0.2
type: rule_category
game:
  title: "Arkham Horror: The Card Game"
  slug: "arkham-horror-the-card-game"
  bgg_id: 205637
  publisher: "Fantasy Flight Games"
  year: 2016
  weight: null
  edition: "core set / revised product line referenced"
scope: "base game"
mechanics: [action-points, campaign-game, cooperative-game, deck-bag-and-pool-building, deck-building, hand-management, solo-solitaire-game, variable-player-powers]
sources:
  - id: "src-003"
    title: "Arkham Horror: The Card Game — Learn to Play PDF"
    url: "https://images-cdn.fantasyflightgames.com/filer_public/dd/78/dd7818fe-0c9a-4a6c-b685-e32ab55b1702/ahc60_learn_to_play_web.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-10"
    notes: "Official Learn to Play PDF."
  - id: "src-004"
    title: "ArkhamDB — Rules"
    url: "https://arkhamdb.com/rules"
    kind: other
    provenance: secondary
    retrieved_at: "2026-09-15"
    notes: "2026-09-15 audit pass, alternate_source retry resolved: this community-hosted page states it is a full replica of the official Rules Reference (with official FAQ updates merged in), retrieved as the alternate document named in the src-009 followup after the official PDF stayed HTTP 403. HTTP 200 via curl with a browser User-Agent; 290,500 bytes HTML."
confidence: high
status: verified
---

## Summary

The 2026-09-15 audit pass retrieved the full ArkhamDB Rules Reference replica (the alternate source the `scout-report.okf.md` followup had named), resolving the extraction gap this doc previously carried. It is a community-hosted mirror, not the official PDF itself, so `provenance: secondary` and citations note the FAQ-update points ArkhamDB annotates inline; it directly quotes the FAQ-updated Rules Reference text rather than paraphrasing it.

## Source-backed facts

- Claim: During a turn an investigator takes exactly three actions, which may be any mix of Investigate, Move, Draw, Resource, Play, Activate, Fight, Engage, or Evade, in any order, including the same action three times.
  Source: src-004
  Evidence: "During his or her turn, an investigator is permitted to take three actions... The three actions an investigator performs during his or her turn may be any of the above, in any order, and may even be the same action three times in a row."
  Confidence: high
- Claim: If an investigator engaged with one or more ready enemies takes an action other than fight, evade, or activating a parley/resign ability, each such enemy makes an attack of opportunity against them (in the investigator's chosen order) immediately after that action's costs are paid but before its effect resolves; a multi-action ability only provokes one attack of opportunity per engaged enemy, and [free] abilities with a bold action designator do not provoke one at all.
  Source: src-004
  Evidence: "Each time an investigator is engaged with one or more ready enemies and takes an action other than to fight, to evade, or to activate a parley or resign ability, each of those enemies makes an attack of opportunity... An ability that costs more than one action only provokes one attack of opportunity from each engaged enemy... Attacks of Opportunity are only triggered when 1 or more of an investigator's actions are being spent or used to trigger an ability or action. [free] abilities with a bold action designator do not provoke attacks of opportunity."
  Confidence: high
- Claim: When a simultaneous effect requires multiple players to make individual choices, those choices are made in player order before the effect resolves simultaneously on all affected entities; if multiple forced abilities or delayed effects would resolve at the same time, the lead investigator decides the order, and the same applies when multiple constant abilities or lasting effects cannot apply simultaneously.
  Source: src-004
  Evidence: "If an effect affects multiple players simultaneously, but the players must individually make choices to resolve the effect, these choices are made in player order. Once all necessary choices have been made, the effect resolves simultaneously upon all affected entities. If two or more forced abilities (including delayed effects) would resolve at the same time, the lead investigator determines the order in which the abilities resolve."
  Confidence: high
- Claim: All aspects of a card effect have timing priority over any "after..." ability that effect's resolution might trigger — e.g. an effect reading "gain 3 resources and draw 3 cards" fully resolves both aspects before any "after drawing a card..." ability is initiated.
  Source: src-004
  Evidence: "All aspects of an effect have timing priority over all 'after...' triggering conditions that might arise as a consequence of that effect. (For example, if an effect reads 'Gain 3 resources and draw 3 cards,' resolve both aspects of the effect... before initiating an ability that reads 'After drawing a card...')"
  Confidence: high
- Claim: A "when" ability interrupts and resolves before the game-state impact of the timing point or triggering condition that caused it (distinct from an "after" ability, which resolves once that impact has already occurred).
  Source: src-004
  Evidence: "The word 'when' refers to the moment immediately after the specified timing point or triggering condition initiates, but before its impact upon the game state resolves. The resolution of a 'when' ability interrupts the resolution of its timing point or triggering condition."
  Confidence: high
- Claim: Advancing the act deck requires investigators, as a group, to spend the act card's required number of clues (a flat value or a per-investigator value); this is normally a [free] player ability, and any investigator may contribute any number of their own clues toward the total.
  Source: src-004
  Evidence: "The act deck advances if the investigators, as a group, spend the requisite number of clues (as indicated by the act card)... This is normally done as a [free] player ability. Any or all investigators may contribute any number of clues towards the total number of clues required to advance the act."
  Confidence: high
- Claim: When an investigator is eliminated (defeated or resigned), their clues are left at their last location, their resources return to the token pool, engaged enemies unengage and stay at that location, cards in their threat area go to the appropriate discard pile, and their hand/deck/discard-pile cards are removed from the game.
  Source: src-004
  Evidence: "All clue tokens that player possesses are placed at the location the investigator was at when he or she was eliminated, and all of that player's resource tokens are returned to the token pool. All enemies engaged with that player are placed at the location the investigator was at when he or she was eliminated, unengaged... All other cards in the eliminated investigator's threat area are placed in the appropriate discard pile. The cards he or she controls in play and all of the cards in his or her out-of-play areas... are removed from the game."
  Confidence: high
- Claim: In a campaign, players proceed to the next scenario regardless of whether they won or lost the current one (a loss still carries negative consequences forward); a standalone scenario, by contrast, is strictly won or lost, with any non-winning resolution counted as a loss.
  Source: src-004
  Evidence: "If playing in a campaign, players will proceed to the next scenario in the campaign regardless of the outcome of the scenario. Even if players 'lose' a scenario, they still continue their campaign... When playing a standalone scenario, players either win or lose the scenario. They win if they complete a resolution on an act card. Any other resolution is considered a loss."
  Confidence: high
- Claim: A card with the permanent keyword doesn't count toward deck size but still counts as part of the deck for other deckbuilding restrictions, starts each game already in play (not shuffled into the deck), and cannot leave play except through elimination or be removed/swapped out of the deck unless a card explicitly says otherwise.
  Source: src-004
  Evidence: "A card with the permanent keyword does not count towards your deck size. A card with the permanent keyword still counts as being part of your deck and must therefore adhere to all other deckbuilding restrictions. A card with the permanent keyword starts each game in play and is not shuffled into your investigator deck during setup. A card with the permanent keyword cannot leave play (except by elimination). Once added to your deck, permanent cards cannot be removed from your deck or swapped out of your deck unless explicitly stated otherwise."
  Confidence: high

## Rules / Mechanics

- The official Learn to Play explicitly defers timing conflicts, card-text interpretation, and detailed phase sequencing to the Rules Reference (src-003); the claims above are drawn from that Rules Reference layer via its ArkhamDB replica (src-004), not from Learn to Play.
- Because the game is expandable, ArkhamDB's replica inlines dated FAQ/errata annotations (e.g. "added in FAQ, section 'Game Play', point 1.1"); those annotations are preserved in the Evidence quotes above where present so a future pass can tell FAQ-added text apart from original 2016 print text.

## Open questions

- Retrieve the official Rules Reference PDF directly if FFG's CDN block (see `scout-report.okf.md` src-009 followup) ever lifts, to confirm the ArkhamDB replica has no transcription drift from the printed/PDF original.
