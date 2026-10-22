---
okf_version: 0.2
type: sources
game:
  title: "Twilight Struggle"
  slug: "twilight-struggle"
  bgg_id: 12333
  publisher: "GMT Games"
  year: 2005
  weight: null
  edition: "2nd Edition Deluxe Edition rulebook"
scope: "base game"
mechanics: [area-majority-influence, card-play-conflict-resolution, dice-rolling, hand-management, hidden-information, point-to-point-movement, variable-player-powers]
sources:
  - id: "src-001"
    title: "Twilight Struggle Deluxe rulebook — GMT Games"
    url: "https://www.gmtgames.com/living_rules/TS_Rules_Deluxe.pdf"
    kind: rulebook_pdf
    provenance: official
    retrieved_at: "2026-10-22"
    notes: "Official governing rules receipt."
  - id: "src-002"
    title: "Twilight Struggle Collector’s Edition — The Opinionated Gamers"
    url: "https://opinionatedgamers.com/2017/04/26/twilight-struggle-collectors-edition-photos-and-game-history-by-chris-wray/"
    kind: review
    provenance: secondary
    retrieved_at: "2026-10-22"
    notes: "Independent identity and reception receipt."
  - id: "src-003"
    title: "Twilight Struggle box photograph — The Opinionated Gamers"
    url: "https://i0.wp.com/opinionatedgamers.com/wp-content/uploads/2017/04/box.jpeg?resize=506%2C350&ssl=1"
    kind: other
    provenance: secondary
    retrieved_at: "2026-10-22"
    notes: "Reduced visual derivative receipt."
confidence: high
status: verified
---

## Source register

- Claim: src-001 is the official governing-rules source for the 2nd Edition Deluxe base game.
  Source: src-001
  Evidence: GMT Games serves the 32-page PDF; the PDF identifies itself as the Deluxe Edition rule book and contains the numbered rules sections used by this packet.
  Confidence: high

- Claim: src-002 is independent reception and identity testimony rather than rules authority.
  Source: src-002
  Evidence: The Opinionated Gamers article is hosted on a separate editorial domain, is authored by Chris Wray, and describes the 2005 release, designers, publisher, and reception history.
  Confidence: high

- Claim: src-003 is an article-hosted visual source used only through a reduced local derivative.
  Source: src-003
  Evidence: The retrieved JPEG is the box photograph identified in the article; its original URL, byte length, and SHA-256 are preserved in evidence.json.
  Confidence: high

## Retrieval notes

Static PDF and image receipts preserve exact retrieved bytes and SHA-256 values. The Opinionated Gamers HTML receipt preserves the final URL, source identity, cited excerpt, retrieval timestamp, and transport metadata. BGG was attempted for discovery/rating context but returned a Cloudflare block and is not used as evidence.