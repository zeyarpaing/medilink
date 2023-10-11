import FacebookIcon from '@/assets/icons/FacebookIcon';
import InstagramIcon from '@/assets/icons/InstagramIcon';
import LinkedinIcon from '@/assets/icons/LinkedinIcon';

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
  privacyPolicy: {
    label: 'Privacy policy',
    href: '/privacy-policy',
  },
  termsAndConditions: {
    label: 'Terms and conditions',
    href: '/terms-and-conditions',
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
    content: `Medilink has transformed the way I book healthcare appointments. It's so convenient and user-friendly. I can easily find a doctor's availability and book an appointment that suits me. It's been a game-changer for me!`,
    author: 'Sarah Johnson',
  },
  {
    content: `I've been a healthcare provider for years, and Medilink has made my life so much easier. Managing my schedule and appointments is a breeze now. Plus, the reports help me improve my services. Highly recommended!`,
    author: 'John Smith',
  },
  {
    content: `As a patient, Medilink has saved me time and hassle. No more crowded waiting rooms or endless phone calls. I can check my doctor's availability and book an appointment on the go. It's a fantastic service!`,
    author: 'Emily Davis',
  },
  {
    content: `Medilink's patient management system has been a game-changer for our clinic. It's user-friendly and efficient. Our patients love the flexibility, and we've seen an improvement in our overall service quality.`,
    author: 'David Wilson',
  },
  {
    content: `Medilink has made a real difference in how we provide healthcare. The ability to customize schedules and see real-time bookings is invaluable. The reports are a bonus for assessing our performance. Great product!`,
    author: 'Lisa Roberts',
  },
  {
    content: `Medilink's patient management system has been a game-changer for our clinic. It's user-friendly and efficient. Our patients love the flexibility, and we've seen an improvement in our overall service quality.`,
    author: 'David Wilson',
  },
  {
    content: `Medilink has transformed the way I book healthcare appointments. It's so convenient and user-friendly. I can easily find a doctor's availability and book an appointment that suits me. It's been a game-changer for me!`,
    author: 'Sarah Johnson',
  },
  {
    content: `I've been a healthcare provider for years, and Medilink has made my life so much easier. Managing my schedule and appointments is a breeze now. Plus, the reports help me improve my services. Highly recommended!`,
    author: 'John Smith',
  },
  {
    content: `As a patient, Medilink has saved me time and hassle. No more crowded waiting rooms or endless phone calls. I can check my doctor's availability and book an appointment on the go. It's a fantastic service!`,
    author: 'Emily Davis',
  },
];

export const topFAQs: Array<{
  question: string;
  answer: string;
}> = [
  {
    answer: `Medilink is accessible through a web server and a dedicated mobile app for patients. Healthcare providers, doctors, and clinics can log in using provided credentials to manage their services and schedules.`,
    question: 'How can I access Medilink?',
  },
  {
    answer: `Yes, Medilink allows patients to update or cancel their appointments based on certain conditions. You can conveniently manage your bookings through the system.`,
    question: 'Can I change or cancel my appointment using Medilink?',
  },
  {
    answer: `Medilink helps doctors prevent overcrowding by allowing them to specify the maximum number of patients for a particular schedule. Once a schedule is fully booked, patients cannot book additional slots, ensuring a smoother patient flow.`,
    question: 'How does Medilink prevent overcrowding of appointments?',
  },
  {
    answer: `Absolutely, healthcare providers can create and manage various healthcare services, including health checks, general treatments, dental services, and more. Medilink offers the flexibility to customize services to meet specific needs.`,
    question: 'Can healthcare providers create specialized services with Medilink?',
  },
  {
    answer: `Medilink provides reports, including service sales reports, doctor performance reports, and revenue reports, which healthcare providers can review to enhance their services and make informed decisions for their practices.`,
    question: 'How can Medilink reports benefit healthcare providers?',
  },
];

export const phoneNumber = '+959 12345678';

export const address = 'No. 18, Bogyoke Street, Yangon, Myanmar';
export const socialMidea = {
  facebook: {
    icon: FacebookIcon,
    label: 'medilink',
    link: 'https://facebook.com/medilink',
  },
  linkedIn: {
    icon: LinkedinIcon,
    label: 'medilink',
    link: 'https://linkedin.com/medilink',
  },
  instagram: {
    icon: InstagramIcon,
    label: '@medilink',
    link: 'https://instagram.com/@medilink',
  },
};
