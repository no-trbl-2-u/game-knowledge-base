# Third-party card library discovery for Axiomancer reference mining

Use this when T asks to find a digital card game's card library for Axiomancer design comparison, card-editor inspiration, or mechanics mining.

## Pattern

1. Search for multiple surfaces: official site, fan reference site, codex/search UI, wiki, static DB/API endpoints.
2. Do not stop at rendered web pages. Inspect page HTML/JS for data sources:
   - `fetch(...)` endpoints
   - static `.db`, `.json`, `_next/static/chunks/*`, bundle strings
   - SQLite/WebAssembly loaders such as `sql.js`
3. Prefer machine-readable sources:
   - JSON API for breadth/currentness
   - SQLite/CSV for local querying and joins
   - UI codex as search/reference confirmation
4. Save local artifacts under `~/Workspace/reports/<game>-card-library/` when useful, including raw data plus CSV exports and a short `SUMMARY.json`.
5. Report source confidence separately: official > game-owned/fan-maintained reference > wiki/search snippet.

## Dawncaster findings

Useful sources found in session:

- **Blightbane live API** — broadest/current card codex:
  - UI: `https://blightbane.io/cards`
  - endpoint: `https://blightbane.io/api/cards-codex?search=&rarity=&category=&type=&banner=&exp=`
  - verified shape: JSON object with `card_len` and `cards`; observed `2472` cards.
- **Neurrone SQLite mirror** — best structured local querying:
  - UI: `https://neurrone.com/dawncaster/cards.html`
  - database: `https://neurrone.com/dawncaster/dawncaster-cards.db`
  - verified shape: SQLite DB with tables `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, `expansions`, `talents`; observed `1692` cards.
- **Dawn-Dash Cardex** — search/UI layer that fetches from Blightbane:
  - UI: `https://www.dawn-dash.com/cardex`
  - Next.js bundle showed fetch to `https://blightbane.io/api/cards-codex?...`.

Local artifact convention used:

```txt
/root/Workspace/reports/dawncaster-card-library/
  blightbane-cards-codex.json
  blightbane-cards-codex.csv
  neurrone-dawncaster-cards.db
  neurrone-cards.csv
  SUMMARY.json
```

## SQLite export query sketch

```sql
SELECT c.id, c.name,
       cat.name AS category,
       t.name AS type,
       r.name AS rarity,
       e.name AS expansion,
       col.name AS color,
       c.description_html,
       co.dex, co.int, co.str, co.holy, co.neutral,
       co.dexint, co.dexstr, co.intstr, co.blood
FROM cards c
JOIN categories cat ON c.category = cat.id
JOIN types t ON c.type = t.id
JOIN rarities r ON c.rarity = r.id
JOIN expansions e ON c.expansion = e.id
JOIN colors col ON c.color = col.id
JOIN costs co ON c.id = co.card_id
ORDER BY c.name;
```

## Pitfalls

- Search results are not the library. The useful data may be behind a client-side API or static SQLite DB.
- Different sources may have different counts because of versions, monsters, non-collectibles, transformed cards, or deduping. Preserve both counts and label the source.
- Do not mirror copyrighted art. For design mining, store names/mechanics/descriptions and cite source URLs.
