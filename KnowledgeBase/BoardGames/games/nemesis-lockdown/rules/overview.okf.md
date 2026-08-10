---
okf_version: 0.2
type: rule_category
game:
  title: "Nemesis: Lockdown"
  slug: "nemesis-lockdown"
  bgg_id: null
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

# Rules Overview

- Claim: The standard game is not a shared-win cooperative game: each player keeps an Objective secret, selects one after the first Intruder encounter, must survive, pass Contingency and contamination checks, and fulfill that Objective independently.
  Source: src-001
  Evidence: Rulebook pp. 8, 10, and 12, crew setup, Player Goals, First Encounter, and Victory Check.
  Confidence: high

- Claim: Each of three Facility Sections, plus elevator power as a separate fourth Section, is powered when its Power token is blue. Powered Sections use the Advantage die for shooting, permit Computer Actions, remove eligible Noise during the Event Phase, and keep Characters out of Darkness; unpowered Sections impose Darkness card/token effects and the higher Encounter number. Backup Power resets active capacity to the two lowest tokens when fewer than three are active, then allows all Power tokens to be reassigned and activates the Time token; Time-track thresholds subsequently flip the highest active Power token off according to red/blue threshold rules. Power Generator may flip the current Section locally.
  Source: src-001, src-002
  Evidence: Rulebook pp. 13 and 24, Power and Power Thresholds; Room Sheet pp. 2 and 4, Power Generator and Backup Power Supply.
  Confidence: high

- Claim: The first Weakness begins discovered. Discovered Weaknesses modify Night Stalker rules only for Characters meeting their printed Knowledge thresholds of 3, 5, or 8; exact Weakness-card effects remain UNKNOWN.
  Source: src-001
  Evidence: Rulebook p. 23, Knowledge and Weaknesses.
  Confidence: high

- Claim: Laboratory research uses a Character Corpse, Intruder Carcass, or Egg and grants the Character 3 Knowledge. Each Object type can discover a Weakness only once: a new type is placed in the first empty Laboratory slot and reveals the Weakness below it, while an Object type used previously is discarded instead and reveals no additional Weakness. The same type may still be analyzed again for Knowledge.
  Source: src-001, src-002
  Evidence: Rulebook p. 23, Knowledge and Weaknesses; Room Sheet p. 1, Laboratory.
  Confidence: high

- Claim: Archive is a once-per-Character action requiring an inactive Knowledge token: gain 2 Knowledge, activate it, and inspect any non-Active Contingency. The FAQ distinguishes this from Alert, whose alternate action instead takes one Contingency from the Neutral Pool.
  Source: src-001, src-002, src-003
  Evidence: Rulebook p. 23; Room Sheet pp. 1 and 4; FAQ p. 2, Rooms question 3.
  Confidence: high

- Claim: Cards are hand-management/action-payment resources, but play does not purchase or permanently acquire cards into a growing personal deck; contamination is inserted and discards reshuffle. Therefore this edition is not a deckbuilder.
  Source: src-001
  Evidence: Rulebook pp. 13-15 and 22: draw to five, discard Action cards to pay costs, reshuffle the discard, and add/remove Contamination; no market, currency purchase, or acquisition flow is defined.
  Confidence: high
