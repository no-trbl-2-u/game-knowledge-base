#!/usr/bin/env python3
"""Flag exact normalized phrase overlap between a source text and draft files."""
from __future__ import annotations
import argparse
import re
from pathlib import Path

WORD_RE = re.compile(r"[A-Za-z0-9']+")

def words(text: str) -> list[str]:
    return [w.lower() for w in WORD_RE.findall(text)]

def ngrams(tokens: list[str], n: int) -> dict[tuple[str, ...], int]:
    return {tuple(tokens[i:i+n]): i for i in range(max(0, len(tokens)-n+1))}

def main() -> int:
    ap=argparse.ArgumentParser()
    ap.add_argument('--source', required=True)
    ap.add_argument('--draft', action='append', required=True)
    ap.add_argument('--n', type=int, default=8)
    ap.add_argument('--allow', action='append', default=[])
    args=ap.parse_args()
    source=Path(args.source)
    src_tokens=words(source.read_text(errors='replace'))
    src=ngrams(src_tokens,args.n)
    allowed={tuple(words(x)) for x in args.allow}
    findings=[]
    files=[]
    for pattern in args.draft:
        p=Path(pattern)
        files.extend(sorted(p.rglob('*.md')) if p.is_dir() else [p])
    for p in files:
        toks=words(p.read_text(errors='replace'))
        for i in range(max(0,len(toks)-args.n+1)):
            ng=tuple(toks[i:i+args.n])
            if ng in src and ng not in allowed:
                findings.append((str(p),i,' '.join(ng)))
    print(f'source={source} drafts={len(files)} n={args.n} overlaps={len(findings)}')
    for p,i,phrase in findings[:100]:
        print(f'{p}:word-{i}: {phrase}')
    return 1 if findings else 0

if __name__ == '__main__':
    raise SystemExit(main())
