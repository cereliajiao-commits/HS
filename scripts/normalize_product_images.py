#!/usr/bin/env python3
from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageOps, ImageChops


TARGET_WIDTH = 1200
TARGET_HEIGHT = 1200
PADDING_RATIO = 0.02


def crop_content(rgba: Image.Image) -> Image.Image:
    alpha = rgba.getchannel("A")
    alpha_bbox = alpha.getbbox()
    if alpha_bbox:
        left, top, right, bottom = alpha_bbox
    else:
        rgb = rgba.convert("RGB")
        corners = [
            rgb.getpixel((0, 0)),
            rgb.getpixel((max(0, rgb.width - 1), 0)),
            rgb.getpixel((0, max(0, rgb.height - 1))),
            rgb.getpixel((max(0, rgb.width - 1), max(0, rgb.height - 1))),
        ]
        bg = tuple(sum(pixel[i] for pixel in corners) // len(corners) for i in range(3))
        diff = ImageChops.difference(rgb, Image.new("RGB", rgb.size, bg)).convert("L")
        mask = diff.point(lambda p: 255 if p > 18 else 0)
        bbox = mask.getbbox()
        if not bbox:
            return rgba
        left, top, right, bottom = bbox

    pad_x = max(8, int((right - left) * 0.08))
    pad_y = max(8, int((bottom - top) * 0.08))
    left = max(0, left - pad_x)
    top = max(0, top - pad_y)
    right = min(rgba.width, right + pad_x)
    bottom = min(rgba.height, bottom + pad_y)
    return rgba.crop((left, top, right, bottom))


def normalize_image(src: Path, dst: Path) -> None:
    with Image.open(src) as img:
        rgba = img.convert("RGBA")
        rgba = crop_content(rgba)

        max_w = int(TARGET_WIDTH * (1 - PADDING_RATIO * 2))
        max_h = int(TARGET_HEIGHT * (1 - PADDING_RATIO * 2))
        fitted = ImageOps.contain(rgba, (max_w, max_h), method=Image.Resampling.LANCZOS)

        canvas = Image.new("RGBA", (TARGET_WIDTH, TARGET_HEIGHT), (0, 0, 0, 0))
        x = (TARGET_WIDTH - fitted.width) // 2
        y = (TARGET_HEIGHT - fitted.height) // 2
        canvas.paste(fitted, (x, y), fitted)

        dst.parent.mkdir(parents=True, exist_ok=True)
        canvas.save(dst)


def iter_images(root: Path):
    for path in root.rglob("*"):
        if path.is_file() and path.suffix.lower() in {".png", ".jpg", ".jpeg", ".webp"}:
            yield path


def main() -> None:
    parser = argparse.ArgumentParser(description="Normalize product image size and padding.")
    parser.add_argument("source", type=Path, help="Source image directory")
    parser.add_argument("dest", type=Path, help="Destination directory")
    parser.add_argument("--in-place", action="store_true", help="Write normalized images back to the source files")
    args = parser.parse_args()

    source = args.source.expanduser().resolve()
    dest = args.dest.expanduser().resolve()

    images = list(iter_images(source))
    if not images:
        print(f"No images found in {source}")
        return

    for src in images:
      rel = src.relative_to(source)
      out = src if args.in_place else dest / rel
      normalize_image(src, out)
      print(f"normalized {src} -> {out}")


if __name__ == "__main__":
    main()
