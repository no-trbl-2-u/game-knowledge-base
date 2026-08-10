---
okf_version: 0.2
type: rule_category
game:
  title: "Shadows over Camelot"
  slug: "shadows-over-camelot"
  bgg_id: 15062
  publisher: "Days of Wonder"
  year: 2005
  weight: null
  edition: "English 2005 first/release retail base game; release rulebook bytes not recovered"
scope: "English 2005 first/release retail base game only; 2015/reprint rules are later comparison; Merlin's Company, Sir Bedivere/promos, translations, variants, replacements, and digital implementations excluded"
mechanics: ["cooperative-game", "dice-rolling", "hand-management", "hidden-information", "semi-cooperative-game", "set-collection", "variable-player-powers"]
sources:
  - id: "src-001"
    title: "2005 Book of Quests"
    url: "https://ncdn0.daysofwonder.com/shadowsovercamelot/en/img/sc_quests_en.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "SHA-256 2e96d255acd1ed17f0a345608531aa45e9f4aa0d180625b9ab0f7e17d0c0cde9."
  - id: "src-002"
    title: "2005 FAQ 1.0"
    url: "https://cdn.svc.asmodee.net/production-daysofwonder/uploads/2024/07/sc_faq_en.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "SHA-256 2f4ab8d1756e5743dd7cf12802bebb371dcf08141b448d9867adce5ca7a90709; Sir Bedivere paragraph excluded."
confidence: medium
status: needs_followup
---

# FAQ, Accusation, and Traitor Procedures

- Claim: Accusation is a Heroic Action available only while at least six swords or six Siege Engines are present, and each Knight may accuse once. A correct accusation adds one White sword; a false accusation flips an existing White sword to Black, doing nothing if none exists.
  Source: src-001, src-002
  Evidence: Book of Quests Appendix I; FAQ section VI.
  Confidence: high

- Claim: If the board falls below both six swords and six Siege Engines, accusation eligibility turns off until either threshold is restored.
  Source: src-002
  Evidence: FAQ section VI falling-below-threshold ruling.
  Confidence: high

- Claim: A dead Knight cannot accuse or be accused and never reveals Loyalty; a dead unrevealed Traitor gets no two-sword end conversion.
  Source: src-002
  Evidence: FAQ section VI.
  Confidence: high

- Claim: Once revealed, the Traitor discards cards/Life die, leaves the map, cannot receive normal White-card effects, and each turn first randomly takes and discards one White card from a living Knight, then either adds a Siege Engine or draws/applies the top Black card.
  Source: src-001, src-002
  Evidence: Book of Quests Appendix I; FAQ section VII fixes the sequence with THEN.
  Confidence: high

- Claim: An unmasked Traitor is specifically unaffected by Fate and Reinforcements: while off the board, the Traitor receives neither White cards nor those cards' consequences.
  Source: src-002
  Evidence: FAQ section VII Fate/Reinforcements ruling.
  Confidence: high

- Claim: Healing requires three identical White cards discarded face down—three Grails or three equal Fight values qualify, mixed Fight values do not—and hidden disposal never permits cheating.
  Source: src-002
  Evidence: FAQ section I healing ruling.
  Confidence: high

- Claim: Lady of the Lake can complete Excalibur remotely; its player receives Excalibur, but only present Knights gain Life and share awards. If no Knight is present, no Life is gained and the White-card award is drawn and discarded. Three Merlin cards cannot cancel Special Black cards drawn inside an unresolved three-card Morgan chain.
  Source: src-002
  Evidence: FAQ section II Lady of the Lake and Morgan rulings.
  Confidence: high

- Claim: Sir Bedivere's FAQ paragraph is promo-local and excluded; FAQ 1.0 is applied only to named base cases and supplies no universal card-over-rulebook precedence doctrine.
  Source: src-001, src-002
  Evidence: Book of Quests Appendix I enumerates seven base Knights without Bedivere; FAQ section IV separately names him and the introduction limits the document to listed repetitions/clarifications/interpretations.
  Confidence: high
