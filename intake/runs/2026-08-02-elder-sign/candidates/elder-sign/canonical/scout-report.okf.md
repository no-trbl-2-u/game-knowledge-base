---
okf_version: 0.2
type: scout_report
game:
  title: "Elder Sign"
  slug: "elder-sign"
  bgg_id: 100423
  publisher: "Fantasy Flight Games"
  year: 2011
  weight: null
  edition: "Fantasy Flight Games base game; core box only"
scope: "base game"
mechanics: [cooperative-game, dice-rolling, hand-management, solo-solitaire-game, variable-player-powers]
sources:
  - id: "src-001"
    title: "Fantasy Flight Games — Elder Sign Rules of Play"
    url: "https://images-cdn.fantasyflightgames.com/ffg_content/Elder%20Sign/support/Eldersign-rules-of-play.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-08-02"
    notes: "Official governing authority."
  - id: "src-002"
    title: "RPGnet — Review of Elder Sign"
    url: "https://www.rpg.net/reviews/archive/15/15428.phtml"
    kind: review
    provenance: secondary
    retrieved_at: "2026-08-02"
    notes: "Playtest review dated 2011-10-31; full article text retrieved and read."
  - id: "src-004"
    title: "The Opinionated Gamers — Review: Elder Sign"
    url: "https://opinionatedgamers.com/2011/11/12/review-elder-sign/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-08-02"
    notes: "Review by Matt J. Carlson dated 2011-11-12; full article text retrieved and read."
  - id: "src-005"
    title: "Wikimedia Commons — Elder Sign Game Setting"
    url: "https://commons.wikimedia.org/wiki/File:Elder_Sign_Game_Setting.jpg"
    kind: other
    provenance: community
    retrieved_at: "2026-08-02"
    notes: "CC BY-SA 4.0 own-work photograph; visual source only."
confidence: high
status: verified
---

# Bathcat scout report

## Selection and bounded scope

Elder Sign was selected from the unchecked physical tabletop wishlist as the cooperative cohort candidate. The packet is limited to the base box and the complete core rules PDF. Expansions, digital adaptations, ratings, and unsupported FAQ claims are excluded.

## Gate result

- Claim: The bounded rules authority is complete for the claims published here.
  Source: src-001
  Evidence: The complete official Rules of Play PDF was retrieved HTTP 200 and inspected across its core-game sections.
  Confidence: high
- Claim: The packet has independent reception evidence spanning two distinct non-BGG organizational domains beyond the official rules authority.
  Source: src-002, src-004
  Evidence: Full article text was retrieved from `rpg.net` (2011-10-31) and `opinionatedgamers.com` (2011-11-12); every reception claim quotes retrieved prose rather than page metadata.
  Confidence: high
- Claim: Every visual rests on a stated rights basis.
  Source: src-001, src-005
  Evidence: Two panels are reduced editorial excerpts of the official rulebook; the third derives from a CC BY-SA 4.0 own-work Commons photograph, redistributed under the same license with attribution.
  Confidence: high

## Repair record

This head repairs the two substantive blockers raised in the exact-head audit of `67bef19eb0de5becac4e778c22a3d7e3627ced3f`:

- **Unverifiable reception.** The Geek and Sundry TableTop YouTube episode was withdrawn. Its watch page returned HTTP 429/CAPTCHA under independent audit, so only video identity could be confirmed — never the claimed gameplay observations or timestamps. It is replaced by two written reviews whose full text was retrieved and read, removing the timestamp-audit dependency entirely.
- **Unresolved visual rights.** The Boards of Madness image was withdrawn; its host asserts "All Rights Reserved" and no reuse basis was established. Component visuals now come from the official rulebook, and live table state from an openly licensed Commons photograph.

## Open questions

Complete card-local text for Adventure, Other World, item, spell, Ally, Mythos, and Ancient One cards remains outside this packet; no card-identity denominator is claimed. No publisher-wide FAQ/errata absence is asserted. No canonical promotion is performed by Bathcat; approval and promotion remain the Mennonite's.
