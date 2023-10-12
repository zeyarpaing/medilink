import { sitemap } from '@/lib/constants';
import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

const protectedRoutes = [/^\/app\/.*/, /\/services\/[0-9]+\/book\/[0-9]+/];
const publicRoutes = [/^\/login.*/, /^\/register.*/, /^\/forgot-password.*/];

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    if (!!token && publicRoutes.some((route) => route.test(req.nextUrl.pathname))) {
      return NextResponse.redirect(new URL(sitemap.profile.href, req.nextUrl.origin));
    }
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        return !(protectedRoutes.some((route) => route.test(req.nextUrl.pathname)) && !token);
      },
    },
  }
);

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|css/blockedPage.css|logo.svg).*)'],
};
