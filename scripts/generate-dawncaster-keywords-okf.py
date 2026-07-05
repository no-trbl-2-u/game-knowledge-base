#!/usr/bin/env python3
"""Generate Dawncaster keyword OKF index and one atomic OKF record per keyword."""
from __future__ import annotations

import csv
import html
import json
import re
import shutil
from pathlib import Path
from typing import Any
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'KnowledgeBase' / 'DigitalCardGames' / 'dawncaster'
KEYWORDS_DIR = OUT / 'keywords'
SOURCE_PAGE = 'https://dawncasterrpg.fandom.com/wiki/Keywords'
API_URL = 'https://dawncasterrpg.fandom.com/api.php?action=parse&page=Keywords&prop=wikitext%7Csections&format=json&formatversion=2'
RETRIEVED_AT = '2026-07-05'


def slugify(value: str) -> str:
    value = html.unescape(value).lower().strip()
    value = re.sub(r"[^a-z0-9]+", '-', value)
    return re.sub(r'-+', '-', value).strip('-') or 'keyword'


def yaml_quote(value: object) -> str:
    if value is None:
        return 'null'
    s = str(value)
    return '"' + s.replace('\\', '\\\\').replace('"', '\\"') + '"'


def clean_wiki(value: str) -> str:
    value = value.strip()
    value = re.sub(r"'{2,5}", '', value)

    def link_repl(match: re.Match[str]) -> str:
        body = match.group(1)
        if '|' in body:
            return body.split('|')[-1]
        if '#' in body:
            return body.split('#')[-1]
        return body

    value = re.sub(r'\[\[([^\]]+)\]\]', link_repl, value)
    value = re.sub(r'<br\s*/?>', ' ', value, flags=re.I)
    value = re.sub(r'<[^>]+>', '', value)
    value = html.unescape(value)
    value = re.sub(r'\s+', ' ', value).strip()
    return value


def parse_keyword_block(block: str) -> dict[str, Any] | None:
    lines = block.strip('\n').splitlines()
    if lines and lines[0].strip() == '|':
        lines = lines[1:]
    if len(lines) < 4 or not lines[0].lstrip().startswith('===='):
        return None

    keyword = clean_wiki(re.sub(r'^=+\s*|\s*=+$', '', lines[0]).strip())
    cells: list[str] = []
    current: list[str] = []
    for line in lines[1:]:
        if line.strip() == '|}':
            continue
        if line.startswith('|'):
            if current:
                cells.append('\n'.join(current))
            current = [line[1:]]
        else:
            current.append(line)
    if current:
        cells.append('\n'.join(current))
    if len(cells) < 3:
        return None

    keyword_type = clean_wiki(cells[0])
    description = clean_wiki(cells[1])
    function_text = clean_wiki('\n'.join(cells[2:]))
    functions = [part.strip() for part in re.split(r',|;', function_text) if part.strip()]
    if not keyword or not keyword_type or not description:
        return None
    return {
        'keyword': keyword,
        'slug': slugify(keyword),
        'type': keyword_type,
        'description': description,
        'functions': functions,
    }


def fetch_wikitext() -> str:
    request = Request(API_URL, headers={'User-Agent': 'Hermes research bot'})
    with urlopen(request, timeout=30) as response:
        data = json.loads(response.read().decode('utf-8'))
    return data['parse']['wikitext']


def parse_keywords(wikitext: str) -> list[dict[str, Any]]:
    # The page appends a separate "Functions" glossary after the keyword table.
    # Cut there so the final keyword row (Zeal) does not swallow that appendix.
    wikitext = re.split(r'\n=+.*Functions.*=+', wikitext, maxsplit=1)[0]
    rows: list[dict[str, Any]] = []
    for block in re.split(r'\n\|-\n', wikitext):
        row = parse_keyword_block(block)
        if row:
            rows.append(row)

    seen: set[str] = set()
    unique: list[dict[str, Any]] = []
    for row in rows:
        key = str(row['keyword']).lower()
        if key not in seen:
            seen.add(key)
            unique.append(row)
    return unique


def source_frontmatter() -> list[str]:
    return [
        'sources:',
        '  - id: "src-001"',
        '    title: "Dawncaster Wiki Keywords"',
        f'    url: "{SOURCE_PAGE}"',
        '    kind: other',
        '    provenance: community',
        f'    retrieved_at: "{RETRIEVED_AT}"',
        '    notes: "Imported through MediaWiki API parse endpoint because Fandom HTML blocks plain extraction."',
    ]


def write_sidecars(rows: list[dict[str, Any]]) -> None:
    (OUT / 'keywords.json').write_text(json.dumps({
        'source_url': SOURCE_PAGE,
        'api_url': API_URL,
        'retrieved_at': RETRIEVED_AT,
        'keyword_count': len(rows),
        'keywords': rows,
    }, indent=2, ensure_ascii=False), encoding='utf-8')

    with (OUT / 'keywords.csv').open('w', newline='', encoding='utf-8') as handle:
        writer = csv.writer(handle, lineterminator='\n')
        writer.writerow(['keyword', 'slug', 'type', 'description', 'functions', 'okf_path'])
        for row in rows:
            writer.writerow([
                row['keyword'],
                row['slug'],
                row['type'],
                row['description'],
                ', '.join(row['functions']),
                f'keywords/{row["slug"]}.okf.md',
            ])


def write_keyword_record(row: dict[str, Any], ordinal: int, total: int) -> None:
    functions = row['functions']
    functions_yaml = '\n'.join(f'  - {yaml_quote(fn)}' for fn in functions) if functions else '  []'
    functions_text = ', '.join(functions) if functions else 'unknown'
    keyword = row['keyword']
    slug = row['slug']
    lines = [
        '---',
        'okf_version: 0.2',
        'type: digital_card_keyword',
        'game:',
        '  title: "Dawncaster"',
        '  slug: "dawncaster"',
        f'keyword: {yaml_quote(keyword)}',
        f'slug: {yaml_quote(slug)}',
        f'ordinal: {ordinal}',
        f'keyword_type: {yaml_quote(row["type"])}',
        'functions:',
        functions_yaml,
        *source_frontmatter(),
        'confidence: medium',
        'status: draft',
        '---',
        '',
        f'# {keyword}',
        '',
        '## Keyword identity',
        '',
        f'- **Ordinal:** {ordinal} of {total}',
        f'- **Type:** {row["type"]}',
        f'- **Functions:** {functions_text}',
        '',
        '## Source-backed facts',
        '',
        f'- Claim: `{keyword}` appears in the Dawncaster Wiki keyword table.',
        '  Source: src-001',
        '  Evidence: Parsed row from the `Keywords` page MediaWiki wikitext table.',
        '  Confidence: medium',
        '',
        '- Claim: The keyword definition below is the cleaned text from that source row.',
        '  Source: src-001',
        '  Evidence: Keyword table description cell after wiki-link and markup normalization.',
        '  Confidence: medium',
        '',
        '## Definition',
        '',
        str(row['description']),
        '',
        '## Open questions',
        '',
        '- Cross-check this community definition against in-game text or Blightbane card pages before treating it as canonical.',
    ]
    (KEYWORDS_DIR / f'{slug}.okf.md').write_text('\n'.join(lines).rstrip() + '\n', encoding='utf-8')


def write_index(rows: list[dict[str, Any]]) -> None:
    by_type: dict[str, list[str]] = {}
    by_function: dict[str, list[str]] = {}
    for row in rows:
        by_type.setdefault(str(row['type']), []).append(str(row['keyword']))
        for fn in row['functions']:
            by_function.setdefault(str(fn), []).append(str(row['keyword']))

    lines = [
        '---',
        'okf_version: 0.2',
        'type: digital_card_glossary',
        'game:',
        '  title: "Dawncaster"',
        '  slug: "dawncaster"',
        'scope: "keyword index for atomic Dawncaster keyword OKF records"',
        f'keyword_count: {len(rows)}',
        *source_frontmatter(),
        'confidence: medium',
        'status: draft',
        '---',
        '',
        '# Dawncaster keyword glossary index',
        '',
        '## Summary',
        '',
        f'- Imported {len(rows)} keyword definitions from the Dawncaster Wiki Keywords page.',
        '- Each keyword has an atomic OKF record under `keywords/`.',
        '- `keywords.csv` and `keywords.json` are generated sidecars for machine use.',
        '- Community wiki definitions are useful leads, not official game text.',
        '',
        '## Source-backed facts',
        '',
        f'- Claim: The source page exposes {len(rows)} keyword rows in its MediaWiki wikitext table at retrieval time.',
        '  Source: src-001',
        '  Evidence: Parsed table rows from the `Keywords` page via `api.php?action=parse&prop=wikitext`.',
        '  Confidence: medium',
        '',
        '## Keyword records',
        '',
        '| keyword | type | functions | record |',
        '|---|---|---|---|',
    ]
    for row in rows:
        functions = ', '.join(row['functions']) if row['functions'] else 'unknown'
        lines.append(f'| {row["keyword"]} | {row["type"]} | {functions} | [keywords/{row["slug"]}.okf.md](keywords/{row["slug"]}.okf.md) |')

    lines.extend(['', '## Keyword types', ''])
    for keyword_type in sorted(by_type):
        lines.append(f'- **{keyword_type}:** {len(by_type[keyword_type])}')

    lines.extend(['', '## Function labels', ''])
    for function in sorted(by_function):
        lines.append(f'- **{function}:** {len(by_function[function])}')

    lines.extend([
        '',
        '## Open questions',
        '',
        '- Cross-check high-use terms against in-game text or Blightbane card pages before treating definitions as canonical.',
    ])
    (OUT / 'keywords.okf.md').write_text('\n'.join(lines).rstrip() + '\n', encoding='utf-8')


def write_outputs(rows: list[dict[str, Any]]) -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    if KEYWORDS_DIR.exists():
        shutil.rmtree(KEYWORDS_DIR)
    KEYWORDS_DIR.mkdir(parents=True, exist_ok=True)
    write_sidecars(rows)
    for idx, row in enumerate(rows, start=1):
        write_keyword_record(row, idx, len(rows))
    write_index(rows)


def main() -> None:
    rows = parse_keywords(fetch_wikitext())
    write_outputs(rows)
    print(f'generated {len(rows)} Dawncaster keyword records under {KEYWORDS_DIR}')


if __name__ == '__main__':
    main()
