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
    retrieved_at: "2026-10-14"
    notes: "Community rules reference mirror stating it replicates the Core Set Rules Reference plus official FAQ/expansion updates; re-retrieved in full (not just table of contents) in the 2026-10-14 librarian pass."
confidence: high
status: verified
---

## Summary

The edge-case surface is large: timing conflicts, card text interpretation, deckbuilding options, campaign transfer, and FAQ updates are explicitly pushed into the Rules Reference layer rather than the Learn to Play layer. The 2026-10-14 librarian pass retrieved ArkhamDB's full mirror text (the official Rules Reference PDF itself remains Cloudflare-blocked; see scout-report.okf.md) and extracted concrete rulings rather than only its table of contents.

## Source-backed facts

- Claim: The official Learn to Play defers advanced topics to the Rules Reference.
  Source: src-003
  Evidence: The Rules Reference addresses "more advanced topics such as the interpretation of card text, the resolution of timing conflicts, and a detailed phase sequence."
  Confidence: high
- Claim: ArkhamDB presents its rules page as a Rules Reference replica with FAQ/expansion updates.
  Source: src-004
  Evidence: "This page contains a replica of the Rules Reference" and includes "updates to the Rules Reference" from expansions and official FAQ.
  Confidence: high
- Claim: Forced abilities resolve before reaction abilities at the same timing point.
  Source: src-004
  Evidence: "all forced abilities initiated in reference to that timing point must resolve before any" reaction abilities for the same timing point (Glossary: "Triggered Abilities").
  Confidence: high
- Claim: Among triggered abilities, "when" abilities initiate before the triggering impact resolves, "at"/"if" abilities initiate between "when" and "after" abilities sharing the same condition, and "after" abilities initiate once the impact has resolved; each reaction ability triggers only once per time its condition is met.
  Source: src-004
  Evidence: Glossary entries "After" and "At" (via "when...", "at", "if", and "after..." trigger-point definitions).
  Confidence: high
- Claim: A precedence hierarchy resolves conflicts between card text and the rules documents: the Rules Reference outranks the Learn to Play, and card text outranks either document.
  Source: src-004
  Evidence: "The Golden Rules": "the text of the Rules Reference takes precedence" over Learn to Play; "the text of the card takes precedence" over either rules document.
  Confidence: high
- Claim: When two cards' text cannot be reconciled, the encounter card outranks the player card; between two cards of the same kind, the lead investigator decides.
  Source: src-004
  Evidence: "The Silver Rule": "the encounter card takes precedence over the player card;" if both are the same kind, "the lead investigator may decide which takes precedence."
  Confidence: high
- Claim: As a last resort for unresolved rules or timing conflicts, resolve in whatever way the players perceive as worst at that moment; this does not apply to choices among already-valid options, which the lead investigator decides instead.
  Source: src-004
  Evidence: "The Grim Rule": "resolve the conflict in the manner that the players perceive as the worst possible at that moment;" "Choices, and the Grim Rule": for choices among valid options, the lead investigator decides and the Grim Rule does not apply.
  Confidence: high
- Claim: Investigators generally may only include cards from their own class in their deck; any exceptions are listed under "Deckbuilding Options" on the investigator's card back, and cards with the Synergy trait ignore Neutral (classless) cards when counting classes.
  Source: src-004
  Evidence: "Classes": investigators "generally" only access their own class; "Deckbuilding Options" entry; "Synergy and Neutral Cards": Synergy-trait cards "do not consider Neutral (classless) player cards" when counting classes.
  Confidence: high
- Claim: A card with the "exceptional" keyword costs twice its printed experience to purchase, and a deck cannot include more than one copy (by title) of any given exceptional card.
  Source: src-004
  Evidence: "Exceptional": "A card with the exceptional keyword costs twice its printed experience cost to purchase"; "A player's investigator deck cannot include more than 1 copy (by title) of any given exceptional card."
  Confidence: high
- Claim: Story Assets may not be included in a player's deck unless a scenario specifically grants permission.
  Source: src-004
  Evidence: "Story Assets": they "may not be included in a player's deck" unless a scenario grants permission.
  Confidence: high
- Claim: Purchasing new (non-upgrade) cards during deckbuilding costs a minimum of 1 experience, while upgrading an existing card costs only the difference in experience between levels and removes the lower-level copy.
  Source: src-004
  Evidence: "Deckbuilding": purchasing new cards costs "to a minimum of 1" experience, not applying to upgrades; upgrades: the investigator pays "only the difference in experience" and removes the lower-level copy.
  Confidence: high
- Claim: A defeated investigator suffers 1 physical or 1 mental trauma recorded in the campaign log; if killed or driven insane, the player chooses a new investigator for the next scenario, and if the investigator pool is empty the campaign ends in a loss.
  Source: src-004
  Evidence: "Trauma": a defeated investigator "suffers 1 physical trauma" or "1 mental trauma"; "Joining or Leaving a Campaign": killed/insane investigators force a replacement choice; with no replacements left, "the players have lost and the campaign ends."
  Confidence: high
- Claim: A player who leaves a campaign keeps their campaign-log entry (so they may rejoin between scenarios); transferring an investigator to a new campaign wipes other campaign-log notes but keeps the investigator's deck, earned story assets/weaknesses, experience, and trauma.
  Source: src-004
  Evidence: "Joining or Leaving a Campaign": a departing player's log entry is not deleted since they "may re-join at any time between scenarios"; "Transferring Investigators to a New Campaign": "All other notes in the Campaign Log should be wiped clean," but deck, story assets/weaknesses, experience, and trauma carry over.
  Confidence: high
- Claim: During an event card's resolution, the event enters limbo during step 3 of the Initiation Sequence, after costs are paid and attacks of opportunity are made.
  Source: src-004
  Evidence: "Limbo": an event card enters limbo "during step 3 of the Initiation Sequence."
  Confidence: medium

## Rules / Mechanics

- Treat timing and card-text disputes as Rules Reference problems, not Learn to Play problems; apply the Golden Rule (Rules Reference beats Learn to Play, card text beats both), then the Silver Rule (encounter card beats player card, lead investigator breaks ties of the same kind), then the Grim Rule only as a last resort for genuinely unresolved conflicts.
- Forced abilities always resolve before reaction abilities sharing a timing point; "when" fires before the triggering impact, "after" fires once it has resolved, and "at"/"if" sit between the two.
- Deckbuilding is class-restricted by default (exceptions named on the investigator's back), exceptional cards double in cost and are capped at one copy by title, and Story Assets require scenario permission.
- Because the game is expandable, FAQ drift and expansion rules require periodic audit.

## Open questions

- The official Rules Reference PDF itself remains Cloudflare-blocked (see scout-report.okf.md followups); the ArkhamDB mirror (src-004) has substituted successfully for the claims above.
- Appendix I's full numbered Initiation Sequence and the Appendix II timing/phase-sequence diagram were not visible in the two 100k-character chunks of arkhamdb.com/rules read so far; a future pass should read the remaining ~54,800 characters (offset 200000) of that same URL to extract them.
