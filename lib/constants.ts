import BookingIcon from '@/assets/icons/BookingIcon';
import FacebookIcon from '@/assets/icons/FacebookIcon';
import FirstAidIcon from '@/assets/icons/FirstAidIcon';
import HospitalIcon from '@/assets/icons/HospitalIcon';
import InstagramIcon from '@/assets/icons/InstagramIcon';
import LinkedinIcon from '@/assets/icons/LinkedinIcon';
import PieChartIcon from '@/assets/icons/PieChartIcon';
import ProfileIcon from '@/assets/icons/ProfileIcon';
import ScheduleIcon from '@/assets/icons/ScheduleIcon';
import ServiceIcon from '@/assets/icons/ServiceIcon';
import SettingIcon from '@/assets/icons/SettingIcon';

export const sitemap = {
  about: {
    href: '/about',
    label: 'About',
  },
  app: {
    children: {
      booking: {
        href: '/app/booking',
        icon: BookingIcon,
        label: 'Bookings',
        role: ['USER', 'DOCTOR'],
      },
      provider: {
        href: '/app/provider',
        icon: HospitalIcon,
        label: 'Provider',
        role: ['ADMIN'],
      },
      service: {
        href: '/app/service',
        icon: ServiceIcon,
        label: 'Service',
        role: ['ADMIN'],
      },
      // eslint-disable-next-line
      schedule: {
        href: '/app/schedule',
        icon: ScheduleIcon,
        label: 'Schedule',
        role: ['DOCTOR', 'ADMIN'],
      },
      // eslint-disable-next-line
      report: {
        href: '/app/report',
        icon: PieChartIcon,
        label: 'Report',
        role: ['ADMIN'],
      },
      // eslint-disable-next-line
      profile: {
        href: '/app/profile',
        icon: ProfileIcon,
        label: 'Profile',
        role: ['USER', 'DOCTOR', 'ADMIN'],
      },
      settings: {
        href: '/app/setting',
        icon: SettingIcon,
        label: 'Setting',
        role: ['USER', 'DOCTOR', 'ADMIN'],
      },
    },
    href: '/app',
    label: 'App',
  },
  contact: {
    href: '/contact',
    label: 'Contact',
  },
  dashboard: {
    featured: true,
    href: '/app',
    label: 'Dashboard',
    type: 'button',
  },
  faq: {
    href: '/faq',
    label: 'FAQ',
  },
  healthProviders: {
    children: {
      clinics: {
        href: '/providers?type=clinic',
        label: 'Clinics',
      },
      hospitals: {
        href: '/providers?type=hospital',
        label: 'Hospitals',
      },
    },
    href: '/providers',
    label: 'Healthcare providers',
  },
  home: {
    href: '/',
    label: 'Home',
  },
  login: {
    featured: true,
    href: '/login',
    label: 'Login',
    type: 'button',
  },
  logout: {
    href: '/signout',
    label: 'Sign out',
    type: 'button',
  },
  myBooking: {
    featured: true,
    href: '/app/booking',
    label: 'My bookings',
    type: 'button',
  },

  privacyPolicy: {
    href: '/privacy-policy',
    label: 'Privacy policy',
  },
  profile: {
    href: '/app/profile',
    label: 'Profile',
  },
  register: {
    href: '/register',
    label: 'Register',
    type: 'button',
  },
  services: {
    children: {
      patients: {
        href: '/services/patients',
        label: 'Patients',
      },
      providers: {
        href: 'services/providers',
        label: 'Providers',
      },
    },
    href: '/services',
    label: 'Services',
  },
  termsAndConditions: {
    href: '/terms-and-conditions',
    label: 'Terms and conditions',
  },
} as const;

export const testimonials = [
  {
    author: 'Sarah Johnson',
    content: `Medilink has transformed the way I book healthcare appointments. It's so convenient and user-friendly. I can easily find a doctor's availability and book an appointment that suits me. It's been a game-changer for me!`,
  },
  {
    author: 'John Smith',
    content: `I've been a healthcare provider for years, and Medilink has made my life so much easier. Managing my schedule and appointments is a breeze now. Plus, the reports help me improve my services. Highly recommended!`,
  },
  {
    author: 'Emily Davis',
    content: `As a patient, Medilink has saved me time and hassle. No more crowded waiting rooms or endless phone calls. I can check my doctor's availability and book an appointment on the go. It's a fantastic service!`,
  },
  {
    author: 'David Wilson',
    content: `Medilink's patient management system has been a game-changer for our clinic. It's user-friendly and efficient. Our patients love the flexibility, and we've seen an improvement in our overall service quality.`,
  },
  {
    author: 'Lisa Roberts',
    content: `Medilink has made a real difference in how we provide healthcare. The ability to customize schedules and see real-time bookings is invaluable. The reports are a bonus for assessing our performance. Great product!`,
  },
  {
    author: 'David Wilson',
    content: `Medilink's patient management system has been a game-changer for our clinic. It's user-friendly and efficient. Our patients love the flexibility, and we've seen an improvement in our overall service quality.`,
  },
  {
    author: 'Sarah Johnson',
    content: `Medilink has transformed the way I book healthcare appointments. It's so convenient and user-friendly. I can easily find a doctor's availability and book an appointment that suits me. It's been a game-changer for me!`,
  },
  {
    author: 'John Smith',
    content: `I've been a healthcare provider for years, and Medilink has made my life so much easier. Managing my schedule and appointments is a breeze now. Plus, the reports help me improve my services. Highly recommended!`,
  },
  {
    author: 'Emily Davis',
    content: `As a patient, Medilink has saved me time and hassle. No more crowded waiting rooms or endless phone calls. I can check my doctor's availability and book an appointment on the go. It's a fantastic service!`,
  },
];

export const topFAQs: Array<{
  answer: string;
  question: string;
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
  instagram: {
    icon: InstagramIcon,
    label: '@medilink',
    link: 'https://instagram.com/@medilink',
  },
  linkedIn: {
    icon: LinkedinIcon,
    label: 'medilink',
    link: 'https://linkedin.com/medilink',
  },
};
