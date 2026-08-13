---
okf_version: 0.2
type: game_index
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
better_if_labels: []
sources:
  - id: "src-001"
    title: "Shadows over Camelot Book of Quests"
    url: "https://ncdn0.daysofwonder.com/shadowsovercamelot/en/img/sc_quests_en.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "2005 release companion; 16 pages; 2,306,806 bytes; SHA-256 2e96d255acd1ed17f0a345608531aa45e9f4aa0d180625b9ab0f7e17d0c0cde9."
  - id: "src-002"
    title: "Shadows over Camelot FAQ 1.0"
    url: "https://cdn.svc.asmodee.net/production-daysofwonder/uploads/2024/07/sc_faq_en.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-07-31"
    notes: "Dated 2005-10-12; 6 pages; SHA-256 2f4ab8d1756e5743dd7cf12802bebb371dcf08141b448d9867adce5ca7a90709."
confidence: medium
status: needs_followup
---

# Shadows over Camelot

## Edition boundary

- Claim: This draft targets the English 2005 first/release retail base game designed by Bruno Cathala and Serge Laget; it excludes every expansion, promo, translation, replacement, variant, reprint, and digital implementation.
  Source: src-001, src-002
  Evidence: Book of Quests PDF metadata is dated 2005-05-26 and FAQ 1.0 is dated 2005-10-12; both name the base game and its authors.
  Confidence: high

- Claim: Cooperative and semi-cooperative tags both apply because the loyal Knights share a team result while a possibly dealt Traitor serves the opposing side; deck-building does not apply because play draws from shared White/Black piles and never acquires cards into a persistent personal deck.
  Source: src-001
  Evidence: Book of Quests pp. 13-16 defines Loyalty, shared White/Black classes, the Traitor, shared Quest outcomes, and draw/discard flows without personal deck acquisition.
  Confidence: high

## Documents

- [Source/version matrix](sources.okf.md)
- [Coverage and governing ledger](scout-report.okf.md)
- Six operative, edition-bounded rule records under `rules/`
- Two independent reception records under `reception/`
- [Lawful 2005 visual packet](visuals/packet.okf.md)
