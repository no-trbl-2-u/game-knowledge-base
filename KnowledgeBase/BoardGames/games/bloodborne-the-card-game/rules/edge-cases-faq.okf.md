---
okf_version: 0.2
type: rule_category
game:
  title: "Bloodborne: The Card Game"
  slug: "bloodborne-the-card-game"
  bgg_id: 195856
  publisher: "CMON"
  year: 2016
  weight: 2.04
  edition: "English 2016 standalone base game"
scope: "English 2016 standalone base game; The Hunter's Nightmare expansion and promotional or translated material excluded"
mechanics: ["hand-management", "push-your-luck", "semi-cooperative-game", "set-collection", "simultaneous-action-selection"]
sources:
  - id: "src-001"
    title: "CMON — Bloodborne: The Card Game"
    url: "https://www.cmon.com/product/bloodborne-the-card-game/bloodborne-the-card-game"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Live support area inspected; no downloadable FAQ or errata appeared."
  - id: "src-002"
    title: "Bloodborne: The Card Game Rulebook — verified third-party copy"
    url: "https://cdn.1j1ju.com/medias/66/14/bb-bloodborne-the-card-game-rulebook.pdf"
    kind: rulebook_pdf
    provenance: secondary
    retrieved_at: "2026-07-31"
    notes: "Complete 16-page English copy; provisional until matched to official CMON authority."
confidence: medium
status: needs_followup
---

# Edge cases and unresolved FAQ authority

- Claim: Four-player encounters receive one extra Blood Echo and five-player encounters receive two; this applies to Monsters, Bosses, and the Final Boss.
  Source: src-002
  Evidence: "Rulebook pp. 6–7 and 14."
  Confidence: high

- Claim: Damage cannot remove more Echoes than remain on the encounter, so later attacks can receive fewer or no Echoes.
  Source: src-002
  Evidence: "Rulebook p. 10, Important note in Hunters Attack."
  Confidence: high

- Claim: Killing an encounter during Instant resolution skips the next three combat steps, but the round still reaches Hunter's Dream and end-of-round cleanup.
  Source: src-002
  Evidence: "Rulebook p. 10 says to skip the next three steps; the sequence on p. 9 places Dream and end-of-round after those steps."
  Confidence: high

- Claim: A Hunter who played an Instant attack does not attack again during the ordinary Hunters Attack step.
  Source: src-002
  Evidence: "Rulebook p. 10 Instant example and p. 11 Hunters Attack example."
  Confidence: high

- Claim: A surviving Boss neither escapes nor refreshes lost Echoes, and the dungeon does not advance until that Boss dies.
  Source: src-002
  Evidence: "Rulebook p. 11 under Fighting Bosses and p. 14 under Reveal the Next Monster."
  Confidence: high

- Claim: A Hunter entering the Dream can still die from the halved, rounded-down Monster attack; if dead after having played Dream, they retain the Dream-based used-card recovery exception.
  Source: src-002
  Evidence: "Rulebook pp. 12 and 14 under Hunter's Dream, Dead Hunters, and Hunter Death."
  Confidence: high

- Claim: No official FAQ, errata, or card-clarification document was verified from the live CMON support surface in this pass.
  Source: src-001
  Evidence: "The retrieved live page displayed a Rules & More heading but no document link; direct page access was Cloudflare-blocked, so this is not proof that no support document exists elsewhere."
  Confidence: medium

## Open authority questions

Complete card-local effects remain outside this corpus. In particular, Monster reveal/escape/ongoing abilities, Upgrade effects, and five Final Boss global modifiers can change timing, damage, state, or victory incentives. They are not silently treated as covered by this rulebook summary.
