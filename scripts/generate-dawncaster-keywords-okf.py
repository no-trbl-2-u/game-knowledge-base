#!/usr/bin/env python3
"""Generate Dawncaster keyword glossary OKF records from the Fandom MediaWiki API."""
from __future__ import annotations

import csv
import html
import json
import re
from pathlib import Path
from typing import Any
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'KnowledgeBase' / 'DigitalCardGames' / 'dawncaster'
SOURCE_PAGE = 'https://dawncasterrpg.fandom.com/wiki/Keywords'
API_URL = 'https://dawncasterrpg.fandom.com/api.php?action=parse&page=Keywords&prop=wikitext%7Csections&format=json&formatversion=2'
RETRIEVED_AT = '2026-07-05'


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


def parse_keyword_block(block: str) -> dict[str, object] | None:
    lines = block.strip('\n').splitlines()
    if lines and lines[0].strip() == '|':
        lines = lines[1:]
    if len(lines) < 4 or not lines[0].lstrip().startswith('===='):
        return None

    keyword = clean_wiki(re.sub(r'^=+\s*|\s*=+$', '', lines[0]).strip())
    cells: list[str] = []
    current: list[str] = []
    for line in lines[1:]:
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
        'type': keyword_type,
        'description': description,
        'functions': functions,
    }


def fetch_wikitext() -> str:
    request = Request(API_URL, headers={'User-Agent': 'Hermes research bot'})
    with urlopen(request, timeout=30) as response:
        data = json.loads(response.read().decode('utf-8'))
    return data['parse']['wikitext']


def parse_keywords(wikitext: str) -> list[dict[str, object]]:
    rows: list[dict[str, object]] = []
    for block in re.split(r'\n\|-\n', wikitext):
        row = parse_keyword_block(block)
        if row:
            rows.append(row)

    seen: set[str] = set()
    unique: list[dict[str, object]] = []
    for row in rows:
        key = str(row['keyword']).lower()
        if key not in seen:
            seen.add(key)
            unique.append(row)
    return unique


def write_outputs(rows: list[dict[str, Any]]) -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / 'keywords.json').write_text(json.dumps({
        'source_url': SOURCE_PAGE,
        'api_url': API_URL,
        'retrieved_at': RETRIEVED_AT,
        'keyword_count': len(rows),
        'keywords': rows,
    }, indent=2, ensure_ascii=False), encoding='utf-8')

    with (OUT / 'keywords.csv').open('w', newline='', encoding='utf-8') as handle:
        writer = csv.writer(handle)
        writer.writerow(['keyword', 'type', 'description', 'functions'])
        for row in rows:
            writer.writerow([
                row['keyword'],
                row['type'],
                row['description'],
                ', '.join(row['functions']),
            ])

    lines = [
        '---',
        'okf_version: 0.2',
        'type: digital_card_glossary',
        'game:',
        '  title: "Dawncaster"',
        '  slug: "dawncaster"',
        'scope: "keyword definitions imported from Dawncaster Wiki Keywords page"',
        f'keyword_count: {len(rows)}',
        'sources:',
        '  - id: "src-001"',
        '    title: "Dawncaster Wiki Keywords"',
        f'    url: "{SOURCE_PAGE}"',
        '    kind: other',
        '    provenance: community',
        f'    retrieved_at: "{RETRIEVED_AT}"',
        '    notes: "Imported through MediaWiki API parse endpoint because Fandom HTML blocks plain extraction."',
        'confidence: medium',
        'status: draft',
        '---',
        '',
        '# Dawncaster keyword glossary',
        '',
        '## Summary',
        '',
        f'- Imported {len(rows)} keyword definitions from the Dawncaster Wiki Keywords page.',
        '- This glossary preserves keyword name, keyword type, definition text, and function labels.',
        '- Community wiki definitions are useful leads, not official game text.',
        '',
        '## Source-backed facts',
        '',
        f'- Claim: The source page exposes {len(rows)} keyword rows in its MediaWiki wikitext table at retrieval time.',
        '  Source: src-001',
        '  Evidence: Parsed table rows from the `Keywords` page via `api.php?action=parse&prop=wikitext`.',
        '  Confidence: medium',
        '',
        '## Keyword definitions',
        '',
    ]
    for row in rows:
        functions = ', '.join(row['functions']) if row['functions'] else 'unknown'
        lines.extend([
            f'### {row["keyword"]}',
            '',
            f'- **Type:** {row["type"]}',
            f'- **Functions:** {functions}',
            f'- **Definition:** {row["description"]}',
            '- **Source:** src-001',
            '',
        ])
    lines.extend([
        '## Open questions',
        '',
        '- Cross-check high-use terms against in-game text or Blightbane card pages before treating definitions as canonical.',
    ])
    (OUT / 'keywords.okf.md').write_text('\n'.join(lines).rstrip() + '\n', encoding='utf-8')


def main() -> None:
    rows = parse_keywords(fetch_wikitext())
    write_outputs(rows)
    print(f'generated {len(rows)} Dawncaster keyword definitions under {OUT}')


if __name__ == '__main__':
    main()
