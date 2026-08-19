# SomberSoft agent power integrations

Use this reference when T asks to give Hermes more operational power by connecting services such as GitHub, Vercel, Expo/EAS, Supabase, Linear, Sentry, PostHog, Figma, Playwright/MCP, or similar tools.

## Class pattern

1. Load the Hermes Agent setup/configuration skill first when the work modifies Hermes tools, MCP, config, providers, gateway, credentials, or CLI affordances.
2. Inspect current capability before proposing new power:
   - `hermes tools list`
   - `hermes mcp list`
   - relevant CLI availability and versions
   - existing auth status for each service
   - whether secret names are present in the active shell and `~/.hermes/.env`, without printing secret values
3. Document the integration plan in the workspace root when it affects SomberSoft broadly. Prefer a stable root-level roadmap/ledger file under `~/Workspace/` so it remains visible across repos.
4. Treat service integrations as authority grants. Separate:
   - read-only inspection
   - local builds/tests
   - preview deploys
   - production deploys
   - database writes
   - billing/resource deletion
   - public release/submission
5. Ask T before production, destructive, public, costly, secret/auth, credential, billing, app-store, or major project-direction changes.

## Practical install/auth sequence

For Node-distributed CLIs, a useful first batch is:

```bash
npm install -g vercel eas-cli supabase @sentry/cli
```

Then verify:

```bash
vercel --version && vercel whoami
eas --version && eas whoami
supabase --version && supabase projects list
sentry-cli --version && sentry-cli info
```

If `npm install -g` succeeds but commands are not found, check the npm global prefix:

```bash
npm prefix -g
```

In this Hermes environment, npm global binaries may land under `/root/.hermes/node/bin`, while normal sessions search `/root/.local/bin`. The durable fix is to make PATH-visible symlinks, for example:

```bash
ln -sf /root/.hermes/node/bin/vercel /root/.local/bin/vercel
ln -sf /root/.hermes/node/bin/vc /root/.local/bin/vc
ln -sf /root/.hermes/node/bin/eas /root/.local/bin/eas
ln -sf /root/.hermes/node/bin/supabase /root/.local/bin/supabase
ln -sf /root/.hermes/node/bin/sentry-cli /root/.local/bin/sentry-cli
hash -r
```

Capture this as a setup fix, not as a claim that the CLIs are broken.

## Secret handling

Do not paste secrets into chat and do not print their values. Check only names/presence/length if needed.

Common environment variable names:

- `VERCEL_TOKEN`
- `EXPO_TOKEN`
- `SUPABASE_ACCESS_TOKEN`
- `LINEAR_API_KEY`
- `SENTRY_AUTH_TOKEN`
- `POSTHOG_API_KEY`
- `GITHUB_TOKEN`
- `GH_TOKEN`

Secrets belong in `~/.hermes/.env`, OAuth credential stores, or deployment platform secret stores. If auth commands fail because env vars are absent, record the missing auth step and stop short of claiming integration readiness.

## Service authority map

GitHub:

- Ready when `gh auth status` succeeds and scopes include repo/workflow as needed.
- Use for branches, commits, PRs, issue creation, CI inspection, and merges when authorized.

Vercel:

- CLI: `vercel` / `vc`.
- Auth: `vercel login` or `VERCEL_TOKEN`.
- Preview deploys are lower risk; production deploys require explicit T approval.

Expo/EAS:

- CLI: `eas`.
- Auth: `eas login` or `EXPO_TOKEN`.
- Internal preview builds are lower risk; store submissions, credential mutation, and public releases require explicit T approval.

Supabase:

- CLI: `supabase`.
- Auth: `supabase login` or `SUPABASE_ACCESS_TOKEN`.
- Local/dev/staging migrations and read-only inspection are fine when requested; production data writes, RLS changes, and destructive migrations require explicit T approval.

Sentry/PostHog:

- Use for observability and product telemetry.
- Read-only investigation is usually safe; mutating alerts, org settings, feature flags, or analytics definitions requires T approval.

Linear/GitHub Issues:

- Use for durable work tracking.
- Creating issues/tasks is low risk; deleting/archive/reprioritizing project structure requires T approval.

## Research specialist signal

If the conversation shifts from tooling power into ongoing reconnaissance of RPG mechanics, AI workflows, competitors, papers, or tool ecosystems, recommend a dedicated research specialist rather than forcing Tobin/Kid/Toadvine to become librarians.

A good first mandate for such a specialist is narrow and verdict-bearing:

> Survey RPG event/minigame systems involving dice, cards, and moral dilemmas; report patterns Axiomancer can transmute without becoming derivative.

Research briefs should end with:

- what matters
- what to steal
- what to avoid
- what to test next

No piles of links without judgment.
