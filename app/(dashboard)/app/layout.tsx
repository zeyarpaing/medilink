'use client';
import Navbar from '@/components/Navbar';
import { sitemap } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { data } = useSession();

  const routes = Object.values(sitemap.app.children).filter(
    (route) =>
      typeof route === 'object' &&
      'role' in route &&
      Array.isArray(route?.role) &&
      route.role.includes(data?.user?.role)
  );

  const pathname = usePathname();

  return (
    <>
      <Navbar />
      <main className="flex">
        <aside className="h-[calc(100vh-4.05rem)] w-full max-w-xs border-r bg-background shadow-md">
          <ul className="flex flex-col p-4">
            {routes.map((route) => (
              <li className="" key={route.href}>
                <Link
                  className={`flex w-full items-center gap-3 rounded-lg ${
                    pathname.includes(route.href) ? ' bg-primary text-white' : 'text-gray-600'
                  } px-4 py-3 `}
                  href={route.href}
                >
                  {'icon' in route && <route.icon className="h-7 w-7" />}
                  <span className="text-sm font-bold">{route.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <section className="h-[calc(100vh-4.05rem)] w-full overflow-y-auto">
          <div className="mcontainer w-full">{children}</div>
        </section>
      </main>
    </>
  );
}
