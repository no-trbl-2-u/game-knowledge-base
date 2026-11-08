---
okf_version: 0.2
type: pattern
mechanics: [cooperative-game, solo-solitaire-game]
better_if_labels: [solo-coop-automation]
confidence: medium
status: verified
---

## Summary

Across this sample, solo/co-op automation friction is less about bot AI logic itself and more about whether the solo/co-op mode earns its own identity rather than inheriting multiplayer's footprint or feeling like a lesser substitute. Reviewers reward solo modes that visibly shed multiplayer overhead (shorter downtime, tighter table presence) and punish ones that graft multiplayer scale onto a single player, produce a "multiplayer solitaire" co-op experience, or feel swingy/brain-burning when one person runs multiple hands. A second, more specific failure now has two citations: a solo mode that simply adjusts multiplayer parameters (lenient death penalties, terror/card removal) rather than building dedicated solo tension or a genuine automated opponent (Elder Sign, Horrified). Evidence is moderately thin — most candidate games contribute one or two usable claims rather than dense consensus, and genuine card-driven "automa" bot-deck evidence (Dune: Imperium Uprising's Rivals mode) is still only lightly sourced.

## Evidence by game

- ark-nova (src-008): A solo-focused review says the game board is "just too big for solo play (or in general, arguably)" — the physical footprint wasn't scaled down for a single player. confidence: high
- dune-imperium-uprising (src-004): a positive report on the improved Rivals solo/automa mode, but first-time solo players must discover its decision grammar unaided, confidence: low
- elder-sign (src-002, src-004): solo play works without a separate automation system, but leans on lenient death penalties ("could simply burn through several characters") rather than designed solo tension, confidence: high
- elder-sign (src-004): player-count balance is uneven, with more investigators reported as easier due to more characters to spread damage across, confidence: medium
- heat-pedal-to-the-metal (src-006): Co-op Board Games' pros list for the review credits "solo AI" alongside simultaneous card selection and heat management as a strength, though the reception doc doesn't preserve an exact quote for that specific item. confidence: medium
- horrified (src-002): the solo appendix only adjusts terror and removes specific cards rather than supplying a separate automated opponent, confidence: medium
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
- mage-knight (src-011): Cooperative mode reads as "multiplayer solitaire" — parallel individual optimization rather than deep interdependence.
- slay-the-spire-the-board-game (src-007): Solo mode feels like a slower physical stand-in for the video game rather than a distinct tactile experience.
- spirit-island (src-009): True solo is "swingy," multi-handing "can cause brain burn," and the ending feels "lacklustre"/procedural rather than climactic.
- elder-sign (src-002, src-004): the absence of a dedicated automation system is covered over by lenient death penalties rather than designed solo tension, and player-count balance is uneven as a result.
- horrified (src-002): adjusting terror/card-removal parameters is not the same as a genuine automated opponent — the solo mode scales difficulty without adding solo-specific design.
- dune-imperium-uprising (src-004): even a well-received automa mode (Rivals) still requires first-time solo players to learn its decision grammar with no in-game scaffolding.

## Coverage gaps

Dune Imperium's better-if doc proposes automating its House Hagal rival-priority logic for solo/two-player play, but the claim carries no direct source quote (only a general "evidence basis" note), so it couldn't be cited here — a case where the underlying source review would need re-checking for an actual quote before it strengthens this pattern. Dune: Imperium Uprising's Rivals mode is this corpus's closest approach to a genuine card-driven "automa" bot system, but the evidence for it is still low-confidence. The corpus would benefit from a game with a well-documented, widely-reviewed automaton/bot-opponent system (e.g., Scythe- or Wingspan-style) to give this pattern denser bot-AI-logic evidence rather than only solo-mode-scaling and co-op-cohesion complaints.
