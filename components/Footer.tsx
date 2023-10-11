import FacebookIcon from '@/assets/icons/FacebookIcon';
import { sitemap, socialMidea } from '@/lib/constants';
import Link from 'next/link';

const navigation = [
  sitemap.healthProviders,
  sitemap.services,
  {
    label: 'Company',
    children: [sitemap.about, sitemap.faq, sitemap.contact],
  },
  {
    label: 'Policy',
    children: [sitemap.privacyPolicy, sitemap.termsAndConditions],
  },
];

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="mcontainer pt-14">
        <div className="my-8 flex items-center gap-6">
          {Object.values(socialMidea).map((media) => (
            <Link key={media.link} aria-label={`Go to ${media.label}`} href={media.link} target="_blank">
              <media.icon />
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-x-2 gap-y-7 sm:grid-cols-3 md:grid-cols-5">
          {navigation.map((nav) => (
            <div key={nav.label}>
              <h4 className="mb-4 font-bold text-primary">{nav.label}</h4>
              <ul className="grid grid-cols-1 gap-2 text-sm">
                {Object.values(nav.children)?.map((child) => (
                  <li key={child.label}>
                    <Link href={child.href}>{child.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 pb-8 text-sm sm:flex-row">
          <p>medilink &copy; 2023 All Rights Reserved</p>
          <p></p>
        </div>
      </div>
    </footer>
  );
}
