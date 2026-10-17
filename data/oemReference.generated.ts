export interface OemReference {
  productId: string;
  oemNumbers: string[];
  vehicleApplication: string;
  confidence: string;
  sourceUrl?: string;
  note?: string;
}

export const oemReferences: Record<string, OemReference> = {
  "vertical-arm-153": {
    "productId": "vertical-arm-153",
    "oemNumbers": [
      "34N-01011-A"
    ],
    "vehicleApplication": "东风153(EQ153)",
    "confidence": "高",
    "sourceUrl": "http://m.qipeiren.com/changjia/list.aspx?cid=448961",
    "note": "检索词“东风153 方向机垂臂 3412011/34N-01011”。汽配人网明确列出“34N-01011-A东风153方向机垂臂”。注：3412011-KD400为天龙/天锦/大力神较新车型，非经典153，故取34N-01011-A。"
  },
  "vertical-arm-str-double": {
    "productId": "vertical-arm-str-double",
    "oemNumbers": [
      "WG9123478029",
      "WG9100470235"
    ],
    "vehicleApplication": "重汽斯太尔(STR)双桥",
    "confidence": "中",
    "sourceUrl": "https://m.1688.com/kq/-B7BDCFF2BBFAB4B9B1DB.html",
    "note": "检索词“斯太尔 双桥 转向垂臂 WG97/WG9123478029”。1688见“重汽WG9123478029/2转向臂 斯太尔方向机垂臂”；Wai Kar官方STR转向目录(PDF)列转向摇臂(8098)=WG9100470235(4×2/6×2/6×4通用)。双桥/单桥在方向机垂臂本体上差异小，“四种”为长度/弧度变体，无法仅凭公开目录把某一号精确锁到双桥，故置信度中。"
  },
  "vertical-arm-a50a": {
    "productId": "vertical-arm-a50a",
    "oemNumbers": [
      "3003041-A50A"
    ],
    "vehicleApplication": "一汽解放J5/J6系列",
    "confidence": "中",
    "sourceUrl": "https://www.taobao.com/list/item/NGRDRnR3eUJDYThiYXNTMjQrSHZuQT09.htm",
    "note": "检索词“A50A 方向机垂臂 解放 东风 3003041”。淘宝“原厂解放J5/J6P/J6L/J6M方向机垂臂”颜色规格含“3003041-A50A 全长358mm”(并列76A/500/91W/87A/88U)。A50A为解放方向机垂臂后缀；未在第二来源交叉确认，置信度中。"
  },
  "vertical-arm-k36a0": {
    "productId": "vertical-arm-k36a0",
    "oemNumbers": [
      "3412021-K36A0"
    ],
    "vehicleApplication": "东风天龙/大力神(随动器第二垂臂)",
    "confidence": "高",
    "sourceUrl": "https://m.1688.com/cp/-B6ABB7E7CCECC1FAD7AACFF2BBFA.html",
    "note": "检索词“K36A0垂臂/东风天龙 随动器垂臂”。1688明确“东风天龙大力神方向机前四后八随动器垂臂3412021-K36A0第二垂臂”。图号后缀K36A0与产品代号完全对应。"
  },
  "vertical-arm-80a-60w": {
    "productId": "vertical-arm-80a-60w",
    "oemNumbers": [
      "3411010-80A"
    ],
    "vehicleApplication": "一汽解放J6单桥",
    "confidence": "高",
    "sourceUrl": "https://m.1688.com/offer/734584353382.html",
    "note": "检索词“80A 60W 方向机垂臂 解放”。1688商品“方向机垂臂3411010-80A FN112CA01D/WT 适用于解放J6单桥”。产品名80A:60W疑为同系列两种变体(80A已证实解放J6单桥)；60W为另一变体未单独核实到图号。"
  },
  "vertical-arm-violet": {
    "productId": "vertical-arm-violet",
    "oemNumbers": [],
    "vehicleApplication": "东风天龙(第一代，俗称“紫罗兰”)",
    "confidence": "中",
    "sourceUrl": "",
    "note": "检索词“东风紫罗兰 方向机垂臂 一弯两弯”。紫罗兰是东风天龙第一代的市场俗称，配件常与153/天龙/天锦/大力神并列出现；但未检索到“紫罗兰”这一俗称对应的专属垂臂OE图号。“一弯/两弯”指单弯/双弯两种臂形。能定车型无法定图号。"
  },
  "vertical-arm-f13": {
    "productId": "vertical-arm-f13",
    "oemNumbers": [
      "F13-3411010"
    ],
    "vehicleApplication": "王牌轻卡/东风轻卡(F13系列)",
    "confidence": "低",
    "sourceUrl": "http://www.zqpj.net/sell/show.php?itemid=1471763",
    "note": "检索词“F13 垂臂 方向机 王牌轻卡”。重卡配件网/重卡114列“F13-3411010,3401WP-010 王牌轻卡”动力转向器。F13为该系列转向器图号前缀；本品为垂臂本体，垂臂自身图号未直接查到，仅能弱关联到王牌轻卡方向机系列。"
  },
  "vertical-arm-f44": {
    "productId": "vertical-arm-f44",
    "oemNumbers": [
      "F144-3411010"
    ],
    "vehicleApplication": "东风140(尖头/教练车)",
    "confidence": "高",
    "sourceUrl": "https://item.m.jd.com/product/10203927636810.html",
    "note": "检索词“F44 垂臂 东风140 F144-3411010”。京东“丽田140教练车尖头车方向机垂臂…F44垂臂1个”；1688“东风140方向机垂臂F144-3411010”。F44即东风140垂臂的市场简称，对应图号F144-3411010。"
  },
  "vertical-arm-f58": {
    "productId": "vertical-arm-f58",
    "oemNumbers": [
      "F58"
    ],
    "vehicleApplication": "三环十通/东风嘉龙/力神/联达",
    "confidence": "中",
    "sourceUrl": "http://www.qipeiren.com/Supply/supply-5246329.htm",
    "note": "检索词“F58 方向机垂臂 十通 东风嘉龙”。汽配人网“F58十通东风嘉龙力神联达方向机垂臂”，型号即F58，适配东风商用车/特汽/特商/三环十通。为厂家型号而非完整OE前缀图号，故置信度中。"
  },
  "vertical-arm-aag3": {
    "productId": "vertical-arm-aag3",
    "oemNumbers": [],
    "vehicleApplication": "未识别",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "检索词“AAG3 转向垂臂/方向机 东风 图号”“\"AAG3\" 垂臂 汽配”。仅返回电子元器件(IC芯片AAG3PD、船型开关SRL91-26AAG3、注塑护热盖)等无关结果，无任何卡车垂臂匹配，无法推断车型与图号。"
  },
  "vertical-arm-str-single": {
    "productId": "vertical-arm-str-single",
    "oemNumbers": [
      "WG9123478029",
      "WG9100470235"
    ],
    "vehicleApplication": "重汽斯太尔(STR)单桥",
    "confidence": "中",
    "sourceUrl": "http://waikar.cn/nc/zq/STR%E8%BD%AC%E5%90%91%E6%93%8D%E7%BA%B5%E8%A3%85%E7%BD%AE.pdf",
    "note": "检索词“斯太尔 单桥 方向机垂臂 WG9123478029 双桥区别”。Wai Kar STR转向目录列转向摇臂(8098)=WG9100470235(4×2单桥/6×2/6×4共用)；1688另见WG9123478029斯太尔方向机垂臂。单桥与双桥在方向机垂臂本体上同属斯太尔ZF8098转向摇臂家族，“四种”为变体，无法精确区分单/双桥专属号。"
  },
  "vertical-arm-1061": {
    "productId": "vertical-arm-1061",
    "oemNumbers": [],
    "vehicleApplication": "东风1061(EQ1060类轻卡/中巴底盘)",
    "confidence": "中",
    "sourceUrl": "https://sg.world.taobao.com/product/%E6%96%B9%E5%90%91%E6%9C%BA%E6%8B%90%E8%87%82.htm",
    "note": "检索词“东风1061 EQ1061 方向机垂臂 零件号”“东风1061多利卡 垂臂”。淘宝见“东风1061方向机拐臂EQ1060方向拐臂五吨转向弯臂”及“东风1061超龙中巴/少林/时代/南骏/小霸王轻卡”。能定车型(1061轻卡/中巴底盘)，但未检索到该垂臂专属OE图号。"
  },
  "vertical-arm-tractor": {
    "productId": "vertical-arm-tractor",
    "oemNumbers": [
      "34150-11220"
    ],
    "vehicleApplication": "农机拖拉机(通用垂臂)",
    "confidence": "低",
    "sourceUrl": "https://traktor.com.pl/es/sistema-de-manejo/3196-brazo-de-direcci%C3%B3n-110-mm-2wd-derecho-kubota-l175-l185-l225-l245-l1500-l1501-l1801-l2000-5-02-105-06.html",
    "note": "检索词“拖拉机 方向机垂臂 3415011220”。1688见“3415011220/3415011225轮拖拉机方向机转向臂拉杆垂臂农机配件”；该号对应久保田Kubota L175/L225/L245等2WD转向臂。本品为通用拖拉机垂臂、无明确车型绑定，34150-11220仅为同品类参考号，弱关联。"
  },
  "vertical-arm-bullnose": {
    "productId": "vertical-arm-bullnose",
    "oemNumbers": [],
    "vehicleApplication": "未识别(“牛鼻子”俗称)",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "检索词“牛鼻子 垂臂 转向 红岩/乘龙/柳汽 俗称”“\"牛鼻子\" 垂臂 1688”。重汽配件网《重卡配件土名与标准名称对比》载“牛鼻子”=钢板弹簧座(海南/广西/山东)，与本品归类的转向垂臂不符；其余检索仅得牛鼻穿孔针/输送带接头等无关结果。无法确定车型与图号。"
  },
  "vertical-arm-145": {
    "productId": "vertical-arm-145",
    "oemNumbers": [],
    "vehicleApplication": "东风145(EQ145)",
    "confidence": "中",
    "sourceUrl": "http://m.1688.com/cp/-B6ABB7E7313533B7BDCFF2BBFA.html",
    "note": "检索词“东风145 EQ145 方向机垂臂 3412/34N-01011”。1688将“东风145东风153转向垂臂方向机垂臂M52”并列；cnsylphy目录列3412011-T0100/3412011-NC400为转向垂臂但未明确对应145。能定车型，未取得145专属垂臂OE号。"
  },
  "vertical-arm-175x0": {
    "productId": "vertical-arm-175x0",
    "oemNumbers": [],
    "vehicleApplication": "未识别",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "检索词“175X0 东风 转向垂臂 图号”“\"175X0\" 垂臂 天锦”。仅返回企业统一社会信用代码、股吧用户名等噪音，无任何卡车垂臂/转向配件匹配，无法推断车型与图号。"
  },
  "vertical-arm-kc100": {
    "productId": "vertical-arm-kc100",
    "oemNumbers": [
      "3412011-KC100"
    ],
    "vehicleApplication": "东风天锦(EQ1120)",
    "confidence": "高",
    "sourceUrl": "https://www.jd.com/hotitem/6728260999532d0e1fb5.html",
    "note": "检索词“KC100 垂臂 东风 转向垂臂”。京东“东风天锦EQ1120GA方向机转向垂臂3412011-KC100”。图号后缀KC100与产品代号直接对应。"
  },
  "drive-shaft-sinotruk-str": {
    "productId": "drive-shaft-sinotruk-str",
    "oemNumbers": [
      "199118310036",
      "AZ932831"
    ],
    "vehicleApplication": "重汽斯太尔STR (SINOTRUK STR)",
    "confidence": "中",
    "sourceUrl": "http://www.zqpj.com/peijian/show/22167/",
    "note": "关键词'斯太尔 STR 传动轴总成 零件号 重汽'。zqpj重汽配件网列出图号199118310036传动轴（91系为斯太尔经典图号）；alibaba列AZ932831中国重汽传动轴。STR车型明确但无单一直奔总成号，取中。"
  },
  "drive-shaft-sinotruk": {
    "productId": "drive-shaft-sinotruk",
    "oemNumbers": [
      "WG9014310125"
    ],
    "vehicleApplication": "中国重汽 (SINOTRUK 通用)",
    "confidence": "中",
    "sourceUrl": "https://www.1688.com/chanpin/-BCC3C4CFD6D8C6FBB4ABB6AFD6E1.html",
    "note": "关键词'重汽 传动轴总成 图号'。1688列'WG9014310125中桥传动轴/后桥传动轴/承接外贸订单重汽陕汽配件豪沃斯太尔传动轴'。SINOTRUK为泛指，取通用号，中。"
  },
  "drive-shaft-howo": {
    "productId": "drive-shaft-howo",
    "oemNumbers": [
      "WG9014310125",
      "AZ9557310625",
      "AZ9716310615"
    ],
    "vehicleApplication": "重汽豪沃 HOWO",
    "confidence": "高",
    "sourceUrl": "https://chinese.alibaba.com/g/oem-sinotruk-howo-parts.html",
    "note": "关键词'重汽豪沃 传动轴总成 WG97 零件号 图号'。alibaba明确'OEM卡车传动轴总成WG9014310125适用于中国重汽豪沃371/380/A7/TX/T5G'；1688列AZ9557310625豪沃中桥至后桥传动轴。车型与总成号直接对应，高。"
  },
  "drive-shaft-dongfeng-tianlong": {
    "productId": "drive-shaft-dongfeng-tianlong",
    "oemNumbers": [
      "2201010-KJ2H0",
      "2201010-T2201"
    ],
    "vehicleApplication": "东风天龙 (Dongfeng Tianlong)",
    "confidence": "高",
    "sourceUrl": "https://spanish.alibaba.com/product-detail/Dongfeng-Truck-Parts-Propeller-Shaft-with-1600436193315.html",
    "note": "关键词'东风天龙 传动轴总成 2201 图号 零件号'。alibaba产品页OE号2201010-KJ2H0东风卡车传动轴；china-truck-parts.ru东风底盘目录列'传动轴带滑动叉总成2201010-T2201'。东风2201xx为传动轴总成标准格式，高。"
  },
  "drive-shaft-shaanxi-delong": {
    "productId": "drive-shaft-shaanxi-delong",
    "oemNumbers": [
      "DZ9114312067",
      "DZ9114311067"
    ],
    "vehicleApplication": "陕汽德龙 (Shacman Delong)",
    "confidence": "高",
    "sourceUrl": "http://m.1688.com/offer/934559996060.html",
    "note": "关键词'陕汽德龙 传动轴总成 DZ9 图号 零件号'。1688产品页明确'DZ9114312067适用于陕汽德龙 传动轴总成 670长'；alibaba列DZ9114311067 Shacman Rear Axle Drive Shaft。车型与号直接对应，高。"
  },
  "drive-shaft-str0125": {
    "productId": "drive-shaft-str0125",
    "oemNumbers": [],
    "vehicleApplication": "重汽 STR0125",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "关键词'重汽 STR0125 传动轴总成 图号 AZ'。'STR0125'疑为出口商自定产品规格/长度号，非主机厂原厂图号；检索未找到STR0125对应任何重汽OE图号。不编造，留空。"
  },
  "drive-shaft-auman": {
    "productId": "drive-shaft-auman",
    "oemNumbers": [
      "H0220260000A0A0256A",
      "LG9720311763",
      "LG9719311080"
    ],
    "vehicleApplication": "福田欧曼 Auman",
    "confidence": "高",
    "sourceUrl": "http://www.zqpj.com/sell/show/4901/",
    "note": "关键词'欧曼 Auman 传动轴总成 H0 零件号 图号'。zqpj列'传动轴带中间支撑总成H0220260000A0A0256A'（H0系为福田戴姆勒/欧曼图号）；alibaba列'Rear Drive Shaft for Foton Auman Truck LG9720311763/LG9719311080'。车型与号直接对应，高。"
  },
  "drive-shaft-dongfeng-balong": {
    "productId": "drive-shaft-dongfeng-balong",
    "oemNumbers": [
      "TU1461WE-2203010",
      "4M5YM40D33H0A-2201010"
    ],
    "vehicleApplication": "东风霸龙 (柳汽乘龙霸龙)",
    "confidence": "中",
    "sourceUrl": "http://m.qipeiren.com/offer/8889519.htm",
    "note": "关键词'东风霸龙 传动轴总成 零件号 图号 LZ'。汽配人网柳汽乘龙/霸龙配件明细列'TU1461WE-2203010传动轴及滑动叉总成'、'4M5YM40D33H0A-2201010传动轴及滑动叉总成'。霸龙=柳汽乘龙，车型明确，号为柳汽物料图号，中。"
  },
  "drive-shaft-shaanxi-aolong": {
    "productId": "drive-shaft-shaanxi-aolong",
    "oemNumbers": [
      "DZ9114312072",
      "DZ9114313164"
    ],
    "vehicleApplication": "陕汽奥龙 (Shacman Aolong)",
    "confidence": "高",
    "sourceUrl": "http://detail.cn.hisupplier.com/product/1824907/",
    "note": "关键词'陕汽奥龙 传动轴总成 DZ 零件号 图号'。hisupplier产品页明确'陕汽德龙 奥龙传动轴DZ9114312072传动轴总成'；zqpj列DZ9114313164传动轴（陕汽DZ系）。奥龙车型与DZ号对应，高。"
  },
  "new-steering-arm-001": {
    "productId": "new-steering-arm-001",
    "oemNumbers": [],
    "vehicleApplication": "东风EQ1045系列轻卡",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "1045弯臂，检索'东风1045 转向节臂 零件号'未找到对应图号；东风轻卡转向节臂常见30D/30N系列，1045为老款轻卡底盘代号"
  },
  "new-steering-arm-002": {
    "productId": "new-steering-arm-002",
    "oemNumbers": [],
    "vehicleApplication": "东风EQ1060系列轻卡",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "1060-2弯臂，检索'东风1060 转向弯臂 图号'仅见淘宝'东风1061方向机拐臂EQ1060方向拐臂五吨转向弯臂'，无具体OE图号"
  },
  "new-steering-arm-003": {
    "productId": "new-steering-arm-003",
    "oemNumbers": [],
    "vehicleApplication": "东风EQ1060系列轻卡",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "1060弯直臂，同1060系列，未检索到专属图号；JD见'130 1041 1060 1061 140江淮轻卡农用车转向横直拉杆'通用件"
  },
  "new-steering-arm-004": {
    "productId": "new-steering-arm-004",
    "oemNumbers": [],
    "vehicleApplication": "东风EQ1061轻卡",
    "confidence": "中",
    "sourceUrl": "https://mobile-phone.taobao.com/chanpin/bdab1bc07615179424f04629aa2d0879.html",
    "note": "1061转直臂，淘宝见'东风1061方向机拐臂EQ1060方向拐臂五吨转向弯臂方向机转向臂直臂'，车型明确但无具体OE图号；抖音亦见'1061转向臂'"
  },
  "new-steering-arm-005": {
    "productId": "new-steering-arm-005",
    "oemNumbers": [
      "3001034-X141"
    ],
    "vehicleApplication": "青岛解放赛龙/赛虎(10款)",
    "confidence": "高",
    "sourceUrl": "https://www.taobao.com/list/item/wap/544332081886.htm",
    "note": "10款赛龙弯臂，淘宝原厂'3001034-X141青岛解放赛龙赛虎转向节上臂直拉杆臂转向弯臂'；用户自有站hbhsdz.com亦收录此号为'解放赛龙-转向直拉杆臂(加强型)3001034-X141'"
  },
  "new-steering-arm-006": {
    "productId": "new-steering-arm-006",
    "oemNumbers": [],
    "vehicleApplication": "北京BJ130/1041轻卡农用车",
    "confidence": "中",
    "sourceUrl": "https://pcdetail.taobao.com/eng3RENGZFJLUThyck1ySjZqZHZ1Zz09.html",
    "note": "130直臂，淘宝见'北京直臂BJ130 1041 1060农用车转向节前桥转向直臂弯臂羊角轴'，车型明确(BJ130)但无具体OE图号"
  },
  "new-steering-arm-007": {
    "productId": "new-steering-arm-007",
    "oemNumbers": [
      "WB136"
    ],
    "vehicleApplication": "东风多利卡/福瑞卡/金霸(K938前桥)",
    "confidence": "中",
    "sourceUrl": "https://pcdetail.taobao.com/OWlleFdJb2l1WEtycm9WSWFvb3M2QT09.html",
    "note": "136弯臂，淘宝'东风多利卡福瑞卡金霸湖湖桥K938前桥30.59Q30/Q40转向节臂'颜色分类含'WB136左转向节臂'，弱推断136对应WB136图号"
  },
  "new-steering-arm-008": {
    "productId": "new-steering-arm-008",
    "oemNumbers": [
      "30D-01044"
    ],
    "vehicleApplication": "东风EQ140/145/1094",
    "confidence": "高",
    "sourceUrl": "https://www.taobao.com/list/item/652557194978.htm",
    "note": "140弯直臂，淘宝'东风140转向节上臂（斜弯臂）'型号30D-01044；汽配人网'30D-01044东风140 1094 145转向节上节臂直拉杆臂'，车型+部位+图号明确"
  },
  "new-steering-arm-009": {
    "productId": "new-steering-arm-009",
    "oemNumbers": [],
    "vehicleApplication": "东风福瑞卡14BY",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "14BY弯臂，检索'东风福瑞卡14BY转向节臂'仅见通用福瑞卡转向节拐臂弯臂商品，无14BY专属图号"
  },
  "new-steering-arm-010": {
    "productId": "new-steering-arm-010",
    "oemNumbers": [
      "30N-01044"
    ],
    "vehicleApplication": "东风EQ153/东风德纳",
    "confidence": "高",
    "sourceUrl": "http://www.qipeiren.com/Supply/supply-1856095.htm",
    "note": "153转直臂，汽配人网'东风德纳天龙ABS盘式制动转向节直拉杆臂30N-01044'；供应商网'东风153转向直拉杆臂30N-01044'，车型+部位+图号明确"
  },
  "new-steering-arm-011": {
    "productId": "new-steering-arm-011",
    "oemNumbers": [],
    "vehicleApplication": "未确认(疑江铃/庆铃轻卡)",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "1cco弯臂，'1cco'疑为1CCO车型代号或1CCO，检索无匹配；可能为江铃顺达/庆铃N系列某款内部代号"
  },
  "new-steering-arm-012": {
    "productId": "new-steering-arm-012",
    "oemNumbers": [],
    "vehicleApplication": "未确认",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "385弯臂，检索'385转向弯臂'无明确车型匹配；可能为某轻卡前桥代号或农机配件"
  },
  "new-steering-arm-013": {
    "productId": "new-steering-arm-013",
    "oemNumbers": [],
    "vehicleApplication": "福田时代608(疑)",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "608弯臂，疑为福田时代金刚608或类似轻卡，检索'福田时代608转向节臂'未找到专属图号；福田时代轻卡转向节臂常见1104330000022"
  },
  "new-steering-arm-014": {
    "productId": "new-steering-arm-014",
    "oemNumbers": [],
    "vehicleApplication": "未确认",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "6700弯臂，检索无明确匹配；可能为某皮卡/SUV或轻卡底盘代号"
  },
  "new-steering-arm-015": {
    "productId": "new-steering-arm-015",
    "oemNumbers": [
      "3412021-K36A0"
    ],
    "vehicleApplication": "东风天龙/大力神(前四后八)",
    "confidence": "中",
    "sourceUrl": "http://wap.hkqpw.cn/sell/show/1968416/",
    "note": "K36弯臂，恒科汽配网'东风天龙天锦大力神方向机前四后八第二随动器垂臂3412021-K36A0'；K36与图尾K36A0对应，但该件为随动器垂臂(idler arm)而非转向节弯臂，部位存疑"
  },
  "new-steering-arm-016": {
    "productId": "new-steering-arm-016",
    "oemNumbers": [
      "KA-005"
    ],
    "vehicleApplication": "三菱扶桑Canter(Fuso)",
    "confidence": "中",
    "sourceUrl": "",
    "note": "KA005弯臂，汽配目录见'Japanese Truck Parts for Fuso Canter Steering Arm/knuckle Arm KA-005'；KA005即扶桑Canter转向臂OEM代号，但无具体Fuso原厂图号"
  },
  "new-steering-arm-017": {
    "productId": "new-steering-arm-017",
    "oemNumbers": [],
    "vehicleApplication": "东风凯普特(疑)",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "Q448弯臂，检索'Q448转向节臂'无匹配；Q字头为东风轻卡前桥代号系列(如Q30/Q40)，Q448可能为某款东风凯普特/多利卡前桥转向臂，未找到公开图号"
  },
  "new-steering-arm-018": {
    "productId": "new-steering-arm-018",
    "oemNumbers": [],
    "vehicleApplication": "东风轻卡(湖桥系列)",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "WB1058弯臂，WB字头为东风湖桥系列转向节臂代号(如WB136)，WB1058未检索到公开图号；同系列K938前桥见30.59Q30/Q40转向节臂"
  },
  "new-steering-arm-019": {
    "productId": "new-steering-arm-019",
    "oemNumbers": [
      "AZ9719411021"
    ],
    "vehicleApplication": "重汽豪沃/金王子",
    "confidence": "中",
    "sourceUrl": "",
    "note": "丁字臂一桥二桥，汽配目录见'Howo Golden Prince Steering Knuckle Arm, Second Axle T-shaped Pull Arm Support AZ9719411021'；AZ9719411021为豪沃金王子二桥丁字臂/摆臂支架"
  },
  "new-steering-arm-020": {
    "productId": "new-steering-arm-020",
    "oemNumbers": [
      "30.59Q40A-01041"
    ],
    "vehicleApplication": "东风多利卡/福瑞卡/金霸/东风之星",
    "confidence": "高",
    "sourceUrl": "http://www.qipeiren.com/tupian/tupian-36297.htm",
    "note": "东风Q30/Q40弯臂，汽配人网'东风多利卡金霸/东风之星左转向节臂30.59Q40A-01041'；淘宝'东风多利卡福瑞卡金霸湖湖桥K938前桥30.59Q30/Q40转向节臂'，Q30/Q40与图号前缀一致"
  },
  "new-steering-arm-021": {
    "productId": "new-steering-arm-021",
    "oemNumbers": [
      "8972107710",
      "8972107712"
    ],
    "vehicleApplication": "五十铃NPR/NQR/NKR(庆铃100P/600P)",
    "confidence": "高",
    "sourceUrl": "http://m.1688.com/offer/965223100543.html",
    "note": "五十铃弯臂，1688'五十铃NPR NQR NKR转向节弯臂方向节弯臂8972107710'；Alibaba'Isuzu 8972107712 NPR 4HK1 steering knuckle arm'，OE号明确"
  },
  "new-steering-arm-022": {
    "productId": "new-steering-arm-022",
    "oemNumbers": [],
    "vehicleApplication": "福田公狮(疑福田时代/奥铃)",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "公狮弯臂，'公狮'疑为福田时代公狮系列轻卡或福田某车型别名，检索'福田公狮转向节臂'未找到专属图号；福田轻卡转向节臂常见1104330000022"
  },
  "new-steering-arm-023": {
    "productId": "new-steering-arm-023",
    "oemNumbers": [
      "3001034A8E/A"
    ],
    "vehicleApplication": "解放六平柴/151/J6L",
    "confidence": "中",
    "sourceUrl": "https://mobile-phone.taobao.com/chanpin/6289a68946c32ee8fa971613091cbd18630e7d20af798b568b5de36142862ea1.html",
    "note": "六平弯直臂，淘宝见'解放转向弯臂六平 151 J6L转向节上臂小J6 3001034A8E/A直拉杆臂'；抖音亦见'九平弯臂、六平弯臂'；3001034A8E/A为解放六平系列转向节上臂图号"
  },
  "new-steering-arm-024": {
    "productId": "new-steering-arm-024",
    "oemNumbers": [],
    "vehicleApplication": "十六平左右直臂（通用/16mm平端面直臂）",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "关键词'十六平左右直臂'，属通用规格直臂，未匹配到主机厂图号"
  },
  "new-steering-arm-025": {
    "productId": "new-steering-arm-025",
    "oemNumbers": [],
    "vehicleApplication": "华川农用车-2粗细弯臂（川路/华川1041平台）",
    "confidence": "中",
    "sourceUrl": "https://mobile-phone.taobao.com/chanpin/546b35423fa02b90d009ca6d77693d0e.html",
    "note": "淘宝商家 listing '英田转向拐臂 YT1060弯臂华川1041汽车专用拐臂'，车型明确但无原厂数字图号"
  },
  "new-steering-arm-026": {
    "productId": "new-steering-arm-026",
    "oemNumbers": [],
    "vehicleApplication": "华川1041弯直臂（BJ1041/EQ1060农用车平台）",
    "confidence": "中",
    "sourceUrl": "https://tw.1688.com/item/-31303431D7AACFF2BDDA.html",
    "note": "1688 '1041转向节'批发页，车型为BJ1041/江淮农用车平台，未找到华川专属OE号"
  },
  "new-steering-arm-027": {
    "productId": "new-steering-arm-027",
    "oemNumbers": [],
    "vehicleApplication": "四川南骏汽车 转向正反臂",
    "confidence": "中",
    "sourceUrl": "http://www.nanjunauto.com/wxfw.html?l=zh_cn&page=400&page=202",
    "note": "南骏官网仅列配件手册销售页，未公开图号；未检索到南骏转向弯臂OE号"
  },
  "new-steering-arm-028": {
    "productId": "new-steering-arm-028",
    "oemNumbers": [],
    "vehicleApplication": "外贸弯臂（出口通用型）",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "纯外贸通用件，无指定车型，无法反查OE"
  },
  "new-steering-arm-029": {
    "productId": "new-steering-arm-029",
    "oemNumbers": [],
    "vehicleApplication": "外贸弯臂1（出口通用型）",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "纯外贸通用件1号，无指定车型，无法反查OE"
  },
  "new-steering-arm-030": {
    "productId": "new-steering-arm-030",
    "oemNumbers": [],
    "vehicleApplication": "五征奥驰 弯臂（四种）",
    "confidence": "中",
    "sourceUrl": "http://www.wuzhengpeijian.cn/23/supply_details_1313555154.html",
    "note": "五征集团官网配件频道，奥驰D1/D2/D3/D5系列弯臂，未公开具体图号"
  },
  "new-steering-arm-031": {
    "productId": "new-steering-arm-031",
    "oemNumbers": [],
    "vehicleApplication": "拖拉机前桥转向弯臂（农机通用）",
    "confidence": "中",
    "sourceUrl": "https://tw.1688.com/pic/-D7AACFF2BDDAB1DBCDBCC6AC.html",
    "note": "1688转向节臂图库含'东风农机200/250/300/350/400拖拉机前轮转向臂'，通用农机件无统一OE"
  },
  "new-steering-arm-032": {
    "productId": "new-steering-arm-032",
    "oemNumbers": [],
    "vehicleApplication": "拖车钩（牵引钩，非转向臂）",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "产品图注为拖车钩，与转向节臂无关，未检索对应OE"
  },
  "new-steering-arm-033": {
    "productId": "new-steering-arm-033",
    "oemNumbers": [],
    "vehicleApplication": "福田时代金刚 转向弯臂",
    "confidence": "中",
    "sourceUrl": "http://www.qipeiren.com/Supply/supply-1819280.htm",
    "note": "汽配人网时代金刚方向机M65-3411010；淘宝有时代金刚转向节总成1104630002057，但弯臂OE号未直接命中"
  },
  "new-steering-arm-034": {
    "productId": "new-steering-arm-034",
    "oemNumbers": [
      "DX-3001544",
      "1M3YJ18A51D0B-3001044"
    ],
    "vehicleApplication": "东风柳汽乘龙 转向弯臂",
    "confidence": "高",
    "sourceUrl": "http://www.qipeiren.com/Supply/supply-3150711.htm",
    "note": "汽配人网：柳汽龙卡DX-3001544转向节臂(上*DX)；乘龙官网1M3YJ18A51D0B-3001044二轴垂臂"
  },
  "new-steering-arm-035": {
    "productId": "new-steering-arm-035",
    "oemNumbers": [
      "H0340180111A0"
    ],
    "vehicleApplication": "福田欧曼-1 左右转向臂",
    "confidence": "中",
    "sourceUrl": "http://m.fotondaimler.cn/ETX-BJ3317DPPHC.html",
    "note": "福戴官网ETX配件表：H0340180111A0转向摇臂；欧曼转向节总成SH3001015/6-N007，弯臂左右具体号未直接命中"
  },
  "new-steering-arm-036": {
    "productId": "new-steering-arm-036",
    "oemNumbers": [],
    "vehicleApplication": "福田欧曼加强型 左右转向臂",
    "confidence": "中",
    "sourceUrl": "https://www.fotondaimler.net/nd.jsp?id=249",
    "note": "福戴义和5T鼓式前桥配件明细页存在，但未抓到具体加强弯臂图号；车型明确"
  },
  "new-steering-arm-037": {
    "productId": "new-steering-arm-037",
    "oemNumbers": [
      "3003400N"
    ],
    "vehicleApplication": "江淮康铃 转向弯臂",
    "confidence": "高",
    "sourceUrl": "http://m.1688.com/offer/969938956523.html",
    "note": "1688商家listing：江淮骏铃帅铃康铃威铃转向节弯臂6700羊角拐臂，型号3003400N"
  },
  "new-steering-arm-038": {
    "productId": "new-steering-arm-038",
    "oemNumbers": [],
    "vehicleApplication": "浮桥左右臂（车型待确认）",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "'浮桥左右臂'未匹配到明确主机厂车型，可能为某轻卡辅助转向桥俗称，无OE号"
  },
  "new-steering-arm-039": {
    "productId": "new-steering-arm-039",
    "oemNumbers": [
      "5801754529",
      "5801754530",
      "5801754527",
      "5801754528"
    ],
    "vehicleApplication": "上汽红岩杰狮/新金刚 左右转向横拉杆臂",
    "confidence": "高",
    "sourceUrl": "https://pcdetail.taobao.com/ZHhvdkU5eDArTDJ3R2ZvTktGeG9EQT09.html",
    "note": "淘宝上汽红岩原厂：杰狮新金刚前桥横拉杆臂左5801754529/右5801754530(A款)，左5801754527/右5801754528(B款)"
  },
  "new-steering-arm-040": {
    "productId": "new-steering-arm-040",
    "oemNumbers": [],
    "vehicleApplication": "联合重卡（联合卡车）左右转向臂",
    "confidence": "中",
    "sourceUrl": "https://www.ctruck.com.cn/brand",
    "note": "联合重卡官网品牌页，未公开前桥转向臂图号；招标页未抓到具体零件"
  },
  "new-steering-arm-041": {
    "productId": "new-steering-arm-041",
    "oemNumbers": [],
    "vehicleApplication": "联合重卡左右转向臂（侧面图，与66同款反面）",
    "confidence": "中",
    "sourceUrl": "https://www.ctruck.com.cn/brand",
    "note": "同66联合重卡，仅为侧面/反面补充图，无新增OE信息"
  },
  "new-steering-arm-042": {
    "productId": "new-steering-arm-042",
    "oemNumbers": [
      "YT1060"
    ],
    "vehicleApplication": "英田汽车（YT1060）转向弯臂",
    "confidence": "中",
    "sourceUrl": "https://mobile-phone.taobao.com/chanpin/546b35423fa02b90d009ca6d77693d0e.html",
    "note": "淘宝listing：英田汽车方向拐臂YT1060弯臂，与华川1041通用；YT1060为车型代号非严格OE"
  },
  "new-steering-arm-043": {
    "productId": "new-steering-arm-043",
    "oemNumbers": [
      "AZ9719413003",
      "AZ9719413004"
    ],
    "vehicleApplication": "重汽豪沃09款 左右转向横拉杆臂",
    "confidence": "高",
    "sourceUrl": "http://www.zqpj.com/mall/show/5798/",
    "note": "重汽配件网：豪沃09款转向横拉杆臂左AZ9719413003；右对应AZ9719413004"
  },
  "new-steering-arm-044": {
    "productId": "new-steering-arm-044",
    "oemNumbers": [
      "AZ9719413003",
      "AZ9719413004"
    ],
    "vehicleApplication": "重汽豪沃10款 左右转向横拉杆臂",
    "confidence": "中",
    "sourceUrl": "https://www.1688.com/chanpin/-C6FBB3B5C5E4BCFED7AACFF2B1DB.html",
    "note": "1688商家称'重汽豪沃10款转向横拉杆臂左AZ9719413003'，与09款号疑似共用，需实物核对"
  },
  "new-steering-arm-045": {
    "productId": "new-steering-arm-045",
    "oemNumbers": [
      "3001034-X141",
      "3001032-X141"
    ],
    "vehicleApplication": "一汽解放青岛赛龙 弯臂/直臂",
    "confidence": "高",
    "sourceUrl": "http://www.qipeiren.com/Supply/supply-4953364.htm",
    "note": "汽配人网：解放赛龙右直臂3001032-X141；淘宝：3001034-X141赛龙赛虎转向节上臂/弯臂"
  },
  "new-steering-arm-046": {
    "productId": "new-steering-arm-046",
    "oemNumbers": [
      "1104330000022"
    ],
    "vehicleApplication": "福田瑞沃/雷沃 转向节臂",
    "confidence": "高",
    "sourceUrl": "https://tw.1688.com/item/-C6FBB3B5D7AACFF2BDDAB1DB.html",
    "note": "1688：福田汽车配件1104330000022左转向节臂，适配时代轻卡/奥铃/欧航/瑞沃"
  },
  "new-steering-knuckle-001": {
    "productId": "new-steering-knuckle-001",
    "oemNumbers": [],
    "vehicleApplication": "东风EQ1041轻卡",
    "confidence": "未查到",
    "sourceUrl": "https://www.taobao.com/list/item/wap/589055025179.htm",
    "note": "关键词:东风1041/羊角左右。仅查到横拉杆球头(1041球头20*18)及主销类配件，无转向节本体图号，留空不编造。"
  },
  "new-steering-knuckle-002": {
    "productId": "new-steering-knuckle-002",
    "oemNumbers": [],
    "vehicleApplication": "东风EQ1060轻卡",
    "confidence": "未查到",
    "sourceUrl": "https://tw.1688.com/item/-31303630D7AACFF2BDDA.html",
    "note": "关键词:东风1060 转向节 羊角。仅查到EQ1060转向节修理包(主销/KING PIN KIT)，无转向节本体OE图号。"
  },
  "new-steering-knuckle-003": {
    "productId": "new-steering-knuckle-003",
    "oemNumbers": [],
    "vehicleApplication": "东风EQ1061",
    "confidence": "未查到",
    "sourceUrl": "https://taizhou.1688.com/shop/m/offer/1045232790334.html",
    "note": "关键词:东风1061 前驱 转向节 羊角。仅查到1061主销修理包(52*248)及EQ1061羊角螺丝，无转向节本体图号。"
  },
  "new-steering-knuckle-004": {
    "productId": "new-steering-knuckle-004",
    "oemNumbers": [],
    "vehicleApplication": "东风EQ1061(ABS版)",
    "confidence": "未查到",
    "sourceUrl": "https://taizhou.1688.com/shop/m/offer/1045232790334.html",
    "note": "关键词:1061 ABS 转向节。与75同平台仅多ABS齿圈，未查到ABS版转向节本体OE号，留空。"
  },
  "new-steering-knuckle-005": {
    "productId": "new-steering-knuckle-005",
    "oemNumbers": [
      "30D-01015(左)",
      "30D-01016(右)"
    ],
    "vehicleApplication": "东风EQ140",
    "confidence": "高",
    "sourceUrl": "https://m.cn-truck.com/peijian/show_2325_208.html",
    "note": "关键词:东风EQ140 转向节 30D-01015。王力汽车网明确'140转向节左/右30D-01015/01016'；Alibaba另有30D5-01015变体。"
  },
  "new-steering-knuckle-006": {
    "productId": "new-steering-knuckle-006",
    "oemNumbers": [
      "30D-01015(左)",
      "30D-01016(右)"
    ],
    "vehicleApplication": "东风EQ140(ABS版)",
    "confidence": "中",
    "sourceUrl": "https://m.cn-truck.com/peijian/show_2325_208.html",
    "note": "关键词:140ABS 转向节。沿用EQ140本体30D-01015/01016，ABS版仅带ABS信号齿圈，未单独证ABS专属图号。"
  },
  "new-steering-knuckle-007": {
    "productId": "new-steering-knuckle-007",
    "oemNumbers": [
      "30D-01016(右)"
    ],
    "vehicleApplication": "东风EQ140(右侧)",
    "confidence": "高",
    "sourceUrl": "https://m.cn-truck.com/peijian/show_2325_208.html",
    "note": "img_cn=140羊角右。关键词:140 转向节 右。30D-01016为EQ140右转向节图号。"
  },
  "new-steering-knuckle-008": {
    "productId": "new-steering-knuckle-008",
    "oemNumbers": [],
    "vehicleApplication": "东风EQ145",
    "confidence": "中",
    "sourceUrl": "http://www.taobao.com/list/item/598175090504.htm",
    "note": "关键词:东风145 转向节。查到的30D5-01041/01042为'转向节左右臂(拐臂)'，非转向节本体；本体OE图号未直接确认，故oem留空。"
  },
  "new-steering-knuckle-009": {
    "productId": "new-steering-knuckle-009",
    "oemNumbers": [
      "30N-01015(左)",
      "30N-01016(右)"
    ],
    "vehicleApplication": "东风EQ153",
    "confidence": "高",
    "sourceUrl": "https://www.taobao.com/list/item/523321793282.htm",
    "note": "关键词:东风153 转向节 羊角 30N。备件目录及淘宝'153前桥30N-01015转向节羊角轴'一致；天龙/天锦/大力神同系列。"
  },
  "new-steering-knuckle-010": {
    "productId": "new-steering-knuckle-010",
    "oemNumbers": [],
    "vehicleApplication": "598羊角(待确认)",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "关键词:598 转向节 羊角。'598'为桥型/市场俗称，未检索到对应主机厂OE图号，留空。"
  },
  "new-steering-knuckle-011": {
    "productId": "new-steering-knuckle-011",
    "oemNumbers": [],
    "vehicleApplication": "RW140(待确认)",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "关键词:RW140 转向节。RW疑为瑞沃/车桥厂内部码，未检索到对应主机厂OE图号，留空。"
  },
  "new-steering-knuckle-012": {
    "productId": "new-steering-knuckle-012",
    "oemNumbers": [],
    "vehicleApplication": "RW145(待确认)",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "关键词:RW145 转向节。与RW140同系列车桥厂内部码，未检索到主机厂OE图号，留空。"
  },
  "new-steering-knuckle-013": {
    "productId": "new-steering-knuckle-013",
    "oemNumbers": [],
    "vehicleApplication": "东风天龙/大力神系(Z01桥型)",
    "confidence": "低",
    "sourceUrl": "https://taizhou.1688.com/shop/m/offer/993637335699.html",
    "note": "关键词:Z01 转向节 30。与ZB1同属东风天龙/大力神30ZBx-01015系列；汽配人另见3001015-NZ01P。未直接确认Z01本体号，留空待核。"
  },
  "new-steering-knuckle-014": {
    "productId": "new-steering-knuckle-014",
    "oemNumbers": [
      "30ZB1-01015"
    ],
    "vehicleApplication": "东风天龙/大力神(ZB1桥型)",
    "confidence": "高",
    "sourceUrl": "https://taizhou.1688.com/shop/m/offer/993637335699.html",
    "note": "关键词:30ZB1-01015 转向节。1688明确'30ZB1-01015/30ZB3-01015东风天龙大力神转向节总成'。"
  },
  "new-steering-knuckle-015": {
    "productId": "new-steering-knuckle-015",
    "oemNumbers": [
      "3001017A3-A(左)",
      "3001011-A3"
    ],
    "vehicleApplication": "华菱重卡A3",
    "confidence": "高",
    "sourceUrl": "http://www.zqpj.com/sell/show/872643/",
    "note": "关键词:华菱A3 转向节。重汽配件网'3001017A3-A 左转向节 车型华菱'；汽配人另见3001011-A3三一华菱转向节。"
  },
  "new-steering-knuckle-016": {
    "productId": "new-steering-knuckle-016",
    "oemNumbers": [],
    "vehicleApplication": "江淮格尔发",
    "confidence": "中",
    "sourceUrl": "https://jactruckparts.com/jac-front-axle-assembly/",
    "note": "关键词:江淮格尔发 转向节。JAC目录仅查到转向节臂SH3001041-N998/042，淘宝见主销修理包Y4AA0；转向节本体OE号未直接确认，留空。"
  },
  "new-steering-knuckle-017": {
    "productId": "new-steering-knuckle-017",
    "oemNumbers": [
      "AZ4095410005"
    ],
    "vehicleApplication": "上汽红岩杰狮",
    "confidence": "高",
    "sourceUrl": "http://m.1688.com/offer_search/-BDF0CDF5D7D3B4ABB6AFD6E1.html",
    "note": "关键词:红岩杰狮 转向节 羊角轴总成。1688'红岩金刚/杰狮转向节羊角轴总成AZ4095410005'；另见右转向节SH3001018-N017、9.5T羊角3001-9320。"
  },
  "new-steering-knuckle-018": {
    "productId": "new-steering-knuckle-018",
    "oemNumbers": [
      "3001015-1066/B(左)"
    ],
    "vehicleApplication": "一汽解放(1066桥型)",
    "confidence": "高",
    "sourceUrl": "http://www.zqpj.com/peijian/show/771945/",
    "note": "关键词:解放 转向节 3001015-1066。重汽配件网明确'左转向节及衬套总成 图号3001015-1066/B'。"
  },
  "new-steering-knuckle-019": {
    "productId": "new-steering-knuckle-019",
    "oemNumbers": [
      "3001015-54W/B"
    ],
    "vehicleApplication": "一汽解放J6(54W桥型)",
    "confidence": "高",
    "sourceUrl": "http://www.qipeiren.com/Supply/supply-4679884.htm",
    "note": "关键词:解放J6 碟刹 转向节 54W。汽配人'一汽解放J6碟刹转向节羊角 左 台阶110 3001015-54W/B'原厂。"
  },
  "new-steering-knuckle-020": {
    "productId": "new-steering-knuckle-020",
    "oemNumbers": [],
    "vehicleApplication": "一汽解放(A2Q桥型)",
    "confidence": "中",
    "sourceUrl": "https://www.1688.com/chanpin/-D2BBC6FBBDE2B7C5D7AACFF2BDDA.html",
    "note": "关键词:解放A2Q 转向节。1688确认'解放PA2Q转向节主销修理包'车型存在；转向节本体OE图号未直接确认，留空。"
  },
  "new-steering-knuckle-021": {
    "productId": "new-steering-knuckle-021",
    "oemNumbers": [
      "AZ9112410055(左)",
      "AZ9112410056(右)"
    ],
    "vehicleApplication": "重汽豪沃(16款/Howo 7-9T前桥)",
    "confidence": "高",
    "sourceUrl": "https://sinotruksitrak.com/wp-content/uploads/2021/11/Howo-Front-Axle-79-Ton.pdf",
    "note": "关键词:重汽豪沃 转向节 WG/AZ。重汽前桥备件目录'转向节(左)AZ9112410055、(右)AZ9112410056'；HF7盘式另见AZ9100413002。"
  },
  "new-steering-knuckle-022": {
    "productId": "new-steering-knuckle-022",
    "oemNumbers": [
      "880410028"
    ],
    "vehicleApplication": "重汽斯太尔(STR/STRW)",
    "confidence": "高",
    "sourceUrl": "http://www.zqpj.com/sell/show/1999",
    "note": "关键词:重汽斯太尔 转向节。重汽配件网'图号880410028 车型STR/STRW/HOWO'；另见豪沃斯太尔前桥羊角轴总成AZ99112410057。"
  },
  "new-steering-knuckle-023": {
    "productId": "new-steering-knuckle-023",
    "oemNumbers": [
      "DZ9100410400"
    ],
    "vehicleApplication": "陕汽德龙F2000/北奔",
    "confidence": "中",
    "sourceUrl": "https://m.1688.com/cp/-C9C2C6FBB5C2C1FAC7B0C7C5.html",
    "note": "关键词:陕汽F2000 北奔 转向节 DZ。1688'陕汽德龙F2000/F3000 9.5吨DZ9100410400转向节'；北奔另见羊角轴AZ9112410057。一图号兼用F2000与北奔，标中。"
  },
  "new-steering-knuckle-024": {
    "productId": "new-steering-knuckle-024",
    "oemNumbers": [
      "DZ9100410400",
      "81.44201.0143(左)",
      "81.44201.0144(右)"
    ],
    "vehicleApplication": "陕汽德龙F3000(汉德9.5T前桥)",
    "confidence": "高",
    "sourceUrl": "https://www.alibaba.com/product-detail/Steering-knuckle-for-heavy-truck-Drum_1600920395748.html",
    "note": "关键词:陕汽德龙F3000 转向节 DZ9100410400。Alibaba/Made-in-China/重汽配件网三源一致：DZ9100410400对应81.44201.0143/0144。"
  },
  "new-agricultural-001": {
    "productId": "new-agricultural-001",
    "oemNumbers": [],
    "vehicleApplication": "外贸通用农机垂臂（D618为内部型号代号）",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "关键词'D618 拖拉机 垂臂 零件号 转向臂'。D618疑为厂家内部型号代号，非标准OE图号；1688/农机配件站未检出D618对应主机厂图号。属外贸通用转向垂臂，查不到正常。"
  },
  "new-agricultural-002": {
    "productId": "new-agricultural-002",
    "oemNumbers": [],
    "vehicleApplication": "外贸通用农机提升臂（KT为内部代号）",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "关键词'KT 提升臂 拖拉机 悬挂 农机配件'。KT疑为品牌或型号缩写（非Kubota/Kioti标准件号），检索未匹配到具体主机厂提升臂图号。通用外贸提升臂。"
  },
  "new-agricultural-003": {
    "productId": "new-agricultural-003",
    "oemNumbers": [],
    "vehicleApplication": "外贸农机件（Y0049为内部编号）",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "关键词'Y0049 拖拉机 配件 零件号'。Y0049本身疑似厂家内部物料号，检索1688/阿里未匹配到对应主机厂OE图号。无明确机型信息。"
  },
  "new-agricultural-004": {
    "productId": "new-agricultural-004",
    "oemNumbers": [
      "70-3001085"
    ],
    "vehicleApplication": "MTZ/白俄罗斯拖拉机 80/82系列 转向节（羊角）",
    "confidence": "高",
    "sourceUrl": "https://chinese.alibaba.com/g/tractor-knuckle.html",
    "note": "关键词'俄罗斯羊角 / MTZ 拖拉机 转向节 零件号'。Alibaba多个供应商列出'MTZ tractor steering knuckle/stub axle 70-3001085'，对应MTZ-80/82白俄罗斯拖拉机左转向节。右件通常为70-3001086系列（未直接检出），取已确认的70-3001085。"
  },
  "new-agricultural-005": {
    "productId": "new-agricultural-005",
    "oemNumbers": [],
    "vehicleApplication": "外贸通用农机配件（无明确机型）",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "图片文件名'农机配件'为泛称，无具体机型/部位线索，无法反查OE号。属外贸通用件。"
  },
  "new-agricultural-006": {
    "productId": "new-agricultural-006",
    "oemNumbers": [],
    "vehicleApplication": "外贸通用转向垂臂（无明确机型）",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "关键词'外贸垂臂'。文件名仅为'外贸垂臂'，无具体机型/品牌线索，属通用出口转向摇臂，未匹配到主机厂图号。"
  },
  "new-agricultural-007": {
    "productId": "new-agricultural-007",
    "oemNumbers": [],
    "vehicleApplication": "外贸通用农机臂件（大小疙瘩臂）",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "'大小疙瘩臂'为外贸俗称，指带凸起球头座的悬挂臂/转向臂，无明确机型，检索未匹配到OE图号。"
  },
  "new-agricultural-008": {
    "productId": "new-agricultural-008",
    "oemNumbers": [],
    "vehicleApplication": "外贸通用农机铲板/刮板（大铲子）",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "'大铲子'疑为平地机/刮板运板或悬挂铲板类外贸件，无明确机型，未匹配到OE图号。"
  },
  "new-agricultural-009": {
    "productId": "new-agricultural-009",
    "oemNumbers": [],
    "vehicleApplication": "外贸通用农机链板（小大链板）",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "'小大链板'疑为悬挂限位链条板/链节板类外贸件，无明确机型，未匹配到OE图号。"
  },
  "new-agricultural-010": {
    "productId": "new-agricultural-010",
    "oemNumbers": [],
    "vehicleApplication": "外贸通用农机铲板左右（小铲子左右）",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "'小铲子左右'疑为小型刮板/铲板左右件，无明确机型，未匹配到OE图号。"
  },
  "new-john-deere-001": {
    "productId": "new-john-deere-001",
    "oemNumbers": [
      "RE243216"
    ],
    "vehicleApplication": "John Deere 约翰迪尔 5E系列 5-754/854/950 拖拉机后悬挂机构总成",
    "confidence": "中",
    "sourceUrl": "https://m.1688.com/kq/-CDCFC0ADBBFAC0ADB8CB.html",
    "note": "关键词'约翰迪尔 5-754 悬挂总成 提升臂 零件号'。1688列出'RE243216约翰迪尔拖拉机原厂配件854 904左右提升拉杆中拉杆'，对应5E系列后悬挂提升拉杆；另有1688 listing确认5-5E/754/804/854/904/954后悬挂拉杆总成存在。机型明确（约翰迪尔5E系列5-754/854/950），但仅检出提升拉杆单一图号RE243216，悬挂总成整体号未检出，取中。"
  },
  "new-john-deere-002": {
    "productId": "new-john-deere-002",
    "oemNumbers": [],
    "vehicleApplication": "John Deere 约翰迪尔 6B系列 6B-1404 拖拉机悬挂总成",
    "confidence": "中",
    "sourceUrl": "https://www.deere.com/assets/pdfs/common/qrg/6b-series-1404-tractor.pdf",
    "note": "关键词'约翰迪尔 6B-1404 悬挂总成 提升臂 零件号'。John Deere官方发布6B Series-1404 (China Edition) Replacement Parts Guide PDF，但该QRG仅列滤芯/离合器/刹车/转向拉杆等保养件，未列后悬挂提升臂总成OE图号。机型明确（6B-1404），但悬挂总成本体号未检出，留空不编造。"
  },
  "new-john-deere-003": {
    "productId": "new-john-deere-003",
    "oemNumbers": [],
    "vehicleApplication": "John Deere 约翰迪尔系列 悬挂总成（泛指）",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "图片文件名'约翰迪尔系列'为泛指，无具体机型（5E/6B/6M等均有可能），无法反查特定OE图号。"
  },
  "new-shaft-001": {
    "productId": "new-shaft-001",
    "oemNumbers": [
      "2201010-KJ2H0",
      "2201010-T2201"
    ],
    "vehicleApplication": "东风天龙 (Dongfeng Tianlong)",
    "confidence": "高",
    "sourceUrl": "https://spanish.alibaba.com/product-detail/Dongfeng-Truck-Parts-Propeller-Shaft-with-1600436193315.html",
    "note": "img_cn=东风天龙传动轴，与序号21同车型。复用东风2201xx传动轴总成号，高。"
  },
  "new-shaft-002": {
    "productId": "new-shaft-002",
    "oemNumbers": [
      "TU1461WE-2203010",
      "4M5YM40D33H0A-2201010"
    ],
    "vehicleApplication": "东风霸龙 (柳汽乘龙霸龙)",
    "confidence": "中",
    "sourceUrl": "http://m.qipeiren.com/offer/8889519.htm",
    "note": "img_cn=东风霸龙传动轴，与序号25同车型。复用柳汽霸龙传动轴及滑动叉总成物料号，中。"
  },
  "new-shaft-003": {
    "productId": "new-shaft-003",
    "oemNumbers": [
      "H0220260000A0A0256A",
      "LG9720311763",
      "LG9719311080"
    ],
    "vehicleApplication": "福田欧曼 Auman",
    "confidence": "高",
    "sourceUrl": "http://www.zqpj.com/sell/show/4901/",
    "note": "img_cn=欧曼汽车传动轴，与序号24同车型。复用福田戴姆勒H0/LG系欧曼传动轴号，高。"
  },
  "new-shaft-004": {
    "productId": "new-shaft-004",
    "oemNumbers": [
      "AZ9557310625",
      "AZ9716310615",
      "WG9014310125"
    ],
    "vehicleApplication": "重庆豪沃 (重汽豪沃)",
    "confidence": "中",
    "sourceUrl": "https://chinese.alibaba.com/g/howo-heavy-truck-propeller-shaft.html",
    "note": "关键词'重庆豪沃 传动轴总成 零件号 图号'。alibaba列重庆宏仁(Chongqing Hongren)等商家售豪沃A7/T7H传动轴总成AZ9716310615/AZ9557310625。'重庆豪沃'非独立主机厂，归重汽豪沃体系，取豪沃通用号，中。"
  },
  "new-shaft-005": {
    "productId": "new-shaft-005",
    "oemNumbers": [],
    "vehicleApplication": "重汽 STR0125",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "img_cn=重汽str0125传动轴，与序号23同车型。STR0125疑为出口规格号，无主机厂OEM对应，留空不编造。"
  },
  "new-shaft-006": {
    "productId": "new-shaft-006",
    "oemNumbers": [
      "199118310036",
      "AZ932831"
    ],
    "vehicleApplication": "重汽斯太尔STR (SINOTRUK STR)",
    "confidence": "中",
    "sourceUrl": "http://www.zqpj.com/peijian/show/22167/",
    "note": "img_cn=重汽str传动轴，与序号18同车型。复用斯太尔91系/AZ系传动轴图号，中。"
  },
  "new-shaft-007": {
    "productId": "new-shaft-007",
    "oemNumbers": [
      "AZ9113310102",
      "WG9014310125"
    ],
    "vehicleApplication": "中国重汽 (SINOTRUK 通用)",
    "confidence": "中",
    "sourceUrl": "http://www.zqpj.com/peijian/show/24597/",
    "note": "img_cn=重汽传动轴（泛指）。zqpj列AZ9113310102传动轴；1688列WG9014310125重汽传动轴。通用件号，中。"
  },
  "new-shaft-008": {
    "productId": "new-shaft-008",
    "oemNumbers": [
      "DZ9114312072",
      "DZ9114313164"
    ],
    "vehicleApplication": "陕汽奥龙 (Shacman Aolong)",
    "confidence": "高",
    "sourceUrl": "http://detail.cn.hisupplier.com/product/1824907/",
    "note": "img_cn=陕汽奥龙传动轴，与序号26同车型。复用陕汽奥龙DZ系传动轴总成号，高。"
  },
  "new-shaft-009": {
    "productId": "new-shaft-009",
    "oemNumbers": [
      "DZ9114312067",
      "DZ9114311067"
    ],
    "vehicleApplication": "陕汽德龙 (Shacman Delong)",
    "confidence": "高",
    "sourceUrl": "http://m.1688.com/offer/934559996060.html",
    "note": "img_cn=陕汽德龙传动轴，与序号22同车型。复用陕汽德龙DZ系传动轴总成号，高。"
  },
  "new-long-shaft-001": {
    "productId": "new-long-shaft-001",
    "oemNumbers": [],
    "vehicleApplication": "通用定制长轴/传动轴总成(无指定车型)",
    "confidence": "未查到",
    "sourceUrl": "",
    "note": "英文name为占位符“Long Shaft Assembly - Model”，desc为custom drivetrain/transmission通用长轴，img_cn为“长轴系列”(imported-long-shaft-001)。检索“重汽长轴/传动轴花键轴 WG”仅得斯太尔/豪沃各式传动轴号(如AZ9231320261、AZ9938311188等)，与本品无明确绑定关系；传动轴类按车型/长度/齿数定制，无法确定对应OE号。"
  }
};
