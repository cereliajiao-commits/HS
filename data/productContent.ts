export type ProductLocale = 'en' | 'zh';

export interface LocalizedProductText {
  title: string;
  description: string;
  specs: { label: string; value: string }[];
  applications: string[];
}

export interface ProductContent {
  en: LocalizedProductText;
  zh: LocalizedProductText;
}

export const productContent: Record<string, ProductContent> = {
  'vertical-arm-153': {
    en: {
      title: '153 Vertical Arm',
      description: 'Vertical arm for Dongfeng steering linkage assemblies, forged for dependable steering control and long service life.',
      specs: [
        { label: 'Model', value: '153 series' },
        { label: 'Compatibility', value: 'Dongfeng series' },
        { label: 'Material', value: 'Forged steel' },
        { label: 'Finish', value: 'Anti-corrosion coating' },
      ],
      applications: ['Dongfeng trucks', 'Steering drag link systems', 'Medium-duty vehicle repairs'],
    },
    zh: {
      title: '153 垂臂',
      description: '用于东风转向传动机构的垂臂，采用锻造工艺，结构强度高，转向控制稳定可靠。',
      specs: [
        { label: '型号', value: '153 系列' },
        { label: '适配', value: '东风系列' },
        { label: '材质', value: '锻造钢' },
        { label: '表面', value: '防腐涂层' },
      ],
      applications: ['东风卡车', '转向拉杆系统', '中型车维修'],
    },
  },
  'vertical-arm-str-double': {
    en: {
      title: 'STR Double Bridge Vertical Arm',
      description: 'Heavy-duty vertical arm for STR and Steyr double-bridge applications, built for stable steering transfer.',
      specs: [
        { label: 'Type', value: 'Vertical arm' },
        { label: 'Platform', value: 'STR / Steyr' },
        { label: 'Structure', value: 'Double bridge' },
        { label: 'Strength', value: 'Heavy-duty rated' },
      ],
      applications: ['STR chassis', 'Steyr-based trucks', 'Heavy-duty steering linkage'],
    },
    zh: {
      title: 'STR 双桥垂臂',
      description: '适用于 STR 和斯太尔双桥应用的重型垂臂，转向传动稳定可靠。',
      specs: [
        { label: '类型', value: '垂臂' },
        { label: '平台', value: 'STR / 斯太尔' },
        { label: '结构', value: '双桥' },
        { label: '强度', value: '重载级' },
      ],
      applications: ['STR 底盘', '斯太尔卡车', '重型转向传动'],
    },
  },
  'vertical-arm-a50a': {
    en: {
      title: 'A50A Vertical Arm',
      description: 'A50A vertical arm for commercial steering systems, supplied as an individual catalog item.',
      specs: [
        { label: 'Type', value: 'Vertical arm' },
        { label: 'Model', value: 'A50A' },
        { label: 'Material', value: 'Forged steel' },
        { label: 'Finish', value: 'Protective coating' },
      ],
      applications: ['Commercial vehicles', 'Steering linkage replacement', 'Product catalog'],
    },
    zh: {
      title: 'A50A 垂臂',
      description: '用于商用车转向系统的 A50A 垂臂，作为单独产品展示。',
      specs: [
        { label: '类型', value: '垂臂' },
        { label: '型号', value: 'A50A' },
        { label: '材质', value: '锻造钢' },
        { label: '表面', value: '保护涂层' },
      ],
      applications: ['商用车辆', '转向传动替换', '产品目录'],
    },
  },
  'vertical-arm-k36a0': {
    en: {
      title: 'K36A0 Vertical Arm',
      description: 'K36A0 vertical arm with stable geometry and durable forged construction.',
      specs: [
        { label: 'Type', value: 'Vertical arm' },
        { label: 'Model', value: 'K36A0' },
        { label: 'Material', value: 'Forged steel' },
        { label: 'Finish', value: 'Anti-corrosion coating' },
      ],
      applications: ['Truck steering linkage', 'Replacement parts', 'Catalog display'],
    },
    zh: {
      title: 'K36A0 垂臂',
      description: 'K36A0 垂臂，结构稳定，锻造耐用。',
      specs: [
        { label: '类型', value: '垂臂' },
        { label: '型号', value: 'K36A0' },
        { label: '材质', value: '锻造钢' },
        { label: '表面', value: '防腐涂层' },
      ],
      applications: ['卡车转向传动', '替换件', '目录展示'],
    },
  },
  'vertical-arm-80a-60w': {
    en: {
      title: '80A:60W Vertical Arm',
      description: 'Vertical arm for the 80A:60W model, presented as a single catalog product.',
      specs: [
        { label: 'Type', value: 'Vertical arm' },
        { label: 'Model', value: '80A:60W' },
        { label: 'Material', value: 'Forged steel' },
        { label: 'Finish', value: 'Protective coating' },
      ],
      applications: ['Commercial vehicles', 'Steering linkage replacement', 'Product catalog'],
    },
    zh: {
      title: '80A:60W 垂臂',
      description: '80A:60W 型垂臂，作为单独产品进行展示。',
      specs: [
        { label: '类型', value: '垂臂' },
        { label: '型号', value: '80A:60W' },
        { label: '材质', value: '锻造钢' },
        { label: '表面', value: '保护涂层' },
      ],
      applications: ['商用车辆', '转向传动替换', '产品目录'],
    },
  },
  'vertical-arm-violet': {
    en: {
      title: 'Violet Vertical Arm',
      description: 'Violet model vertical arm in single-arm and twin-arm variants.',
      specs: [
        { label: 'Type', value: 'Vertical arm' },
        { label: 'Variant', value: 'Single / Twin arm' },
        { label: 'Material', value: 'Forged steel' },
        { label: 'Finish', value: 'Protective coating' },
      ],
      applications: ['Commercial vehicles', 'Special steering linkage', 'Catalog display'],
    },
    zh: {
      title: '紫罗兰垂臂',
      description: '紫罗兰型号垂臂，包含一弯和两弯款式。',
      specs: [
        { label: '类型', value: '垂臂' },
        { label: '款式', value: '一弯 / 两弯' },
        { label: '材质', value: '锻造钢' },
        { label: '表面', value: '保护涂层' },
      ],
      applications: ['商用车辆', '特殊转向传动', '目录展示'],
    },
  },
  'vertical-arm-f13': {
    en: {
      title: 'F13 Vertical Arm',
      description: 'F13 vertical arm for steering linkage replacement and catalog presentation.',
      specs: [
        { label: 'Type', value: 'Vertical arm' },
        { label: 'Model', value: 'F13' },
        { label: 'Material', value: 'Forged steel' },
        { label: 'Finish', value: 'Anti-corrosion coating' },
      ],
      applications: ['Truck steering systems', 'Replacement parts', 'Catalog display'],
    },
    zh: {
      title: 'F13 垂臂',
      description: 'F13 垂臂，用于转向传动替换和目录展示。',
      specs: [
        { label: '类型', value: '垂臂' },
        { label: '型号', value: 'F13' },
        { label: '材质', value: '锻造钢' },
        { label: '表面', value: '防腐涂层' },
      ],
      applications: ['卡车转向系统', '替换件', '目录展示'],
    },
  },
  'vertical-arm-f44': {
    en: {
      title: 'F44 Vertical Arm',
      description: 'F44 vertical arm with durable forged construction for steering linkage applications.',
      specs: [
        { label: 'Type', value: 'Vertical arm' },
        { label: 'Model', value: 'F44' },
        { label: 'Material', value: 'Forged steel' },
        { label: 'Finish', value: 'Protective coating' },
      ],
      applications: ['Commercial vehicles', 'Steering repairs', 'Catalog reference'],
    },
    zh: {
      title: 'F44 垂臂',
      description: 'F44 垂臂，锻造结构耐用，适用于转向传动场景。',
      specs: [
        { label: '类型', value: '垂臂' },
        { label: '型号', value: 'F44' },
        { label: '材质', value: '锻造钢' },
        { label: '表面', value: '保护涂层' },
      ],
      applications: ['商用车辆', '转向维修', '目录参考'],
    },
  },
  'vertical-arm-f58': {
    en: {
      title: 'F58 Vertical Arm',
      description: 'F58 vertical arm for heavy-duty steering linkage systems.',
      specs: [
        { label: 'Type', value: 'Vertical arm' },
        { label: 'Model', value: 'F58' },
        { label: 'Material', value: 'Forged steel' },
        { label: 'Finish', value: 'Anti-corrosion coating' },
      ],
      applications: ['Truck steering linkage', 'Replacement parts', 'Catalog display'],
    },
    zh: {
      title: 'F58 垂臂',
      description: 'F58 垂臂，适用于重型转向传动系统。',
      specs: [
        { label: '类型', value: '垂臂' },
        { label: '型号', value: 'F58' },
        { label: '材质', value: '锻造钢' },
        { label: '表面', value: '防腐涂层' },
      ],
      applications: ['卡车转向传动', '替换件', '目录展示'],
    },
  },
  'vertical-arm-aag3': {
    en: {
      title: 'AAG3 Vertical Arm',
      description: 'AAG3 vertical arm shown as an individual product entry.',
      specs: [
        { label: 'Type', value: 'Vertical arm' },
        { label: 'Model', value: 'AAG3' },
        { label: 'Material', value: 'Forged steel' },
        { label: 'Finish', value: 'Protective coating' },
      ],
      applications: ['Commercial vehicles', 'Steering linkage replacement', 'Product catalog'],
    },
    zh: {
      title: 'AAG3 垂臂',
      description: 'AAG3 垂臂，作为单独产品进行展示。',
      specs: [
        { label: '类型', value: '垂臂' },
        { label: '型号', value: 'AAG3' },
        { label: '材质', value: '锻造钢' },
        { label: '表面', value: '保护涂层' },
      ],
      applications: ['商用车辆', '转向传动替换', '产品目录'],
    },
  },
  'vertical-arm-str-single': {
    en: {
      title: 'STR Single Bridge Vertical Arm',
      description: 'Single-bridge STR vertical arm for heavy-duty steering applications.',
      specs: [
        { label: 'Type', value: 'Vertical arm' },
        { label: 'Platform', value: 'STR' },
        { label: 'Structure', value: 'Single bridge' },
        { label: 'Strength', value: 'Heavy-duty rated' },
      ],
      applications: ['STR chassis', 'Steyr-based trucks', 'Heavy-duty steering linkage'],
    },
    zh: {
      title: 'STR 单桥垂臂',
      description: 'STR 单桥垂臂，适用于重型转向传动应用。',
      specs: [
        { label: '类型', value: '垂臂' },
        { label: '平台', value: 'STR' },
        { label: '结构', value: '单桥' },
        { label: '强度', value: '重载级' },
      ],
      applications: ['STR 底盘', '斯太尔卡车', '重型转向传动'],
    },
  },
  'vertical-arm-1061': {
    en: {
      title: '1061 Vertical Arm',
      description: '1061 vertical arm for steering linkage applications, shown as an individual product.',
      specs: [
        { label: 'Type', value: 'Vertical arm' },
        { label: 'Model', value: '1061' },
        { label: 'Material', value: 'Forged steel' },
        { label: 'Finish', value: 'Anti-corrosion coating' },
      ],
      applications: ['Truck steering linkage', 'Replacement parts', 'Catalog display'],
    },
    zh: {
      title: '1061 垂臂',
      description: '1061 垂臂，用于转向传动系统，作为单独产品展示。',
      specs: [
        { label: '类型', value: '垂臂' },
        { label: '型号', value: '1061' },
        { label: '材质', value: '锻造钢' },
        { label: '表面', value: '防腐涂层' },
      ],
      applications: ['卡车转向传动', '替换件', '目录展示'],
    },
  },
  'vertical-arm-tractor': {
    en: {
      title: 'Tractor Vertical Arm',
      description: 'Vertical arm for tractor steering systems and agricultural machinery.',
      specs: [
        { label: 'Type', value: 'Vertical arm' },
        { label: 'Application', value: 'Tractors' },
        { label: 'Material', value: 'Forged steel' },
        { label: 'Finish', value: 'Protective coating' },
      ],
      applications: ['Tractors', 'Agricultural machinery', 'Steering linkage replacement'],
    },
    zh: {
      title: '拖拉机垂臂',
      description: '用于拖拉机转向系统和农机设备的垂臂。',
      specs: [
        { label: '类型', value: '垂臂' },
        { label: '应用', value: '拖拉机' },
        { label: '材质', value: '锻造钢' },
        { label: '表面', value: '保护涂层' },
      ],
      applications: ['拖拉机', '农机设备', '转向传动替换'],
    },
  },
  'vertical-arm-bullnose': {
    en: {
      title: 'Bull Nose Vertical Arm',
      description: 'Bull nose style vertical arm for steering linkage applications.',
      specs: [
        { label: 'Type', value: 'Vertical arm' },
        { label: 'Variant', value: 'Bull nose' },
        { label: 'Material', value: 'Forged steel' },
        { label: 'Finish', value: 'Protective coating' },
      ],
      applications: ['Commercial vehicles', 'Steering repairs', 'Catalog reference'],
    },
    zh: {
      title: '牛鼻子垂臂',
      description: '牛鼻子造型垂臂，适用于转向传动应用。',
      specs: [
        { label: '类型', value: '垂臂' },
        { label: '款式', value: '牛鼻子' },
        { label: '材质', value: '锻造钢' },
        { label: '表面', value: '保护涂层' },
      ],
      applications: ['商用车辆', '转向维修', '目录参考'],
    },
  },
  'vertical-arm-145': {
    en: {
      title: '145 Vertical Arm',
      description: '145-type vertical arm for commercial steering linkage.',
      specs: [
        { label: 'Type', value: 'Vertical arm' },
        { label: 'Model', value: '145' },
        { label: 'Material', value: 'Forged steel' },
        { label: 'Finish', value: 'Anti-corrosion coating' },
      ],
      applications: ['Truck steering linkage', 'Replacement parts', 'Catalog display'],
    },
    zh: {
      title: '145 垂臂',
      description: '145 型垂臂，适用于商用车转向传动。',
      specs: [
        { label: '类型', value: '垂臂' },
        { label: '型号', value: '145' },
        { label: '材质', value: '锻造钢' },
        { label: '表面', value: '防腐涂层' },
      ],
      applications: ['卡车转向传动', '替换件', '目录展示'],
    },
  },
  'vertical-arm-175x0': {
    en: {
      title: '175X0 Vertical Arm',
      description: 'Vertical arm for the 175X0 platform, built for stable steering transfer and reliable installation.',
      specs: [
        { label: 'Type', value: 'Vertical arm' },
        { label: 'Model', value: '175X0' },
        { label: 'Material', value: 'Forged steel' },
        { label: 'Finish', value: 'Anti-corrosion coating' },
      ],
      applications: ['Truck steering systems', 'Heavy-duty repair', 'Catalog reference'],
    },
    zh: {
      title: '175X0 垂臂',
      description: '适用于 175X0 平台的垂臂，传动稳定，安装可靠。',
      specs: [
        { label: '类型', value: '垂臂' },
        { label: '型号', value: '175X0' },
        { label: '材质', value: '锻造钢' },
        { label: '表面', value: '防腐涂层' },
      ],
      applications: ['卡车转向系统', '重型维修', '目录展示'],
    },
  },
  'vertical-arm-kc100': {
    en: {
      title: 'KC100 Vertical Arm',
      description: 'KC100 vertical arm designed for stable steering control and long service life.',
      specs: [
        { label: 'Type', value: 'Vertical arm' },
        { label: 'Model', value: 'KC100' },
        { label: 'Material', value: 'Forged alloy steel' },
        { label: 'Finish', value: 'Protective coating' },
      ],
      applications: ['Commercial trucks', 'Steering repair', 'Aftermarket supply'],
    },
    zh: {
      title: 'KC100 垂臂',
      description: 'KC100 垂臂，适合稳定转向控制和长期使用。',
      specs: [
        { label: '类型', value: '垂臂' },
        { label: '型号', value: 'KC100' },
        { label: '材质', value: '锻造合金钢' },
        { label: '表面', value: '保护涂层' },
      ],
      applications: ['商用卡车', '转向维修', '后市场供应'],
    },
  },
};
