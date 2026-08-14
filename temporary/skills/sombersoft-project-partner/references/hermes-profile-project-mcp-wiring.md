# Hermes profile wiring for project-local MCP servers

Use this when T asks to expose a repository MCP server to the Judge, Tobin, or another durable Hermes profile.

## First establish server truth

1. Do not infer the server from the repository name or from another entry in `.mcp.json`. If T names `axio-query`, search for that exact server id and script.
2. Fetch the repository and compare local `main` to `origin/main`. A newly shipped MCP server may exist remotely while the clean local checkout is merely behind. Fast-forward with `git pull --ff-only` when safe.
3. Read the live root `.mcp.json` and use its exact server id, command, and arguments. Confirm the referenced script exists.
4. Translate relative repo arguments to absolute paths in Hermes profile config because profiles and the gateway may start from different working directories.

Axiomancer example:

```yaml
axio-query:
  command: node
  args:
  - /root/Workspace/SomberSoft/Axiomancer/scripts/axio-mcp-server.mjs
  enabled: true
```

KB example:

```yaml
kb-query:
  command: node
  args:
  - /root/Workspace/SomberSoft/game-knowledge-base/scripts/kb-mcp-server.mjs
  - --root
  - /root/Workspace/SomberSoft/game-knowledge-base
  enabled: true
```

## Profile scope

- Named profiles are isolated: configuring default Hermes does not configure `judge` or `tobin`.
- The default Telegram persona may also be the Judge. If T says “the Judge,” verify both the default profile and the named `judge` profile instead of assuming they are the same surface.
- Preserve existing MCP entries while adding the new one.

## Safe configuration paths

Prefer Hermes CLI:

```bash
printf 'Y\n' | hermes mcp add axio-query \
  --command node \
  --args /root/Workspace/SomberSoft/Axiomancer/scripts/axio-mcp-server.mjs
```

The MCP add command discovers tools and asks which to enable. In non-interactive automation, explicitly pipe the confirmation; otherwise it can print successful discovery, cancel at the prompt, and leave no config entry. Never treat discovery output as proof that the server was saved.

For named specialist profiles, use the profile wrapper (`judge`, `tobin`) or `hermes --profile <name>`. When the default config is protected from direct file edits, use the CLI rather than bypassing the guard. Direct named-profile YAML edits are acceptable only under explicit profile-tuning authority, with targeted patches and immediate config validation.

## Verification envelope

For every intended profile:

```bash
<profile> config check
<profile> mcp test axio-query
<profile> mcp test kb-query
<profile> mcp list
```

Require:

- config check passes;
- each `mcp test` connects and reports the expected tool count/names;
- `mcp list` shows both servers enabled;
- no unrelated MCP entry disappeared.

Current expected Axiomancer pair:

- `axio-query`: `axio_overview`, `axio_cards`, `axio_effects`, `axio_keywords`;
- `kb-query`: six corpus tools (`kb_overview`, `kb_find_games`, `kb_search`, `kb_read_doc`, `kb_cards`, `kb_keyword`).

New MCP tools require a new session, `/reload-mcp`, or `/reset` before they appear in the live tool schema. Configuration and connection tests prove readiness; they do not retroactively alter the current session schema.
