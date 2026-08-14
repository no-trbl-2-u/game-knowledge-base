# Axiomancer agenda and evidence decisions

Use when continuing SomberSoft morning agendas, `/oversight` follow-ups, `/march` pipeline triage, or Axiomancer playtest evidence work.

## Reference screenshots

- Manual playthrough screenshots approved by T should be treated as canonical evidence, not disposable smoke output.
- Store approved references under `axiomancer-mobile/test-artifacts/reference-screenshots/`.
- Keep generated/current screenshots separate, e.g. ignored `screenshots/current/` or equivalent tool output.
- Name reference screenshots by route/state and canonical order rather than timestamp alone, e.g. `01-home.png`, `02-march-wilds.png`, `03-encounter-modal.png`, `04-combat-stance.png`.
- When T sends screenshots, preserve the order he sends them as part of the canonical playthrough ritual.
- Wire visual smoke/reporting to compare current shots against approved references; do not silently overwrite references.

## Agenda sequencing decisions

- If a candidate says “Level-up modal implementation,” verify the real gap before promoting it. T corrected that the level-up modal already exists.
- Event encounter implementation should begin in `axiomancer-mechanics` first: data shape, resolver behavior, CLI/playthrough evidence, and tests before mobile UI ornament.
- Temporary mobile Event shells are allowed only after engine truth exists or as clearly marked scaffolding; they must not become final minigame design by accident.
- Event minigame design is deferred until mechanics support and clean encounter-loop evidence exist. Bring Tobin in for that design pass.

## Event minigame direction for later Tobin pass

- Desired feel: board-game-like, punishing yet rewarding.
- Choices should include ethical dilemmas and lesser-of-two-evils situations where the “right” answer is the player’s opinion, conscience, build, and risk tolerance — not a tooltip-correct morality answer.
- Standing candidate textures: visual dice, strategic card play, ethical tradeoffs.

## Combat trigger bug framing

Treat the one-combat-only bug as a high-priority engineering target because it corrupts downstream playtest evidence.

Acceptance frame:

- Reproduce the one-combat-only failure.
- Determine whether root cause lives in map progression, encounter registry, RNG/seed path, resolved encounter flags, mobile presenter state, or route gating.
- Add hermetic regression coverage.
- Prove through CLI/playthrough evidence that multiple distinct combat-capable nodes can trigger combat in one run.
- Ensure resolving the first combat does not globally suppress later combat encounters.
- Keep non-combat Event absence separate from combat recurrence failure.

## Deployment access agenda

Expo/EAS access belongs under account/tool integrations, but keep it explicit when T names it.

- Auth/secrets require T's approval.
- Public deploys/releases require T's approval.
- Inspect `eas.json`, Expo project config, build profiles, and deployment command doctrine before changing credentials or releasing.
- GitHub access usually comes first because deployments should tie to commits, branches, CI, and release provenance.
