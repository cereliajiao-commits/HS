export interface ProductCard {
  id: string;
  category: string;
  brand: string;
  image: string;
  title: string;
  description: string;
  tag: string;
}

export const productCards: ProductCard[] = [
  // Steering Arms
  { id: 'faw-steering-arm', category: 'steering', brand: 'faw', image: '/images/products/faw-arm-0136.png', title: 'FAW Steering Arm Series', description: '0136, EKD40, A2Q left & right arms for FAW trucks', tag: 'Steering Arm' },
  { id: 'faw-tbar-arm', category: 'steering', brand: 'faw', image: '/images/products/faw-arm-ekd40.png', title: 'FAW T-Bar Arm Series', description: '14B, C8301, 012, 8T, 035 T-bar configurations', tag: 'Steering Arm' },
  { id: 'howo-steering-arm', category: 'steering', brand: 'howo', image: '/images/products/howo-arm.png', title: 'HOWO Steering Arms', description: '10-series, 09-series heavy-duty left & right arms', tag: 'Steering Arm' },
  { id: 'auman-steering-arm', category: 'steering', brand: 'auman', image: '/images/products/auman-arm.png', title: 'Auman Steering Arms', description: 'GTL, ETX series reinforced steering arms', tag: 'Steering Arm' },
  { id: 'dongfeng-curved-arm', category: 'steering', brand: 'dongfeng', image: '/images/products/steering-arm-1060.png', title: 'Dongfeng Curved Arms', description: 'G30, O40, 1060, V63, V71 curved arm variants', tag: 'Steering Arm' },
  { id: 'universal-curved-arm', category: 'steering', brand: 'others', image: '/images/products/steering-arm-588.png', title: 'Universal Curved Arms', description: '385, 588, 6700, Isuzu, Lifan curved arms', tag: 'Steering Arm' },
  { id: 'universal-tbar-arm', category: 'steering', brand: 'others', image: '/images/products/faw-arm-a2q.png', title: 'Universal T-Bar Arms', description: 'SBB150, 20HT, A45, Q1220, 7NSL T-bar arms', tag: 'Steering Arm' },
  // Steering Knuckles
  { id: '140-knuckle', category: 'knuckle', brand: 'others', image: '/images/products/knuckle-140.png', title: '140 / 1401 / 598 Knuckle', description: 'Left & right steering knuckles for medium-duty trucks', tag: 'Steering Knuckle' },
  { id: 'shaanxi-knuckle', category: 'knuckle', brand: 'shaanxi', image: '/images/products/knuckle-shaanxi.png', title: 'Shaanxi F3000 / F2000', description: 'Heavy-duty knuckles for Shaanxi truck series', tag: 'Steering Knuckle' },
  { id: 'steyr-knuckle', category: 'knuckle', brand: 'sinotruk', image: '/images/products/knuckle-howo.png', title: 'SINOTRUK Steyr Knuckle', description: 'Precision knuckle for Sinotruk Steyr platform', tag: 'Steering Knuckle' },
  { id: 'liberation-knuckle', category: 'knuckle', brand: 'liberation', image: '/images/products/knuckle-140.png', title: 'FAW Liberation Series', description: '54W, 1066, A3Q knuckles for Liberation trucks', tag: 'Steering Knuckle' },
  { id: 'howo16-knuckle', category: 'knuckle', brand: 'howo', image: '/images/products/knuckle-howo.png', title: 'HOWO 16-Model Knuckle', description: 'Reinforced knuckle for latest HOWO series', tag: 'Steering Knuckle' },
  { id: 'hualing-knuckle', category: 'knuckle', brand: 'others', image: '/images/products/knuckle-shaanxi.png', title: 'Hualing / Galaia Knuckle', description: 'Hualing A3, Galaia steering knuckles', tag: 'Steering Knuckle' },
  // Vertical Arms
  { id: 'vertical-arm-153', category: 'vertical', brand: 'dongfeng', image: '/images/products/vertical-arm-153.png', title: '153 / 145 / 1061 Drop Arm', description: 'Dongfeng series vertical arms', tag: 'Vertical Arm' },
  { id: 'str-vertical-arm', category: 'vertical', brand: 'sinotruk', image: '/images/products/vertical-arm-str.png', title: 'STR Single / Double Bridge', description: 'Steyr series heavy-duty vertical arms', tag: 'Vertical Arm' },
  { id: 'auman-drop-arm', category: 'vertical', brand: 'auman', image: '/images/products/auman-arm.png', title: 'Auman 06A0 Drop Arm', description: 'Foton Auman truck series drop arm', tag: 'Vertical Arm' },
  { id: 'universal-vertical-arm', category: 'vertical', brand: 'others', image: '/images/products/vertical-arm-153.png', title: 'Universal Vertical Arms', description: 'F13, F58, F44, 80A, 60W, A50A variants', tag: 'Vertical Arm' },
  // Drive Shafts
  { id: 'sprayer-shaft', category: 'shaft', brand: 'others', image: '/images/products/drive-shaft-sprayer.png', title: 'Sprayer Drive Shaft', description: 'Special-shaped tube for sprayers & spreaders', tag: 'Drive Shaft' },
  { id: 'harvester-shaft', category: 'shaft', brand: 'others', image: '/images/products/drive-shaft-harvester.png', title: 'Harvester Transmission Shaft', description: 'High-performance shafts for harvesters', tag: 'Drive Shaft' },
  { id: 'tillage-shaft', category: 'shaft', brand: 'others', image: '/images/products/drive-shaft-tillage.png', title: 'Tillage Machinery Shafts', description: 'Farming and tillage drive shaft series', tag: 'Drive Shaft' },
  { id: 'long-axis', category: 'shaft', brand: 'others', image: '/images/products/drive-shaft-sprayer.png', title: 'Long-Axis Series', description: 'Precision shafts with splined and keyed ends', tag: 'Drive Shaft' },
  // Suspension
  { id: 'jd-8b-suspension', category: 'suspension', brand: 'john-deere', image: '/images/products/john-deere-suspension.png', title: 'John Deere 8B-1404', description: 'Complete suspension assembly for 8B-1404', tag: 'Suspension' },
  { id: 'jd-904-suspension', category: 'suspension', brand: 'john-deere', image: '/images/products/john-deere-suspension.png', title: 'John Deere 904.1204', description: 'Suspension mechanism assembly for 904/1204', tag: 'Suspension' },
  { id: 'jd-754-suspension', category: 'suspension', brand: 'john-deere', image: '/images/products/john-deere-suspension.png', title: 'John Deere 5-754/654/950', description: 'Linkage assembly for 5-754, 654, 950 series', tag: 'Suspension' },
  // Agricultural
  { id: 'john-deere-axle', category: 'agri', brand: 'john-deere', image: '/images/products/john-deere-suspension.png', title: 'John Deere Axles', description: 'Precision drive axles and PTO shafts', tag: 'Agricultural' },
  { id: 'lifting-arm-clutch', category: 'agri', brand: 'others', image: '/images/products/drive-shaft-tillage.png', title: 'Lifting Arms & Clutches', description: 'ZED, KT lifting arms and transmission clutches', tag: 'Agricultural' },
  { id: 'taishan-arm', category: 'agri', brand: 'others', image: '/images/products/steering-arm-588.png', title: 'Taishan Steering Arms', description: 'Specialized arms for Taishan tractors', tag: 'Agricultural' },
];
