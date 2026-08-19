#!/usr/bin/env python3
"""Trigger one native Bathcat run after a new current-head Mennonite REVISE.

This is a Judge-side event bridge. It does not alter either specialist cron.
A systemd path unit invokes it after Mennonite writes a cron output artifact.
"""

from __future__ import annotations

import argparse
import datetime as dt
import fcntl
import json
import os
from pathlib import Path
import re
import subprocess
import sys

REPO = "/root/Workspace/SomberSoft/game-knowledge-base-mennonite"
STATE = Path("/root/.hermes/state/mennonite-revise-bathcat.json")
LOCK = Path("/run/lock/sombersoft-mennonite-revise-bathcat.lock")
LEDGER = Path("/root/.hermes/logs/mennonite-revise-bathcat.log")
BATHCAT_JOB = "0909f461cb88"
FULL_SHA = re.compile(r"\b[0-9a-f]{40}\b")
REVISE_LINE = re.compile(r"^\s*(?:#+\s*)?REVISE\b", re.IGNORECASE)


def now() -> str:
    return dt.datetime.now(dt.timezone.utc).isoformat()


def log(message: str) -> None:
    LEDGER.parent.mkdir(parents=True, exist_ok=True)
    with LEDGER.open("a", encoding="utf-8") as fh:
        fh.write(f"{now()} {message}\n")
    print(message, flush=True)


def gh_json(args: list[str]) -> object:
    proc = subprocess.run(
        ["gh", *args], cwd=REPO, text=True, capture_output=True, timeout=120
    )
    if proc.returncode:
        raise RuntimeError(proc.stderr.strip() or proc.stdout.strip())
    return json.loads(proc.stdout)


def load_state() -> dict:
    if not STATE.exists():
        return {"seen_comment_ids": [], "last_scan": None, "last_trigger": None}
    return json.loads(STATE.read_text(encoding="utf-8"))


def save_state(state: dict) -> None:
    STATE.parent.mkdir(parents=True, exist_ok=True)
    temp = STATE.with_suffix(".tmp")
    temp.write_text(json.dumps(state, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    os.chmod(temp, 0o600)
    temp.replace(STATE)


def current_head_revises() -> list[dict]:
    pulls = gh_json([
        "pr", "list", "--state", "open", "--limit", "100",
        "--json", "number,title,headRefOid,url",
    ])
    matches: list[dict] = []
    for pr in pulls:
        comments = gh_json([
            "api",
            f"repos/no-trbl-2-u/game-knowledge-base/issues/{pr['number']}/comments",
            "--paginate",
        ])
        for comment in comments:
            body = comment.get("body") or ""
            first = body.lstrip().splitlines()[0] if body.strip() else ""
            if not REVISE_LINE.search(first):
                continue
            shas = FULL_SHA.findall(first)
            if pr["headRefOid"] not in shas:
                continue
            matches.append({
                "comment_id": int(comment["id"]),
                "created_at": comment.get("created_at"),
                "pr": int(pr["number"]),
                "title": pr["title"],
                "head": pr["headRefOid"],
                "url": pr["url"],
            })
    return sorted(matches, key=lambda x: (x.get("created_at") or "", x["comment_id"]))


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--prime", action="store_true", help="record current dispositions without triggering")
    parser.add_argument("--dry-run", action="store_true", help="report decision without triggering")
    args = parser.parse_args()

    LOCK.parent.mkdir(parents=True, exist_ok=True)
    with LOCK.open("w", encoding="utf-8") as lock_fh:
        try:
            fcntl.flock(lock_fh, fcntl.LOCK_EX | fcntl.LOCK_NB)
        except BlockingIOError:
            log("skip: bridge already running")
            return 0

        state = load_state()
        matches = current_head_revises()
        seen = {int(x) for x in state.get("seen_comment_ids", [])}
        new = [item for item in matches if item["comment_id"] not in seen]
        current_ids = {item["comment_id"] for item in matches}

        if args.prime:
            state["seen_comment_ids"] = sorted(seen | current_ids)
            state["last_scan"] = now()
            state["primed"] = True
            save_state(state)
            log(f"primed: {len(current_ids)} current-head REVISE comment(s); no trigger")
            return 0

        if not new:
            state["seen_comment_ids"] = sorted(seen | current_ids)
            state["last_scan"] = now()
            save_state(state)
            log("stop: no new current-head REVISE")
            return 0

        chosen = new[0]
        log(
            f"decision: new current-head REVISE comment={chosen['comment_id']} "
            f"pr={chosen['pr']} head={chosen['head']} title={chosen['title']!r}"
        )
        if args.dry_run:
            log("dry-run: would trigger one native Bathcat run")
            return 0

        proc = subprocess.run(
            ["hermes", "--profile", "bathcat", "cron", "run", BATHCAT_JOB],
            cwd="/root/Workspace/SomberSoft/game-knowledge-base-bathcat",
            text=True,
            capture_output=True,
            timeout=7200,
        )
        if proc.stdout.strip():
            log("bathcat stdout: " + proc.stdout.strip().replace("\n", " | "))
        if proc.stderr.strip():
            log("bathcat stderr: " + proc.stderr.strip().replace("\n", " | "))
        if proc.returncode:
            log(f"failure: Bathcat trigger exited {proc.returncode}; disposition remains unseen for retry")
            return proc.returncode

        # One trigger services the queue decision. Record every new REVISE observed
        # in this Mennonite completion so duplicate path events cannot retrigger it.
        state["seen_comment_ids"] = sorted(seen | current_ids)
        state["last_scan"] = now()
        state["last_trigger"] = {
            "at": now(),
            "comment_id": chosen["comment_id"],
            "pr": chosen["pr"],
            "head": chosen["head"],
        }
        save_state(state)
        log(f"success: triggered one Bathcat native run for PR #{chosen['pr']}")
        return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as exc:
        log(f"error: {type(exc).__name__}: {exc}")
        raise
