import { sitemap } from '@/lib/constants';
import { Role } from '@prisma/client';
import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

const protectedRoutes = [/^\/app\/.*/, /\/services\/[0-9]+\/book\/[0-9]+/];
const publicRoutes = [/^\/login.*/, /^\/register.*/, /^\/forgot-password.*/];

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    if (!!token && publicRoutes.some((route) => route.test(path))) {
      return NextResponse.redirect(new URL(sitemap.profile.href, req.nextUrl.origin));
    }
    if (path.startsWith('/app')) {
      const route = Object.values(sitemap.app.children).find((route) => route.href === path);
      if (!!route && !(route?.role as unknown as Role[])?.includes(token?.user?.role as Role)) {
        return NextResponse.rewrite(new URL('/app', req.nextUrl.origin));
      }
    }
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        return !(protectedRoutes.some((route) => route.test(req.nextUrl.pathname)) && !token);
      },
    },
  },
);

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|css/blockedPage.css|logo.svg).*)'],
};
