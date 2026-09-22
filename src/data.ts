export type Coffee = {
  name: string;
  origin: string;
  notes: string;
  roast: string;
  price: string;
};

export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  tabLabel: string;
  items: MenuItem[];
};

export const coffees: Coffee[] = [
  {
    name: 'House Espresso',
    origin: 'Blend — Brazil & Colombia',
    notes: 'Dark chocolate / caramel / toasted almond',
    roast: 'Medium-dark',
    price: '$4.00',
  },
  {
    name: 'Ethiopia Konga',
    origin: 'Konga, Ethiopia',
    notes: 'Blueberry / jasmine / citrus',
    roast: 'Light',
    price: '$5.00',
  },
  {
    name: 'Colombia La Esperanza',
    origin: 'La Esperanza, Colombia',
    notes: 'Red apple / cocoa / brown sugar',
    roast: 'Medium',
    price: '$4.75',
  },
];

export const menuCategories: MenuCategory[] = [
  {
    id: 'espresso',
    label: 'Espresso',
    tabLabel: 'Espresso',
    items: [
      { name: 'Espresso', description: 'A double shot, pulled short and dense.', price: '$3.00' },
      { name: 'Americano', description: 'Espresso lengthened with hot water.', price: '$3.50' },
      { name: 'Cappuccino', description: 'Espresso, steamed milk, velvet foam.', price: '$4.50' },
      { name: 'Flat White', description: 'Double ristretto with silky microfoam.', price: '$4.75' },
      { name: 'Latte', description: 'Espresso and steamed milk, soft and round.', price: '$4.75' },
      { name: 'Mocha', description: 'Espresso, dark chocolate, steamed milk.', price: '$5.25' },
    ],
  },
  {
    id: 'filter',
    label: 'Filter',
    tabLabel: 'Filter',
    items: [
      { name: 'House Pour Over', description: 'Today\'s bean, brewed by the cup.', price: '$4.50' },
      { name: 'Seasonal Filter', description: 'Rotating single origin, ask the bar.', price: '$5.00' },
      { name: 'Cold Brew', description: 'Steeped 18 hours, smooth and low-acid.', price: '$4.75' },
    ],
  },
  {
    id: 'signatures',
    label: 'Signatures',
    tabLabel: 'Signatures',
    items: [
      { name: 'Brown Sugar Shaken Latte', description: 'Espresso, brown sugar syrup, shaken over ice.', price: '$5.75' },
      { name: 'Honey Cinnamon Latte', description: 'Espresso, raw honey, cinnamon, steamed milk.', price: '$5.75' },
      { name: 'Orange Espresso Tonic', description: 'Double espresso, tonic, orange peel.', price: '$5.50' },
      { name: 'Vanilla Sea Salt Cold Brew', description: 'Cold brew, vanilla syrup, sea salt finish.', price: '$5.50' },
    ],
  },
  {
    id: 'baked',
    label: 'From the Oven',
    tabLabel: 'Baked',
    items: [
      { name: 'Butter Croissant', description: 'Laminated 36 hours, baked each morning.', price: '$3.75' },
      { name: 'Almond Croissant', description: 'Butter croissant, almond cream, toasted.', price: '$4.25' },
      { name: 'Banana Bread', description: 'Toasted with cultured butter.', price: '$3.50' },
      { name: 'Cinnamon Roll', description: 'Laminated dough, cream cheese glaze.', price: '$4.00' },
      { name: 'Chocolate Cookie', description: 'Dark chocolate, sea salt, warm.', price: '$3.25' },
    ],
  },
  {
    id: 'light',
    label: 'Light Plates',
    tabLabel: 'Light Plates',
    items: [
      { name: 'Avocado Toast', description: 'Sourdough, smashed avocado, chili, lime.', price: '$8.50' },
      { name: 'Granola & Yogurt', description: 'House granola, cultured yogurt, honey.', price: '$7.00' },
      { name: 'Egg & Cheese Brioche', description: 'Fried egg, aged cheddar, brioche bun.', price: '$7.50' },
    ],
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Source',
    description: 'We work with carefully selected specialty coffee producers who share our commitment to quality and fair practice.',
  },
  {
    number: '02',
    title: 'Roast',
    description: 'Beans are roasted in small batches to preserve character and clarity, never over-roasted to hide flaws.',
  },
  {
    number: '03',
    title: 'Brew',
    description: 'Every cup is prepared with attention to temperature, timing, and extraction. No shortcuts, no autopilot.',
  },
];

export type Testimonial = {
  quote: string;
  name: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: 'Exactly the kind of café you accidentally spend three hours in.',
    name: 'Mara',
  },
  {
    quote: 'Excellent coffee without the pretension.',
    name: 'James',
  },
  {
    quote: 'The brown sugar latte is dangerously good.',
    name: 'Priya',
  },
];

export const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Coffee', href: '#coffee' },
  { label: 'Our Story', href: '#story' },
  { label: 'Visit', href: '#visit' },
] as const;

export const images = {
  hero: 'https://images.pexels.com/photos/31046284/pexels-photo-31046284.jpeg?auto=compress&cs=tinysrgb&w=1920',
  coffeeBeans: 'https://images.pexels.com/photos/20190062/pexels-photo-20190062.jpeg?auto=compress&cs=tinysrgb&w=1600',
  pourOver: 'https://images.pexels.com/photos/16364762/pexels-photo-16364762.jpeg?auto=compress&cs=tinysrgb&w=1200',
  latteArt: 'https://images.pexels.com/photos/16541078/pexels-photo-16541078.jpeg?auto=compress&cs=tinysrgb&w=1200',
  cafeInterior: 'https://images.pexels.com/photos/30294335/pexels-photo-30294335.jpeg?auto=compress&cs=tinysrgb&w=1600',
  cafeInterior2: 'https://images.pexels.com/photos/20342119/pexels-photo-20342119.jpeg?auto=compress&cs=tinysrgb&w=1200',
  barista: 'https://images.pexels.com/photos/6390818/pexels-photo-6390818.jpeg?auto=compress&cs=tinysrgb&w=1200',
  croissant: 'https://images.pexels.com/photos/20002837/pexels-photo-20002837.jpeg?auto=compress&cs=tinysrgb&w=1600',
  signature: 'https://images.pexels.com/photos/36871233/pexels-photo-36871233.jpeg?auto=compress&cs=tinysrgb&w=1600',
  espressoCup: 'https://images.pexels.com/photos/36179806/pexels-photo-36179806.jpeg?auto=compress&cs=tinysrgb&w=1200',
  cozyCafe: 'https://images.pexels.com/photos/2221925/pexels-photo-2221925.jpeg?auto=compress&cs=tinysrgb&w=1200',
  coffeeRoast: 'https://images.pexels.com/photos/4264047/pexels-photo-4264047.jpeg?auto=compress&cs=tinysrgb&w=1600',
};
