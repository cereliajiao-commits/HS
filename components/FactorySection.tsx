'use client';

import { useLanguage } from './LanguageProvider';

const content = {
  en: {
    label: 'Inside Hongsheng',
    title: 'From Production Floor to Export-Ready Parts',
    intro: 'Overseas buyers need more than a product catalog. They need confidence that repeat orders will match specifications, fit correctly, and arrive protected. Our manufacturing, inspection, warehousing, and packing workflow is built around those expectations.',
    gateAlt: 'Entrance of Hengshui Hongsheng Auto Parts factory',
    stats: [
      ['1996', 'Manufacturing since'],
      ['10', 'Production lines'],
      ['3', 'Extrusion lines'],
      ['CNC', 'Precision machining'],
      ['ISO 9001', 'Quality system'],
    ],
    cards: [
      {
        title: 'Production Capacity for Repeat Orders',
        text: 'Dedicated equipment and organized in-process handling support volume orders across truck, agricultural, and construction machinery product families.',
        image: '/images/company/production-workshop.jpg?v=20261016-2',
      },
      {
        title: 'Precision Machining',
        text: 'Controlled CNC turning and grinding help maintain critical geometry, surface finish, and reliable fitment.',
        image: '/images/company/precision-machining.jpg',
      },
      {
        title: 'Dimensional Inspection',
        text: 'Critical dimensions and functional features are checked before products move to packing and shipment.',
        image: '/images/company/quality-inspection.jpg',
      },
      {
        title: 'Warehouse & Order Control',
        text: 'Products are organized by model and order stage to support repeat purchasing and mixed-model orders.',
        image: '/images/company/warehouse.jpg?v=20261016-2',
      },
      {
        title: 'Export-Ready Packaging',
        text: 'Heavy components are packed in reinforced wooden cases to reduce movement and damage during international transport.',
        image: '/images/company/export-packaging.jpg?v=20261016-2',
      },
    ],
    buyerTitle: 'What international buyers can expect',
    buyerPoints: ['Consistent fit and dimensions', 'Clear production communication', 'Protected international delivery'],
  },
  zh: {
    label: '走进宏盛',
    title: '从生产车间到出口交付',
    intro: '海外采购商需要的不只是产品目录，更需要确认重复订单能够符合规格、安装匹配，并在运输中得到妥善保护。我们的生产、检测、仓储与包装流程，正是围绕这些核心要求建立。',
    gateAlt: '衡水宏盛汽车配件有限公司工厂入口',
    stats: [
      ['1996', '开始专业制造'],
      ['10', '条生产线'],
      ['3', '条挤压生产线'],
      ['CNC', '精密加工'],
      ['ISO 9001', '质量管理体系'],
    ],
    cards: [
      {
        title: '稳定承接重复与批量订单',
        text: '专业加工设备与规范的在制品管理，可支持重卡、农业机械和工程机械多类零部件的批量生产。',
        image: '/images/company/production-workshop.jpg?v=20261016-2',
      },
      {
        title: '精密机械加工',
        text: '通过受控的 CNC 车削与磨削，保证关键尺寸、表面质量和安装匹配。',
        image: '/images/company/precision-machining.jpg',
      },
      {
        title: '尺寸与质量检测',
        text: '关键尺寸和功能部位在包装发货前进行检测，降低不合格产品流入订单的风险。',
        image: '/images/company/quality-inspection.jpg',
      },
      {
        title: '仓储与订单管理',
        text: '产品按型号和订单阶段有序管理，便于重复采购和多型号混装订单。',
        image: '/images/company/warehouse.jpg?v=20261016-2',
      },
      {
        title: '出口运输包装',
        text: '重型零部件采用加固木箱包装，减少国际运输过程中的移动、磕碰和损坏。',
        image: '/images/company/export-packaging.jpg?v=20261016-2',
      },
    ],
    buyerTitle: '海外采购商可以获得',
    buyerPoints: ['稳定的尺寸与安装匹配', '清晰及时的生产沟通', '适合国际运输的包装保护'],
  },
};

export default function FactorySection() {
  const { lang } = useLanguage();
  const copy = lang === 'zh' ? content.zh : content.en;

  return (
    <section id="factory" className="factory-section">
      <div className="container">
        <div className="factory-header">
          <div className="factory-header-title">
            <div className="section-label">{copy.label}</div>
            <h2 className="section-title">{copy.title}</h2>
          </div>
          <p>{copy.intro}</p>
        </div>

        <div className="factory-gate">
          <img src="/images/company/factory-entrance.jpg" alt={copy.gateAlt} />
        </div>

        <div className="factory-stats">
          {copy.stats.map(([value, label]) => (
            <div className="factory-stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="factory-process-grid">
          {copy.cards.map((card, index) => (
            <article className={`factory-process-card ${index === 0 ? 'factory-process-card--wide' : ''}`} key={card.title}>
              <div className={`factory-process-image factory-process-image--${index + 1}`}><img src={card.image} alt={card.title} /></div>
              <div className="factory-process-copy">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="factory-buyer-bar">
          <strong>{copy.buyerTitle}</strong>
          <div>
            {copy.buyerPoints.map((point) => <span key={point}>{point}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
