# Axiomancer March workflow: manual phase focus

Use this when T wants the GitHub Actions `/march` workflow to let him choose a specific phase for a manual run.

## Pattern

The `march.yml` workflow normally dispatches the autonomous `/march` prompt on schedule and manual runs. For manual phase targeting, add a `workflow_dispatch` input and map non-empty input to `/ship-a-phase phase <id>` while leaving scheduled and empty manual runs unchanged.

```yaml
on:
  schedule:
    - cron: '23 */6 * * *'
  workflow_dispatch:
    inputs:
      focus_phase:
        description: 'Optional phase number/id for this manual run (for example: 22). Empty runs normal /march dispatch.'
        required: false
        type: string
        default: ''

jobs:
  march:
    uses: ./.github/workflows/_claude-skill.yml
    secrets: inherit
    with:
      prompt: ${{ github.event_name == 'workflow_dispatch' && github.event.inputs.focus_phase != '' && format('/ship-a-phase phase {0}', github.event.inputs.focus_phase) || '/march' }}
      timeout_minutes: 90
```

This uses the already-documented `ship-a-phase` contract: `/ship-a-phase phase 8` ships that phase regardless of queue order.

## Verification

After patching:

1. Parse the workflow YAML locally when possible.
2. Run `git diff --check`.
3. Commit/push to `main`.
4. Verify GitHub sees the default-branch workflow:

```bash
gh workflow view march.yml --yaml
gh workflow list --all --limit 30 | grep -E '^march\b|^march '
```

Manual run example:

```bash
gh workflow run march.yml -f focus_phase=22
```

## Pitfalls

- Do not change scheduled `/march` behavior when adding manual focus. Scheduled runs should still send plain `/march`.
- Do not make `focus_phase` required; empty manual dispatch should remain a normal March tick.
- Do not route this through `/march phase N` unless `skills/march.md` has been taught that syntax. The proven path is to dispatch `/ship-a-phase phase N`.
- Keep the docs in `.github/workflows/README.md` synchronized so the Actions tab behavior is discoverable.
