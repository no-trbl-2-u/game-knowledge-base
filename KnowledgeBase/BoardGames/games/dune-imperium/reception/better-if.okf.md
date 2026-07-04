---
okf_version: 0.1
type: better_if
game:
  title: "Dune: Imperium"
  slug: "dune-imperium"
  bgg_id: 316554
  publisher: "Dire Wolf"
  year: 2020
  edition: "English base game"
scope: "base game"
sources:
  - id: "src-006"
    title: "Dune: Imperium Rulebook and Supplements — BGG file page"
    url: "https://boardgamegeek.com/filepage/210689/dune-imperium-rulebook-and-supplements"
    kind: bgg_page
    provenance: community
    retrieved_at: "2026-06-30"
    notes: "Community/file comments include rulebook format usability complaint."
  - id: "src-009"
    title: "Dune: Imperium — Geeky Guide"
    url: "https://www.geeky-guide.com/board-games/dune-imperium"
    kind: review
    provenance: secondary
    retrieved_at: "2026-06-30"
    notes: "Review-style guide noting procedural teaching curve and high social friction."
  - id: "src-010"
    title: "Dune: Imperium — Dune goes all Euro and stuff"
    url: "https://douglassun.substack.com/p/dune-imperium-dune-goes-all-euro"
    kind: review
    provenance: secondary
    retrieved_at: "2026-06-30"
    notes: "Review mentions AI challenge and possible Glossu Rabban combat strength issue."
  - id: "src-011"
    title: "Dune: Imperium App — App Store ratings/reviews"
    url: "https://apps.apple.com/us/app/dune-imperium/id1575414319"
    kind: review
    provenance: secondary
    retrieved_at: "2026-06-30"
    notes: "Digital player feedback includes steep learning curve/tutorial insufficiency."
  - id: "src-004"
    title: "DUNE_IMPERIUM_FAQ_25-1-13.pdf"
    url: "https://d19y2ttatozxjp.cloudfront.net/pdfs/DUNE_IMPERIUM_FAQ_25-1-13.pdf"
    kind: faq
    provenance: official
    retrieved_at: "2026-06-30"
    notes: "Rules ambiguities and errata load."
confidence: medium
status: verified
---

## Summary

Better-if opportunities cluster in onboarding, component/rulebook usability, rules/timing ambiguity, combat swing perception, and balance/asymmetry perception. These are not verdicts against the game. They are points where a great system shows the cost of its power.

## Source-backed facts

- Claim: A BGG file-page commenter complained the square rulebook/reference format is awkward at table and suggested changing to a more standard paper size.
  Source: src-006
  Evidence: Search extraction from BGG file page: "This size is bad for using and reading it... You can NOT read it by holding it in one hand... the rulebook is pretty massive... reference sheets... awkward to use and find space for at the table."
  Confidence: medium
- Claim: Digital user feedback reported a steep learning curve and tutorial incompleteness.
  Source: src-011
  Evidence: Search extraction: "tutorials only teach you a fraction of the gameplay... steep learning curve."
  Confidence: medium
- Claim: Geeky Guide labels learning overhead as procedural and social dynamics as high friction.
  Source: src-009
  Evidence: Search extraction: "Teaching Curve — Procedural" and "SOCIAL dynamics — High Friction."
  Confidence: medium
- Claim: Official FAQ covers many timing/definition questions, indicating rules edge-case load.
  Source: src-004
  Evidence: FAQ includes sections on Intrigue cards, optional effects, Reveal turn, troops, Alliance, and "When you win a Conflict."
  Confidence: high
- Claim: A reviewer flagged possible Glossu Rabban overpowered combat pressure in digital AI context.
  Source: src-010
  Evidence: Search extraction: "Glossu Rabban may be a bit overpowered... recruit more soldiers with ease... close to unstoppable in the conflict phase."
  Confidence: low

## Better-if opportunities

1. **Onboarding**
   - Proposal: Add a scripted teach round showing one Agent turn, one early Reveal, one combat, and one card acquisition.
   - Evidence basis: steep learning curve/tutorial complaint; procedural teaching label.
   - Confidence: medium

2. **Component clarity / accessibility**
   - Proposal: Provide compact A4/letter printable references and a table-footprint-friendly rule index.
   - Evidence basis: BGG file-page rulebook/reference sheet format complaint.
   - Confidence: medium

3. **Rules ambiguity**
   - Proposal: Add explicit timing-window reference for Plot, Combat, Endgame, Reveal-turn draw, and "when you win" effects.
   - Evidence basis: official FAQ contains repeated timing clarifications.
   - Confidence: high

4. **Combat resolution / randomness**
   - Proposal: Bound hidden-combat surprise with clearer public risk indicators: number of Intrigue cards, possible sword ranges, and conflict commitment reminders.
   - Evidence basis: praised hidden uncertainty can become perceived swinginess.
   - Confidence: medium

5. **Balance/faction asymmetry**
   - Proposal: Track leader win rates in digital implementation and flag outlier leaders for variant notes rather than anecdotal patching.
   - Evidence basis: low-confidence reviewer concern about Glossu Rabban and combat dominance.
   - Confidence: low

6. **Solo/co-op automation**
   - Proposal: In solo/two-player modes, automate House Hagal priority explanations and reveal why a Rival selected a space.
   - Evidence basis: rulebook delegates solo/two-player setup to House Hagal sheet; app reviews praise automation but note tutorials can be incomplete.
   - Confidence: medium

## Player friction

The sharpest complaint is not that the game lacks decisions. It is that the decision grammar arrives quickly and must be learned while opponents are already blocking spaces and threatening conflict rewards.

## Praised design

The same elements that create complaints are the source of acclaim: hidden combat, direct blocking, asymmetric leaders, and the split use of cards.

## Design implications for SomberSoft

- Preserve conflict. Reduce uncertainty about procedure.
- Do not nerf drama when a reference card would solve the wound.
- Use telemetry for balance allegations; use comments for pain discovery.

## Open questions

- Which complaints persist after 3+ plays versus first-play-only friction.
- Whether Uprising's board changes are effectively official better-if patches for base-game pain points.
