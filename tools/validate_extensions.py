#!/usr/bin/env python3
"""Validate proposed community manifests without importing or running submitted code."""
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
BASE = ROOT / "community-extensions"
ID = re.compile(r"^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$")
SEMVER = re.compile(r"^\d+\.\d+\.\d+$")
REQUIRED = {"schema_version", "id", "name", "version", "description",
            "author", "license", "permissions_requested", "external_services",
            "data_handling", "entrypoint"}
MAX_BYTES = 16384

def validate(folder):
    errors = []
    path = folder / "extension.json"
    if not path.is_file():
        return [f"{folder.name}: missing extension.json"]
    if path.stat().st_size > MAX_BYTES:
        return [f"{folder.name}: manifest exceeds {MAX_BYTES} bytes"]
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except (ValueError, UnicodeError) as e:
        return [f"{folder.name}: invalid UTF-8 JSON ({e})"]
    if not isinstance(data, dict):
        return [f"{folder.name}: manifest must be a JSON object"]
    missing = REQUIRED - data.keys()
    if missing:
        errors.append(f"{folder.name}: missing fields {sorted(missing)}")
    if data.get("schema_version") != "0.1-proposal":
        errors.append(f"{folder.name}: incorrect draft schema version")
    eid = data.get("id")
    if not isinstance(eid, str) or not ID.fullmatch(eid) or eid != folder.name:
        errors.append(f"{folder.name}: id must be safe slug matching directory")
    if not isinstance(data.get("version"), str) or not SEMVER.fullmatch(data["version"]):
        errors.append(f"{folder.name}: version must use numeric MAJOR.MINOR.PATCH")
    for key in ("name", "description", "author", "license", "data_handling"):
        v = data.get(key)
        if not isinstance(v, str) or not v.strip() or len(v) > 1000:
            errors.append(f"{folder.name}: {key} must be nonblank short text")
    for key in ("permissions_requested", "external_services"):
        if not isinstance(data.get(key), list) or not all(
            isinstance(x, str) and 0 < len(x) <= 200 for x in data[key]
        ):
            errors.append(f"{folder.name}: {key} must be a list of short strings")
    entry = data.get("entrypoint")
    if not isinstance(entry, str) or not entry or entry.startswith("/") or "\\" in entry:
        errors.append(f"{folder.name}: unsafe entrypoint")
    elif any(part in ("", ".", "..") for part in entry.split("/")):
        errors.append(f"{folder.name}: unsafe entrypoint path segments")
    elif not (folder / entry).is_file() or (folder / entry).is_symlink():
        errors.append(f"{folder.name}: entrypoint must be existing regular file")
    for filename in ("README.md", "LICENSE"):
        if not (folder / filename).is_file():
            errors.append(f"{folder.name}: missing {filename}")
    return errors

def main():
    if not BASE.is_dir():
        print("No community-extensions directory")
        return 1
    folders = sorted(p for p in BASE.iterdir() if p.is_dir() and not p.is_symlink())
    if not folders:
        print("No extension proposals; validation passed")
        return 0
    failures = [error for folder in folders for error in validate(folder)]
    for error in failures:
        print(f"ERROR: {error}")
    if failures:
        return 1
    print(f"Validated {len(folders)} draft manifest(s). This is not a security review.")
    return 0

if __name__ == "__main__":
    sys.exit(main())
