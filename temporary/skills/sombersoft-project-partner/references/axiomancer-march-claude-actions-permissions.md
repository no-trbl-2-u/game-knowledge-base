# Axiomancer `/march` Claude GitHub Actions permissions

Use this reference when T asks whether `/march` GitHub Actions have the Claude equivalent of `--dangerously-skip-permissions`, or when a march workflow is being created/repaired.

## Durable lesson

For `anthropics/claude-code-base-action@beta`, do not assume arbitrary Claude CLI flags are exposed as workflow inputs. Verify the action metadata before patching.

As observed in the public `action.yml`, the base action exposes inputs such as:

- `prompt`
- `allowed_tools`
- `disallowed_tools`
- `max_turns`
- `mcp_config`
- `settings`
- `timeout_minutes`
- `claude_code_oauth_token`

It did **not** expose these inputs at the time of the fix:

- `dangerously_skip_permissions`
- `claude_args`

Those keys can silently become dead ceremony or action warnings rather than a real permission bypass.

## Preferred workflow setting

Use Claude Code settings to set permission mode, and explicitly pin an active model plus effort level. Do not rely on the action's default model: a retired default such as `claude-sonnet-4-20250514` can fail immediately with `API Error: 404 ... model ... not_found_error` before any repository work begins.

```yaml
with:
  prompt: "/march ${{ github.event.inputs.args }}"
  model: claude-opus-4-8
  claude_env: |
    CLAUDE_CODE_EFFORT_LEVEL: medium
  claude_code_oauth_token: ${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}
  allowed_tools: "Bash,Read,Edit,Write,Glob,Grep,Agent,TodoWrite,WebFetch,WebSearch"
  settings: '{"permissions":{"defaultMode":"bypassPermissions","skipDangerousModePermissionPrompt":true}}'
  timeout_minutes: '60'
```

For Axiomancer Claude-backed workflows, T's current default is **Opus, medium effort** unless he says otherwise. Apply the same pin to all workflows using `anthropics/claude-code-base-action@beta`, including `/march`, `/mechanics-tuning`, and `/hazard-tuning`.

## Verification pattern

1. Read every `.github/workflows/*.yml` in the relevant Axiomancer repo(s), not only `march.yml`.
2. Find every workflow using `anthropics/claude-code-base-action@beta`.
3. Check the action metadata (`action.yml`) before relying on an input. Current durable inputs include `model`, `claude_env`, `settings`, `timeout_minutes`, `allowed_tools`, and `claude_code_oauth_token`.
4. Replace unsupported keys such as `dangerously_skip_permissions` or `claude_args` with the supported `settings` JSON above.
5. Add/verify `model: claude-opus-4-8` and `CLAUDE_CODE_EFFORT_LEVEL: medium` on every Claude-backed workflow unless T gives a different model/effort order.
6. If a workflow failed before the patch, inspect the failed run logs and confirm whether the failure is the retired-default-model 404 or a separate error.
7. Run `git diff --check` and parse workflow YAML when tooling is available. If YAML parser/actionlint is unavailable, do explicit sentinel checks for all Claude-backed workflows.
8. Commit directly to `main` and push, per SomberSoft mainline autonomy.
9. Re-trigger the failed workflow or a cheap representative Claude-backed workflow and verify it passes the previous immediate-failure point.

## Safety note

This setting is appropriate for trusted CI workflows whose repository and workflow file are the trust boundary. Do not generalize it to untrusted repositories without explicit user approval.