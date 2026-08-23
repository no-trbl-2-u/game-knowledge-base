---
okf_version: 0.2
type: pattern
mechanics: [cooperative-game, solo-solitaire-game]
better_if_labels: [solo-coop-automation]
confidence: medium
status: verified
---

## Summary

Across this sample, solo/co-op automation friction is less about bot AI logic itself and more about whether the solo/co-op mode earns its own identity rather than inheriting multiplayer's footprint or feeling like a lesser substitute. Reviewers reward solo modes that visibly shed multiplayer overhead (shorter downtime, tighter table presence) and punish ones that graft multiplayer scale onto a single player, produce a "multiplayer solitaire" co-op experience, or feel swingy/brain-burning when one person runs multiple hands. Two new games this pass sharpen the "no bot AI" half of the pattern: Elder Sign and Horrified both run solo without a simulated opponent at all, substituting lenient death penalties (Elder Sign) or adjusted terror/card removal (Horrified) for genuine solo-specific tension — a cheaper design answer than an automa deck, but one that draws its own complaint (Elder Sign's player-count balance skews easier with more investigators, undercutting the solo-is-harder assumption). Evidence is moderately thin — seven of eight candidate games contributed usable claims, and only Spirit Island and Mage Knight offer both a praise and a complaint angle; Dune Imperium's solo/automation better-if claim lacked a direct source quote and was excluded.

## Evidence by game

- ark-nova (src-008): A solo-focused review says the game board is "just too big for solo play (or in general, arguably)" — the physical footprint wasn't scaled down for a single player. confidence: high
- elder-sign (src-002, src-004): solo play works without a separate bot/automation system, instead leaning on lenient death penalties that let a solo player "simply burn through several characters in a single game"; a second claim reports player-count balance skews easier with more investigators rather than harder, confidence: high
- heat-pedal-to-the-metal (src-006): Co-op Board Games' pros list for the review credits "solo AI" alongside simultaneous card selection and heat management as a strength, though the reception doc doesn't preserve an exact quote for that specific item. confidence: medium
- horrified (src-002): the solo appendix adjusts terror levels and removes specific cards rather than supplying a separate simulated opponent, making solo/co-op automation an improvement surface by design rather than by omission, confidence: medium
- mage-knight (src-011, src-009): A BGG fan critique says Mage Knight's "Coop is not cooperative enough," calling it "multiplayer solitaire" beyond shared planning and joint city assaults (src-011); a separate review counters that the solo variant sheds "a lot of the downtime" that burdens multiplayer sessions (src-009). confidence: medium (src-011) / high (src-009)
- slay-the-spire-the-board-game (src-007): A reviewer says solo play is "admirable" but "less successful" because it feels too much like a slower physical substitute for the original video game rather than its own experience. confidence: medium
- spirit-island (src-008, src-009): Punchboard calls the game "fantastic... for solo players and small groups" (src-008); a dedicated solo review counters that "true solo mode is swingy," multi-handing "can cause brain burn," and the endgame feels "lacklustre" (src-009). confidence: high (both)

## Where it works

- mage-knight (src-009): The solo variant preserves the game's card-efficiency crunch "without a lot of the downtime" that slows multiplayer turns.
- spirit-island (src-008): Praised as "fantastic... for solo players and small groups," with higher player counts identified as the slower configuration instead.
- slay-the-spire-the-board-game (src-007): Cooperative play is called "a revelation" and the central justification for the tabletop adaptation existing at all.
- heat-pedal-to-the-metal (src-006): Solo AI is named among the review's praised elements, though without a preserved direct quote (confidence: medium).

## Where it fails

- ark-nova (src-008): Solo play inherits the full multiplayer board footprint, which the reviewer calls "just too big for solo play."
- elder-sign (src-004): more investigators makes the game reportedly easier rather than harder, the inverse of what a well-scaled solo/multiplayer difficulty curve would produce.
- horrified (src-002): substituting terror/card-removal tuning for an actual simulated opponent is flagged as an improvement surface, not a solved design.
- mage-knight (src-011): Cooperative mode reads as "multiplayer solitaire" — parallel individual optimization rather than deep interdependence.
- slay-the-spire-the-board-game (src-007): Solo mode feels like a slower physical stand-in for the video game rather than a distinct tactile experience.
- spirit-island (src-009): True solo is "swingy," multi-handing "can cause brain burn," and the ending feels "lacklustre"/procedural rather than climactic.

## Coverage gaps

Dune Imperium's better-if doc proposes automating its House Hagal rival-priority logic for solo/two-player play, but the claim carries no direct source quote (only a general "evidence basis" note), so it couldn't be cited here — a case where the underlying source review would need re-checking for an actual quote before it strengthens this pattern. More broadly, none of the eight games in this sample use a card-driven "automa" bot deck (e.g., Scythe- or Wingspan-style); Elder Sign and Horrified both confirm the alternative (no bot at all, difficulty tuned by penalty/terror adjustment instead) but neither is a counterexample to it. The corpus would still benefit from a game with an explicit automaton/bot-opponent system to give this pattern genuine bot-AI-logic evidence rather than only solo-mode-scaling and co-op-cohesion complaints.
