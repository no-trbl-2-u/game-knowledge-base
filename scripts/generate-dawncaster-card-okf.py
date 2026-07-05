#!/usr/bin/env python3
"""Generate Dawncaster card OKF records from the local Neurrone SQLite mirror.

The generator covers the full local DB in deterministic case-insensitive name
order. Source material is the harvested Dawncaster card DB kept under
/root/Workspace/reports/dawncaster-card-library/.
"""
from __future__ import annotations

import csv
import html
import re
import sqlite3
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
DB = Path('/root/Workspace/reports/dawncaster-card-library/neurrone-dawncaster-cards.db')
OUT = ROOT / 'KnowledgeBase' / 'DigitalCardGames' / 'dawncaster'
CARDS = OUT / 'cards'
CARD_INDEX = OUT / 'card-index.csv'
RETRIEVED_AT = '2026-07-05'

COST_FIELDS = ['dex', 'int', 'str', 'holy', 'neutral', 'dexint', 'dexstr', 'intstr', 'blood']


def slugify(value: str) -> str:
    value = html.unescape(value).lower().strip()
    value = re.sub(r"[^a-z0-9]+", '-', value)
    return re.sub(r"-+", '-', value).strip('-') or 'card'


def clean_text(value: str) -> str:
    value = value or ''
    value = re.sub(r'<br\s*/?>', '\n', value, flags=re.I)
    value = re.sub(r'</p\s*>', '\n', value, flags=re.I)
    value = re.sub(r'<[^>]+>', '', value)
    value = html.unescape(value)
    value = re.sub(r'\r\n?', '\n', value)
    value = re.sub(r'\n{3,}', '\n\n', value)
    return value.strip()


def yaml_quote(value: object) -> str:
    if value is None:
        return 'null'
    s = str(value)
    return '"' + s.replace('\\', '\\\\').replace('"', '\\"') + '"'


def md_escape(value: str) -> str:
    return value.replace('|', '\\|')


def frontmatter_source(url: str) -> str:
    return f'''sources:
  - id: "src-001"
    title: "Neurrone Dawncaster SQLite card database"
    url: "https://neurrone.com/dawncaster/dawncaster-cards.db"
    kind: other
    provenance: secondary
    retrieved_at: "{RETRIEVED_AT}"
    notes: "Local harvested copy: /root/Workspace/reports/dawncaster-card-library/neurrone-dawncaster-cards.db"
  - id: "src-002"
    title: "Blightbane Dawncaster card page"
    url: "{url}"
    kind: other
    provenance: community
    retrieved_at: "{RETRIEVED_AT}"
    notes: "Per-card page inferred from the shared card id/name space; verify manually before treating as official wording."
'''


def extract_terms(text: str) -> list[str]:
    terms: set[str] = set()
    # Neurrone text carries variable tokens in [[...]]. Keep them as raw observed tokens.
    for token in re.findall(r'\[\[([^\]]+)\]\]', text):
        terms.add(token.strip())
    # Also capture common titlecase rule words from the plain rules text; this is heuristic evidence, not definition.
    plain = clean_text(text)
    stop = {'At', 'If', 'This', 'Whenever', 'When', 'The', 'Your', 'You', 'Gain', 'Deal', 'Draw', 'Discard', 'Unique', 'Passive', 'Start'}
    for token in re.findall(r'\b[A-Z][A-Za-z]+(?: [A-Z][A-Za-z]+)?\b', plain):
        if token not in stop and len(token) > 2:
            terms.add(token.strip())
    return sorted(terms, key=str.lower)


def cost_summary(row: dict[str, object]) -> str:
    parts = [f'{field}={row[field]}' for field in COST_FIELDS if int(str(row[field] or 0)) != 0]
    return ', '.join(parts) if parts else 'free / no listed energy cost'


def write_index(total: int) -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / 'index.okf.md').write_text(f'''---
okf_version: 0.2
type: digital_card_game_index
game:
  title: "Dawncaster"
  slug: "dawncaster"
scope: "digital card corpus; all {total} Neurrone DB cards by name"
sources:
  - id: "src-001"
    title: "Neurrone Dawncaster SQLite card database"
    url: "https://neurrone.com/dawncaster/dawncaster-cards.db"
    kind: other
    provenance: secondary
    retrieved_at: "{RETRIEVED_AT}"
    notes: "Structured card, cost, rarity, type, category, color, and expansion mirror."
  - id: "src-002"
    title: "Blightbane cards codex API"
    url: "https://blightbane.io/api/cards-codex?search=&rarity=&category=&type=&banner=&exp="
    kind: other
    provenance: community
    retrieved_at: "{RETRIEVED_AT}"
    notes: "Broader live codex harvested separately; used as cross-reference lead."
confidence: medium
status: draft
---

# Dawncaster card corpus

## Summary

- Generated {total} card records from a local SQLite mirror.
- Ordering is deterministic: case-insensitive card name, then numeric card id.
- Each record preserves card id, name, category, type, rarity, expansion, color, cost vector, raw rules HTML, plain rules text, and observed keyword/token leads.
- The minimal card lookup lives at `card-index.csv` and contains only card number, card name, and observed keyword/token leads.

## Source-backed facts

- Claim: The local Neurrone SQLite mirror contains {total} Dawncaster card rows.
  Source: src-001
  Evidence: `select count(*) from cards` against the harvested SQLite DB.
  Confidence: high


## Open questions

- Keyword definitions still require a dedicated glossary import and manual source confidence pass.
- Blightbane/API wording should be compared against Neurrone rows before elevating any record from draft to verified.
''', encoding='utf-8')

    (OUT / 'sources.okf.md').write_text(f'''---
okf_version: 0.2
type: digital_card_sources
game:
  title: "Dawncaster"
  slug: "dawncaster"
scope: "digital card corpus sources"
sources:
  - id: "src-001"
    title: "Neurrone Dawncaster SQLite card database"
    url: "https://neurrone.com/dawncaster/dawncaster-cards.db"
    kind: other
    provenance: secondary
    retrieved_at: "{RETRIEVED_AT}"
    notes: "Structured SQLite mirror used for first-pass OKF generation."
  - id: "src-002"
    title: "Blightbane cards codex API"
    url: "https://blightbane.io/api/cards-codex?search=&rarity=&category=&type=&banner=&exp="
    kind: other
    provenance: community
    retrieved_at: "{RETRIEVED_AT}"
    notes: "Live JSON codex harvested at /root/Workspace/reports/dawncaster-card-library/blightbane-cards-codex.json."
  - id: "src-003"
    title: "Dawncaster Wiki Keywords"
    url: "https://dawncasterrpg.fandom.com/wiki/Keywords"
    kind: other
    provenance: community
    retrieved_at: "{RETRIEVED_AT}"
    notes: "Lead for future keyword glossary import; not yet merged into the first 500 card records."
confidence: medium
status: draft
---

# Dawncaster corpus sources

## Summary

This file records the source registry for the Dawncaster digital-card OKF corpus.

## Source-backed facts

- Claim: The card records were generated from the Neurrone SQLite mirror.
  Source: src-001
  Evidence: Local script `scripts/generate-dawncaster-card-okf.py` queries `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

## Open questions

- Determine whether Blightbane or in-game text should be treated as the canonical wording authority for cards.
- Import keyword definitions from the wiki and cross-check against card text.
''', encoding='utf-8')


def main() -> None:
    if not DB.exists():
        raise SystemExit(f'missing DB: {DB}')
    CARDS.mkdir(parents=True, exist_ok=True)

    conn = sqlite3.connect(DB)
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()
    total = cur.execute('select count(*) from cards').fetchone()[0]
    write_index(total)

    rows = cur.execute(f'''
        SELECT c.id, c.name, cat.name as category, t.name as type, r.name as rarity,
               e.name as expansion, col.name as color, c.description_html,
               co.dex, co.int, co.str, co.holy, co.neutral, co.dexint, co.dexstr, co.intstr, co.blood
        FROM cards c
        JOIN categories cat ON c.category=cat.id
        JOIN types t ON c.type=t.id
        JOIN rarities r ON c.rarity=r.id
        JOIN expansions e ON c.expansion=e.id
        JOIN colors col ON c.color=col.id
        JOIN costs co ON c.id=co.card_id
        ORDER BY lower(c.name), c.id
    ''').fetchall()

    index_rows: list[dict[str, str]] = []

    for idx, row in enumerate(rows, start=1):
        row = dict(row)
        slug = slugify(row['name'])
        file = CARDS / f'{idx:04d}-{slug}-{row["id"]}.okf.md'
        page_url = f'https://blightbane.io/card/{quote(str(row["name"]).replace(" ", "_"))}'
        text = clean_text(row['description_html'])
        terms = extract_terms(row['description_html'])
        costs = {field: int(row[field] or 0) for field in COST_FIELDS}
        cost_yaml = '\n'.join(f'  {field}: {costs[field]}' for field in COST_FIELDS)
        terms_yaml = '\n'.join(f'  - {yaml_quote(term)}' for term in terms) if terms else '  []'
        body_terms = ', '.join(f'`{t}`' for t in terms) if terms else 'none observed'
        raw = str(row['description_html']).replace('```', '` ` `')
        index_rows.append({
            'card_number': str(idx),
            'card_name': str(row['name']),
            'keywords_on_card': '; '.join(terms),
        })
        file.write_text(f'''---
okf_version: 0.2
type: card_record
card:
  game: "Dawncaster"
  source_id: {row['id']}
  name: {yaml_quote(row['name'])}
  ordinal: {idx}
  slug: {yaml_quote(slug)}
  category: {yaml_quote(row['category'])}
  type: {yaml_quote(row['type'])}
  rarity: {yaml_quote(row['rarity'])}
  expansion: {yaml_quote(row['expansion'])}
  color: {yaml_quote(row['color'])}
  cost:
{cost_yaml}
observed_terms:
{terms_yaml}
{frontmatter_source(page_url)}confidence: medium
status: draft
---

# {row['name']}

## Card identity

- **Ordinal:** {idx} of {total} generated cards
- **Source card id:** `{row['id']}`
- **Category:** {row['category']}
- **Type:** {row['type']}
- **Rarity:** {row['rarity']}
- **Expansion:** {row['expansion']}
- **Color:** {row['color']}
- **Cost summary:** {cost_summary(row)}

## Source-backed facts

- Claim: `{md_escape(str(row['name']))}` appears in the Neurrone Dawncaster SQLite card table with id `{row['id']}`.
  Source: src-001
  Evidence: Joined row from `cards`, `costs`, `categories`, `types`, `rarities`, `colors`, and `expansions`.
  Confidence: high

- Claim: The card's raw rules text in the SQLite mirror is preserved below.
  Source: src-001
  Evidence: `description_html` column copied verbatim from the local DB.
  Confidence: high

## Rules text

{text or '_No rules text present in source row._'}

## Raw rules HTML

```html
{raw}
```

## Observed keyword / token leads

{body_terms}
''', encoding='utf-8')

    with CARD_INDEX.open('w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['card_number', 'card_name', 'keywords_on_card'], lineterminator='\n')
        writer.writeheader()
        writer.writerows(index_rows)

    print(f'generated {len(rows)} card OKF files under {CARDS}')
    print(f'card index: {CARD_INDEX}')
    print(f'index: {OUT / "index.okf.md"}')
    print(f'sources: {OUT / "sources.okf.md"}')


if __name__ == '__main__':
    main()
