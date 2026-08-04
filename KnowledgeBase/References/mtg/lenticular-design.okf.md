---
okf_version: 0.2
type: design_reference
topic: "MTG — lenticular design: cards that read simple to novices and deep to experts"
mechanics: []
better_if_labels: [onboarding, strategic-depth]
sources:
  - id: "src-001"
    title: "Mark Rosewater — Lenticular Design (Making Magic)"
    url: "https://magic.wizards.com/en/news/making-magic/lenticular-design-2014-12-15"
    kind: other
    provenance: official
    retrieved_at: "2026-08-01"
    notes: "2014-12-15 Making Magic column naming and codifying the technique."
confidence: medium
status: verified
---

## Summary

Lenticular design is Rosewater's name for cards that change complexity with
the viewer: a beginner reads a simple card and plays it correctly at face
value; an expert reads the same card and sees the deeper line. It works
because complexity is not a property of the card but of the reader, and
because strategic depth is invisible to players who lack the knowledge to
perceive it. It is the constructive technique that makes a complexity cap
(New World Order) livable — hide depth inside simple-reading cards instead
of deleting it.

## Source-backed facts

- Claim: The technique targets cards that are simple to beginners but more
  advanced to experienced players — not the reverse.
  Source: src-001
  Evidence: "ones where they were simple to the beginner but more advanced to the experienced player."
  Confidence: high

- Claim: The enabling insight is that comprehension complexity varies by
  person; the same card costs different players different amounts.
  Source: src-001
  Evidence: "Complexity, that is how complex a particular card is for a player to comprehend, varied from person to person."
  Confidence: high

- Claim: Worked example — Black Cat: novices see a small creature with a
  death bonus; experts see a card built around the death trigger.
  Source: src-001
  Evidence: "To a beginner, Black Cat is a two-mana 1/1 creature that has a nice surprise when it dies...To the experienced player, though, the card is all about the death trigger."
  Confidence: high

- Claim: A lenticular card must still have obvious surface value — it has
  to visibly do *something* for the naive reading to be playable.
  Source: src-001
  Evidence: "When designing a lenticular card, you have to make sure it has a surface value—it has to appear to do something."
  Confidence: high

- Claim: Novices naturally play trigger-bearing cards as if they were
  vanilla, which is exactly why the hidden layer is free for them.
  Source: src-001
  Evidence: "Less-experienced players will play a creature with a death trigger and then just play it as if it was a vanilla creature, ignoring the death trigger."
  Confidence: high

- Claim: The stated philosophy is concealment, not removal, of complexity.
  Source: src-001
  Evidence: "Sometimes, it's not about removing the complexity, but hiding it...finding a way to create a simple card to allow options."
  Confidence: high

## Implications for designers

- Lenticular design is the answer to the solo-complexity ceiling: raise the
  expert ceiling without raising the novice floor. The Mage Knight failure
  mode (all depth front-loaded as comprehension cost) is the anti-pattern.
- Test each card twice: does the naive face-value reading produce a legal,
  non-punishing play? Does the expert reading add a genuinely better line?
  Both must be yes.
- Triggers, positioning, and timing are good hiding places for depth;
  extra words and extra board state are bad ones (those tax everyone).
- Works as a system with the complexity budget
  (`new-world-order-complexity-budget.okf.md`) and reminder text
  (`keywords-and-reminder-text.okf.md`): the budget caps visible cost,
  lenticular design smuggles the depth back in.

## Open questions

- Quotes were machine-extracted from a fetched body; re-verify verbatim
  wording (the fetch dated the piece 2014-12-16; the URL slug says
  2014-12-15 — confirm the official date).
