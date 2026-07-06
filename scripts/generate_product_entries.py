#!/usr/bin/env python3
from __future__ import annotations

import json
import re
from pathlib import Path


CATEGORY_RULES = {
  'steering-arm': {
    'tag': 'Steering Arm',
    'title_en': 'Heavy-Duty Steering Arm',
    'title_zh': '重型转向臂',
    'desc_en': 'Precision-built heavy-duty steering arm for truck steering linkage applications, suitable for replacement and OEM supply.',
    'desc_zh': '精密制造的重型转向臂，适用于卡车转向传动系统，可用于替换及 OEM 配套。',
    'specs': [('Type', 'Steering arm', '类型', '转向臂'), ('Application', 'Truck steering system', '适用', '卡车转向系统'), ('Material', 'Forged steel', '材质', '锻造钢'), ('Supply', 'OEM / aftermarket', '供货', 'OEM / 售后市场')],
    'applications': ['Truck steering linkage', 'OEM replacement', 'Aftermarket supply'],
  },
  'steering-knuckle': {
    'tag': 'Steering Knuckle',
    'title_en': 'Truck Steering Knuckle',
    'title_zh': '卡车羊角',
    'desc_en': 'Durable steering knuckle engineered for stable steering transfer and long service life in heavy-duty vehicles.',
    'desc_zh': '耐用型羊角，专为重型车辆稳定转向传递和长寿命使用而设计。',
    'specs': [('Type', 'Steering knuckle', '类型', '羊角'), ('Application', 'Heavy-duty truck', '适用', '重型卡车'), ('Material', 'Forged steel', '材质', '锻造钢'), ('Supply', 'OEM / aftermarket', '供货', 'OEM / 售后市场')],
    'applications': ['Truck axle assemblies', 'Steering linkage replacement', 'OEM supply'],
  },
  'agricultural': {
    'tag': 'Agricultural',
    'title_en': 'Agricultural Machinery Part',
    'title_zh': '农机配件',
    'desc_en': 'Agricultural machinery component designed for reliable steering and linkage performance in field equipment.',
    'desc_zh': '适用于农机设备的配件，提供可靠的转向和连接性能。',
    'specs': [('Type', 'Agricultural part', '类型', '农机配件'), ('Application', 'Field machinery', '适用', '田间机械'), ('Material', 'Forged steel', '材质', '锻造钢'), ('Supply', 'Custom / OEM', '供货', '定制 / OEM')],
    'applications': ['Agricultural machinery', 'Field equipment', 'Custom projects'],
  },
  'john-deere': {
    'tag': 'John Deere',
    'title_en': 'John Deere Suspension Assembly',
    'title_zh': '约翰迪尔悬挂总成',
    'desc_en': 'John Deere series suspension assembly for agricultural applications, built for dependable fit and performance.',
    'desc_zh': '约翰迪尔系列悬挂总成，适用于农业应用，装配稳定、性能可靠。',
    'specs': [('Type', 'Suspension assembly', '类型', '悬挂总成'), ('Application', 'John Deere series', '适用', '约翰迪尔系列'), ('Material', 'Forged steel', '材质', '锻造钢'), ('Supply', 'OEM / custom', '供货', 'OEM / 定制')],
    'applications': ['John Deere tractors', 'Agricultural suspension', 'OEM replacement'],
  },
  'shaft': {
    'tag': 'Drive Shaft',
    'title_en': 'Heavy-Duty Drive Shaft',
    'title_zh': '重型传动轴',
    'desc_en': 'Drive shaft for stable torque transmission and reliable operation in heavy-duty truck platforms.',
    'desc_zh': '适用于重型卡车平台的传动轴，提供稳定扭矩传递和可靠运行。',
    'specs': [('Type', 'Drive shaft', '类型', '传动轴'), ('Application', 'Truck drivetrain', '适用', '卡车传动系统'), ('Material', 'Forged alloy steel', '材质', '锻造合金钢'), ('Supply', 'OEM / aftermarket', '供货', 'OEM / 售后市场')],
    'applications': ['Heavy-duty trucks', 'Transmission systems', 'Replacement parts'],
  },
  'long-shaft': {
    'tag': 'Long Shaft',
    'title_en': 'Long Shaft Assembly',
    'title_zh': '长轴总成',
    'desc_en': 'Long shaft assembly for custom drivetrain and transmission applications requiring stable rotation and strength.',
    'desc_zh': '用于定制传动和动力传输应用的长轴总成，具备稳定转动和高强度表现。',
    'specs': [('Type', 'Long shaft', '类型', '长轴'), ('Application', 'Custom drivetrain', '适用', '定制传动系统'), ('Material', 'Forged steel', '材质', '锻造钢'), ('Supply', 'OEM / custom', '供货', 'OEM / 定制')],
    'applications': ['Custom drivetrain systems', 'Transmission assemblies', 'Special projects'],
  },
}


def clean_model(stem: str) -> str:
  stem = stem.replace('_', ' ').strip()
  stem = re.sub(r'\s+', ' ', stem)
  return stem


def split_model_and_label(stem: str) -> tuple[str, str]:
  raw = clean_model(stem).replace('：', ':').replace('（', '(').replace('）', ')')
  cleaned = re.sub(r'\s+', ' ', raw).strip()
  matches = re.findall(r'[A-Za-z0-9]+(?:[./+-][A-Za-z0-9]+)*', cleaned)
  english = ' '.join(matches).strip()
  english = english.replace(':', ' ').replace('(', ' ').replace(')', ' ')
  english = re.sub(r'\s+', ' ', english).strip()
  if not english:
    digits = re.findall(r'\d+[A-Za-z0-9./+-]*', cleaned)
    english = ' '.join(digits).strip()
  if not english:
    english = 'Model'
  return cleaned, english


def card_title(category: str, model_en: str, code: str) -> str:
  rule = CATEGORY_RULES[category]
  suffix = model_en if model_en and model_en != 'Model' else code
  return f"{rule['title_en']} - {suffix}" if suffix else rule['title_en']


def extract_model_code(stem: str) -> str:
  text = stem.replace('：', ':').replace('（', '(').replace('）', ')')
  text = re.sub(r'[^\w:\-/]+', ' ', text)
  text = re.sub(r'[\u4e00-\u9fff]+', ' ', text)
  text = text.replace(':', '/')
  text = re.sub(r'\s+', ' ', text).strip()
  return text or stem


def category_title(category: str, lang: str, model: str, code: str) -> str:
  rule = CATEGORY_RULES[category]
  base = rule['title_en'] if lang == 'en' else rule['title_zh']
  suffix = code if lang == 'en' else model
  return f"{base} - {suffix}"


def category_desc(category: str, lang: str) -> str:
  rule = CATEGORY_RULES[category]
  return rule['desc_en'] if lang == 'en' else rule['desc_zh']


def spec_items(category: str, lang: str):
  rule = CATEGORY_RULES[category]
  items = []
  for en_label, en_value, zh_label, zh_value in rule['specs']:
    items.append({'label': en_label if lang == 'en' else zh_label, 'value': en_value if lang == 'en' else zh_value})
  return items


def app_items(category: str, lang: str):
  rule = CATEGORY_RULES[category]
  apps = rule['applications']
  if lang == 'zh':
    zh_map = {
      'Truck steering linkage': '卡车转向传动',
      'OEM replacement': 'OEM 替换',
      'Aftermarket supply': '售后市场供应',
      'Truck axle assemblies': '卡车车桥总成',
      'OEM supply': 'OEM 供货',
      'Agricultural machinery': '农业机械',
      'Field equipment': '田间设备',
      'Custom projects': '定制项目',
      'John Deere tractors': '约翰迪尔拖拉机',
      'Agricultural suspension': '农机悬挂',
      'OEM replacement': 'OEM 替换',
      'Heavy-duty trucks': '重型卡车',
      'Transmission systems': '传动系统',
      'Replacement parts': '替换件',
      'Custom drivetrain systems': '定制传动系统',
      'Transmission assemblies': '传动总成',
      'Special projects': '特殊项目',
    }
    return [zh_map.get(item, item) for item in apps]
  return apps


def esc(value: str) -> str:
  return value.replace('\\', '\\\\').replace("'", "\\'")


def main() -> None:
  root = Path('/Users/jiaozeting/Documents/Codex/2026-07-05/za/HS')
  manifest_path = root / 'data/imported-products.json'
  out_path = root / 'data/imported-products.generated.ts'
  details_path = root / 'data/imported-products.details.generated.ts'
  content_path = root / 'data/imported-products.content.generated.ts'

  data = json.loads(manifest_path.read_text(encoding='utf-8'))
  card_lines = ['export const importedProductCards = [']
  detail_lines = ['export const importedProductDetails = {']
  content_lines = ['export const importedProductContent = {']

  for item in data:
    model_zh, model_en = split_model_and_label(item['titleZh'])
    code = extract_model_code(item['titleZh'])
    card_title_en = card_title(item['category'], model_en, code)
    card_lines.append('  {')
    for key in ['id', 'category', 'brand', 'image', 'description', 'tag']:
      value = esc(item[key])
      card_lines.append(f"    {key}: '{value}',")
    card_lines.append(f"    title: '{esc(card_title_en)}',")
    card_lines.append('  },')

    detail_lines.append(f"  '{item['id']}': {{")
    detail_lines.append(f"    image: '{item['image']}',")
    detail_lines.append(f"    category: '{item['categoryLabelEn']}',")
    detail_lines.append(f"    title: '{esc(category_title(item['category'], 'en', model_zh, model_en or code))}',")
    detail_lines.append(f"    description: '{esc(category_desc(item['category'], 'en'))}',")
    detail_lines.append('    specs: [')
    for spec in spec_items(item['category'], 'en'):
      detail_lines.append(f"      {{ label: '{esc(spec['label'])}', value: '{esc(spec['value'])}' }},")
    detail_lines.append('    ],')
    detail_lines.append('    applications: [')
    for app in app_items(item['category'], 'en'):
      detail_lines.append(f"      '{esc(app)}',")
    detail_lines.append('    ],')
    detail_lines.append('  },')

    content_lines.append(f"  '{item['id']}': {{")
    for lang in ['en', 'zh']:
      content_lines.append(f"    {lang}: {{")
      content_lines.append(f"      title: '{esc(category_title(item['category'], lang, model_zh, model_en or code))}',")
      content_lines.append(f"      description: '{esc(category_desc(item['category'], lang))}',")
      content_lines.append('      specs: [')
      for spec in spec_items(item['category'], lang):
        content_lines.append(f"        {{ label: '{esc(spec['label'])}', value: '{esc(spec['value'])}' }},")
      content_lines.append('      ],')
      content_lines.append('      applications: [')
      for app in app_items(item['category'], lang):
        content_lines.append(f"        '{esc(app)}',")
      content_lines.append('      ],')
      content_lines.append('    },')
    content_lines.append('  },')

  card_lines.append('] as const;')
  detail_lines.append('} as const;')
  content_lines.append('} as const;')
  out_path.write_text('\n'.join(card_lines) + '\n', encoding='utf-8')
  details_path.write_text('\n'.join(detail_lines) + '\n', encoding='utf-8')
  content_path.write_text('\n'.join(content_lines) + '\n', encoding='utf-8')
  print(f'wrote {len(data)} entries to {out_path}')
  print(f'wrote {len(data)} details to {details_path}')
  print(f'wrote {len(data)} localized entries to {content_path}')


if __name__ == '__main__':
  main()
