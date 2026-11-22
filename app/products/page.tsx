import type { Metadata } from 'next';
import Link from 'next/link';
import AllProductsCatalog from '@/components/AllProductsCatalog';
import type { Language } from '@/components/LanguageProvider';

const SITE_URL = 'https://www.hsaxle.com';

export const metadata: Metadata = {
  title: { absolute: 'All Truck and Agricultural Parts | HONGSHENG' },
  description: 'Browse all HONGSHENG truck steering, suspension, axle, driveline and agricultural machinery replacement parts with OEM/OE reference information.',
  alternates: { canonical: `${SITE_URL}/products` },
  openGraph: {
    type: 'website',
    title: 'All Truck and Agricultural Parts | HONGSHENG',
    description: 'Browse the complete HONGSHENG Auto Parts product catalog.',
    url: `${SITE_URL}/products`,
  },
};

function getLanguage(value?: string): Language {
  const normalized = value?.toLowerCase();
  return normalized && ['en', 'zh', 'ru', 'ar', 'es', 'pt', 'fr'].includes(normalized)
    ? normalized as Language
    : 'en';
}

const catalogCopy: Record<Language, {
  home: string;
  breadcrumb: string;
  label: string;
  title: string;
  intro: string;
  countSuffix: string;
}> = {
  en: { home: 'Home', breadcrumb: 'All products', label: 'ALL PRODUCTS', title: 'All Truck and Agricultural Parts', intro: 'Browse the complete HONGSHENG product catalog. Open any product to view OEM/OE references, vehicle applications and quotation details.', countSuffix: 'products with OEM/OE reference information' },
  zh: { home: '首页', breadcrumb: '全部产品', label: '全部产品', title: '卡车与农业机械零部件', intro: '浏览 HONGSHENG 完整产品目录，查看 OEM/OE 参考号、车型适配信息和询价详情。', countSuffix: '个产品，含 OEM/OE 参考信息' },
  ru: { home: 'Главная', breadcrumb: 'Вся продукция', label: 'ВСЯ ПРОДУКЦИЯ', title: 'Детали для грузовиков и сельхозтехники', intro: 'Просмотрите полный каталог HONGSHENG с OEM/OE номерами, применяемостью и возможностью запроса цены.', countSuffix: 'товаров с OEM/OE справочной информацией' },
  ar: { home: 'الرئيسية', breadcrumb: 'جميع المنتجات', label: 'جميع المنتجات', title: 'قطع الشاحنات والآلات الزراعية', intro: 'تصفح كتالوج HONGSHENG الكامل مع أرقام OEM/OE والتطبيقات وتفاصيل طلب السعر.', countSuffix: 'منتجاً مع مراجع OEM/OE' },
  es: { home: 'Inicio', breadcrumb: 'Todos los productos', label: 'TODOS LOS PRODUCTOS', title: 'Piezas para camiones y maquinaria agrícola', intro: 'Consulte el catálogo completo de HONGSHENG con referencias OEM/OE, aplicaciones y detalles de cotización.', countSuffix: 'productos con referencias OEM/OE' },
  pt: { home: 'Início', breadcrumb: 'Todos os produtos', label: 'TODOS OS PRODUTOS', title: 'Peças para caminhões e máquinas agrícolas', intro: 'Consulte o catálogo completo da HONGSHENG com referências OEM/OE, aplicações e detalhes de cotação.', countSuffix: 'produtos com referências OEM/OE' },
  fr: { home: 'Accueil', breadcrumb: 'Tous les produits', label: 'TOUS LES PRODUITS', title: 'Pièces pour camions et machines agricoles', intro: 'Consultez le catalogue complet HONGSHENG avec références OEM/OE, applications et détails de devis.', countSuffix: 'produits avec références OEM/OE' },
};

export default function AllProductsPage({ searchParams }: { searchParams?: { lang?: string } }) {
  const lang = getLanguage(searchParams?.lang);
  const copy = catalogCopy[lang];
  const graph = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/products#collection`,
    name: 'All HONGSHENG Auto Parts Products',
    description: 'Complete HONGSHENG truck and agricultural machinery parts catalog.',
    url: `${SITE_URL}/products`,
    isPartOf: { '@id': `${SITE_URL}/#website` },
  };

  return (
    <main className="category-page oem-reference-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      <div className="container">
        <nav className="product-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">{copy.home}</Link><span>/</span><span>{copy.breadcrumb}</span>
        </nav>
        <p className="section-label">{copy.label}</p>
        <h1>{copy.title}</h1>
        <p className="category-page-intro">{copy.intro}</p>
        <AllProductsCatalog lang={lang} countSuffix={copy.countSuffix} />
      </div>
    </main>
  );
}
