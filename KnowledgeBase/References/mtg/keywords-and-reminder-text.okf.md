---
okf_version: 0.2
type: design_reference
topic: "MTG — keywords and reminder text: compressing rules text without losing novices"
mechanics: []
better_if_labels: [onboarding, rules-ambiguity, component-clarity]
sources:
  - id: "src-001"
    title: "Mark Rosewater — Keyword to the Wise (Making Magic)"
    url: "https://magic.wizards.com/en/news/making-magic/keyword-wise-2003-05-19"
    kind: other
    provenance: official
    retrieved_at: "2026-08-01"
    notes: "2003-05-19 Making Magic column on keyword craft and the reminder-text convention."
confidence: medium
status: verified
---

## Summary

MTG's convention of *keyword + parenthetical italic reminder text* is a
deliberate compression technology: the keyword buys shared vocabulary,
shorter cards, and a referenceable card class; the italic gloss carries
novices without costing experts anything, because playtesting showed
experienced players simply skip it. Rosewater's craft rules: keyword only
what blends coherently, and treat mechanics as reusable rather than
disposable.

## Source-backed facts

- Claim: Keywords exist to give all players one shared word for one thing —
  vocabulary standardization, not decoration.
  Source: src-001
  Evidence: "Keywords help create this vocabulary because it allows all the players to use the same word to mean the same thing."
  Confidence: high

- Claim: Playtesting revealed reminder text's key property: it guides those
  who need it and is ignored by those who don't.
  Source: src-001
  Evidence: "Reminder text had an almost magical property. It was a useful tool for those that needed the guidance but was easily glossed over by those that didn't."
  Confidence: high

- Claim: Reminder text is an enabler of overall game complexity — with the
  safety net in place, R&D could complicate the game elsewhere.
  Source: src-001
  Evidence: "By having the resources of reminder text handy to help novices navigate through their early games (in a nice easy-to-ignore italic font, no less), R&D has been able to take numerous steps to complicate the game."
  Confidence: high

- Claim: Keywording a mechanic opens synergy design space: other cards can
  now reference the class by name.
  Source: src-001
  Evidence: "By keywording a mechanic (and thus giving it a shorthand word), you allow the designers to create cards that interact with that mechanic."
  Confidence: high

- Claim: Bundling several effects under one keyword only works when the
  pieces cohere in flavor or gameplay.
  Source: src-001
  Evidence: "Be aware that this works only when the different ideas blend well together either through flavor or game play."
  Confidence: high

- Claim: Mechanics should be treated as reusable resources, not spent once
  and discarded.
  Source: src-001
  Evidence: "Mechanics are a reusable resource, not an expendable one."
  Confidence: high

## Implications for designers

- The keyword + italic-gloss convention buys text-budget headroom directly:
  the card's effective length for an experienced reader is the keyword
  alone, while the printed card still teaches itself.
  Pairs with `new-world-order-complexity-budget.okf.md` — reminder text is
  one of the tools that makes a common-tier complexity cap survivable.
- A keyword must pass three tests before it earns the vocabulary tax:
  shared meaning across players, at least occasional cross-references from
  other cards (a class nothing references is overhead), and internal
  coherence of whatever it bundles.
- Typography is part of the mechanic: the gloss works *because* it is
  visually skippable (italics, parentheses). A gloss that shouts defeats
  the two-audience trick.
- Before inventing a new mechanic, check the shelf of retired ones —
  reuse compounds vocabulary instead of growing it.

## Open questions

- Quotes were machine-extracted from a fetched body; re-verify verbatim
  wording in the next audit pass.
- This 2003 article predates NWO (2011); Rosewater's later writing on
  evergreen-keyword pruning (which keywords stay in every set) would
  complete the picture of keyword lifecycle management.
