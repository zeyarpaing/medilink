'use client';
import Navbar from '@/components/Navbar';
import { sitemap } from '@/lib/constants';
import { Skeleton } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
  const { data, status } = useSession();
  const pathname = usePathname();

  const routes = Object.values(sitemap.app.children).filter(
    (route) =>
      typeof route === 'object' &&
      'role' in route &&
      Array.isArray(route?.role) &&
      route.role.includes(data?.user?.role),
  );

  return (
    <>
      <Navbar isApp />
      <main className="flex">
        <aside className="h-[calc(100vh-4.05rem)] w-fit border-r border-r-foreground/20 bg-background shadow-md md:w-full md:max-w-xs">
          <ul className="flex flex-col p-2 md:p-4">
            {status === 'loading' ? (
              <>
                {Array.from({ length: 5 }).map((_, i) => (
                  <li className="flex w-full items-center gap-3 rounded-lg p-2 text-gray-600 md:p-4" key={i}>
                    <Skeleton className="h-6 w-6 rounded-full md:h-7 md:w-7" />
                    <Skeleton className="hidden h-6 w-36 rounded-lg md:block" />
                  </li>
                ))}
              </>
            ) : (
              routes.map((route) => (
                <li className="" key={route.href}>
                  <Link
                    aria-label={route.label}
                    className={`flex w-full items-center gap-3 rounded-lg ${
                      pathname.includes(route.href) ? ' bg-primary text-white' : 'text-foreground/70'
                    } px-3 py-2.5 md:px-4 md:py-3 `}
                    href={route.href}
                    title={route.label}
                  >
                    {'icon' in route && <route.icon className="h-6 w-6 md:h-7 md:w-7" />}
                    <span className="hidden text-sm font-bold md:inline">{route.label}</span>
                  </Link>
                </li>
              ))
            )}
          </ul>
        </aside>
        <section className="h-[calc(100vh-4.05rem)] w-full overflow-y-auto">
          <div className="mcontainer w-full !max-w-screen-xl">
            <div className="px-1 py-3 md:px-4 md:py-5">{children}</div>
          </div>
        </section>
      </main>
    </>
  );
}
