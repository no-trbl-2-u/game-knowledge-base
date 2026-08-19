# Fresh receipt verification

Use this after a REVISE repair changes `evidence.json`, `manifest.json`, a source registry, or an `asset_url`.

## Disposable probe

Create the probe with an OS-safe temporary path, not a repository file:

```python
import os, subprocess, sys, tempfile
from pathlib import Path

fd, path = tempfile.mkstemp(prefix="hermes-verify-", suffix=".py", dir="/tmp", text=True)
os.close(fd)
try:
    Path(path).write_text(PROBE_SOURCE)
    result = subprocess.run([sys.executable, path, str(REPO)], text=True,
                            capture_output=True, timeout=120)
finally:
    try:
        os.unlink(path)
    except OSError:
        pass
```

The probe must first verify local structure: JSON parses, `src-001.url == final_url`, the manifest discovery list carries the same URL, no stale replay modifier remains, and recorded status/content type are plausible. Then fetch the declared URL and compare status, bytes, SHA-256, and identity markers.

## Wayback replay ladder

Test these separately; do not treat one replay modifier as interchangeable with another:

1. plain replay: `/web/<timestamp>/<url>`
2. `if_` replay: `/web/<timestamp>if_/<url>`
3. `id_` replay: `/web/<timestamp>id_/<url>`

Record each variant's status, content type, bytes, hash, and whether the claimed title/SKU/EAN appears. A stable response with a different body or hash is a custody defect, not a passing check. `id_` may return an archive shell without the source identity even when it is HTTP 200.

## Reporting rule

Call this **ad-hoc verification**, never suite green. If local consistency passes but live custody differs, report both results and stop the repair as blocked. Do not rewrite the receipt to whichever response arrived last without inspecting replay stability and updating every sibling registry and manifest URL together.
