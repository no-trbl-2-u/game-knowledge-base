---
okf_version: 0.2
type: rule_category
game:
  title: "Nemesis: Lockdown"
  slug: "nemesis-lockdown"
  bgg_id: 310100
  publisher: "Awaken Realms"
  year: 2022
  weight: null
  edition: "English 2022 first-release retail core box; 2021-dated base rulebook bytes plus 2022-03-25 FAQ"
scope: "English first-release retail core box only; crowdfunding bundles, Stretch Goals, expansions, add-ons, compatibility content, translations, reprints, and digital adaptation excluded"
mechanics: ["action-points", "cooperative-game", "dice-rolling", "hand-management", "hidden-information", "modular-board", "semi-cooperative-game", "solo-solitaire-game", "variable-player-powers"]
sources:
  - id: "src-001"
    title: "Nemesis: Lockdown Corebox Rulebook"
    url: "https://awakenrealms.com/images/download/Nemesis_Lockdown/ENG/Nemesis_LD_Rulebook_280x280mm_bleed3mm-32-pages.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "32 pages; 6,075,325 bytes; SHA-256 d8a939c54552e640b1d0efa1b7552a81e8b4205f04029634eb7f58d10ff2ef43; 810.709 x 810.709 pt; created 2021-08-06; modified 2021-11-18; producer iLovePDF."
  - id: "src-002"
    title: "Nemesis: Lockdown Room Sheet"
    url: "https://awakenrealms.com/images/download/Nemesis_Lockdown/ENG/Nemesis_LD_Room_Sheet_280x280mm_bleed3mm-4-pages.pdf"
    kind: other
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "4 pages; 8,062,167 bytes; SHA-256 6a88875bf52a04c681e373a8cceb8c676130ede505e1710ea5901494753294d4; 810.709 x 810.709 pt; created/modified 2021-08-06."
  - id: "src-003"
    title: "Nemesis: Lockdown Official Game FAQ"
    url: "https://awakenrealms.com/images/download/Nemesis_Lockdown/ENG/LOCKDOWN_FAQ_297x214mm_bleed3mm_3-pages.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Dated 2022-03-25; 3 pages; 678,267 bytes; SHA-256 c5b9bf1297bb68bc2107d0591af3c2b81a24b75a816f42a889b1d467aff6648f; 612.283 x 858.898 pt."
confidence: medium
status: needs_followup
---

# Scoring and Endgame

- Claim: The game ends on final Time, destruction by Autodestruction/fire/malfunction limits, or when the last participating Facility Character leaves/dies/isolates; survivors then resolve Contingency, contamination, and Objective checks in that order.
  Source: src-001
  Evidence: Rulebook p. 12, End of the Game and Victory Check.
  Confidence: high

- Claim: Survival may be achieved through Isolation with an intact Facility, successful CSS evacuation, or reaching the Bunker; survival alone is insufficient.
  Source: src-001
  Evidence: Rulebook pp. 10-12.
  Confidence: high

- Claim: Active Contingency can kill otherwise escaped Characters; contamination then scans all relevant cards and may trigger a four-card survival draw; only remaining living Characters reveal and test Objectives.
  Source: src-001
  Evidence: Rulebook p. 12, Victory Check steps 1-3.
  Confidence: high

- Claim: The Alert procedure ends as Time leaves its token slot and is treated like Time-track ending; if Autodestruction is active the Facility is destroyed.
  Source: src-003
  Evidence: FAQ p. 2, Rules question 1.
  Confidence: high

- Claim: Contingency tokens begin as one secret Active token, player-held information, and a Neutral Pool; only non-Active tokens may be inspected or acquired during play, dead Characters return held tokens, and the Active token is revealed and applied first in the Victory Check. Alert places its token at half the current Time number rounded down and opens Isolation immediately; its ending follows the FAQ treatment above.
  Source: src-001, src-002, src-003
  Evidence: Rulebook pp. 11-12, Contingency, Acquiring Information, Alert Procedure, and Victory Check; Room Sheet p. 4; FAQ p. 2, Rooms question 3 and Rules question 1.
  Confidence: high

- Claim: A Character enters an empty matching CSS pod only while Time shares a slot with a CSS token, discards their hand and passes; at the Event launch step the revealed token evacuates the named pod(s), while failed occupants return to their Cargo Sending System Room and suffer a Serious Wound. CSS Control may inspect and shift an eligible CSS token one slot, and the FAQ permits a pod to launch again on its letter or Launch ALL.
  Source: src-001, src-002, src-003
  Evidence: Rulebook pp. 11 and 13; Room Sheet pp. 1-2; FAQ p. 2, Rules question 3.
  Confidence: high

- Claim: Venting selects a Room with a Technical Corridor Entrance and no destroyed connected Door, closes those Doors, removes one Fire, and places Venting; opening or destroying a connected Door cancels it, otherwise every Character and Intruder there dies at Player-Phase end. Fire wounds Characters at turn end, injures Intruders during Event Fire damage, and destroys the Facility when a thirteenth marker is required; Malfunction disables Room Actions/computers and destroys the Facility when an eleventh is required. Closed Doors block movement, Intruders destroy rather than cross them, destroyed Doors cannot close again, and Doors do not alter Noise or Encounters.
  Source: src-001, src-002
  Evidence: Rulebook pp. 19 and 27-28, Fire, Malfunction, Doors, and Vent Control Room; Room Sheet p. 3.
  Confidence: high

- Claim: Cooling System initiates Autodestruction three Time slots ahead on yellow; Power Generator may stop it while yellow. On the marked Event Phase it advances another three slots and turns red, opening the Main Gate and becoming irreversible; reaching the red token destroys the Facility, with end-of-track placement bounded to the final slot.
  Source: src-001, src-002
  Evidence: Rulebook pp. 10, 12-13; Room Sheet pp. 1-2, Cooling System and Power Generator.
  Confidence: high
