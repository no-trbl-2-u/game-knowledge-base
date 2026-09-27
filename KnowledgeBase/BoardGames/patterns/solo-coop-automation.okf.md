---
okf_version: 0.2
type: pattern
mechanics: [cooperative-game, solo-solitaire-game]
better_if_labels: [solo-coop-automation]
confidence: medium
status: verified
---

## Summary

Across this now seven-game sample, solo/co-op automation friction is less
about bot AI logic itself and more about whether the solo/co-op mode earns
its own identity rather than inheriting multiplayer's footprint, feeling
like a lesser substitute, or masking difficulty behind lenient penalties
instead of designed tension. Reviewers reward solo modes that visibly shed
multiplayer overhead (shorter downtime, tighter table presence) and punish
ones that graft multiplayer scale onto a single player, produce a
"multiplayer solitaire" co-op experience, feel swingy/brain-burning when
one person runs multiple hands, or patch difficulty by subtracting content
rather than supplying a real automated opponent. Elder Sign adds a further
variant: its solo mode is functional, but reviewers note it "leans on
lenient death penalties rather than designed solo tension," and separately
observe the game is "slightly easier with larger number of players" — a
difficulty-scaling mismatch between solo and group configurations rather
than a missing-feature complaint. Horrified's solo appendix shows the
"graft, don't design" failure in its plainest form: it "removes specific
cards rather than supplying a separate automated opponent," subtracting
content instead of adding a bot system. Evidence remains moderately thin —
Dune Imperium's automation claim still lacks a direct source quote and
stays excluded.

## Evidence by game

- ark-nova (src-008): A solo-focused review says the game board is "just too big for solo play (or in general, arguably)" — the physical footprint wasn't scaled down for a single player. confidence: high
- heat-pedal-to-the-metal (src-006): Co-op Board Games' pros list for the review credits "solo AI" alongside simultaneous card selection and heat management as a strength, though the reception doc doesn't preserve an exact quote for that specific item. confidence: medium
- mage-knight (src-011, src-009): A BGG fan critique says Mage Knight's "Coop is not cooperative enough," calling it "multiplayer solitaire" beyond shared planning and joint city assaults (src-011); a separate review counters that the solo variant sheds "a lot of the downtime" that burdens multiplayer sessions (src-009). confidence: medium (src-011) / high (src-009)
- slay-the-spire-the-board-game (src-007): A reviewer says solo play is "admirable" but "less successful" because it feels too much like a slower physical substitute for the original video game rather than its own experience. confidence: medium
- spirit-island (src-008, src-009): Punchboard calls the game "fantastic... for solo players and small groups" (src-008); a dedicated solo review counters that "true solo mode is swingy," multi-handing "can cause brain burn," and the endgame feels "lacklustre" (src-009). confidence: high (both)
- elder-sign (src-002, src-004): Solo play is workable, but the design "leans on lenient death penalties rather than designed solo tension" rather than earning tension through dedicated solo systems, confidence: high
- elder-sign (src-004): "game does seem to be slightly easier with larger number of players" — an uneven difficulty scaling between the solo and group configurations, confidence: medium
- horrified (src-002): The solo appendix "removes specific cards rather than supplying a separate automated opponent," confidence: medium

## Where it works

- mage-knight (src-009): The solo variant preserves the game's card-efficiency crunch "without a lot of the downtime" that slows multiplayer turns.
- spirit-island (src-008): Praised as "fantastic... for solo players and small groups," with higher player counts identified as the slower configuration instead.
- slay-the-spire-the-board-game (src-007): Cooperative play is called "a revelation" and the central justification for the tabletop adaptation existing at all.
- heat-pedal-to-the-metal (src-006): Solo AI is named among the review's praised elements, though without a preserved direct quote (confidence: medium).

## Where it fails

- ark-nova (src-008): Solo play inherits the full multiplayer board footprint, which the reviewer calls "just too big for solo play."
- mage-knight (src-011): Cooperative mode reads as "multiplayer solitaire" — parallel individual optimization rather than deep interdependence.
- slay-the-spire-the-board-game (src-007): Solo mode feels like a slower physical stand-in for the video game rather than a distinct tactile experience.
- spirit-island (src-009): True solo is "swingy," multi-handing "can cause brain burn," and the ending feels "lacklustre"/procedural rather than climactic.
- elder-sign (src-002, src-004): Solo tension comes from lenient death penalties rather than a purpose-designed solo system, and difficulty is reported as uneven between solo and larger player counts.
- horrified (src-002): The solo mode is implemented by removing specific cards rather than by building a separate automated opponent, a content-subtraction patch rather than a designed bot.

## Coverage gaps

Dune Imperium's better-if doc proposes automating its House Hagal rival-priority logic for solo/two-player play, but the claim carries no direct source quote (only a general "evidence basis" note), so it couldn't be cited here — a case where the underlying source review would need re-checking for an actual quote before it strengthens this pattern. Elder Sign and Horrified both illustrate solo modes built by subtracting/softening rather than adding dedicated systems, which is a different failure shape than the "inherited multiplayer scale" or "multiplayer solitaire" complaints seen elsewhere in this set — worth watching for in future games. More broadly, none of the seven games in this sample use a card-driven "automa" bot deck (e.g., Scythe- or Wingspan-style); the corpus would benefit from a game with an explicit automaton/bot-opponent system to give this pattern genuine bot-AI-logic evidence rather than only solo-mode-scaling and co-op-cohesion complaints.
