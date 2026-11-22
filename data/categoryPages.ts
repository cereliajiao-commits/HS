export type CategoryPage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  faq: Array<{ question: string; answer: string }>;
};

const fitmentQuestion = 'How should buyers verify fitment before ordering?';
const fitmentAnswer = 'Confirm the OEM/OE number, vehicle brand and model, axle or bridge type, position, dimensions and mounting pattern. Send a photo or drawing when the application is uncertain.';

export const categoryPages: CategoryPage[] = [
  {
    slug: 'steering-arm',
    name: 'Steering Arms',
    title: 'Truck Steering Arms Manufacturer | HONGSHENG',
    description: 'Heavy-duty truck steering arms and steering lever arms for HOWO, SHACMAN, FAW, Dongfeng and other commercial vehicle applications.',
    intro: 'HONGSHENG supplies forged and machined steering arms for heavy-duty truck steering linkage systems. Use the OEM/OE number and vehicle application on each product page to confirm fitment.',
    faq: [
      { question: 'What is a truck steering arm?', answer: 'A steering arm transfers steering motion from the steering knuckle or steering linkage to the wheel-end assembly. The correct arm depends on the axle, geometry, side and OEM number.' },
      { question: 'Can HONGSHENG manufacture steering arms to a drawing?', answer: 'Yes. HONGSHENG supports OEM/ODM production, product marking and custom manufacturing from drawings or samples, subject to technical review.' },
      { question: fitmentQuestion, answer: fitmentAnswer },
    ],
  },
  {
    slug: 'tie-rod',
    name: 'Tie Rods and Drag Links',
    title: 'Truck Tie Rods and Drag Links | OEM Supplier',
    description: 'Heavy-duty truck tie rods, drag links and transverse steering rod assemblies with OEM/OE references for HOWO, SHACMAN and FAW applications.',
    intro: 'Browse steering tie rods, drag links and transverse rod assemblies by truck brand, application and OEM/OE reference. Confirm dimensions and axle type before ordering.',
    faq: [
      { question: 'What is the difference between a tie rod and a drag link?', answer: 'Both are steering linkage components, but their position and geometry differ by steering system. Use the product application and OEM/OE reference rather than the name alone to confirm the correct part.' },
      { question: 'Do tie rod products include the rod ends?', answer: 'Product configuration varies. Check the product image, specifications and application notes for whether the assembly includes rod ends or other fittings.' },
      { question: fitmentQuestion, answer: fitmentAnswer },
    ],
  },
  {
    slug: 'steering-knuckle',
    name: 'Steering Knuckles',
    title: 'Truck Steering Knuckles Manufacturer | OEM Replacement',
    description: 'Forged truck steering knuckles and front axle knuckle assemblies for heavy-duty commercial vehicle applications.',
    intro: 'Find steering knuckles by OEM/OE number, truck platform and axle application. Product pages show the available reference numbers, images and inquiry route.',
    faq: [
      { question: 'What information is needed to match a steering knuckle?', answer: 'Provide the OEM/OE number, axle or bridge model, left/right position, brake configuration, kingpin details and a clear product photo when available.' },
      { question: 'Are steering knuckles available as custom parts?', answer: 'HONGSHENG can review drawings, samples and technical requirements for OEM/ODM steering knuckle projects.' },
      { question: fitmentQuestion, answer: fitmentAnswer },
    ],
  },
  {
    slug: 'shaft',
    name: 'Drive Shafts',
    title: 'Heavy-Duty Truck Drive Shafts | OEM Manufacturer',
    description: 'Drive shaft assemblies for SINOTRUK, HOWO, SHACMAN, Dongfeng, Auman and other heavy-duty truck platforms.',
    intro: 'HONGSHENG drive shaft listings cover commercial truck drivetrain applications and OEM/OE cross references. Verify length, flange, spline and joint details before ordering.',
    faq: [
      { question: 'Which drive shaft details should be confirmed?', answer: 'Confirm overall length, flange pattern, spline count, tube diameter, universal joint type, vehicle model and OEM/OE reference.' },
      { question: 'Can you supply drive shafts for fleet replacement?', answer: 'Yes. Send the application, OEM/OE number, quantity and technical dimensions so sales can confirm production and quotation requirements.' },
      { question: fitmentQuestion, answer: fitmentAnswer },
    ],
  },
  {
    slug: 'torque-rod',
    name: 'Torque Rods and Thrust Rods',
    title: 'Truck Torque Rods and Thrust Rods | OEM Supplier',
    description: 'Heavy-duty truck torque rods, thrust rods and suspension linkage assemblies for commercial vehicle axles.',
    intro: 'Browse torque rods and thrust rods for heavy-duty truck suspension and axle systems, with application and OEM/OE information for replacement sourcing.',
    faq: [
      { question: 'What does a torque rod do on a truck?', answer: 'A torque rod controls axle movement and transfers suspension forces between the axle and chassis. Correct length, bushing configuration and mounting geometry are essential.' },
      { question: 'Can torque rods be supplied with different bushings?', answer: 'Configuration depends on the product and project. Confirm bushing type, center distance, tube size and mounting details with sales.' },
      { question: fitmentQuestion, answer: fitmentAnswer },
    ],
  },
  {
    slug: 'control-arm',
    name: 'Control Arms',
    title: 'Heavy-Duty Truck Control Arms | OEM Replacement',
    description: 'Heavy-duty truck control arms and suspension linkage components for commercial vehicle applications.',
    intro: 'Use the product image, OEM/OE reference and vehicle application to identify the correct control arm for a truck suspension project.',
    faq: [
      { question: 'What should be checked before ordering a control arm?', answer: 'Check the OEM/OE number, arm shape, bushing position, mounting hole pattern, axle type and vehicle model.' },
      { question: 'Do you support custom control arm manufacturing?', answer: 'Yes. HONGSHENG can review drawings or samples for OEM/ODM control arm production.' },
      { question: fitmentQuestion, answer: fitmentAnswer },
    ],
  },
  {
    slug: 'shock-absorber',
    name: 'Shock Absorbers',
    title: 'Heavy-Duty Truck Shock Absorbers | OEM Supplier',
    description: 'Shock absorber assemblies for truck front axle, rear axle, cab and suspension applications.',
    intro: 'Find truck shock absorbers by OEM/OE reference and application. Confirm mounting type, length, position and vehicle platform before requesting a quote.',
    faq: [
      { question: 'Which shock absorber specifications matter most?', answer: 'Confirm mounting eyes or studs, compressed and extended length, installation position, damping application and OEM/OE number.' },
      { question: 'Can you quote shock absorbers for a fleet?', answer: 'Yes. Provide vehicle models, OEM/OE numbers, quantity and destination market for a project quotation.' },
      { question: fitmentQuestion, answer: fitmentAnswer },
    ],
  },
  {
    slug: 'air-spring',
    name: 'Air Spring Shock Absorbers',
    title: 'Truck Air Spring and Shock Absorber Assemblies | OEM',
    description: 'Air spring and shock absorber assemblies for heavy-duty truck cab and suspension support systems.',
    intro: 'Browse air spring shock absorber assemblies with OEM/OE references for truck suspension and cab support applications.',
    faq: [
      { question: 'Where are air spring shock absorber assemblies used?', answer: 'They are used in selected truck suspension, cab support and axle support applications. Always verify the vehicle platform and mounting configuration.' },
      { question: 'What should be provided for an air spring quotation?', answer: 'Provide the OEM/OE number, vehicle model, position, assembly photo, quantity and any required packaging or marking.' },
      { question: fitmentQuestion, answer: fitmentAnswer },
    ],
  },
  {
    slug: 'differential',
    name: 'Differential Assemblies',
    title: 'Truck Differential Assemblies | OEM Replacement',
    description: 'Heavy-duty truck differential assemblies and axle drivetrain components with OEM/OE reference support.',
    intro: 'Use OEM/OE references and axle application details to identify truck differential assemblies for replacement and fleet maintenance.',
    faq: [
      { question: 'What differential details must be confirmed?', answer: 'Confirm axle model, gear ratio, differential type, carrier configuration, OEM/OE number and vehicle application.' },
      { question: 'Can HONGSHENG support differential projects?', answer: 'Yes. Share the technical specification, sample or drawing for an OEM/ODM project review and quotation.' },
      { question: fitmentQuestion, answer: fitmentAnswer },
    ],
  },
  {
    slug: 'agricultural',
    name: 'Agricultural Machinery Parts',
    title: 'Agricultural Machinery Parts Manufacturer | OEM',
    description: 'Agricultural machinery and tractor parts for steering, axle, suspension and linkage applications.',
    intro: 'HONGSHENG supplies agricultural machinery components and tractor parts with model and OEM/OE reference information where available.',
    faq: [
      { question: 'Which agricultural machinery parts do you supply?', answer: 'The catalog includes selected tractor and agricultural machinery steering, axle, suspension and linkage components.' },
      { question: 'Can tractor parts be made from a sample?', answer: 'Yes. Drawings, samples, photos and key dimensions can be reviewed for an OEM/ODM production project.' },
      { question: fitmentQuestion, answer: fitmentAnswer },
    ],
  },
  {
    slug: 'john-deere',
    name: 'John Deere Parts',
    title: 'John Deere Tractor Parts | OEM Replacement Supplier',
    description: 'John Deere tractor axle, shaft and suspension components with OEM reference support for replacement sourcing.',
    intro: 'Browse selected John Deere tractor parts by OEM/OE reference and model application. Confirm the tractor series and component dimensions before ordering.',
    faq: [
      { question: 'How can I match a John Deere replacement part?', answer: 'Send the John Deere OEM/OE number, tractor model, component photo and quantity. HONGSHENG can check the catalog reference and application.' },
      { question: 'Do you support private-label agricultural parts?', answer: 'Yes. OEM packaging, marking and custom production can be discussed for qualified projects.' },
      { question: fitmentQuestion, answer: fitmentAnswer },
    ],
  },
];

export const categoryPageMap = Object.fromEntries(categoryPages.map((page) => [page.slug, page])) as Record<string, CategoryPage>;
