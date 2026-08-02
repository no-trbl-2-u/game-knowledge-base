---
okf_version: 0.2
type: design_reference
topic: "MTG — the Storm Scale: rating whether a mechanic deserves to return"
mechanics: []
better_if_labels: [expansion-bloat, strategic-depth]
sources:
  - id: "src-001"
    title: "Mark Rosewater — Storm Scale: Ravnica and Return to Ravnica (Making Magic)"
    url: "https://magic.wizards.com/en/news/making-magic/storm-scale-ravnica-and-return-ravnica-2016-05-02"
    kind: other
    provenance: official
    retrieved_at: "2026-08-01"
    notes: "2016-05-02 column; the fullest published statement of the scale and its criteria. Named after the storm mechanic, R&D's benchmark design mistake."
confidence: medium
status: verified
---

## Summary

The Storm Scale is Rosewater's 1–10 rating of how likely a retired mechanic
is to return to a premier set (1 = definitely returning soon, 10 = would
take a miracle). Its value to outside designers is not the ratings but the
five published criteria behind them — popularity, design space, versatility,
development cost, and playability — which together form a ready-made rubric
for the question every card game faces: should this mechanic be a recurring
keyword or a one-off?

## Source-backed facts

- Claim: The scale rates likelihood of a mechanic's return from 1 to 10.
  Source: src-001
  Evidence: "a scale from 1 to 10 talking about how likely a mechanic is to return"
  Confidence: high

- Claim: The endpoints are anchored concretely: 1 means essentially
  guaranteed and soon; 10 means near-impossible.
  Source: src-001
  Evidence: "Level 1: Will definitely see again, most likely in the next set" / "Level 10: I never say never, but this would require a major miracle"
  Confidence: high

- Claim: Criterion 1 — popularity: player affection directly raises return
  odds.
  Source: src-001
  Evidence: "Popularity: Did players like this mechanic? The more players like something, the more likely we are to bring it back"
  Confidence: high

- Claim: Criterion 2 — design space: how many more cards the mechanic can
  still support.
  Source: src-001
  Evidence: "Design Space: How many more cards could we design with this mechanic?"
  Confidence: high

- Claim: Criterion 3 — versatility: how well the mechanic combines with
  other mechanics.
  Source: src-001
  Evidence: "Versatility: How well does this mechanic mix and match with other mechanics?"
  Confidence: high

- Claim: Criterion 4 — development: ease of costing and balancing.
  Source: src-001
  Evidence: "Development: How easy is this mechanic to cost? How easy is it to balance?"
  Confidence: high

- Claim: Criterion 5 — playability: whether players could understand and
  correctly play the mechanic.
  Source: src-001
  Evidence: "Playability: Did players have problems understanding this mechanic?"
  Confidence: high

## Implications for designers

- Use the five criteria *before* shipping, not after: a candidate keyword
  scoring low on design space or versatility is telling you it should be a
  one-off card, not a named recurring mechanic.
- Popularity and balance are independent axes — the scale exists precisely
  because beloved mechanics can be undevelopable (storm itself: adored,
  unbalanceable, hence the name).
- Design space is the keyword test that pairs with
  `keywords-and-reminder-text.okf.md`: a keyword is a promise of future
  cards; if you can't list ten unmade designs, don't name it.
- Versatility is a systems question: a mechanic that can't coexist with
  the rest of the toolbox fragments the game even if it is fine alone.

## Open questions

- Quotes were machine-extracted from a fetched body; re-verify verbatim
  wording in the next audit pass.
- The claim that the scale is named for the storm mechanic (a popular but
  undevelopable design) is well-known community knowledge but was not
  evidenced in the fetched body — source it (earlier Blogatog/column) and
  regrade; until then it appears only in source notes, not as a claim.
