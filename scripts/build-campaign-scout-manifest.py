import json
import os
import re
from datetime import date

ROOT = "KnowledgeBase/BoardGames/games"
TARGETS = {
    "solo_rpg": [
        "mage-knight", "sleeping-gods", "slay-the-spire-the-board-game", "the-7th-continent",
        "gi-joe-deck-building-game", "aeons-end-legacy", "arkham-horror-the-card-game",
        "descent-legends-of-the-dark", "earthborne-rangers", "sword-and-sorcery-immortal-souls",
        "too-many-bones-undertow", "cloudspire", "destinies", "dungeon-alliance",
        "dungeon-degenerates-hand-of-doom", "dungeon-universalis", "folklore-the-affliction",
        "lands-of-galzyr", "league-of-dungeoneers", "machina-arcana",
    ],
    "campaign": [
        "aeon-trespass-odyssey", "frosthaven", "middara-unintentional-malum-act-1", "gloomhaven",
        "oathsworn-into-the-deepwood", "iss-vanguard", "clank-legacy-acquisitions-incorporated",
        "gloomhaven-jaws-of-the-lion", "pandemic-legacy-season-0", "star-wars-imperial-assault",
        "pandemic-legacy-season-2", "betrayal-legacy", "pandemic-legacy-season-1", "mice-and-mystics",
        "pathfinder-adventure-card-game-rise-of-the-runelords-base-set",
        "lord-of-the-rings-journeys-in-middle-earth", "stuffed-fables", "roll-player-adventures",
        "cthulhu-death-may-die", "descent-journeys-in-the-dark-second-edition",
    ],
    "cooperative": [
        "spirit-island", "nemesis-lockdown", "dead-of-winter-the-long-night", "battlestar-galactica-the-board-game",
        "unfathomable", "dead-of-winter-a-crossroads-game", "the-thing-the-boardgame", "aeons-end",
        "legendary-encounters-an-alien-deck-building-game", "shadows-over-camelot", "heroes-of-terrinoth",
        "forgotten-waters", "bloodborne-the-card-game", "hoplomachus-remastered", "marvel-champions-the-card-game",
        "nemesis", "tainted-grail-the-fall-of-avalon", "arydia-the-paths-we-dare-tread", "atlantis-rising", "burgle-bros",
    ],
}

def extract(text, pattern, default=None):
    match = re.search(pattern, text, re.M)
    return match.group(1).strip() if match else default

def record(slug):
    path = os.path.join(ROOT, slug, "index.okf.md")
    text = open(path, encoding="utf-8").read()
    mechanics = extract(text, r"^mechanics: \[(.*)\]", "")
    return {
        "slug": slug,
        "title": extract(text, r'^  title: "(.*)"'),
        "bgg_id": int(extract(text, r"^  bgg_id:\s*(\d+)")),
        "edition": extract(text, r'^  edition: "(.*)"'),
        "weight": None if extract(text, r"^  weight:\s*(.*)") == "null" else float(extract(text, r"^  weight:\s*(.*)")),
        "status": extract(text, r"^status:\s*(.*)"),
        "mechanics": [x.strip().strip('"') for x in mechanics.split(",") if x.strip()],
        "record_path": path,
        "existing_live_record": True,
    }

manifest = {
    "schema": "sombersoft.board-game-intake-manifest.v1",
    "pass": 1,
    "focus": "campaign",
    "retrieved_at": str(date.today()),
    "source_of_truth": "KnowledgeBase/BoardGames/games/*/index.okf.md",
    "selection_note": "Rating-led within the screened live-KB set; existing records are not duplicated or rewritten in this pass.",
    "cohorts": {cohort: [record(slug) for slug in slugs] for cohort, slugs in TARGETS.items()},
}
all_records = [r for values in manifest["cohorts"].values() for r in values]
assert all(len(manifest["cohorts"][k]) == 20 for k in manifest["cohorts"])
assert len({r["slug"] for r in all_records}) == 60
assert len({r["bgg_id"] for r in all_records}) == 60
assert all(".invalid" not in str(r) for r in all_records)
with open("reports/campaign-scout-pass-1-manifest.json", "w", encoding="utf-8") as handle:
    json.dump(manifest, handle, indent=2)
    handle.write("\n")
print(json.dumps({"cohorts": {k: len(v) for k, v in manifest["cohorts"].items()}, "unique_slugs": len({r["slug"] for r in all_records}), "unique_bgg_ids": len({r["bgg_id"] for r in all_records}), "verified": sum(r["status"] == "verified" for r in all_records), "needs_followup": sum(r["status"] != "verified" for r in all_records)}, indent=2))
