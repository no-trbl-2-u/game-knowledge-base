---
okf_version: 0.2
type: rule_category
game:
  title: "Mage Knight Board Game"
  slug: "mage-knight"
  bgg_id: 96848
  publisher: "WizKids"
  year: 2011
  edition: "English base game / rules updated March 2012"
scope: "base game"
mechanics: [deck-building, hand-management, card-play-conflict-resolution, modular-board, grid-movement, dice-rolling, cooperative-game, solo-solitaire-game, variable-player-powers, campaign-game]
sources:
  - id: "src-003"
    title: "MK_rulebook_ENG_searchable-mar2012.pdf"
    url: "https://web.archive.org/web/20201118050857/http://wizkidsgames.com/wp-content/uploads/mage/MK_rulebook_ENG_searchable-mar2012.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-15"
    notes: "Official rulebook; WizKids host 500s, text extracted from Wayback Machine snapshot 2026-07-08. Audit 2026-07-15: wizkidsgames.com host confirmed dead (ERR_TLS_CERT_ALTNAME_INVALID); url switched to the confirmed-live Wayback Machine snapshot (HTTP 200). See sources.okf.md src block for full remediation detail."
  - id: "src-005"
    title: "MK_FAQ_1.0v2.pdf"
    url: "https://web.archive.org/web/20201118050907/http://wizkidsgames.com/wp-content/uploads/mage/MK_FAQ_1.0v2.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-15"
    notes: "Official FAQ; WizKids host 500s, text extracted from Wayback Machine snapshot 2026-07-08 (3 pages, pypdf). Dated 'Version 1.0 - 7th February 2014'. Audit 2026-07-15: wizkidsgames.com host confirmed dead (ERR_TLS_CERT_ALTNAME_INVALID); url switched to the confirmed-live Wayback Machine snapshot (HTTP 200). See sources.okf.md src block for full remediation detail."
  - id: "src-008"
    title: "Mage Knight FAQ — BoardGameGeek Wiki"
    url: "https://boardgamegeek.com/wiki/page/Mage_Knight_FAQ"
    kind: faq
    provenance: community
    retrieved_at: "2026-07-03"
    notes: "Community FAQ corresponding to official thread plus extras."
  - id: "src-011"
    title: "Mage Knight — negative review from a fan — BoardGameGeek thread"
    url: "https://boardgamegeek.com/thread/2427702/mage-knight-a-negative-review-from-a-guy-that-rate"
    kind: bgg_forum
    provenance: community
    retrieved_at: "2026-07-03"
    notes: "Rules-dispersion complaint."
confidence: high
status: verified
---

## Summary

The official FAQ (v1.0, 2014-02-07) covers setup, mana, cards, PvP, skills, combat, cities, resting, and a "Commonly Missed / Misplayed Rules" checklist. Retrieved via a 2026-07-08 Wayback Machine snapshot after the WizKids host continued 500ing.

## Source-backed facts

- Claim: WizKids links an Official FAQ for Mage Knight.
  Source: src-005
  Evidence: WizKids product page link named "Official FAQ".
  Confidence: high
- Claim: Taking a mana die from the Source for mana is limited to once per turn, and is distinct from card effects that specifically say to take an extra die from the Source (which do not count against that one-per-turn limit).
  Source: src-005
  Evidence: FAQ p.1: "Does 'taking a mana die from the source' (Mana Draw stronger effect) count as my 1 die from the source per turn? No. Any effect which specifically tells you to take a die from the source is different from you choosing to take a die from the source to use for mana (which you can only do once per turn)."
  Confidence: high
- Claim: Black mana can be used during the day if the player is inside a dungeon (dungeons count as night for mana purposes), but never as a general wildcard at night for non-black-specific effects.
  Source: src-005
  Evidence: FAQ p.1: "If I enter a dungeon during the day, can I use black mana from the source? Yes, because being down a dungeon is considered night." / "Can I use black mana during the night as a wild card? No. Black mana can only be used when it is night, and only for specific things."
  Confidence: high
- Claim: Wound cards count as "cards in hand" for the Planning Tactic card's hand-limit bonus, even though they cannot be discarded or played normally.
  Source: src-005
  Evidence: FAQ p.1: "Do Wounds count as cards in your hand for the purposes of the Tactics 'Planning'? Yes. The ruling about Wound cards not counting as cards is for the purposes of things like Improvisation, not for cards in hand."
  Confidence: high
- Claim: The Day Tactic "Planning" and the Keep site card text ("draw an extra card") are misprints; both actually increase the hand limit by one, matching the rulebook.
  Source: src-005
  Evidence: FAQ p.3: "these cards were misleading in the early printings of the game. On both cards 'draw an extra card' should be replaced by 'increases your hand limit by one.' The rulebook is correct."
  Confidence: high
- Claim: Armor can never be reduced below 1 by card/skill effects, regardless of wording that doesn't explicitly state the floor.
  Source: src-005
  Evidence: FAQ p.2: "Can armor drop below 1? ... No. Armor can never be less than 1. The wording 'to a minimum of 1' should be on these cards."
  Confidence: high
- Claim: Assaulting another player's keep when they are absent draws a random gray enemy token as garrison, worth only half Fame, and is discarded (not respawned) if the assault fails.
  Source: src-003
  Evidence: Rulebook p.7: "entering a space with a keep belonging to another player counts as assault and you lose 1 Reputation... a random gray enemy token is drawn as garrison of the keep (worth half Fame)." FAQ p.3 confirms the same rule applies to Mage Towers in the "Conquer and Hold" scenario.
  Confidence: high
- Claim: Reputation bonuses for defeating enemies (+1 orc marauder, +2 draconum) apply only to rampaging enemies, not to the same enemy types encountered elsewhere (e.g. in ruins).
  Source: src-005
  Evidence: FAQ p.3: "Do I always get +1 reputation for defeating green/red enemy tokens? No. You only get the reputation bonus for defeating rampaging enemies. If you defeat an enemy token that is anything other than a rampaging enemy, you do not get the reputation bonus."
  Confidence: high
- Claim: Forced Withdrawal (taking a Wound per space backtracked) is distinct from a plain failed-assault withdrawal (no Wound); Forced Withdrawal applies only when the turn ends on an unsafe space or on another player's space where PvP isn't allowed.
  Source: src-005
  Evidence: FAQ p.3: "if you fail to defeat the defenders of a fortified site, you must withdraw back to the space where you attacked from. This is not Forced Withdrawal. Forced Withdrawal rules only apply at the end of your turn if the space you are on is not safe."
  Confidence: high
- Claim: BGG's community FAQ wiki organizes common questions under setup, mana, cards, combat, resting, skills, PvP, and other — the same category structure the official FAQ uses.
  Source: src-008
  Evidence: BGG FAQ extract table of contents lists "Game setup", "Mana", "Cards", "Combat", "Resting", "Skills", "Player vs Player", "Other".
  Confidence: medium
- Claim: Players report rules are dispersed across rulebook, walkthrough, cards, and other locations.
  Source: src-011
  Evidence: BGG thread extract: "Some rules are in the rule book, some in the Walkthrough, some on the cards..."
  Confidence: medium

## Player friction

Mage Knight’s edge-case cost is architectural: the game splits learning between walkthrough, rulebook, site cards, card text, FAQ, and community practice. That is tolerable for devotees and lethal to casual onboarding.

## Better-if opportunities

- rules ambiguity: one consolidated rules encyclopedia with official status.
- component clarity: icon appendix and site-card cross references.
- onboarding: rulebook should not rely on walkthrough memory for critical exceptions.

## Open questions

- Full line-by-line reconciliation of official FAQ 1.0v2 against the BGG wiki FAQ remains undone; no contradictions surfaced in the topics compared this pass (mana-source timing, Wound-in-hand counting, Planning/Keep hand-limit wording).

## Retry notes
- 2026-07-08: Resolved. Official FAQ text retrieved via Wayback Machine snapshot (WizKids' own host still returns HTTP 500); high-value edge-case rulings added above with page references.
