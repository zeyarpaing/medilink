// if authenticated redirect register and signin to home
// if not authenticated for /app/* redirect to signin

// next 13 middleware

import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';
// Path: app/middleware.ts
import { getServerSession } from 'next-auth';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // if authenticated redirect register and signin to home
  // if not authenticated for /app/* redirect to signin
  console.log('request %c', 'color: green; font-size: 16px;', request);
  //   const session = await getServerSession();
  //   if (request.nextUrl.pathname.startsWith('/app') && !session?.user) {
  //     return NextResponse.redirect(new URL('/signin', request.url));
  //   }
  //   if (request.nextUrl.pathname.startsWith('/signin') && session?.user) {
  //     return NextResponse.redirect(new URL('/home', request.url));
  //   }
  // return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
