import type { Language } from '@/components/LanguageProvider';
import { productContent, type LocalizedProductText } from './productContent';
import { importedProductContent } from './imported-products.content.generated';

type ProductContentEntry = {
  en: LocalizedProductText;
  zh: LocalizedProductText;
};

type TranslatedProductText = LocalizedProductText & {
  categoryLabel: string;
};

const baseProductContent = productContent as unknown as Record<string, ProductContentEntry>;
const importedContent = importedProductContent as unknown as Record<string, ProductContentEntry>;

const titlePhraseMap: Record<string, Array<[string, string]>> = {
  ru: [
    ['Heavy-Duty Steering Arm', 'Тяжёлая рулевая тяга'],
    ['Truck Steering Knuckle', 'Поворотный кулак для грузовика'],
    ['Agricultural Machinery Part', 'Деталь сельхозтехники'],
    ['John Deere Suspension Assembly', 'Узел подвески John Deere'],
    ['Heavy-Duty Drive Shaft', 'Карданный вал повышенной прочности'],
    ['Long Shaft Assembly', 'Длинный вал'],
    ['Vertical Arm', 'Вертикальный рычаг'],
    ['Double Bridge Vertical Arm', 'Вертикальный рычаг двойного моста'],
    ['Single Bridge Vertical Arm', 'Вертикальный рычаг одинарного моста'],
    ['Steering Arm', 'Рычаг рулевого управления'],
    ['Heavy-Duty Tie Rod Assembly', 'Усиленная рулевая тяга в сборе'],
    ['Heavy-Duty Shock Absorber Assembly', 'Усиленный амортизатор в сборе'],
    ['Heavy-Duty Air Spring Shock Absorber', 'Усиленный пневмопружинный амортизатор'],
    ['Differential Assembly', 'Дифференциал в сборе'],
    ['Heavy-Duty Control Arm', 'Усиленный рычаг подвески'],
    ['Heavy-Duty V Thrust Rod', 'Усиленная V-образная реактивная штанга'],
    ['Straight Torque Rod', 'Прямая реактивная штанга'],
    ['Left Steering Arm', 'Левый рычаг рулевого управления'],
    ['Front Drive Axle Steering Knuckle', 'Поворотный кулак переднего ведущего моста'],
    ['LH Tie Rod End', 'Левый наконечник рулевой тяги'],
    ['Shock Absorber Assembly', 'Амортизатор в сборе'],
    ['Air Spring Shock Absorber', 'Пневмопружинный амортизатор'],
    ['HOWO AZ9725529272 V Thrust Rod / Torque Rod', 'HOWO AZ9725529272 V-образная реактивная штанга / штанга крутящего момента'],
    ['HOWO AZ9631523175 Lower Thrust Rod / Torque Rod Assembly', 'HOWO AZ9631523175 нижняя реактивная штанга / штанга крутящего момента в сборе'],
    ['SHACMAN Delong F3000 Straight Torque Rod', 'Прямая реактивная штанга SHACMAN Delong F3000'],
    ['HOWO A7/T7H Tie Rod Assembly', 'Рулевая тяга HOWO A7/T7H в сборе'],
    ['Rear Axle Shock Absorber Assembly', 'Амортизатор заднего моста в сборе'],
    ['Front Axle Shock Absorber Assembly', 'Амортизатор переднего моста в сборе'],
    ['SINOTRUK HOWO Front Axle Shock Absorber', 'Амортизатор переднего моста SINOTRUK HOWO'],
    ['SINOTRUK HOWO / SITRAK C7H T5G TX Front Shock Absorber Assembly', 'Передний амортизатор SINOTRUK HOWO / SITRAK C7H T5G TX в сборе'],
    ['SINOTRUK SITRAK Air Spring Shock Absorber', 'Пневмопружинный амортизатор SINOTRUK SITRAK'],
    ['SHACMAN 81.46701.0315 Left Steering Arm', 'Левый рычаг рулевого управления SHACMAN 81.46701.0315'],
    ['SHACMAN Front Drive Axle Steering Knuckle', 'Поворотный кулак переднего ведущего моста SHACMAN'],
    ['Front Axle Drive Shaft Assembly', 'Карданный вал переднего моста в сборе'],
    ['Front Axle Yoke with Shaft', 'Вилка переднего моста с валом'],
    ['Drive Shaft', 'Карданный вал'],
    ['Steering Knuckle', 'Поворотный кулак'],
    ['Agricultural Part', 'Деталь сельхозтехники'],
    ['Model', 'Модель'],
    ['Left', 'Левый'],
  ],
  es: [
    ['Heavy-Duty Steering Arm', 'Brazo de dirección reforzado'],
    ['Truck Steering Knuckle', 'Mangueta de dirección para camión'],
    ['Agricultural Machinery Part', 'Pieza de maquinaria agrícola'],
    ['John Deere Suspension Assembly', 'Conjunto de suspensión John Deere'],
    ['Heavy-Duty Drive Shaft', 'Árbol de transmisión reforzado'],
    ['Long Shaft Assembly', 'Conjunto de eje largo'],
    ['Vertical Arm', 'Brazo vertical'],
    ['Double Bridge Vertical Arm', 'Brazo vertical de doble puente'],
    ['Single Bridge Vertical Arm', 'Brazo vertical de puente simple'],
    ['Steering Arm', 'Brazo de dirección'],
    ['Heavy-Duty Tie Rod Assembly', 'Conjunto de barra de dirección reforzado'],
    ['Heavy-Duty Shock Absorber Assembly', 'Conjunto de amortiguador reforzado'],
    ['Heavy-Duty Air Spring Shock Absorber', 'Amortiguador neumático reforzado'],
    ['Differential Assembly', 'Conjunto diferencial'],
    ['Heavy-Duty Control Arm', 'Brazo de suspensión reforzado'],
    ['Heavy-Duty V Thrust Rod', 'Barra de reacción en V reforzada'],
    ['Straight Torque Rod', 'Barra de torque recta'],
    ['Left Steering Arm', 'Brazo de dirección izquierdo'],
    ['Front Drive Axle Steering Knuckle', 'Mangueta del eje motriz delantero'],
    ['LH Tie Rod End', 'Terminal izquierda de barra de dirección'],
    ['Shock Absorber Assembly', 'Conjunto de amortiguador'],
    ['Air Spring Shock Absorber', 'Amortiguador neumático'],
    ['Front Axle Drive Shaft Assembly', 'Conjunto de árbol de transmisión del eje delantero'],
    ['Front Axle Yoke with Shaft', 'Horquilla de eje delantero con árbol'],
    ['Drive Shaft', 'Árbol de transmisión'],
    ['Steering Knuckle', 'Mangueta de dirección'],
    ['Agricultural Part', 'Pieza agrícola'],
    ['Model', 'Modelo'],
    ['Left', 'Izquierdo'],
    ['Control Arm', 'Brazo de suspensión'], ['V Thrust Rod / Torque Rod', 'Barra de reacción en V / barra de torque'], ['Lower Thrust Rod / Torque Rod Assembly', 'Conjunto de barra de reacción inferior / barra de torque'], ['Straight Torque Rod', 'Barra de torque recta'], ['Tie Rod Assembly', 'Conjunto de barra de dirección'], ['Rear Axle Shock Absorber Assembly', 'Conjunto de amortiguador del eje trasero'], ['Front Axle Shock Absorber', 'Amortiguador del eje delantero'], ['Front Shock Absorber Assembly', 'Conjunto de amortiguador delantero'],
  ],
  fr: [
    ['Heavy-Duty Steering Arm', 'Bras de direction renforcé'],
    ['Truck Steering Knuckle', 'Fusée de direction pour camion'],
    ['Agricultural Machinery Part', 'Pièce de machinisme agricole'],
    ['John Deere Suspension Assembly', 'Ensemble de suspension John Deere'],
    ['Heavy-Duty Drive Shaft', 'Arbre de transmission renforcé'],
    ['Long Shaft Assembly', "Ensemble d'arbre long"],
    ['Vertical Arm', 'Bras vertical'],
    ['Double Bridge Vertical Arm', 'Bras vertical double pont'],
    ['Single Bridge Vertical Arm', 'Bras vertical pont simple'],
    ['Steering Arm', 'Bras de direction'],
    ['Heavy-Duty Tie Rod Assembly', 'Ensemble de barre de direction renforcé'],
    ['Heavy-Duty Shock Absorber Assembly', 'Ensemble d’amortisseur renforcé'],
    ['Heavy-Duty Air Spring Shock Absorber', 'Amortisseur pneumatique renforcé'],
    ['Differential Assembly', 'Ensemble différentiel'],
    ['Heavy-Duty Control Arm', 'Bras de suspension renforcé'],
    ['Heavy-Duty V Thrust Rod', 'Barre de réaction en V renforcée'],
    ['Straight Torque Rod', 'Barre de poussée droite'],
    ['Left Steering Arm', 'Bras de direction gauche'],
    ['Front Drive Axle Steering Knuckle', 'Fusée du pont moteur avant'],
    ['LH Tie Rod End', 'Rotule gauche de barre de direction'],
    ['Shock Absorber Assembly', 'Ensemble d’amortisseur'],
    ['Air Spring Shock Absorber', 'Amortisseur pneumatique'],
    ['Front Axle Drive Shaft Assembly', 'Arbre de transmission du pont avant'],
    ['Front Axle Yoke with Shaft', 'Fourche de pont avant avec arbre'],
    ['Drive Shaft', 'Arbre de transmission'],
    ['Steering Knuckle', 'Fusée de direction'],
    ['Agricultural Part', 'Pièce agricole'],
    ['Model', 'Modèle'],
    ['Left', 'Gauche'],
    ['Control Arm', 'Bras de suspension'], ['V Thrust Rod / Torque Rod', 'Barre de réaction en V / barre de poussée'], ['Lower Thrust Rod / Torque Rod Assembly', 'Ensemble de barre de réaction inférieure / barre de poussée'], ['Straight Torque Rod', 'Barre de poussée droite'], ['Tie Rod Assembly', 'Ensemble de barre de direction'], ['Rear Axle Shock Absorber Assembly', 'Ensemble d’amortisseur de pont arrière'], ['Front Axle Shock Absorber', 'Amortisseur de pont avant'], ['Front Shock Absorber Assembly', 'Ensemble d’amortisseur avant'],
  ],
  ar: [
    ['Heavy-Duty Steering Arm', 'ذراع توجيه ثقيل'],
    ['Truck Steering Knuckle', 'مفصل توجيه للشاحنة'],
    ['Agricultural Machinery Part', 'قطعة زراعية'],
    ['John Deere Suspension Assembly', 'مجموعة تعليق جون دير'],
    ['Heavy-Duty Drive Shaft', 'عمود نقل الحركة الثقيل'],
    ['Long Shaft Assembly', 'مجموعة عمود طويل'],
    ['Vertical Arm', 'ذراع رأسي'],
    ['Double Bridge Vertical Arm', 'ذراع رأسي مزدوج الجسر'],
    ['Single Bridge Vertical Arm', 'ذراع رأسي أحادي الجسر'],
    ['Steering Arm', 'ذراع التوجيه'],
    ['Heavy-Duty Tie Rod Assembly', 'مجموعة قضيب توجيه للخدمة الشاقة'],
    ['Heavy-Duty Shock Absorber Assembly', 'مجموعة ممتص صدمات للخدمة الشاقة'],
    ['Heavy-Duty Air Spring Shock Absorber', 'ممتص صدمات هوائي للخدمة الشاقة'],
    ['Differential Assembly', 'مجموعة ترس تفاضلي'],
    ['Heavy-Duty Control Arm', 'ذراع تعليق للخدمة الشاقة'],
    ['Heavy-Duty V Thrust Rod', 'قضيب دفع V للخدمة الشاقة'],
    ['Straight Torque Rod', 'قضيب عزم مستقيم'],
    ['Left Steering Arm', 'ذراع توجيه أيسر'],
    ['Front Drive Axle Steering Knuckle', 'مفصل توجيه للمحور الأمامي الدافع'],
    ['LH Tie Rod End', 'طرف قضيب توجيه أيسر'],
    ['Shock Absorber Assembly', 'مجموعة ممتص صدمات'],
    ['Air Spring Shock Absorber', 'ممتص صدمات هوائي'],
    ['Front Axle Drive Shaft Assembly', 'مجموعة عمود نقل حركة للمحور الأمامي'],
    ['Front Axle Yoke with Shaft', 'شوكة المحور الأمامي مع العمود'],
    ['Drive Shaft', 'عمود نقل الحركة'],
    ['Steering Knuckle', 'مفصل توجيه'],
    ['Agricultural Part', 'قطعة زراعية'],
    ['Model', 'طراز'],
    ['Left', 'أيسر'],
    ['Control Arm', 'ذراع تعليق'], ['V Thrust Rod / Torque Rod', 'قضيب دفع V / قضيب عزم'], ['Lower Thrust Rod / Torque Rod Assembly', 'مجموعة قضيب الدفع السفلي / قضيب العزم'], ['Straight Torque Rod', 'قضيب عزم مستقيم'], ['Tie Rod Assembly', 'مجموعة قضيب توجيه'], ['Rear Axle Shock Absorber Assembly', 'مجموعة ممتص صدمات المحور الخلفي'], ['Front Axle Shock Absorber', 'ممتص صدمات المحور الأمامي'], ['Front Shock Absorber Assembly', 'مجموعة ممتص صدمات أمامي'],
  ],
  pt: [
    ['Heavy-Duty Steering Arm', 'Braço de direção reforçado'],
    ['Truck Steering Knuckle', 'Manga de direção para caminhão'],
    ['Agricultural Machinery Part', 'Peça de maquinário agrícola'],
    ['John Deere Suspension Assembly', 'Conjunto de suspensão John Deere'],
    ['Heavy-Duty Drive Shaft', 'Eixo cardã reforçado'],
    ['Long Shaft Assembly', 'Conjunto de eixo longo'],
    ['Vertical Arm', 'Braço vertical'],
    ['Double Bridge Vertical Arm', 'Braço vertical de ponte dupla'],
    ['Single Bridge Vertical Arm', 'Braço vertical de ponte simples'],
    ['Steering Arm', 'Braço de direção'],
    ['Heavy-Duty Tie Rod Assembly', 'Conjunto de barra de direção reforçado'],
    ['Heavy-Duty Shock Absorber Assembly', 'Conjunto de amortecedor reforçado'],
    ['Heavy-Duty Air Spring Shock Absorber', 'Amortecedor pneumático reforçado'],
    ['Differential Assembly', 'Conjunto do diferencial'],
    ['Heavy-Duty Control Arm', 'Braço de suspensão reforçado'],
    ['Heavy-Duty V Thrust Rod', 'Barra de reação em V reforçada'],
    ['Straight Torque Rod', 'Barra de torque reta'],
    ['Left Steering Arm', 'Braço de direção esquerdo'],
    ['Front Drive Axle Steering Knuckle', 'Manga de eixo do eixo dianteiro motriz'],
    ['LH Tie Rod End', 'Terminal esquerdo da barra de direção'],
    ['Shock Absorber Assembly', 'Conjunto do amortecedor'],
    ['Air Spring Shock Absorber', 'Amortecedor pneumático'],
    ['Front Axle Drive Shaft Assembly', 'Conjunto do eixo cardã do eixo dianteiro'],
    ['Front Axle Yoke with Shaft', 'Garfo do eixo dianteiro com eixo cardã'],
    ['Drive Shaft', 'Eixo cardã'],
    ['Steering Knuckle', 'Manga de eixo'],
    ['Agricultural Part', 'Peça agrícola'],
    ['Model', 'Modelo'],
    ['Left', 'Esquerdo'],
    ['Control Arm', 'Braço de suspensão'], ['V Thrust Rod / Torque Rod', 'Barra de reação em V / barra de torque'], ['Lower Thrust Rod / Torque Rod Assembly', 'Conjunto da barra de reação inferior / barra de torque'], ['Straight Torque Rod', 'Barra de torque reta'], ['Tie Rod Assembly', 'Conjunto da barra de direção'], ['Rear Axle Shock Absorber Assembly', 'Conjunto de amortecedor do eixo traseiro'], ['Front Axle Shock Absorber', 'Amortecedor do eixo dianteiro'], ['Front Shock Absorber Assembly', 'Conjunto de amortecedor dianteiro'],
  ],
};

const genericPhraseMap: Record<string, Array<[string, string]>> = {
  ru: [
    ['truck steering linkage', 'рулевую тягу грузовика'],
    ['steering linkage', 'рулевую тягу'],
    ['steering system', 'рулевую систему'],
    ['heavy-duty', 'тяжёлый'],
    ['forged steel', 'кованая сталь'],
    ['forged alloy steel', 'кованая легированная сталь'],
    ['anti-corrosion coating', 'антикоррозионное покрытие'],
    ['protective coating', 'защитное покрытие'],
    ['OEM / aftermarket', 'OEM / послепродажный рынок'],
    ['OEM / custom', 'OEM / индивидуальный заказ'],
    ['OEM replacement', 'OEM-замена'],
    ['Aftermarket supply', 'Поставка на вторичный рынок'],
    ['Custom projects', 'Индивидуальные проекты'],
    ['Product catalog', 'Каталог продукции'],
    ['Commercial vehicles', 'Коммерческие автомобили'],
    ['Heavy-duty trucks', 'Тяжёлые грузовики'],
    ['Truck drivetrain', 'трансмиссию грузовика'],
    ['Truck platforms', 'платформы грузовиков'],
    ['Field machinery', 'полевую технику'],
    ['Special steering linkage', 'специальную рулевую тягу'],
    ['stable steering control', 'стабильное управление'],
    ['reliable fit and performance', 'надёжную посадку и работу'],
    ['stable steering transfer', 'стабильную передачу рулевого управления'],
    ['long service life', 'долгий срок службы'],
    ['dependable steering control', 'надёжное управление'],
    ['replacement parts', 'запасные части'],
    ['catalog display', 'показ в каталоге'],
    ['steering repairs', 'ремонт рулевого управления'],
    ['built for', 'создано для'],
    ['designed for', 'разработано для'],
    ['Precision-built', 'Точно изготовленный'],
    ['Durable', 'Прочный'],
    ['High-quality', 'Высококачественный'],
    ['Type', 'Тип'],
    ['Application', 'Применение'],
    ['Material', 'Материал'],
    ['Supply', 'Поставка'],
    ['Platform', 'Платформа'],
    ['Position', 'Положение'],
    ['OEM / OE', 'OEM / OE'],
    ['Steering arm', 'Рычаг рулевого управления'],
    ['Tie rod assembly', 'Рулевая тяга в сборе'],
    ['Tie rod end', 'Наконечник рулевой тяги'],
    ['Shock absorber assembly', 'Амортизатор в сборе'],
    ['Air spring shock absorber', 'Пневмопружинный амортизатор'],
    ['Differential assembly', 'Дифференциал в сборе'],
    ['Control arm', 'Рычаг подвески'],
    ['V thrust rod / torque rod', 'V-образная реактивная штанга / штанга крутящего момента'],
    ['Truck steering system', 'Система рулевого управления грузовика'],
    ['Heavy-duty truck', 'Тяжёлый грузовик'],
    ['Heavy-duty truck steering linkage', 'Рулевое управление тяжёлого грузовика'],
    ['Heavy-duty truck front drive axle', 'Передний ведущий мост тяжёлого грузовика'],
    ['Truck axle assemblies', 'Мосты грузовиков'],
    ['Steering linkage replacement', 'Замена деталей рулевого управления'],
    ['Truck suspension system', 'Система подвески грузовика'],
    ['Truck suspension systems', 'Системы подвески грузовиков'],
    ['Truck drivetrain and axles', 'Трансмиссия и мосты грузовика'],
    ['Truck front-axle steering linkage', 'Рулевое управление переднего моста грузовика'],
    ['Axle linkage replacement', 'Замена деталей соединения моста'],
    ['Differential replacement', 'Замена дифференциала'],
    ['HOWO trucks', 'грузовики HOWO'],
    ['SINOTRUK HOWO A7 trucks', 'грузовики SINOTRUK HOWO A7'],
    ['SINOTRUK HOWO T7H trucks', 'грузовики SINOTRUK HOWO T7H'],
    ['SITRAK C7H trucks', 'грузовики SITRAK C7H'],
    ['SINOTRUK SITRAK trucks', 'грузовики SINOTRUK SITRAK'],
    ['SHACMAN F3000 trucks', 'грузовики SHACMAN F3000'],
    ['John Deere tractors', 'тракторы John Deere'],
    ['OEM supply', 'Поставка OEM'],
    ['Product Series', 'Серия продукции'],
    ['Precision-built heavy-duty steering arm for truck steering linkage applications, suitable for replacement and OEM supply.', 'Точно изготовленный усиленный рычаг рулевого управления для грузовиков, подходящий для замены и поставок OEM.'],
    ['Heavy-duty control arm for truck suspension applications, suitable for OEM replacement and aftermarket supply.', 'Усиленный рычаг подвески для грузовиков, подходящий для замены OEM и поставок на вторичный рынок.'],
    ['Heavy-duty tie rod assembly for truck steering linkage and front-axle applications.', 'Усиленная рулевая тяга в сборе для рулевого управления и переднего моста грузовика.'],
    ['Heavy-duty rear axle shock absorber assembly for SINOTRUK HOWO truck suspension applications.', 'Усиленный амортизатор заднего моста в сборе для подвески грузовиков SINOTRUK HOWO.'],
    ['Heavy-duty air spring shock absorber for SINOTRUK SITRAK truck suspension and cab support applications.', 'Усиленный пневмопружинный амортизатор для подвески и опоры кабины грузовиков SINOTRUK SITRAK.'],
    ['V thrust rod and torque rod assembly for heavy-duty truck suspension and axle linkage applications.', 'V-образная реактивная штанга и штанга крутящего момента в сборе для подвески и соединения мостов тяжёлых грузовиков.'],
    ['Differential assembly for heavy-duty truck drivetrain and axle applications.', 'Дифференциал в сборе для трансмиссии и мостов тяжёлых грузовиков.'],
    ['Durable steering knuckle engineered for stable steering transfer and long service life in heavy-duty vehicles.', 'Прочный поворотный кулак для стабильной передачи управления и длительного срока службы тяжёлых автомобилей.'],
    ['Agricultural machinery component designed for reliable steering and linkage performance in field equipment.', 'Компонент сельхозтехники для надежной работы рулевого управления и соединений в полевых машинах.'],
    ['John Deere series suspension assembly for agricultural applications, built for dependable fit and performance.', 'Узел подвески серии John Deere для сельхозтехники с надежной совместимостью и стабильной работой.'],
    ['Drive shaft for stable torque transmission and reliable operation in heavy-duty truck platforms.', 'Карданный вал для стабильной передачи крутящего момента и надежной работы на платформах тяжёлых грузовиков.'],
    ['Long shaft assembly for custom drivetrain and transmission applications requiring stable rotation and strength.', 'Узел длинного вала для индивидуальных трансмиссионных систем, требующих стабильного вращения и прочности.'],
    ['Heavy-duty control arm', 'Усиленный рычаг подвески'],
    ['Control arm', 'Рычаг подвески'],
    ['V thrust rod and torque rod assembly', 'V-образная реактивная штанга и штанга крутящего момента в сборе'],
    ['Lower thrust rod / torque rod assembly', 'Нижняя реактивная штанга и штанга крутящего момента в сборе'],
    ['Rear axle shock absorber assembly', 'Амортизатор заднего моста в сборе'],
    ['Front axle shock absorber assembly', 'Амортизатор переднего моста в сборе'],
    ['Truck suspension and cab support', 'Подвеска грузовика и опора кабины'],
    ['Cab support replacement', 'Замена опоры кабины'],
    ['Front drive axle', 'передний ведущий мост'],
    ['vertical arm', 'вертикальный рычаг'], ['double-bridge applications', 'применения с двойным мостом'], ['single-bridge applications', 'применения с одинарным мостом'], ['for STR and Steyr', 'для STR и Steyr'], ['Structure', 'Конструкция'], ['Strength', 'Прочность'], ['Double bridge', 'Двойной мост'], ['Single bridge', 'Одинарный мост'], ['Heavy-duty rated', 'Для тяжелых условий эксплуатации'], ['STR chassis', 'шасси STR'], ['Steyr-based trucks', 'грузовики на базе Steyr'], ['Commercial vehicles', 'коммерческие автомобили'], ['Truck steering systems', 'системы рулевого управления грузовиков'], ['Medium-duty vehicle repairs', 'ремонт среднетоннажных автомобилей'], ['single-arm and twin-arm variants', 'варианты с одним и двумя изгибами'], ['Individual catalog item', 'отдельная позиция каталога'], ['Catalog display', 'представление в каталоге'], ['Heavy-duty vertical arm for STR and Steyr double-bridge applications, built for stable steering transfer.', 'Усиленный вертикальный рычаг для двойных мостов STR и Steyr, обеспечивающий стабильную передачу управления.'], ['Heavy-duty vertical arm', 'усиленный вертикальный рычаг'], ['Heavy-duty steering linkage', 'рулевая тяга для тяжелых грузовиков'], ['built for stable steering transfer', 'обеспечивает стабильную передачу управления'], ['for dependable steering control and long service life', 'для надежного управления и длительного срока службы'],
  ],
  es: [
    ['truck steering linkage', 'varillaje de dirección del camión'],
    ['steering linkage', 'varillaje de dirección'],
    ['steering system', 'sistema de dirección'],
    ['heavy-duty', 'de alta resistencia'],
    ['forged steel', 'acero forjado'],
    ['forged alloy steel', 'acero aleado forjado'],
    ['anti-corrosion coating', 'recubrimiento anticorrosivo'],
    ['protective coating', 'recubrimiento protector'],
    ['OEM / aftermarket', 'OEM / posventa'],
    ['OEM / custom', 'OEM / personalizado'],
    ['OEM replacement', 'repuesto OEM'],
    ['Aftermarket supply', 'suministro posventa'],
    ['Custom projects', 'proyectos personalizados'],
    ['Product catalog', 'catálogo de productos'],
    ['Commercial vehicles', 'vehículos comerciales'],
    ['Heavy-duty trucks', 'camiones pesados'],
    ['Truck drivetrain', 'transmisión del camión'],
    ['Truck platforms', 'plataformas de camión'],
    ['Field machinery', 'maquinaria de campo'],
    ['Special steering linkage', 'varillaje de dirección especial'],
    ['stable steering control', 'control de dirección estable'],
    ['reliable fit and performance', 'ajuste y rendimiento confiables'],
    ['stable steering transfer', 'transferencia de dirección estable'],
    ['long service life', 'larga vida útil'],
    ['dependable steering control', 'control de dirección fiable'],
    ['replacement parts', 'piezas de repuesto'],
    ['catalog display', 'exhibición en catálogo'],
    ['steering repairs', 'reparaciones de dirección'],
    ['built for', 'diseñado para'],
    ['designed for', 'diseñado para'],
    ['Precision-built', 'Fabricado con precisión'],
    ['Durable', 'Duradero'],
    ['High-quality', 'Alta calidad'],
    ['Type', 'Tipo'], ['Application', 'Aplicación'], ['Material', 'Material'], ['Supply', 'Suministro'], ['Platform', 'Plataforma'], ['Position', 'Posición'], ['OEM / OE', 'OEM / OE'], ['Product Series', 'Serie de productos'],
    ['Truck suspension system', 'sistema de suspensión del camión'], ['Truck suspension systems', 'sistemas de suspensión de camiones'], ['Rear axle shock absorber assembly', 'conjunto de amortiguador del eje trasero'], ['Front axle shock absorber assembly', 'conjunto de amortiguador del eje delantero'], ['Truck suspension and cab support', 'suspensión del camión y soporte de cabina'], ['Cab support replacement', 'repuesto del soporte de cabina'], ['suitable for replacement and OEM supply', 'apto para repuesto y suministro OEM'], ['aftermarket supply', 'suministro posventa'], ['truck steering linkage and front-axle applications', 'aplicaciones de dirección y eje delantero para camiones'], ['vertical arm', 'brazo vertical'], ['double-bridge applications', 'aplicaciones de doble puente'], ['single-bridge applications', 'aplicaciones de puente simple'], ['for STR and Steyr', 'para STR y Steyr'], ['Structure', 'Estructura'], ['Strength', 'Resistencia'], ['Double bridge', 'Doble puente'], ['Single bridge', 'Puente simple'], ['Heavy-duty rated', 'Clasificado para servicio pesado'], ['STR chassis', 'chasis STR'], ['Steyr-based trucks', 'camiones basados en Steyr'], ['Commercial vehicles', 'vehículos comerciales'], ['Truck steering systems', 'sistemas de dirección para camiones'], ['Medium-duty vehicle repairs', 'reparaciones de vehículos medianos'], ['single-arm and twin-arm variants', 'versiones de brazo simple y doble'], ['Individual catalog item', 'producto independiente del catálogo'], ['Catalog display', 'presentación en catálogo'], ['Heavy-duty vertical arm for STR and Steyr double-bridge applications, built for stable steering transfer.', 'Brazo vertical reforzado para aplicaciones STR y Steyr de doble puente, diseñado para una transmisión de dirección estable.'], ['Heavy-duty vertical arm', 'brazo vertical reforzado'], ['Heavy-duty steering linkage', 'varillaje de dirección para camiones pesados'], ['built for stable steering transfer', 'diseñado para una transmisión de dirección estable'], ['for dependable steering control and long service life', 'para un control de dirección fiable y una larga vida útil'],
  ],
  fr: [
    ['truck steering linkage', 'bielle de direction du camion'],
    ['steering linkage', 'bielle de direction'],
    ['steering system', 'système de direction'],
    ['heavy-duty', 'robuste'],
    ['forged steel', 'acier forgé'],
    ['forged alloy steel', 'acier allié forgé'],
    ['anti-corrosion coating', 'revêtement anticorrosion'],
    ['protective coating', 'revêtement protecteur'],
    ['OEM / aftermarket', 'OEM / après-vente'],
    ['OEM / custom', 'OEM / sur mesure'],
    ['OEM replacement', 'remplacement OEM'],
    ['Aftermarket supply', 'approvisionnement après-vente'],
    ['Custom projects', 'projets personnalisés'],
    ['Product catalog', 'catalogue produits'],
    ['Commercial vehicles', 'véhicules utilitaires'],
    ['Heavy-duty trucks', 'camions lourds'],
    ['Truck drivetrain', 'transmission du camion'],
    ['Truck platforms', 'plates-formes de camion'],
    ['Field machinery', 'machines agricoles'],
    ['Special steering linkage', 'bielle de direction spéciale'],
    ['stable steering control', 'contrôle de direction stable'],
    ['reliable fit and performance', 'ajustement et performances fiables'],
    ['stable steering transfer', 'transmission de direction stable'],
    ['long service life', 'longue durée de vie'],
    ['dependable steering control', 'contrôle de direction fiable'],
    ['replacement parts', 'pièces de rechange'],
    ['catalog display', 'présentation catalogue'],
    ['steering repairs', 'réparations de direction'],
    ['built for', 'conçu pour'],
    ['designed for', 'conçu pour'],
    ['Precision-built', 'Fabriqué avec précision'],
    ['Durable', 'Durable'],
    ['High-quality', 'Haute qualité'],
    ['Type', 'Type'], ['Application', 'Application'], ['Material', 'Matière'], ['Supply', 'Approvisionnement'], ['Platform', 'Plate-forme'], ['Position', 'Position'], ['OEM / OE', 'OEM / OE'], ['Product Series', 'Gamme de produits'],
    ['Truck suspension system', 'système de suspension du camion'], ['Truck suspension systems', 'systèmes de suspension des camions'], ['Rear axle shock absorber assembly', 'ensemble d’amortisseur de pont arrière'], ['Front axle shock absorber assembly', 'ensemble d’amortisseur de pont avant'], ['Truck suspension and cab support', 'suspension du camion et support de cabine'], ['Cab support replacement', 'remplacement du support de cabine'], ['suitable for replacement and OEM supply', 'adapté au remplacement et à la fourniture OEM'], ['aftermarket supply', 'approvisionnement après-vente'], ['truck steering linkage and front-axle applications', 'applications de direction et de pont avant pour camions'], ['vertical arm', 'bras vertical'], ['double-bridge applications', 'applications à double pont'], ['single-bridge applications', 'applications à pont simple'], ['for STR and Steyr', 'pour STR et Steyr'], ['Structure', 'Structure'], ['Strength', 'Résistance'], ['Double bridge', 'Double pont'], ['Single bridge', 'Pont simple'], ['Heavy-duty rated', 'Prévu pour service intensif'], ['STR chassis', 'châssis STR'], ['Steyr-based trucks', 'camions basés sur Steyr'], ['Commercial vehicles', 'véhicules utilitaires'], ['Truck steering systems', 'systèmes de direction pour camions'], ['Medium-duty vehicle repairs', 'réparation de véhicules moyens'], ['single-arm and twin-arm variants', 'versions à un ou deux bras'], ['Individual catalog item', 'article individuel du catalogue'], ['Catalog display', 'présentation au catalogue'], ['Heavy-duty vertical arm for STR and Steyr double-bridge applications, built for stable steering transfer.', 'Bras vertical renforcé pour les applications STR et Steyr à double pont, conçu pour une transmission de direction stable.'], ['Heavy-duty vertical arm', 'bras vertical renforcé'], ['Heavy-duty steering linkage', 'bielle de direction pour camions lourds'], ['built for stable steering transfer', 'conçu pour une transmission de direction stable'], ['for dependable steering control and long service life', 'pour un contrôle de direction fiable et une longue durée de vie'],
  ],
  ar: [
    ['truck steering linkage', 'وصلة توجيه الشاحنة'],
    ['steering linkage', 'وصلة التوجيه'],
    ['steering system', 'نظام التوجيه'],
    ['heavy-duty', 'ثقيل التحمل'],
    ['forged steel', 'فولاذ مطروق'],
    ['forged alloy steel', 'فولاذ سبائكي مطروق'],
    ['anti-corrosion coating', 'طلاء مقاوم للتآكل'],
    ['protective coating', 'طلاء واقٍ'],
    ['OEM / aftermarket', 'OEM / ما بعد البيع'],
    ['OEM / custom', 'OEM / مخصص'],
    ['OEM replacement', 'بديل OEM'],
    ['Aftermarket supply', 'توريد ما بعد البيع'],
    ['Custom projects', 'مشاريع مخصصة'],
    ['Product catalog', 'كتالوج المنتجات'],
    ['Commercial vehicles', 'المركبات التجارية'],
    ['Heavy-duty trucks', 'الشاحنات الثقيلة'],
    ['Truck drivetrain', 'مجموعة نقل حركة الشاحنة'],
    ['Truck platforms', 'منصات الشاحنات'],
    ['Field machinery', 'معدات الحقول'],
    ['Special steering linkage', 'وصلة توجيه خاصة'],
    ['stable steering control', 'تحكم ثابت في التوجيه'],
    ['reliable fit and performance', 'ملاءمة وأداء موثوقان'],
    ['stable steering transfer', 'نقل توجيه مستقر'],
    ['long service life', 'عمر خدمة طويل'],
    ['dependable steering control', 'تحكم موثوق في التوجيه'],
    ['replacement parts', 'قطع غيار بديلة'],
    ['catalog display', 'عرض في الكتالوج'],
    ['steering repairs', 'إصلاحات التوجيه'],
    ['built for', 'مصمم لـ'],
    ['designed for', 'مصمم لـ'],
    ['Precision-built', 'مصنوع بدقة'],
    ['Durable', 'متين'],
    ['High-quality', 'عالي الجودة'],
    ['Type', 'النوع'], ['Application', 'التطبيق'], ['Material', 'المادة'], ['Supply', 'التوريد'], ['Platform', 'المنصة'], ['Position', 'الموضع'], ['OEM / OE', 'OEM / OE'], ['Product Series', 'سلسلة المنتجات'],
    ['Truck suspension system', 'نظام تعليق الشاحنة'], ['Truck suspension systems', 'أنظمة تعليق الشاحنات'], ['Rear axle shock absorber assembly', 'مجموعة ممتص صدمات المحور الخلفي'], ['Front axle shock absorber assembly', 'مجموعة ممتص صدمات المحور الأمامي'], ['Truck suspension and cab support', 'تعليق الشاحنة ودعم المقصورة'], ['Cab support replacement', 'بديل دعم المقصورة'], ['suitable for replacement and OEM supply', 'مناسب للاستبدال والتوريد بنظام OEM'], ['aftermarket supply', 'توريد ما بعد البيع'], ['truck steering linkage and front-axle applications', 'تطبيقات توجيه الشاحنات والمحور الأمامي'], ['vertical arm', 'ذراع رأسي'], ['double-bridge applications', 'تطبيقات الجسر المزدوج'], ['single-bridge applications', 'تطبيقات الجسر الفردي'], ['for STR and Steyr', 'لشاحنات STR وSteyr'], ['Structure', 'الهيكل'], ['Strength', 'المتانة'], ['Double bridge', 'جسر مزدوج'], ['Single bridge', 'جسر فردي'], ['Heavy-duty rated', 'مصمم للخدمة الشاقة'], ['STR chassis', 'هيكل STR'], ['Steyr-based trucks', 'شاحنات مبنية على Steyr'], ['Commercial vehicles', 'المركبات التجارية'], ['Truck steering systems', 'أنظمة توجيه الشاحنات'], ['Medium-duty vehicle repairs', 'إصلاح المركبات متوسطة الخدمة'], ['single-arm and twin-arm variants', 'إصدارات بذراع واحد أو ذراعين'], ['Individual catalog item', 'منتج مستقل في الكتالوج'], ['Catalog display', 'عرض في الكتالوج'], ['Heavy-duty vertical arm for STR and Steyr double-bridge applications, built for stable steering transfer.', 'ذراع رأسي للخدمة الشاقة مناسب لتطبيقات STR وSteyr ذات الجسر المزدوج، ومصمم لنقل توجيه مستقر.'], ['Heavy-duty vertical arm', 'ذراع رأسي للخدمة الشاقة'], ['Heavy-duty steering linkage', 'وصلة توجيه للخدمة الشاقة'], ['built for stable steering transfer', 'مصمم لنقل توجيه مستقر'], ['for dependable steering control and long service life', 'لتوجيه موثوق وعمر خدمة طويل'],
  ],
  pt: [
    ['truck steering linkage', 'ligação de direção do caminhão'],
    ['steering linkage', 'ligação de direção'],
    ['steering system', 'sistema de direção'],
    ['heavy-duty', 'para serviço pesado'],
    ['forged steel', 'aço forjado'],
    ['forged alloy steel', 'aço-liga forjado'],
    ['anti-corrosion coating', 'revestimento anticorrosivo'],
    ['protective coating', 'revestimento protetor'],
    ['OEM / aftermarket', 'OEM / pós-venda'],
    ['OEM / custom', 'OEM / personalizado'],
    ['OEM replacement', 'substituição OEM'],
    ['Aftermarket supply', 'fornecimento pós-venda'],
    ['Custom projects', 'projetos personalizados'],
    ['Product catalog', 'catálogo de produtos'],
    ['Commercial vehicles', 'veículos comerciais'],
    ['Heavy-duty trucks', 'caminhões pesados'],
    ['Truck drivetrain', 'transmissão do caminhão'],
    ['Truck platforms', 'plataformas de caminhão'],
    ['Field machinery', 'máquinas agrícolas'],
    ['Special steering linkage', 'ligação de direção especial'],
    ['stable steering control', 'controle de direção estável'],
    ['reliable fit and performance', 'encaixe e desempenho confiáveis'],
    ['stable steering transfer', 'transferência de direção estável'],
    ['long service life', 'longa vida útil'],
    ['dependable steering control', 'controle de direção confiável'],
    ['replacement parts', 'peças de reposição'],
    ['catalog display', 'exibição em catálogo'],
    ['steering repairs', 'reparos de direção'],
    ['built for', 'projetado para'],
    ['designed for', 'projetado para'],
    ['Precision-built', 'Fabricado com precisão'],
    ['Durable', 'Durável'],
    ['High-quality', 'Alta qualidade'],
    ['Type', 'Tipo'], ['Application', 'Aplicação'], ['Material', 'Material'], ['Supply', 'Fornecimento'], ['Platform', 'Plataforma'], ['Position', 'Posição'], ['OEM / OE', 'OEM / OE'], ['Product Series', 'Série do produto'],
    ['Truck suspension system', 'sistema de suspensão do caminhão'], ['Truck suspension systems', 'sistemas de suspensão de caminhões'], ['Rear axle shock absorber assembly', 'conjunto de amortecedor do eixo traseiro'], ['Front axle shock absorber assembly', 'conjunto de amortecedor do eixo dianteiro'], ['Truck suspension and cab support', 'suspensão do caminhão e suporte da cabine'], ['Cab support replacement', 'reposição do suporte da cabine'], ['suitable for replacement and OEM supply', 'adequado para reposição e fornecimento OEM'], ['aftermarket supply', 'fornecimento pós-venda'], ['truck steering linkage and front-axle applications', 'aplicações de direção e eixo dianteiro para caminhões'], ['vertical arm', 'braço vertical'], ['double-bridge applications', 'aplicações de ponte dupla'], ['single-bridge applications', 'aplicações de ponte simples'], ['for STR and Steyr', 'para STR e Steyr'], ['Structure', 'Estrutura'], ['Strength', 'Resistência'], ['Double bridge', 'Ponte dupla'], ['Single bridge', 'Ponte simples'], ['Heavy-duty rated', 'Projetado para serviço pesado'], ['STR chassis', 'chassi STR'], ['Steyr-based trucks', 'caminhões baseados em Steyr'], ['Commercial vehicles', 'veículos comerciais'], ['Truck steering systems', 'sistemas de direção para caminhões'], ['Medium-duty vehicle repairs', 'reparos de veículos médios'], ['single-arm and twin-arm variants', 'versões de braço simples e duplo'], ['Individual catalog item', 'item individual do catálogo'], ['Catalog display', 'exibição no catálogo'], ['Heavy-duty vertical arm for STR and Steyr double-bridge applications, built for stable steering transfer.', 'Braço vertical reforçado para aplicações STR e Steyr de ponte dupla, projetado para uma transmissão de direção estável.'], ['Heavy-duty vertical arm', 'braço vertical reforçado'], ['Heavy-duty steering linkage', 'ligação de direção para caminhões pesados'], ['built for stable steering transfer', 'projetado para uma transmissão de direção estável'], ['for dependable steering control and long service life', 'para um controle de direção confiável e longa vida útil'],
  ],
};

titlePhraseMap.ja = [['Heavy-Duty Steering Arm', '大型車両用ステアリングアーム'], ['Truck Steering Knuckle', 'トラック用ステアリングナックル'], ['Steering Knuckle Arm', 'ステアリングナックルアーム'], ['Steering Arm', 'ステアリングアーム'], ['Vertical Arm', '垂直アーム'], ['Tie Rod Assembly', 'タイロッドASSY'], ['Drive Shaft', 'ドライブシャフト'], ['Shock Absorber Assembly', 'ショックアブソーバーASSY'], ['Left Steering Arm', '左ステアリングアーム'], ['Model', 'モデル'], ['Left', '左側']];
titlePhraseMap.ko = [['Heavy-Duty Steering Arm', '대형 차량용 스티어링 암'], ['Truck Steering Knuckle', '트럭 스티어링 너클'], ['Steering Knuckle Arm', '스티어링 너클 암'], ['Steering Arm', '스티어링 암'], ['Vertical Arm', '버티컬 암'], ['Tie Rod Assembly', '타이로드 어셈블리'], ['Drive Shaft', '드라이브 샤프트'], ['Shock Absorber Assembly', '쇼크 업소버 어셈블리'], ['Left Steering Arm', '좌측 스티어링 암'], ['Model', '모델'], ['Left', '왼쪽']];
titlePhraseMap.de = [['Heavy-Duty Steering Arm', 'Schwerlast-Lenkhebel'], ['Truck Steering Knuckle', 'Lkw-Achsschenkel'], ['Steering Knuckle Arm', 'Achsschenkelhebel'], ['Steering Arm', 'Lenkhebel'], ['Vertical Arm', 'Vertikalhebel'], ['Tie Rod Assembly', 'Spurstangen-Baugruppe'], ['Drive Shaft', 'Antriebswelle'], ['Shock Absorber Assembly', 'Stoßdämpfer-Baugruppe'], ['Left Steering Arm', 'Linker Lenkhebel'], ['Model', 'Modell'], ['Left', 'Links']];
titlePhraseMap.it = [['Heavy-Duty Steering Arm', 'Braccio dello sterzo per impieghi gravosi'], ['Truck Steering Knuckle', 'Fusello per camion'], ['Steering Knuckle Arm', 'Braccio del fuso a snodo'], ['Steering Arm', 'Braccio dello sterzo'], ['Vertical Arm', 'Braccio verticale'], ['Tie Rod Assembly', 'Gruppo barra dello sterzo'], ['Drive Shaft', 'Albero di trasmissione'], ['Shock Absorber Assembly', 'Gruppo ammortizzatore'], ['Left Steering Arm', 'Braccio sinistro dello sterzo'], ['Model', 'Modello'], ['Left', 'Sinistro']];
titlePhraseMap.nl = [['Heavy-Duty Steering Arm', 'Zware stuurarm'], ['Truck Steering Knuckle', 'Stuurknokkel voor vrachtwagen'], ['Steering Knuckle Arm', 'Stuurknokkelarm'], ['Steering Arm', 'Stuurarm'], ['Vertical Arm', 'Verticale arm'], ['Tie Rod Assembly', 'Stuurstangassemblage'], ['Drive Shaft', 'Aandrijfas'], ['Shock Absorber Assembly', 'Schokdemperassemblage'], ['Left Steering Arm', 'Linker stuurarm'], ['Model', 'Model'], ['Left', 'Links']];
titlePhraseMap.tr = [['Heavy-Duty Steering Arm', 'Ağır hizmet tipi direksiyon kolu'], ['Truck Steering Knuckle', 'Kamyon direksiyon mafsalı'], ['Steering Knuckle Arm', 'Direksiyon mafsal kolu'], ['Steering Arm', 'Direksiyon kolu'], ['Vertical Arm', 'Dikey kol'], ['Tie Rod Assembly', 'Rot kolu grubu'], ['Drive Shaft', 'Tahrik mili'], ['Shock Absorber Assembly', 'Amortisör grubu'], ['Left Steering Arm', 'Sol direksiyon kolu'], ['Model', 'Model'], ['Left', 'Sol']];
titlePhraseMap.pl = [['Heavy-Duty Steering Arm', 'Wzmocnione ramię kierownicze'], ['Truck Steering Knuckle', 'Zwrotnica do ciężarówki'], ['Steering Knuckle Arm', 'Ramię zwrotnicy'], ['Steering Arm', 'Ramię kierownicze'], ['Vertical Arm', 'Ramię pionowe'], ['Tie Rod Assembly', 'Zespół drążka kierowniczego'], ['Drive Shaft', 'Wał napędowy'], ['Shock Absorber Assembly', 'Zespół amortyzatora'], ['Left Steering Arm', 'Lewe ramię kierownicze'], ['Model', 'Model'], ['Left', 'Lewy']];
titlePhraseMap.id = [['Heavy-Duty Steering Arm', 'Lengan kemudi tugas berat'], ['Truck Steering Knuckle', 'Steering knuckle truk'], ['Steering Knuckle Arm', 'Lengan steering knuckle'], ['Steering Arm', 'Lengan kemudi'], ['Vertical Arm', 'Lengan vertikal'], ['Tie Rod Assembly', 'Rakitan tie rod'], ['Drive Shaft', 'Poros penggerak'], ['Shock Absorber Assembly', 'Rakitan peredam kejut'], ['Left Steering Arm', 'Lengan kemudi kiri'], ['Model', 'Model'], ['Left', 'Kiri']];

// Product records are maintained in English as the source of truth. These
// common phrases cover the remaining product-detail terminology so a
// localized page does not fall back to English in the middle of a sentence.
titlePhraseMap.it.push(
  ['Pitman arm replacement', 'Sostituzione del braccio di rinvio dello sterzo'],
  ['Pitman Arm', 'Braccio di rinvio dello sterzo'], ['Pitman arm', 'Braccio di rinvio dello sterzo'],
  ['Steering Knuckle Arm', 'Braccio del fuso a snodo'], ['Front Axle Drive Shaft Assembly', 'Gruppo albero di trasmissione dell’assale anteriore'],
  ['Front Axle Yoke with Shaft', 'Forcella dell’assale anteriore con albero'], ['Drive Shaft Assembly', 'Gruppo albero di trasmissione'],
  ['Steering Knuckle', 'Fuso a snodo'], ['Front Axle', 'Assale anteriore'], ['Rear Axle', 'Assale posteriore'],
);
titlePhraseMap.de.push(
  ['Pitman Arm', 'Lenkstockhebel'], ['Pitman arm', 'Lenkstockhebel'], ['Steering Knuckle Arm', 'Achsschenkelhebel'],
  ['Front Axle Drive Shaft Assembly', 'Antriebswellenbaugruppe der Vorderachse'], ['Front Axle Yoke with Shaft', 'Vorderachsgabel mit Welle'],
  ['Drive Shaft Assembly', 'Antriebswellenbaugruppe'], ['Steering Knuckle', 'Achsschenkel'], ['Front Axle', 'Vorderachse'], ['Rear Axle', 'Hinterachse'],
);
titlePhraseMap.nl.push(
  ['Pitman Arm', 'Pitmanarm'], ['Pitman arm', 'pitmanarm'], ['Steering Knuckle Arm', 'stuurknokkelarm'],
  ['Front Axle Drive Shaft Assembly', 'aandrijfasassemblage van de vooras'], ['Front Axle Yoke with Shaft', 'voorasvork met as'],
  ['Drive Shaft Assembly', 'aandrijfasassemblage'], ['Steering Knuckle', 'stuurknokkel'], ['Front Axle', 'vooras'], ['Rear Axle', 'achteras'],
);
titlePhraseMap.tr.push(
  ['Pitman Arm', 'Pitman kolu'], ['Pitman arm', 'Pitman kolu'], ['Steering Knuckle Arm', 'direksiyon mafsal kolu'],
  ['Front Axle Drive Shaft Assembly', 'ön aks tahrik mili grubu'], ['Front Axle Yoke with Shaft', 'şaftlı ön aks çatalı'],
  ['Drive Shaft Assembly', 'tahrik mili grubu'], ['Steering Knuckle', 'direksiyon mafsalı'], ['Front Axle', 'ön aks'], ['Rear Axle', 'arka aks'],
);
titlePhraseMap.pl.push(
  ['Pitman Arm', 'Ramię przekładni kierowniczej'], ['Pitman arm', 'ramię przekładni kierowniczej'], ['Steering Knuckle Arm', 'ramię zwrotnicy'],
  ['Front Axle Drive Shaft Assembly', 'zespół wału napędowego przedniej osi'], ['Front Axle Yoke with Shaft', 'widełki przedniej osi z wałem'],
  ['Drive Shaft Assembly', 'zespół wału napędowego'], ['Steering Knuckle', 'zwrotnica'], ['Front Axle', 'przednia oś'], ['Rear Axle', 'tylna oś'],
);
titlePhraseMap.id.push(
  ['Pitman Arm', 'Lengan pitman'], ['Pitman arm', 'lengan pitman'], ['Steering Knuckle Arm', 'lengan steering knuckle'],
  ['Front Axle Drive Shaft Assembly', 'rakitan poros penggerak gandar depan'], ['Front Axle Yoke with Shaft', 'garpu gandar depan dengan poros'],
  ['Drive Shaft Assembly', 'rakitan poros penggerak'], ['Steering Knuckle', 'steering knuckle'], ['Front Axle', 'gandar depan'], ['Rear Axle', 'gandar belakang'],
);

for (const [language, replacements] of Object.entries({
  ja: [['Pitman arm replacement', 'ピットマンアーム交換用'], ['Pitman Arm', 'ピットマンアーム'], ['Pitman arm', 'ピットマンアーム']],
  ko: [['Pitman arm replacement', '피트먼 암 교체용'], ['Pitman Arm', '피트먼 암'], ['Pitman arm', '피트먼 암']],
  de: [['Pitman arm replacement', 'Ersatz-Lenkstockhebel'], ['Pitman Arm', 'Lenkstockhebel'], ['Pitman arm', 'Lenkstockhebel']],
  it: [['Pitman arm replacement', 'Sostituzione del braccio di rinvio dello sterzo'], ['Pitman Arm', 'Braccio di rinvio dello sterzo'], ['Pitman arm', 'Braccio di rinvio dello sterzo']],
  nl: [['Pitman arm replacement', 'pitmanarm als vervanging'], ['Pitman Arm', 'Pitmanarm'], ['Pitman arm', 'pitmanarm']],
  tr: [['Pitman arm replacement', 'Pitman kolu değişimi'], ['Pitman Arm', 'Pitman kolu'], ['Pitman arm', 'Pitman kolu']],
  pl: [['Pitman arm replacement', 'zamienne ramię przekładni kierowniczej'], ['Pitman Arm', 'Ramię przekładni kierowniczej'], ['Pitman arm', 'ramię przekładni kierowniczej']],
  id: [['Pitman arm replacement', 'pengganti lengan pitman'], ['Pitman Arm', 'Lengan pitman'], ['Pitman arm', 'lengan pitman']],
} as Record<string, Array<[string, string]>>)) {
  titlePhraseMap[language].push(...replacements);
}

// Additional-language terminology keeps product cards and specifications
// readable instead of leaving the whole detail page in English.
genericPhraseMap.ja = [
  ['truck steering linkage', 'トラックのステアリングリンケージ'], ['steering linkage', 'ステアリングリンケージ'], ['steering system', 'ステアリングシステム'], ['heavy-duty', '大型車両用'], ['forged steel', '鍛造鋼'], ['forged alloy steel', '鍛造合金鋼'], ['OEM / aftermarket', 'OEM / アフターマーケット'], ['OEM / custom', 'OEM / カスタム'], ['OEM replacement', 'OEM交換用'], ['Aftermarket supply', 'アフターマーケット供給'], ['Product catalog', '製品カタログ'], ['Commercial vehicles', '商用車'], ['Heavy-duty trucks', '大型トラック'], ['Truck drivetrain', 'トラック駆動系'], ['Truck platforms', 'トラックプラットフォーム'], ['Field machinery', '農業機械'], ['stable steering control', '安定した操舵制御'], ['reliable fit and performance', '確実な適合と性能'], ['stable steering transfer', '安定した操舵伝達'], ['long service life', '長寿命'], ['replacement parts', '交換部品'], ['Precision-built', '精密製造'], ['Durable', '耐久性'], ['High-quality', '高品質'], ['Type', 'タイプ'], ['Application', '用途'], ['Material', '材質'], ['Supply', '供給'], ['Platform', 'プラットフォーム'], ['Position', '位置'], ['Product Series', '製品シリーズ'], ['Truck suspension system', 'トラックサスペンションシステム'], ['Truck steering system', 'トラックステアリングシステム'], ['Steering linkage replacement', 'ステアリングリンケージ交換'], ['vertical arm', '垂直アーム'], ['double-bridge applications', 'ダブルブリッジ用途'], ['single-bridge applications', 'シングルブリッジ用途'], ['for STR and Steyr', 'STRおよびSteyr向け'], ['Structure', '構造'], ['Strength', '強度'], ['Double bridge', 'ダブルブリッジ'], ['Single bridge', 'シングルブリッジ'], ['Catalog display', 'カタログ掲載'], ['built for stable steering transfer', '安定した操舵伝達のために設計'], ['for dependable steering control and long service life', '確実な操舵制御と長寿命を実現'],
];
genericPhraseMap.ko = [
  ['truck steering linkage', '트럭 스티어링 링키지'], ['steering linkage', '스티어링 링키지'], ['steering system', '스티어링 시스템'], ['heavy-duty', '대형 차량용'], ['forged steel', '단조강'], ['forged alloy steel', '단조 합금강'], ['OEM / aftermarket', 'OEM / 애프터마켓'], ['OEM / custom', 'OEM / 맞춤 제작'], ['OEM replacement', 'OEM 교체용'], ['Aftermarket supply', '애프터마켓 공급'], ['Product catalog', '제품 카탈로그'], ['Commercial vehicles', '상용차'], ['Heavy-duty trucks', '대형 트럭'], ['Truck drivetrain', '트럭 구동계'], ['Truck platforms', '트럭 플랫폼'], ['Field machinery', '농기계'], ['stable steering control', '안정적인 조향 제어'], ['reliable fit and performance', '신뢰할 수 있는 장착과 성능'], ['stable steering transfer', '안정적인 조향 전달'], ['long service life', '긴 수명'], ['replacement parts', '교체 부품'], ['Precision-built', '정밀 제작'], ['Durable', '내구성'], ['High-quality', '고품질'], ['Type', '유형'], ['Application', '적용'], ['Material', '재질'], ['Supply', '공급'], ['Platform', '플랫폼'], ['Position', '위치'], ['Product Series', '제품 시리즈'], ['Truck suspension system', '트럭 서스펜션 시스템'], ['Truck steering system', '트럭 스티어링 시스템'], ['Steering linkage replacement', '트럭 스티어링 링키지 교체'], ['vertical arm', '버티컬 암'], ['double-bridge applications', '더블 브리지 적용'], ['single-bridge applications', '싱글 브리지 적용'], ['for STR and Steyr', 'STR 및 Steyr용'], ['Structure', '구조'], ['Strength', '강도'], ['Double bridge', '더블 브리지'], ['Single bridge', '싱글 브리지'], ['Catalog display', '카탈로그 표시'], ['built for stable steering transfer', '안정적인 조향 전달을 위해 설계'], ['for dependable steering control and long service life', '신뢰할 수 있는 조향 제어와 긴 수명을 위해 설계'],
];
genericPhraseMap.de = [
  ['truck steering linkage', 'Lenkungsgestänge für Lkw'], ['steering linkage', 'Lenkungsgestänge'], ['steering system', 'Lenksystem'], ['heavy-duty', 'für schwere Fahrzeuge'], ['forged steel', 'Schmiedestahl'], ['forged alloy steel', 'geschmiedeter Legierungsstahl'], ['OEM / aftermarket', 'OEM / Ersatzteilmarkt'], ['OEM / custom', 'OEM / kundenspezifisch'], ['OEM replacement', 'OEM-Ersatz'], ['Aftermarket supply', 'Ersatzteilmarktversorgung'], ['Product catalog', 'Produktkatalog'], ['Commercial vehicles', 'Nutzfahrzeuge'], ['Heavy-duty trucks', 'Schwere Lkw'], ['Truck drivetrain', 'Lkw-Antriebsstrang'], ['Truck platforms', 'Lkw-Plattformen'], ['Field machinery', 'Landmaschinen'], ['stable steering control', 'stabiles Lenkverhalten'], ['reliable fit and performance', 'zuverlässige Passform und Leistung'], ['stable steering transfer', 'stabile Lenkübertragung'], ['long service life', 'lange Lebensdauer'], ['replacement parts', 'Ersatzteile'], ['Precision-built', 'präzisionsgefertigt'], ['Durable', 'langlebig'], ['High-quality', 'hochwertig'], ['Type', 'Typ'], ['Application', 'Anwendung'], ['Material', 'Material'], ['Supply', 'Lieferung'], ['Platform', 'Plattform'], ['Position', 'Position'], ['Product Series', 'Produktserie'], ['Truck suspension system', 'Lkw-Fahrwerkssystem'], ['Truck steering system', 'Lkw-Lenksystem'], ['Steering linkage replacement', 'Ersatz für Lenkungsgestänge'], ['vertical arm', 'Vertikalhebel'], ['double-bridge applications', 'Anwendungen mit Doppelachse'], ['single-bridge applications', 'Anwendungen mit Einzelachse'], ['for STR and Steyr', 'für STR und Steyr'], ['Structure', 'Struktur'], ['Strength', 'Festigkeit'], ['Double bridge', 'Doppelachse'], ['Single bridge', 'Einzelachse'], ['Catalog display', 'Katalogdarstellung'], ['built for stable steering transfer', 'für stabile Lenkübertragung ausgelegt'], ['for dependable steering control and long service life', 'für zuverlässige Lenkung und lange Lebensdauer ausgelegt'],
];
genericPhraseMap.it = [['Confirm the axle, mounting pattern and key dimensions before ordering.', 'Confermare assale, schema di montaggio e dimensioni principali prima dell’ordine.'], ['truck steering linkage applications', 'applicazioni sul collegamento dello sterzo dei camion'], ['for truck steering linkage applications', 'per applicazioni sul collegamento dello sterzo dei camion'], ['Pitman arm replacement', 'sostituzione del braccio di rinvio dello sterzo'], ['Pitman arm', 'braccio di rinvio dello sterzo'], ['steering knuckle arm', 'braccio del fuso a snodo'], ['steering knuckle', 'fuso a snodo'], ['front axle', 'assale anteriore'], ['rear axle', 'assale posteriore'], ['drive shaft assembly', 'gruppo albero di trasmissione'], ['with shaft', 'con albero'], ['truck steering linkage', 'collegamento dello sterzo del camion'], ['steering linkage', 'collegamento dello sterzo'], ['steering system', 'sistema sterzante'], ['heavy-duty', 'per impieghi gravosi'], ['forged steel', 'acciaio forgiato'], ['OEM / aftermarket', 'OEM / aftermarket'], ['OEM replacement', 'sostituzione OEM'], ['Aftermarket supply', 'fornitura aftermarket'], ['Product catalog', 'catalogo prodotti'], ['Commercial vehicles', 'veicoli commerciali'], ['Heavy-duty trucks', 'camion pesanti'], ['Field machinery', 'macchine agricole'], ['stable steering control', 'controllo dello sterzo stabile'], ['reliable fit and performance', 'accoppiamento e prestazioni affidabili'], ['long service life', 'lunga durata'], ['replacement parts', 'ricambi'], ['Precision-built', 'costruito con precisione'], ['Durable', 'resistente'], ['High-quality', 'alta qualità'], ['Type', 'Tipo'], ['Application', 'Applicazione'], ['Material', 'Materiale'], ['Supply', 'Fornitura'], ['Position', 'Posizione'], ['Product Series', 'Serie prodotto'], ['Steering linkage replacement', 'sostituzione del collegamento dello sterzo'], ['vertical arm', 'braccio verticale'], ['Catalog display', 'presentazione a catalogo']];
genericPhraseMap.nl = [['truck steering linkage', 'stuurinrichting van vrachtwagens'], ['steering linkage', 'stuurinrichting'], ['steering system', 'stuursysteem'], ['heavy-duty', 'voor zware toepassingen'], ['forged steel', 'gesmeed staal'], ['OEM / aftermarket', 'OEM / aftermarket'], ['OEM replacement', 'OEM-vervanging'], ['Aftermarket supply', 'aftermarketlevering'], ['Product catalog', 'productcatalogus'], ['Commercial vehicles', 'bedrijfsvoertuigen'], ['Heavy-duty trucks', 'zware vrachtwagens'], ['Field machinery', 'landbouwmachines'], ['stable steering control', 'stabiele stuurcontrole'], ['reliable fit and performance', 'betrouwbare pasvorm en prestaties'], ['long service life', 'lange levensduur'], ['replacement parts', 'vervangingsonderdelen'], ['Precision-built', 'precisie vervaardigd'], ['Durable', 'duurzaam'], ['High-quality', 'hoge kwaliteit'], ['Type', 'Type'], ['Application', 'Toepassing'], ['Material', 'Materiaal'], ['Supply', 'Levering'], ['Position', 'Positie'], ['Product Series', 'Productserie'], ['Steering linkage replacement', 'vervanging van stuurinrichting'], ['vertical arm', 'verticale arm'], ['Catalog display', 'catalogusweergave']];
genericPhraseMap.tr = [['truck steering linkage', 'kamyon direksiyon bağlantısı'], ['steering linkage', 'direksiyon bağlantısı'], ['steering system', 'direksiyon sistemi'], ['heavy-duty', 'ağır hizmet tipi'], ['forged steel', 'dövme çelik'], ['OEM / aftermarket', 'OEM / satış sonrası'], ['OEM replacement', 'OEM değişimi'], ['Aftermarket supply', 'satış sonrası tedarik'], ['Product catalog', 'ürün kataloğu'], ['Commercial vehicles', 'ticari araçlar'], ['Heavy-duty trucks', 'ağır hizmet kamyonları'], ['Field machinery', 'tarım makineleri'], ['stable steering control', 'stabil direksiyon kontrolü'], ['reliable fit and performance', 'güvenilir uyum ve performans'], ['long service life', 'uzun kullanım ömrü'], ['replacement parts', 'yedek parçalar'], ['Precision-built', 'hassas üretilmiş'], ['Durable', 'dayanıklı'], ['High-quality', 'yüksek kalite'], ['Type', 'Tip'], ['Application', 'Uygulama'], ['Material', 'Malzeme'], ['Supply', 'Tedarik'], ['Position', 'Konum'], ['Product Series', 'Ürün serisi'], ['Steering linkage replacement', 'direksiyon bağlantısı değişimi'], ['vertical arm', 'dikey kol'], ['Catalog display', 'katalog gösterimi']];
genericPhraseMap.pl = [['truck steering linkage', 'układ kierowniczy ciężarówki'], ['steering linkage', 'układ kierowniczy'], ['steering system', 'układ kierowniczy'], ['heavy-duty', 'do ciężkich zastosowań'], ['forged steel', 'stal kuta'], ['OEM / aftermarket', 'OEM / rynek wtórny'], ['OEM replacement', 'zamiennik OEM'], ['Aftermarket supply', 'dostawa na rynek wtórny'], ['Product catalog', 'katalog produktów'], ['Commercial vehicles', 'pojazdy użytkowe'], ['Heavy-duty trucks', 'ciężkie ciężarówki'], ['Field machinery', 'maszyny rolnicze'], ['stable steering control', 'stabilne sterowanie'], ['reliable fit and performance', 'pewne dopasowanie i działanie'], ['long service life', 'długi okres eksploatacji'], ['replacement parts', 'części zamienne'], ['Precision-built', 'precyzyjnie wykonane'], ['Durable', 'trwałe'], ['High-quality', 'wysoka jakość'], ['Type', 'Typ'], ['Application', 'Zastosowanie'], ['Material', 'Materiał'], ['Supply', 'Dostawa'], ['Position', 'Pozycja'], ['Product Series', 'Seria produktów'], ['Steering linkage replacement', 'wymiana układu kierowniczego'], ['vertical arm', 'ramię pionowe'], ['Catalog display', 'prezentacja w katalogu']];
genericPhraseMap.id = [['truck steering linkage', 'sistem kemudi truk'], ['steering linkage', 'sistem kemudi'], ['steering system', 'sistem kemudi'], ['heavy-duty', 'tugas berat'], ['forged steel', 'baja tempa'], ['OEM / aftermarket', 'OEM / aftermarket'], ['OEM replacement', 'pengganti OEM'], ['Aftermarket supply', 'pasokan aftermarket'], ['Product catalog', 'katalog produk'], ['Commercial vehicles', 'kendaraan komersial'], ['Heavy-duty trucks', 'truk tugas berat'], ['Field machinery', 'mesin pertanian'], ['stable steering control', 'kendali kemudi yang stabil'], ['reliable fit and performance', 'pemasangan dan kinerja yang andal'], ['long service life', 'masa pakai panjang'], ['replacement parts', 'suku cadang pengganti'], ['Precision-built', 'dibuat dengan presisi'], ['Durable', 'tahan lama'], ['High-quality', 'berkualitas tinggi'], ['Type', 'Tipe'], ['Application', 'Aplikasi'], ['Material', 'Material'], ['Supply', 'Pasokan'], ['Position', 'Posisi'], ['Product Series', 'Seri produk'], ['Steering linkage replacement', 'penggantian sistem kemudi'], ['vertical arm', 'lengan vertikal'], ['Catalog display', 'tampilan katalog']];

for (const [language, replacements] of Object.entries({
  ja: [['OEM reference', 'OEM参照'], ['replacement', '交換用']],
  ko: [['OEM reference', 'OEM 참조'], ['replacement', '교체용']],
  de: [['OEM reference', 'OEM-Referenz'], ['replacement', 'Ersatz']],
  it: [['OEM reference', 'riferimento OEM'], ['replacement', 'sostituzione']],
  nl: [['OEM reference', 'OEM-referentie'], ['replacement', 'vervanging']],
  tr: [['OEM reference', 'OEM referansı'], ['replacement', 'değişim']],
  pl: [['OEM reference', 'referencja OEM'], ['replacement', 'zamiennik']],
  id: [['OEM reference', 'referensi OEM'], ['replacement', 'pengganti']],
} as Record<string, Array<[string, string]>>)) {
  genericPhraseMap[language].push(...replacements);
}

for (const [language, replacements] of Object.entries({
  ja: [['Confirm the axle, mounting pattern and key dimensions before ordering.', 'ご注文前にアクスル、取付パターン、主要寸法をご確認ください。'], ['mounting pattern', '取付パターン'], ['key dimensions', '主要寸法']],
  ko: [['Confirm the axle, mounting pattern and key dimensions before ordering.', '주문 전에 차축, 장착 패턴 및 주요 치수를 확인하십시오.'], ['mounting pattern', '장착 패턴'], ['key dimensions', '주요 치수']],
  de: [['Confirm the axle, mounting pattern and key dimensions before ordering.', 'Prüfen Sie vor der Bestellung Achse, Befestigungsbild und Hauptmaße.'], ['mounting pattern', 'Befestigungsbild'], ['key dimensions', 'Hauptmaße']],
  it: [['Confirm the axle, mounting pattern and key dimensions before ordering.', 'Confermare assale, schema di montaggio e dimensioni principali prima dell’ordine.'], ['mounting pattern', 'schema di montaggio'], ['key dimensions', 'dimensioni principali']],
  nl: [['Confirm the axle, mounting pattern and key dimensions before ordering.', 'Controleer vóór bestelling de as, het gatenpatroon en de belangrijkste maten.'], ['mounting pattern', 'gatenpatroon'], ['key dimensions', 'belangrijkste maten']],
  tr: [['Confirm the axle, mounting pattern and key dimensions before ordering.', 'Siparişten önce aksı, montaj düzenini ve temel ölçüleri doğrulayın.'], ['mounting pattern', 'montaj düzeni'], ['key dimensions', 'temel ölçüler']],
  pl: [['Confirm the axle, mounting pattern and key dimensions before ordering.', 'Przed zamówieniem potwierdź oś, rozstaw mocowania i główne wymiary.'], ['mounting pattern', 'rozstaw mocowania'], ['key dimensions', 'główne wymiary']],
  id: [['Confirm the axle, mounting pattern and key dimensions before ordering.', 'Periksa gandar, pola pemasangan, dan ukuran utama sebelum memesan.'], ['mounting pattern', 'pola pemasangan'], ['key dimensions', 'ukuran utama']],
} as Record<string, Array<[string, string]>>)) {
  genericPhraseMap[language].push(...replacements);
}

for (const [language, replacements] of Object.entries({
  ja: [['Confirm the vehicle model, mounting position and dimensions before ordering.', 'ご注文前に車両モデル、取付位置、寸法をご確認ください。'], ['applications.', '用途。'], ['Application', '用途'], ['Position', '位置'], ['Left-hand', '左側'], ['No verified OEM number is currently listed', '確認済みのOEM番号はまだ掲載されていません'], ['Product and fitment FAQ', '製品と適合に関するFAQ'], ['Compatible Vehicles / Applications', '適合車両 / 用途'], ['Truck', 'トラック'], ['trucks', 'トラック'], ['for ', '向け '], ['model', 'モデル'], ['mounting', '取付'], ['dimensions', '寸法'], ['OEM / aftermarket supply', 'OEM / アフターマーケット供給'], ['aftermarket supply', 'アフターマーケット供給']],
  ko: [['Confirm the vehicle model, mounting position and dimensions before ordering.', '주문 전에 차량 모델, 장착 위치 및 치수를 확인하십시오.'], ['applications.', '적용 분야.'], ['Application', '적용'], ['Position', '위치'], ['Left-hand', '왼쪽'], ['No verified OEM number is currently listed', '확인된 OEM 번호가 아직 기재되지 않았습니다'], ['Product and fitment FAQ', '제품 및 호환성 FAQ'], ['Compatible Vehicles / Applications', '호환 차량 / 용도'], ['Truck', '트럭'], ['trucks', '트럭'], ['for ', '용 '], ['model', '모델'], ['mounting', '장착'], ['dimensions', '치수'], ['OEM / aftermarket supply', 'OEM / 애프터마켓 공급'], ['aftermarket supply', '애프터마켓 공급']],
  de: [['Confirm the vehicle model, mounting position and dimensions before ordering.', 'Prüfen Sie vor der Bestellung Fahrzeugmodell, Befestigungsposition und Maße.'], ['applications.', 'Anwendungen.'], ['Application', 'Anwendung'], ['Position', 'Position'], ['Left-hand', 'Links'], ['No verified OEM number is currently listed', 'Es ist noch keine bestätigte OEM-Nummer angegeben'], ['Product and fitment FAQ', 'FAQ zu Produkt und Kompatibilität'], ['Compatible Vehicles / Applications', 'Geeignete Fahrzeuge / Anwendungen'], ['Truck', 'Lkw'], ['trucks', 'Lkw'], ['for ', 'für '], ['model', 'Modell'], ['mounting', 'Befestigung'], ['dimensions', 'Maße'], ['OEM / aftermarket supply', 'OEM- / Ersatzteilmarktversorgung'], ['aftermarket supply', 'Ersatzteilmarktversorgung']],
  it: [['Confirm the vehicle model, mounting position and dimensions before ordering.', 'Confermare modello del veicolo, posizione di montaggio e dimensioni prima dell’ordine.'], ['applications.', 'applicazioni.'], ['Application', 'Applicazione'], ['Position', 'Posizione'], ['Left-hand', 'Sinistro'], ['No verified OEM number is currently listed', 'Non è ancora indicato un riferimento OEM verificato'], ['Product and fitment FAQ', 'FAQ su prodotto e compatibilità'], ['Compatible Vehicles / Applications', 'Veicoli / applicazioni compatibili'], ['Truck', 'Camion'], ['trucks', 'camion'], ['for ', 'per '], ['model', 'modello'], ['mounting', 'montaggio'], ['dimensions', 'dimensioni'], ['OEM / aftermarket supply', 'fornitura OEM / aftermarket'], ['aftermarket supply', 'fornitura aftermarket']],
  nl: [['Confirm the vehicle model, mounting position and dimensions before ordering.', 'Controleer voertuigmodel, montagepositie en maten vóór bestelling.'], ['applications.', 'toepassingen.'], ['Application', 'Toepassing'], ['Position', 'Positie'], ['Left-hand', 'Links'], ['No verified OEM number is currently listed', 'Er is nog geen bevestigd OEM-nummer vermeld'], ['Product and fitment FAQ', 'FAQ over product en compatibiliteit'], ['Compatible Vehicles / Applications', 'Compatibele voertuigen / toepassingen'], ['Truck', 'Vrachtwagen'], ['trucks', 'vrachtwagens'], ['for ', 'voor '], ['model', 'model'], ['mounting', 'montage'], ['dimensions', 'maten'], ['OEM / aftermarket supply', 'OEM / aftermarketlevering'], ['aftermarket supply', 'aftermarketlevering']],
  tr: [['Confirm the vehicle model, mounting position and dimensions before ordering.', 'Siparişten önce araç modelini, montaj konumunu ve ölçüleri doğrulayın.'], ['applications.', 'uygulamalar.'], ['Application', 'Uygulama'], ['Position', 'Konum'], ['Left-hand', 'Sol'], ['No verified OEM number is currently listed', 'Henüz doğrulanmış bir OEM numarası belirtilmemiştir'], ['Product and fitment FAQ', 'Ürün ve uyumluluk SSS'], ['Compatible Vehicles / Applications', 'Uyumlu araçlar / uygulamalar'], ['Truck', 'Kamyon'], ['trucks', 'kamyonlar'], ['for ', 'için '], ['model', 'model'], ['mounting', 'montaj'], ['dimensions', 'ölçüler'], ['OEM / aftermarket supply', 'OEM / satış sonrası tedarik'], ['aftermarket supply', 'satış sonrası tedarik']],
  pl: [['Confirm the vehicle model, mounting position and dimensions before ordering.', 'Przed zamówieniem potwierdź model pojazdu, położenie mocowania i wymiary.'], ['applications.', 'zastosowania.'], ['Application', 'Zastosowanie'], ['Position', 'Pozycja'], ['Left-hand', 'Lewy'], ['No verified OEM number is currently listed', 'Nie podano jeszcze potwierdzonego numeru OEM'], ['Product and fitment FAQ', 'FAQ produktu i dopasowania'], ['Compatible Vehicles / Applications', 'Kompatybilne pojazdy / zastosowania'], ['Truck', 'Ciężarówka'], ['trucks', 'ciężarówki'], ['for ', 'do '], ['model', 'model'], ['mounting', 'mocowanie'], ['dimensions', 'wymiary'], ['OEM / aftermarket supply', 'dostawa OEM / na rynek wtórny'], ['aftermarket supply', 'dostawa na rynek wtórny']],
  id: [['Confirm the vehicle model, mounting position and dimensions before ordering.', 'Periksa model kendaraan, posisi pemasangan, dan ukuran sebelum memesan.'], ['applications.', 'aplikasi.'], ['Application', 'Aplikasi'], ['Position', 'Posisi'], ['Left-hand', 'Kiri'], ['No verified OEM number is currently listed', 'Nomor OEM yang terverifikasi belum tercantum'], ['Product and fitment FAQ', 'FAQ produk dan kecocokan'], ['Compatible Vehicles / Applications', 'Kendaraan / aplikasi yang kompatibel'], ['Truck', 'Truk'], ['trucks', 'truk'], ['for ', 'untuk '], ['model', 'model'], ['mounting', 'pemasangan'], ['dimensions', 'ukuran'], ['OEM / aftermarket supply', 'pasokan OEM / aftermarket'], ['aftermarket supply', 'pasokan aftermarket']],
} as Record<string, Array<[string, string]>>)) {
  genericPhraseMap[language].push(...replacements);
}

const commonDescriptionTranslations: Record<string, Array<[string, string]>> = {
  ja: [['Left steering knuckle arm for JAC (Jianghuai) 1020 truck steering linkage applications.', 'JAC（江淮）1020トラックのステアリングリンケージ用左ステアリングナックルアーム。'], ['Durable steering knuckle engineered for stable steering transfer and long service life in heavy-duty vehicles.', '大型車両向けに安定した操舵伝達と長寿命を実現する耐久性の高いステアリングナックル。'], ['Isuzu NPR 4HK1 steering knuckle arm for truck steering linkage applications', 'トラックのステアリングリンケージ用いすゞNPR 4HK1ステアリングナックルアーム']],
  ko: [['Left steering knuckle arm for JAC (Jianghuai) 1020 truck steering linkage applications.', 'JAC(장화이) 1020 트럭 스티어링 링키지용 좌측 스티어링 너클 암.'], ['Durable steering knuckle engineered for stable steering transfer and long service life in heavy-duty vehicles.', '대형 차량의 안정적인 조향 전달과 긴 수명을 위해 설계된 내구성 스티어링 너클.'], ['Isuzu NPR 4HK1 steering knuckle arm for truck steering linkage applications', '트럭 스티어링 링키지용 이스즈 NPR 4HK1 스티어링 너클 암']],
  de: [['Left steering knuckle arm for JAC (Jianghuai) 1020 truck steering linkage applications.', 'Linker Achsschenkelhebel für das Lkw-Lenkgestänge des JAC (Jianghuai) 1020.'], ['Durable steering knuckle engineered for stable steering transfer and long service life in heavy-duty vehicles.', 'Robuster Achsschenkel für stabile Lenkübertragung und lange Lebensdauer in schweren Fahrzeugen.'], ['Isuzu NPR 4HK1 steering knuckle arm for truck steering linkage applications', 'Achsschenkelhebel für das Lkw-Lenkgestänge Isuzu NPR 4HK1']],
  it: [['Left steering knuckle arm for JAC (Jianghuai) 1020 truck steering linkage applications.', 'Braccio sinistro del fuso a snodo per il collegamento dello sterzo del camion JAC (Jianghuai) 1020.'], ['Durable steering knuckle engineered for stable steering transfer and long service life in heavy-duty vehicles.', 'Fusello dello sterzo resistente, progettato per un trasferimento stabile dello sterzo e una lunga durata sui veicoli pesanti.'], ['Isuzu NPR 4HK1 steering knuckle arm for truck steering linkage applications', 'Braccio del fuso a snodo Isuzu NPR 4HK1 per il collegamento dello sterzo del camion']],
  nl: [['Left steering knuckle arm for JAC (Jianghuai) 1020 truck steering linkage applications.', 'Linker stuurknokkelarm voor de vrachtwagenstuurinrichting van JAC (Jianghuai) 1020.'], ['Durable steering knuckle engineered for stable steering transfer and long service life in heavy-duty vehicles.', 'Duurzame stuurknokkel voor stabiele stuurkrachtoverdracht en lange levensduur in zware voertuigen.'], ['Isuzu NPR 4HK1 steering knuckle arm for truck steering linkage applications', 'Isuzu NPR 4HK1-stuurknokkelarm voor vrachtwagenstuurinrichting']],
  tr: [['Left steering knuckle arm for JAC (Jianghuai) 1020 truck steering linkage applications.', 'JAC (Jianghuai) 1020 kamyon direksiyon bağlantısı için sol direksiyon mafsal kolu.'], ['Durable steering knuckle engineered for stable steering transfer and long service life in heavy-duty vehicles.', 'Ağır hizmet araçlarında dengeli direksiyon aktarımı ve uzun ömür için tasarlanmış dayanıklı direksiyon mafsalı.'], ['Isuzu NPR 4HK1 steering knuckle arm for truck steering linkage applications', 'Kamyon direksiyon bağlantısı için Isuzu NPR 4HK1 direksiyon mafsal kolu']],
  pl: [['Left steering knuckle arm for JAC (Jianghuai) 1020 truck steering linkage applications.', 'Lewe ramię zwrotnicy do układu kierowniczego ciężarówki JAC (Jianghuai) 1020.'], ['Durable steering knuckle engineered for stable steering transfer and long service life in heavy-duty vehicles.', 'Trwała zwrotnica zaprojektowana dla stabilnego przenoszenia kierowania i długiej eksploatacji pojazdów ciężkich.'], ['Isuzu NPR 4HK1 steering knuckle arm for truck steering linkage applications', 'Ramię zwrotnicy Isuzu NPR 4HK1 do układu kierowniczego ciężarówki']],
  id: [['Left steering knuckle arm for JAC (Jianghuai) 1020 truck steering linkage applications.', 'Lengan steering knuckle kiri untuk sistem kemudi truk JAC (Jianghuai) 1020.'], ['Durable steering knuckle engineered for stable steering transfer and long service life in heavy-duty vehicles.', 'Steering knuckle yang tahan lama untuk transfer kemudi stabil dan masa pakai panjang pada kendaraan berat.'], ['Isuzu NPR 4HK1 steering knuckle arm for truck steering linkage applications', 'Lengan steering knuckle Isuzu NPR 4HK1 untuk sistem kemudi truk']],
};

for (const [language, replacements] of Object.entries(commonDescriptionTranslations)) {
  genericPhraseMap[language].push(...replacements);
}

const categoryLabelMap: Record<string, Record<string, string>> = {
  en: {
    vertical: 'Vertical Arm',
    'steering-arm': 'Steering Arm',
    'tie-rod': 'Tie Rod Assembly',
    'shock-absorber': 'Shock Absorber Assembly',
    'air-spring': 'Air Spring Shock Absorber',
    'control-arm': 'Control Arm',
    'torque-rod': 'Torque Rod',
    differential: 'Differential Assembly',
    'steering-knuckle': 'Steering Knuckle',
    agricultural: 'Agricultural Part',
    'john-deere': 'John Deere Assembly',
    shaft: 'Drive Shaft',
    'long-shaft': 'Long Shaft Assembly',
  },
  zh: {
    vertical: '垂臂',
    'steering-arm': '转向臂',
    'tie-rod': '转向拉杆总成',
    'shock-absorber': '减震器总成',
    'air-spring': '空气弹簧减震器',
    'control-arm': '控制臂',
    'torque-rod': '扭矩杆',
    differential: '差速器总成',
    'steering-knuckle': '转向节',
    agricultural: '农机配件',
    'john-deere': '约翰迪尔总成',
    shaft: '传动轴',
    'long-shaft': '长轴',
  },
  ru: {
    vertical: 'Вертикальный рычаг',
    'steering-arm': 'Рычаг рулевого управления',
    'tie-rod': 'Рулевая тяга в сборе',
    'shock-absorber': 'Амортизатор в сборе',
    'air-spring': 'Пневмопружинный амортизатор',
    'control-arm': 'Рычаг подвески',
    'torque-rod': 'Реактивная штанга',
    differential: 'Дифференциал в сборе',
    'steering-knuckle': 'Поворотный кулак',
    agricultural: 'Деталь сельхозтехники',
    'john-deere': 'Узел John Deere',
    shaft: 'Карданный вал',
    'long-shaft': 'Длинный вал',
  },
  es: {
    vertical: 'Brazo vertical',
    'steering-arm': 'Brazo de dirección',
    'tie-rod': 'Conjunto de barra de dirección',
    'shock-absorber': 'Conjunto de amortiguador',
    'air-spring': 'Amortiguador neumático',
    'control-arm': 'Brazo de suspensión',
    'torque-rod': 'Barra de reacción',
    differential: 'Conjunto diferencial',
    'steering-knuckle': 'Mangueta de dirección',
    agricultural: 'Pieza agrícola',
    'john-deere': 'Conjunto John Deere',
    shaft: 'Árbol de transmisión',
    'long-shaft': 'Eje largo',
  },
  fr: {
    vertical: 'Bras vertical',
    'steering-arm': 'Bras de direction',
    'tie-rod': 'Ensemble de barre de direction',
    'shock-absorber': "Ensemble d'amortisseur",
    'air-spring': "Amortisseur pneumatique",
    'control-arm': 'Bras de suspension',
    'torque-rod': 'Barre de poussée',
    differential: 'Ensemble différentiel',
    'steering-knuckle': 'Fusée de direction',
    agricultural: 'Pièce agricole',
    'john-deere': 'Ensemble John Deere',
    shaft: 'Arbre de transmission',
    'long-shaft': 'Arbre long',
  },
  ar: {
    vertical: 'ذراع رأسي',
    'steering-arm': 'ذراع توجيه',
    'tie-rod': 'مجموعة قضيب التوجيه',
    'shock-absorber': 'مجموعة ممتص الصدمات',
    'air-spring': 'ممتص صدمات هوائي',
    'control-arm': 'ذراع تعليق',
    'torque-rod': 'قضيب عزم',
    differential: 'مجموعة الترس التفاضلي',
    'steering-knuckle': 'مفصل توجيه',
    agricultural: 'قطعة زراعية',
    'john-deere': 'مجموعة جون دير',
    shaft: 'عمود نقل الحركة',
    'long-shaft': 'عمود طويل',
  },
  pt: {
    vertical: 'Braço vertical',
    'steering-arm': 'Braço de direção',
    'tie-rod': 'Conjunto da barra de direção',
    'shock-absorber': 'Conjunto do amortecedor',
    'air-spring': 'Amortecedor pneumático',
    'control-arm': 'Braço de suspensão',
    'torque-rod': 'Barra de torque',
    differential: 'Conjunto do diferencial',
    'steering-knuckle': 'Manga de direção',
    agricultural: 'Peça agrícola',
    'john-deere': 'Conjunto John Deere',
    shaft: 'Eixo cardã',
    'long-shaft': 'Eixo longo',
  },
  ja: {
    vertical: '垂直アーム', 'steering-arm': 'ステアリングアーム', 'tie-rod': 'タイロッドASSY', 'shock-absorber': 'ショックアブソーバーASSY', 'air-spring': 'エアスプリングショックアブソーバー', 'control-arm': 'コントロールアーム', 'torque-rod': 'トルクロッド', differential: 'デファレンシャルASSY', 'steering-knuckle': 'ステアリングナックル', agricultural: '農業機械部品', 'john-deere': 'John Deere ASSY', shaft: 'ドライブシャフト', 'long-shaft': 'ロングシャフトASSY',
  },
  ko: {
    vertical: '버티컬 암', 'steering-arm': '스티어링 암', 'tie-rod': '타이로드 어셈블리', 'shock-absorber': '쇼크 업소버 어셈블리', 'air-spring': '에어 스프링 쇼크 업소버', 'control-arm': '컨트롤 암', 'torque-rod': '토크 로드', differential: '디퍼렌셜 어셈블리', 'steering-knuckle': '스티어링 너클', agricultural: '농기계 부품', 'john-deere': 'John Deere 어셈블리', shaft: '드라이브 샤프트', 'long-shaft': '롱 샤프트 어셈블리',
  },
  de: {
    vertical: 'Vertikalhebel', 'steering-arm': 'Lenkhebel', 'tie-rod': 'Spurstangen-Baugruppe', 'shock-absorber': 'Stoßdämpfer-Baugruppe', 'air-spring': 'Luftfeder-Stoßdämpfer', 'control-arm': 'Querlenker', 'torque-rod': 'Drehmomentstrebe', differential: 'Differenzial-Baugruppe', 'steering-knuckle': 'Achsschenkel', agricultural: 'Landmaschinenbauteil', 'john-deere': 'John-Deere-Baugruppe', shaft: 'Antriebswelle', 'long-shaft': 'Langwellen-Baugruppe',
  },
};

categoryLabelMap.it = { vertical: 'Braccio verticale', 'steering-arm': 'Braccio dello sterzo', 'tie-rod': 'Gruppo barra dello sterzo', 'shock-absorber': 'Gruppo ammortizzatore', 'air-spring': 'Ammortizzatore pneumatico', 'control-arm': 'Braccio sospensione', 'torque-rod': 'Barra di torsione', differential: 'Gruppo differenziale', 'steering-knuckle': 'Fusello dello sterzo', agricultural: 'Ricambio agricolo', shaft: 'Albero di trasmissione', 'long-shaft': 'Gruppo albero lungo' };
categoryLabelMap.nl = { vertical: 'Verticale arm', 'steering-arm': 'Stuurarm', 'tie-rod': 'Stuurstangassemblage', 'shock-absorber': 'Schokdemperassemblage', 'air-spring': 'Luchtvering-schokdemper', 'control-arm': 'Draagarm', 'torque-rod': 'Reactiestang', differential: 'Differentieelassemblage', 'steering-knuckle': 'Stuurknokkel', agricultural: 'Onderdeel voor landbouwmachines', shaft: 'Aandrijfas', 'long-shaft': 'Lange-asassemblage' };
categoryLabelMap.tr = { vertical: 'Dikey kol', 'steering-arm': 'Direksiyon kolu', 'tie-rod': 'Rot kolu grubu', 'shock-absorber': 'Amortisör grubu', 'air-spring': 'Havalı yay amortisörü', 'control-arm': 'Salıncak', 'torque-rod': 'Tork çubuğu', differential: 'Diferansiyel grubu', 'steering-knuckle': 'Direksiyon mafsalı', agricultural: 'Tarım makinesi parçası', shaft: 'Tahrik mili', 'long-shaft': 'Uzun mil grubu' };
categoryLabelMap.pl = { vertical: 'Ramię pionowe', 'steering-arm': 'Ramię kierownicze', 'tie-rod': 'Zespół drążka kierowniczego', 'shock-absorber': 'Zespół amortyzatora', 'air-spring': 'Amortyzator pneumatyczny', 'control-arm': 'Wahacz', 'torque-rod': 'Drążek reakcyjny', differential: 'Zespół mechanizmu różnicowego', 'steering-knuckle': 'Zwrotnica', agricultural: 'Część rolnicza', shaft: 'Wał napędowy', 'long-shaft': 'Zespół długiego wału' };
categoryLabelMap.id = { vertical: 'Lengan vertikal', 'steering-arm': 'Lengan kemudi', 'tie-rod': 'Rakitan tie rod', 'shock-absorber': 'Rakitan peredam kejut', 'air-spring': 'Peredam kejut pegas udara', 'control-arm': 'Lengan kontrol', 'torque-rod': 'Batang torsi', differential: 'Rakitan diferensial', 'steering-knuckle': 'Steering knuckle', agricultural: 'Komponen mesin pertanian', shaft: 'Poros penggerak', 'long-shaft': 'Rakitan poros panjang' };

const extraProductDescriptionMap: Partial<Record<Language, Array<[string, string]>>> = {
  ru: [
    ['Vertical arm for Dongfeng steering linkage assemblies, forged for dependable steering control and long service life.', 'Вертикальный рычаг для узлов рулевого управления Dongfeng, кованый для надежного управления и длительного срока службы.'],
    ['A50A vertical arm for commercial steering systems, supplied as an individual catalog item.', 'Усиленный вертикальный рычаг A50A для систем рулевого управления коммерческих автомобилей, поставляемый как отдельная позиция каталога.'],
    ['K36A0 vertical arm with stable geometry and durable forged construction.', 'Вертикальный рычаг K36A0 со стабильной геометрией и прочной кованой конструкцией.'],
    ['Vertical arm for the 80A:60W model, presented as a single catalog product.', 'Вертикальный рычаг для модели 80A:60W, представленный как отдельное изделие каталога.'],
    ['Violet model vertical arm in single-arm and twin-arm variants.', 'Вертикальный рычаг модели Violet в вариантах с одним и двумя рычагами.'],
    ['F13 vertical arm for steering linkage replacement and catalog presentation.', 'Вертикальный рычаг F13 для замены деталей рулевого управления и представления в каталоге.'],
    ['F44 vertical arm with durable forged construction for steering linkage applications.', 'Вертикальный рычаг F44 с прочной кованой конструкцией для применения в рулевом управлении.'],
    ['F58 vertical arm for heavy-duty steering linkage systems.', 'Вертикальный рычаг F58 для усиленных систем рулевого управления.'],
    ['AAG3 vertical arm shown as an individual product entry.', 'Вертикальный рычаг AAG3, представленный как отдельная позиция каталога.'],
    ['Single-bridge STR vertical arm for heavy-duty steering applications.', 'Вертикальный рычаг STR для усиленных систем рулевого управления на одинарном мосту.'],
    ['1061 vertical arm for steering linkage applications, shown as an individual product.', 'Вертикальный рычаг 1061 для применения в рулевом управлении, представленный как отдельное изделие.'],
    ['Vertical arm for tractor steering systems and agricultural machinery.', 'Вертикальный рычаг для систем рулевого управления тракторов и сельхозтехники.'],
    ['Bull nose style vertical arm for steering linkage applications.', 'Вертикальный рычаг типа Bull Nose для применения в рулевом управлении.'],
    ['145-type vertical arm for commercial steering linkage.', 'Вертикальный рычаг типа 145 для рулевого управления коммерческих автомобилей.'],
    ['Vertical arm for the 175X0 platform, built for stable steering transfer and reliable installation.', 'Вертикальный рычаг для платформы 175X0, обеспечивающий стабильную передачу управления и надежную установку.'],
    ['KC100 vertical arm designed for stable steering control and long service life.', 'Вертикальный рычаг KC100, разработанный для надежного управления и длительного срока службы.'],
  ],
  es: [
    ['Vertical arm for Dongfeng steering linkage assemblies, forged for dependable steering control and long service life.', 'Brazo vertical para conjuntos de varillaje de dirección Dongfeng, forjado para ofrecer un control de dirección fiable y una larga vida útil.'],
    ['A50A vertical arm for commercial steering systems, supplied as an individual catalog item.', 'Brazo vertical A50A para sistemas de dirección de vehículos comerciales, suministrado como pieza independiente del catálogo.'],
    ['K36A0 vertical arm with stable geometry and durable forged construction.', 'Brazo vertical K36A0 con geometría estable y construcción forjada duradera.'],
    ['Vertical arm for the 80A:60W model, presented as a single catalog product.', 'Brazo vertical para el modelo 80A:60W, presentado como producto independiente del catálogo.'],
    ['Violet model vertical arm in single-arm and twin-arm variants.', 'Brazo vertical del modelo Violet, disponible en versiones de brazo simple y doble.'],
    ['F13 vertical arm for steering linkage replacement and catalog presentation.', 'Brazo vertical F13 para sustituir componentes del varillaje de dirección y para su presentación en catálogo.'],
    ['F44 vertical arm with durable forged construction for steering linkage applications.', 'Brazo vertical F44 con construcción forjada duradera para aplicaciones del varillaje de dirección.'],
    ['F58 vertical arm for heavy-duty steering linkage systems.', 'Brazo vertical F58 para sistemas de dirección de alta resistencia.'],
    ['AAG3 vertical arm shown as an individual product entry.', 'Brazo vertical AAG3 presentado como artículo independiente del catálogo.'],
    ['Single-bridge STR vertical arm for heavy-duty steering applications.', 'Brazo vertical STR de puente simple para aplicaciones de dirección de alta resistencia.'],
    ['1061 vertical arm for steering linkage applications, shown as an individual product.', 'Brazo vertical 1061 para aplicaciones del varillaje de dirección, presentado como producto independiente.'],
    ['Vertical arm for tractor steering systems and agricultural machinery.', 'Brazo vertical para sistemas de dirección de tractores y maquinaria agrícola.'],
    ['Bull nose style vertical arm for steering linkage applications.', 'Brazo vertical tipo Bull Nose para aplicaciones del varillaje de dirección.'],
    ['145-type vertical arm for commercial steering linkage.', 'Brazo vertical tipo 145 para sistemas de dirección de vehículos comerciales.'],
    ['Vertical arm for the 175X0 platform, built for stable steering transfer and reliable installation.', 'Brazo vertical para la plataforma 175X0, diseñado para una transferencia de dirección estable y una instalación fiable.'],
    ['KC100 vertical arm designed for stable steering control and long service life.', 'Brazo vertical KC100 diseñado para ofrecer un control de dirección estable y una larga vida útil.'],
  ],
  fr: [
    ['Vertical arm for Dongfeng steering linkage assemblies, forged for dependable steering control and long service life.', 'Bras vertical pour les ensembles de bielle de direction Dongfeng, forgé pour garantir un contrôle de direction fiable et une longue durée de vie.'],
    ['A50A vertical arm for commercial steering systems, supplied as an individual catalog item.', 'Bras vertical A50A pour les systèmes de direction des véhicules utilitaires, proposé comme pièce individuelle du catalogue.'],
    ['K36A0 vertical arm with stable geometry and durable forged construction.', 'Bras vertical K36A0 à géométrie stable et construction forgée durable.'],
    ['Vertical arm for the 80A:60W model, presented as a single catalog product.', 'Bras vertical pour le modèle 80A:60W, présenté comme une pièce individuelle du catalogue.'],
    ['Violet model vertical arm in single-arm and twin-arm variants.', 'Bras vertical du modèle Violet, disponible en versions à un ou deux bras.'],
    ['F13 vertical arm for steering linkage replacement and catalog presentation.', 'Bras vertical F13 destiné au remplacement des éléments de direction et à la présentation au catalogue.'],
    ['F44 vertical arm with durable forged construction for steering linkage applications.', 'Bras vertical F44 à construction forgée durable pour les applications de bielle de direction.'],
    ['F58 vertical arm for heavy-duty steering linkage systems.', 'Bras vertical F58 pour les systèmes de direction à usage intensif.'],
    ['AAG3 vertical arm shown as an individual product entry.', 'Bras vertical AAG3 présenté comme une pièce individuelle du catalogue.'],
    ['Single-bridge STR vertical arm for heavy-duty steering applications.', 'Bras vertical STR à pont simple pour les applications de direction à usage intensif.'],
    ['1061 vertical arm for steering linkage applications, shown as an individual product.', 'Bras vertical 1061 pour les applications de bielle de direction, présenté comme une pièce individuelle.'],
    ['Vertical arm for tractor steering systems and agricultural machinery.', 'Bras vertical pour les systèmes de direction des tracteurs et des machines agricoles.'],
    ['Bull nose style vertical arm for steering linkage applications.', 'Bras vertical de type Bull Nose pour les applications de bielle de direction.'],
    ['145-type vertical arm for commercial steering linkage.', 'Bras vertical de type 145 pour les systèmes de direction des véhicules utilitaires.'],
    ['Vertical arm for the 175X0 platform, built for stable steering transfer and reliable installation.', 'Bras vertical pour la plate-forme 175X0, conçu pour une transmission de direction stable et une installation fiable.'],
    ['KC100 vertical arm designed for stable steering control and long service life.', 'Bras vertical KC100 conçu pour garantir un contrôle de direction stable et une longue durée de vie.'],
  ],
  ar: [
    ['Vertical arm for Dongfeng steering linkage assemblies, forged for dependable steering control and long service life.', 'ذراع رأسي لمجموعات وصلة توجيه Dongfeng، مصنوع بالطرق لضمان تحكم موثوق في التوجيه وعمر خدمة طويل.'],
    ['A50A vertical arm for commercial steering systems, supplied as an individual catalog item.', 'ذراع رأسي A50A لأنظمة توجيه المركبات التجارية، ويُورَّد كقطعة مستقلة في الكتالوج.'],
    ['K36A0 vertical arm with stable geometry and durable forged construction.', 'ذراع رأسي K36A0 بهندسة ثابتة وبنية متينة مصنوعة بالطرق.'],
    ['Vertical arm for the 80A:60W model, presented as a single catalog product.', 'ذراع رأسي لطراز 80A:60W، معروض كمنتج مستقل في الكتالوج.'],
    ['Violet model vertical arm in single-arm and twin-arm variants.', 'ذراع رأسي من طراز Violet بإصدارات بذراع واحد أو ذراعين.'],
    ['F13 vertical arm for steering linkage replacement and catalog presentation.', 'ذراع رأسي F13 لاستبدال مكونات وصلة التوجيه وعرضه في الكتالوج.'],
    ['F44 vertical arm with durable forged construction for steering linkage applications.', 'ذراع رأسي F44 ببنية متينة مصنوعة بالطرق لتطبيقات وصلة التوجيه.'],
    ['F58 vertical arm for heavy-duty steering linkage systems.', 'ذراع رأسي F58 لأنظمة التوجيه المصممة للخدمة الشاقة.'],
    ['AAG3 vertical arm shown as an individual product entry.', 'ذراع رأسي AAG3 معروض كمنتج مستقل في الكتالوج.'],
    ['Single-bridge STR vertical arm for heavy-duty steering applications.', 'ذراع رأسي STR للجسر الفردي، مناسب لتطبيقات التوجيه للخدمة الشاقة.'],
    ['1061 vertical arm for steering linkage applications, shown as an individual product.', 'ذراع رأسي 1061 لتطبيقات وصلة التوجيه، معروض كمنتج مستقل.'],
    ['Vertical arm for tractor steering systems and agricultural machinery.', 'ذراع رأسي لأنظمة توجيه الجرارات والمعدات الزراعية.'],
    ['Bull nose style vertical arm for steering linkage applications.', 'ذراع رأسي من طراز Bull Nose لتطبيقات وصلة التوجيه.'],
    ['145-type vertical arm for commercial steering linkage.', 'ذراع رأسي من طراز 145 لأنظمة توجيه المركبات التجارية.'],
    ['Vertical arm for the 175X0 platform, built for stable steering transfer and reliable installation.', 'ذراع رأسي لمنصة 175X0، مصمم لنقل توجيه مستقر وتركيب موثوق.'],
    ['KC100 vertical arm designed for stable steering control and long service life.', 'ذراع رأسي KC100 مصمم لتوفير تحكم ثابت في التوجيه وعمر خدمة طويل.'],
  ],
  pt: [
    ['Vertical arm for Dongfeng steering linkage assemblies, forged for dependable steering control and long service life.', 'Braço vertical para conjuntos de ligação de direção Dongfeng, forjado para oferecer controle de direção confiável e longa vida útil.'],
    ['A50A vertical arm for commercial steering systems, supplied as an individual catalog item.', 'Braço vertical A50A para sistemas de direção de veículos comerciais, fornecido como item independente do catálogo.'],
    ['K36A0 vertical arm with stable geometry and durable forged construction.', 'Braço vertical K36A0 com geometria estável e construção forjada resistente.'],
    ['Vertical arm for the 80A:60W model, presented as a single catalog product.', 'Braço vertical para o modelo 80A:60W, apresentado como produto independente do catálogo.'],
    ['Violet model vertical arm in single-arm and twin-arm variants.', 'Braço vertical do modelo Violet, disponível nas versões de braço simples e duplo.'],
    ['F13 vertical arm for steering linkage replacement and catalog presentation.', 'Braço vertical F13 para substituição de componentes da ligação de direção e apresentação no catálogo.'],
    ['F44 vertical arm with durable forged construction for steering linkage applications.', 'Braço vertical F44 com construção forjada resistente para aplicações de ligação de direção.'],
    ['F58 vertical arm for heavy-duty steering linkage systems.', 'Braço vertical F58 para sistemas de direção de serviço pesado.'],
    ['AAG3 vertical arm shown as an individual product entry.', 'Braço vertical AAG3 apresentado como item independente do catálogo.'],
    ['Single-bridge STR vertical arm for heavy-duty steering applications.', 'Braço vertical STR de ponte simples para aplicações de direção de serviço pesado.'],
    ['1061 vertical arm for steering linkage applications, shown as an individual product.', 'Braço vertical 1061 para aplicações de ligação de direção, apresentado como produto independente.'],
    ['Vertical arm for tractor steering systems and agricultural machinery.', 'Braço vertical para sistemas de direção de tratores e máquinas agrícolas.'],
    ['Bull nose style vertical arm for steering linkage applications.', 'Braço vertical tipo Bull Nose para aplicações de ligação de direção.'],
    ['145-type vertical arm for commercial steering linkage.', 'Braço vertical tipo 145 para sistemas de direção de veículos comerciais.'],
    ['Vertical arm for the 175X0 platform, built for stable steering transfer and reliable installation.', 'Braço vertical para a plataforma 175X0, projetado para oferecer transferência de direção estável e instalação confiável.'],
    ['KC100 vertical arm designed for stable steering control and long service life.', 'Braço vertical KC100 projetado para oferecer controle de direção estável e longa vida útil.'],
  ],
};

function applyReplacements(text: string, replacements: Array<[string, string]>) {
  let output = text;
  for (const [source, target] of [...replacements].sort((a, b) => b[0].length - a[0].length)) {
    const escapedSource = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    output = output.replace(new RegExp(escapedSource, 'gi'), target);
  }
  return output;
}

function translateText(text: string, lang: Language) {
  if (lang === 'en' || lang === 'zh') return text;
  const replacements = [...(genericPhraseMap[lang] ?? []), ...(extraProductDescriptionMap[lang] ?? [])];
  if (!replacements) return text;
  const longPhrases = replacements.filter(([source]) => source.length > 30);
  const shortPhrases = replacements.filter(([source]) => source.length <= 30);
  const withFullSentences = applyReplacements(text, longPhrases);
  const withTitles = applyReplacements(withFullSentences, titlePhraseMap[lang] ?? []);
  return applyReplacements(withTitles, shortPhrases);
}

export function translateProductText(text: string, lang: Language) {
  return translateText(text, lang);
}

export function translateCategoryLabel(category: string, lang: Language) {
  return categoryLabelMap[lang]?.[category] ?? categoryLabelMap.en?.[category] ?? category;
}

export function resolveProductText(productId: string, category: string, lang: Language): TranslatedProductText | null {
  const source = baseProductContent[productId] ?? importedContent[productId];
  if (!source) return null;

  const canonical = lang === 'zh' ? source.zh : source.en;
  if (lang === 'en' || lang === 'zh') {
    return {
      ...canonical,
      categoryLabel: translateCategoryLabel(category, lang),
    };
  }

  return {
    title: translateText(source.en.title, lang),
    description: translateText(source.en.description, lang),
    specs: source.en.specs.map((spec) => ({
      label: translateText(spec.label, lang),
      value: translateText(spec.value, lang),
    })),
    applications: source.en.applications.map((app) => translateText(app, lang)),
    categoryLabel: translateCategoryLabel(category, lang),
  };
}
