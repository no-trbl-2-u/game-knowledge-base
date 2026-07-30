#!/usr/bin/env python3
"""Validate the bounded pass-2 manifest without treating prior scaffolds as research."""
from __future__ import annotations
import json, sys
from pathlib import Path

p = Path(sys.argv[1] if len(sys.argv) > 1 else "reports/deck-bag-dicebuilder-pass-2-manifest.json")
data = json.loads(p.read_text())
cohorts = data["cohorts"]
expected = {"cooperative": 20, "solo_rpg": 20, "deck_bag_dicebuilder": 20}
assert set(cohorts) == set(expected), set(cohorts)
all_slugs = []
all_bgg = []
for name, count in expected.items():
    rows = cohorts[name]
    assert len(rows) == count, (name, len(rows), count)
    for row in rows:
        for key in ("slug", "title", "bgg_id", "edition", "status", "mechanics", "record_path", "existing_live_record"):
            assert key in row, (name, row, key)
        assert row["existing_live_record"] is True
        assert isinstance(row["bgg_id"], int)
        all_slugs.append(row["slug"])
        all_bgg.append(row["bgg_id"])
assert len(set(all_slugs)) == 60, "cohort overlap by slug"
assert len(set(all_bgg)) == 60, "cohort overlap by BGG id"
assert data["deduplication"]["duplicate_slugs"] == []
assert data["deduplication"]["duplicate_bgg_ids"] == []
assert data["authoring_decision"] == "blocked_by_evidence_gate"
print(f"manifest valid: {len(all_slugs)} unique existing records in 20/20/20 disjoint cohorts")
print("authoring decision: blocked_by_evidence_gate (no new canonical records authored)")
