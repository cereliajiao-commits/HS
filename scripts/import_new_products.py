#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
from pathlib import Path
from typing import Dict, List

from PIL import Image, ImageOps
from PIL import ImageChops


CATEGORY_MAP = {
    "转向臂_处理图1": {
        "category": "steering-arm",
        "tag": "Steering Arm",
        "title_en": "Steering Arm",
        "title_zh": "转向臂",
        "desc_en": "High-quality steering arm for heavy-duty truck steering systems.",
        "desc_zh": "高品质转向臂，适用于重型卡车转向系统。",
    },
    "羊角系列_处理图片": {
        "category": "steering-knuckle",
        "tag": "Steering Knuckle",
        "title_en": "Steering Knuckle",
        "title_zh": "羊角",
        "desc_en": "Durable steering knuckle for truck steering linkage applications.",
        "desc_zh": "耐用型羊角，适用于卡车转向传动应用。",
    },
    "农机产品_处理图": {
        "category": "agricultural",
        "tag": "Agricultural",
        "title_en": "Agricultural Part",
        "title_zh": "农机配件",
        "desc_en": "Agricultural machinery component for steering and linkage assemblies.",
        "desc_zh": "农机转向及连接机构配件。",
    },
    "约翰迪尔系列_处理图": {
        "category": "john-deere",
        "tag": "John Deere",
        "title_en": "John Deere Assembly",
        "title_zh": "约翰迪尔系列",
        "desc_en": "John Deere series assembly for agricultural suspension applications.",
        "desc_zh": "约翰迪尔系列总成，适用于农业悬挂应用。",
    },
    "传动轴系列_处理图": {
        "category": "shaft",
        "tag": "Drive Shaft",
        "title_en": "Drive Shaft",
        "title_zh": "传动轴",
        "desc_en": "Drive shaft for heavy-duty torque transmission and stable operation.",
        "desc_zh": "重型传动轴，提供稳定扭矩传递与可靠运行。",
    },
    "长轴系列_处理图": {
        "category": "long-shaft",
        "tag": "Long Shaft",
        "title_en": "Long Shaft",
        "title_zh": "长轴",
        "desc_en": "Long shaft product for custom drivetrain and transmission applications.",
        "desc_zh": "长轴产品，适用于定制传动系统和动力传递应用。",
    },
}

BRAND_RULES = [
    ("john-deere", ["约翰迪尔", "JOHN DEERE"]),
    ("howo", ["豪沃"]),
    ("sinotruk", ["重汽", "STR", "斯太尔", "HOWO"]),
    ("dongfeng", ["东风"]),
    ("shaanxi", ["陕汽", "德龙", "奥龙", "北奔"]),
    ("auman", ["欧曼"]),
]

IMG_EXTS = {".png", ".jpg", ".jpeg", ".webp"}
TARGET_SIZE = (1200, 1200)
PADDING_RATIO = 0.02
RESAMPLE = getattr(Image, "Resampling", Image).LANCZOS


def slugify(text: str) -> str:
  text = text.lower()
  text = re.sub(r"[^a-z0-9\u4e00-\u9fff]+", "-", text)
  text = re.sub(r"-{2,}", "-", text).strip("-")
  return text or "item"


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

  white = Image.new("RGB", rgba.size, (255, 255, 255))
  nonwhite = ImageChops.difference(rgba.convert("RGB"), white).convert("L")
  white_bbox = nonwhite.point(lambda p: 255 if p > 20 else 0).getbbox()
  if white_bbox:
    w_left, w_top, w_right, w_bottom = white_bbox
    white_area = (w_right - w_left) * (w_bottom - w_top)
    canvas_area = rgba.width * rgba.height
    if white_area < canvas_area * 0.96:
      left, top, right, bottom = white_bbox

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

    max_w = int(TARGET_SIZE[0] * (1 - PADDING_RATIO * 2))
    max_h = int(TARGET_SIZE[1] * (1 - PADDING_RATIO * 2))
    fitted = ImageOps.contain(rgba, (max_w, max_h), method=RESAMPLE)

    canvas = Image.new("RGBA", TARGET_SIZE, (0, 0, 0, 0))
    x = (TARGET_SIZE[0] - fitted.width) // 2
    y = (TARGET_SIZE[1] - fitted.height) // 2
    canvas.paste(fitted, (x, y), fitted)

    dst.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(dst)


def detect_brand(stem: str, folder: str) -> str:
  text = f"{folder} {stem}".upper()
  for brand, markers in BRAND_RULES:
    for marker in markers:
      if marker.upper() in text:
        return brand
  return "others"


def build_manifest(source: Path, out_dir: Path) -> List[Dict[str, str]]:
  manifest: List[Dict[str, str]] = []

  for folder_name, meta in CATEGORY_MAP.items():
    folder = source / folder_name
    if not folder.exists():
      continue
    files = sorted(
      [p for p in folder.iterdir() if p.is_file() and p.suffix.lower() in IMG_EXTS],
      key=lambda p: p.name,
    )
    for index, src in enumerate(files, start=1):
      stem = src.stem
      safe_name = f"{index:03d}-{slugify(stem)}.png"
      dst = out_dir / meta["category"] / safe_name
      normalize_image(src, dst)

      brand = detect_brand(stem, folder_name)
      card = {
        "id": f"new-{meta['category']}-{index:03d}",
        "category": meta["category"],
        "brand": brand,
        "image": f"/images/products/imported/{meta['category']}/{safe_name}",
        "title": f"{meta['title_en']} - {stem}",
        "description": meta["desc_en"],
        "tag": meta["tag"],
        "titleEn": f"{meta['title_en']} - {stem}",
        "titleZh": stem,
        "descriptionEn": meta["desc_en"],
        "descriptionZh": meta["desc_zh"],
        "categoryLabelEn": meta["title_en"],
        "categoryLabelZh": meta["title_zh"],
      }
      manifest.append(card)
      print(f"processed {src} -> {dst}")

  return manifest


def main() -> None:
  parser = argparse.ArgumentParser(description="Import and normalize new product images.")
  parser.add_argument(
    "--source",
    type=Path,
    default=Path("/Users/jiaozeting/Downloads/宏盛产品图片-上传版/111"),
    help="Source directory containing the new product folders",
  )
  parser.add_argument(
    "--dest",
    type=Path,
    default=Path("/Users/jiaozeting/Documents/Codex/2026-07-05/za/HS/public/images/products/imported"),
    help="Destination directory under the website public folder",
  )
  parser.add_argument(
    "--manifest",
    type=Path,
    default=Path("/Users/jiaozeting/Documents/Codex/2026-07-05/za/HS/data/imported-products.json"),
    help="Output JSON manifest file",
  )
  args = parser.parse_args()

  manifest = build_manifest(args.source.expanduser().resolve(), args.dest.expanduser().resolve())
  args.manifest.parent.mkdir(parents=True, exist_ok=True)
  args.manifest.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
  print(f"wrote {len(manifest)} products to {args.manifest}")


if __name__ == "__main__":
  main()
