export const sitemap: Record<
  string,
  {
    children?: Record<string, { label: string; href: string }>;
    featured?: boolean;
    type?: 'button';
    label: string;
    href: string;
  }
> = {
  healthProviders: {
    children: {
      hospitals: {
        href: '/providers/hospital',
        label: 'Hospitals',
      },
      clinics: {
        href: '/providers/clinic',
        label: 'Clinics',
      },
    },
    label: 'Healthcare providers',
    href: '/providers',
  },
  services: {
    children: {
      providers: {
        href: 'services/providers',
        label: 'Providers',
      },
      patients: {
        href: '/services/patients',
        label: 'Patients',
      },
    },
    label: 'Services',
    href: '/services',
  },
  login: {
    featured: true,
    type: 'button',
    label: 'Sign in',
    href: '/signin',
  },
  'sign-up': {
    href: '/signup',
    label: 'Sign up',
    type: 'button',
  },
  signOut: {
    href: '/signout',
    label: 'Sign out',
    type: 'button',
  },
  contact: {
    href: '/contact',
    label: 'Contact',
  },
  about: {
    href: '/about',
    label: 'About',
  },
  faq: {
    href: '/faq',
    label: 'FAQ',
  },
  home: {
    label: 'Home',
    href: '/',
  },
};

export const products = [
  {
    image:
      'https://img.freepik.com/free-photo/happy-asian-young-family-having-fun-laughing-moving-into-new-home-japanese-parents-mother-father-smiling-helping-excited-little-girl-riding-sitting-cardboard-box-new-property-relocation_7861-2288.jpg?w=1380&t=st=1695970469~exp=1695971069~hmac=2f94cecdceac0b791a0aef261a282a7bec3625cc05b2f6a6e74471f146535503',
    description: 'MyTengah Family Protection Pla protects what is important to you against unexpected circumstance.',
    link: '/products/family-protection',
    name: 'Family Protection Plan',
    provider: 'MyTengah',
  },
  {
    image:
      'https://img.freepik.com/free-photo/young-couple-holding-white-miniature-house-living-room_1150-5271.jpg?w=1380&t=st=1695970778~exp=1695971378~hmac=5f2fc4820582962bb70eeeae4d2cb5261b954585e4bdeee0e968afbaaab01558',
    description:
      'MyTengah Smart-Home Protection Plan (HPP) protects what is important to you against unexpected circumstance.',
    name: 'Smart Home Protection Plan',
    link: '/products/home-protection',
    provider: 'MyTengah',
  },
  {
    image:
      'https://img.freepik.com/free-photo/lonely-accident-patients-injury-headache-woman-hospital-medical-concept_1150-21721.jpg?w=1380&t=st=1695970626~exp=1695971226~hmac=8603911a04ce44b1bb709917796c61760f3a7b7b161fce0be6d0c9e988479f9e',
    description: 'Personal Accident Plan protects what is important to you against unexpected circumstance.',
    link: '/products/personal-accident',
    name: 'Personal Accident Plan',
    provider: 'Tokio Marine',
  },
];

export const statistics = [
  {
    description: 'homes protected',
    count: '40k',
  },
  {
    description: 'homes protected',
    count: '2 million',
  },
  {
    description: 'countries',
    count: '50+',
  },
  {
    description: 'staff',
    count: '2k+',
  },
  {
    description: 'good years',
    count: '75',
  },
];

export const productHighlights = [
  {
    description: "Just pay for ONE plan and we'll have your whole family covered.",
    image: '/icons/1inall.webp',
    title: 'All-for-1',
  },
  {
    description: 'Customise your own plans with our flexible add-on benefits.',
    image: '/icons/flexible.webp',
    title: 'Flexible benefits',
  },
  {
    description: 'Fuss-free application with no medical check-up required.',
    image: '/icons/nocheckup.webp',
    title: 'No medical check-up',
  },
];

export const testimonials = [
  {
    content:
      'What made your experience great? What is this company doing well? Remember to be honest, helpful, and constructive! :) Keep the rewards coming!! :)',
    title: 'What made your experience great',
    author: 'WINSTON CH ONG',
  },
  {
    content:
      'Aisyah, from the customer engagement team, was pleasant and helpful. She took initiative in calling back and updating my queries promptly. A good job is done, Aisyah! Greatly appreciated!',
    title: 'Pleasant encounter with Aisyah',
    author: 'Nancy Lim',
  },
  {
    content:
      'Aisyah, from the customer engagement team, was pleasant and helpful. She took initiative in calling back and updating my queries promptly. A good job is done, Aisyah! Greatly appreciated!',
    title: 'Pleasant encounter with Aisyah',
    author: 'Nancy Lim',
  },
  {
    content:
      'What made your experience great? What is this company doing well? Remember to be honest, helpful, and constructive! :) Keep the rewards coming!! :)',
    title: 'What made your experience great',
    author: 'WINSTON CH ONG',
  },
  {
    content:
      'Aisyah, from the customer engagement team, was pleasant and helpful. She took initiative in calling back and updating my queries promptly. A good job is done, Aisyah! Greatly appreciated!',
    title: 'Pleasant encounter with Aisyah',
    author: 'Nancy Lim',
  },
  {
    content:
      'Aisyah, from the customer engagement team, was pleasant and helpful. She took initiative in calling back and updating my queries promptly. A good job is done, Aisyah! Greatly appreciated!',
    title: 'Pleasant encounter with Aisyah',
    author: 'Nancy Lim',
  },
  {
    content:
      'What made your experience great? What is this company doing well? Remember to be honest, helpful, and constructive! :) Keep the rewards coming!! :)',
    title: 'What made your experience great',
    author: 'WINSTON CH ONG',
  },
  {
    content:
      'Aisyah, from the customer engagement team, was pleasant and helpful. She took initiative in calling back and updating my queries promptly. A good job is done, Aisyah! Greatly appreciated!',
    title: 'Pleasant encounter with Aisyah',
    author: 'Nancy Lim',
  },
  {
    content:
      'Aisyah, from the customer engagement team, was pleasant and helpful. She took initiative in calling back and updating my queries promptly. A good job is done, Aisyah! Greatly appreciated!',
    title: 'Pleasant encounter with Aisyah',
    author: 'Nancy Lim',
  },
  {
    content:
      'What made your experience great? What is this company doing well? Remember to be honest, helpful, and constructive! :) Keep the rewards coming!! :)',
    title: 'What made your experience great',
    author: 'WINSTON CH ONG',
  },
  {
    content:
      'Aisyah, from the customer engagement team, was pleasant and helpful. She took initiative in calling back and updating my queries promptly. A good job is done, Aisyah! Greatly appreciated!',
    title: 'Pleasant encounter with Aisyah',
    author: 'Nancy Lim',
  },
  {
    content:
      'Aisyah, from the customer engagement team, was pleasant and helpful. She took initiative in calling back and updating my queries promptly. A good job is done, Aisyah! Greatly appreciated!',
    title: 'Pleasant encounter with Aisyah',
    author: 'Nancy Lim',
  },
];

export const phoneNumber = '+6512345678';
