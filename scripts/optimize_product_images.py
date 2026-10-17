#!/usr/bin/env python3
"""Keep product media fast and deployment-safe.

Run without arguments to convert new PNG/JPEG product images to white-background
WebP files and update source references. ``--check`` is used automatically before
every production build and fails when an unoptimized or missing asset is found.
"""
from __future__ import annotations

import argparse
import re
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
IMAGE_DIR = ROOT / "public/images/products"
SOURCE_DIRS = [ROOT / name for name in ("app", "components", "data", "lib")]
SOURCE_SUFFIXES = {".ts", ".tsx", ".css", ".json"}
INPUT_SUFFIXES = {".png", ".jpg", ".jpeg"}
MAX_BYTES = 500 * 1024


def to_white_rgb(image: Image.Image) -> Image.Image:
    rgba = image.convert("RGBA")
    background = Image.new("RGBA", rgba.size, (255, 255, 255, 255))
    background.alpha_composite(rgba)
    return background.convert("RGB")


def update_references(old_path: Path, new_path: Path) -> None:
    old_ref = "/" + old_path.relative_to(ROOT / "public").as_posix()
    new_ref = "/" + new_path.relative_to(ROOT / "public").as_posix()
    for directory in SOURCE_DIRS:
        for path in directory.rglob("*"):
            if path.suffix not in SOURCE_SUFFIXES:
                continue
            text = path.read_text(encoding="utf-8")
            updated = text.replace(old_ref, new_ref)
            if updated != text:
                path.write_text(updated, encoding="utf-8")


def optimize() -> None:
    converted = 0
    for path in sorted(IMAGE_DIR.rglob("*")):
        if not path.is_file() or path.suffix.lower() not in INPUT_SUFFIXES:
            continue
        output = path.with_suffix(".webp")
        with Image.open(path) as image:
            to_white_rgb(image).save(output, "WEBP", quality=84, method=6, exact=True)
        update_references(path, output)
        path.unlink()
        converted += 1
        print(f"optimized {path.name} -> {output.name}")
    print(f"optimized {converted} new product image(s)")


def check() -> None:
    errors: list[str] = []
    for path in IMAGE_DIR.rglob("*"):
        if not path.is_file():
            continue
        if path.suffix.lower() in INPUT_SUFFIXES:
            errors.append(f"unoptimized format: {path.relative_to(ROOT)}")
        elif path.suffix.lower() == ".webp" and path.stat().st_size > MAX_BYTES:
            errors.append(f"image exceeds 500 KB: {path.relative_to(ROOT)}")

    reference_pattern = re.compile(r'''(/images/products/[^\s"'`()]+)''')
    for directory in SOURCE_DIRS:
        for path in directory.rglob("*"):
            if path.suffix not in SOURCE_SUFFIXES:
                continue
            text = path.read_text(encoding="utf-8")
            for reference in reference_pattern.findall(text):
                clean = reference.rstrip(";,}").split("?", 1)[0]
                if not (ROOT / "public" / clean.lstrip("/")).exists():
                    errors.append(f"missing image referenced by {path.relative_to(ROOT)}: {clean}")

    if errors:
        raise SystemExit("\n".join(errors))
    print("product image check passed: WebP only, all files below 500 KB, no missing references")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    if args.check:
        check()
    else:
        optimize()
        check()


if __name__ == "__main__":
    main()
