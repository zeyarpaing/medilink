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
        <aside className="h-[calc(100vh-4.05rem)] w-full max-w-xs border-r border-r-foreground/20 bg-background shadow-md">
          <ul className="flex flex-col p-4">
            {status === 'loading' ? (
              <>
                {Array.from({ length: 5 }).map((_, i) => (
                  <li className="flex w-full items-center gap-3 rounded-lg px-4 py-4 text-gray-600" key={i}>
                    <Skeleton className="h-7 w-7 rounded-full" />
                    <Skeleton className="h-6 w-36 rounded-lg" />
                  </li>
                ))}
              </>
            ) : (
              routes.map((route) => (
                <li className="" key={route.href}>
                  <Link
                    className={`flex w-full items-center gap-3 rounded-lg ${
                      pathname.includes(route.href) ? ' bg-primary text-white' : 'text-foreground/70'
                    } px-4 py-3 `}
                    href={route.href}
                  >
                    {'icon' in route && <route.icon className="h-7 w-7" />}
                    <span className="text-sm font-bold">{route.label}</span>
                  </Link>
                </li>
              ))
            )}
          </ul>
        </aside>
        <section className="h-[calc(100vh-4.05rem)] w-full overflow-y-auto">
          <div className="mcontainer w-full">
            <div className="px-4 py-5">{children}</div>
          </div>
        </section>
      </main>
    </>
  );
}
