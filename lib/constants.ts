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
        href: '/hospitals',
        label: 'Hospitals',
      },
      clinics: {
        href: '/clinics',
        label: 'Clinics',
      },
    },
    label: 'Healthcare providers',
    href: '/healthcare-providers',
  },
  services: {
    children: {
      providers: {
        href: '/providers',
        label: 'Providers',
      },
      patients: {
        href: '/patients',
        label: 'Patients',
      },
    },
    label: 'Services',
    href: '/services',
  },
  login: {
    featured: true,
    type: 'button',
    label: 'Login',
    href: '/login',
  },
  'sign-up': {
    href: '/sign-up',
    label: 'Sign up',
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
  home: {
    label: 'Home',
    href: '/',
  },
};
