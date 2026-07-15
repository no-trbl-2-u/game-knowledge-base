#!/usr/bin/env python3
"""Generate the Slay the Spire 1 card corpus from a CC-BY structured JSON snapshot."""
from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_INPUT = ROOT / "scripts/data/slay-the-spire-1-cards.json"
OUT = ROOT / "KnowledgeBase/DigitalCardGames/slay-the-spire"
CARDS = OUT / "cards"
SOURCE_URL = "https://huggingface.co/datasets/t22000t/slay-the-spire-1-cards"
REPO_URL = "https://github.com/timothy22000/slaythespire-codex"
UPSTREAM_URL = "https://github.com/nkhoit/spire-archive"


def yaml_quote(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def slug(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")


def terms(card: dict) -> list[str]:
    raw = json.loads(card.get("keywords") or "[]")
    text = card["description"] + "\n" + card["upgrade_description"]
    observed = list(raw) if isinstance(raw, list) else []
    for term in re.findall(r"\\b(?:[A-Z][a-z]+|ALL|X|[A-Z])\\b", text):
        if term not in observed and term.lower() in {
            "attack", "skill", "power", "status", "curse", "exhaust", "retain",
            "ethereal", "innate", "vulnerable", "weak", "frail", "poison", "block",
            "strength", "dexterity", "focus", "wrath", "calm", "divinity", "stance",
            "scry", "shivs", "shiv", "lightning", "frost", "dark", "orb", "channel",
            "evoke", "discard", "draw", "upgrade", "unplayable", "burn", "wound", "dazed",
        }:
            observed.append(term)
    return sorted(observed, key=lambda x: (x.lower(), x))


def record(card: dict, ordinal: int) -> str:
    card_slug = slug(card["name"])
    sid = card["id"]
    upgrade_cost = card.get("upgrade_cost")
    cost = card.get("cost", "-")
    upgrade = card["upgrade_description"] or card["description"]
    if upgrade == card["description"] and upgrade_cost == cost:
        upgrade = "No rules-text or cost difference recorded in the source upgrade payload."
    rules = "\n".join(line.rstrip() for line in (card["description"] or "").splitlines())
    upgrade_rules = "\n".join(line.rstrip() for line in upgrade.splitlines())
    kws = terms(card)
    lines = [
        "---", "okf_version: 0.2", "type: card_record", "card:",
        f"  name: {yaml_quote(card['name'])}",
        f"  slug: {yaml_quote(card_slug)}",
        f"  source_id: {yaml_quote(sid)}",
        f"  ordinal: {ordinal}",
        f"  character: {yaml_quote(card['color'])}",
        f"  color: {yaml_quote(card['color'])}",
        f"  rarity: {yaml_quote(card['rarity'])}",
        f"  type: {yaml_quote(card['type'])}",
        f"  cost: {yaml_quote(str(cost))}",
        "  keywords: [" + ", ".join(yaml_quote(x) for x in kws) + "]",
        "upgrade:",
        f"  cost: {yaml_quote(str(upgrade_cost)) if upgrade_cost is not None else 'null'}",
        "sources:",
        "  - id: \"src-001\"",
        f"    title: \"Slay the Spire 1 Cards dataset\"",
        f"    url: \"{SOURCE_URL}\"",
        "    kind: other",
        "    provenance: secondary",
        "    retrieved_at: \"2026-07-15\"",
        "    notes: \"CC BY 4.0 dataset snapshot; source id is the upstream stable card identifier.\"",
        "  - id: \"src-002\"",
        "    title: \"Spire Archive upstream parser/API\"",
        f"    url: \"{UPSTREAM_URL}\"",
        "    kind: other",
        "    provenance: secondary",
        "    retrieved_at: \"2026-07-15\"",
        "    notes: \"Upstream source named by the dataset; parsed from Slay the Spire game files.\"",
        "confidence: high", "status: verified", "---", "",
        "## Source-backed facts", "",
        f"- Claim: The card is {card['name']} ({card['color']}, {card['rarity']}, {card['type']}) with source identifier {sid}.",
        "  Source: src-001", f"  Evidence: dataset row id={sid}, name={card['name']}, color={card['color']}, rarity={card['rarity']}, type={card['type']}", "  Confidence: high", "",
        "## Rules text", "", rules or "_No rules text present in source row._", "",
        "## Upgrade differences", "", upgrade_rules, "",
        "- Claim: The upgrade form is represented by the source payload's upgrade description and cost fields.",
        "  Source: src-001", "  Evidence: raw_json.upgrade in the dataset row.", "  Confidence: high", "",
        "## Provenance", "",
        "- Claim: This record is generated from the CC BY 4.0 dataset snapshot and retains the source identifier; no card art is redistributed.",
        "  Source: src-001, src-002", "  Evidence: dataset README and LICENSE-DATA distinguish factual card data from Mega Crit game IP and exclude art from this corpus.", "  Confidence: high", "",
    ]
    return "\n".join(lines).rstrip() + "\n"


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--input", type=Path, default=DEFAULT_INPUT)
    ap.add_argument("--check", action="store_true")
    args = ap.parse_args()
    cards = json.loads(args.input.read_text())
    cards.sort(key=lambda c: (c["name"].casefold(), c["id"]))
    expected = {}
    for ordinal, card in enumerate(cards, 1):
        expected[str(CARDS / f"{ordinal:04d}-{slug(card['name'])}-{card['id'].lower()}.okf.md")] = record(card, ordinal)
    if args.check:
        actual = {str(p): p.read_text() for p in CARDS.glob("*.okf.md")} if CARDS.exists() else {}
        if actual != expected:
            raise SystemExit("generate-slay-the-spire-card-okf: corpus is stale")
        print(f"generate-slay-the-spire-card-okf: corpus is fresh ({len(expected)} records)")
        return
    CARDS.mkdir(parents=True, exist_ok=True)
    for p in CARDS.glob("*.okf.md"):
        if str(p) not in expected: p.unlink()
    for name, text in expected.items(): Path(name).write_text(text)
    print(f"generate-slay-the-spire-card-okf: wrote {len(expected)} records")


if __name__ == "__main__":
    main()
