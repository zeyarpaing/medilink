import Link from 'next/link';

const navigation = [
  {
    children: [
      {
        label: 'Personal insurance',
        href: '#',
      },
      {
        label: 'Business insurance',
        href: '#',
      },
    ],
    label: 'Products',
    href: '#',
  },
  {
    children: [
      {
        label: 'About us',
        href: '#',
      },
      {
        label: 'Careers',
        href: '#',
      },
      {
        label: 'Financial Information',
        href: '#',
      },
      {
        label: 'Sustainability',
        href: '#',
      },
    ],
    label: 'About us',
    href: '#',
  },
  {
    children: [
      {
        label: 'Resources',
        href: '#',
      },
      {
        label: 'Tools & Calculators',
        href: '#',
      },
      {
        label: 'Locators',
        href: '#',
      },
      {
        label: 'Forms',
        href: '#',
      },
      {
        label: 'FAQs',
        href: '#',
      },
      {
        label: 'Consumer Guides',
        href: '#',
      },
    ],
    label: 'Resources',
    href: '#',
  },
  {
    children: [
      {
        label: 'Promotions',
        href: '#',
      },
      {
        label: 'Tools & Calculators',
        href: '#',
      },
      {
        label: 'Locators',
        href: '#',
      },
      {
        label: 'Forms',
        href: '#',
      },
      {
        label: 'FAQs',
        href: '#',
      },
      {
        label: 'Consumer Guides',
        href: '#',
      },
    ],
    label: 'Promotions',
    href: '#',
  },
  {
    children: [
      {
        label: 'Submit a claim',
        href: '#',
      },
    ],
    label: 'Claims',
    href: '#',
  },
];

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="mcontainer pt-14">
        <div className="my-8 flex items-center gap-6">
          <Link aria-label="Go to facebook" href="https://facebook.com" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 27" fill="none" height="27" width="28">
              <path
                d="M15.5902 23.4356V14.2877H18.6764L19.1351 10.706H15.5902V8.42457C15.5902 7.39102 15.8782 6.68338 17.3616 6.68338H19.2412V3.49008C18.3266 3.39208 17.4074 3.34475 16.4876 3.34833C13.7598 3.34833 11.8869 5.01363 11.8869 8.07076V10.6993H8.8208V14.281H11.8936V23.4356H15.5902Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link aria-label="Go to linkedin" href="https://linkedin.com" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 27" fill="none" height="27" width="28">
              <path
                d="M8.17089 5.58058C8.17059 6.17262 7.93512 6.7403 7.51628 7.15872C7.09743 7.57715 6.52952 7.81206 5.93748 7.81176C5.34544 7.81146 4.77776 7.57599 4.35933 7.15715C3.94091 6.7383 3.706 6.17039 3.7063 5.57835C3.7066 4.98631 3.94207 4.41863 4.36091 4.0002C4.77976 3.58178 5.34767 3.34687 5.93971 3.34717C6.53175 3.34746 7.09943 3.58294 7.51786 4.00178C7.93628 4.42063 8.17119 4.98854 8.17089 5.58058ZM8.23786 9.46477H3.77327V23.4389H8.23786V9.46477ZM15.2919 9.46477H10.8496V23.4389H15.2473V16.1059C15.2473 12.0208 20.5713 11.6413 20.5713 16.1059V23.4389H24.9801V14.5879C24.9801 7.70126 17.1001 7.95798 15.2473 11.3399L15.2919 9.46477Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link aria-label="Go to instagram" href="https://instagram.com" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27" fill="none" height="27" width="27">
              <path
                d="M8.91836 2.23218H18.294C21.8657 2.23218 24.7677 5.13416 24.7677 8.70584V18.0815C24.7677 19.7984 24.0856 21.445 22.8716 22.659C21.6575 23.8731 20.0109 24.5551 18.294 24.5551H8.91836C5.34669 24.5551 2.4447 21.6532 2.4447 18.0815V8.70584C2.4447 6.98892 3.12675 5.34231 4.34079 4.12827C5.55484 2.91422 7.20144 2.23218 8.91836 2.23218ZM8.69513 4.46447C7.62946 4.46447 6.60743 4.88781 5.85388 5.64136C5.10034 6.3949 4.677 7.41693 4.677 8.48261V18.3047C4.677 20.5258 6.474 22.3228 8.69513 22.3228H18.5172C19.5829 22.3228 20.6049 21.8995 21.3585 21.146C22.112 20.3924 22.5354 19.3704 22.5354 18.3047V8.48261C22.5354 6.26147 20.7384 4.46447 18.5172 4.46447H8.69513ZM19.466 6.1387C19.836 6.1387 20.1909 6.28569 20.4525 6.54734C20.7142 6.80898 20.8611 7.16385 20.8611 7.53388C20.8611 7.90391 20.7142 8.25878 20.4525 8.52043C20.1909 8.78207 19.836 8.92907 19.466 8.92907C19.0959 8.92907 18.7411 8.78207 18.4794 8.52043C18.2178 8.25878 18.0708 7.90391 18.0708 7.53388C18.0708 7.16385 18.2178 6.80898 18.4794 6.54734C18.7411 6.28569 19.0959 6.1387 19.466 6.1387ZM13.6062 7.81292C15.0863 7.81292 16.5058 8.40089 17.5524 9.44748C18.599 10.4941 19.1869 11.9136 19.1869 13.3937C19.1869 14.8738 18.599 16.2932 17.5524 17.3398C16.5058 18.3864 15.0863 18.9744 13.6062 18.9744C12.1261 18.9744 10.7066 18.3864 9.66 17.3398C8.61341 16.2932 8.02544 14.8738 8.02544 13.3937C8.02544 11.9136 8.61341 10.4941 9.66 9.44748C10.7066 8.40089 12.1261 7.81292 13.6062 7.81292ZM13.6062 10.0452C12.7181 10.0452 11.8664 10.398 11.2385 11.0259C10.6105 11.6539 10.2577 12.5056 10.2577 13.3937C10.2577 14.2817 10.6105 15.1334 11.2385 15.7614C11.8664 16.3893 12.7181 16.7421 13.6062 16.7421C14.4942 16.7421 15.3459 16.3893 15.9739 15.7614C16.6018 15.1334 16.9546 14.2817 16.9546 13.3937C16.9546 12.5056 16.6018 11.6539 15.9739 11.0259C15.3459 10.398 14.4942 10.0452 13.6062 10.0452Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-2 gap-y-7 sm:grid-cols-3 md:grid-cols-5">
          {navigation.map((nav) => (
            <div key={nav.label}>
              <h4 className="mb-4 font-bold text-primary">{nav.label}</h4>
              <ul className="grid grid-cols-1 gap-2 text-sm">
                {nav.children?.map((child) => (
                  <li key={child.label}>
                    <Link href={child.href}>{child.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 pb-8 text-sm sm:flex-row">
          <p>&copy; 2023 All Rights Reserved</p>
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link href="#">Sitemap</Link>
            </li>
            <li>
              <Link href="#">FAQs</Link>
            </li>
            <li>
              <Link href="#">Contact us</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms and Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
