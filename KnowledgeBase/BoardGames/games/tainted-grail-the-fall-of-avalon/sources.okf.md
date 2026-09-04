---
okf_version: 0.2
type: sources
game:
  title: "Tainted Grail: The Fall of Avalon"
  slug: "tainted-grail-the-fall-of-avalon"
  bgg_id: 264220
  publisher: "Awaken Realms"
  year: 2019
  weight: 3.36
  edition: "English base game"
scope: "base game"
mechanics: [campaign-game, cooperative-game, hand-management, point-to-point-movement, resource-management, variable-player-powers]
sources:
  - id: "src-001"
    title: "BoardGameGeek — Tainted Grail: The Fall of Avalon"
    url: "https://boardgamegeek.com/boardgame/264220/tainted-grail-the-fall-of-avalon"
    kind: bgg_page
    provenance: secondary
    retrieved_at: "2026-07-20"
    notes: "Discovery source; statistics blocked."
  - id: "src-002"
    title: "Awaken Realms — Tainted Grail Kickstarter"
    url: "https://www.kickstarter.com/projects/awakenrealms/tainted-grail-the-fall-of-avalon"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-07-20"
    notes: "Official product description."
  - id: "src-003"
    title: "Tainted Grail: The Fall of Avalon quick review"
    url: "https://boardgamegeek.com/thread/3556352/tainted-grail-the-fall-of-avalon-a-struggle-for-fo"
    kind: review
    provenance: community
    retrieved_at: "2026-07-20"
    notes: "Review metadata and player-fit testimony."
  - id: "src-004"
    title: "Awaken Realms — official Downloads page"
    url: "https://awakenrealms.com/download"
    kind: publisher_page
    provenance: official
    retrieved_at: "2026-09-04"
    notes: "Publisher asset index. Recovered 2026-09-04 (librarian) by rendering the site's client-side accordion; the section id is `tainted-grail-the-fall-of-avalon`. Supersedes the 2026-07-20 bare-domain lead."
  - id: "src-005"
    title: "Tainted Grail Rulebook (English)"
    url: "https://awakenrealms.com/images/download/Tainted%20Grail%20FoA/ENG/Tainted_Grail_Rulebook_280x280mm_ENG.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-09-04"
    notes: "Base-game English rulebook listed under the Downloads page RULEBOOKS group. HEAD receipt 2026-09-04: HTTP 200, application/pdf, 109,541,500 bytes. Asset identified and receipted; body text not extracted this pass."
  - id: "src-006"
    title: "Tainted Grail FAQ v1.0 (English)"
    url: "https://awakenrealms.com/images/download/Tainted%20Grail%20FoA/ENG/Tainted_Grail_FAQ_v1.0_ENG.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-09-04"
    notes: "Only English-language document in the Downloads page FAQ & ERRATA group. HTTP 200, application/pdf, 1,918,400 bytes."
  - id: "src-007"
    title: "Tainted Grail Rulebook 2.0 (corrected 2023-09-15)"
    url: "https://awakenrealms.com/images/download/Tainted%20Grail%20FoA/2.0/TG_CB_Rulebook_280x280mm_bleeds3mm%20%5B24%20pages%5D_%5Bcorrected_15_09_2023%5D.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-09-04"
    notes: "Revised 24-page core-box rulebook; edition-specific, not the 2019 first-retail printing. HTTP 200, application/pdf, 46,217,931 bytes."
confidence: medium
status: needs_followup
---

## Source registry

The BGG page and official publisher campaign establish identity and RPG-like campaign framing.

As of the 2026-09-04 librarian pass the official rulebook and FAQ assets are recovered
(src-005, src-006, src-007) from the publisher's own Downloads index (src-004), closing the
long-open "exact rulebook asset not recovered" gap. The remaining open item is the current
BGG score/rank (src-001), which stays blocked.

## Source-backed facts

- Claim: Awaken Realms publishes a base-game English Tainted Grail rulebook as a direct PDF download from its official Downloads index.
  Source: src-004
  Evidence: Downloads page section `tainted-grail-the-fall-of-avalon`, group heading "RULEBOOKS", link text "Tainted Grail Rulebook".
  Confidence: high

- Claim: The English base-game rulebook asset resolves as a live official PDF.
  Source: src-005
  Evidence: 2026-09-04 retrieval receipt "200 application/pdf 109541500".
  Confidence: high

- Claim: The publisher's FAQ & ERRATA group for this game exposes exactly one English document, an FAQ marked v1.0; no English-language errata document is published there.
  Source: src-004
  Evidence: FAQ & ERRATA group lists "Tainted Grail FAQ" (ENG) and "Tainted Grail Errata" whose only asset is the German-language file `WEB_A4_Tainted-Grail_DLRZDL_AenderungenKlarstellungen_V1.0-1.pdf`.
  Confidence: medium

- Claim: A revised "Rulebook 2.0" printing exists alongside the original rulebook.
  Source: src-007
  Evidence: link text "Tainted Grail Rulebook 2.0"; filename carries "[24 pages]_[corrected_15_09_2023]".
  Confidence: high

## Open questions

- Current BGG average, Geek Rating, and rank (src-001) remain unrecovered; see `scout-report.okf.md` followups.
- Whether an English-language errata document exists off the Downloads index is unestablished; only a German errata asset is published there. This is not an absence claim.
